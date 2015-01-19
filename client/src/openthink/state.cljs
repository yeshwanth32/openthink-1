(ns openthink.state
  (:require [openthink.utils :as util]
            [cognitect.transit :as t]))

(def app-state
  (let [init-data js/initial_app_state
        rdr (t/reader :json)]
    (->> init-data
         util/unescape-html
         (t/read rdr)
         clojure.walk/keywordize-keys
         (merge {:sort-value "top"})
         atom)))
