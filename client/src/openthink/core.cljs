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


;; some utilities

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
      (fn [e] (put! out e)))
    out))

(defn handle-change [e owner field]
  (om/set-state! owner field (.. e -target -value)))

(defn date [dt]
  (remove-last (str dt) 15))

(defn remove-last [s n]
  (let [end-index (- (count s) n)]
    (subs s 0 end-index)))

(defn split-text [s]
  (remove empty? (str/split s #"\\n|\n")))

(defn render-text [s]
  (for [p (split-text s)]
    [:p p]))

(def select-values (comp vals select-keys))

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


;; set up app-state

(def app-state
  (let [init-data js/initial_app_state
        rdr (t/reader :json)]
    (->> init-data
         unescape-html
         (t/read rdr)
         clojure.walk/keywordize-keys
         atom)))

(println app-state)


;; cursors

(defn current-post []
  (let [root-cursor (om/root-cursor app-state)]
    (om/ref-cursor (get (:posts root-cursor) (:current_post root-cursor)))))

(defn child-rels []
  (let [root-cursor (om/root-cursor app-state)
        child-rel-ids (:child_rel_ids (current-post))]
    (om/ref-cursor (select-values (:rels root-cursor) child-rel-ids))))

(defn post-from-rel [rel]
  (let [posts (:posts (om/root-cursor app-state))]
    (om/ref-cursor (get posts (:child_id rel)))))

(defn comments-cursor []
  (om/ref-cursor (:comments (om/root-cursor app-state))))



;; user login and register components

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

;; top bar components

(defn user-bar [data owner]
  (reify
    om/IRender
    (render [this]
      (html (if (:user data)
              [:li (str "logged in as " (get-in data [:user :username]))
               [:span (om/build logout-button data)]]
              (om/build login-form data))))))

(defn header [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:nav {:className "top-bar page-header"}
             [:ul {:className "title-area"}  ;; Logo
              [:li {:className "name"}
               [:h1 [:a {:href "#"} "OpenThink"]]]]

             [:section {:className "top-bar-section"}
              [:ul {:className "left"}
               [:button {:onClick #(om/update! data :modal :new-post)}
                "Create a new post"]]
              [:ul {:className "right"}
               [:li {:className "divider"}]
               (om/build user-bar data)
               ]]
            ]))))

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


(defn post-view [data owner]
  (reify
    om/IRender
    (render [this]
      (let [post (current-post)]
        (html [:div {:className "post row"}
               [:h4 [:strong (:title post)]]
               [:hr]
               [:div (:body post)]
               [:hr]])))))

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

(defn child-view [rel owner]
  (reify
    om/IRender
    (render [_]
      (let [child-post (post-from-rel rel)]
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
                 [:a {:href (str "/post/" (:id child-post))}
                  [:strong (:title child-post)]]
                 [:div (str (subs (:body child-post) 0 80)
                            (if (> (count (:body child-post)) 80) "..." ""))]
                 [:span {:className "link-by"}
                  "linked by "
                  [:strong (get-in rel [:linked_by :username])]
                  " on "
                  (date (:time_linked rel))]]]])))))

(defn children-view [data owner]
  (reify
    om/IRender
    (render [_]
      (let [child-rel-ids (:child_rel_ids (current-post))
            child-rels (select-values (:rels data) child-rel-ids)
            child-pairs (partition-all 2 (filter identity child-rels))]
        (html [:div {:className "children-view"}
               (if (empty? child-pairs)
                 [:div "No children"]
                 (for [child (filter identity child-rels)]
                   [:div {:className "row"}
                    (om/build child-view child)]))])))))


(defn comment-view [comment owner]
  (reify
    om/IRender
    (render [_]
      (html [:div {:className "comment"}
             [:hr]
             [:span {:className "comment-userbit"}
              [:strong {:className "comment-user"}
               (get-in comment [:user :username])]
              [:span {:className "comment-datebit"}
               (str " | " (date (:time_posted comment)))]]
             [:div {:className "comment-body"}
              (render-text (:body comment))]]))))


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
              [:div {:className "large-8 columns"}
               [:label "Submit a comment:"]
               [:textarea {:placeholder "text" :name "comment-body"
                           :value (om/get-state owner :body)
                           :onChange #(handle-change % owner :body)}]
               [:button {:type "submit" :className "button tiny"} "comment"]]]]))))


(defn comments-view [data owner]
  (reify
    om/IRender
    (render [_]
      (let [comments (comments-cursor)]
        (html [:div {:className "comments-view row"}
               [:h4 "Comments:"]
               (if (:user data)
                 (om/build comment-form data)
                 [:strong "You must be logged in to comment a post"])

               (for [comment comments]
                 (om/build comment-view comment))])))))

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
               [:button {:type "submit" :className "button tiny"} "submit"]]]]))))

(defn post-section [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:div {:className "post-section medium-7 columns"}
             (om/build post-view data)
             (om/build comments-view data)]))))

(defn children-section [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:div {:className "children-section medium-5 columns"}
             (om/build children-view data)]))))

(defn body [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:div {:className "main-content row"}
             (om/build post-section data)
             (om/build children-section data)]))))


;; modal components and logic

(defn basic-modal [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:h2 "some modal txt"]))))

(def modal-map {:basic basic-modal
                :new-post submit-form
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

;; build and start application

(defn app [data owner opts]
  (reify
    om/IRender
    (render [this]
      (println (:modal data))
      (html [:div {:className "app"}
              (om/build header data)
              ;(om/build submit-form data)
              (om/build body data)
              (when (:modal data)
                (om/build modal data
                          {:opts {:modal-view ((:modal data) modal-map)}}))
             ]))))


(defn start [target state app]
  (om/root app state {:target target}))

(start (sel1 :#app) app-state app)










