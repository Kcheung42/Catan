(ns catan-board.custom-editor.events-test
  "Focused tests for custom scenario editor core state management"
  (:require
   [cljs.test :refer-macros [deftest testing is]]
   [re-frame.core :as rf]
   [catan-board.test-helpers :as helpers]
   [catan-board.db :as db]
   [catan-board.events]
   [catan-board.subs]
   [catan-board.custom-editor.events]
   [catan-board.custom-editor.subs]))

;; Helper to set up test database
(rf/reg-event-db :test/set-db (fn [_ [_ new-db]] new-db))

;; -- Test 1: Editor Mode Toggle ----------------------------------------------

(deftest toggle-custom-scenario-editor-test
  (testing "Toggle custom scenario editor mode on and off"
    (rf/dispatch-sync [:test/set-db {:ui {:custom-scenario-editor-mode false
                                          :custom-scenario-draft nil}}])

    ;; Turn editor on
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (is (true? @(rf/subscribe [:custom-scenario-editor-mode?])))
    ;; Draft should be initialized with defaults
    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (some? draft))
      (is (= "" (:name draft)))
      (is (= 4 (:player-count draft)))
      (is (= "3-4-5-4-3" (:grid-pattern draft))))

    ;; Turn editor off
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (is (false? @(rf/subscribe [:custom-scenario-editor-mode?])))
    ;; Draft should be cleared
    (is (nil? @(rf/subscribe [:custom-scenario-draft])))))

;; -- Test 2: Draft Initialization with Defaults ------------------------------

(deftest draft-initialization-test
  (testing "Draft initializes with base game defaults"
    (rf/dispatch-sync [:test/set-db {:ui {:custom-scenario-editor-mode false}}])

    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    (let [draft @(rf/subscribe [:custom-scenario-draft])
          face-up (:face-up-distribution draft)]
      ;; Check base game resource defaults
      (is (= 4 (get-in face-up [:resources :wheat])))
      (is (= 3 (get-in face-up [:resources :brick])))
      (is (= 3 (get-in face-up [:resources :ore])))
      (is (= 4 (get-in face-up [:resources :sheep])))
      (is (= 4 (get-in face-up [:resources :wood])))
      (is (= 1 (get-in face-up [:resources :desert])))

      ;; Check number token defaults
      (is (= 1 (get-in face-up [:number-tokens 2])))
      (is (= 2 (get-in face-up [:number-tokens 3])))
      (is (= 2 (get-in face-up [:number-tokens 6])))

      ;; Check initial empty collections
      (is (= {} (:hex-types draft)))
      (is (= [] (:harbors draft))))))

;; -- Test 3: Hex Selection Mode Switching ------------------------------------

(deftest set-editor-hex-selection-mode-test
  (testing "Hex selection mode can be changed"
    (rf/dispatch-sync [:test/set-db {:ui {:editor-hex-selection-mode :terrain}}])

    (is (= :terrain @(rf/subscribe [:editor-hex-selection-mode])))

    (rf/dispatch-sync [:set-editor-hex-selection-mode :water])
    (is (= :water @(rf/subscribe [:editor-hex-selection-mode])))

    (rf/dispatch-sync [:set-editor-hex-selection-mode :fog])
    (is (= :fog @(rf/subscribe [:editor-hex-selection-mode])))

    (rf/dispatch-sync [:set-editor-hex-selection-mode :harbor])
    (is (= :harbor @(rf/subscribe [:editor-hex-selection-mode])))))

;; -- Test 4: Hex Assignment --------------------------------------------------

(deftest assign-hex-type-test
  (testing "Can assign hex types to coordinates"
    (rf/dispatch-sync [:test/set-db {:ui {:custom-scenario-draft
                                          {:hex-types {}}}}])

    ;; Assign first hex
    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (= :terrain (get-in draft [:hex-types [0 0]]))))

    ;; Assign second hex
    (rf/dispatch-sync [:assign-hex-type [1 0] :water])
    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (= :terrain (get-in draft [:hex-types [0 0]])))
      (is (= :water (get-in draft [:hex-types [1 0]]))))

    ;; Re-assign first hex (should update)
    (rf/dispatch-sync [:assign-hex-type [0 0] :fog])
    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (= :fog (get-in draft [:hex-types [0 0]])))
      (is (= :water (get-in draft [:hex-types [1 0]]))))))

;; -- Test 5: Clear Hex Assignment --------------------------------------------

(deftest clear-hex-assignment-test
  (testing "Can clear individual hex assignments"
    (rf/dispatch-sync [:test/set-db {:ui {:custom-scenario-draft
                                          {:hex-types {[0 0] :terrain
                                                       [1 0] :water}}}}])

    (rf/dispatch-sync [:clear-hex-assignment [0 0]])
    (let [draft @(rf/subscribe [:custom-scenario-draft])]
      (is (nil? (get-in draft [:hex-types [0 0]])))
      (is (= :water (get-in draft [:hex-types [1 0]]))))))

;; -- Test 6: Configuration Updates -------------------------------------------

(deftest update-scenario-metadata-test
  (testing "Can update scenario name and player count"
    (rf/dispatch-sync [:test/set-db {:ui {:custom-scenario-draft
                                          {:name ""
                                           :player-count 4}}}])

    (rf/dispatch-sync [:update-scenario-name "My Custom Map"])
    (is (= "My Custom Map" (:name @(rf/subscribe [:custom-scenario-draft]))))

    (rf/dispatch-sync [:update-scenario-player-count "3"])
    (is (= 3 (:player-count @(rf/subscribe [:custom-scenario-draft]))))))

;; -- Test 7: Resource Distribution Updates ----------------------------------

(deftest update-resource-distribution-test
  (testing "Can update face-up and face-down resource counts"
    (rf/dispatch-sync [:test/set-db {:ui {:custom-scenario-draft
                                          {:face-up-distribution
                                           {:resources {:wheat 4 :brick 3}}
                                           :fog-distribution
                                           {:resources {:wheat 0 :brick 0}}}}}])

    ;; Update face-up resource
    (rf/dispatch-sync [:update-face-up-resource :wheat "5"])
    (is (= 5 (get-in @(rf/subscribe [:custom-scenario-draft])
                     [:face-up-distribution :resources :wheat])))

    ;; Update face-down resource
    (rf/dispatch-sync [:update-face-down-resource :brick "2"])
    (is (= 2 (get-in @(rf/subscribe [:custom-scenario-draft])
                     [:fog-distribution :resources :brick])))))

;; -- Test 8: Validation Logic ------------------------------------------------

(deftest validation-logic-test
  (testing "Validation correctly identifies invalid configurations"
    ;; Empty name
    (rf/dispatch-sync [:test/set-db {:ui {:custom-scenario-draft
                                          {:name ""
                                           :player-count 4
                                           :grid-pattern "3-4-5-4-3"
                                           :hex-types {}
                                           :face-up-distribution
                                           {:resources {:wheat 0 :brick 0}
                                            :number-tokens {2 0}}}}}])
    (let [errors @(rf/subscribe [:custom-scenario-validation-errors])]
      (is (contains? errors :name))
      (is (= "Scenario name is required" (:name errors))))

    ;; Invalid player count
    (rf/dispatch-sync [:test/set-db {:ui {:custom-scenario-draft
                                          {:name "Test"
                                           :player-count 10
                                           :grid-pattern "3-4-5-4-3"
                                           :hex-types {}
                                           :face-up-distribution
                                           {:resources {:wheat 0}
                                            :number-tokens {2 0}}}}}])
    (let [errors @(rf/subscribe [:custom-scenario-validation-errors])]
      (is (contains? errors :player-count)))

    ;; Invalid grid pattern
    (rf/dispatch-sync [:test/set-db {:ui {:custom-scenario-draft
                                          {:name "Test"
                                           :player-count 4
                                           :grid-pattern "abc"
                                           :hex-types {}
                                           :face-up-distribution
                                           {:resources {:wheat 0}
                                            :number-tokens {2 0}}}}}])
    (let [errors @(rf/subscribe [:custom-scenario-validation-errors])]
      (is (contains? errors :grid-pattern)))

    ;; Resource count mismatch
    (rf/dispatch-sync [:test/set-db {:ui {:custom-scenario-draft
                                          {:name "Test"
                                           :player-count 4
                                           :grid-pattern "3-4-5-4-3"
                                           :hex-types {[0 0] :terrain
                                                       [1 0] :terrain
                                                       [2 0] :terrain}
                                           :face-up-distribution
                                           {:resources {:wheat 1 :brick 0 :ore 0 :sheep 0 :wood 0 :desert 0 :gold 0 :water 0}
                                            :number-tokens {2 1 3 0 4 0 5 0 6 0 8 0 9 0 10 0 11 0 12 0}}}}}])
    (let [errors @(rf/subscribe [:custom-scenario-validation-errors])]
      (is (contains? errors :resources))
      (is (re-find #"Resource distribution mismatch" (:resources errors))))

    ;; Valid configuration
    (rf/dispatch-sync [:test/set-db {:ui {:custom-scenario-draft
                                          {:name "Valid Scenario"
                                           :player-count 4
                                           :grid-pattern "3-4-5-4-3"
                                           :hex-types {[0 0] :terrain
                                                       [1 0] :terrain
                                                       [2 0] :terrain}
                                           :face-up-distribution
                                           {:resources {:wheat 2 :brick 1 :ore 0 :sheep 0 :wood 0 :desert 0 :gold 0 :water 0}
                                            :number-tokens {2 1 3 1 4 1 5 0 6 0 8 0 9 0 10 0 11 0 12 0}}}}}])
    (let [errors @(rf/subscribe [:custom-scenario-validation-errors])]
      (is (empty? errors)))))
