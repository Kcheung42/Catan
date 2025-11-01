(ns catan-board.utils.harbors)

;; -- Harbor Types and Distribution -------------------------------------------

(def harbor-types
  "Types of harbors in Catan"
  #{:generic :wood :brick :wheat :sheep :ore})

(def standard-harbor-distribution
  "Standard Catan harbor distribution (9 total harbors)"
  {:generic 4   ; 3:1 trade
   :wood    1   ; 2:1 wood
   :brick   1   ; 2:1 brick
   :wheat   1   ; 2:1 wheat
   :sheep   1   ; 2:1 sheep
   :ore     1}) ; 2:1 ore

;; -- Harbor Positions --------------------------------------------------------
;; Harbors are placed on edges between two water hexes and one land hex
;; Each harbor has a position (edge) and a direction (which land hex it faces)

(def standard-harbor-positions
  "Standard harbor positions on a Catan board.
   Each harbor has:
   - :land-hex - the land hex coordinate it's adjacent to
   - :direction - which edge of the hex (0=SE, 1=S, 2=SW, 3=NW, 4=N, 5=NE)"
  [;; Top side (2 harbors)
   {:land-hex [-2 2]
    :direction 2}  ; SE edge
   {:land-hex [-1 2]
    :direction 1}  ; SW edge

   ;; Top-right side (2 harbors)
   {:land-hex [1 1]
    :direction 1}  ; SE edge
   {:land-hex [2 0]
    :direction 0}  ; SE edge

   ;; Bottom-right side (2 harbors)
   {:land-hex [2 -1]
    :direction 5}  ; NE edge
   {:land-hex [1 -2]
    :direction 5}  ; NE edge

   ;; Bottom side (1 harbor)
   {:land-hex [0 -2]
    :direction 4}  ; N edge

   ;; Bottom-left side (1 harbor)
   {:land-hex [-1 -1]
    :direction 3}  ; NW edge

   ;; Top-left side (1 harbor)
   {:land-hex [-2 1]
    :direction 3}]) ; NW edge

(defn create-harbor-deck
  "Creates a shuffled deck of harbor types based on standard distribution"
  []
  (let [deck (flatten
              (for [[harbor-type count] standard-harbor-distribution]
                (repeat count harbor-type)))]
    (shuffle deck)))

(defn assign-harbors
  "Assigns harbor types to the standard harbor positions"
  []
  (let [harbor-deck (create-harbor-deck)]
    (mapv (fn [position harbor-type]
            (assoc position :type harbor-type))
          standard-harbor-positions
          harbor-deck)))

(defn get-harbor-ratio
  "Returns the trade ratio for a harbor type (2 for specific, 3 for generic)"
  [harbor-type]
  (if (= harbor-type :generic)
    3
    2))

(defn get-harbor-color
  "Returns the color for a harbor - all harbors are ocean blue"
  [harbor-type]
  "#1e88e5")  ; Ocean blue - matches the sea background
