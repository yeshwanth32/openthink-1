(ns openthink.views.auth
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [<! >! put! take! chan]]
            [ajax.core :refer [GET POST]]
            [clojure.string :as str]
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]
            [openthink.utils :as util]))

(defn login-form [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:post (chan) :username "" :password "" :is-posting false})
    om/IWillMount
    (will-mount [_]
      (let [post-ch (om/get-state owner :post)]
        (go-loop []
          (let [posting (<! post-ch)]
            (om/set-state! owner :is-posting true)
            (POST "/login"
              {:response-format :transit
               :params {"username" (om/get-state owner :username)
                        "password" (om/get-state owner :password)}
               :handler (fn [resp]
                          (println "login form returned")
                          (println resp)
                          (let [resp (clojure.walk/keywordize-keys resp)]
                            (println resp)
                            (if (contains? resp :error)
                              (om/set-state! owner :is-posting false)
                              (om/update! data :user resp))))}))
                 (recur))))
    om/IRender
    (render [this]
      (html (if (om/get-state owner :is-posting)
              [:li [:h4 "Logging in... Please wait."]]
              [:li {:className "login-form has-form"
                    :onKeyPress (util/do-on-enter #(put! (om/get-state owner :post) 1))}
                [:div {:className "row collapse"}
                 [:div {:className "small-3 columns"}
                  [:input {:id "login-username" :type "text"
                           :placeholder "username"
                           :value (om/get-state owner :username)
                           :onChange #(util/handle-change % owner :username)
                           }]]
                 [:div {:className "small-3 columns"}
                  [:input {:id "login-password" :type "password"
                           :placeholder "password"
                           :value (om/get-state owner :password)
                           :onChange #(util/handle-change % owner :password)
                           }]]
                 [:div {:className "small-3 columns"}
                  [:button {:type "button" :className "btn btn-info"
                            :onClick (fn [e] (put! (om/get-state owner :post) 1) false)}
                   "Login"]]
                 [:div {:className "small-3 columns inline"}
                   "or "
                   [:a {:href "#" :onClick #(om/update! data :modal :register)}
                    "Register"]]]])))))

(defn logout-button [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:button
             {:type "button"
              :onClick (fn [_]
                         (POST "/logout"
                           {:response-format :transit
                            :handler (fn [resp] (println resp) (om/update! data :user nil))}))}
             "Log out"]))))


(defn register-form [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:post (chan) :error nil :state :ready
       :username "" :email "" :password "" :r-password ""})
    om/IWillMount
    (will-mount [_]
      (let [post-ch (om/get-state owner :post)]
        (go-loop []
          (let [posting (<! post-ch)]
            (om/set-state! owner :state :posting)
            (om/set-state! owner :error nil)
            (POST "/register"
                  {:response-format :transit
                   :params {"username" (om/get-state owner :username)
                            "email" (om/get-state owner :email)
                            "password" (om/get-state owner :password)
                            "r-password" (om/get-state owner :r-password)}
                   :handler (fn [resp]
                              (println "register form returned")
                              (println resp)
                              (let [resp (clojure.walk/keywordize-keys resp)]
                                (println resp)
                                (om/set-state! owner :state :ready)
                                (if (contains? resp :error)
                                  (om/set-state! owner :error (:error resp))
                                  (do (om/update! data :user resp)
                                      (om/set-state! owner :state :completed)
                                      ;(put! (om/get-state owner :close-chan) 1)
                                    ))))}))
                 (recur))))
    om/IRender
    (render [this]
            (html (if (= :completed (om/get-state owner :state))
                    [:div {:className "row register-section"}
                     [:h3 (str "You have successfully registed as "
                               (get-in data [:user :username]))]
                     [:div {:className "large-4 columns"}
                      [:button {:type "button" :className "btn btn-info"
                                :onClick (fn [e] (put! (om/get-state owner :close-chan) 1)
                                           false)}
                       "aiight"]]]
                    [:div {:className "row register-section"
                           :onKeyPress (util/do-on-enter #(put! (om/get-state owner :post) 1))}
                     [:h3 "Register your account and start posting!"]
                     (when-let [error (om/get-state owner :error)]
                       [:div {:className "large-12 columns"}
                        [:div {:className "alert-box warning radius"} error]
                        ])
                     (when (= :posting (om/get-state owner :state))
                       [:div {:className "large-12 columns"}
                        [:div {:className "alert-box info radius"}
                         "Registering account... Please wait"]])
                     [:div {:className "large-12 columns"}
                      [:input {:id "register-username" :type "text"
                               :placeholder "username"
                               :value (om/get-state owner :username)
                               :onChange #(util/handle-change % owner :username)
                               }]]
                     [:div {:className "large-12 columns"}
                      [:input {:id "register-email" :type "text"
                               :placeholder "email"
                               :value (om/get-state owner :email)
                               :onChange #(util/handle-change % owner :email)
                               }]]
                     [:div {:className "large-12 columns"}
                      [:input {:id "register-password" :type "password"
                               :placeholder "password"
                               :value (om/get-state owner :password)
                               :onChange #(util/handle-change % owner :password)
                               }]]
                     [:div {:className "large-12 columns"}
                      [:input {:id "register-r-password" :type "password"
                               :placeholder "repeat password"
                               :value (om/get-state owner :r-password)
                               :onChange #(util/handle-change % owner :r-password)
                               }]]
                     [:div {:className "large-4 columns"}
                      [:button {:type "button" :className "btn btn-info"
                                :onClick (fn [e]
                                           (put! (om/get-state owner :post) 1)
                                           ;(put! (om/get-state owner :close-chan) 1)
                                           false)
                                }
                       "Register"]]])))))
