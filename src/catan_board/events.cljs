(ns catan-board.events
  (:require
   [re-frame.core :as rf]
   [catan-board.db :as db]
   [catan-board.utils.board-generator :as board-gen]))

;; -- Initialization ----------------------------------------------------------

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   db/default-db))

;; -- Board Generation --------------------------------------------------------

(rf/reg-event-db
 :generate-board
 (fn [db _]
   (let [tournament-mode? (get-in db [:ui :tournament-mode] false)
         new-board (board-gen/generate-board tournament-mode?)]
     (-> db
         (assoc :board new-board)
         (assoc-in [:ui :selected-token-coord] nil)))))

(rf/reg-event-db
 :generate-board-success
 (fn [db [_ board-data]]
   (-> db
       (assoc :board board-data)
       (assoc-in [:ui :loading] false))))

(rf/reg-event-db
 :generate-board-failure
 (fn [db [_ error]]
   (-> db
       (assoc-in [:ui :loading] false)
       (assoc-in [:ui :error] error))))

;; -- UI Controls -------------------------------------------------------------

(rf/reg-event-db
 :toggle-info-panel
 (fn [db _]
   (update-in db [:ui :show-info-panel] not)))

;; -- Board Scaling -----------------------------------------------------------

(rf/reg-event-db
 :set-board-scale
 (fn [db [_ scale]]
   (let [clamped-scale (-> scale
                           (max 50)
                           (min 300))]
     (assoc-in db [:ui :board-scale] clamped-scale))))

(rf/reg-event-db
 :increase-scale
 (fn [db _]
   (let [current-scale (get-in db [:ui :board-scale] 100)
         new-scale (min 300 (+ current-scale 25))]
     (assoc-in db [:ui :board-scale] new-scale))))

(rf/reg-event-db
 :decrease-scale
 (fn [db _]
   (let [current-scale (get-in db [:ui :board-scale] 100)
         new-scale (max 50 (- current-scale 25))]
     (assoc-in db [:ui :board-scale] new-scale))))

(rf/reg-event-db
 :reset-scale
 (fn [db _]
   (assoc-in db [:ui :board-scale] 100)))

;; -- Tournament Mode ---------------------------------------------------------

(rf/reg-event-db
 :toggle-tournament-mode
 (fn [db _]
   (update-in db [:ui :tournament-mode] not)))

;; -- Edit Mode & Token Swapping ---------------------------------------------

(rf/reg-event-db
 :toggle-edit-mode
 (fn [db _]
   (-> db
       (update-in [:ui :edit-mode] not)
       (assoc-in [:ui :selected-token-coord] nil))))

(rf/reg-event-db
 :select-token
 (fn [db [_ coord]]
   (let [current-selection (get-in db [:ui :selected-token-coord])]
     (if current-selection
       ;; Second selection - perform swap
       (let [hexes (get-in db [:board :hexes])
             hex1-idx (first (keep-indexed #(when (= (:coord %2) current-selection) %1) hexes))
             hex2-idx (first (keep-indexed #(when (= (:coord %2) coord) %1) hexes))]
         (if (and hex1-idx hex2-idx)
           (let [hex1 (nth hexes hex1-idx)
                 hex2 (nth hexes hex2-idx)
                 num1 (:number hex1)
                 num2 (:number hex2)
                 updated-hexes (-> hexes
                                   (assoc-in [hex1-idx :number] num2)
                                   (assoc-in [hex2-idx :number] num1))]
             (-> db
                 (assoc-in [:board :hexes] updated-hexes)
                 (assoc-in [:ui :selected-token-coord] nil)))
           ;; Invalid selection, just clear
           (assoc-in db [:ui :selected-token-coord] nil)))
       ;; First selection - store coordinate
       (assoc-in db [:ui :selected-token-coord] coord)))))

(rf/reg-event-db
 :clear-token-selection
 (fn [db _]
   (assoc-in db [:ui :selected-token-coord] nil)))
