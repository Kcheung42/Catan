(ns catan-board.custom-editor.subs
  "Subscriptions for the custom scenario editor.
   Provides reactive access to editor state and validation."
  (:require
   [re-frame.core :as rf]
   [catan-board.middleware.local-storage :as local-storage]
   [catan-board.custom-editor.events :as events]
   [catan-board.utils.hex :as hex-utils]))

;; -- Editor Mode Subscriptions -----------------------------------------------

(rf/reg-sub
 :custom-scenario-editor-mode?
 (fn [db _]
   (get-in db [:ui :custom-scenario-editor-mode] false)))

(rf/reg-sub
 :custom-scenario-draft
 (fn [db _]
   (get-in db [:ui :custom-scenario-draft])))

(rf/reg-sub
 :editor-hex-selection-mode
 (fn [db _]
   (get-in db [:ui :editor-hex-selection-mode] :terrain)))

(rf/reg-sub
 :harbor-placement-coord
 (fn [db _]
   (get-in db [:ui :harbor-placement-coord])))

(rf/reg-sub
 :custom-scenario-grid-pattern
 :<- [:custom-scenario-draft]
 (fn [db _]
   (:grid-pattern db "")))

;; -- Editor Hexes Generation -------------------------------------------------

(defn- get-hex-type
  "Gets the type of a hex from the hex-types structure.
   hex-types structure: {:water #{coords} :terrain #{coords} :fog #{coords} :village #{coords}}
   Returns the type keyword (:water/:terrain/:fog/:village) or nil if not found."
  [hex-types coord]
  (cond
    (contains? (:water hex-types) coord)   :water
    (contains? (:fog hex-types) coord)     :fog
    (contains? (:village hex-types) coord) :village
    (contains? (:terrain hex-types) coord) :terrain
    :else                                  nil))

(rf/reg-sub
 :editor-hexes
 :<- [:custom-scenario-draft]
 (fn [draft _]
   (when draft
     (let [grid-pattern (:grid-pattern draft)
           hex-types    (:hex-types draft)]
       (if (and grid-pattern (not (clojure.string/blank? grid-pattern)))
         ;; Generate hex coordinates from grid pattern
         (let [coords (hex-utils/generate-grid-from-pattern grid-pattern)]
           ;; Create hex data structures with assigned types from hex-types map
           (mapv (fn [coord]
                   {:coord    coord
                    :type     (or (get-hex-type hex-types coord) :unassigned)
                    :resource nil
                    :number   nil})
                 coords))
         [])))))

;; -- Validation Subscriptions ------------------------------------------------

(rf/reg-sub
 :custom-scenario-validation-errors
 :<- [:custom-scenario-draft]
 (fn [draft _]
   (when draft
     ;; Use the validate-draft function from events namespace
     ;; We need to access the private function, so we'll duplicate the logic here
     (let [{:keys [name player-count grid-pattern hex-types
                   face-up-distribution fog-distribution]} draft
           errors                                          {}

           ;; Name validation
           errors (if (clojure.string/blank? name)
                    (assoc errors :name "Scenario name is required")
                    errors)

           ;; Player count validation
           errors (if (or (not (number? player-count))
                          (< player-count 2)
                          (> player-count 6))
                    (assoc errors :player-count "Player count must be between 2 and 6")
                    errors)

           ;; Grid pattern validation
           errors (if (or (clojure.string/blank? grid-pattern)
                          (not (re-matches #"^\d+(-\d+)*$" grid-pattern)))
                    (assoc errors :grid-pattern "Grid pattern is invalid (use format: 3-4-5-4-3)")
                    errors)

           ;; Count terrain hexes (including village hexes which also need resources/numbers)
           terrain-count (count (:terrain hex-types))

           ;; Resource distribution validation
           face-up-resources (:resources face-up-distribution)
           total-resources   (reduce + (vals face-up-resources))

           errors (if (and (> terrain-count 0)
                           (not= total-resources terrain-count))
                    (assoc errors :resources
                           (str "Resource distribution mismatch: "
                                terrain-count " terrain hexes, "
                                total-resources " resources configured"))
                    errors)

           ;; Number token validation
           face-up-tokens  (:number-tokens face-up-distribution)
           total-tokens    (reduce + (vals face-up-tokens))
           desert-count    (get face-up-resources :desert 0)
           village-count   (get face-up-resources :village 0)
           expected-tokens (- terrain-count desert-count village-count)

           errors (if (and (> terrain-count 0)
                           (not= total-tokens expected-tokens))
                    (assoc errors :tokens
                           (str "Number token count mismatch: "
                                expected-tokens " expected (terrain minus desert), "
                                total-tokens " tokens configured"))
                    errors)]
       errors))))

;; -- Custom Scenarios List ---------------------------------------------------

(rf/reg-sub
 :custom-scenarios-list
 (fn [_ _]
   (let [custom-scenarios (local-storage/load-from-local-storage :custom-scenarios)]
     (if (map? custom-scenarios)
       ;; Convert map to vector of [id config] pairs
       (vec (seq custom-scenarios))
       []))))
