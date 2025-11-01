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
        (is (> y 100))              ; y should be pos


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
      ;; Should have exactly 20 hexes (excluding water)
      (is (= 20 (count grid)))

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
