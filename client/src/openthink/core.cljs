(ns openthink.core
  (:require-macros [dommy.macros :refer [sel1]])
  (:require [om.core :as om]
            [sablono.core :as html :refer-macros [html]]
            [openthink.state :refer [app-state]]
            [openthink.views.modal :as modal]
            [openthink.views.header :refer [header]]
            [openthink.views.post :refer [post-section]]
            [openthink.views.links :refer [children-section]]))

(enable-console-print!)

(println "Hello world!")

(println app-state)

(defn body [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:div {:className "main-content row"}
             (om/build post-section data)
             (om/build children-section data)]))))

;; build and start application

(defn app [data owner opts]
  (reify
    om/IRender
    (render [this]
      (html [:div {:className "app"}
              (om/build header data)
              (om/build body data)
              (when (:modal data)
                (om/build modal/modal data
                          {:opts {:modal-view ((:modal data) modal/modal-map)}}))]))))

@app-state

(defn start [target state app]
  (om/root app state {:target target}))

(start (sel1 :#app) app-state app)
