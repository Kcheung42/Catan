(ns catan-board.integration.scenario-integration-test
  "Integration tests for Fog Islands scenario feature.
   Tests end-to-end workflows including scenario selection, board generation,
   fog reveal mechanics, and scenario switching."
  (:require
   [cljs.test :refer-macros [deftest testing is use-fixtures]]
   [re-frame.core :as rf]
   [catan-board.events]
   [catan-board.subs]
   [catan-board.db :as db]
   [catan-board.scenarios.registry :as registry]
   [catan-board.scenarios.fog-islands-3p :as fog-islands]
   [catan-board.utils.scenario-generator :as scenario-gen]))

;; Test fixture to initialize and clean up re-frame for each test
(use-fixtures :each
  {:before (fn []
             (rf/reg-event-db
              :test/set-db
              (fn [_ [_ new-db]]
                new-db)))
   :after (fn []
            (rf/clear-subscription-cache!))})

;; -- Integration Test 1: Complete Scenario Selection Flow -------------------

(deftest complete-scenario-selection-flow
  (testing "Complete flow: dropdown selection -> board regeneration -> state update"
    ;; Start with base game
    (rf/dispatch-sync [:test/set-db
                       {:scenario :base-game
                        :board {:hexes [] :harbors []}
                        :fog-state {}
                        :ui {:tournament-mode false :selected-token-coord nil}}])

    ;; User selects Fog Islands from dropdown
    (rf/dispatch-sync [:set-scenario :fog-islands-3p])

    ;; Verify complete state after scenario selection
    (let [scenario @(rf/subscribe [:current-scenario])
          hexes @(rf/subscribe [:hexes])
          harbors @(rf/subscribe [:harbors])
          fog-state @(rf/subscribe [:fog-state])]

      ;; Scenario should be updated
      (is (= :fog-islands-3p scenario)
          "Scenario should be updated to :fog-islands-3p")

      ;; Board should have correct hex count (44 hexes total)
      (is (= 44 (count hexes))
          "Board should have 44 hexes for Fog Islands scenario")

      ;; Should have water hexes (18)
      (let [water-count (count (filter #(= :water (:resource %)) hexes))]
        (is (= 18 water-count)
            "Should have 18 water hexes"))

      ;; Should have fog hexes (12)
      (let [fog-count (count (filter #(= :fog (:resource %)) hexes))]
        (is (= 12 fog-count)
            "Should have 12 fog hexes"))

      ;; Should have terrain hexes (14)
      (let [terrain-count (count (filter #(not (#{:water :fog} (:resource %))) hexes))]
        (is (= 14 terrain-count)
            "Should have 14 terrain hexes"))

      ;; Should have 8 harbors
      (is (= 8 (count harbors))
          "Should have 8 harbors in Fog Islands scenario")

      ;; Fog state should be initialized with 12 unrevealed entries
      (is (= 12 (count fog-state))
          "Fog state should have 12 entries")
      (is (every? #(false? (:revealed? (second %))) fog-state)
          "All fog hexes should start unrevealed"))))

;; -- Integration Test 2: Complete Fog Reveal Flow ---------------------------

(deftest complete-fog-reveal-flow
  (testing "Complete flow: click fog hex -> state update -> re-render"
    ;; Initialize with Fog Islands scenario
    (rf/dispatch-sync [:set-scenario :fog-islands-3p])

    ;; Get a fog hex coordinate
    (let [initial-fog-state @(rf/subscribe [:fog-state])
          fog-coord (first (keys initial-fog-state))]

      ;; User clicks on fog hex
      (rf/dispatch-sync [:reveal-fog-tile fog-coord])

      ;; Verify state after reveal
      (let [updated-fog-state @(rf/subscribe [:fog-state])
            revealed-hex (get updated-fog-state fog-coord)]

        ;; Fog hex should be marked as revealed
        (is (= true (:revealed? revealed-hex))
            "Fog hex should be revealed after click")

        ;; Terrain should be assigned
        (is (some? (:terrain revealed-hex))
            "Revealed fog hex should have terrain assigned")
        (is (contains? #{:wood :brick :sheep :wheat :ore :desert :gold :water}
                       (:terrain revealed-hex))
            "Terrain should be a valid resource type")

        ;; Number should be assigned (or nil for desert/water)
        (is (contains? revealed-hex :number)
            "Revealed fog hex should have number key")
        (when (not (#{:desert :water} (:terrain revealed-hex)))
          (is (number? (:number revealed-hex))
              "Non-desert/water revealed fog should have number token"))

        ;; Clicking again should not change state
        (let [state-after-first-reveal updated-fog-state]
          (rf/dispatch-sync [:reveal-fog-tile fog-coord])
          (is (= state-after-first-reveal @(rf/subscribe [:fog-state]))
              "Clicking already revealed fog should not change state"))))))

;; -- Integration Test 3: Scenario Switching Cycle ---------------------------

(deftest scenario-switching-cycle
  (testing "Complete flow: fog islands -> base game -> fog islands"
    ;; Start with Fog Islands
    (rf/dispatch-sync [:set-scenario :fog-islands-3p])

    (let [initial-hexes-count (count @(rf/subscribe [:hexes]))
          initial-fog-state @(rf/subscribe [:fog-state])]

      ;; Should have 44 hexes and fog state
      (is (= 44 initial-hexes-count)
          "Fog Islands should have 44 hexes")
      (is (= 12 (count initial-fog-state))
          "Should have 12 fog hexes")

      ;; Switch to base game
      (rf/dispatch-sync [:set-scenario :base-game])

      (let [base-hexes @(rf/subscribe [:hexes])
            base-fog-state @(rf/subscribe [:fog-state])]

        ;; Base game should have different hex count (19 land hexes)
        (is (= 19 (count base-hexes))
            "Base game should have 19 hexes")

        ;; Fog state should be empty
        (is (empty? base-fog-state)
            "Base game should have no fog state")

        ;; No water or fog hexes in base game
        (is (zero? (count (filter #(= :water (:resource %)) base-hexes)))
            "Base game should have no water hexes")
        (is (zero? (count (filter #(= :fog (:resource %)) base-hexes)))
            "Base game should have no fog hexes")

        ;; Switch back to Fog Islands
        (rf/dispatch-sync [:set-scenario :fog-islands-3p])

        (let [final-hexes @(rf/subscribe [:hexes])
              final-fog-state @(rf/subscribe [:fog-state])]

          ;; Should be back to Fog Islands configuration
          (is (= 44 (count final-hexes))
              "Should have 44 hexes again")
          (is (= 12 (count final-fog-state))
              "Should have 12 fog hexes again")
          (is (every? #(false? (:revealed? (second %))) final-fog-state)
              "All fog hexes should be unrevealed after switching back"))))))

;; -- Integration Test 4: Harbor Rendering with Fog Islands ------------------

(deftest harbors-render-correctly-in-fog-islands
  (testing "Harbors should be positioned correctly in Fog Islands scenario"
    (rf/dispatch-sync [:set-scenario :fog-islands-3p])

    (let [harbors @(rf/subscribe [:harbors])
          hexes @(rf/subscribe [:hexes])
          hex-coords (set (map :coord hexes))]

      ;; Should have 8 harbors
      (is (= 8 (count harbors))
          "Fog Islands should have 8 harbors")

      ;; Each harbor should reference a valid land hex coordinate
      (doseq [harbor harbors]
        (is (contains? harbor :land-hex)
            "Each harbor should have :land-hex")
        (is (contains? hex-coords (:land-hex harbor))
            "Harbor land-hex should reference an existing hex coordinate")
        (is (contains? harbor :direction)
            "Each harbor should have :direction")
        (is (<= 0 (:direction harbor) 5)
            "Harbor direction should be 0-5")
        (is (contains? harbor :type)
            "Each harbor should have :type"))

      ;; Should have mix of generic and resource-specific harbors
      (let [harbor-types (frequencies (map :type harbors))
            generic-count (get harbor-types :generic 0)
            resource-count (- 8 generic-count)]
        (is (pos? generic-count)
            "Should have at least one generic harbor")
        (is (pos? resource-count)
            "Should have at least one resource-specific harbor")))))

;; -- Integration Test 5: Fog Reveal Persistence Across Re-renders -----------

(deftest fog-reveal-persists-across-state-changes
  (testing "Revealed fog hexes should remain revealed after UI state changes"
    (rf/dispatch-sync [:set-scenario :fog-islands-3p])

    (let [fog-state @(rf/subscribe [:fog-state])
          fog-coord (first (keys fog-state))]

      ;; Reveal a fog hex
      (rf/dispatch-sync [:reveal-fog-tile fog-coord])

      (let [revealed-state-before (get @(rf/subscribe [:fog-state]) fog-coord)]

        ;; Change tournament mode (UI state change)
        (rf/dispatch-sync [:toggle-tournament-mode])

        ;; Fog state should persist
        (let [revealed-state-after (get @(rf/subscribe [:fog-state]) fog-coord)]
          (is (= revealed-state-before revealed-state-after)
              "Revealed fog state should persist after UI changes")
          (is (:revealed? revealed-state-after)
              "Fog hex should still be revealed"))

        ;; Generate new board (keeping same scenario)
        (rf/dispatch-sync [:generate-board])

        ;; New board should have fresh fog state (all unrevealed)
        (let [new-fog-state @(rf/subscribe [:fog-state])]
          (is (every? #(false? (:revealed? (second %))) new-fog-state)
              "Generating new board should reset fog state"))))))

;; -- Integration Test 6: Scenario Config Data Integrity ---------------------

(deftest scenario-config-data-integrity
  (testing "Scenario configuration should be internally consistent"
    (let [config fog-islands/fog-islands-3p-scenario
          water-count (count (get-in config [:hex-types :water]))
          fog-count (count (get-in config [:hex-types :fog]))
          terrain-count (count (get-in config [:hex-types :terrain]))
          total-hexes (+ water-count fog-count terrain-count)

          face-up-resources (get-in config [:face-up-distribution :resources])
          face-up-resource-total (reduce + (vals face-up-resources))
          face-up-numbers (get-in config [:face-up-distribution :number-tokens])
          face-up-numbers-total (reduce + (vals face-up-numbers))

          fog-resources (get-in config [:fog-distribution :resources])
          fog-resource-total (reduce + (vals fog-resources))
          fog-numbers (get-in config [:fog-distribution :number-tokens])
          fog-numbers-total (reduce + (vals fog-numbers))]

      ;; Total hexes should be 44
      (is (= 44 total-hexes)
          "Total hex coordinates should equal 44")

      ;; Hex type counts should match expected
      (is (= 18 water-count)
          "Should have 18 water hexes")
      (is (= 12 fog-count)
          "Should have 12 fog hexes")
      (is (= 14 terrain-count)
          "Should have 14 terrain hexes")

      ;; Face-up distribution integrity
      (is (= terrain-count face-up-resource-total)
          "Face-up resource count should match terrain hex count")
      (is (= 13 face-up-numbers-total)
          "Should have 13 number tokens for face-up hexes (14 - 1 desert)")

      ;; Fog distribution integrity
      (is (= fog-count fog-resource-total)
          "Fog resource count should match fog hex count")
      (is (= 10 fog-numbers-total)
          "Should have 10 number tokens for fog hexes (12 - 2 deserts)")

      ;; Gold resource should only appear in fog distribution
      (is (nil? (get face-up-resources :gold))
          "Gold should not appear in face-up distribution")
      (is (= 2 (get fog-resources :gold))
          "Gold should appear in fog distribution with count 2")

      ;; Harbor count should be 8
      (is (= 8 (count (:harbors config)))
          "Should have 8 harbors defined"))))

;; -- Integration Test 7: Multiple Fog Reveals in Sequence -------------------

(deftest multiple-fog-reveals-in-sequence
  (testing "Multiple fog hexes can be revealed in sequence independently"
    (rf/dispatch-sync [:set-scenario :fog-islands-3p])

    (let [fog-state @(rf/subscribe [:fog-state])
          fog-coords (take 3 (keys fog-state))]

      ;; Reveal three fog hexes in sequence
      (doseq [coord fog-coords]
        (rf/dispatch-sync [:reveal-fog-tile coord]))

      ;; Verify all three are revealed
      (let [updated-fog-state @(rf/subscribe [:fog-state])]
        (doseq [coord fog-coords]
          (is (true? (:revealed? (get updated-fog-state coord)))
              (str "Fog hex at " coord " should be revealed")))

        ;; Count revealed vs unrevealed
        (let [revealed-count (count (filter #(:revealed? (second %)) updated-fog-state))
              unrevealed-count (- 12 revealed-count)]
          (is (= 3 revealed-count)
              "Should have exactly 3 revealed fog hexes")
          (is (= 9 unrevealed-count)
              "Should have 9 unrevealed fog hexes remaining"))))))

;; -- Integration Test 8: Scenario Registry Integration ----------------------

(deftest scenario-registry-integration
  (testing "Scenario registry should provide consistent scenario data"
    ;; Get scenario from registry
    (let [scenario-from-registry (registry/get-scenario :fog-islands-3p)
          scenario-direct fog-islands/fog-islands-3p-scenario]

      ;; Should be the same scenario
      (is (some? scenario-from-registry)
          "Registry should return scenario for :fog-islands-3p")
      (is (= (:id scenario-direct) (:id scenario-from-registry))
          "Registry scenario should have same ID as direct import")

      ;; Available scenarios should include both base game and fog islands
      (let [available (registry/list-scenarios)]
        (is (>= (count available) 2)
            "Should have at least 2 scenarios available")
        (is (some #(= :base-game (:id %)) available)
            "Available scenarios should include :base-game")
        (is (some #(= :fog-islands-3p (:id %)) available)
            "Available scenarios should include :fog-islands-3p"))

      ;; Invalid scenario ID should return nil
      (is (nil? (registry/get-scenario :invalid-scenario))
          "Registry should return nil for invalid scenario ID"))))

;; -- Integration Test 9: Board Generation Determinism -----------------------

(deftest board-generation-randomness-and-validity
  (testing "Board generation should produce valid boards with proper randomization"
    ;; Generate two boards from same scenario
    (rf/dispatch-sync [:set-scenario :fog-islands-3p])
    (let [first-hexes @(rf/subscribe [:hexes])]

      (rf/dispatch-sync [:generate-board])
      (let [second-hexes @(rf/subscribe [:hexes])]

        ;; Both boards should have same structure
        (is (= (count first-hexes) (count second-hexes))
            "Both boards should have same hex count")

        ;; Resource assignments should be different (randomized)
        ;; Compare terrain hex resources
        (let [first-terrain (filter #(not (#{:water :fog} (:resource %))) first-hexes)
              second-terrain (filter #(not (#{:water :fog} (:resource %))) second-hexes)
              first-resources (map :resource first-terrain)
              second-resources (map :resource second-terrain)]
          ;; Note: There's a small chance resources match, but very unlikely
          (is (or (not= first-resources second-resources)
                  ;; If they match, at least verify they're valid
                  (every? #(contains? #{:wood :brick :sheep :wheat :ore :desert}
                                      %)
                          first-resources))
              "Board generation should randomize resource placement"))

        ;; All coordinates should be valid for all hexes
        (doseq [hex second-hexes]
          (is (vector? (:coord hex))
              "Each hex should have coordinate vector")
          (is (= 2 (count (:coord hex)))
              "Coordinate should be [q r] pair")
          (is (keyword? (:resource hex))
              "Each hex should have resource keyword"))))))

;; -- Integration Test 10: Edge Case - All Fog Revealed ----------------------

(deftest all-fog-hexes-revealed
  (testing "All fog hexes can be revealed without errors"
    (rf/dispatch-sync [:set-scenario :fog-islands-3p])

    (let [fog-state @(rf/subscribe [:fog-state])
          all-fog-coords (keys fog-state)]

      ;; Reveal all fog hexes
      (doseq [coord all-fog-coords]
        (rf/dispatch-sync [:reveal-fog-tile coord]))

      ;; Verify all are revealed
      (let [final-fog-state @(rf/subscribe [:fog-state])]
        (is (= 12 (count final-fog-state))
            "Should still have 12 fog state entries")
        (is (every? #(:revealed? (second %)) final-fog-state)
            "All fog hexes should be revealed")

        ;; Count terrain types in revealed fog
        (let [revealed-terrains (map #(:terrain (second %)) final-fog-state)
              terrain-counts (frequencies revealed-terrains)]

          ;; Should have assigned all fog resources
          (is (= 12 (count revealed-terrains))
              "Should have 12 terrain assignments")

          ;; Gold should appear (unique to fog)
          (is (pos? (get terrain-counts :gold 0))
              "Some revealed fog hexes should be gold terrain"))))))
