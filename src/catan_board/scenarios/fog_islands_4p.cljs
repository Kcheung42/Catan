(ns catan-board.scenarios.fog-islands-4p
  "Fog Islands 3-Player scenario configuration for Catan: Seafarers.
   This scenario features two island clusters separated by water and fog hexes,
   with reveal mechanics for fog-covered terrain"
  (:require [catan-board.utils.hex :as hex]))

(def fog-islands-4p-scenario
  "Complete configuration for the Fog Islands 4-Player scenario"
  {:id           :fog-islands-4p
   :name         "Fog Islands (4-player)"
   :player-count 3
   :grid-pattern "5-6-7-8-7-6-5"

   ;; Hex coordinate sets by type
   :hex-types
   {;; Outer border water hexes (18 total)
    :water #{[-3 1] [-2 0] [0 -2] [1 -3] [1 -4] [0 -4] [0 3] [-1 -1]
             [-2 3] [-1 2] [0 1][1 0] [1 -1] [2 -2] [3 -3]}

    ;; Fog hexes between and around islands (12 total)
    :fog #{[-3 2] [-2 1] [-1 0] [0 -1] [1 -2] [2 -3] [3 -4]
           [2 -4] [-3 3] [-2 2] [-1 1] [0 0]}

    :terrain #{[-3 -1] [-2 2] [-1 -3] [-3 0] [-2 -1] [-1 -2] [0 -3]}}

   ;; Resource and number distribution for face-up terrain hexes
   :face-up-distribution
   {:resources     {:water  0
                    :desert 0
                    :gold   0
                    :wheat  3
                    :brick  3
                    :ore    3
                    :sheep  4
                    :wood   4}
    ;; Number tokens for non-desert hexes (17 terrain, 0 water, so 17 tokens)
    :number-tokens {2  1
                    3  2
                    4  2
                    5  2
                    6  2
                    8  2
                    9  2
                    10 2
                    11 1
                    12 1}
    :assignment    :random}

   ;; Resource and number distribution for fog hexes
   ;; Includes new :gold resource type unique to Seafarers scenarios
   :fog-distribution
   {:resources     {:water  2
                    :desert 0
                    :gold   2
                    :wheat  2
                    :brick  2
                    :ore    2
                    :sheep  1
                    :wood   1}
    ;; Number tokens for non-desert fog hexes (10 fog, 2 water, so 10 tokens)
    :number-tokens {2  0
                    3  1
                    4  1
                    5  1
                    6  1
                    8  1
                    9  1
                    10 1
                    11 2
                    12 1}
    :assignment    :on-reveal}

   ;; Harbor positions (9 total)
   :harbors
   [{:land-hex  [-3 -1]
     :direction hex/DIRECTION_SW
     :type      :generic}

    {:land-hex  [-3 -1]
     :direction hex/DIRECTION_N
     :type      :generic}

    {:land-hex  [-1 -3]
     :direction hex/DIRECTION_NW
     :type      :ore}

    {:land-hex  [0 -3]
     :direction hex/DIRECTION_N
     :type      :wood}

    {:land-hex  [-1 3]
     :direction hex/DIRECTION_SE
     :type      :generic}

    {:land-hex  [1 2]
     :direction hex/DIRECTION_SE
     :type      :brick}

    {:land-hex  [3 0]
     :direction hex/DIRECTION_S
     :type      :generic}

    {:land-hex  [3 0]
     :direction hex/DIRECTION_NE
     :type      :wheat}

    {:land-hex  [3 -2]
     :direction hex/DIRECTION_SE
     :type      :sheep}]})
