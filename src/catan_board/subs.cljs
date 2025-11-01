(ns catan-board.subs
  (:require
   [re-frame.core :as rf]
   [catan-board.scenarios.registry :as registry]))

;; -- Board Subscriptions -----------------------------------------------------

(rf/reg-sub
 :board
 (fn [db _]
   (:board db)))

(rf/reg-sub
 :hexes
 (fn [db _]
   (get-in db [:board :hexes])))

(rf/reg-sub
 :harbors
 (fn [db _]
   (get-in db [:board :harbors])))

;; -- Scenario Subscriptions --------------------------------------------------

(rf/reg-sub
 :current-scenario
 (fn [db _]
   (:scenario db)))

(rf/reg-sub
 :fog-state
 (fn [db _]
   (:fog-state db)))

(rf/reg-sub
 :fog-number-deck
 (fn [db _]
   (:fog-number-deck db)))

(rf/reg-sub
 :available-scenarios
 (fn [db _]
   (registry/list-scenarios)))

;; -- UI Subscriptions --------------------------------------------------------

(rf/reg-sub
 :show-info-panel?
 (fn [db _]
   (get-in db [:ui :show-info-panel] true)))

(rf/reg-sub
 :loading?
 (fn [db _]
   (get-in db [:ui :loading] false)))

(rf/reg-sub
 :board-scale
 (fn [db _]
   (get-in db [:ui :board-scale] 100)))

(rf/reg-sub
 :tournament-mode?
 (fn [db _]
   (get-in db [:ui :tournament-mode] false)))

(rf/reg-sub
 :edit-mode?
 (fn [db _]
   (get-in db [:ui :edit-mode] false)))

(rf/reg-sub
 :selected-token-coord
 (fn [db _]
   (get-in db [:ui :selected-token-coord] nil)))

(rf/reg-sub
 :developer-mode?
 (fn [db _]
   (get-in db [:ui :developer-mode] false)))

;; -- Derived Subscriptions ---------------------------------------------------

(rf/reg-sub
 :resource-counts
 :<- [:hexes]
 (fn [hexes _]
   (frequencies (map :resource hexes))))

(rf/reg-sub
 :number-counts
 :<- [:hexes]
 (fn [hexes _]
   (frequencies (map :number (remove #(= :desert (:resource %)) hexes)))))
