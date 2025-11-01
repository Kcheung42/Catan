(ns catan-board.views-test
  (:require
   [cljs.test :refer-macros [deftest testing is]]
   [re-frame.core :as rf]
   [catan-board.db :as db]
   [catan-board.events]
   [catan-board.subs]))

;; Helper to set up test database
(rf/reg-event-db :test/set-db (fn [_ [_ new-db]] new-db))

(deftest edit-mode-toggle-subscription-test
  (testing "Edit Mode toggle subscribes to :edit-mode? subscription"
    (rf/dispatch-sync [:test/set-db {:ui {:edit-mode false}}])

    (let [edit-mode? @(rf/subscribe [:edit-mode?])]
      (is (= false edit-mode?)))))

(deftest edit-mode-toggle-dispatch-test
  (testing "Edit Mode toggle dispatches :toggle-edit-mode event on change"
    (rf/dispatch-sync [:test/set-db {:ui {:edit-mode false :selected-token-coord nil}}])

    (rf/dispatch-sync [:toggle-edit-mode])
    (let [edit-mode? @(rf/subscribe [:edit-mode?])]
      (is (= true edit-mode?)))

    (rf/dispatch-sync [:toggle-edit-mode])
    (let [edit-mode? @(rf/subscribe [:edit-mode?])]
      (is (= false edit-mode?)))))

(deftest edit-mode-toggle-clears-selection-test
  (testing "Toggling Edit Mode off clears selected token"
    (rf/dispatch-sync [:test/set-db {:ui {:edit-mode true :selected-token-coord [0 0]}}])

    (rf/dispatch-sync [:toggle-edit-mode])
    (let [selected @(rf/subscribe [:selected-token-coord])]
      (is (= nil selected)))))
