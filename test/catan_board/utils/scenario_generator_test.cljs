(ns catan-board.utils.scenario-generator-test
  (:require
   [cljs.test :refer-macros [deftest testing is]]
   [catan-board.utils.scenario-generator :as scenario-gen]
   [catan-board.scenarios.fog-islands-3p :as fog-islands]))

;; -- Tests for scenario generation (Task 2.1) --------------------------------

(deftest generate-scenario-board-produces-expected-hex-count
  (testing "Scenario board generation produces hex count matching config"
    (let [config fog-islands/fog-islands-3p-scenario
          water-count (count (get-in config [:hex-types :water]))
          fog-count (count (get-in config [:hex-types :fog]))
          terrain-count (count (get-in config [:hex-types :terrain]))
          expected-total (+ water-count fog-count terrain-count)
          board (scenario-gen/generate-scenario-board config)
          hexes (:hexes board)
          actual-water (count (filter #(= :water (:resource %)) hexes))
          actual-fog (count (filter #(= :fog (:resource %)) hexes))
          actual-terrain (count (filter #(not (#{:water :fog} (:resource %))) hexes))]
      (is (= expected-total (count hexes))
          "Should generate total hexes matching config coordinate counts")
      (is (= water-count actual-water)
          "Should have water hexes matching config")
      (is (= fog-count actual-fog)
          "Should have fog hexes matching config")
      (is (= terrain-count actual-terrain)
          "Should have terrain hexes matching config"))))

(deftest initialize-fog-state-creates-unrevealed-entries
  (testing "Fog state initializes correctly with all :revealed? false"
    (let [config fog-islands/fog-islands-3p-scenario
          fog-count (count (get-in config [:hex-types :fog]))
          fog-state (scenario-gen/initialize-fog-state config)]
      (is (= fog-count (count fog-state))
          "Should have fog coordinate entries matching config")
      (is (every? #(false? (:revealed? (second %))) fog-state)
          "All fog hexes should have :revealed? false")
      (is (every? #(nil? (:terrain (second %))) fog-state)
          "All fog hexes should have :terrain nil initially")
      (is (every? #(nil? (:number (second %))) fog-state)
          "All fog hexes should have :number nil initially"))))

(deftest scenario-board-resource-assignment-respects-distribution
  (testing "Resource assignment doesn't exceed distribution counts"
    (let [board (scenario-gen/generate-scenario-board fog-islands/fog-islands-3p-scenario)
          hexes (:hexes board)
          terrain-hexes (filter #(not (#{:water :fog} (:resource %))) hexes)
          resource-counts (frequencies (map :resource terrain-hexes))
          expected-distribution (get-in fog-islands/fog-islands-3p-scenario [:face-up-distribution :resources])]
      ;; Verify each resource doesn't exceed expected count
      (doseq [[resource count] resource-counts]
        (is (<= count (get expected-distribution resource 0))
            (str "Resource " resource " count should not exceed distribution"))))))

(deftest scenario-board-has-required-structure
  (testing "Generated board has required structure fields"
    (let [board (scenario-gen/generate-scenario-board fog-islands/fog-islands-3p-scenario)]
      (is (contains? board :hexes)
          "Board should have :hexes key")
      (is (contains? board :harbors)
          "Board should have :harbors key")
      (is (contains? board :metadata)
          "Board should have :metadata key")
      (is (vector? (:hexes board))
          ":hexes should be a vector")
      (is (vector? (:harbors board))
          ":harbors should be a vector"))))

(deftest scenario-board-hexes-have-required-fields
  (testing "Each hex has required fields based on type"
    (let [board (scenario-gen/generate-scenario-board fog-islands/fog-islands-3p-scenario)
          hexes (:hexes board)]
      ;; All hexes should have :coord and :resource
      (is (every? #(contains? % :coord) hexes)
          "All hexes should have :coord field")
      (is (every? #(contains? % :resource) hexes)
          "All hexes should have :resource field")

      ;; Terrain hexes should have :number (except deserts)
      (let [terrain-hexes (filter #(not (#{:water :fog} (:resource %))) hexes)
            non-desert-terrain (filter #(not= :desert (:resource %)) terrain-hexes)]
        (is (every? #(some? (:number %)) non-desert-terrain)
            "All non-desert terrain hexes should have a number")))))

(deftest scenario-board-harbors-match-config
  (testing "Generated board harbors match config"
    (let [board (scenario-gen/generate-scenario-board fog-islands/fog-islands-3p-scenario)
          harbors (:harbors board)
          config-harbors (:harbors fog-islands/fog-islands-3p-scenario)]
      (is (= (count config-harbors) (count harbors))
          "Should have same number of harbors as config")
      (is (= 8 (count harbors))
          "Fog Islands should have 8 harbors"))))
