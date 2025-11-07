(ns catan-board.custom-editor.interactions-test
  "Tests for custom scenario editor board interactions"
  (:require
   [cljs.test :refer-macros [deftest testing is use-fixtures]]
   [re-frame.core :as rf]
   [catan-board.events]
   [catan-board.subs]
   [catan-board.custom-editor.events]
   [catan-board.custom-editor.subs]
   [catan-board.db :as db]))

(use-fixtures :each
  {:before (fn [] (rf/dispatch-sync [:initialize-db]))})

;; -- Helper Functions --------------------------------------------------------

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

;; -- Tests -------------------------------------------------------------------

(deftest hex-click-assigns-type-test
  (testing "Clicking hex in editor mode assigns selected type to coordinate"
    ;; Enable editor mode
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Set selection mode to water
    (rf/dispatch-sync [:set-editor-hex-selection-mode :water])

    ;; Simulate hex click - assign water type to coordinate [1 0]
    (rf/dispatch-sync [:assign-hex-type [1 0] :water])

    (let [draft @(rf/subscribe [:custom-scenario-draft])
          hex-types (:hex-types draft)]
      (is (= :water (get-hex-type hex-types [1 0]))
          "Hex [1 0] should be assigned water type"))))

(deftest hex-reassignment-test
  (testing "Clicking already-assigned hex updates its type"
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Assign terrain first
    (rf/dispatch-sync [:set-editor-hex-selection-mode :terrain])
    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])

    ;; Reassign as water
    (rf/dispatch-sync [:set-editor-hex-selection-mode :water])
    (rf/dispatch-sync [:assign-hex-type [0 0] :water])

    (let [draft @(rf/subscribe [:custom-scenario-draft])
          hex-types (:hex-types draft)]
      (is (= :water (get-hex-type hex-types [0 0]))
          "Hex [0 0] should be updated to water type"))))

(deftest clear-hex-assignment-test
  (testing "Clear button removes hex assignment"
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Assign fog type to coordinate
    (rf/dispatch-sync [:assign-hex-type [2 1] :fog])

    ;; Verify assignment
    (let [draft-before @(rf/subscribe [:custom-scenario-draft])
          hex-types-before (:hex-types draft-before)]
      (is (= :fog (get-hex-type hex-types-before [2 1]))
          "Hex should be assigned before clearing"))

    ;; Clear assignment
    (rf/dispatch-sync [:clear-hex-assignment [2 1]])

    (let [draft-after @(rf/subscribe [:custom-scenario-draft])
          hex-types (:hex-types draft-after)]
      (is (nil? (get-hex-type hex-types [2 1]))
          "Hex assignment should be cleared"))))

(deftest harbor-placement-initiates-selector-test
  (testing "Harbor placement sets harbor-placement-coord in UI state"
    (rf/dispatch-sync [:toggle-custom-scenario-editor])
    (rf/dispatch-sync [:set-editor-hex-selection-mode :harbor])

    ;; Initiate harbor placement
    (rf/dispatch-sync [:place-harbor-at-hex [1 1]])

    (let [placement-coord @(rf/subscribe [:harbor-placement-coord])]
      (is (= [1 1] placement-coord)
          "Harbor placement coord should be set"))))

(deftest harbor-direction-selection-test
  (testing "Selecting direction creates harbor in draft"
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Place harbor at coord with direction 0 (North)
    (rf/dispatch-sync [:set-harbor-direction [1 0] 0])

    (let [draft @(rf/subscribe [:custom-scenario-draft])
          harbors (:harbors draft)
          new-harbor (first harbors)]
      (is (= 1 (count harbors))
          "Should have one harbor")
      (is (= [1 0] (:land-hex new-harbor))
          "Harbor should be at correct coordinate")
      (is (= 0 (:direction new-harbor))
          "Harbor should have direction 0")
      (is (= :generic (:type new-harbor))
          "Harbor should have generic type by default"))))

(deftest harbor-type-assignment-test
  (testing "Assigning harbor type updates harbor in draft"
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Create harbor
    (rf/dispatch-sync [:set-harbor-direction [0 1] 2])

    ;; Assign wood type to harbor
    (rf/dispatch-sync [:assign-harbor-type [0 1] 2 :wood])

    (let [draft @(rf/subscribe [:custom-scenario-draft])
          harbors (:harbors draft)
          harbor (first harbors)]
      (is (= :wood (:type harbor))
          "Harbor type should be updated to wood"))))

(deftest harbor-removal-test
  (testing "Removing harbor deletes it from draft"
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Create two harbors
    (rf/dispatch-sync [:set-harbor-direction [1 1] 0])
    (rf/dispatch-sync [:set-harbor-direction [1 1] 3])

    (let [draft-before @(rf/subscribe [:custom-scenario-draft])]
      (is (= 2 (count (:harbors draft-before)))
          "Should have two harbors before removal"))

    ;; Remove first harbor (direction 0)
    (rf/dispatch-sync [:remove-harbor [1 1] 0])

    (let [draft-after @(rf/subscribe [:custom-scenario-draft])
          remaining-harbors (:harbors draft-after)
          remaining-harbor (first remaining-harbors)]
      (is (= 1 (count remaining-harbors))
          "Should have one harbor after removal")
      (is (= 3 (:direction remaining-harbor))
          "Remaining harbor should be the one with direction 3"))))

(deftest clear-all-hex-assignments-test
  (testing "Clear all removes all hex assignments and harbors"
    (rf/dispatch-sync [:toggle-custom-scenario-editor])

    ;; Assign multiple hex types
    (rf/dispatch-sync [:assign-hex-type [0 0] :terrain])
    (rf/dispatch-sync [:assign-hex-type [1 0] :water])
    (rf/dispatch-sync [:assign-hex-type [2 0] :fog])

    ;; Add harbors
    (rf/dispatch-sync [:set-harbor-direction [1 0] 0])

    ;; Clear all
    (rf/dispatch-sync [:clear-all-hex-assignments])

    (let [draft @(rf/subscribe [:custom-scenario-draft])
          hex-types (:hex-types draft)
          harbors (:harbors draft)]
      (is (empty? hex-types)
          "All hex assignments should be cleared")
      (is (empty? harbors)
          "All harbors should be cleared"))))
