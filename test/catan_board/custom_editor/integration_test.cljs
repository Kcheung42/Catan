(ns catan-board.custom-editor.integration-test
  "Integration tests for custom scenario creation feature.
   Tests end-to-end workflows including scenario creation, saving, loading,
   board generation, and persistence."
  (:require
   [cljs.test :refer-macros [deftest testing is use-fixtures]]
   [re-frame.core :as rf]
   [catan-board.events]
   [catan-board.subs]
   [catan-board.custom-editor.events]
   [catan-board.custom-editor.subs]
   [catan-board.db :as db]
   [catan-board.scenarios.registry :as registry]
   [catan-board.middleware.local-storage :as local-storage]))

;; Test fixture to initialize and clean up re-frame for each test
(use-fixtures :each
  {:before (fn []
             ;; Clear local storage before each test
             (when (exists? js/localStorage)
               (.removeItem js/localStorage "custom-scenarios"))
             (rf/dispatch-sync [:initialize-db]))
   :after (fn []
            (rf/clear-subscription-cache!))})

;; Helper to get hex type from new structure
(defn- get-hex-type
  "Gets the type of a hex from the new hex-types structure.
   hex-types structure: {:water #{coords} :terrain #{coords} :fog #{coords} :village #{coords}}"
  [hex-types coord]
  (cond
    (contains? (:water hex-types) coord) :water
    (contains? (:fog hex-types) coord) :fog
    (contains? (:village hex-types) coord) :village
    (contains? (:terrain hex-types) coord) :terrain
    :else nil))

;; -- Integration Test 1: Custom Scenario Appears in Dropdown --------------------

(deftest custom-scenario-appears-in-dropdown
  (testing "Saved custom scenario automatically appears in scenario selector dropdown"
    ;; Enter editor mode
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Configure a simple scenario
    (rf/dispatch-sync [:update-scenario-name "Test Island Scenario"])
    (rf/dispatch-sync [:update-grid-pattern "3-4-5-4-3"])

    ;; Assign enough terrain hexes to match resource distribution
    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [2 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 2] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 2] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-2 2] :terrain])
    (rf/dispatch-sync [:assign-hex-type [2 -1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 -1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 -1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [2 -2] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 -2] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 -2] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 -1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-2 1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-2 0] :terrain])

    ;; Set resources to match 19 terrain hexes
    (rf/dispatch-sync [:update-face-up-resource :wheat "4"])
    (rf/dispatch-sync [:update-face-up-resource :brick "3"])
    (rf/dispatch-sync [:update-face-up-resource :ore "3"])
    (rf/dispatch-sync [:update-face-up-resource :sheep "4"])
    (rf/dispatch-sync [:update-face-up-resource :wood "4"])
    (rf/dispatch-sync [:update-face-up-resource :desert "1"])

    ;; Verify no validation errors
    (let [errors @(rf/subscribe [:custom-scenario-validation-errors])]
      (is (empty? errors)
          "Scenario should be valid before saving"))

    ;; Save the scenario
    (rf/dispatch-sync [:save-custom-scenario])

    ;; Verify scenario was saved to local storage
    (let [custom-scenarios (local-storage/load-from-local-storage :custom-scenarios)
          scenario-id :test-island-scenario
          saved-scenario (get custom-scenarios scenario-id)]
      (is (some? saved-scenario)
          "Scenario should be saved to local storage")
      (is (= "Test Island Scenario" (:name saved-scenario))
          "Saved scenario should have correct name"))

    ;; Verify scenario appears in registry list
    (let [all-scenarios (registry/list-scenarios)
          custom-scenario (first (filter #(= "Test Island Scenario" (:name %))
                                         all-scenarios))]
      (is (some? custom-scenario)
          "Custom scenario should appear in registry list")
      (is (= :test-island-scenario (:id custom-scenario))
          "Custom scenario should have generated ID")
      (is (= 4 (:player-count custom-scenario))
          "Custom scenario should have correct player count"))

    ;; Verify scenario can be retrieved from registry
    (let [retrieved (registry/get-scenario :test-island-scenario)]
      (is (some? retrieved)
          "Custom scenario should be retrievable from registry")
      (is (= "Test Island Scenario" (:name retrieved))
          "Retrieved scenario should have correct name"))))

;; -- Integration Test 2: Loading Custom Scenario Generates Board ----------------

(deftest loading-custom-scenario-generates-board
  (testing "Loading custom scenario generates board correctly with all features"
    ;; Create and save a custom scenario with water, terrain, and harbors
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:update-scenario-name "Harbor Test Scenario"])
    (rf/dispatch-sync [:update-grid-pattern "3-4-3"])

    ;; Assign mix of terrain and water
    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 -1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 -1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [2 0] :water])
    (rf/dispatch-sync [:assign-hex-type [-2 0] :water])
    (rf/dispatch-sync [:assign-hex-type [-2 1] :water])

    ;; Add harbors in different directions
    (rf/dispatch-sync [:set-harbor-direction [0 0] 0])
    (rf/dispatch-sync [:assign-harbor-type [0 0] 0 :wood])
    (rf/dispatch-sync [:set-harbor-direction [1 0] 2])
    (rf/dispatch-sync [:assign-harbor-type [1 0] 2 :sheep])

    ;; Set resource distribution for 7 terrain hexes
    (rf/dispatch-sync [:update-face-up-resource :wheat "2"])
    (rf/dispatch-sync [:update-face-up-resource :brick "1"])
    (rf/dispatch-sync [:update-face-up-resource :ore "1"])
    (rf/dispatch-sync [:update-face-up-resource :sheep "2"])
    (rf/dispatch-sync [:update-face-up-resource :wood "1"])
    (rf/dispatch-sync [:update-face-up-resource :desert "0"])

    ;; Set number tokens for 7 non-desert terrain hexes
    (rf/dispatch-sync [:update-face-up-number 2 "1"])
    (rf/dispatch-sync [:update-face-up-number 3 "1"])
    (rf/dispatch-sync [:update-face-up-number 4 "1"])
    (rf/dispatch-sync [:update-face-up-number 5 "1"])
    (rf/dispatch-sync [:update-face-up-number 6 "1"])
    (rf/dispatch-sync [:update-face-up-number 8 "1"])
    (rf/dispatch-sync [:update-face-up-number 9 "1"])
    (rf/dispatch-sync [:update-face-up-number 10 "0"])
    (rf/dispatch-sync [:update-face-up-number 11 "0"])
    (rf/dispatch-sync [:update-face-up-number 12 "0"])

    ;; Save scenario
    (rf/dispatch-sync [:save-custom-scenario])

    ;; Exit editor mode
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Load the custom scenario through normal scenario selection
    (rf/dispatch-sync [:set-scenario :harbor-test-scenario])

    ;; Verify board was generated
    (let [hexes @(rf/subscribe [:hexes])
          harbors @(rf/subscribe [:harbors])
          scenario @(rf/subscribe [:current-scenario])]

      ;; Scenario should be set
      (is (= :harbor-test-scenario scenario)
          "Current scenario should be set to custom scenario")

      ;; Board should have hexes
      (is (= 10 (count hexes))
          "Board should have 10 hexes (7 terrain + 3 water)")

      ;; Should have water hexes
      (let [water-hexes (filter #(= :water (:resource %)) hexes)]
        (is (= 3 (count water-hexes))
            "Should have 3 water hexes as configured"))

      ;; Should have terrain hexes with resources assigned
      (let [terrain-hexes (filter #(not= :water (:resource %)) hexes)]
        (is (= 7 (count terrain-hexes))
            "Should have 7 terrain hexes")
        (is (every? #(some? (:resource %)) terrain-hexes)
            "All terrain hexes should have resources assigned")
        (is (every? #(some? (:number %)) terrain-hexes)
            "All terrain hexes should have numbers assigned"))

      ;; Should have harbors
      (is (= 2 (count harbors))
          "Board should have 2 harbors as configured")

      ;; Verify harbor details
      (let [wood-harbor (first (filter #(= :wood (:type %)) harbors))
            sheep-harbor (first (filter #(= :sheep (:type %)) harbors))]
        (is (some? wood-harbor)
            "Should have wood harbor")
        (is (= [0 0] (:land-hex wood-harbor))
            "Wood harbor should be at correct hex")
        (is (= 0 (:direction wood-harbor))
            "Wood harbor should have correct direction")
        (is (some? sheep-harbor)
            "Should have sheep harbor")
        (is (= [1 0] (:land-hex sheep-harbor))
            "Sheep harbor should be at correct hex")
        (is (= 2 (:direction sheep-harbor))
            "Sheep harbor should have correct direction")))))

;; -- Integration Test 3: Loading Scenario for Editing Populates Draft -----------

(deftest loading-scenario-for-editing-populates-draft
  (testing "Loading scenario for editing populates all draft fields correctly"
    ;; Create and save a scenario
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:update-scenario-name "Edit Test Scenario"])
    (rf/dispatch-sync [:update-scenario-player-count "3"])
    (rf/dispatch-sync [:update-grid-pattern "2-3-2"])

    ;; Configure with specific values
    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 0] :fog])
    (rf/dispatch-sync [:assign-hex-type [0 1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 -1] :water])
    (rf/dispatch-sync [:assign-hex-type [0 -1] :terrain])

    ;; Add a harbor
    (rf/dispatch-sync [:set-harbor-direction [0 0] 3])
    (rf/dispatch-sync [:assign-harbor-type [0 0] 3 :brick])

    ;; Set face-up resources for 5 terrain hexes
    (rf/dispatch-sync [:update-face-up-resource :wheat "1"])
    (rf/dispatch-sync [:update-face-up-resource :brick "1"])
    (rf/dispatch-sync [:update-face-up-resource :ore "1"])
    (rf/dispatch-sync [:update-face-up-resource :sheep "1"])
    (rf/dispatch-sync [:update-face-up-resource :wood "1"])

    ;; Set face-down (fog) resources
    (rf/dispatch-sync [:update-face-down-resource :gold "1"])

    ;; Set number tokens
    (rf/dispatch-sync [:update-face-up-number 5 "2"])
    (rf/dispatch-sync [:update-face-up-number 6 "2"])
    (rf/dispatch-sync [:update-face-up-number 8 "1"])

    (rf/dispatch-sync [:update-face-down-number 9 "1"])

    ;; Save scenario
    (rf/dispatch-sync [:save-custom-scenario])

    ;; Clear draft by resetting
    (rf/dispatch-sync [:reset-custom-scenario-draft])

    ;; Verify draft was reset
    (let [draft-after-reset @(rf/subscribe [:custom-scenario-draft])]
      (is (= "" (:name draft-after-reset))
          "Draft should be reset with empty name"))

    ;; Load scenario for editing
    (rf/dispatch-sync [:load-custom-scenario-for-editing :edit-test-scenario])

    ;; Verify all fields are populated correctly
    (let [loaded-draft @(rf/subscribe [:custom-scenario-draft])]
      ;; Metadata
      (is (= "Edit Test Scenario" (:name loaded-draft))
          "Name should be loaded")
      (is (= 3 (:player-count loaded-draft))
          "Player count should be loaded")
      (is (= "2-3-2" (:grid-pattern loaded-draft))
          "Grid pattern should be loaded")

      ;; Hex types
      (let [hex-types (:hex-types loaded-draft)]
        (is (= :terrain (get-hex-type hex-types [0 0]))
            "Terrain hex should be loaded")
        (is (= :fog (get-hex-type hex-types [-1 0]))
            "Fog hex should be loaded")
        (is (= :water (get-hex-type hex-types [1 -1]))
            "Water hex should be loaded")
        (let [total-assigned (+ (count (:water hex-types))
                               (count (:terrain hex-types))
                               (count (:fog hex-types))
                               (count (:village hex-types)))]
          (is (= 7 total-assigned)
              "All hex assignments should be loaded")))

      ;; Harbors
      (let [harbors (:harbors loaded-draft)
            brick-harbor (first harbors)]
        (is (= 1 (count harbors))
            "Harbor should be loaded")
        (is (= [0 0] (:land-hex brick-harbor))
            "Harbor land-hex should be loaded")
        (is (= 3 (:direction brick-harbor))
            "Harbor direction should be loaded")
        (is (= :brick (:type brick-harbor))
            "Harbor type should be loaded"))

      ;; Face-up distribution
      (let [face-up-resources (get-in loaded-draft [:face-up-distribution :resources])
            face-up-numbers (get-in loaded-draft [:face-up-distribution :number-tokens])]
        (is (= 1 (:wheat face-up-resources))
            "Face-up wheat count should be loaded")
        (is (= 1 (:brick face-up-resources))
            "Face-up brick count should be loaded")
        (is (= 2 (get face-up-numbers 5))
            "Face-up number 5 count should be loaded")
        (is (= 1 (get face-up-numbers 8))
            "Face-up number 8 count should be loaded"))

      ;; Fog distribution
      (let [fog-resources (get-in loaded-draft [:fog-distribution :resources])
            fog-numbers (get-in loaded-draft [:fog-distribution :number-tokens])]
        (is (= 1 (:gold fog-resources))
            "Fog gold count should be loaded")
        (is (= 1 (get fog-numbers 9))
            "Fog number 9 count should be loaded")))))

;; -- Integration Test 4: Saved Scenario Persists Across Page Reload -------------

(deftest saved-scenario-persists-across-reload
  (testing "Saved custom scenario persists in local storage and can be reloaded"
    ;; Create and save a scenario
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:update-scenario-name "Persistence Test"])
    (rf/dispatch-sync [:update-grid-pattern "3-3"])

    ;; Minimal valid configuration
    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 -1] :terrain])

    (rf/dispatch-sync [:update-face-up-resource :wheat "2"])
    (rf/dispatch-sync [:update-face-up-resource :brick "1"])
    (rf/dispatch-sync [:update-face-up-resource :ore "1"])
    (rf/dispatch-sync [:update-face-up-resource :sheep "1"])
    (rf/dispatch-sync [:update-face-up-resource :wood "1"])

    (rf/dispatch-sync [:update-face-up-number 3 "1"])
    (rf/dispatch-sync [:update-face-up-number 4 "1"])
    (rf/dispatch-sync [:update-face-up-number 5 "1"])
    (rf/dispatch-sync [:update-face-up-number 6 "1"])
    (rf/dispatch-sync [:update-face-up-number 8 "1"])
    (rf/dispatch-sync [:update-face-up-number 9 "1"])

    (rf/dispatch-sync [:save-custom-scenario])

    ;; Simulate page reload by reinitializing db
    (rf/dispatch-sync [:initialize-db])

    ;; Verify scenario still exists in local storage
    (let [custom-scenarios (local-storage/load-from-local-storage :custom-scenarios)
          persisted-scenario (get custom-scenarios :persistence-test)]
      (is (some? persisted-scenario)
          "Scenario should persist in local storage after page reload")
      (is (= "Persistence Test" (:name persisted-scenario))
          "Persisted scenario should have correct name"))

    ;; Verify scenario appears in dropdown after reload
    (let [all-scenarios (registry/list-scenarios)
          custom-scenario (first (filter #(= "Persistence Test" (:name %))
                                         all-scenarios))]
      (is (some? custom-scenario)
          "Scenario should appear in registry after reload"))

    ;; Verify scenario can be loaded for editing after reload
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:load-custom-scenario-for-editing :persistence-test])

    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (= "Persistence Test" (:name draft))
          "Scenario should be loadable for editing after reload"))))

;; -- Integration Test 5: Tournament Mode Compatibility --------------------------

(deftest custom-scenario-tournament-mode-compatibility
  (testing "Custom scenarios work correctly with tournament mode toggle"
    ;; Create a custom scenario
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:update-scenario-name "Tournament Test"])
    (rf/dispatch-sync [:update-grid-pattern "3-4-3"])

    ;; Create scenario with enough hexes to potentially have adjacent red numbers
    (doseq [coord [[0 0] [1 0] [-1 0] [0 1] [-1 1] [1 -1] [0 -1]
                   [2 0] [-2 0] [-2 1]]]
      (rf/dispatch-sync [:assign-hex-type coord :terrain]))

    (rf/dispatch-sync [:update-face-up-resource :wheat "3"])
    (rf/dispatch-sync [:update-face-up-resource :brick "2"])
    (rf/dispatch-sync [:update-face-up-resource :ore "2"])
    (rf/dispatch-sync [:update-face-up-resource :sheep "2"])
    (rf/dispatch-sync [:update-face-up-resource :wood "1"])

    (rf/dispatch-sync [:update-face-up-number 2 "1"])
    (rf/dispatch-sync [:update-face-up-number 3 "1"])
    (rf/dispatch-sync [:update-face-up-number 4 "1"])
    (rf/dispatch-sync [:update-face-up-number 5 "1"])
    (rf/dispatch-sync [:update-face-up-number 6 "2"])
    (rf/dispatch-sync [:update-face-up-number 8 "2"])
    (rf/dispatch-sync [:update-face-up-number 9 "1"])
    (rf/dispatch-sync [:update-face-up-number 10 "0"])

    (rf/dispatch-sync [:save-custom-scenario])
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Enable tournament mode
    (rf/dispatch-sync [:toggle-tournament-mode])
    (let [tournament-mode-on? @(rf/subscribe [:tournament-mode?])]
      (is (true? tournament-mode-on?)
          "Tournament mode should be enabled"))

    ;; Load custom scenario with tournament mode active
    (rf/dispatch-sync [:set-scenario :tournament-test])

    ;; Verify board was generated without errors
    (let [hexes @(rf/subscribe [:hexes])]
      (is (= 10 (count hexes))
          "Board should generate with correct hex count in tournament mode")
      (is (every? #(some? (:resource %)) hexes)
          "All hexes should have resources in tournament mode"))

    ;; Disable tournament mode and regenerate
    (rf/dispatch-sync [:toggle-tournament-mode])
    (rf/dispatch-sync [:generate-board])

    ;; Verify board still generates correctly
    (let [hexes-after @(rf/subscribe [:hexes])]
      (is (= 10 (count hexes-after))
          "Board should generate with correct hex count without tournament mode"))))

;; -- Integration Test 6: Random Harbor Mode Compatibility -----------------------

(deftest custom-scenario-random-harbor-mode-compatibility
  (testing "Custom scenarios work correctly with random harbor mode toggle"
    ;; Create custom scenario with harbors
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:update-scenario-name "Harbor Mode Test"])
    (rf/dispatch-sync [:update-grid-pattern "2-3-2"])

    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 -1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 -1] :terrain])

    ;; Add specific harbor types
    (rf/dispatch-sync [:set-harbor-direction [0 0] 0])
    (rf/dispatch-sync [:assign-harbor-type [0 0] 0 :wood])
    (rf/dispatch-sync [:set-harbor-direction [1 0] 1])
    (rf/dispatch-sync [:assign-harbor-type [1 0] 1 :brick])

    (rf/dispatch-sync [:update-face-up-resource :wheat "2"])
    (rf/dispatch-sync [:update-face-up-resource :brick "2"])
    (rf/dispatch-sync [:update-face-up-resource :ore "1"])
    (rf/dispatch-sync [:update-face-up-resource :sheep "1"])
    (rf/dispatch-sync [:update-face-up-resource :wood "1"])

    (rf/dispatch-sync [:update-face-up-number 3 "1"])
    (rf/dispatch-sync [:update-face-up-number 4 "1"])
    (rf/dispatch-sync [:update-face-up-number 5 "2"])
    (rf/dispatch-sync [:update-face-up-number 6 "1"])
    (rf/dispatch-sync [:update-face-up-number 8 "1"])
    (rf/dispatch-sync [:update-face-up-number 9 "1"])

    (rf/dispatch-sync [:save-custom-scenario])
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Load scenario without random harbor mode
    (rf/dispatch-sync [:set-scenario :harbor-mode-test])

    (let [harbors-without-random @(rf/subscribe [:harbors])]
      (is (= 2 (count harbors-without-random))
          "Should have 2 harbors without random mode")

      ;; Harbors should have specific types as configured
      (let [harbor-types (set (map :type harbors-without-random))]
        (is (contains? harbor-types :wood)
            "Should have wood harbor as configured")
        (is (contains? harbor-types :brick)
            "Should have brick harbor as configured")))

    ;; Enable random harbor mode and regenerate
    (rf/dispatch-sync [:toggle-random-harbor-mode])
    (let [random-harbor-mode-on? @(rf/subscribe [:random-harbor-mode?])]
      (is (true? random-harbor-mode-on?)
          "Random harbor mode should be enabled"))

    (rf/dispatch-sync [:generate-board])

    ;; Verify harbors still exist (types may be randomized)
    (let [harbors-with-random @(rf/subscribe [:harbors])]
      (is (= 2 (count harbors-with-random))
          "Should still have 2 harbors with random mode")
      (is (every? #(some? (:type %)) harbors-with-random)
          "All harbors should have types assigned"))))

;; -- Integration Test 7: Multiple Custom Scenarios Coexist ----------------------

(deftest multiple-custom-scenarios-coexist
  (testing "Multiple custom scenarios can be saved and loaded without conflicts"
    ;; Create first scenario
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:update-scenario-name "First Scenario"])
    (rf/dispatch-sync [:update-grid-pattern "2-2"])

    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 1] :terrain])

    (rf/dispatch-sync [:update-face-up-resource :wheat "1"])
    (rf/dispatch-sync [:update-face-up-resource :brick "1"])
    (rf/dispatch-sync [:update-face-up-resource :ore "1"])
    (rf/dispatch-sync [:update-face-up-resource :sheep "1"])

    (rf/dispatch-sync [:update-face-up-number 4 "1"])
    (rf/dispatch-sync [:update-face-up-number 5 "1"])
    (rf/dispatch-sync [:update-face-up-number 6 "1"])
    (rf/dispatch-sync [:update-face-up-number 8 "1"])

    (rf/dispatch-sync [:save-custom-scenario])

    ;; Create second scenario with different configuration
    (rf/dispatch-sync [:reset-custom-scenario-draft])
    (rf/dispatch-sync [:update-scenario-name "Second Scenario"])
    (rf/dispatch-sync [:update-grid-pattern "1-2-1"])
    (rf/dispatch-sync [:update-scenario-player-count "3"])

    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 0] :water])
    (rf/dispatch-sync [:assign-hex-type [-1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 1] :fog])

    (rf/dispatch-sync [:update-face-up-resource :wheat "1"])
    (rf/dispatch-sync [:update-face-up-resource :wood "1"])

    (rf/dispatch-sync [:update-face-up-number 5 "1"])
    (rf/dispatch-sync [:update-face-up-number 9 "1"])

    (rf/dispatch-sync [:save-custom-scenario])

    ;; Verify both scenarios exist in local storage
    (let [custom-scenarios (local-storage/load-from-local-storage :custom-scenarios)]
      (is (= 2 (count custom-scenarios))
          "Should have 2 custom scenarios in local storage")
      (is (contains? custom-scenarios :first-scenario)
          "Should have first scenario")
      (is (contains? custom-scenarios :second-scenario)
          "Should have second scenario"))

    ;; Verify both appear in registry
    (let [all-scenarios (registry/list-scenarios)
          first-scenario (first (filter #(= "First Scenario" (:name %)) all-scenarios))
          second-scenario (first (filter #(= "Second Scenario" (:name %)) all-scenarios))]
      (is (some? first-scenario)
          "First scenario should appear in registry")
      (is (some? second-scenario)
          "Second scenario should appear in registry")
      (is (= 4 (:player-count first-scenario))
          "First scenario should have correct player count")
      (is (= 3 (:player-count second-scenario))
          "Second scenario should have correct player count"))

    ;; Load first scenario and verify
    (rf/dispatch-sync [:set-scenario :first-scenario])
    (let [hexes-first @(rf/subscribe [:hexes])]
      (is (= 4 (count hexes-first))
          "First scenario should have 4 hexes"))

    ;; Load second scenario and verify
    (rf/dispatch-sync [:set-scenario :second-scenario])
    (let [hexes-second @(rf/subscribe [:hexes])
          water-hexes (filter #(= :water (:resource %)) hexes-second)
          fog-hexes (filter #(= :fog (:resource %)) hexes-second)]
      (is (= 4 (count hexes-second))
          "Second scenario should have 4 hexes")
      (is (= 1 (count water-hexes))
          "Second scenario should have water hex")
      (is (= 1 (count fog-hexes))
          "Second scenario should have fog hex"))))

;; -- Integration Test 8: Fog Distribution Board Generation ----------------------

(deftest custom-scenario-with-fog-distribution
  (testing "Custom scenario with fog distribution generates board correctly"
    ;; Create scenario with fog hexes and fog distribution
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:update-scenario-name "Fog Distribution Test"])
    (rf/dispatch-sync [:update-grid-pattern "2-3-2"])

    ;; Mix of terrain and fog
    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 0] :fog])
    (rf/dispatch-sync [:assign-hex-type [0 1] :fog])
    (rf/dispatch-sync [:assign-hex-type [-1 1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 -1] :fog])
    (rf/dispatch-sync [:assign-hex-type [0 -1] :terrain])

    ;; Face-up: 4 terrain hexes
    (rf/dispatch-sync [:update-face-up-resource :wheat "1"])
    (rf/dispatch-sync [:update-face-up-resource :brick "1"])
    (rf/dispatch-sync [:update-face-up-resource :ore "1"])
    (rf/dispatch-sync [:update-face-up-resource :sheep "1"])

    (rf/dispatch-sync [:update-face-up-number 4 "1"])
    (rf/dispatch-sync [:update-face-up-number 5 "1"])
    (rf/dispatch-sync [:update-face-up-number 6 "1"])
    (rf/dispatch-sync [:update-face-up-number 8 "1"])

    ;; Face-down (fog): 3 fog hexes
    (rf/dispatch-sync [:update-face-down-resource :wood "1"])
    (rf/dispatch-sync [:update-face-down-resource :gold "1"])
    (rf/dispatch-sync [:update-face-down-resource :desert "1"])

    (rf/dispatch-sync [:update-face-down-number 9 "1"])
    (rf/dispatch-sync [:update-face-down-number 10 "1"])

    (rf/dispatch-sync [:save-custom-scenario])
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Load scenario
    (rf/dispatch-sync [:set-scenario :fog-distribution-test])

    ;; Verify board generation
    (let [hexes @(rf/subscribe [:hexes])
          fog-state @(rf/subscribe [:fog-state-hexes])
          terrain-hexes (filter #(not= :fog (:resource %)) hexes)
          fog-hexes (filter #(= :fog (:resource %)) hexes)]

      (is (= 7 (count hexes))
          "Board should have 7 hexes total")
      (is (= 4 (count terrain-hexes))
          "Board should have 4 terrain hexes")
      (is (= 3 (count fog-hexes))
          "Board should have 3 fog hexes")

      ;; Fog state should be initialized
      (is (= 3 (count fog-state))
          "Fog state should have 3 entries")
      (is (every? #(false? (:revealed? (second %))) fog-state)
          "All fog hexes should start unrevealed")

      ;; Reveal a fog hex
      (let [fog-coord (first (keys fog-state))]
        (rf/dispatch-sync [:reveal-fog-tile fog-coord])

        (let [updated-fog-state @(rf/subscribe [:fog-state-hexes])
              revealed-hex (get updated-fog-state fog-coord)]
          (is (true? (:revealed? revealed-hex))
              "Fog hex should be revealed")
          (is (some? (:terrain revealed-hex))
              "Revealed fog hex should have terrain")
          (is (contains? #{:wood :gold :desert} (:terrain revealed-hex))
              "Revealed terrain should be from fog distribution"))))))
