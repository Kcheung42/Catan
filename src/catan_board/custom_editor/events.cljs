(ns catan-board.custom-editor.events
  "Event handlers for the custom scenario editor.
   Manages scenario creation, editing, and persistence."
  (:require
   [re-frame.core :as rf]
   [clojure.string :as str]
   [catan-board.middleware.local-storage :as local-storage]
   [catan-board.scenarios.registry :as registry]))

;; -- Constants ---------------------------------------------------------------

(def persist-db
  "Middleware to persist the database to local storage after an event"
  (local-storage/persist-db-after "app-db"))

(def default-draft
  "Default draft structure with base game defaults"
  {:id            nil
   :name          ""
   :player-count  4
   :grid-pattern  "3-4-5-4-3"
   :hex-types     {:water #{} :terrain #{} :fog #{} :village #{}}
   :harbors       []
   :face-up-distribution
   {:resources     {:water  0
                    :desert 0
                    :gold   0
                    :wheat  0
                    :brick  0
                    :ore    0
                    :sheep  0
                    :wood   0}
    :number-tokens {2  0
                    3  0
                    4  0
                    5  0
                    6  0
                    8  0
                    9  0
                    10 0
                    11 0
                    12 0}
    :assignment    :random}
   :fog-distribution
   {:resources     {:water  0
                    :desert 0
                    :gold   0
                    :wheat  0
                    :brick  0
                    :ore    0
                    :sheep  0
                    :wood   0}
    :number-tokens {2  0
                    3  0
                    4  0
                    5  0
                    6  0
                    8  0
                    9  0
                    10 0
                    11 0
                    12 0}
    :assignment    :on-reveal}})

;; -- Helper Functions --------------------------------------------------------

(defn- get-hex-type
  "Gets the type of a hex from the hex-types structure.
   hex-types structure: {:water #{coords} :terrain #{coords} :fog #{coords} :village #{coords}}
   Returns the type keyword (:water/:terrain/:fog/:village) or nil if not found."
  [hex-types coord]
  (cond
    (contains? (:water hex-types) coord) :water
    (contains? (:fog hex-types) coord) :fog
    (contains? (:village hex-types) coord) :village
    (contains? (:terrain hex-types) coord) :terrain
    :else nil))

(defn- add-hex-to-type
  "Adds a coordinate to the appropriate type set in hex-types.
   Removes the coord from all other type sets first to ensure uniqueness."
  [hex-types coord new-type]
  (let [;; Remove from all sets first
        cleaned (reduce (fn [acc type-key]
                         (update acc type-key disj coord))
                       hex-types
                       [:water :fog :village :terrain])]
    ;; Add to new type set
    (update cleaned new-type (fn [s] (conj (or s #{}) coord)))))

(defn- remove-hex-from-all-types
  "Removes a coordinate from all type sets in hex-types."
  [hex-types coord]
  (reduce (fn [acc type-key]
           (update acc type-key disj coord))
         hex-types
         [:water :fog :village :terrain]))

(defn- generate-scenario-id
  "Generate a kebab-case keyword ID from a scenario name.
   Handles duplicates by appending a number."
  [name]
  (let [base-id (-> name
                    str/lower-case
                    (str/replace #"[^a-z0-9\s-]" "")
                    (str/replace #"\s+" "-")
                    keyword)
        existing-scenarios (local-storage/load-from-local-storage :custom-scenarios)
        existing-ids (set (keys existing-scenarios))]
    (if (contains? existing-ids base-id)
      ;; Find next available ID with number suffix
      (loop [n 2]
        (let [numbered-id (keyword (str (name base-id) "-" n))]
          (if (contains? existing-ids numbered-id)
            (recur (inc n))
            numbered-id)))
      base-id)))

(defn- count-terrain-hexes
  "Count the number of terrain hexes (excludes water, fog, and village) from hex-types map.
   hex-types structure: {:water #{coords} :terrain #{coords} :fog #{coords} :village #{coords}}"
  [hex-types]
  (+ (count (:terrain hex-types))
     (count (:village hex-types))))

(defn- validate-draft
  "Validate a scenario draft and return a map of validation errors.
   Returns empty map if valid."
  [draft]
  (let [errors {}
        {:keys [name player-count grid-pattern hex-types
                face-up-distribution fog-distribution]} draft

        ;; Name validation
        errors (if (str/blank? name)
                 (assoc errors :name "Scenario name is required")
                 errors)

        ;; Player count validation
        errors (if (or (not (number? player-count))
                       (< player-count 2)
                       (> player-count 6))
                 (assoc errors :player-count "Player count must be between 2 and 6")
                 errors)

        ;; Grid pattern validation
        errors (if (or (str/blank? grid-pattern)
                       (not (re-matches #"^\d+(-\d+)*$" grid-pattern)))
                 (assoc errors :grid-pattern "Grid pattern is invalid (use format: 3-4-5-4-3)")
                 errors)

        ;; Count terrain hexes
        terrain-count (count-terrain-hexes hex-types)

        ;; Resource distribution validation (face-up only for now)
        face-up-resources (:resources face-up-distribution)
        total-resources (reduce + (vals face-up-resources))

        ;; For validation, we need to match terrain count (excluding water and fog)
        ;; Desert doesn't get a number token but is still a hex
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
    errors))

(defn- drafts-are-different?
  "Check if two drafts are different. Used to detect unsaved changes."
  [draft1 draft2]
  (not= draft1 draft2))

(defn- has-unsaved-changes?
  "Check if the current draft has unsaved changes compared to the saved version.
   Returns true if:
   - Draft has no ID (never saved)
   - Draft differs from the saved scenario in local storage"
  [db]
  (let [draft (get-in db [:ui :custom-scenario-draft])
        draft-id (:id draft)]
    (if draft-id
      ;; Draft has been saved before - compare with saved version
      (let [custom-scenarios (local-storage/load-from-local-storage :custom-scenarios)
            saved-version (get custom-scenarios draft-id)]
        (if saved-version
          (drafts-are-different? draft saved-version)
          ;; Saved version not found - treat as unsaved changes
          true))
      ;; No ID means never saved - check if any meaningful changes from default
      (drafts-are-different? draft default-draft))))

;; -- Mode Management Events --------------------------------------------------

(rf/reg-event-db
 :toggle-custom-scenario-editor
 [persist-db]
 (fn [db _]
   (let [editor-mode? (get-in db [:ui :custom-scenario-editor-mode])]
     (-> db
         (assoc-in [:ui :custom-scenario-editor-mode] (not editor-mode?))
         ;; Initialize draft with defaults when entering editor mode
         (assoc-in [:ui :custom-scenario-draft]
                   (if editor-mode? nil default-draft))))))

(rf/reg-event-db
 :reset-custom-scenario-draft
 [persist-db]
 (fn [db _]
   (assoc-in db [:ui :custom-scenario-draft] default-draft)))

(rf/reg-event-db
 :load-custom-scenario-for-editing
 [persist-db]
 (fn [db [_ scenario-id force-load?]]
   ;; Check for unsaved changes unless force-load? is true
   (if (and (not force-load?)
            (has-unsaved-changes? db))
     ;; Has unsaved changes - don't load, return db unchanged
     ;; UI should handle showing confirmation dialog
     db
     ;; No unsaved changes or forced load - proceed
     (let [custom-scenarios (local-storage/load-from-local-storage :custom-scenarios)
           scenario-config (get custom-scenarios scenario-id)]
       (if scenario-config
         (assoc-in db [:ui :custom-scenario-draft] scenario-config)
         db)))))

;; -- Configuration Update Events ---------------------------------------------

(rf/reg-event-db
 :update-scenario-name
 [persist-db]
 (fn [db [_ new-name]]
   (assoc-in db [:ui :custom-scenario-draft :name] new-name)))

(rf/reg-event-db
 :update-scenario-player-count
 [persist-db]
 (fn [db [_ new-count]]
   (assoc-in db [:ui :custom-scenario-draft :player-count]
             (js/parseInt new-count 10))))

(rf/reg-event-db
 :update-grid-pattern
 [persist-db]
 (fn [db [_ new-pattern]]
   (assoc-in db [:ui :custom-scenario-draft :grid-pattern] new-pattern)))

(rf/reg-event-db
 :update-face-up-resource
 [persist-db]
 (fn [db [_ resource-type count]]
   (assoc-in db [:ui :custom-scenario-draft :face-up-distribution :resources resource-type]
             (js/parseInt count 10))))

(rf/reg-event-db
 :update-face-down-resource
 [persist-db]
 (fn [db [_ resource-type count]]
   (assoc-in db [:ui :custom-scenario-draft :fog-distribution :resources resource-type]
             (js/parseInt count 10))))

(rf/reg-event-db
 :update-face-up-number
 [persist-db]
 (fn [db [_ number count]]
   (assoc-in db [:ui :custom-scenario-draft :face-up-distribution :number-tokens number]
             (js/parseInt count 10))))

(rf/reg-event-db
 :update-face-down-number
 [persist-db]
 (fn [db [_ number count]]
   (assoc-in db [:ui :custom-scenario-draft :fog-distribution :number-tokens number]
             (js/parseInt count 10))))

;; -- Hex Assignment Events ---------------------------------------------------

(rf/reg-event-db
 :set-editor-hex-selection-mode
 [persist-db]
 (fn [db [_ mode]]
   (cond-> db
       :always (assoc-in [:ui :editor-hex-selection-mode] mode)
       (not= mode :harbor) (assoc-in [:ui :harbor-placement-coord] nil))))

(rf/reg-event-db
 :assign-hex-type
 [persist-db]
 (fn [db [_ coord hex-type]]
   (update-in db [:ui :custom-scenario-draft :hex-types]
              #(add-hex-to-type % coord hex-type))))

(rf/reg-event-db
 :clear-hex-assignment
 [persist-db]
 (fn [db [_ coord]]
   (update-in db [:ui :custom-scenario-draft :hex-types]
              #(remove-hex-from-all-types % coord))))

(rf/reg-event-db
 :clear-all-hex-assignments
 [persist-db]
 (fn [db _]
   (-> db
       (assoc-in [:ui :custom-scenario-draft :hex-types] {:water #{} :terrain #{} :fog #{} :village #{}})
       (assoc-in [:ui :custom-scenario-draft :harbors] []))))

;; -- Harbor Management Events ------------------------------------------------

(rf/reg-event-db
 :place-harbor-at-hex
 [persist-db]
 (fn [db [_ coord]]
   ;; Store the coordinate for harbor placement
   ;; UI will show directional selector
   (assoc-in db [:ui :harbor-placement-coord] coord)))

(rf/reg-event-db
 :set-harbor-direction
 [persist-db]
 (fn [db [_ coord direction]]
   (let [new-harbor {:land-hex  coord
                     :direction direction
                     :type      :generic}
         current-harbors (get-in db [:ui :custom-scenario-draft :harbors] [])]
     (-> db
         (assoc-in [:ui :custom-scenario-draft :harbors]
                   (conj current-harbors new-harbor))
         ;; Clear harbor placement state
         (assoc-in [:ui :harbor-placement-coord] nil)))))

(rf/reg-event-db
 :assign-harbor-type
 [persist-db]
 (fn [db [_ land-hex direction new-type]]
   (let [harbors (get-in db [:ui :custom-scenario-draft :harbors] [])
         updated-harbors (mapv
                          (fn [harbor]
                            (if (and (= (:land-hex harbor) land-hex)
                                     (= (:direction harbor) direction))
                              (assoc harbor :type new-type)
                              harbor))
                          harbors)]
     (assoc-in db [:ui :custom-scenario-draft :harbors] updated-harbors))))

(rf/reg-event-db
 :remove-harbor
 [persist-db]
 (fn [db [_ land-hex direction]]
   (let [harbors (get-in db [:ui :custom-scenario-draft :harbors] [])
         updated-harbors (filterv
                          (fn [harbor]
                            (not (and (= (:land-hex harbor) land-hex)
                                      (= (:direction harbor) direction))))
                          harbors)]
     (assoc-in db [:ui :custom-scenario-draft :harbors] updated-harbors))))

(rf/reg-event-db
 :set-harbor-type-selection-mode
 [persist-db]
 (fn [db]
   (assoc-in db [:ui :harbor-type-selection-mode] true)))

;; -- Scenario Persistence Events ---------------------------------------------

(rf/reg-event-db
 :save-custom-scenario
 [persist-db]
 (fn [db _]
   (let [draft (get-in db [:ui :custom-scenario-draft])
         validation-errors (validate-draft draft)]
     (if (empty? validation-errors)
       ;; Valid scenario - generate ID and save
       (let [scenario-id (or (:id draft) (generate-scenario-id (:name draft)))
             scenario-to-save (assoc draft :id scenario-id)]
         ;; Save to local storage
         (local-storage/assoc-to-local-storage-array!
          :custom-scenarios
          {scenario-id scenario-to-save})
         ;; Update draft with generated ID
         (assoc-in db [:ui :custom-scenario-draft :id] scenario-id))
       ;; Invalid - return db unchanged (errors will be shown via subscription)
       db))))

(rf/reg-event-fx
 :export-custom-scenario
 (fn [{:keys [db]} _]
   (let [draft (get-in db [:ui :custom-scenario-draft])
         edn-string (pr-str draft)]
     ;; Copy to clipboard
     (when (and js/navigator.clipboard (.-writeText js/navigator.clipboard))
       (.writeText js/navigator.clipboard edn-string))
     ;; Return no db changes
     {:db db})))
