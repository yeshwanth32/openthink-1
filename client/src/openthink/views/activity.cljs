(ns openthink.views.activity
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [<! >! put! take! chan]]
            [ajax.core :refer [GET POST]]
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]
            [markdown.core :refer [md->html]]
            [openthink.cursors :as curs]
            [openthink.utils :as util]
            [openthink.views.editor :as editor]))

(def ACTIONS-PER-PAGE 20)

(defn comment-action [comment owner]
  (reify
    om/IRender
    (render [_]
      (html [:div {:className "comment action" :id (str "comment-" (:id comment))}
             [:hr]
             [:span {:className "comment-userbit"}
              [:strong {:className "comment-user"}
               (get-in comment [:user :username])]
              [:span {:className "comment-datebit"}
               (str " | " (util/date (:time_posted comment)))]]
             [:div {:className "comment-body"}
              [:p {:dangerouslySetInnerHTML
                   #js {:__html (md->html (:body comment))}}]]]))))

(defn link-action [rel owner]
  (reify
    om/IRender
    (render [_]
      (html [:div {:className "link action" :id (str "link-" (:id rel))}
             [:hr]
             [:strong {:className "link-action-user"}
              (get-in rel [:linked_by :username])]
             " linked post "
             (let [post (curs/post-from-rel rel)]
               [:a {:href (str "/post/" (:url post))} (:title post)])
             [:span {:className "link-action-datebit"}
              (str " at " (util/date (:time_linked rel)))]]))))

(defn comment-form [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:comment-chan (chan) :text ""})
    om/IWillMount
    (will-mount [_]
      (let [comment-chan (util/debounce (om/get-state owner :comment-chan) 600)]
        (go (while true
              (<! comment-chan)
              (println "making comment")
              (POST (str "/post/" (:current_post data) "/comment")
                    {:response-format :transit
                     :params {"body" (om/get-state owner :text)}
                     :handler (fn [resp]
                                (println "comment-form returned")
                                (println resp)
                                (let [resp (clojure.walk/keywordize-keys resp)]
                                  (when-not (contains? resp :error)
                                    (om/transact! data [:comments]
                                                  #(assoc % (get-in resp [:new_comment :id])
                                                     (:new_comment resp)))
                                    (om/transact! data [:actions]
                                                  #(conj % (:new_action resp))))))})))))
    om/IRender
    (render [this]
      (html [:form {:onSubmit (fn [e]
                                (go (>! (om/get-state owner :comment-chan) 1))
                                (.preventDefault e)
                                false)}
             [:div {:className "row"}
              [:div {:className "large-11 columns"}
               ;[:label "Submit a comment:"]
               (om/build editor/editor-view data
                         {:init-state
                          {:placeholder "Post a comment"
                           :on-change-fn #(util/handle-change % owner :text)}})
               [:button {:type "submit" :className "button tiny"} "comment"]]]]))))

(defn gen-pagination-numbers [action-count cur-page]
  (let [total-pages (Math/ceil (/ action-count ACTIONS-PER-PAGE))
        pages-left (take-last 3 (range 1 (inc cur-page)))
        pages-right (take 3 (range cur-page total-pages))]
    {:total total-pages
     :pages (distinct (concat pages-left pages-right))}))

(defn actions-view [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:page-chan (chan)})
    om/IWillMount
    (will-mount [_]
      (let [page-chan (om/get-state owner :page-chan)]
        (go (while true
              (let [page (<! page-chan)]
                (println "switching to page " page )
                (GET (str "/actions/" (:current_post data))
                      {:response-format :transit
                       :params {"page" page}
                       :handler (fn [resp]
                                  (println "new page returned")
                                  (println resp)
                                  (let [resp (clojure.walk/keywordize-keys resp)]
                                    (when-not (contains? resp :error)
                                      (def r resp)
                                      (om/transact! data :rels #(merge % (:rels resp)))
                                      (om/transact! data :posts #(merge % (:posts resp)))
                                      (om/transact! data :comments #(merge % (:comments resp)))
                                      (om/update! data :page (:page resp))
                                      (om/update! data :action_count (:action_count resp))
                                      (om/update! data :actions (:actions resp)))))}))))))
    om/IRender
    (render [_]
            (println "actions view")
      (let [action-types (map #(get % 1) (:actions data))
            actions (map curs/action-cursor (:actions data))]
        (html [:div {:className "comments-view row"}
               (if (:user data)
                 (om/build comment-form data)
                 [:strong "You must be logged in to comment on a post"])
               (if-not (empty? actions)
                 [:span [:h4 "Activity:"]

                  (let [post-floor (inc (* ACTIONS-PER-PAGE (dec (:page data))))
                        post-ceil (min (:action_count data)
                                       (* ACTIONS-PER-PAGE (:page data)))]
                    [:span (str post-floor " to " post-ceil)])

                  ;; pagination
                  (let [page-ch (om/get-state owner :page-chan)
                        page-info (gen-pagination-numbers (:action_count data)
                                                          (:page data))
                        pages (:pages page-info) total (:total page-info)
                        pages (if (some #{1} pages) pages
                                (if (some #{2} pages)
                                  (conj pages 1)
                                  (conj pages nil 1)))
                        pages (if (some #{total} pages) pages
                                (if (some #{(dec total)} pages)
                                  (concat pages (list total))
                                  (concat pages (list nil total))))]
                     [:ul {:className "pagination right"}
                      (when-not (= (:page data) 1)
                        [:li {:className "arrow"}
                         [:a {:href "#"
                              :onClick #(util/put-nil! page-ch (dec (:page data)))}
                          "«"]])
                      (for [page pages]
                        (if page
                          [:li (when (= page (:page data)) {:className "current"})
                           [:a {:href "#" :onClick #(util/put-nil! page-ch page)} page]]
                          [:li {:className "unavailable"}
                           [:a {:href "#" :onClick false} "…"]]))
                      (when-not (= (:page data) total)
                        [:li {:className "arrow"}
                         [:a {:href "#"
                              :onClick #(util/put-nil! page-ch (inc (:page data)))}
                          "»"]])])

                  ;; render actions
                  (for [[action-type action] (map list action-types actions)]
                    (if (= action-type "Comment")
                      (om/build comment-action action)
                      (om/build link-action action)))]
                 [:div "No actions yet"])])))))

