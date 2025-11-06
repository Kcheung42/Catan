(ns catan-board.subs
  (:require
   [re-frame.core :as rf]
   [catan-board.scenarios.registry :as registry]))

;; -- App DB -----------------------------------------------------

(rf/reg-sub
 :db
 (fn [db _]
   db))

;; -- Board Subscriptions -----------------------------------------------------

(rf/reg-sub
 :board
 (fn [db _]
   (:board db)))

(rf/reg-sub
 :hexes
 :<- [:board]
 (fn [db _]
   (:hexes db)))

(rf/reg-sub
 :harbors
 :<- [:board]
 (fn [db _]
   (:harbors db)))

;; -- Fog State Subscriptions -----------------------------------------------------

(rf/reg-sub
 :fog-state
 :<- [:board]
 (fn [db _]
   (get-in db [:fog-state :hexes])))

(rf/reg-sub
 :fog-state-hexes
 :<- [:board]
 (fn [board _]
   (get-in board [:fog-state :hexes])))

(rf/reg-sub
 :fog-number-deck
 :<- [:board]
 (fn [board _]
   (get-in board [:fog-state :number-deck])))

;; -- Scenario Subscriptions --------------------------------------------------

(rf/reg-sub
 :current-scenario
 (fn [db _]
   (:scenario db)))

(rf/reg-sub
 :available-scenarios
 (fn [db _]
   (registry/list-scenarios)))

;; -- UI Subscriptions --------------------------------------------------------

(rf/reg-sub
 :ui
 (fn [db _]
   (:ui db)))

(rf/reg-sub
 :show-info-panel?
 :<- [:ui]
 (fn [db _]
   (:show-info-panel db)))

(rf/reg-sub
 :loading?
 :<- [:ui]
 (fn [db _]
   (:loading db false)))

(rf/reg-sub
 :board-scale
 :<- [:ui]
 (fn [db _]
   (:board-scale db 100)))

(rf/reg-sub
 :tournament-mode?
 :<- [:ui]
 (fn [db _]
   (:tournament-mode db false)))

(rf/reg-sub
 :swap-number-mode?
 :<- [:ui]
 (fn [db _]
   (:swap-number-mode db false)))

(rf/reg-sub
 :selected-token-coord
 :<- [:ui]
 (fn [db _]
   (:selected-token-coord db)))

(rf/reg-sub
 :developer-mode?
 :<- [:ui]
 (fn [db _]
   (:developer-mode db false)))

(rf/reg-sub
 :landscape-mode?
 :<- [:ui]
 (fn [db _]
   (:landscape-mode db false)))

(rf/reg-sub
 :random-harbor-mode?
 :<- [:ui]
 (fn [db _]
   (:random-harbor-mode db false)))

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
