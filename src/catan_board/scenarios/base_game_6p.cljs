(ns catan-board.scenarios.base-game-6p
  "Fog Islands 3-Player scenario configuration for Catan: Seafarers.
   This scenario features two island clusters separated by water and fog hexes,
   with reveal mechanics for fog-covered terrain"
  (:require [catan-board.utils.hex :as hex]))

(def base-game-6p
  {:id           :base-game-6p
   :name         "Base Game (6-player)"
   :player-count 6
   :grid-pattern "3-4-5-6-5-4-3"
   :face-up-distribution
   {:resources     {:water  0
                    :desert 2
                    :gold   0
                    :wheat  6
                    :brick  5
                    :ore    5
                    :sheep  6
                    :wood   6}
    :number-tokens {2  2
                    3  3
                    4  3
                    5  3
                    6  3
                    8  3
                    9  3
                    10 3
                    11 3
                    12 2}
    :assignment    :random}

   :harbors
   [{:land-hex  [-0 -3]
     :direction hex/DIRECTION_NW
     :type      :generic}

    {:land-hex  [1 -3]
     :direction hex/DIRECTION_N
     :type      :ore}

    {:land-hex  [3 -3]
     :direction hex/DIRECTION_NE
     :type      :generic}

    {:land-hex  [3 -2]
     :direction hex/DIRECTION_SE
     :type      :sheep}

    {:land-hex  [2 0]
     :direction hex/DIRECTION_SE
     :type      :generic}

    {:land-hex  [0 2]
     :direction hex/DIRECTION_S
     :type      :generic}

    {:land-hex  [-1 2]
     :direction hex/DIRECTION_SW
     :type      :brick}

    {:land-hex  [-3 2]
     :direction hex/DIRECTION_S
     :type      :sheep}

    {:land-hex  [-3 1]
     :direction hex/DIRECTION_SW
     :type      :wood}

    {:land-hex  [-3 0]
     :direction hex/DIRECTION_NW
     :type      :generic}

    {:land-hex  [-2 -1]
     :direction hex/DIRECTION_N
     :type      :wheat}]})
