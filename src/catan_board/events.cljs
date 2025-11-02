(ns catan-board.events
  (:require
   [re-frame.core :as rf]
   [catan-board.db :as db]
   [catan-board.utils.board-generator :as board-gen]
   [catan-board.utils.scenario-generator :as scenario-gen]
   [catan-board.scenarios.registry :as registry]))

;; -- Initialization ----------------------------------------------------------

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   db/default-db))

;; -- Board Generation --------------------------------------------------------

(rf/reg-event-db
 :generate-board
 (fn [db _]
   (let [current-scenario (:scenario db)
         tournament-mode? (get-in db [:ui :tournament-mode] false)]
     (if (= :base-game current-scenario)
       ;; Use existing board generator for base game
       (let [new-board (board-gen/generate-board tournament-mode?)]
         (-> db
             (assoc :board new-board)
             (assoc-in [:ui :selected-token-coord] nil)))
       ;; Use scenario generator for other scenarios
       (let [scenario-config (registry/get-scenario current-scenario)
             new-board (scenario-gen/generate-scenario-board scenario-config)
             fog-state (scenario-gen/initialize-fog-state scenario-config)
             fog-number-deck (scenario-gen/initialize-fog-number-deck scenario-config)]
         (-> db
             (assoc :board new-board)
             (assoc :fog-state fog-state)
             (assoc :fog-number-deck fog-number-deck)
             (assoc-in [:ui :selected-token-coord] nil)))))))

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

;; -- Scenario Management -----------------------------------------------------

(rf/reg-event-db
 :set-scenario
 (fn [db [_ scenario-id]]
   (let [scenario-config (registry/get-scenario scenario-id)]
     (if scenario-config
       (if (= :base-game scenario-id)
         ;; Base game: use existing generator
         (let [tournament-mode? (get-in db [:ui :tournament-mode] false)
               new-board (board-gen/generate-board tournament-mode?)]
           (-> db
               (assoc :scenario scenario-id)
               (assoc :board new-board)
               (assoc :fog-state {})
               (assoc-in [:ui :selected-token-coord] nil)))
         ;; Scenario: use scenario generator
         (let [new-board (scenario-gen/generate-scenario-board scenario-config)
               fog-state (scenario-gen/initialize-fog-state scenario-config)
               fog-number-deck (scenario-gen/initialize-fog-number-deck scenario-config)]
           (-> db
               (assoc :scenario scenario-id)
               (assoc :board new-board)
               (assoc :fog-state fog-state)
               (assoc :fog-number-deck fog-number-deck)
               (assoc-in [:ui :selected-token-coord] nil))))
       ;; Invalid scenario ID, return db unchanged
       db))))

;; -- Fog Reveal --------------------------------------------------------------

(rf/reg-event-db
 :reveal-fog-tile
 (fn [db [_ coord]]
   (let [fog-state (:fog-state db)
         fog-entry (get fog-state coord)
         current-scenario (:scenario db)
         scenario-config (registry/get-scenario current-scenario)]
     ;; Only reveal if coordinate exists in fog-state and not already revealed
     (if (and fog-entry
              (not (:revealed? fog-entry))
              scenario-config)
       (let [terrain (get-in db [:fog-state coord :terrain])
             is-water? (= :water terrain)
             number-deck (:fog-number-deck db)
             number (if is-water?
                      nil
                      (first number-deck))]
         ;; Update fog state and number and remove number from fog-number-deck
         (cond-> db
           :always (assoc-in [:fog-state coord :revealed?] true)
           :always (assoc-in [:fog-state coord :number] number)
           (not is-water?) (assoc :fog-number-deck (rest number-deck))))
       ;; If already revealed or invalid coordinate, return db unchanged
       db))))

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

;; -- Developer Mode ---------------------------------------------------------

(rf/reg-event-db
 :toggle-developer-mode
 (fn [db _]
   (update-in db [:ui :developer-mode] not)))

;; -- Edit Mode & Token Swapping ---------------------------------------------

(rf/reg-event-db
 :toggle-swap-number-mode
 (fn [db _]
   (-> db
       (update-in [:ui :swap-number-mode] not)
       (assoc-in [:ui :selected-token-coord] nil))))

(rf/reg-event-db
 :select-token
 (fn [db [_ coord]]
   (let [current-selection (get-in db [:ui :selected-token-coord])]
     (if current-selection
       ;; Second selection - perform swap
       (let [hexes (get-in db [:board :hexes])
             fog-state (get-in db [:fog-state])
             hex1-idx (first (keep-indexed #(when (= (:coord %2) current-selection) %1) hexes))
             hex2-idx (first (keep-indexed #(when (= (:coord %2) coord) %1) hexes))]
         (if (and hex1-idx hex2-idx)
           (let [hex1 (nth hexes hex1-idx)
                 hex2 (nth hexes hex2-idx)

                 ;; Check if each hex is a revealed fog tile
                 fog1-info (get fog-state (:coord hex1))
                 fog2-info (get fog-state (:coord hex2))
                 is-fog1-revealed? (and (= (:resource hex1) :fog) (:revealed? fog1-info))
                 is-fog2-revealed? (and (= (:resource hex2) :fog) (:revealed? fog2-info))

                 ;; Get numbers from correct location
                 num1 (if is-fog1-revealed? (:number fog1-info) (:number hex1))
                 num2 (if is-fog2-revealed? (:number fog2-info) (:number hex2))]

             ;; Update both hex :number fields AND fog-state entries as needed
             (cond-> db
               ;; Always update hex :number fields
               true (assoc-in [:board :hexes hex1-idx :number] num2)
               true (assoc-in [:board :hexes hex2-idx :number] num1)
               ;; Update fog-state if hex1 is revealed fog
               is-fog1-revealed? (assoc-in [:fog-state (:coord hex1) :number] num2)
               ;; Update fog-state if hex2 is revealed fog
               is-fog2-revealed? (assoc-in [:fog-state (:coord hex2) :number] num1)
               ;; Clear selection
               true (assoc-in [:ui :selected-token-coord] nil)))
           ;; Invalid selection, just clear
           (assoc-in db [:ui :selected-token-coord] nil)))
       ;; First selection - store coordinate
       (assoc-in db [:ui :selected-token-coord] coord)))))

(rf/reg-event-db
 :clear-token-selection
 (fn [db _]
   (assoc-in db [:ui :selected-token-coord] nil)))
