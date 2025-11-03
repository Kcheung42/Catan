(ns catan-board.db
  (:require
   [catan-board.utils.board-generator :as board-gen]
   [catan-board.scenarios.registry :as registry]
   [catan-board.middleware.local-storage :as local-storage]))

(def hex-size 50)

(def default-db
  "Initial application state"
  (let [base-game-scenario-config (registry/get-scenario :base-game)]
    {:scenario (or (local-storage/load-from-local-storage "app-db" [:scenario])
                   :base-game)
     :board    (or (local-storage/load-from-local-storage "app-db" [:board])
                   (board-gen/generate-board base-game-scenario-config false false))
     :ui       {:show-info-panel      (or (local-storage/load-from-local-storage "app-db" [:ui :show-info-panel]) true)
                :loading              false
                :board-scale          (or (local-storage/load-from-local-storage "app-db" [:ui :board-scale]) 225)
                :tournament-mode      (or (local-storage/load-from-local-storage "app-db" [:ui :tournament-mode]) false)
                :random-harbor-mode   (or (local-storage/load-from-local-storage "app-db" [:ui :random-harbor-mode]) false)
                :swap-number-mode     false
                :selected-token-coord nil
                :developer-mode       (or (local-storage/load-from-local-storage "app-db" [:ui :developer-mode]) false)}})) ; percentage: 50-200, tournament-mode: no adjacent red numbers
