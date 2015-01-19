(ns openthink.views.activity
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [<! >! put! take! chan]]
            [ajax.core :refer [GET POST]]
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]
            [openthink.cursors :as curs]
            [openthink.utils :as util]))

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
              (util/render-text (:body comment))]]))))

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
               [:a {:href (str "/post/" (:id post))} (:title post)])
             [:span {:className "link-action-datebit"}
              (str " at " (util/date (:time_linked rel)))]]))))


(defn comment-form [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:comment-chan (chan) :body ""})
    om/IWillMount
    (will-mount [_]
      (let [comment-chan (om/get-state owner :comment-chan)]
        (go (while true
              (<! comment-chan)
              (println "making comment")
              (POST (str "/post/" (:current_post data) "/comment")
                    {:response-format :transit
                     :params {"body" (om/get-state owner :body)}
                     :handler (fn [resp]
                                (println "comment-form returned")
                                (println resp)
                                (let [resp (clojure.walk/keywordize-keys resp)]
                                  (when-not (contains? resp :error)
                                    (om/transact! data #(merge % resp)))))})))))
    om/IRender
    (render [this]
      (html [:form {:onSubmit (fn [e]
                                (go (>! (om/get-state owner :comment-chan) 1))
                                (.preventDefault e)
                                false)}
             [:div {:className "row"}
              [:div {:className "large-11 columns"}
               ;[:label "Submit a comment:"]
               [:textarea {:placeholder "Post a comment" :name "comment-body"
                           :value (om/get-state owner :body)
                           :onChange #(util/handle-change % owner :body)}]
               [:button {:type "submit" :className "button tiny"} "comment"]]]]))))


(defn actions-view [data owner]
  (reify
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
                  (for [[action-type action] (map list action-types actions)]
                    (if (= action-type "Comment")
                      (om/build comment-action action)
                      (om/build link-action action)))]
                 [:div "No actions yet"])])))))
