(ns openthink.cursors
  (:require [om.core :as om]
            [openthink.state :refer [app-state]]
            [openthink.utils :as util]))

(defn current-post []
  (let [root-cursor (om/root-cursor app-state)]
    (om/ref-cursor (get (:posts root-cursor) (:current_post root-cursor)))))

(defn child-rels []
  (let [root-cursor (om/root-cursor app-state)
        child-rel-ids (:child_rel_ids (current-post))]
    (om/ref-cursor (util/select-values (:rels root-cursor) child-rel-ids))))

(defn post-from-rel [rel]
  (let [posts (:posts (om/root-cursor app-state))]
    (om/ref-cursor (get posts (:child_id rel)))))

(defn comments-cursor []
  (om/ref-cursor (:comments (om/root-cursor app-state))))

(defn action-cursor [action]
  (let [root-cursor (om/root-cursor app-state)]
    (om/ref-cursor (if (= (get action 1) "Relation")
                    (get (:rels root-cursor) (get action 0))
                    (get (:comments root-cursor) (get action 0))))))
