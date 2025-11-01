(ns catan-board.utils.hex
  "Hexagonal grid utilities using axial coordinates (q, r).
   Based on Red Blob Games hexagon guide for flat-top hexagons.")

;; -- Constants ---------------------------------------------------------------

(def sqrt3 (Math/sqrt 3))

;; Edge directions for flat-top hexagons (clockwise from north)
;; Used for harbor placement and edge calculations
(def DIRECTION_N 0)   ; North edge (top)
(def DIRECTION_NE 1)  ; Northeast edge (upper-right)
(def DIRECTION_SE 2)  ; Southeast edge (lower-right)
(def DIRECTION_S 3)   ; South edge (bottom)
(def DIRECTION_SW 4)  ; Southwest edge (lower-left)
(def DIRECTION_NW 5)  ; Northwest edge (upper-left)

(def direction-names
  {DIRECTION_N  "North"
   DIRECTION_NE "Northeast"
   DIRECTION_SE "Southeast"
   DIRECTION_S  "South"
   DIRECTION_SW "Southwest"
   DIRECTION_NW "Northwest"})

;; Axial direction vectors for the 6 neighbors of a hex
(def hex-directions
  [[1 0]   ; right
   [1 -1]  ; up-right
   [0 -1]  ; up-left
   [-1 0]  ; left
   [-1 1]  ; down-left
   [0 1]]) ; down-right

;; -- Coordinate Conversion ---------------------------------------------------

(defn axial-to-pixel
  "Converts axial coordinates [q r] to pixel coordinates [x y] for flat-top hexagons.
   hex-size is the distance from center to any vertex (radius)."
  [[q r] hex-size]
  (let [x (* hex-size (/ 3 2) q)
        y (* hex-size (+ (* sqrt3 (/ 1 2) q)
                         (* sqrt3 r)))]
    [x y]))

(defn pixel-to-axial
  "Converts pixel coordinates [x y] back to axial coordinates [q r].
   Returns rounded axial coordinates."
  [[x y] hex-size]
  (let [q (/ (* (/ 2 3) x) hex-size)
        r (/ (- y (* (/ sqrt3 3) x)) (* sqrt3 hex-size))
        ;; Convert to cube coordinates for proper rounding
        s (- (- q) r)
        ;; Round to nearest integer coordinates
        rq (Math/round q)
        rr (Math/round r)
        rs (Math/round s)
        ;; Fix rounding errors
        q-diff (Math/abs (- rq q))
        r-diff (Math/abs (- rr r))
        s-diff (Math/abs (- rs s))
        [final-q final-r] (cond
                            (and (> q-diff r-diff) (> q-diff s-diff))
                            [(- (- rr) rs) rr]

                            (> r-diff s-diff)
                            [rq (- (- rq) rs)]

                            :else
                            [rq rr])]
    [final-q final-r]))

;; -- Hex Grid Operations -----------------------------------------------------

(defn hex-add
  "Adds two axial coordinates."
  [[q1 r1] [q2 r2]]
  [(+ q1 q2) (+ r1 r2)])

(defn hex-neighbors
  "Returns the 6 neighboring hexes of the given hex."
  [hex]
  (map #(hex-add hex %) hex-directions))

(defn hex-distance
  "Calculates the distance between two hexes in hex steps.
   Uses cube coordinate distance formula."
  [[q1 r1] [q2 r2]]
  (let [s1 (- (- q1) r1)
        s2 (- (- q2) r2)]
    (/ (+ (Math/abs (- q1 q2))
          (Math/abs (- r1 r2))
          (Math/abs (- s1 s2)))
       2)))

;; -- Catan Board Generation --------------------------------------------------

(defn generate-catan-grid
  "Generates the standard Catan board layout with 20 hexes in a 3-4-5-4-3 pattern.
   Returns a vector of axial coordinates."
  []
  (let [coords (for [q (range -2 3)
                     r (range -2 3)
                     :let [s (- (- q) r)]
                     :when (and (>= s -2) (<= s 2))]
                 [q r])]
    (vec coords)))

;; -- SVG Rendering Helpers ---------------------------------------------------

(defn hex-vertices
  "Calculates the 6 vertex points of a flat-top hexagon.
   Returns a vector of [x y] coordinates relative to the hex center.
   Vertices are ordered clockwise starting from the rightmost point."
  [[q r] hex-size]
  (let [[cx cy] (axial-to-pixel [q r] hex-size)]
    (for [i (range 6)]
      (let [angle (* (/ Math/PI 3) i)  ; 60 degrees per vertex
            x (+ cx (* hex-size (Math/cos angle)))
            y (+ cy (* hex-size (Math/sin angle)))]
        [x y]))))

(defn vertices-to-svg-points
  "Converts a sequence of [x y] vertices to SVG points string format."
  [vertices]
  (->> vertices
       (map (fn [[x y]] (str x "," y)))
       (clojure.string/join " ")))

(defn hex-center
  "Returns the pixel coordinates [x y] of the hex center."
  [coord hex-size]
  (axial-to-pixel coord hex-size))
