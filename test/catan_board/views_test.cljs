(ns catan-board.views-test
  (:require
   [cljs.test :refer-macros [deftest testing is]]
   [re-frame.core :as rf]
   [catan-board.db :as db]
   [catan-board.events]
   [catan-board.subs]))

;; Helper to set up test database
(rf/reg-event-db :test/set-db (fn [_ [_ new-db]] new-db))

(deftest swap-number-mode-toggle-subscription-test
  (testing "Swap Number Mode toggle subscribes to :swap-number-mode? subscription"
    (rf/dispatch-sync [:test/set-db {:ui {:swap-number-mode false}}])

    (let [swap-number-mode? @(rf/subscribe [:swap-number-mode?])]
      (is (= false swap-number-mode?)))))

(deftest swap-number-mode-toggle-dispatch-test
  (testing "Swap Number Mode toggle dispatches :toggle-swap-number-mode event on change"
    (rf/dispatch-sync [:test/set-db {:ui {:swap-number-mode false :selected-token-coord nil}}])

    (rf/dispatch-sync [:toggle-swap-number-mode])
    (let [swap-number-mode? @(rf/subscribe [:swap-number-mode?])]
      (is (= true swap-number-mode?)))

    (rf/dispatch-sync [:toggle-swap-number-mode])
    (let [swap-number-mode? @(rf/subscribe [:swap-number-mode?])]
      (is (= false swap-number-mode?)))))

(deftest swap-number-mode-toggle-clears-selection-test
  (testing "Toggling Swap Number Mode off clears selected token"
    (rf/dispatch-sync [:test/set-db {:ui {:swap-number-mode true :selected-token-coord [0 0]}}])

    (rf/dispatch-sync [:toggle-swap-number-mode])
    (let [selected @(rf/subscribe [:selected-token-coord])]
      (is (= nil selected)))))
