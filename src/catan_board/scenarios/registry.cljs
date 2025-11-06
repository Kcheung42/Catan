(ns catan-board.scenarios.registry
  "Central registry for all Catan scenario configurations.
   Provides lookup and listing functions for available scenarios."
  (:require
   [catan-board.scenarios.fog-islands-3p :as fog-islands-3p]
   [catan-board.scenarios.fog-islands-4p :as fog-islands-4p]
   [catan-board.scenarios.base-game-6p :as base-game-6p]
   [catan-board.scenarios.base-game-4p :as base-game-4p]
   [catan-board.middleware.local-storage :as local-storage]
   [catan-board.scenarios.cloth-for-catan :as cloth-for-catan]))

;; Central scenario registry
(def scenarios
  "Map of scenario IDs to their configuration data."
  {:base-game       base-game-4p/base-game-4p
   :base-game-6p    base-game-6p/base-game-6p
   :fog-islands-3p  fog-islands-3p/fog-islands-3p-scenario
   :fog-islands-4p  fog-islands-4p/fog-islands-4p-scenario
   :cloth-for-catan cloth-for-catan/cloth-for-catan-scenario})

;; -- Public API --------------------------------------------------------------

(defn get-scenario
  "Returns the scenario configuration for the given scenario-id, or nil if not found.

   Usage:
     (get-scenario :fog-islands-3p)  ; Returns fog islands config
     (get-scenario :base-game)        ; Returns base game config
     (get-scenario :unknown)          ; Returns nil"
  [scenario-id]
  (or (get scenarios scenario-id)
      (get (local-storage/load-from-local-storage :custom-scenarios) scenario-id)))

(defn list-scenarios
  "Returns a list of available scenarios with their ID and name.
   Useful for populating scenario selection dropdowns.

   Returns: [{:id keyword :name string :player-count int} ...]

   Example:
     [{:id :base-game :name 'Base Game (4-player)' :player-count 4}
      {:id :fog-islands-3p :name 'Fog Islands (3-player)' :player-count 3}]"
  []
  (mapv (fn [[id config]]
          {:id           id
           :name         (:name config)
           :player-count (:player-count config)})
        (concat scenarios (local-storage/load-from-local-storage :custom-scenarios))))
