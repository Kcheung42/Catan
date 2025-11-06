(ns catan-board.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as rf]
   [catan-board.events :as events]
   [catan-board.subs :as subs]
   [catan-board.custom-editor.events :as custom-editor-events]
   [catan-board.custom-editor.subs :as custom-editor-subs]
   [catan-board.views :as views]))

(defn mount-root []
  (rf/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/render [views/main-panel] root-el)))

(defn init []
  (rf/dispatch-sync [:initialize-db])
  (mount-root))
