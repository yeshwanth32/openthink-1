(ns openthink.views.links
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [<! >! put! take! chan]]
            [ajax.core :refer [GET POST]]
            [clojure.string :as str]
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]
            [openthink.cursors :as curs]
            [openthink.utils :as util]
            [openthink.state :refer [app-state]]))

(defn vote-btn [rel owner {:keys [vote-value vote-txt] :as opts}]
  (reify
    om/IRender
    (render [this]
      (html [:a
             {:href "#"
              :onClick (fn [_]
                         (POST "/vote"
                           {:response-format :transit
                            :params {"value" vote-value, "rel_id" (:id rel)}
                            :handler (fn [resp]
                                       (println resp)
                                       (let [resp (clojure.walk/keywordize-keys resp)]
                                         (when-not (contains? resp :error)
                                           (om/update! rel (:rel resp)))))})
                         false)}
             vote-txt]))))

(defn mock-link [dom-bit]
  [:div {:className "child large-12 columns"}
   [:div {:className "text-center"} dom-bit]])

(defn link-view [rel owner]
  (reify
    om/IRender
    (render [_]
      (let [link-post (curs/post-from-rel rel)]
        (html [:div {:className "child large-12 columns"}
               [:div {:className "row"}
                [:div {:className "large-2 columns"}

                 ;; vote section
                 [:div {:className "row"}
                  [:div {:className "small-4 columns" :style #js {:padding "0px"}}
                   [:div (om/build vote-btn rel {:opts {:vote-value 1 :vote-txt "▲"}
                                                 :key (str "upvote-" (:id rel))})]
                   [:div (om/build vote-btn rel {:opts {:vote-value -1 :vote-txt "▼"}
                                                 :key (str "downvote-" (:id rel))})]]
                  [:div {:className "small-8 columns" :style #js {:padding "0px"}}
                   [:h4 (or (:votecount rel) 0)]]]]

                [:div {:className "large-10 columns"}
                 [:a {:href (str "/post/" (:url link-post))}
                  [:strong {:className "child-title"} (:title link-post)]]
                 [:div (str (subs (str/replace (:body link-post) #"\\n|\n" " ") 0 80)
                            (if (> (count (:body link-post)) 80) "..." ""))]
                 [:span {:className "link-by"}
                  "linked by "
                  [:strong (get-in rel [:linked_by :username])]
                  " on "
                  (util/date (:time_linked rel))]]]])))))

(defn sort-option-attrs [sort-value selected-value]
  (let [attrs {:value sort-value}]
    (if (= sort-value selected-value)
      (assoc attrs :selected "selected")
      attrs)))

(defn links-view [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:sort-chan (chan) :load-chan (chan) :state :ready :page 0})
    om/IWillMount
    (will-mount [_]
      (let [sort-ch (om/get-state owner :sort-chan)
            load-ch (om/get-state owner :load-chan)]

        ;; handle sorting
        (go-loop []
          (let [new-sort-val (<! sort-ch)]
            (om/set-state! owner :state :sorting)
            (om/set-state! owner :page 0)
            (om/update! data :sort-value new-sort-val)
            (GET (str "/links/" (:current_post data))
                  {:response-format :transit
                   :params {"sort" new-sort-val}
                   :handler (fn [resp]
                              (println "sort returned")
                              (let [resp (clojure.walk/keywordize-keys resp)]
                                (println resp)
                                (om/set-state! owner :state :ready)
                                (when-not (contains? resp :error)
                                  (do
                                    (om/transact! data :posts #(merge % (:posts resp)))
                                    (om/transact! data :rels #(merge % (:rels resp)))
                                    (om/update! data :link_ids (:new_rel_ids resp))))))}))
                 (recur))

        ;; handle loading more posts
        (go-loop []
          (let [new-page (<! load-ch)]
            (om/set-state! owner :state :loading)
            (GET (str "/links/" (:current_post data))
                  {:response-format :transit
                   :params {"sort" (:sort-value @app-state) ;; data cursor is stale for some reason
                            "page" new-page}
                   :handler (fn [resp]
                              (println "load posts returned")
                              (let [resp (clojure.walk/keywordize-keys resp)]
                                (println resp)
                                (om/set-state! owner :state :ready)
                                (om/set-state! owner :page new-page)
                                (when-not (contains? resp :error)
                                  (do
                                    (om/transact! data :posts #(merge % (:posts resp)))
                                    (om/transact! data :rels #(merge % (:rels resp)))
                                    (om/transact! data :link_ids
                                                  #(into % (:new_rel_ids resp)))))))}))
                 (recur))))
    om/IRender
    (render [_]
      (let [link-ids (:link_ids data)
            link-rels (util/select-values (:rels data) link-ids)]
        (html [:div {:className "children-view"}
               [:div {:className "row reply-action"}
                [:button {:onClick #(do (om/update! data :reply-to (:current_post data))
                                        (om/update! data :modal :new-post))
                          :className "button expand large reply-btn"}
                 "Link new Post"]]
               (if (empty? link-rels)
                 [:div "No posts have been linked yet"]
                 [:span
                  [:div {:className "row child-sort-section"}
                   (let [sval (:sort-value data)
                         sort-ch (om/get-state owner :sort-chan)]
                     [:select {:onChange #(put! sort-ch (-> % .-target .-value))}
                      [:option (sort-option-attrs "top" sval) "Top"]
                      [:option (sort-option-attrs "new" sval) "Newest"]])]
                  (for [link link-rels]
                    [:div {:className "row"}
                     (om/build link-view link)])
                  (case (om/get-state owner :state)
                    :sorting (mock-link "Sorting...")
                    :loading (mock-link "Loading...")
                    :ready (let [page (om/get-state owner :page)]
                             (when (>= (count link-rels) (* 8 (+ page 1)))
                               (mock-link
                                [:a {:href "#"
                                     :onClick (fn [_]
                                                (put! (om/get-state owner :load-chan) (inc page))
                                                false)}
                                 "▼ Load more posts ▼"]))))])])))))

(defn links-section [data owner]
  (reify
    om/IRender
    (render [this]
            (println "links view")
      (html [:div {:className "children-section medium-5 columns"}
             (om/build links-view data)]))))
