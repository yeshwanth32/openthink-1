(ns openthink.core
  (:require-macros [dommy.macros :refer [sel1]]
                   [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [<! >! put! take! chan]]
            [om.core :as om]
            [bidi.bidi :as bidi :refer [match-route]]
            [sablono.core :as html :refer-macros [html]]
            [openthink.state :refer [app-state]]
            [openthink.routes :refer [routes dispatch!]]
            [openthink.views.modal :as modal]
            [openthink.views.header :refer [header]]
            [openthink.views.post :refer [post-section]]
            [openthink.views.links :refer [links-section]]
            [pushy.core :as pushy]
            [devtools.core :as devtools]
            [goog.math :as math]))

(enable-console-print!)
(devtools/install!)

(println "Hello world!")

(println app-state)

(def history
  (pushy/pushy dispatch! (partial bidi/match-route routes)))

(pushy/start! history)

(defn body [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:div {:className "main-content row"}
             (om/build post-section data)
             (om/build links-section data)]))))

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
(js/console.log "testing")
