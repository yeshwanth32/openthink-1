(ns openthink.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]]
                   [dommy.macros :refer [node sel sel1]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [<! >! put! take! chan]]
            [cljs.reader :refer [read-string]]
            [dommy.core :as dom]
            [ajax.core :refer [GET POST]]
            [clojure.string :as str]
            [om.core :as om]
            [om.dom :as d]
            [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(println "Hello world!")

(defn handle-change [e owner field]
  (om/set-state! owner field (.. e -target -value)))

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
                  {:format :transit
                   :params {"username" (om/get-state owner :username)
                            "password" (om/get-state owner :password)}
                   :handler (fn [resp]
                              (println "login form returned"))}))
                       (recur))))
    om/IRender
    (render [this]
      (html (if (om/get-state owner :is-posting)
              [:div [:h4 nil "Logging in... Please wait."]]
              [:div {:id "login"}
                [:form {:id "login-form"}
                  [:input {:id "login-username" :type "text"
                           :placeholder "username"
                           :value (om/get-state owner :username)
                           :onChange #(handle-change % owner :username)}]
                  [:input  {:id "login-password"
                            :placeholder "password"
                            :value (om/get-state owner :password)
                            :onChange #(handle-change % owner :password)}]
                  [:button {:type "button" :className "btn btn-info"
                            :onClick (fn [e] (put!(om/get-state owner :post) 1) false)}
                    "Login"]]])))))

(defn header [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:div {:class "page-header"}
              (om/build login-form data)]))))

(def app-state (atom {}))

(defn app [data owner opts]
  (reify
    om/IRender
    (render [this]
      (html [:div {:class "row"}
              (om/build header data)]))))

(defn start [target state app]
  (om/root app state {:target target}))

(start (sel1 :#app) app-state app)

















