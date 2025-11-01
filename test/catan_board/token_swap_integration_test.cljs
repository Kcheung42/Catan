(ns catan-board.token-swap-integration-test
  (:require
   [cljs.test :refer-macros [deftest testing is]]
   [re-frame.core :as rf]
   [catan-board.db :as db]
   [catan-board.events]
   [catan-board.subs]))

;; Helper to set up test database
(rf/reg-event-db :test/set-db (fn [_ [_ new-db]] new-db))

(deftest complete-swap-workflow-test
  (testing "Complete swap workflow from start to finish"
    ;; Initialize with edit mode off and a board with two hexes
    (rf/dispatch-sync [:test/set-db {:ui {:edit-mode false
                                           :selected-token-coord nil}
                                     :board {:hexes [{:coord [0 0] :resource :wood :number 5}
                                                     {:coord [1 0] :resource :brick :number 8}]}}])

    ;; Step 1: Enable edit mode
    (rf/dispatch-sync [:toggle-edit-mode])
    (is (true? @(rf/subscribe [:edit-mode?]))
        "Edit mode should be enabled")

    ;; Step 2: Select first token
    (rf/dispatch-sync [:select-token [0 0]])
    (is (= [0 0] @(rf/subscribe [:selected-token-coord]))
        "First token should be selected")

    ;; Step 3: Select second token to perform swap
    (rf/dispatch-sync [:select-token [1 0]])

    ;; Step 4: Verify swap occurred and selection cleared
    (let [hexes @(rf/subscribe [:hexes])
          hex1 (first (filter #(= (:coord %) [0 0]) hexes))
          hex2 (first (filter #(= (:coord %) [1 0]) hexes))]
      (is (= 8 (:number hex1))
          "First hex should now have number 8")
      (is (= 5 (:number hex2))
          "Second hex should now have number 5")
      (is (nil? @(rf/subscribe [:selected-token-coord]))
          "Selection should be cleared after swap"))))

(deftest cancel-selection-workflow-test
  (testing "Cancel selection by clearing token selection"
    ;; Initialize with edit mode on and a selected token
    (rf/dispatch-sync [:test/set-db {:ui {:edit-mode true
                                           :selected-token-coord [0 0]}
                                     :board {:hexes [{:coord [0 0] :resource :wood :number 5}
                                                     {:coord [1 0] :resource :brick :number 8}]}}])

    ;; Verify initial state
    (is (= [0 0] @(rf/subscribe [:selected-token-coord]))
        "Token should be initially selected")

    ;; Clear selection (simulating background click)
    (rf/dispatch-sync [:clear-token-selection])

    ;; Verify selection cleared
    (is (nil? @(rf/subscribe [:selected-token-coord]))
        "Selection should be cleared after background click")))

(deftest disable-edit-mode-clears-selection-workflow-test
  (testing "Disabling edit mode while token is selected clears selection"
    ;; Initialize with edit mode on and a selected token
    (rf/dispatch-sync [:test/set-db {:ui {:edit-mode true
                                           :selected-token-coord [1 1]}
                                     :board {:hexes [{:coord [0 0] :resource :wood :number 5}
                                                     {:coord [1 1] :resource :brick :number 8}]}}])

    ;; Verify initial state
    (is (true? @(rf/subscribe [:edit-mode?]))
        "Edit mode should be enabled")
    (is (= [1 1] @(rf/subscribe [:selected-token-coord]))
        "Token should be selected")

    ;; Toggle edit mode off
    (rf/dispatch-sync [:toggle-edit-mode])

    ;; Verify edit mode is off and selection is cleared
    (is (false? @(rf/subscribe [:edit-mode?]))
        "Edit mode should be disabled")
    (is (nil? @(rf/subscribe [:selected-token-coord]))
        "Selection should be cleared when edit mode disabled")))

(deftest generate-board-clears-selection-workflow-test
  (testing "Generating new board clears active token selection"
    ;; Initialize with edit mode on and a selected token
    (rf/dispatch-sync [:test/set-db {:ui {:edit-mode true
                                           :selected-token-coord [0 0]
                                           :tournament-mode false}
                                     :board {:hexes [{:coord [0 0] :resource :wood :number 5}]}}])

    ;; Verify initial state
    (is (= [0 0] @(rf/subscribe [:selected-token-coord]))
        "Token should be initially selected")

    ;; Generate new board
    (rf/dispatch-sync [:generate-board])

    ;; Verify selection was cleared
    (is (nil? @(rf/subscribe [:selected-token-coord]))
        "Selection should be cleared after generating new board")

    ;; Verify new board was generated
    (let [hexes @(rf/subscribe [:hexes])]
      (is (> (count hexes) 1)
          "New board should have multiple hexes"))))

(deftest rapid-clicking-scenario-test
  (testing "Rapid clicking multiple tokens performs swaps correctly"
    ;; Initialize with edit mode on and three hexes
    (rf/dispatch-sync [:test/set-db {:ui {:edit-mode true
                                           :selected-token-coord nil}
                                     :board {:hexes [{:coord [0 0] :resource :wood :number 5}
                                                     {:coord [1 0] :resource :brick :number 8}
                                                     {:coord [0 1] :resource :wheat :number 10}]}}])

    ;; Click first token
    (rf/dispatch-sync [:select-token [0 0]])
    (is (= [0 0] @(rf/subscribe [:selected-token-coord]))
        "First token should be selected")

    ;; Click second token (performs swap)
    (rf/dispatch-sync [:select-token [1 0]])
    (is (nil? @(rf/subscribe [:selected-token-coord]))
        "Selection should be cleared after first swap")

    ;; Verify first swap occurred
    (let [hexes @(rf/subscribe [:hexes])
          hex1 (first (filter #(= (:coord %) [0 0]) hexes))
          hex2 (first (filter #(= (:coord %) [1 0]) hexes))]
      (is (= 8 (:number hex1)))
      (is (= 5 (:number hex2))))

    ;; Click third token (new selection)
    (rf/dispatch-sync [:select-token [0 1]])
    (is (= [0 1] @(rf/subscribe [:selected-token-coord]))
        "Third token should be selected")

    ;; Click first token again (performs second swap)
    (rf/dispatch-sync [:select-token [0 0]])

    ;; Verify second swap occurred
    (let [hexes @(rf/subscribe [:hexes])
          hex1 (first (filter #(= (:coord %) [0 0]) hexes))
          hex3 (first (filter #(= (:coord %) [0 1]) hexes))]
      (is (= 10 (:number hex1))
          "First hex should now have number 10 from third hex")
      (is (= 8 (:number hex3))
          "Third hex should have number 8 from first hex")
      (is (nil? @(rf/subscribe [:selected-token-coord]))
          "Selection should be cleared after second swap"))))

(deftest swap-red-numbers-test
  (testing "Swap red numbers (6 and 8) without tournament validation"
    ;; Initialize with two hexes having red numbers
    (rf/dispatch-sync [:test/set-db {:ui {:edit-mode true
                                           :selected-token-coord nil
                                           :tournament-mode false}
                                     :board {:hexes [{:coord [0 0] :resource :wood :number 6}
                                                     {:coord [1 0] :resource :brick :number 8}]}}])

    ;; Select first red number
    (rf/dispatch-sync [:select-token [0 0]])

    ;; Select second red number (perform swap)
    (rf/dispatch-sync [:select-token [1 0]])

    ;; Verify swap occurred successfully
    (let [hexes @(rf/subscribe [:hexes])
          hex1 (first (filter #(= (:coord %) [0 0]) hexes))
          hex2 (first (filter #(= (:coord %) [1 0]) hexes))]
      (is (= 8 (:number hex1))
          "First hex should now have red number 8")
      (is (= 6 (:number hex2))
          "Second hex should now have red number 6")
      (is (nil? @(rf/subscribe [:selected-token-coord]))
          "Selection should be cleared after swap"))))

(deftest create-adjacent-red-numbers-test
  (testing "Swap creates adjacent red numbers without warnings or validation"
    ;; Initialize with adjacent hexes where swap will create adjacent red numbers
    (rf/dispatch-sync [:test/set-db {:ui {:edit-mode true
                                           :selected-token-coord nil
                                           :tournament-mode false}
                                     :board {:hexes [{:coord [0 0] :resource :wood :number 6}
                                                     {:coord [1 0] :resource :brick :number 3}
                                                     {:coord [2 0] :resource :wheat :number 8}]}}])

    ;; Swap the middle hex (3) with the red number (8) to create adjacent 6 and 8
    (rf/dispatch-sync [:select-token [1 0]])
    (rf/dispatch-sync [:select-token [2 0]])

    ;; Verify swap occurred and created adjacent red numbers
    (let [hexes @(rf/subscribe [:hexes])
          hex1 (first (filter #(= (:coord %) [0 0]) hexes))
          hex2 (first (filter #(= (:coord %) [1 0]) hexes))
          hex3 (first (filter #(= (:coord %) [2 0]) hexes))]
      (is (= 6 (:number hex1))
          "First hex should still have 6")
      (is (= 8 (:number hex2))
          "Second hex should now have 8 (adjacent to 6)")
      (is (= 3 (:number hex3))
          "Third hex should now have 3")
      ;; Verify no error state or validation occurred
      (is (true? @(rf/subscribe [:edit-mode?]))
          "Edit mode should still be active")
      (is (nil? @(rf/subscribe [:selected-token-coord]))
          "Selection should be cleared normally"))))

(deftest swap-non-adjacent-hexes-test
  (testing "Swap tokens on non-adjacent hexes successfully"
    ;; Initialize with hexes that are far apart
    (rf/dispatch-sync [:test/set-db {:ui {:edit-mode true
                                           :selected-token-coord nil}
                                     :board {:hexes [{:coord [0 0] :resource :wood :number 5}
                                                     {:coord [2 0] :resource :brick :number 11}
                                                     {:coord [-2 0] :resource :wheat :number 9}]}}])

    ;; Select first hex at [0 0]
    (rf/dispatch-sync [:select-token [0 0]])

    ;; Select distant hex at [-2 0] (not adjacent)
    (rf/dispatch-sync [:select-token [-2 0]])

    ;; Verify swap occurred
    (let [hexes @(rf/subscribe [:hexes])
          hex1 (first (filter #(= (:coord %) [0 0]) hexes))
          hex3 (first (filter #(= (:coord %) [-2 0]) hexes))]
      (is (= 9 (:number hex1))
          "First hex should now have number 9")
      (is (= 5 (:number hex3))
          "Third hex should now have number 5")
      (is (nil? @(rf/subscribe [:selected-token-coord]))
          "Selection should be cleared after swap"))))
