(ns openthink.routes
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [bidi.bidi :as bidi :refer [match-route]]
            [cljs.core.async :refer [<! >! put! take! chan]]
            [ajax.core :refer [GET POST]]
            [openthink.state :refer [app-state]]))

(def routes ["/" {"" :index
                  "post/" {[:title] :post}}])

(defn get-post! []
  (GET url
       {:response-format :transit
        :params {"data-only" true}
        :handler (fn [resp]
                   (println "new post returned")
                   (println resp)
                   (let [resp (clojure.walk/keywordize-keys resp)]
                     (when-not (contains? resp :error)
                       (swap! app-state merge resp))))}))

(defn dispatch! [route]
  (println route)
  (case (:handler route)
    :index (get-post! "/")
    :post (get-post! (str "/post/" (get-in route [:route-params :title])))
    (println "no matching route")))


