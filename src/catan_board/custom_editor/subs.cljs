(ns catan-board.custom-editor.subs
  "Subscriptions for the custom scenario editor.
   Provides reactive access to editor state and validation."
  (:require
   [re-frame.core :as rf]
   [catan-board.middleware.local-storage :as local-storage]
   [catan-board.custom-editor.events :as events]))

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
           errors {}

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

           ;; Count terrain hexes
           terrain-count (->> hex-types
                              vals
                              (remove #{:water :fog})
                              count)

           ;; Resource distribution validation
           face-up-resources (:resources face-up-distribution)
           total-resources (reduce + (vals face-up-resources))

           errors (if (and (> terrain-count 0)
                           (not= total-resources terrain-count))
                    (assoc errors :resources
                           (str "Resource distribution mismatch: "
                                terrain-count " terrain hexes, "
                                total-resources " resources configured"))
                    errors)

           ;; Number token validation
           face-up-tokens (:number-tokens face-up-distribution)
           total-tokens (reduce + (vals face-up-tokens))
           desert-count (get face-up-resources :desert 0)
           expected-tokens (- terrain-count desert-count)

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
