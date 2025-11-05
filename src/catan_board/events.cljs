(ns catan-board.events
  (:require
   [re-frame.core :as rf]
   [catan-board.db :as db]
   [catan-board.utils.board-generator :as board-gen]
   [catan-board.utils.scenario-generator :as scenario-gen]
   [catan-board.scenarios.registry :as registry]
   [catan-board.middleware.local-storage :as local-storage]))

;; -- Initialization ----------------------------------------------------------

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   db/default-db))

;; -- History Management ---------------------------------------------------------

(rf/reg-event-fx
 :undo-one-step
 (fn [_ ]
   (local-storage/pop-first-from-local-storage-array! "app-db")
   {:fx [[:dispatch [:reload-board]]]}))

(rf/reg-event-db
 :reload-board
 (fn [_]
   (local-storage/load-from-last-app-state-local-storage)))

;; -- Board Generation --------------------------------------------------------

(rf/reg-event-db
 :generate-board
 [(local-storage/persist-db-after "app-db")]
 (fn [db _]
   (let [current-scenario    (:scenario db)
         tournament-mode?    (get-in db [:ui :tournament-mode] false)
         random-harbor-mode? (get-in db [:ui :random-harbor-mode] false)
         scenario-config     (registry/get-scenario current-scenario)
         new-board           (board-gen/generate-board scenario-config
                                                       tournament-mode?
                                                       random-harbor-mode?)
         fog-state           (scenario-gen/initialize-fog-state scenario-config)
         fog-number-deck     (scenario-gen/initialize-fog-number-deck scenario-config)]

     (-> db
         (assoc :board new-board)
         (assoc-in [:board :fog-state :hexes] fog-state)
         (assoc-in [:board :fog-state :number-deck] fog-number-deck)
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

;; -- Scenario Management -----------------------------------------------------

(rf/reg-event-db
 :set-scenario
 [(local-storage/persist-db-after "app-db")]
 (fn [db [_ scenario-id]]
   (let [scenario-config (registry/get-scenario scenario-id)]
     (prn "scenario-config:" scenario-config)
     (if scenario-config
       ;; Scenario: use scenario generator
       (let [tournament-mode?    (get-in db [:ui :tournament-mode] false)
             random-harbor-mode? (get-in db [:ui :random-harbor-mode] false)
             new-board           (board-gen/generate-board scenario-config
                                                           tournament-mode?
                                                           random-harbor-mode?)
             fog-state-hexes     (scenario-gen/initialize-fog-state scenario-config)
             fog-number-deck     (scenario-gen/initialize-fog-number-deck scenario-config)]
         (-> db
             (assoc :scenario scenario-id)
             (assoc :board new-board)
             (assoc-in [:board :fog-state :hexes] fog-state-hexes)
             (assoc-in [:board :fog-state :number-deck] fog-number-deck)
             (assoc-in [:ui :selected-token-coord] nil)))
       ;; Invalid scenario ID, return db unchanged
       db))))

;; -- Fog Reveal --------------------------------------------------------------

(rf/reg-event-db
 :reveal-fog-tile
 [(local-storage/persist-db-after "app-db")]
 (fn [db [_ coord]]
   (let [fog-state        (get-in db [:board :fog-state :hexes])
         fog-entry        (get fog-state coord)
         current-scenario (:scenario db)
         scenario-config  (registry/get-scenario current-scenario)]
     ;; Only reveal if coordinate exists in fog-state and not already revealed
     (if (and fog-entry
              (not (:revealed? fog-entry))
              scenario-config)
       (let [terrain     (get-in db [:board :fog-state :hexes coord :terrain])
             is-water?   (= :water terrain)
             number-deck (get-in db [:board :fog-state :number-deck])
             number      (if is-water?
                           nil
                           (first number-deck))]
         ;; Update fog state and number and remove number from fog-number-deck
         (cond-> db
           :always         (assoc-in [:board :fog-state :hexes coord :revealed?] true)
           :always         (assoc-in [:board :fog-state :hexes coord :number] number)
           (not is-water?) (assoc-in [:board :fog-state :number-deck] (rest number-deck))))
       ;; If already revealed or invalid coordinate, return db unchanged
       db))))

;; -- Fog Reshuffle --------------------------------------------------------------

(rf/reg-event-db
 :shuffle-hidden-fog-tiles
 [(local-storage/persist-db-after "app-db")]
 (fn [db]
   (let [fog-state-hexes            (get-in db [:board :fog-state :hexes])
         hidden-fog-state-hexes     (remove (fn [[_k v]] (:revealed? v)) fog-state-hexes)
         new-fog-terrain-deck       (shuffle (map :terrain (vals hidden-fog-state-hexes)))
         new-hidden-fog-state-hexes (into {} (map
                                              (fn [[coord info] new-resource]
                                                [coord (assoc info :terrain new-resource)])
                                              hidden-fog-state-hexes
                                              new-fog-terrain-deck))
         fog-state-numbers          (get-in db [:board :fog-state :number-deck])]
     (-> db
         (assoc-in [:board :fog-state :hexes]
                   (merge fog-state-hexes new-hidden-fog-state-hexes))
         (assoc-in [:board :fog-state :number-deck] (shuffle fog-state-numbers))))))

;; -- UI Controls -------------------------------------------------------------

(rf/reg-event-db
 :toggle-info-panel
 (fn [db _]
   (update-in db [:ui :show-info-panel] not)))

;; -- Board Scaling -----------------------------------------------------------

(rf/reg-event-db
 :set-board-scale
 [(local-storage/persist-db-after "app-db")]
 (fn [db [_ scale]]
   (let [clamped-scale (-> scale
                           (max 50)
                           (min 500))]
     (assoc-in db [:ui :board-scale] clamped-scale))))

(rf/reg-event-db
 :increase-scale
 [(local-storage/persist-db-after "app-db")]
 (fn [db _]
   (let [current-scale (get-in db [:ui :board-scale] 100)
         new-scale     (min 500 (+ current-scale 25))]
     (assoc-in db [:ui :board-scale] new-scale))))

(rf/reg-event-db
 :decrease-scale
 [(local-storage/persist-db-after "app-db")]
 (fn [db _]
   (let [current-scale (get-in db [:ui :board-scale] 100)
         new-scale     (max 50 (- current-scale 25))]
     (assoc-in db [:ui :board-scale] new-scale))))

(rf/reg-event-db
 :reset-scale
 [(local-storage/persist-db-after "app-db")]
 (fn [db _]
   (assoc-in db [:ui :board-scale] 100)))

;; -- Tournament Mode ---------------------------------------------------------

(rf/reg-event-db
 :toggle-tournament-mode
 [(local-storage/persist-db-after "app-db")]
 (fn [db _]
   (update-in db [:ui :tournament-mode] not)))

;; -- Developer Mode ---------------------------------------------------------

(rf/reg-event-db
 :toggle-developer-mode
 [(local-storage/persist-db-after "app-db")]
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
 [(local-storage/persist-db-after "app-db")]
 (fn [db [_ coord]]
   (let [current-selection (get-in db [:ui :selected-token-coord])]
     (if current-selection
       ;; Second selection - perform swap
       (let [hexes           (get-in db [:board :hexes])
             fog-state-hexes (get-in db [:board :fog-state :hexes])
             hex1-idx        (first (keep-indexed #(when (= (:coord %2) current-selection) %1) hexes))
             hex2-idx        (first (keep-indexed #(when (= (:coord %2) coord) %1) hexes))]
         (if (and hex1-idx hex2-idx)
           (let [hex1 (nth hexes hex1-idx)
                 hex2 (nth hexes hex2-idx)

                 ;; Check if each hex is a revealed fog tile
                 fog1-info         (get fog-state-hexes (:coord hex1))
                 fog2-info         (get fog-state-hexes (:coord hex2))
                 is-fog1-revealed? (and (= (:resource hex1) :fog) (:revealed? fog1-info))
                 is-fog2-revealed? (and (= (:resource hex2) :fog) (:revealed? fog2-info))

                 ;; Get numbers from correct location
                 num1 (if is-fog1-revealed? (:number fog1-info) (:number hex1))
                 num2 (if is-fog2-revealed? (:number fog2-info) (:number hex2))]

             ;; Update both hex :number fields AND fog-state entries as needed
             (cond-> db
               ;; Always update hex :number fields
               true              (assoc-in [:board :hexes hex1-idx :number] num2)
               true              (assoc-in [:board :hexes hex2-idx :number] num1)
               ;; Update fog-state if hex1 is revealed fog
               is-fog1-revealed? (assoc-in [:board :fog-state :hexes (:coord hex1) :number] num2)
               ;; Update fog-state if hex2 is revealed fog
               is-fog2-revealed? (assoc-in [:board :fog-state :hexes (:coord hex2) :number] num1)
               ;; Clear selection
               true              (assoc-in [:ui :selected-token-coord] nil)))
           ;; Invalid selection, just clear
           (assoc-in db [:ui :selected-token-coord] nil)))
       ;; First selection - store coordinate
       (assoc-in db [:ui :selected-token-coord] coord)))))

(rf/reg-event-db
 :clear-token-selection
 (fn [db _]
   (assoc-in db [:ui :selected-token-coord] nil)))

;; -- Landscape Mode ---------------------------------------------------------

(rf/reg-event-db
 :toggle-landscape-mode
 [(local-storage/persist-db-after "app-db")]
 (fn [db _]
   (-> db
       (update-in [:ui :landscape-mode] not))))

;; -- Landscape Mode ---------------------------------------------------------

(rf/reg-event-db
 :toggle-random-harbor-mode
 [(local-storage/persist-db-after "app-db")]
 (fn [db _]
   (update-in db [:ui :random-harbor-mode] not)))
