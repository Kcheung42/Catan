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
   :hex-types     {}
   :harbors       []
   :face-up-distribution
   {:resources     {:water  0
                    :desert 1
                    :gold   0
                    :wheat  4
                    :brick  3
                    :ore    3
                    :sheep  4
                    :wood   4}
    :number-tokens {2  1
                    3  2
                    4  2
                    5  2
                    6  2
                    8  2
                    9  2
                    10 2
                    11 2
                    12 1}
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
  "Count the number of terrain hexes (excludes water and fog) from hex-types map"
  [hex-types]
  (->> hex-types
       vals
       (remove #{:water :fog})
       count))

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
 (fn [db [_ scenario-id]]
   (let [custom-scenarios (local-storage/load-from-local-storage :custom-scenarios)
         scenario-config (get custom-scenarios scenario-id)]
     (if scenario-config
       (assoc-in db [:ui :custom-scenario-draft] scenario-config)
       db))))

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
   (assoc-in db [:ui :editor-hex-selection-mode] mode)))

(rf/reg-event-db
 :assign-hex-type
 [persist-db]
 (fn [db [_ coord hex-type]]
   (assoc-in db [:ui :custom-scenario-draft :hex-types coord] hex-type)))

(rf/reg-event-db
 :clear-hex-assignment
 [persist-db]
 (fn [db [_ coord]]
   (update-in db [:ui :custom-scenario-draft :hex-types] dissoc coord)))

(rf/reg-event-db
 :clear-all-hex-assignments
 [persist-db]
 (fn [db _]
   (-> db
       (assoc-in [:ui :custom-scenario-draft :hex-types] {})
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

;; -- Scenario Persistence Events ---------------------------------------------

(rf/reg-event-db
 :save-custom-scenario
 [persist-db]
 (fn [db _]
   (let [draft (get-in db [:ui :custom-scenario-draft])
         validation-errors (validate-draft draft)]
     (if (empty? validation-errors)
       ;; Valid scenario - generate ID and save
       (let [scenario-id (generate-scenario-id (:name draft))
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
