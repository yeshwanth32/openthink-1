(ns openthink.views.editor
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [<! >! put! take! chan]]
            [ajax.core :refer [GET POST]]
            [om.core :as om]
            [sablono.core :as html :refer-macros [html]]
            [markdown.core :refer [md->html]]
            [openthink.utils :as util]))

(defn set-toggle [s v]
  (if (s v) (disj s v) (conj s v)))

(def icon-map [{:btn :preview :icon "layout"}
               nil])

(def btn-fns {})

(defn editor-view [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:btn-chan (chan) :text "" :placeholder "" :selected #{:bold :italic}})
    om/IWillMount
    (will-mount [_]
      (let [btn-chan (om/get-state owner :btn-chan)]
        (go (while true
              (let [btn (<! btn-chan)]
                (println "btn-clicked: " btn )
                (om/update-state! owner :selected #(set-toggle % btn))
                (when-let [btn-fn (btn btn-fns)]
                  (btn-fn data owner)))))))
    om/IRender
    (render [_]
      (html
       (let [btn-chan (om/get-state owner :btn-chan)
             selected (om/get-state owner :selected)
             text (om/get-state owner :text)]
         [:div
          [:dl {:className "editor-bar sub-nav"}
           (let [btn-chan (om/get-state owner :btn-chan)]
             (for [{:keys [icon btn] :as icon-bit} icon-map]
               (if icon-bit
                 [:dd {:className (str "editor-bar-item" (when (selected btn) " selected"))}
                  [:a {:href "#" :className "editor-btn"
                       :onClick #(util/put-nil! btn-chan btn)}
                   [:i {:className (str "fi-" icon " large")}]]]
                 [:dd {:className "editor-bar-item"} "|"])))
           [:dd {:className "editor-bar-item"}
            [:a {:href "http://nestacms.com/docs/creating-content/markdown-cheat-sheet"
                 :target "_blank"}
             "View reference for markdown format"]]]
          (if-not (selected :preview)
            [:textarea {:placeholder (om/get-state owner :placeholder)
                        :value text
                        :onChange #(do (util/handle-change % owner :text)
                                     ((om/get-state owner :on-change-fn) %))}]
            [:div {:className "editor-preview"}
             [:div [:strong "Preview:"]]
             [:p {:dangerouslySetInnerHTML #js {:__html (md->html text)}}]])])))))
