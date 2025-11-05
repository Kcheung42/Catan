(ns catan-board.db
  (:require
   [catan-board.utils.board-generator :as board-gen]
   [catan-board.scenarios.registry :as registry]
   [catan-board.middleware.local-storage :as local-storage]))

(def hex-size 50)

(def default-db
  "Initial application (state)"
  (or
   (local-storage/load-latest-app-db-from-local-storage)
   (let [base-game-scenario-config (registry/get-scenario :base-game)]
     {:scenario :base-game
      :board    (board-gen/generate-board base-game-scenario-config false false)
      :ui       {:show-info-panel      true
                 :loading              false
                 :board-scale          225 ; percentage: 50-500, tournament-mode: no adjacent red numbers
                 :tournament-mode      false
                 :random-harbor-mode   false
                 :swap-number-mode     false
                 :selected-token-coord nil
                 :developer-mode       false
                 :landscape-mode       false}})))
