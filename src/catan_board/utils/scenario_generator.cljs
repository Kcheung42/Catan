(ns catan-board.utils.scenario-generator
  "Generates Catan board state from scenario configuration data.
   Handles resource assignment, number token distribution, and fog state initialization."
  (:require
   [catan-board.utils.hex :as hex]))

;; -- Resource & Number Assignment --------------------------------------------

(defn- shuffle-resources
  "Creates a shuffled deck of resources from distribution map.
   Example: {:wood 3 :brick 2} -> [:wood :wood :wood :brick :brick]"
  [resource-distribution]
  (let [resource-deck (mapcat (fn [[resource count]]
                                (repeat count resource))
                              resource-distribution)]
    (shuffle (vec resource-deck))))

(defn shuffle-numbers
  "Creates a shuffled deck of number tokens from distribution.
   Accepts either:
   - Vector format: [2 3 4 5 6] - direct list of tokens
   - Map format: {2 1, 3 2, 4 1} - token value to frequency mapping"
  [number-tokens]
  (if (map? number-tokens)
    ;; Map format: expand frequencies into token list
    ;; For each [token freq] pair, repeat token freq times
    (shuffle (vec (mapcat (fn [[token freq]] (repeat freq token))
                          number-tokens)))
    ;; Vector format: use as-is
    (shuffle (vec number-tokens))))

(defn- classify-hex-by-type
  "Determines hex type (water/fog/terrain) based on coordinate and config."
  [coord {:keys [hex-types]}]
  (cond
    (contains? (:water hex-types) coord)   :water
    (contains? (:fog hex-types) coord)     :fog
    (contains? (:terrain hex-types) coord) :terrain
    :else                                  :terrain)) ; default to terrain if not specified

(defn- assign-resource-to-hex
  "Assigns resource to a hex coordinate, consuming from resource deck."
  [coord resource]
  {:coord    coord
   :resource resource
   :number   nil})

(defn- assign-number-to-hex
  "Assigns number token to hex if it's not a desert, water, or fog."
  [hex number-atom]
  (if (or (= :desert (:resource hex))
          (= :water (:resource hex))
          (= :fog (:resource hex)))
    hex
    (let [num (first @number-atom)]
      (swap! number-atom rest)
      (assoc hex :number num))))

;; -- Board Generation --------------------------------------------------------

(defn generate-scenario-board
  "Generates a complete board from scenario configuration.

   Input: scenario-config map with keys:
     - :grid-pattern - row pattern string (e.g., '5-6-7-8-7-6-5')
     - :hex-types - {:water #{coords} :fog #{coords} :terrain #{coords}}
     - :face-up-distribution - {:resources {...} :number-tokens [...]}
     - :harbors - vector of harbor position maps

   Output: {:hexes [...] :harbors [...] :metadata {...}}

   Process:
     1. Generate grid coordinates from pattern
     2. Classify each coordinate by type (water/fog/terrain)
     3. Assign resources to terrain hexes (shuffled from distribution)
     4. Assign number tokens to non-desert terrain hexes (shuffled)
     5. Water and fog hexes get their type as resource
     6. Return complete board structure"
  [{:keys [grid-pattern hex-types face-up-distribution harbors] :as scenario-config}]
  (let [;; Step 1: Generate all coordinates from pattern
        all-coords (hex/generate-grid-from-pattern grid-pattern)

        ;; Step 2: Classify coordinates by type
        classified-coords (group-by #(classify-hex-by-type % scenario-config) all-coords)
        water-coords      (get classified-coords :water [])
        fog-coords        (get classified-coords :fog [])
        terrain-coords    (get classified-coords :terrain [])

        ;; Step 3: Prepare shuffled resource and number decks
        resource-deck (shuffle-resources (:resources face-up-distribution))
        number-deck   (shuffle-numbers (:number-tokens face-up-distribution))

        ;; Step 4: Create hexes for each type
        water-hexes (mapv #(assign-resource-to-hex % :water) water-coords)
        fog-hexes   (mapv #(assign-resource-to-hex % :fog) fog-coords)

        ;; Step 5: Assign resources to terrain hexes
        terrain-hexes-with-resources (mapv assign-resource-to-hex
                                           terrain-coords
                                           resource-deck)

        ;; Step 6: Assign numbers to non-desert terrain hexes
        number-atom                (atom number-deck)
        terrain-hexes-with-numbers (mapv #(assign-number-to-hex % number-atom)
                                         terrain-hexes-with-resources)

        ;; Step 7: Combine all hexes
        all-hexes (vec (concat water-hexes fog-hexes terrain-hexes-with-numbers))]

    ;; Return complete board structure
    {:hexes    all-hexes
     :harbors  (vec harbors) ; Use harbors from config directly (no shuffling)
     :metadata {:generated-at (.toISOString (js/Date.))
                :board-id     (str (random-uuid))
                :scenario-id  (:id scenario-config)
                :hex-counts   {:water   (count water-hexes)
                               :fog     (count fog-hexes)
                               :terrain (count terrain-hexes-with-numbers)}}}))

;; -- Fog Number Token Pool Initialization ------------------------------------------------

(defn initialize-fog-number-deck
  [{:keys [fog-distribution]}]
  (let [number-tokens (:number-tokens fog-distribution)]
    (shuffle-numbers number-tokens)))

;; -- Fog State Initialization ------------------------------------------------

(defn initialize-fog-state
  "Creates initial fog state map for scenario.

   Input: scenario-config map with :hex-types {:fog #{coords} ...}

   Output: Map of fog coordinates to state:
     {[q r] {:revealed? false :terrain nil :number nil}}

   All fog hexes start unrevealed with no terrain or number assigned."
  [{:keys [hex-types fog-distribution]}]
  (let [fog-coords    (:fog hex-types #{})
        resource-deck (shuffle (mapcat (fn [[resource count]]
                                            (repeat count resource))
                                          (:resources fog-distribution)))
        ;; Handle both vector and map formats for number-tokens
        number-tokens (:number-tokens fog-distribution)
        number-deck   (into (shuffle-numbers number-tokens) (repeat 100 -1))
        ]
    (into {}
          (map (fn [coord terrain]
                 [coord {:revealed? false
                         :terrain   terrain}])
               fog-coords
               resource-deck))))
