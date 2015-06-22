(ns openthink.views.modal
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]]
                   [dommy.macros :refer [sel1]])
  (:require [clojure.string :as str]
            [cljs.core.async :refer [<! >! put! take! chan]]
            [om.core :as om]
            [ajax.core :refer [GET POST]]
            [sablono.core :as html :refer-macros [html]]
            [openthink.views.auth :as auth]
            [openthink.views.editor :as editor]
            [openthink.state :refer [app-state]]
            [openthink.utils :as util]
            [openthink.cursors :as curs]))

(defn ask-for [list-of-wants params]
  (assoc params "ask_for" list-of-wants "current_post" (:id (curs/current-post))))

;; modal components and logic

(defn submit-form [data owner {:keys [close-chan] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:submit-chan (chan) :title "" :text "" :error nil :state :ready})
    om/IWillMount
    (will-mount [_]
      (let [submit-chan (util/debounce (om/get-state owner :submit-chan) 600)]
        (go (while true
              (<! submit-chan)
              (println "submitting post")
              (om/set-state! owner :state :posting)
              (om/set-state! owner :error nil)
              (POST "/submit-post"
                    {:response-format :transit
                     :params (let [params {"title" (om/get-state owner :title)
                                           "text" (om/get-state owner :text)}
                                   params (ask-for ["children" "actions"] params)]
                               (if (:reply-to data)
                                 (assoc params "parent" (:reply-to data))
                                 params))
                     :handler (fn [resp]
                                (println "submit-form returned")
                                (println resp)
                                (let [resp (clojure.walk/keywordize-keys resp)]
                                  (println resp)
                                  (om/set-state! owner :state :ready)
                                  (if (contains? resp :error)
                                    (om/set-state! owner :error (:error resp))
                                    (do (om/transact! data #(merge % resp))
                                        (put! close-chan 1)))))})))))
    om/IRender
    (render [this]
      (html [:form {:onSubmit (fn [e]
                                (go (>! (om/get-state owner :submit-chan) 1))
                                (.preventDefault e)
                                false)}
             [:div {:className "row"}
              [:div {:className "large-12 columns"}
               [:h3 "Create and link a new post:"]
               (when-let [error (om/get-state owner :error)]
                 [:div {:className "alert-box warning radius"} error])
               (when (= :posting (om/get-state owner :state))
                 [:div {:className "alert-box info radius"} "Posting... Please wait"])
               [:input {:type "text" :placeholder "optional title" :name "post-title"
                        :value (om/get-state owner :title)
                        :onChange #(util/handle-change % owner :title)}]
               (om/build editor/editor-view data
                         {:init-state
                          {:placeholder "your content goes here"
                           :on-change-fn #(util/handle-change % owner :text)}})
               [:button {:type "submit" :className "button tiny"} "create"]]]]))))

(defn link-form [data owner {:keys [close-chan] :as opts}]
  (reify
    om/IInitState
    (init-state [_]
      {:submit-chan (chan) :link "" :error nil :state :ready})
    om/IWillMount
    (will-mount [_]
      (let [submit-chan (util/debounce (om/get-state owner :submit-chan) 600)]
        (go (while true
              (<! submit-chan)
              (println "linking post")
              (om/set-state! owner :state :posting)
              (om/set-state! owner :error nil)
              (POST "/link-post"
                    {:response-format :transit
                     :params (ask-for ["children" "actions"]
                                      {"child-text" (om/get-state owner :link)
                                       "parent" (:id (curs/current-post))})
                     :handler (fn [resp]
                                (println "link-form returned")
                                (println resp)
                                (let [resp (clojure.walk/keywordize-keys resp)]
                                  (println resp)
                                  (om/set-state! owner :state :ready)
                                  (if (contains? resp :error)
                                    (om/set-state! owner :error (:error resp))
                                    (do
                                      (om/transact! data :rels #(merge % (:rels resp)))
                                      (om/transact! data :posts #(merge % (:posts resp)))
                                      (om/update! data :link_ids (:new_rel_ids resp))
                                      (put! close-chan 1)))))})))))
    om/IRender
    (render [this]
      (html [:form {:onSubmit (fn [e]
                                (go (>! (om/get-state owner :submit-chan) 1))
                                (.preventDefault e)
                                false)}
             [:div {:className "row"}
              [:div {:className "large-12 columns"}
               [:h3 "Link an existing post:"]
               (when-let [error (om/get-state owner :error)]
                 [:div {:className "alert-box warning radius"} error])
               (when (= :posting (om/get-state owner :state))
                 [:div {:className "alert-box info radius"} "Linking... Please wait"])
               [:input {:type "text" :placeholder "URL or ID to a post" :name "link-text"
                        :value (om/get-state owner :link)
                        :onChange #(util/handle-change % owner :link)}]
               [:button {:type "submit" :className "button tiny"} "link"]]]]))))

(defn post-reply-section [data owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:reply-type :post})
    om/IRender
    (render [this]
      (html (if-not (:user data)
              [:h4 "You must be logged in to submit a post. "
               [:a {:href "#"
                    :onClick #(om/update! data :modal :register)}
                "Register now"]]
              (if-not (:reply-to data)
                (om/build submit-form data)
                (let [reply-type (om/get-state owner :reply-type)]
                  [:div {:className ""}
                   [:h4 "Linking to post: "
                    [:strong (:title (curs/current-post))]
                    [:small [:a {:href "#" :onClick #(om/update! data :reply-to nil)}
                             " (cancel)"]]]
                   [:hr]
                   [:br]
                   [:dl {:className "sub-nav"}
                    [:dt "How will you reply?"]
                    [:dd {:className (if (= reply-type :post) "active" "")}
                     [:a {:href "#" :onClick #(om/set-state! owner :reply-type :post)}
                      "Create New Post"]]
                    [:dd {:className (if (= reply-type :link) "active" "")}
                     [:a {:href "#" :onClick #(om/set-state! owner :reply-type :link)}
                      "Link Existing Post"]]]
                   (let [opts {:opts {:close-chan (om/get-state owner :close-chan)}}]
                     (cond
                      (= reply-type :post) (om/build submit-form data opts)
                      (= reply-type :link) (om/build link-form data opts)))])))))))

(defn basic-modal [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:h2 "some modal txt"]))))

(def modal-map {:basic basic-modal
                :new-post post-reply-section
                :register auth/register-form})

(defn close-modal []
  (println "modal should be closing")
  (swap! app-state dissoc :modal))

(defn modal
  "reusable modal component.
  modal-view is the component that should be rendered as a modal"
  [cursor owner {:keys [modal-view]}]
  (reify
    om/IInitState
    (init-state [_]
      {:close-chan (chan)})
    om/IWillMount
    (will-mount [_]
      (let [close-chan (om/get-state owner :close-chan)]
        (go-loop []
          (let [_ (<! close-chan)]
            (close-modal)))))
    om/IDidMount
    (did-mount [_]
      (let [outside-clicks (util/listen (sel1 :.reveal-modal-bg) "click")]
        (go-loop []
          (let [_ (<! outside-clicks)]
            (close-modal)))))
    om/IRender
    (render [_]
      (html [:div
             [:div {:className "reveal-modal-bg"
                    :style #js {:display "block"}}]
             [:div {:id "myModal" :className "reveal-modal open"
                    :style #js {:visibility "visible" :display "block"
                               :top "88px" :opacity 1}}
              (om/build modal-view cursor
                        {:init-state {:close-chan
                                      (om/get-state owner :close-chan)}})]]))))
