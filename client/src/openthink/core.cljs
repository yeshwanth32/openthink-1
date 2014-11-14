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

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
      (fn [e] (put! out e)))
    out))

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
              [:li {:className "login-form has-form"}
                [:div {:className "row collapse"}
                 [:div {:className "small-3 columns"}
                  [:input {:id "login-username" :type "text"
                           :placeholder "username"
                           :value (om/get-state owner :username)
                           :onChange #(handle-change % owner :username)
                           }]]
                 [:div {:className "small-3 columns"}
                  [:input {:id "login-password"
                           :placeholder "password"
                           :value (om/get-state owner :password)
                           :onChange #(handle-change % owner :password)
                           }]]
                 [:div {:className "small-3 columns"}
                  [:button {:type "button" :className "btn btn-info"
                            :onClick (fn [e] (put!(om/get-state owner :post) 1) false)
                            }
                   "Login"]]
                 [:div {:className "small-3 columns inline"}
                   "or "
                   [:a {:href "#" :onClick (fn [e]
                                             (om/update! data :modal :register))}
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
                              (let [resp (clojure.walk/keywordize-keys resp)]
                                (println resp)
                                (when-not (contains? resp :error)
                                  (om/update! data :user resp))))}))
                 (recur))))
    om/IRender
    (render [this]
      (html (if (om/get-state owner :is-posting)
              [:li [:div nil "Registering... Please wait."]]
              ;;[:li {:className "register-form has-form"}]
              [:div {:className "row collapse"}
               [:h3 "Register your account and start posting!"]
               [:div {:className "large-12 columns"}
                [:input {:id "register-username" :type "text"
                         :placeholder "username"
                         :value (om/get-state owner :username)
                         :onChange #(handle-change % owner :username)
                         }]]
               [:div {:className "large-12 columns"}
                [:input {:id "register-email" :type "text"
                         :placeholder "email"
                         :value (om/get-state owner :email)
                         :onChange #(handle-change % owner :email)
                         }]]
               [:div {:className "large-12 columns"}
                [:input {:id "register-password" :type "password"
                         :placeholder "password"
                         :value (om/get-state owner :password)
                         :onChange #(handle-change % owner :password)
                         }]]
               [:div {:className "large-4 columns"}
                [:button {:type "button" :className "btn btn-info"
                          :onClick (fn [e]
                                     (put! (om/get-state owner :post) 1)
                                     (put! (om/get-state owner :close-chan) 1)
                                     false)
                          }
                 "Register"]]])))))

(defn user-bar [data owner]
  (reify
    om/IRender
    (render [this]
      (html (if (:user data)
                    [:li (str "logged in as " (get-in data [:user :username]))
                     [:span (om/build logout-button data)]]

                    (om/build login-form data))))))

                [:li {:className "has-form"}
                [:div {:className "row collapse"}
                 [:div {:className "large-4 columns"}
                  [:input {:id "login-username" :type "text"
                           :placeholder "username"
                           ;:value (om/get-state owner :username)
                           ;:onChange #(handle-change % owner :username)
                           }]]
                 [:div {:className "large-4 columns"}
                  [:input {:id "login-password"
                           :placeholder "password"
                           ;:value (om/get-state owner :password)
                           ;:onChange #(handle-change % owner :password)
                           }]]
                 [:div {:className "large-4 columns"}
                  [:button {:type "button" :className "btn btn-info"
                           ;:onClick (fn [e] (put!(om/get-state owner :post) 1) false)
                            }
                   "Login"]]
                 ]]

(defn header [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:nav {:className "top-bar page-header"}
             [:ul {:className "title-area"}  ;; Logo
              [:li {:className "name"}
               [:h1 [:a {:href "#"} "OpenThink"]]]]

             [:section {:className "top-bar-section"}
              [:ul {:className "right"}
               [:li {:className "divider"}]
               (om/build user-bar data)
               ]]
;;              [:div {:className "small-6 columns"} "test"]
;;              [:div {:className "small-6 columns"}
;;               (om/build user-bar data)]
            ]))))

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

(defn basic-modal [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:h2 "some modal txt"]))))

(def modal-map {:basic basic-modal
                :register register-form})

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
      (let [outside-clicks (listen (sel1 :.reveal-modal-bg) "click")]
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

(defn submit-post [title text]
  (println "submit post")
  (println title)
  (println text))

(defn submit-form [data owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:submit-chan (chan) :title "" :text ""})
    om/IWillMount
    (will-mount [_]
      (let [submit-chan (om/get-state owner :submit-chan)]
        (go (while true
              (<! submit-chan)
              (println "submitting post")
              (POST "/submit-post"
                    {:response-format :transit
                     :params {"title" (om/get-state owner :title)
                              "text" (om/get-state owner :text)}
                     :handler (fn [resp]
                                (println "submit-form returned")
                                (println resp)
                                (let [resp (clojure.walk/keywordize-keys resp)]
                                  (println resp)))})))))
    om/IRender
    (render [this]
      (html [:form {:onSubmit (fn [e]
                                (go (>! (om/get-state owner :submit-chan) 1))
                                (.preventDefault e)
                                false)}
             [:div {:className "row"}
              [:div {:className "large-12 columns"}
               [:label "Submit a post:"]
               [:input {:type "text" :placeholder "title" :name "post-title"
                        :value (om/get-state owner :title)
                        :onChange #(handle-change % owner :title)}]
               [:textarea {:placeholder "text" :name "post-text"
                           :value (om/get-state owner :text)
                           :onChange #(handle-change % owner :text)}]
               [:button {:type "submit" :className "button"} "submit"]]]]))))

(defn post-view [post owner]
  (reify
    om/IRender
    (render [this]
      (html [:div {:className "post large-12"}
             [:h4 [:strong (:title post)]]
             [:hr]
             [:div (:body post)]
             [:hr]]))))

(defn children-cursor []
  (om/ref-cursor (:children (om/root-cursor app-state))))

(defn comments-cursor []
  (om/ref-cursor (:comments (om/root-cursor app-state))))

(defn child-view [child owner]
  (reify
    om/IRender
    (render [_]
      (html [:div {:className "large-6 columns"}
             [:h5 (:title child)]
             [:div (:body child)]]))))

(defn children-view [data owner]
  (reify
    om/IRender
    (render [_]
      (let [children (children-cursor)
            child-pairs (partition-all 2 children)]
        (html [:div {:className "children-view"}
               (if (empty? child-pairs)
                 [:div "No children"]
                 (for [child-pair (take 2 child-pairs)]
                   [:div {:className "row"}
                    (for [child child-pair]
                      (om/build child-view child))]))
               [:hr]])))))

(defn comment-view [comment owner]
  (reify
    om/IRender
    (render [_]
      (html [:div {:className "comment row"}
             (:body comment)]))))

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
              (POST (str "post/" (get-in data [:post :id]) "/comment")
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
              [:div {:className "large-8 columns"}
               [:label "Submit a comment:"]
               [:textarea {:placeholder "text" :name "comment-body"
                           :value (om/get-state owner :body)
                           :onChange #(handle-change % owner :body)}]
               [:button {:type "submit" :className "button"} "comment"]]]]))))


(defn comments-view [data owner]
  (reify
    om/IRender
    (render [_]
      (let [comments (comments-cursor)]
        (html [:div {:className "comments-view"}
               [:h4 "Comments:"]
               (for [comment comments]
                 (om/build comment-view comment))
               (om/build comment-form data)])))))

(defn submit-form [data owner opts]
  (reify
    om/IInitState
    (init-state [_]
      {:submit-chan (chan) :title "" :text ""})
    om/IWillMount
    (will-mount [_]
      (let [submit-chan (om/get-state owner :submit-chan)]
        (go (while true
              (<! submit-chan)
              (println "submitting post")
              (POST "/submit-post"
                    {:response-format :transit
                     :params {"title" (om/get-state owner :title)
                              "text" (om/get-state owner :text)}
                     :handler (fn [resp]
                                (println "submit-form returned")
                                (println resp)
                                (let [resp (clojure.walk/keywordize-keys resp)]
                                  (println resp)))})))))
    om/IRender
    (render [this]
      (html [:form {:onSubmit (fn [e]
                                (go (>! (om/get-state owner :submit-chan) 1))
                                (.preventDefault e)
                                false)}
             [:div {:className "row"}
              [:div {:className "large-12 columns"}
               [:label "Submit a post:"]
               [:input {:type "text" :placeholder "title" :name "post-title"
                        :value (om/get-state owner :title)
                        :onChange #(handle-change % owner :title)}]
               [:textarea {:placeholder "text" :name "post-text"
                           :value (om/get-state owner :text)
                           :onChange #(handle-change % owner :text)}]
               [:button {:type "submit" :className "button"} "submit"]]]]))))

(defn body [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:div {:className "post-wrapper row"}
             (om/build post-view (:post data))
             (om/build children-view data)
             (om/build comments-view data)
             ]))))

(defn app [data owner opts]
  (reify
    om/IRender
    (render [this]
      (println (:modal data))
      (html [:div {:className "app"}
              (om/build header data)
              (om/build submit-form data)
              (om/build body data)
              (when (:modal data)
                (om/build modal data
                          {:opts {:modal-view ((:modal data) modal-map)}}))
             ]))))

;; <div class="reveal-modal-bg" style="display: block;"></div>
;; <div id="myModal" class="reveal-modal open" data-reveal="" style="visibility: visible; display: block; top: 88px; opacity: 1;">
;;   <h2>Awesome. I have it.</h2>
;;   <p class="lead">Your couch.  It is mine.</p>
;;   <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
;;   <a class="close-reveal-modal">×</a>
;; </div>

(defn start [target state app]
  (om/root app state {:target target}))

(start (sel1 :#app) app-state app)

(:modal @app-state)


;; Modal component should take the component to render as a parameter.
;; It should support dismissing the modal (removing it from the app-state) when a
;; user clicks outside it. It should also somehow support the modal dismissing itself.
;; passing a closing channel to allow the component to close the modal










