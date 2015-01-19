(ns openthink.utils
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]]
                   [dommy.macros :refer [node sel sel1]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [<! >! put! take! chan]]
            [cljs.reader :refer [read-string]]
            [dommy.core :as dom]
            [ajax.core :refer [GET POST]]
            [om.core :as om]
            [om.dom :as d]
            [sablono.core :as html :refer-macros [html]]))

;; some utilities

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
      (fn [e] (put! out e)))
    out))

(defn handle-change [e owner field]
  (om/set-state! owner field (.. e -target -value)))

(defn remove-last [s n]
  (let [end-index (- (count s) n)]
    (subs s 0 end-index)))

(defn date [dt]
  (remove-last (str dt) 15))

(defn split-text [s]
  (remove empty? (clojure.string/split s #"\\n|\n")))

(defn render-text [s]
  (for [p (split-text s)]
    [:p p]))

(defn select-values [map ks]
  (reduce #(conj %1 (map %2)) [] ks))

(defn do-on-enter [f]
  (fn [e]
    (when (== (.-keyCode e) 13) (f))))

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
