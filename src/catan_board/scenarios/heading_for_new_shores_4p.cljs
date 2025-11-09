(ns catan-board.scenarios.heading-for-new-shores-4p)

(def config
  {:id :heading-for-new-shores-4-players,
 :name "Heading For New Shores (4 Players)",
 :player-count 4,
 :grid-pattern "5-6-7-8-7-6-5",
 :hex-types
 {:water #{[2 -2] [2 -1] [1 0] [0 -4] [-1 2] [1 -4] [0 3] [-3 2] [-2 2] [2 -4] [2 -3] [0 1]},
  :terrain
  #{[0 0]
    [-3 -1]
    [0 -2]
    [-1 0]
    [-3 0]
    [0 -3]
    [-1 -1]
    [-1 -2]
    [-3 1]
    [-2 1]
    [1 -3]
    [-2 -1]
    [1 -1]
    [-1 1]
    [0 -1]
    [1 -2]
    [-1 -3]
    [-2 0]
    [-2 -2]},
 :fog #{[-2 3] [1 1] [3 -4] [3 -2] [-1 3] [3 0] [3 -3] [3 -1] [-3 3] [0 2] [2 0] [2 1] [1 2]},
  :village #{}},
 :harbors
 [{:land-hex [-2 -2], :direction 3, :type :generic}
  {:land-hex [0 -3], :direction 3, :type :wood}
  {:land-hex [1 -3], :direction 2, :type :brick}
  {:land-hex [1 -2], :direction 1, :type :generic}
  {:land-hex [0 0], :direction 1, :type :generic}
  {:land-hex [-1 1], :direction 0, :type :sheep}
  {:land-hex [-2 1], :direction 5, :type :generic}
  {:land-hex [-3 0], :direction 5, :type :ore}
 {:land-hex [-3 -1], :direction 4, :type :wheat}],
 :face-up-distribution
 {:resources {:water 0, :desert 1, :gold 0, :wheat 4, :brick 3, :ore 3, :sheep 4, :wood 4},
  :number-tokens {4 2, 6 2, 3 2, 12 1, 2 1, 11 2, 9 2, 5 2, 10 2, 8 2},
  :assignment :random},
 :fog-distribution
 {:resources {:water 4, :desert 0, :gold 2, :wheat 1, :brick 2, :ore 2, :sheep 1, :wood 1},
  :number-tokens {4 1, 6 1, 3 1, 12 0, 2 1, 11 1, 9 1, 5 1, 10 1, 8 1},
 :assignment :on-reveal}})
