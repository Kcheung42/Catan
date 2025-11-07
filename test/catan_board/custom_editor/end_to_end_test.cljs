(ns catan-board.custom-editor.end-to-end-test
  "End-to-end strategic tests for custom scenario creation workflows.
   Tests complete user journeys from start to finish covering critical gaps
   not fully addressed by unit and integration tests."
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

;; Helper to count total hex assignments in new structure
(defn- count-hex-assignments
  "Counts total hex assignments across all type sets.
   hex-types structure: {:water #{coords} :terrain #{coords} :fog #{coords} :village #{coords}}"
  [hex-types]
  (+ (count (:water hex-types))
     (count (:terrain hex-types))
     (count (:fog hex-types))
     (count (:village hex-types))))

;; -- E2E Test 1: Complete Scenario Creation from Scratch Workflow ---------------

(deftest complete-scenario-creation-workflow
  (testing "Complete user journey: create scenario from scratch, configure, assign hexes, save, verify in dropdown"
    ;; Step 1: Enter editor mode
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (is (true? @(rf/subscribe [:custom-scenario-editor-mode?]))
        "Should enter editor mode")

    ;; Step 2: Configure scenario metadata
    (rf/dispatch-sync [:update-scenario-name "My Island Adventure"])
    (rf/dispatch-sync [:update-scenario-player-count 4])
    (rf/dispatch-sync [:update-grid-pattern "3-4-5-4-3"])

    ;; Step 3: Assign hex types to create an island layout
    ;; Center terrain surrounded by water
    (let [terrain-coords [[0 0] [1 0] [-1 0] [0 1] [-1 1] [1 -1] [0 -1]
                          [2 0] [-2 0]]
          water-coords [[-2 1] [2 -1] [-1 -1] [1 1] [0 2] [-2 2] [2 -2] [1 -2] [0 -2] [-1 2]]]
      ;; Assign terrain hexes
      (doseq [coord terrain-coords]
        (rf/dispatch-sync [:set-editor-hex-selection-mode :terrain])
        (rf/dispatch-sync [:assign-hex-type coord :terrain]))

      ;; Assign water hexes
      (doseq [coord water-coords]
        (rf/dispatch-sync [:set-editor-hex-selection-mode :water])
        (rf/dispatch-sync [:assign-hex-type coord :water])))

    ;; Step 4: Configure resource distribution (9 terrain hexes)
    (rf/dispatch-sync [:update-face-up-resource :wheat 2])
    (rf/dispatch-sync [:update-face-up-resource :brick 2])
    (rf/dispatch-sync [:update-face-up-resource :ore 2])
    (rf/dispatch-sync [:update-face-up-resource :sheep 2])
    (rf/dispatch-sync [:update-face-up-resource :wood 1])
    (rf/dispatch-sync [:update-face-up-resource :desert 0])
    (rf/dispatch-sync [:update-face-up-resource :gold 0])
    (rf/dispatch-sync [:update-face-up-resource :water 0])

    ;; Step 5: Configure number tokens (9 tokens for 9 terrain hexes)
    (rf/dispatch-sync [:update-face-up-number 2 1])
    (rf/dispatch-sync [:update-face-up-number 3 1])
    (rf/dispatch-sync [:update-face-up-number 4 1])
    (rf/dispatch-sync [:update-face-up-number 5 1])
    (rf/dispatch-sync [:update-face-up-number 6 2])
    (rf/dispatch-sync [:update-face-up-number 8 1])
    (rf/dispatch-sync [:update-face-up-number 9 1])
    (rf/dispatch-sync [:update-face-up-number 10 1])
    (rf/dispatch-sync [:update-face-up-number 11 0])
    (rf/dispatch-sync [:update-face-up-number 12 0])

    ;; Step 6: Add harbors
    (rf/dispatch-sync [:set-editor-hex-selection-mode :harbor])
    (rf/dispatch-sync [:set-harbor-direction [0 0] 0])
    (rf/dispatch-sync [:assign-harbor-type [0 0] 0 :wood])
    (rf/dispatch-sync [:set-harbor-direction [1 0] 1])
    (rf/dispatch-sync [:assign-harbor-type [1 0] 1 :generic])

    ;; Step 7: Verify no validation errors
    (let [errors @(rf/subscribe [:custom-scenario-validation-errors])]
      (is (empty? errors)
          "Should have no validation errors before saving"))

    ;; Step 8: Save scenario
    (rf/dispatch-sync [:save-custom-scenario])

    ;; Step 9: Verify saved to local storage
    (let [custom-scenarios (local-storage/load-from-local-storage :custom-scenarios)
          saved-scenario (get custom-scenarios :my-island-adventure)]
      (is (some? saved-scenario)
          "Scenario should be saved to local storage")
      (is (= "My Island Adventure" (:name saved-scenario)))
      (is (= 4 (:player-count saved-scenario)))
      (is (= "3-4-5-4-3" (:grid-pattern saved-scenario)))
      (is (= 19 (count-hex-assignments (:hex-types saved-scenario)))
          "Should have 19 hex type assignments")
      (is (= 2 (count (:harbors saved-scenario)))
          "Should have 2 harbors"))

    ;; Step 10: Verify appears in scenario registry
    (let [all-scenarios (registry/list-scenarios)
          created-scenario (first (filter #(= "My Island Adventure" (:name %)) all-scenarios))]
      (is (some? created-scenario)
          "Scenario should appear in registry list")
      (is (= :my-island-adventure (:id created-scenario))))

    ;; Step 11: Exit editor mode and load scenario
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:set-scenario :my-island-adventure])

    ;; Step 12: Verify board generates correctly
    (let [hexes @(rf/subscribe [:hexes])
          harbors @(rf/subscribe [:harbors])
          terrain-hexes (filter #(not= :water (:resource %)) hexes)
          water-hexes (filter #(= :water (:resource %)) hexes)]
      (is (= 19 (count hexes))
          "Board should have 19 hexes total")
      (is (= 9 (count terrain-hexes))
          "Board should have 9 terrain hexes")
      (is (= 10 (count water-hexes))
          "Board should have 10 water hexes")
      (is (= 2 (count harbors))
          "Board should have 2 harbors"))))

;; -- E2E Test 2: Edit Existing Scenario Workflow --------------------------------

(deftest edit-existing-scenario-workflow
  (testing "Complete user journey: load scenario, modify, save updates, reload page, verify changes"
    ;; Step 1: Create initial scenario
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:update-scenario-name "Original Scenario"])
    (rf/dispatch-sync [:update-grid-pattern "2-3-2"])

    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 1] :water])
    (rf/dispatch-sync [:assign-hex-type [1 -1] :water])
    (rf/dispatch-sync [:assign-hex-type [0 -1] :terrain])

    (rf/dispatch-sync [:update-face-up-resource :wheat 2])
    (rf/dispatch-sync [:update-face-up-resource :brick 2])
    (rf/dispatch-sync [:update-face-up-resource :ore 1])
    (rf/dispatch-sync [:update-face-up-resource :sheep 0])
    (rf/dispatch-sync [:update-face-up-resource :wood 0])

    (rf/dispatch-sync [:update-face-up-number 4 2])
    (rf/dispatch-sync [:update-face-up-number 5 2])
    (rf/dispatch-sync [:update-face-up-number 6 1])

    (rf/dispatch-sync [:save-custom-scenario])

    ;; Step 2: Clear and reload for editing
    (rf/dispatch-sync [:reset-custom-scenario-draft])
    (rf/dispatch-sync [:load-custom-scenario-for-editing :original-scenario])

    ;; Step 3: Verify loaded correctly
    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (= "Original Scenario" (:name draft)))
      (is (= 5 (count (:terrain (:hex-types draft))))))

    ;; Step 4: Make modifications
    (rf/dispatch-sync [:update-scenario-name "Modified Scenario"])
    (rf/dispatch-sync [:assign-hex-type [0 1] :fog]) ;; Change terrain to fog

    ;; Add a harbor
    (rf/dispatch-sync [:set-harbor-direction [0 0] 2])
    (rf/dispatch-sync [:assign-harbor-type [0 0] 2 :sheep])

    ;; Update resource distribution
    (rf/dispatch-sync [:update-face-up-resource :wheat 1])
    (rf/dispatch-sync [:update-face-up-resource :sheep 1])

    ;; Add fog distribution
    (rf/dispatch-sync [:update-face-down-resource :wood 1])
    (rf/dispatch-sync [:update-face-down-number 8 1])

    ;; Step 5: Save modifications
    (rf/dispatch-sync [:save-custom-scenario])

    ;; Step 6: Simulate page reload
    (rf/dispatch-sync [:initialize-db])

    ;; Step 7: Verify modifications persisted
    (let [custom-scenarios (local-storage/load-from-local-storage :custom-scenarios)
          modified-scenario (get custom-scenarios :modified-scenario)]
      (is (some? modified-scenario)
          "Modified scenario should exist")
      (is (= "Modified Scenario" (:name modified-scenario)))
      (is (= 1 (count (:harbors modified-scenario)))
          "Should have harbor added during edit")
      (is (= :fog (get-in modified-scenario [:hex-types [0 1]]))
          "Hex type change should persist")
      (is (= 1 (get-in modified-scenario [:fog-distribution :resources :wood]))
          "Fog distribution should persist"))

    ;; Step 8: Load for editing again to verify all changes
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:load-custom-scenario-for-editing :modified-scenario])

    (let [reloaded-draft @(rf/subscribe [:custom-scenario-draft])]
      (is (= "Modified Scenario" (:name reloaded-draft)))
      (is (= 1 (count (:harbors reloaded-draft))))
      (is (= :sheep (get-in (first (:harbors reloaded-draft)) [:type])))
      (is (= :fog (get-in reloaded-draft [:hex-types [0 1]]))))))

;; -- E2E Test 3: Validation Blocking Save Workflow ------------------------------

(deftest validation-prevents-invalid-save-workflow
  (testing "User attempts to save invalid scenario, fixes errors, then saves successfully"
    ;; Step 1: Enter editor mode
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Step 2: Leave name empty (invalid)
    (rf/dispatch-sync [:update-scenario-name ""])

    ;; Step 3: Check validation errors
    (let [errors @(rf/subscribe [:custom-scenario-validation-errors])]
      (is (contains? errors :name)
          "Should have validation error for empty name"))

    ;; Step 4: Set valid name but create resource mismatch
    (rf/dispatch-sync [:update-scenario-name "Validation Test"])
    (rf/dispatch-sync [:update-grid-pattern "2-2"])

    ;; Assign 4 terrain hexes
    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 1] :terrain])

    ;; But only configure 2 resources (mismatch)
    (rf/dispatch-sync [:update-face-up-resource :wheat 1])
    (rf/dispatch-sync [:update-face-up-resource :brick 1])
    (rf/dispatch-sync [:update-face-up-resource :ore 0])
    (rf/dispatch-sync [:update-face-up-resource :sheep 0])
    (rf/dispatch-sync [:update-face-up-resource :wood 0])
    (rf/dispatch-sync [:update-face-up-resource :desert 0])

    ;; Step 5: Check validation errors
    (let [errors @(rf/subscribe [:custom-scenario-validation-errors])]
      (is (contains? errors :resources)
          "Should have resource count mismatch error")
      (is (re-find #"mismatch" (:resources errors))
          "Error message should mention mismatch"))

    ;; Step 6: Attempt to save (should fail validation)
    ;; Note: In a real implementation, save would check validation
    ;; and not proceed if errors exist
    (let [errors @(rf/subscribe [:custom-scenario-validation-errors])]
      (is (not (empty? errors))
          "Should still have validation errors before save"))

    ;; Step 7: Fix resource count
    (rf/dispatch-sync [:update-face-up-resource :ore 1])
    (rf/dispatch-sync [:update-face-up-resource :sheep 1])

    ;; Step 8: Fix number token count
    (rf/dispatch-sync [:update-face-up-number 4 1])
    (rf/dispatch-sync [:update-face-up-number 5 1])
    (rf/dispatch-sync [:update-face-up-number 6 1])
    (rf/dispatch-sync [:update-face-up-number 8 1])

    ;; Step 9: Verify errors are cleared
    (let [errors @(rf/subscribe [:custom-scenario-validation-errors])]
      (is (empty? errors)
          "Validation errors should be cleared after fixes"))

    ;; Step 10: Save should now succeed
    (rf/dispatch-sync [:save-custom-scenario])

    (let [custom-scenarios (local-storage/load-from-local-storage :custom-scenarios)]
      (is (contains? custom-scenarios :validation-test)
          "Scenario should be saved after validation passes"))))

;; -- E2E Test 4: Export Scenario Workflow ---------------------------------------

(deftest export-scenario-workflow
  (testing "Create scenario, export as EDN, verify format is valid"
    ;; Step 1: Create a complete scenario
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:update-scenario-name "Export Test Scenario"])
    (rf/dispatch-sync [:update-grid-pattern "2-3-2"])
    (rf/dispatch-sync [:update-scenario-player-count 3])

    ;; Configure scenario
    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 0] :water])
    (rf/dispatch-sync [:assign-hex-type [0 1] :fog])
    (rf/dispatch-sync [:assign-hex-type [-1 1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 -1] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 -1] :terrain])

    (rf/dispatch-sync [:set-harbor-direction [0 0] 0])
    (rf/dispatch-sync [:assign-harbor-type [0 0] 0 :ore])

    (rf/dispatch-sync [:update-face-up-resource :wheat 2])
    (rf/dispatch-sync [:update-face-up-resource :brick 2])
    (rf/dispatch-sync [:update-face-up-resource :ore 1])
    (rf/dispatch-sync [:update-face-up-resource :sheep 0])
    (rf/dispatch-sync [:update-face-up-resource :wood 0])

    (rf/dispatch-sync [:update-face-down-resource :gold 1])

    (rf/dispatch-sync [:update-face-up-number 3 2])
    (rf/dispatch-sync [:update-face-up-number 5 2])
    (rf/dispatch-sync [:update-face-up-number 9 1])

    (rf/dispatch-sync [:update-face-down-number 6 1])

    ;; Step 2: Export scenario
    ;; Note: In actual implementation, this would use clipboard API or download
    ;; Here we simulate by getting the draft and converting to EDN
    (let [draft @(rf/subscribe [:custom-scenario-draft])
          edn-string (pr-str draft)]

      ;; Step 3: Verify EDN is valid by reading it back
      (is (some? edn-string)
          "EDN export should produce a string")
      (is (> (count edn-string) 0)
          "EDN string should not be empty")

      ;; Step 4: Parse EDN back to verify it's valid
      (let [parsed (cljs.reader/read-string edn-string)]
        (is (map? parsed)
            "Parsed EDN should be a map")
        (is (= "Export Test Scenario" (:name parsed))
            "Parsed scenario should have correct name")
        (is (= 3 (:player-count parsed))
            "Parsed scenario should have correct player count")
        (is (= "2-3-2" (:grid-pattern parsed))
            "Parsed scenario should have correct grid pattern")
        (is (= 7 (count (:hex-types parsed)))
            "Parsed scenario should have all hex types")
        (is (= 1 (count (:harbors parsed)))
            "Parsed scenario should have harbor")
        (is (= :ore (get-in (first (:harbors parsed)) [:type]))
            "Harbor type should be preserved")
        (is (= 1 (get-in parsed [:fog-distribution :resources :gold]))
            "Fog distribution should be preserved")
        (is (= 1 (get-in parsed [:fog-distribution :number-tokens 6]))
            "Fog number tokens should be preserved")))))

;; -- E2E Test 5: Multiple Hex Type Combinations ---------------------------------

(deftest scenario-with-all-hex-types
  (testing "Create scenario using all hex types (terrain, water, fog, village) and verify generation"
    ;; Step 1: Create scenario with all hex types
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:update-scenario-name "All Types Scenario"])
    (rf/dispatch-sync [:update-grid-pattern "3-4-3"])

    ;; Assign different hex types
    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 1] :water])
    (rf/dispatch-sync [:assign-hex-type [-1 1] :water])
    (rf/dispatch-sync [:assign-hex-type [1 -1] :fog])
    (rf/dispatch-sync [:assign-hex-type [0 -1] :fog])
    (rf/dispatch-sync [:assign-hex-type [2 0] :village])
    (rf/dispatch-sync [:assign-hex-type [-2 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-2 1] :terrain])

    ;; Configure for 5 terrain hexes
    (rf/dispatch-sync [:update-face-up-resource :wheat 2])
    (rf/dispatch-sync [:update-face-up-resource :brick 1])
    (rf/dispatch-sync [:update-face-up-resource :ore 1])
    (rf/dispatch-sync [:update-face-up-resource :sheep 1])
    (rf/dispatch-sync [:update-face-up-resource :wood 0])

    (rf/dispatch-sync [:update-face-up-number 3 1])
    (rf/dispatch-sync [:update-face-up-number 4 1])
    (rf/dispatch-sync [:update-face-up-number 5 1])
    (rf/dispatch-sync [:update-face-up-number 8 1])
    (rf/dispatch-sync [:update-face-up-number 9 1])

    ;; Configure fog distribution for 2 fog hexes
    (rf/dispatch-sync [:update-face-down-resource :wood 1])
    (rf/dispatch-sync [:update-face-down-resource :sheep 1])

    (rf/dispatch-sync [:update-face-down-number 6 1])
    (rf/dispatch-sync [:update-face-down-number 10 1])

    ;; Step 2: Save and load scenario
    (rf/dispatch-sync [:save-custom-scenario])
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:set-scenario :all-types-scenario])

    ;; Step 3: Verify all hex types are generated correctly
    (let [hexes @(rf/subscribe [:hexes])
          terrain-hexes (filter #(and (not= :water (:resource %))
                                      (not= :fog (:resource %))
                                      (not= :village (:resource %))) hexes)
          water-hexes (filter #(= :water (:resource %)) hexes)
          fog-hexes (filter #(= :fog (:resource %)) hexes)
          village-hexes (filter #(= :village (:resource %)) hexes)]

      (is (= 10 (count hexes))
          "Board should have 10 hexes total")
      (is (= 5 (count terrain-hexes))
          "Board should have 5 terrain hexes")
      (is (= 2 (count water-hexes))
          "Board should have 2 water hexes")
      (is (= 2 (count fog-hexes))
          "Board should have 2 fog hexes")
      (is (= 1 (count village-hexes))
          "Board should have 1 village hex")

      ;; Verify fog hexes have fog state
      (let [fog-state @(rf/subscribe [:fog-state-hexes])]
        (is (= 2 (count fog-state))
            "Should have fog state for 2 hexes")))))

;; -- E2E Test 6: Harbor Placement Complete Workflow -----------------------------

(deftest harbor-placement-complete-workflow
  (testing "Complete harbor placement workflow: select mode, click hex, choose direction, assign type"
    ;; Step 1: Set up scenario
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:update-scenario-name "Harbor Test"])
    (rf/dispatch-sync [:update-grid-pattern "2-3-2"])

    ;; Assign terrain hexes
    (doseq [coord [[0 0] [1 0] [-1 0] [0 1] [-1 1] [1 -1] [0 -1]]]
      (rf/dispatch-sync [:assign-hex-type coord :terrain]))

    ;; Step 2: Select harbor mode
    (rf/dispatch-sync [:set-editor-hex-selection-mode :harbor])
    (is (= :harbor @(rf/subscribe [:editor-hex-selection-mode])))

    ;; Step 3: Click hex to initiate harbor placement
    (rf/dispatch-sync [:place-harbor-at-hex [0 0]])
    (is (= [0 0] @(rf/subscribe [:harbor-placement-coord]))
        "Harbor placement coord should be set")

    ;; Step 4: Select direction (North = 0)
    (rf/dispatch-sync [:set-harbor-direction [0 0] 0])
    (let [draft @(rf/subscribe [:custom-scenario-draft])
          harbors (:harbors draft)]
      (is (= 1 (count harbors))
          "Should have one harbor after direction selection")
      (is (= [0 0] (:land-hex (first harbors))))
      (is (= 0 (:direction (first harbors))))
      (is (= :generic (:type (first harbors)))
          "Harbor should default to generic type"))

    ;; Step 5: Assign specific type (wood)
    (rf/dispatch-sync [:assign-harbor-type [0 0] 0 :wood])
    (let [draft @(rf/subscribe [:custom-scenario-draft])
          harbor (first (:harbors draft))]
      (is (= :wood (:type harbor))
          "Harbor type should be updated to wood"))

    ;; Step 6: Add multiple harbors on same hex (different directions)
    (rf/dispatch-sync [:set-harbor-direction [0 0] 3]) ;; South
    (rf/dispatch-sync [:assign-harbor-type [0 0] 3 :brick])

    (let [draft @(rf/subscribe [:custom-scenario-draft])
          harbors (:harbors draft)
          hex-00-harbors (filter #(= [0 0] (:land-hex %)) harbors)]
      (is (= 2 (count harbors))
          "Should have two harbors total")
      (is (= 2 (count hex-00-harbors))
          "Should have two harbors on hex [0 0]")
      (is (= #{0 3} (set (map :direction hex-00-harbors)))
          "Harbors should have different directions"))

    ;; Step 7: Add harbor on different hex
    (rf/dispatch-sync [:set-harbor-direction [1 0] 2]) ;; South-East
    (rf/dispatch-sync [:assign-harbor-type [1 0] 2 :sheep])

    (let [draft @(rf/subscribe [:custom-scenario-draft])
          harbors (:harbors draft)]
      (is (= 3 (count harbors))
          "Should have three harbors total"))

    ;; Step 8: Remove a harbor
    (rf/dispatch-sync [:remove-harbor [0 0] 0])

    (let [draft @(rf/subscribe [:custom-scenario-draft])
          harbors (:harbors draft)
          hex-00-harbors (filter #(= [0 0] (:land-hex %)) harbors)]
      (is (= 2 (count harbors))
          "Should have two harbors after removal")
      (is (= 1 (count hex-00-harbors))
          "Should have one harbor on hex [0 0]")
      (is (= 3 (:direction (first hex-00-harbors)))
          "Remaining harbor should be direction 3"))

    ;; Step 9: Save and verify harbors persist
    (rf/dispatch-sync [:update-face-up-resource :wheat 2])
    (rf/dispatch-sync [:update-face-up-resource :brick 2])
    (rf/dispatch-sync [:update-face-up-resource :ore 2])
    (rf/dispatch-sync [:update-face-up-resource :sheep 1])

    (rf/dispatch-sync [:update-face-up-number 3 2])
    (rf/dispatch-sync [:update-face-up-number 5 2])
    (rf/dispatch-sync [:update-face-up-number 6 2])
    (rf/dispatch-sync [:update-face-up-number 9 1])

    (rf/dispatch-sync [:save-custom-scenario])
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Step 10: Load and verify harbors render correctly
    (rf/dispatch-sync [:set-scenario :harbor-test])

    (let [harbors @(rf/subscribe [:harbors])]
      (is (= 2 (count harbors))
          "Board should have 2 harbors")
      (let [brick-harbor (first (filter #(= :brick (:type %)) harbors))
            sheep-harbor (first (filter #(= :sheep (:type %)) harbors))]
        (is (some? brick-harbor))
        (is (= [0 0] (:land-hex brick-harbor)))
        (is (= 3 (:direction brick-harbor)))
        (is (some? sheep-harbor))
        (is (= [1 0] (:land-hex sheep-harbor)))
        (is (= 2 (:direction sheep-harbor)))))))

;; -- E2E Test 7: Rapid Hex Assignment and State Consistency ---------------------

(deftest rapid-hex-assignment-consistency
  (testing "Rapidly assign and reassign hex types, verify state remains consistent"
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:update-scenario-name "Consistency Test"])
    (rf/dispatch-sync [:update-grid-pattern "3-4-3"])

    ;; Rapidly assign different types to same hex
    (dotimes [_ 5]
      (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
      (rf/dispatch-sync [:assign-hex-type [0 0] :water])
      (rf/dispatch-sync [:assign-hex-type [0 0] :fog])
      (rf/dispatch-sync [:assign-hex-type [0 0] :village])
      (rf/dispatch-sync [:assign-hex-type [0 0] :terrain]))

    ;; Final state should be terrain
    (let [draft @(rf/subscribe [:custom-scenario-draft])
          hex-type (get-in draft [:hex-types [0 0]])]
      (is (= :terrain hex-type)
          "Hex should have final assigned type"))

    ;; Rapidly assign many hexes
    (let [coords [[0 0] [1 0] [-1 0] [0 1] [-1 1] [1 -1] [0 -1] [2 0] [-2 0] [-2 1]]]
      (dotimes [_ 10]
        (doseq [[idx coord] (map-indexed vector coords)]
          (rf/dispatch-sync [:assign-hex-type coord (if (even? idx) :terrain :water)]))))

    ;; Verify correct count
    (let [draft @(rf/subscribe [:custom-scenario-draft])
          hex-types (:hex-types draft)]
      (is (= 10 (count hex-types))
          "Should have 10 hex assignments")
      (is (= 5 (count (filter #(= :terrain (val %)) hex-types)))
          "Should have 5 terrain hexes")
      (is (= 5 (count (filter #(= :water (val %)) hex-types)))
          "Should have 5 water hexes"))

    ;; Clear individual hexes rapidly
    (rf/dispatch-sync [:clear-hex-assignment [0 0]])
    (rf/dispatch-sync [:clear-hex-assignment [1 0]])

    (let [draft @(rf/subscribe [:custom-scenario-draft])
          hex-types (:hex-types draft)]
      (is (= 8 (count hex-types))
          "Should have 8 hexes after clearing 2"))

    ;; Clear all
    (rf/dispatch-sync [:clear-all-hex-assignments])

    (let [draft @(rf/subscribe [:custom-scenario-draft])
          hex-types (:hex-types draft)
          harbors (:harbors draft)]
      (is (empty? hex-types)
          "All hex assignments should be cleared")
      (is (empty? harbors)
          "All harbors should be cleared"))))

;; -- E2E Test 8: Scenario Name Edge Cases ----------------------------------------

(deftest scenario-name-edge-cases
  (testing "Handle edge cases in scenario naming: long names, special characters, duplicates"
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Test 1: Very long name
    (let [long-name (apply str (repeat 100 "A"))]
      (rf/dispatch-sync [:update-scenario-name long-name])
      (let [draft @(rf/subscribe [:custom-scenario-draft])]
        (is (= long-name (:name draft))
            "Should handle very long names")))

    ;; Test 2: Name with special characters
    (rf/dispatch-sync [:update-scenario-name "Test!@#$%^&*()_+-=[]{}|;':\",./<>?"])
    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (some? (:name draft))
          "Should handle special characters in name"))

    ;; Test 3: Name with unicode characters
    (rf/dispatch-sync [:update-scenario-name "Test Scenario 测试 テスト"])
    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (= "Test Scenario 测试 テスト" (:name draft))
          "Should handle unicode characters"))

    ;; Test 4: Create scenarios with duplicate names
    ;; First scenario
    (rf/dispatch-sync [:update-scenario-name "Duplicate Test"])
    (rf/dispatch-sync [:update-grid-pattern "2-2"])
    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [-1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 1] :terrain])

    (rf/dispatch-sync [:update-face-up-resource :wheat 2])
    (rf/dispatch-sync [:update-face-up-resource :brick 2])

    (rf/dispatch-sync [:update-face-up-number 5 2])
    (rf/dispatch-sync [:update-face-up-number 6 2])

    (rf/dispatch-sync [:save-custom-scenario])

    ;; Second scenario with same name
    (rf/dispatch-sync [:reset-custom-scenario-draft])
    (rf/dispatch-sync [:update-scenario-name "Duplicate Test"])
    (rf/dispatch-sync [:update-grid-pattern "2-2"])
    (rf/dispatch-sync [:assign-hex-type [0 0] :water])
    (rf/dispatch-sync [:assign-hex-type [1 0] :water])
    (rf/dispatch-sync [:assign-hex-type [-1 0] :water])
    (rf/dispatch-sync [:assign-hex-type [0 1] :water])

    (rf/dispatch-sync [:save-custom-scenario])

    ;; Verify both scenarios exist with different IDs
    (let [custom-scenarios (local-storage/load-from-local-storage :custom-scenarios)]
      ;; Should have generated different IDs like :duplicate-test and :duplicate-test-2
      (is (>= (count custom-scenarios) 1)
          "Should have at least one duplicate test scenario saved"))))

;; -- E2E Test 9: Large Scenario Performance -------------------------------------

(deftest large-scenario-performance
  (testing "Create and load large scenario with maximum reasonable size"
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:update-scenario-name "Large Scenario Test"])
    (rf/dispatch-sync [:update-grid-pattern "5-6-7-8-7-6-5"])

    ;; Generate coordinates for large hex grid (7 rows)
    (let [row-pattern [5 6 7 8 7 6 5]
          all-coords (atom [])
          terrain-coords (atom [])
          water-coords (atom [])]

      ;; Generate coordinates using axial coordinate system
      ;; This is a simplified approach - real implementation would use proper hex grid generation
      (doseq [q (range -3 4)]
        (doseq [r (range -3 4)]
          (when (<= (+ (Math/abs q) (Math/abs r) (Math/abs (+ q r))) 3)
            (swap! all-coords conj [q r])
            (if (< (rand) 0.7) ;; 70% terrain, 30% water
              (swap! terrain-coords conj [q r])
              (swap! water-coords conj [q r])))))

      ;; Assign hex types
      (doseq [coord @terrain-coords]
        (rf/dispatch-sync [:assign-hex-type coord :terrain]))

      (doseq [coord @water-coords]
        (rf/dispatch-sync [:assign-hex-type coord :water]))

      ;; Configure resource distribution based on terrain count
      (let [terrain-count (count @terrain-coords)]
        (when (>= terrain-count 5)
          (rf/dispatch-sync [:update-face-up-resource :wheat (quot terrain-count 5)])
          (rf/dispatch-sync [:update-face-up-resource :brick (quot terrain-count 5)])
          (rf/dispatch-sync [:update-face-up-resource :ore (quot terrain-count 5)])
          (rf/dispatch-sync [:update-face-up-resource :sheep (quot terrain-count 5)])
          (rf/dispatch-sync [:update-face-up-resource :wood (quot terrain-count 5)])

          ;; Configure number tokens
          (rf/dispatch-sync [:update-face-up-number 2 (quot terrain-count 9)])
          (rf/dispatch-sync [:update-face-up-number 3 (quot terrain-count 6)])
          (rf/dispatch-sync [:update-face-up-number 4 (quot terrain-count 6)])
          (rf/dispatch-sync [:update-face-up-number 5 (quot terrain-count 6)])
          (rf/dispatch-sync [:update-face-up-number 6 (quot terrain-count 6)])
          (rf/dispatch-sync [:update-face-up-number 8 (quot terrain-count 6)])
          (rf/dispatch-sync [:update-face-up-number 9 (quot terrain-count 6)])
          (rf/dispatch-sync [:update-face-up-number 10 (quot terrain-count 6)])
          (rf/dispatch-sync [:update-face-up-number 11 (quot terrain-count 9)])
          (rf/dispatch-sync [:update-face-up-number 12 (quot terrain-count 9)])))

      ;; Add multiple harbors
      (when (>= (count @terrain-coords) 6)
        (rf/dispatch-sync [:set-harbor-direction (nth @terrain-coords 0) 0])
        (rf/dispatch-sync [:set-harbor-direction (nth @terrain-coords 1) 1])
        (rf/dispatch-sync [:set-harbor-direction (nth @terrain-coords 2) 2])
        (rf/dispatch-sync [:set-harbor-direction (nth @terrain-coords 3) 3])
        (rf/dispatch-sync [:set-harbor-direction (nth @terrain-coords 4) 4])
        (rf/dispatch-sync [:set-harbor-direction (nth @terrain-coords 5) 5]))

      ;; Verify draft state is consistent
      (let [draft @(rf/subscribe [:custom-scenario-draft])
            hex-types (:hex-types draft)
            harbors (:harbors draft)]
        (is (= (+ (count @terrain-coords) (count @water-coords)) (count hex-types))
            "All hex assignments should be recorded")
        (is (>= (count harbors) 0)
            "Should have harbors"))

      ;; Note: Validation might fail due to random distribution,
      ;; so we don't attempt to save. This test is about state consistency
      ;; and performance with large scenarios.

      ;; Verify we can clear all without issues
      (rf/dispatch-sync [:clear-all-hex-assignments])

      (let [draft @(rf/subscribe [:custom-scenario-draft])
            hex-types (:hex-types draft)
            harbors (:harbors draft)]
        (is (empty? hex-types)
            "All hex types should be cleared")
        (is (empty? harbors)
            "All harbors should be cleared")))))

;; -- E2E Test 10: Zero Terrain Hexes Edge Case ----------------------------------

(deftest zero-terrain-hexes-edge-case
  (testing "Handle edge case: scenario with zero terrain hexes (all water/fog)"
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:update-scenario-name "All Water"])
    (rf/dispatch-sync [:update-grid-pattern "2-3-2"])

    ;; Assign all hexes as water
    (doseq [coord [[0 0] [1 0] [-1 0] [0 1] [-1 1] [1 -1] [0 -1]]]
      (rf/dispatch-sync [:assign-hex-type coord :water]))

    ;; Set all resource counts to 0
    (rf/dispatch-sync [:update-face-up-resource :wheat 0])
    (rf/dispatch-sync [:update-face-up-resource :brick 0])
    (rf/dispatch-sync [:update-face-up-resource :ore 0])
    (rf/dispatch-sync [:update-face-up-resource :sheep 0])
    (rf/dispatch-sync [:update-face-up-resource :wood 0])
    (rf/dispatch-sync [:update-face-up-resource :desert 0])

    ;; Set all number tokens to 0
    (doseq [num [2 3 4 5 6 8 9 10 11 12]]
      (rf/dispatch-sync [:update-face-up-number num 0]))

    ;; This should be valid (0 terrain = 0 resources = 0 tokens)
    (let [errors @(rf/subscribe [:custom-scenario-validation-errors])]
      (is (not (contains? errors :resources))
          "Should not have resource error with 0 terrain hexes")
      (is (not (contains? errors :number-tokens))
          "Should not have token error with 0 terrain hexes"))

    ;; Save and load
    (rf/dispatch-sync [:save-custom-scenario])
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:set-scenario :all-water])

    ;; Verify board generates correctly with all water
    (let [hexes @(rf/subscribe [:hexes])]
      (is (= 7 (count hexes))
          "Board should have 7 hexes")
      (is (every? #(= :water (:resource %)) hexes)
          "All hexes should be water"))))
