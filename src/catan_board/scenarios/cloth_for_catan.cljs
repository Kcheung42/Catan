(ns catan-board.scenarios.cloth-for-catan
  (:require [catan-board.utils.hex :as hex]))

(def cloth-for-catan-scenario
  "Complete configuration for the Cloth for Catan scenario"
  {:id           :cloth-for-catan
   :name         "Cloth for Catan"
   :player-count 4
   :grid-pattern "3-4-5-6-5-4-3"

   ;; Special Hex coordinate sets by type
   :hex-types
   {;; Villages
    :village #{[0 0]}}

   ;; Resource and number distribution for face-up terrain hexes
   :face-up-distribution
   {:resources     {:water  0
                    :desert 2
                    :gold   0
                    :wheat  6
                    :brick  5
                    :ore    5
                    :sheep  6
                    :wood   6}
    :number-tokens {2  3
                    3  3
                    4  3
                    5  3
                    6  3
                    8  3
                    9  3
                    10 3
                    11 3
                    12 3}
    :assignment    :random}
   :harbors []})
