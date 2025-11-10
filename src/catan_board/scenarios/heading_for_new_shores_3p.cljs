(ns catan-board.scenarios.heading-for-new-shores-3p)

(def config
  {:id           :heading-for-new-shores-3-players,
   :name         "Seafarers: Heading For New Shores (3-Player)",
   :player-count 4,
   :grid-pattern "4-5-6-7-6-5-4",
   :hex-types
   {:water   #{[2 -2] [2 -1] [1 0] [0 -3] [-1 2] [1 -3] [0 3] [-3 2] [-2 2] [2 -3] [0 1]},
    :terrain
    #{[0 0]
      [0 -2]
      [-1 0]
      [-3 0]
      [-1 -1]
      [-1 -2]
      [-3 1]
      [-2 1]
      [-2 -1]
      [1 -1]
      [-1 1]
      [0 -1]
      [1 -2]
      [-2 0]},
    :fog     #{[-2 3] [1 1] [3 -2] [-1 3] [3 0] [3 -3] [3 -1] [-3 3] [0 2] [2 0] [2 1] [1 2]},
    :village #{}},
   :harbors
   [{:land-hex [-1 -2], :direction 2, :type :ore}
    {:land-hex [-1 -2], :direction 4, :type :generic}
    {:land-hex [1 -2], :direction 3, :type :wheat}
    {:land-hex [1 -1], :direction 0, :type :generic}
    {:land-hex [-1 1], :direction 1, :type :sheep}
    {:land-hex [-3 1], :direction 0, :type :generic}
    {:land-hex [-3 1], :direction 4, :type :wood}
    {:land-hex [-3 0], :direction 3, :type :brick}],
   :face-up-distribution
   {:resources     {:water 0, :desert 0, :gold 0, :wheat 3, :brick 2, :ore 2, :sheep 4, :wood 3},
    :number-tokens {4 1, 6 2, 3 1, 12 0, 2 1, 11 2, 9 1, 5 2, 10 2, 8 2},
    :assignment    :random},
   :fog-distribution
   {:resources     {:water 4, :desert 0, :gold 2, :wheat 1, :brick 2, :ore 2, :sheep 1, :wood 0},
    :number-tokens {4 2, 6 0, 3 1, 12 1, 2 0, 11 0, 9 1, 5 1, 10 1, 8 1},
    :assignment    :on-reveal}})
