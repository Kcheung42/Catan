(ns catan-board.events
  (:require
   [re-frame.core :as rf]
   [catan-board.db :as db]
   [catan-board.utils.board-generator :as board-gen]
   [catan-board.utils.scenario-generator :as scenario-gen]
   [catan-board.scenarios.registry :as registry]
   [catan-board.middleware.local-storage :as local-storage]))

;; -- Constants ---------------------------------------------------------------

(def persist-db
  "Middleware to persist the database to local storage after an event"
  (local-storage/persist-db-after "app-db"))

(def scale-config
  "Configuration for board scale settings"
  {:min 100
   :max 1000
   :default 100
   :step 25})

;; -- Helper Functions --------------------------------------------------------

(defn reg-toggle-event
  "Register a simple toggle event handler for a boolean value in the db.

  Parameters:
  - event-id: The event keyword to register
  - path: Vector path to the boolean value in the db
  - persist?: If true, persist db changes to local storage (default: false)"
  [event-id path & {:keys [persist?] :or {persist? false}}]
  (rf/reg-event-db
   event-id
   (cond-> []
     persist? (conj persist-db))
   (fn [db _]
     (update-in db path not))))

(defn- get-generation-modes
  "Extract generation mode settings from the database."
  [db]
  {:tournament-mode? (get-in db [:ui :tournament-mode] false)
   :random-harbor-mode? (get-in db [:ui :random-harbor-mode] false)})

(defn- generate-board-with-fog
  "Generates a board with fog state for the given scenario config.

  Parameters:
  - db: The current database
  - scenario-config: The scenario configuration from the registry
  - scenario-id: Optional scenario ID to update in the db (if switching scenarios)

  Returns: Updated db with new board and fog state"
  [db scenario-config & {:keys [scenario-id]}]
  (let [{:keys [tournament-mode? random-harbor-mode?]} (get-generation-modes db)
        new-board (board-gen/generate-board scenario-config
                                            tournament-mode?
                                            random-harbor-mode?)
        fog-state-hexes (scenario-gen/initialize-fog-state scenario-config)
        fog-number-deck (scenario-gen/initialize-fog-number-deck scenario-config)
        fog-terrain-deck (scenario-gen/initialize-fog-terrain-deck scenario-config)]
    (cond-> db
      scenario-id (assoc :scenario scenario-id)
      :always (assoc :board new-board)
      :always (assoc-in [:ui :selected-token-coord] nil)
      (seq fog-state-hexes) (assoc-in [:board :fog-state :hexes] fog-state-hexes)
      (seq fog-number-deck) (assoc-in [:board :fog-state :number-deck] fog-number-deck)
      (seq fog-terrain-deck) (assoc-in [:board :fog-state :terrain-deck] fog-terrain-deck))))

(defn- update-scale
  "Update the board scale by applying a delta, clamped to min/max bounds."
  [db delta]
  (let [current-scale (get-in db [:ui :board-scale] (:default scale-config))
        new-scale (-> (+ current-scale delta)
                      (max (:min scale-config))
                      (min (:max scale-config)))]
    (assoc-in db [:ui :board-scale] new-scale)))

;; -- Initialization ----------------------------------------------------------

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   db/default-db))

;; -- History Management ---------------------------------------------------------

(rf/reg-event-db
 :pop-history
 (fn [_]
   (local-storage/pop-first-from-local-storage-array! "app-db")))

(rf/reg-event-db
 :reload-board
 (fn [_]
   (local-storage/load-latest-app-db-from-local-storage)))

(rf/reg-event-fx
 :undo
 (fn [_]
   {:fx [[:dispatch [:pop-history]]
         [:dispatch [:reload-board]]]}))

;; -- Board Generation --------------------------------------------------------

(rf/reg-event-db
 :generate-board
 [persist-db]
 (fn [db _]
   (let [current-scenario (:scenario db)
         scenario-config (registry/get-scenario current-scenario)]
     (if scenario-config
       (generate-board-with-fog db scenario-config)
       ;; Even without a scenario, clear the selection
       (assoc-in db [:ui :selected-token-coord] nil)))))

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
 [persist-db]
 (fn [db [_ scenario-id]]
   (let [scenario-config (registry/get-scenario scenario-id)]
     (if scenario-config
       ;; Scenario: use scenario generator
       (generate-board-with-fog db scenario-config :scenario-id scenario-id)
       ;; Invalid scenario ID, return db unchanged
       db))))

;; -- Fog Reveal --------------------------------------------------------------

(rf/reg-event-db
 :reveal-fog-tile
 [persist-db]
 (fn [db [_ coord]]
   (let [fog-state (get-in db [:board :fog-state :hexes])
         fog-entry (get fog-state coord)
         current-scenario (:scenario db)
         scenario-config (registry/get-scenario current-scenario)]
     ;; Only reveal if coordinate exists in fog-state and not already revealed
     (if (and fog-entry
              (not (:revealed? fog-entry))
              scenario-config)
       (let [terrain-deck (get-in db [:board :fog-state :terrain-deck])
             terrain (first terrain-deck)
             is-water? (= :water terrain)
             number-deck (get-in db [:board :fog-state :number-deck])
             number (if is-water?
                      nil
                      (first number-deck))]
         ;; Update fog state with terrain and number, remove from decks
         (cond-> db
           :always (assoc-in [:board :fog-state :hexes coord :revealed?] true)
           :always (assoc-in [:board :fog-state :hexes coord :terrain] terrain)
           :always (assoc-in [:board :fog-state :hexes coord :number] number)
           :always (assoc-in [:board :fog-state :terrain-deck] (rest terrain-deck))
           (not is-water?) (assoc-in [:board :fog-state :number-deck] (rest number-deck))))
       ;; If already revealed or invalid coordinate, return db unchanged
       db))))

;; -- Fog Reshuffle --------------------------------------------------------------

(rf/reg-event-db
 :shuffle-hidden-fog-tiles
 [persist-db]
 (fn [db]
   (let [terrain-deck (get-in db [:board :fog-state :terrain-deck])
         shuffled-terrain-deck (shuffle terrain-deck)
         number-deck (get-in db [:board :fog-state :number-deck])
         shuffled-number-deck (shuffle number-deck)]
     (-> db
         (assoc-in [:board :fog-state :terrain-deck] shuffled-terrain-deck)
         (assoc-in [:board :fog-state :number-deck] shuffled-number-deck)))))

;; -- UI Controls -------------------------------------------------------------

(reg-toggle-event :toggle-info-panel [:ui :show-info-panel])

;; -- Board Scaling -----------------------------------------------------------

(rf/reg-event-db
 :set-board-scale
 [persist-db]
 (fn [db [_ scale]]
   (let [clamped-scale (-> scale
                           (max (:min scale-config))
                           (min (:max scale-config)))]
     (assoc-in db [:ui :board-scale] clamped-scale))))

(rf/reg-event-db
 :increase-scale
 [persist-db]
 (fn [db _]
   (update-scale db (:step scale-config))))

(rf/reg-event-db
 :decrease-scale
 [persist-db]
 (fn [db _]
   (update-scale db (- (:step scale-config)))))

(rf/reg-event-db
 :reset-scale
 [persist-db]
 (fn [db _]
   (assoc-in db [:ui :board-scale] (:default scale-config))))

;; -- Tournament Mode ---------------------------------------------------------

(reg-toggle-event :toggle-tournament-mode [:ui :tournament-mode] :persist? true)

;; -- Developer Mode ---------------------------------------------------------

(reg-toggle-event :toggle-developer-mode [:ui :developer-mode] :persist? true)

;; -- Edit Mode & Token Swapping ---------------------------------------------

(rf/reg-event-db
 :toggle-swap-number-mode
 (fn [db _]
   (-> db
       (update-in [:ui :swap-number-mode] not)
       (assoc-in [:ui :selected-token-coord] nil))))

(rf/reg-event-db
 :select-token
 [persist-db]
 (fn [db [_ coord]]
   (let [current-selection (get-in db [:ui :selected-token-coord])]
     (if current-selection
       ;; Second selection - perform swap
       (let [hexes (get-in db [:board :hexes])
             fog-state-hexes (get-in db [:board :fog-state :hexes])
             hex1-idx (first (keep-indexed #(when (= (:coord %2) current-selection) %1) hexes))
             hex2-idx (first (keep-indexed #(when (= (:coord %2) coord) %1) hexes))]
         (if (and hex1-idx hex2-idx)
           (let [hex1 (nth hexes hex1-idx)
                 hex2 (nth hexes hex2-idx)

                 ;; Check if each hex is a revealed fog tile
                 fog1-info (get fog-state-hexes (:coord hex1))
                 fog2-info (get fog-state-hexes (:coord hex2))
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
               is-fog1-revealed? (assoc-in [:board :fog-state :hexes (:coord hex1) :number] num2)
               ;; Update fog-state if hex2 is revealed fog
               is-fog2-revealed? (assoc-in [:board :fog-state :hexes (:coord hex2) :number] num1)
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

;; -- Landscape Mode ---------------------------------------------------------

(reg-toggle-event :toggle-landscape-mode [:ui :landscape-mode] :persist? true)

;; -- Random Harbor Mode -----------------------------------------------------

(reg-toggle-event :toggle-random-harbor-mode [:ui :random-harbor-mode] :persist? true)
