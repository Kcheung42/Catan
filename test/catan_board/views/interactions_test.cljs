(ns catan-board.views.interactions-test
  "Tests for user interaction handlers in the Fog Islands scenario.
   Covers fog reveal mechanics and scenario selection."
  (:require
   [cljs.test :refer-macros [deftest testing is use-fixtures]]
   [re-frame.core :as rf]
   [catan-board.events]
   [catan-board.subs]
   [catan-board.db :as db]
   [catan-board.scenarios.registry :as registry]))

;; Test fixture to initialize re-frame for each test
(use-fixtures :each
  {:before (fn []
             (rf/reg-event-db
              :test/set-db
              (fn [_ [_ new-db]]
                new-db)))
   :after (fn []
            (rf/clear-subscription-cache!))})

;; -- Fog Reveal Interaction Tests --------------------------------------------

(deftest fog-reveal-click-triggers-event
  (testing "Clicking a fog hex should trigger reveal event"
    ;; Initialize test database
    (rf/dispatch-sync [:test/set-db
                       {:scenario :fog-islands-3p
                        :fog-state {[1 0] {:revealed? false :terrain nil :number nil}}
                        :board {:hexes [{:coord [1 0] :resource :fog :number nil}]
                               :harbors []}
                        :ui {:edit-mode false}}])

    ;; Trigger fog reveal
    (rf/dispatch-sync [:reveal-fog-tile [1 0]])

    ;; Get the updated state
    (let [fog-state @(rf/subscribe [:fog-state])
          revealed-hex (get fog-state [1 0])]
      ;; Fog state should be updated to revealed
      (is (= true (:revealed? revealed-hex))
          "Fog hex should be marked as revealed")
      ;; Terrain should be assigned
      (is (some? (:terrain revealed-hex))
          "Terrain should be assigned when fog is revealed")
      ;; Number should exist in map (may be nil for desert)
      (is (contains? revealed-hex :number)
          "Number key should exist in revealed fog state"))))

(deftest clicking-already-revealed-fog-does-nothing
  (testing "Clicking an already revealed fog hex should not change state"
    ;; Initialize with already revealed fog
    (rf/dispatch-sync [:test/set-db
                       {:scenario :fog-islands-3p
                        :fog-state {[1 0] {:revealed? true :terrain :wood :number 6}}
                        :board {:hexes [{:coord [1 0] :resource :fog :number nil}]
                               :harbors []}
                        :ui {:edit-mode false}}])

    (let [initial-fog-state @(rf/subscribe [:fog-state])]
      ;; Try to reveal again
      (rf/dispatch-sync [:reveal-fog-tile [1 0]])

      ;; State should remain unchanged
      (let [final-fog-state @(rf/subscribe [:fog-state])]
        (is (= initial-fog-state final-fog-state)
            "Already revealed fog should not change state")))))

(deftest clicking-non-fog-hex-does-nothing
  (testing "Clicking a water or terrain hex should not affect fog state"
    ;; Initialize with fog hex but try to reveal non-fog coords
    (rf/dispatch-sync [:test/set-db
                       {:scenario :fog-islands-3p
                        :fog-state {[1 0] {:revealed? false :terrain nil :number nil}}
                        :board {:hexes [{:coord [0 0] :resource :wood :number 6}
                                       {:coord [2 0] :resource :water :number nil}]
                               :harbors []}
                        :ui {:edit-mode false}}])

    (let [initial-fog-state @(rf/subscribe [:fog-state])]
      ;; Try to reveal a terrain hex (doesn't exist in fog-state)
      (rf/dispatch-sync [:reveal-fog-tile [0 0]])
      (is (= initial-fog-state @(rf/subscribe [:fog-state]))
          "Clicking terrain hex should not affect fog state")

      ;; Try to reveal a water hex (doesn't exist in fog-state)
      (rf/dispatch-sync [:reveal-fog-tile [2 0]])
      (is (= initial-fog-state @(rf/subscribe [:fog-state]))
          "Clicking water hex should not affect fog state"))))

;; -- Scenario Selection Tests ------------------------------------------------

(deftest scenario-selection-triggers-board-regeneration
  (testing "Selecting a scenario should regenerate the board"
    ;; Start with base game
    (rf/dispatch-sync [:test/set-db
                       {:scenario :base-game
                        :board {:hexes [] :harbors []}
                        :fog-state {}
                        :ui {:tournament-mode false :selected-token-coord nil}}])

    ;; Switch to fog islands
    (rf/dispatch-sync [:set-scenario :fog-islands-3p])

    ;; Check results
    (let [scenario @(rf/subscribe [:current-scenario])
          hexes @(rf/subscribe [:hexes])
          fog-state @(rf/subscribe [:fog-state])]
      ;; Scenario should be updated
      (is (= :fog-islands-3p scenario)
          "Scenario ID should be updated to fog-islands-3p")
      ;; Board should have hexes
      (is (pos? (count hexes))
          "Board should be regenerated with hexes")
      ;; Fog state should be initialized
      (is (pos? (count fog-state))
          "Fog state should be initialized for fog islands scenario"))))

(deftest switching-to-base-game-clears-fog-state
  (testing "Switching to base game should clear fog state"
    ;; Start with fog islands
    (rf/dispatch-sync [:test/set-db
                       {:scenario :fog-islands-3p
                        :board {:hexes [] :harbors []}
                        :fog-state {[1 0] {:revealed? true :terrain :wood :number 6}}
                        :ui {:tournament-mode false :selected-token-coord nil}}])

    ;; Switch to base game
    (rf/dispatch-sync [:set-scenario :base-game])

    ;; Check results
    (let [scenario @(rf/subscribe [:current-scenario])
          fog-state @(rf/subscribe [:fog-state])
          hexes @(rf/subscribe [:hexes])]
      ;; Scenario should be base-game
      (is (= :base-game scenario)
          "Scenario should be set to base-game")
      ;; Fog state should be cleared
      (is (empty? fog-state)
          "Fog state should be empty for base game")
      ;; Board should be regenerated
      (is (pos? (count hexes))
          "Board should be regenerated"))))

(deftest scenario-selection-clears-token-selection
  (testing "Changing scenarios should clear any selected tokens"
    ;; Start with token selected
    (rf/dispatch-sync [:test/set-db
                       {:scenario :base-game
                        :board {:hexes [] :harbors []}
                        :fog-state {}
                        :ui {:tournament-mode false :selected-token-coord [0 0]}}])

    ;; Switch to fog islands
    (rf/dispatch-sync [:set-scenario :fog-islands-3p])

    ;; Check that selection is cleared
    (let [selected-token @(rf/subscribe [:selected-token-coord])]
      (is (nil? selected-token)
          "Selected token should be cleared when changing scenarios"))))

(deftest invalid-scenario-id-does-nothing
  (testing "Selecting an invalid scenario ID should not change state"
    ;; Initialize with base game
    (rf/dispatch-sync [:test/set-db
                       {:scenario :base-game
                        :board {:hexes [{:coord [0 0] :resource :wood :number 6}] :harbors []}
                        :fog-state {}
                        :ui {:tournament-mode false}}])

    (let [initial-scenario @(rf/subscribe [:current-scenario])
          initial-hexes @(rf/subscribe [:hexes])]
      ;; Try to set invalid scenario
      (rf/dispatch-sync [:set-scenario :invalid-scenario])

      ;; State should remain unchanged
      (is (= initial-scenario @(rf/subscribe [:current-scenario]))
          "Scenario should be unchanged with invalid ID")
      (is (= initial-hexes @(rf/subscribe [:hexes]))
          "Board should be unchanged with invalid scenario ID"))))
