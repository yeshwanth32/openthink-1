(ns openthink.views.post
  (:require [om.core :as om]
            [sablono.core :as html :refer-macros [html]]
            [openthink.utils :as util]
            [openthink.cursors :as curs]
            [openthink.views.activity :refer [actions-view]]))

(defn post-view [data owner]
  (reify
    om/IRender
    (render [this]
      (let [post (curs/current-post)]
        (html [:div {:className "post row"}
               [:h4 [:strong (:title post)]]
               [:hr]
               [:div (util/render-text (:body post))]])))))

(defn post-section [data owner]
  (reify
    om/IRender
    (render [this]
            (println "post view")
      (html [:div {:className "post-section medium-7 columns"}
             (om/build post-view data)
             (om/build actions-view data)]))))
