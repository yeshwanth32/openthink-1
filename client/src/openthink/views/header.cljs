(ns openthink.views.header
  (:require [om.core :as om]
            [sablono.core :as html :refer-macros [html]]
            [openthink.views.auth :as auth]))

(defn user-bar [data owner]
  (reify
    om/IRender
    (render [this]
      (html (if (:user data)
              [:li {:className "logged-in-as"}
               [:span
                    (str "logged in as " (get-in data [:user :username]) " ")]
               [:span (om/build auth/logout-button data)]]
              (om/build auth/login-form data))))))

(defn header [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:nav {:className "top-bar page-header"}
             [:ul {:className "title-area"}  ;; Logo
              [:li {:className "name"}
               [:h1 [:a {:href "/"} "OpenThink"]]]]
             [:section {:className "top-bar-section"}
              [:ul {:className "left"}
               [:button {:className "button large"
                         :onClick #(do (om/update! data :reply-to nil)
                                       (om/update! data :modal :new-post))}
                "Create a new post"]]
              [:ul {:className "right"}
               [:li {:className "divider"}]
               (om/build user-bar data)]]]))))
