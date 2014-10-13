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
            [sablono.core :as html :refer-macros [html]]
            [cognitect.transit :as t]))

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
              {:response-format :transit
               :params {"username" (om/get-state owner :username)
                        "password" (om/get-state owner :password)}
               :handler (fn [resp]
                          (println "login form returned")
                          (println resp)
                          (om/update! data :user (clojure.walk/keywordize-keys resp)))}))
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
      {:post (chan) :username "" :email "" :password ""})
    om/IWillMount
    (will-mount [_]
      (let [post-ch (om/get-state owner :post)]
        (go-loop []
          (let [posting (<! post-ch)]
            (om/set-state! owner :is-posting true)
            (POST "/register"
                  {:response-format :transit
                   :params {"username" (om/get-state owner :username)
                            "email" (om/get-state owner :email)
                            "password" (om/get-state owner :password)}
                   :handler (fn [resp]
                              (println "register form returned")
                              (println resp)
                              (om/update! data :user (clojure.walk/keywordize-keys resp)))}))
                 (recur))))
    om/IRender
    (render [this]
      (html (if (om/get-state owner :is-posting)
              [:div [:h4 nil "Registering... Please wait."]]
              [:div {:id "register"}
                [:form {:id "register-form"}
                  [:input {:id "register-username" :type "text"
                           :placeholder "username"
                           :value (om/get-state owner :username)
                           :onChange #(handle-change % owner :username)}]
                 [:input {:id "register-email" :type "text"
                           :placeholder "email"
                           :value (om/get-state owner :email)
                           :onChange #(handle-change % owner :email)}]
                 [:input  {:id "register-password" :type "password"
                           :placeholder "password"
                           :value (om/get-state owner :password)
                           :onChange #(handle-change % owner :password)}]
                 [:button {:type "button" :className "btn btn-info"
                           :onClick (fn [e] (put!(om/get-state owner :post) 1) false)}
                   "Register"]]])))))

(defn user-bar [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:div (if (:user data)
                    [:div (str "logged in as " (get-in data [:user :username]))
                      [:div (om/build logout-button data)]]
                    [:div (om/build login-form data)
                          [:span " or "]
                          (om/build register-form data)])]))))

(defn header [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:div {:class "page-header"}
              (om/build user-bar data)]))))

(defn unescape-html
  "change html character entities into special characters"
  [text]
  (-> (str text)
      (clojure.string/replace "&amp;" "&")
      (clojure.string/replace "&lt;" "<")
      (clojure.string/replace "&gt;" ">")
      (clojure.string/replace "&quot;" "\"")
      (clojure.string/replace "&#34;" "\"")
      (clojure.string/replace "&#x27;" "'")
      (clojure.string/replace "&#x2F;" "/")))

(def app-state
  (let [init-data js/initial_app_state
        rdr (t/reader :json)]
    (->> init-data
         unescape-html
         (t/read rdr)
         clojure.walk/keywordize-keys
         atom)))

(println app-state)

(defn app [data owner opts]
  (reify
    om/IRender
    (render [this]
      (html [:div {:class "row"}
              (om/build header data)]))))

(defn start [target state app]
  (om/root app state {:target target}))

(start (sel1 :#app) app-state app)

















