(ns catan-board.views.hex-test
  (:require
   [cljs.test :refer-macros [deftest testing is]]
   [catan-board.views.hex :as hex-view]
   [catan-board.db :as db]))

;; -- Tests for Water & Fog Hex Rendering (Task 4.1) ------------------------

(deftest water-pattern-svg-definition-exists
  (testing "Water pattern SVG definition is defined in resource-pattern"
    (let [svg-defs (hex-view/resource-pattern)]
      (is (vector? svg-defs)
          "resource-pattern should return a vector")
      (is (= :defs (first svg-defs))
          "resource-pattern should return SVG defs element")
      ;; Check that water-pattern exists in the defs
      (let [patterns (rest svg-defs)
            water-pattern (first (filter #(and (vector? %)
                                              (= :pattern (first %))
                                              (= "water-pattern" (get-in % [1 :id])))
                                        patterns))]
        (is (some? water-pattern)
            "water-pattern should be defined in SVG defs")
        (is (= "water-pattern" (get-in water-pattern [1 :id]))
            "water-pattern should have id 'water-pattern'")))))

(deftest gold-pattern-svg-definition-exists
  (testing "Gold pattern SVG definition is defined in resource-pattern"
    (let [svg-defs (hex-view/resource-pattern)]
      (is (vector? svg-defs)
          "resource-pattern should return a vector")
      ;; Check that gold-pattern exists in the defs
      (let [patterns (rest svg-defs)
            gold-pattern (first (filter #(and (vector? %)
                                             (= :pattern (first %))
                                             (= "gold-pattern" (get-in % [1 :id])))
                                       patterns))]
        (is (some? gold-pattern)
            "gold-pattern should be defined in SVG defs")
        (is (= "gold-pattern" (get-in gold-pattern [1 :id]))
            "gold-pattern should have id 'gold-pattern'")))))

(deftest water-hex-renders-with-blue-fill
  (testing "Water hex renders with water-pattern fill"
    (let [hex-data {:coord [0 0] :resource :water :number nil}
          fog-state {}
          result (hex-view/hex-tile hex-data false nil false fog-state)]
      (is (vector? result)
          "hex-tile should return a vector/hiccup element")
      (is (= :g (first result))
          "hex-tile should return a group element")
      ;; Find the polygon element
      (let [polygon (first (filter #(and (vector? %) (= :polygon (first %))) (rest result)))]
        (is (some? polygon)
            "hex-tile should contain a polygon element")
        (is (= "url(#water-pattern)" (get-in polygon [1 :fill]))
            "Water hex should use water-pattern fill")))))

(deftest fog-hex-shows-question-mark-when-not-revealed
  (testing "Fog hex shows '?' symbol when not revealed"
    (let [hex-data {:coord [1 1] :resource :fog :number nil}
          fog-state {[1 1] {:revealed? false :terrain nil :number nil}}
          result (hex-view/hex-tile hex-data false nil false fog-state)]
      (is (vector? result)
          "hex-tile should return a vector")
      ;; Find the text element with "?"
      (let [elements (rest result)
            text-element (first (filter #(and (vector? %)
                                             (= :text (first %))
                                             (= "?" (last %)))
                                       elements))]
        (is (some? text-element)
            "Unrevealed fog hex should contain text element with '?'")
        (is (= "?" (last text-element))
            "Text element should display '?' character")))))

(defn find-circles-recursively
  "Recursively find all :circle elements in a hiccup structure"
  [element]
  (cond
    (not (vector? element)) []
    (= :circle (first element)) [element]
    :else (mapcat find-circles-recursively (rest element))))

(deftest revealed-fog-hex-shows-terrain-and-number
  (testing "Revealed fog hex shows terrain type and number token"
    (let [hex-data {:coord [2 2] :resource :fog :number nil}
          fog-state {[2 2] {:revealed? true :terrain :wood :number 6}}
          result (hex-view/hex-tile hex-data false nil false fog-state)]
      (is (vector? result)
          "hex-tile should return a vector")
      ;; Find the polygon element - should use wood-pattern
      (let [polygon (first (filter #(and (vector? %) (= :polygon (first %))) (rest result)))]
        (is (some? polygon)
            "hex-tile should contain a polygon element")
        (is (= "url(#wood-pattern)" (get-in polygon [1 :fill]))
            "Revealed fog hex should use terrain pattern (wood-pattern)"))
      ;; Should have a number token group (circle + text)
      ;; Need to search recursively through the structure
      (let [circle-elements (find-circles-recursively result)]
        (is (pos? (count circle-elements))
            "Revealed fog hex with number should contain circle for token")))))

(deftest gold-terrain-renders-correctly-when-revealed
  (testing "Gold terrain renders with gold-pattern when revealed from fog"
    (let [hex-data {:coord [3 3] :resource :fog :number nil}
          fog-state {[3 3] {:revealed? true :terrain :gold :number 8}}
          result (hex-view/hex-tile hex-data false nil false fog-state)]
      (is (vector? result)
          "hex-tile should return a vector")
      ;; Find the polygon element - should use gold-pattern
      (let [polygon (first (filter #(and (vector? %) (= :polygon (first %))) (rest result)))]
        (is (some? polygon)
            "hex-tile should contain a polygon element")
        (is (= "url(#gold-pattern)" (get-in polygon [1 :fill]))
            "Revealed gold terrain should use gold-pattern fill")))))

(deftest fog-hex-not-revealed-shows-gray-fill
  (testing "Unrevealed fog hex shows light gray fill"
    (let [hex-data {:coord [4 4] :resource :fog :number nil}
          fog-state {[4 4] {:revealed? false :terrain nil :number nil}}
          result (hex-view/hex-tile hex-data false nil false fog-state)]
      (is (vector? result)
          "hex-tile should return a vector")
      ;; Find the polygon element
      (let [polygon (first (filter #(and (vector? %) (= :polygon (first %))) (rest result)))]
        (is (some? polygon)
            "hex-tile should contain a polygon element")
        (is (= "#f5f5f5" (get-in polygon [1 :fill]))
            "Unrevealed fog hex should have light gray fill (#f5f5f5)")))))

(deftest water-hex-has-no-number-token
  (testing "Water hex does not render a number token"
    (let [hex-data {:coord [5 5] :resource :water :number nil}
          fog-state {}
          result (hex-view/hex-tile hex-data false nil false fog-state)]
      (is (vector? result)
          "hex-tile should return a vector")
      ;; Should NOT have any circle elements (number tokens have circles)
      (let [circle-elements (find-circles-recursively result)]
        (is (zero? (count circle-elements))
            "Water hex should not render number token (no circles)")))))
