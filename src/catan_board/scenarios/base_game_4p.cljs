(ns catan-board.scenarios.base-game-4p
  "Fog Islands 3-Player scenario configuration for Catan: Seafarers.
   This scenario features two island clusters separated by water and fog hexes,
   with reveal mechanics for fog-covered terrain"
  (:require [catan-board.utils.hex :as hex]))

(def base-game-4p
  {:id           :base-game
   :name         "Base Game (4-player)"
   :player-count 4
   :grid-pattern "3-4-5-4-3"
   :face-up-distribution
   {:resources     {:water  0
                    :desert 1
                    :gold   0
                    :wheat  4
                    :brick  3
                    :ore    3
                    :sheep  4
                    :wood   4}
    ;; Number tokens for non-desert hexes 18 tokens
    :number-tokens {2  1
                    3  2
                    4  2
                    5  2
                    6  2
                    8  2
                    9  2
                    10 2
                    11 2
                    12 1}
    :assignment    :random}
   :harbors
   [{:land-hex  [-2 2]
     :direction hex/DIRECTION_SW
     :type      :wood}

    {:land-hex  [-1 2]
     :direction hex/DIRECTION_S}

    {:land-hex  [1 1]
     :direction hex/DIRECTION_S
     :type      :brick}

    {:land-hex  [2 0]
     :direction hex/DIRECTION_SE
     :type      :generic}

    {:land-hex  [2 -1]
     :direction hex/DIRECTION_NE
     :type      :generic}

    {:land-hex  [1 -2]
     :direction hex/DIRECTION_NE
     :type      :sheep}

    {:land-hex  [0 -2]
     :direction hex/DIRECTION_N
     :type      :generic}

    {:land-hex  [-1 -1]
     :direction hex/DIRECTION_NW
     :type      :ore}

    {:land-hex  [-2 1]
     :direction hex/DIRECTION_NW
     :type      :wheat}]})
