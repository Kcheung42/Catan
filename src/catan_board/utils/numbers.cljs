(ns catan-board.utils.numbers)

;; -- Number Distribution -----------------------------------------------------

(def standard-number-distribution
  "Standard Catan number token distribution (18 tokens total, no 7)"
  {2  1
   3  2
   4  2
   5  2
   6  2
   8  2
   9  2
   10 2
   11 2
   12 1})

(def number-probabilities
  "Probability pips for each number (how many ways to roll it with 2 dice)"
  {2  1
   3  2
   4  3
   5  4
   6  5
   8  5
   9  4
   10 3
   11 2
   12 1})

(defn create-number-deck
  "Creates a shuffled deck of numbers based on standard distribution"
  []
  (let [deck (flatten
              (for [[number count] standard-number-distribution]
                (repeat count number)))]
    (shuffle deck)))

(defn is-red-number?
  "Returns true if the number is 6 or 8 (high probability)"
  [n]
  (or (= n 6) (= n 8)))

(defn get-probability-pips
  "Returns the number of probability pips for a given number"
  [n]
  (get number-probabilities n 0))
