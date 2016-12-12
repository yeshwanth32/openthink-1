(ns openthink.state
  (:require [openthink.utils :as util]
            [cognitect.transit :as t]
            [om.core :as om]))

(def app-state
  (let [init-data js/initial_app_state
        rdr (t/reader :json)]
    (->> init-data
         util/unescape-html
         (t/read rdr)
         clojure.walk/keywordize-keys
         (merge {:sort-value "top"})
         atom)))

(defn update-app-state! [resp]
  "generic updates app-state from server response"
  (let [root (om/root-cursor app-state)]
    (when (:rels resp)
      (om/transact! root :rels #(merge % (:rels resp))))
    (when (:posts resp)
      (om/transact! root :posts #(merge % (:posts resp))))
    (when (:comments resp)
      (om/transact! root :comments #(merge % (:comments resp))))
    (when (:page resp)
      (om/update! root :page (:page resp)))
    (when (:action_count resp)
      (om/update! root :action_count (:action_count resp)))
    (when (:actions resp)
      (om/update! root :actions (:actions resp)))))
