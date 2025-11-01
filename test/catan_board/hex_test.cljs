(ns catan-board.hex-test
  (:require
   [cljs.test :refer-macros [deftest testing is]]
   [catan-board.utils.hex :as hex]))

(deftest axial-to-pixel-test
  (testing "Converts axial coordinates to pixel coordinates for flat-top hexagons"
    (let [hex-size 60]
      ;; Center hex at origin
      (is (= [0.0 0.0]
             (hex/axial-to-pixel [0 0] hex-size)))

      ;; Hex to the right (q=1, r=0)
      (is (= [90.0 0.0]
             (hex/axial-to-pixel [1 0] hex-size)))

      ;; Hex down-right (q=0, r=1)
      (let [[x y] (hex/axial-to-pixel [0 1] hex-size)]
        (is (< (Math/abs x) 0.01))  ; x should be ~0
        (is (> y 100)))             ; y should be positive

      ;; Round trip conversions
      (is (= [1 0]
             (hex/pixel-to-axial (hex/axial-to-pixel [1 0] hex-size) hex-size)))

      (is (= [0 1]
             (hex/pixel-to-axial (hex/axial-to-pixel [0 1] hex-size) hex-size))))))

(deftest hex-neighbors-test
  (testing "Finds the 6 neighbors of a hex"
    (let [neighbors (hex/hex-neighbors [0 0])]
      (is (= 6 (count neighbors)))
      (is (contains? (set neighbors) [1 0]))   ; right
      (is (contains? (set neighbors) [-1 0]))  ; left
      (is (contains? (set neighbors) [0 1]))   ; down-right
      (is (contains? (set neighbors) [0 -1]))  ; up-left
      (is (contains? (set neighbors) [1 -1]))  ; up-right
      (is (contains? (set neighbors) [-1 1]))))) ; down-left

(deftest hex-distance-test
  (testing "Calculates distance between two hexes"
    (is (= 0 (hex/hex-distance [0 0] [0 0])))
    (is (= 1 (hex/hex-distance [0 0] [1 0])))
    (is (= 1 (hex/hex-distance [0 0] [0 1])))
    (is (= 2 (hex/hex-distance [0 0] [2 0])))
    (is (= 2 (hex/hex-distance [0 0] [1 1])))))

(deftest generate-catan-grid-test
  (testing "Generates the standard Catan 3-4-5-4-3 hex grid"
    (let [grid (hex/generate-catan-grid)]
      ;; Should have exactly 19 hexes (standard Catan board)
      (is (= 19 (count grid)))

      ;; Check that specific positions are included
      (is (contains? (set grid) [0 0]))   ; center hex
      (is (contains? (set grid) [1 0]))
      (is (contains? (set grid) [0 1]))

      ;; All hexes should be within distance 2 from center
      (is (every? #(<= (hex/hex-distance [0 0] %) 2) grid)))))

(deftest hex-vertices-test
  (testing "Calculates the 6 vertices of a flat-top hexagon"
    (let [hex-size 60
          vertices (hex/hex-vertices [0 0] hex-size)]
      ;; Should have 6 vertices
      (is (= 6 (count vertices)))

      ;; Each vertex should be approximately hex-size distance from center
      (doseq [[x y] vertices]
        (let [distance (Math/sqrt (+ (* x x) (* y y)))]
          (is (< (Math/abs (- distance hex-size)) 0.1)))))))

;; -- Tests for generate-grid-from-pattern (Task 1.1) ------------------------

(deftest generate-grid-from-pattern-produces-correct-count
  (testing "generate-grid-from-pattern with '5-6-7-8-7-6-5' produces 44 coordinates"
    (let [coords (hex/generate-grid-from-pattern "5-6-7-8-7-6-5")]
      (is (= 44 (count coords))
          "Should generate exactly 44 hex coordinates for 5-6-7-8-7-6-5 pattern"))))

(deftest generate-grid-from-pattern-is-centered
  (testing "Grid is properly centered with middle column at q=0"
    (let [coords (hex/generate-grid-from-pattern "5-6-7-8-7-6-5")
          middle-col-coords (filter #(= 0 (first %)) coords)]
      (is (= 8 (count middle-col-coords))
          "Middle column (q=0) should have 8 hexes (the largest column)")
      (is (= (set (map second middle-col-coords))
             #{-4 -3 -2 -1 0 1 2 3})
          "Middle column should span r=-4 to r=3 (centered around r=0)"))))

(deftest generate-grid-from-pattern-valid-coordinates
  (testing "All coordinates are valid axial coordinates"
    (let [coords (hex/generate-grid-from-pattern "5-6-7-8-7-6-5")]
      (is (every? vector? coords)
          "All coordinates should be vectors")
      (is (every? #(= 2 (count %)) coords)
          "All coordinates should have exactly 2 elements [q r]")
      (is (every? #(and (number? (first %)) (number? (second %))) coords)
          "All coordinate values should be numbers"))))

(deftest generate-grid-from-pattern-symmetry
  (testing "Generated grid has symmetrical structure"
    (let [coords (hex/generate-grid-from-pattern "3-4-5-4-3")
          col-counts (frequencies (map first coords))]
      (is (= {-2 3, -1 4, 0 5, 1 4, 2 3} col-counts)
          "3-4-5-4-3 pattern should have correct hex count per column (matching the pattern)"))))

(deftest generate-grid-from-pattern-single-column
  (testing "Single column pattern generates correct coordinates"
    (let [coords (hex/generate-grid-from-pattern "3")]
      (is (= 3 (count coords))
          "Single column pattern '3' should generate 3 coordinates")
      (is (every? #(= 0 (first %)) coords)
          "All hexes should be in column q=0"))))
