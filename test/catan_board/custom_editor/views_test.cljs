(ns catan-board.custom-editor.views-test
  "Tests for custom scenario editor UI components"
  (:require
   [cljs.test :refer-macros [deftest testing is use-fixtures]]
   [re-frame.core :as rf]
   [catan-board.events]
   [catan-board.subs]
   [catan-board.custom-editor.events]
   [catan-board.custom-editor.subs]
   [catan-board.db :as db]))

(rf/reg-event-db
 :test/set-db
 (fn [_ [_ new-db]]
   new-db))

(use-fixtures :each
  {:before (fn []
             (rf/dispatch-sync [:test/set-db db/default-db]))})

(deftest editor-mode-toggle-renders
  (testing "Editor mode toggle button should render and toggle state"
    ;; Initialize with editor mode off
    (rf/dispatch-sync [:test/set-db db/default-db])

    ;; Verify initial state
    (is (false? @(rf/subscribe [:custom-scenario-editor-mode?]))
        "Editor mode should be off initially")

    ;; Toggle editor mode on
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    (is (true? @(rf/subscribe [:custom-scenario-editor-mode?]))
        "Editor mode should be on after toggle")

    ;; Verify draft is initialized
    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (some? draft)
          "Draft should be initialized when editor mode is toggled on")
      (is (some? (:name draft))
          "Draft should have a name field"))

    ;; Toggle editor mode off
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    (is (false? @(rf/subscribe [:custom-scenario-editor-mode?]))
        "Editor mode should be off after second toggle")))

(deftest metadata-inputs-update-draft
  (testing "Scenario name and player count inputs should update draft"
    ;; Enter editor mode
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Update scenario name
    (rf/dispatch-sync [:update-scenario-name "Test Scenario"])

    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (= "Test Scenario" (:name draft))
          "Draft name should update"))

    ;; Update player count
    (rf/dispatch-sync [:update-scenario-player-count 3])

    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (= 3 (:player-count draft))
          "Draft player count should update"))))

(deftest grid-pattern-input-updates-draft
  (testing "Grid pattern input should update draft"
    ;; Enter editor mode
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Update grid pattern
    (rf/dispatch-sync [:update-grid-pattern "5-6-7-6-5"])

    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (= "5-6-7-6-5" (:grid-pattern draft))
          "Draft grid pattern should update"))))

(deftest resource-distribution-inputs-update-draft
  (testing "Resource distribution inputs should update draft"
    ;; Enter editor mode
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Update face-up resource
    (rf/dispatch-sync [:update-face-up-resource :wood 5])

    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (= 5 (get-in draft [:face-up-distribution :resources :wood]))
          "Face-up wood count should update"))

    ;; Update face-down resource
    (rf/dispatch-sync [:update-face-down-resource :gold 2])

    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (= 2 (get-in draft [:fog-distribution :resources :gold]))
          "Face-down gold count should update"))))

(deftest number-token-inputs-update-draft
  (testing "Number token inputs should update draft"
    ;; Enter editor mode
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Update face-up number token
    (rf/dispatch-sync [:update-face-up-number 6 2])

    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (= 2 (get-in draft [:face-up-distribution :number-tokens 6]))
          "Face-up 6 token count should update"))

    ;; Update face-down number token
    (rf/dispatch-sync [:update-face-down-number 8 1])

    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (= 1 (get-in draft [:fog-distribution :number-tokens 8]))
          "Face-down 8 token count should update"))))

(deftest validation-errors-display-correctly
  (testing "Validation errors should be computed correctly"
    ;; Enter editor mode
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Set invalid scenario name (empty)
    (rf/dispatch-sync [:update-scenario-name ""])

    (let [errors @(rf/subscribe [:custom-scenario-validation-errors])]
      (is (some? (:name errors))
          "Should have validation error for empty name"))

    ;; Set valid scenario name
    (rf/dispatch-sync [:update-scenario-name "Valid Scenario"])

    (let [errors @(rf/subscribe [:custom-scenario-validation-errors])]
      (is (nil? (:name errors))
          "Should not have validation error for valid name"))

    ;; Create resource count mismatch
    ;; First, set grid pattern to generate specific hex count
    (rf/dispatch-sync [:update-grid-pattern "3-4-5-4-3"])
    ;; Assign some terrain hexes (using events from Task Group 1)
    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 1] :terrain])

    ;; Set resource count that doesn't match (3 terrain hexes, but only 2 resources)
    (rf/dispatch-sync [:update-face-up-resource :wood 1])
    (rf/dispatch-sync [:update-face-up-resource :brick 1])
    (rf/dispatch-sync [:update-face-up-resource :wheat 0])
    (rf/dispatch-sync [:update-face-up-resource :sheep 0])
    (rf/dispatch-sync [:update-face-up-resource :ore 0])
    (rf/dispatch-sync [:update-face-up-resource :desert 0])

    (let [errors @(rf/subscribe [:custom-scenario-validation-errors])]
      (is (some? (:resources errors))
          "Should have validation error for resource count mismatch"))))

(deftest hex-type-selection-mode-updates
  (testing "Hex type selection mode should update correctly"
    ;; Enter editor mode
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Verify default mode
    (is (= :terrain @(rf/subscribe [:editor-hex-selection-mode]))
        "Default selection mode should be :terrain")

    ;; Change to water mode
    (rf/dispatch-sync [:set-editor-hex-selection-mode :water])

    (is (= :water @(rf/subscribe [:editor-hex-selection-mode]))
        "Selection mode should update to :water")

    ;; Change to fog mode
    (rf/dispatch-sync [:set-editor-hex-selection-mode :fog])

    (is (= :fog @(rf/subscribe [:editor-hex-selection-mode]))
        "Selection mode should update to :fog")))

(deftest draft-resets-correctly
  (testing "Draft should reset to defaults"
    ;; Enter editor mode and modify draft
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:update-scenario-name "Modified Scenario"])
    (rf/dispatch-sync [:update-player-count 3])

    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (= "Modified Scenario" (:name draft))
          "Draft should have modified name"))

    ;; Reset draft
    (rf/dispatch-sync [:reset-custom-scenario-draft])

    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (not= "Modified Scenario" (:name draft))
          "Draft name should be reset")
      (is (= 4 (:player-count draft))
          "Draft player count should be reset to default"))))
