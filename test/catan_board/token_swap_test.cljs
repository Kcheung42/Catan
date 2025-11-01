(ns catan-board.token-swap-test
  (:require
   [cljs.test :refer-macros [deftest testing is run-tests]]
   [re-frame.core :as rf]
   [catan-board.db :as db]
   [catan-board.events]
   [catan-board.subs]))

;; Helper to set up test database
(rf/reg-event-db :test/set-db (fn [_ [_ new-db]] new-db))

(deftest toggle-edit-mode-test
  (testing "Toggle edit mode on and off"
    (rf/dispatch-sync [:test/set-db {:ui {:edit-mode false :selected-token-coord nil}}])

    (rf/dispatch-sync [:toggle-edit-mode])
    (is (true? @(rf/subscribe [:edit-mode?])))

    (rf/dispatch-sync [:toggle-edit-mode])
    (is (false? @(rf/subscribe [:edit-mode?])))))

(deftest toggle-edit-mode-clears-selection-test
  (testing "Toggling edit mode off clears selected token"
    (rf/dispatch-sync [:test/set-db {:ui {:edit-mode true :selected-token-coord [0 0]}}])

    (rf/dispatch-sync [:toggle-edit-mode])
    (is (false? @(rf/subscribe [:edit-mode?])))
    (is (nil? @(rf/subscribe [:selected-token-coord])))))

(deftest select-token-first-selection-test
  (testing "Selecting first token stores coordinate"
    (rf/dispatch-sync [:test/set-db {:ui {:selected-token-coord nil}
                                     :board {:hexes [{:coord [0 0] :resource :wood :number 5}
                                                     {:coord [1 0] :resource :brick :number 8}]}}])

    (rf/dispatch-sync [:select-token [0 0]])
    (is (= [0 0] @(rf/subscribe [:selected-token-coord])))))

(deftest select-token-swap-test
  (testing "Selecting second token swaps numbers and clears selection"
    (rf/dispatch-sync [:test/set-db {:ui {:selected-token-coord [0 0]}
                                     :board {:hexes [{:coord [0 0] :resource :wood :number 5}
                                                     {:coord [1 0] :resource :brick :number 8}]}}])

    (rf/dispatch-sync [:select-token [1 0]])
    (let [hexes @(rf/subscribe [:hexes])
          hex1 (first (filter #(= (:coord %) [0 0]) hexes))
          hex2 (first (filter #(= (:coord %) [1 0]) hexes))]
      (is (= 8 (:number hex1)))
      (is (= 5 (:number hex2)))
      (is (nil? @(rf/subscribe [:selected-token-coord]))))))

(deftest clear-token-selection-test
  (testing "Clear token selection sets coordinate to nil"
    (rf/dispatch-sync [:test/set-db {:ui {:selected-token-coord [0 0]}}])

    (rf/dispatch-sync [:clear-token-selection])
    (is (nil? @(rf/subscribe [:selected-token-coord])))))

(deftest generate-board-clears-selection-test
  (testing "Generating new board clears token selection"
    (rf/dispatch-sync [:test/set-db {:ui {:selected-token-coord [0 0] :tournament-mode false}
                                     :board {:hexes []}}])

    (rf/dispatch-sync [:generate-board])
    (is (nil? @(rf/subscribe [:selected-token-coord])))))

(deftest edit-mode-subscription-test
  (testing "Edit mode subscription returns correct value"
    (rf/dispatch-sync [:test/set-db {:ui {:edit-mode true}}])
    (is (true? @(rf/subscribe [:edit-mode?])))

    (rf/dispatch-sync [:test/set-db {:ui {:edit-mode false}}])
    (is (false? @(rf/subscribe [:edit-mode?])))

    (rf/dispatch-sync [:test/set-db {:ui {}}])
    (is (false? @(rf/subscribe [:edit-mode?])))))

(deftest selected-token-coord-subscription-test
  (testing "Selected token coord subscription returns correct value"
    (rf/dispatch-sync [:test/set-db {:ui {:selected-token-coord [1 1]}}])
    (is (= [1 1] @(rf/subscribe [:selected-token-coord])))

    (rf/dispatch-sync [:test/set-db {:ui {:selected-token-coord nil}}])
    (is (nil? @(rf/subscribe [:selected-token-coord])))

    (rf/dispatch-sync [:test/set-db {:ui {}}])
    (is (nil? @(rf/subscribe [:selected-token-coord])))))
