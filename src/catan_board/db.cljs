(ns catan-board.db
  (:require
   [catan-board.utils.board-generator :as board-gen]
   [catan-board.scenarios.registry :as registry]))

(def hex-size 50)

(def default-db
  "Initial application state"
  (let [scenario-config (registry/get-scenario :base-game)]
    {:scenario  :base-game ; Current scenario ID (:base-game or :fog-islands-3p)
     :board     (board-gen/generate-board scenario-config false false)
     :fog-state {} ; Map of [q r] -> {:revealed? boolean :terrain keyword :number int}
     :ui        {:show-info-panel      true
                 :loading              false
                 :board-scale          225
                 :tournament-mode      false
                 :swap-number-mode     false
                 :selected-token-coord nil
                 :developer-mode       false}})) ; percentage: 50-200, tournament-mode: no adjacent red numbers
