(ns catan-board.utils.board-generator
  (:require
   [catan-board.utils.resources :as resources]
   [catan-board.utils.numbers :as numbers]
   [catan-board.utils.scenario-generator :as scenario-generator]))

;; -- Board Validation --------------------------------------------------------

(defn hex-neighbors
  "Returns the axial coordinates of all neighbors of a hex at [q r]"
  [[q r]]
  [[(inc q) r]
   [(dec q) r]
   [q (inc r)]
   [q (dec r)]
   [(inc q) (dec r)]
   [(dec q) (inc r)]])

(defn has-adjacent-red-numbers?
  "Checks if any two hexes with red numbers (6 or 8) are adjacent"
  [hexes]
  (let [red-hexes  (filter #(numbers/is-red-number? (:number %)) hexes)
        red-coords (set (map :coord red-hexes))]
    (some (fn [hex]
            (let [neighbors       (hex-neighbors (:coord hex))
                  neighbor-coords (set neighbors)]
              (seq (clojure.set/intersection red-coords neighbor-coords))))
          red-hexes)))

;; -- Board Generation --------------------------------------------------------

(defn assign-resources
  "Assigns resources to hex coordinates randomly"
  [coords]
  (let [resource-deck (resources/create-resource-deck)]
    (mapv (fn [coord resource]
            {:coord    coord
             :resource resource
             :number   nil})
          coords
          resource-deck)))

(defn assign-numbers
  "Assigns numbers to hexes (skipping desert)"
  [hexes]
  (let [number-deck (numbers/create-number-deck)
        number-atom (atom number-deck)]
    (mapv (fn [hex]
            (if (= :desert (:resource hex))
              hex
              (let [num (first @number-atom)]
                (swap! number-atom rest)
                (assoc hex :number num))))
          hexes)))

(defn generate-board
  "Generates a complete Catan board with random resource and number placement.
   If tournament-mode? is true, ensures no adjacent red numbers (6 & 8)"
  [scenario-config tournament-mode?]
  (loop [attempts     0
         max-attempts 100]
    (if (>= attempts max-attempts)
      ;; Fallback after max attempts - just return whatever we have
      (scenario-generator/generate-scenario-board scenario-config)
      ;; Try generating board
      (let [new-board (scenario-generator/generate-scenario-board scenario-config)
            hexes     (:hexes new-board)]
        (if (or (not tournament-mode?)
                (not (has-adjacent-red-numbers? hexes)))
          ;; Valid board - return it
          (update new-board
                  :meta-data
                  #(merge % {:tournament-mode tournament-mode?
                             :attempts        (inc attempts)}))
          ;; Invalid - try again
          (recur (inc attempts) max-attempts))))))
