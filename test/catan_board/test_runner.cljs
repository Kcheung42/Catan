(ns catan-board.test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [catan-board.test-setup]
   [catan-board.hex-test]
   [catan-board.token-swap-test]
   [catan-board.views-test]
   [catan-board.hex-interactions-test]
   [catan-board.token-swap-integration-test]
   [catan-board.custom-editor.events-test]))

(defn -main []
  (run-tests
   'catan-board.hex-test
   'catan-board.token-swap-test
   'catan-board.views-test
   'catan-board.hex-interactions-test
   'catan-board.token-swap-integration-test
   'catan-board.custom-editor.events-test))
