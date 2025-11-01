(ns catan-board.views.hex
  (:require
   [catan-board.utils.hex :as hex-utils]
   [catan-board.utils.resources :as resources]
   [catan-board.utils.numbers :as numbers]
   [catan-board.utils.harbors :as harbors]
   [catan-board.db :as db]))

(defn resource-pattern
  "Creates SVG pattern definitions for resource textures"
  []
  [:defs
   ;; Wood pattern - larger trees
   [:pattern {:id "wood-pattern" :width 20 :height 20 :patternUnits "userSpaceOnUse"}
    [:rect {:width 20 :height 20 :fill "#2d5016"}]
    ;; Tree 1
    [:polygon {:points "4,12 7,3 10,12" :fill "#1a3010"}]
    [:rect {:x 6 :y 12 :width 2 :height 4 :fill "#0d1808"}]
    ;; Tree 2
    [:polygon {:points "14,8 17,0 20,8" :fill "#1a3010"}]
    [:rect {:x 16 :y 8 :width 2 :height 3 :fill "#0d1808"}]]

   ;; Brick pattern - larger brick wall
   [:pattern {:id "brick-pattern" :width 20 :height 12 :patternUnits "userSpaceOnUse"}
    [:rect {:width 20 :height 12 :fill "#b8543c"}]
    ;; Top row of bricks
    [:rect {:x 0 :y 0 :width 10 :height 6 :fill "none" :stroke "#8b3c2c" :stroke-width 1.5}]
    [:rect {:x 10 :y 0 :width 10 :height 6 :fill "none" :stroke "#8b3c2c" :stroke-width 1.5}]
    ;; Bottom row of bricks (offset)
    [:rect {:x -5 :y 6 :width 10 :height 6 :fill "none" :stroke "#8b3c2c" :stroke-width 1.5}]
    [:rect {:x 5 :y 6 :width 10 :height 6 :fill "none" :stroke "#8b3c2c" :stroke-width 1.5}]
    [:rect {:x 15 :y 6 :width 10 :height 6 :fill "none" :stroke "#8b3c2c" :stroke-width 1.5}]]

   ;; Wheat pattern - diagonal lines
   [:pattern {:id "wheat-pattern" :width 8 :height 8 :patternUnits "userSpaceOnUse"}
    [:rect {:width 8 :height 8 :fill "#e8c547"}]
    [:line {:x1 0 :y1 0 :x2 8 :y2 8 :stroke "#d4a730" :stroke-width 1}]
    [:line {:x1 -2 :y1 6 :x2 2 :y2 10 :stroke "#d4a730" :stroke-width 1}]
    [:line {:x1 6 :y1 -2 :x2 10 :y2 2 :stroke "#d4a730" :stroke-width 1}]]

   ;; Sheep pattern - cute little sheep
   [:pattern {:id "sheep-pattern" :width 20 :height 20 :patternUnits "userSpaceOnUse"}
    [:rect {:width 20 :height 20 :fill "#9bcd6f"}]
    ;; Sheep 1 (simplified side view)
    [:ellipse {:cx 5 :cy 7 :rx 2.5 :ry 2 :fill "#ffffff"}]  ; body
    [:circle {:cx 3.5 :cy 6.5 :r 1.2 :fill "#ffffff"}]      ; head
    [:circle {:cx 3 :cy 6.2 :r 0.3 :fill "#333"}]           ; eye
    [:rect {:x 4.5 :y 8.5 :width 0.4 :height 1.2 :fill "#333"}]  ; leg front
    [:rect {:x 6 :y 8.5 :width 0.4 :height 1.2 :fill "#333"}]    ; leg back
    ;; Sheep 2
    [:ellipse {:cx 15 :cy 5 :rx 2.5 :ry 2 :fill "#ffffff"}]
    [:circle {:cx 13.5 :cy 4.5 :r 1.2 :fill "#ffffff"}]
    [:circle {:cx 13 :cy 4.2 :r 0.3 :fill "#333"}]
    [:rect {:x 14.5 :y 6.5 :width 0.4 :height 1.2 :fill "#333"}]
    [:rect {:x 16 :y 6.5 :width 0.4 :height 1.2 :fill "#333"}]
    ;; Sheep 3
    [:ellipse {:cx 10 :cy 15 :rx 2.5 :ry 2 :fill "#ffffff"}]
    [:circle {:cx 8.5 :cy 14.5 :r 1.2 :fill "#ffffff"}]
    [:circle {:cx 8 :cy 14.2 :r 0.3 :fill "#333"}]
    [:rect {:x 9.5 :y 16.5 :width 0.4 :height 1.2 :fill "#333"}]
    [:rect {:x 11 :y 16.5 :width 0.4 :height 1.2 :fill "#333"}]]

   ;; Ore pattern - larger angular rocks
   [:pattern {:id "ore-pattern" :width 20 :height 20 :patternUnits "userSpaceOnUse"}
    [:rect {:width 20 :height 20 :fill "#7c7c7c"}]
    ;; Rock 1
    [:polygon {:points "3,6 7,3 9,7 5,9" :fill "#5c5c5c"}]
    [:polygon {:points "5,4 7,3 8,5" :fill "#9c9c9c"}]
    ;; Rock 2
    [:polygon {:points "13,4 17,2 18,6 14,8" :fill "#5c5c5c"}]
    [:polygon {:points "14,3 17,2 17,5" :fill "#9c9c9c"}]
    ;; Rock 3
    [:polygon {:points "4,14 8,12 10,16 6,17" :fill "#5c5c5c"}]
    [:polygon {:points "6,13 8,12 9,14" :fill "#9c9c9c"}]]

   ;; Desert pattern - plain sandy texture
   [:pattern {:id "desert-pattern" :width 20 :height 20 :patternUnits "userSpaceOnUse"}
    [:rect {:width 20 :height 20 :fill "#d4c4a0"}]
    ;; Sand texture dots
    [:circle {:cx 2 :cy 2 :r 0.5 :fill "#c4b490"}]
    [:circle {:cx 18 :cy 8 :r 0.5 :fill "#c4b490"}]
    [:circle {:cx 7 :cy 18 :r 0.5 :fill "#c4b490"}]
    [:circle {:cx 15 :cy 15 :r 0.5 :fill "#c4b490"}]
    [:circle {:cx 10 :cy 5 :r 0.5 :fill "#c4b490"}]]])

(defn hex-tile
  "Renders a single hexagonal tile as an SVG polygon.
   hex-data: {:coord [q r] :resource keyword :number int}"
  [hex-data]
  (let [{:keys [coord resource number]} hex-data
        hex-size db/hex-size
        vertices (hex-utils/hex-vertices coord hex-size)
        points (hex-utils/vertices-to-svg-points vertices)
        [cx cy] (hex-utils/hex-center coord hex-size)
        ;; Get fill - use pattern if available, otherwise solid color
        fill (if resource
               (str "url(#" (name resource) "-pattern)")
               (resources/get-resource-color resource))]
    [:g {:key (str "hex-" (first coord) "-" (second coord))}
     ;; Hex polygon with pattern
     [:polygon
      {:points points
       :fill fill
       :stroke "#ffffff"
       :stroke-width 6}]

     ;; Desert cactus emoji overlay
     (when (= resource :desert)
       [:text
        {:x cx
         :y cy
         :text-anchor "middle"
         :dominant-baseline "middle"
         :font-size 28
         :style {:filter "drop-shadow(2px 2px 3px rgba(0,0,0,0.3))"}}
        "🌵"])

     ;; Number token
     (when number
       (let [is-red? (numbers/is-red-number? number)
             pips (numbers/get-probability-pips number)]
         [:g
          ;; Circle background
          [:circle
           {:cx cx
            :cy cy
            :r 18
            :fill (if is-red? "#d32f2f" "#f5f5dc")
            :stroke "#333"
            :stroke-width 2}]

          ;; Number text
          [:text
           {:x cx
            :y (- cy 3)
            :text-anchor "middle"
            :dominant-baseline "middle"
            :fill (if is-red? "#ffffff" "#333")
            :font-size 20
            :font-weight "bold"
            :font-family "Arial, sans-serif"}
           (str number)]

          ;; Probability pips
          [:g
           (for [i (range pips)]
             ^{:key i}
             [:circle
              {:cx (+ cx (* (- i (/ (dec pips) 2)) 3))
               :cy (+ cy 10)
               :r 1.5
               :fill (if is-red? "#ffffff" "#333")}])]]))]))

(defn get-edge-points
  "Gets the two vertices of a hex edge based on direction (0-5)"
  [center hex-size direction]
  (let [[cx cy] center
        ;; Hex vertices are at 30° intervals starting from 0° (pointing right)
        angle1 (* (/ Math/PI 3) direction)
        angle2 (* (/ Math/PI 3) (inc direction))
        x1 (+ cx (* hex-size (Math/cos angle1)))
        y1 (+ cy (* hex-size (Math/sin angle1)))
        x2 (+ cx (* hex-size (Math/cos angle2)))
        y2 (+ cy (* hex-size (Math/sin angle2)))]
    [[x1 y1] [x2 y2]]))

(defn harbor-trapezoid
  "Renders a harbor as a trapezoid tile on the edge of the board"
  [harbor-data]
  (let [{:keys [land-hex direction type]} harbor-data
        hex-size db/hex-size
        [cx cy] (hex-utils/axial-to-pixel land-hex hex-size)

        ;; Get the two vertices of the edge
        [[x1 y1] [x2 y2]] (get-edge-points [cx cy] hex-size direction)

        ;; Calculate midpoint of edge
        mid-x (/ (+ x1 x2) 2)
        mid-y (/ (+ y1 y2) 2)

        ;; Calculate outward direction (perpendicular to edge)
        edge-angle (Math/atan2 (- y2 y1) (- x2 x1))
        perpendicular-angle (+ edge-angle (/ Math/PI 2))

        ;; Distance to push trapezoid outward
        offset (* hex-size 0.6)

        ;; Outer edge points (pushed outward)
        x3 (+ x2 (* offset (Math/cos perpendicular-angle)))
        y3 (+ y2 (* offset (Math/sin perpendicular-angle)))
        x4 (+ x1 (* offset (Math/cos perpendicular-angle)))
        y4 (+ y1 (* offset (Math/sin perpendicular-angle)))

        ;; Trapezoid points: inner edge (x1,y1 -> x2,y2) to outer edge (x3,y3 -> x4,y4)
        points (str x1 "," y1 " " x2 "," y2 " " x3 "," y3 " " x4 "," y4)

        ;; Get harbor properties
        ratio (harbors/get-harbor-ratio type)
        color (harbors/get-harbor-color type)

        ;; Text position (center of trapezoid)
        text-x (+ mid-x (* (/ offset 2) (Math/cos perpendicular-angle)))
        text-y (+ mid-y (* (/ offset 2) (Math/sin perpendicular-angle)))

        ;; Resource icon for specific harbors
        resource-icon (when (not= type :generic)
                        (case type
                          :wood "🌲"
                          :brick "🧱"
                          :wheat "🌾"
                          :sheep "🐑"
                          :ore "⛰️"
                          ""))]
    [:g {:key (str "harbor-" (first land-hex) "-" (second land-hex) "-" direction)}
     ;; Trapezoid tile
     [:polygon
      {:points points
       :fill color
       :stroke "#ffffff"
       :stroke-width 4
       :opacity 0.95}]

     ;; Trade ratio text
     [:text
      {:x text-x
       :y (if resource-icon (- text-y 8) text-y)
       :text-anchor "middle"
       :dominant-baseline "middle"
       :fill "#ffffff"
       :font-size 18
       :font-weight "bold"
       :font-family "Arial, sans-serif"}
      (str ratio ":1")]

     ;; Resource icon for specific harbors
     (when resource-icon
       [:text
        {:x text-x
         :y (+ text-y 12)
         :text-anchor "middle"
         :dominant-baseline "middle"
         :font-size 18}
        resource-icon])]))

(defn hex-grid
  "Renders the complete hex grid.
   hexes: vector of hex data maps
   harbors: vector of harbor data maps"
  [hexes harbors]
  (let [hex-size db/hex-size
        ;; Calculate SVG viewBox to center the board
        ;; The grid spans from -2 to 2 in both q and r
        ;; Calculate pixel bounds
        all-coords (map :coord hexes)
        all-pixels (map #(hex-utils/axial-to-pixel % hex-size) all-coords)
        min-x (apply min (map first all-pixels))
        max-x (apply max (map first all-pixels))
        min-y (apply min (map second all-pixels))
        max-y (apply max (map second all-pixels))
        ;; Add padding
        padding (* hex-size 2)
        view-x (- min-x padding)
        view-y (- min-y padding)
        view-width (+ (- max-x min-x) (* padding 2))
        view-height (+ (- max-y min-y) (* padding 2))]
    [:svg
     {:viewBox (str view-x " " view-y " " view-width " " view-height)
      :width "100%"
      :height "100%"
      :style {:max-width "1200px"
              :max-height "800px"}}
     ;; Pattern definitions
     [resource-pattern]
     ;; Hexes
     [:g
      (for [hex-data hexes]
        ^{:key (str "hex-" (-> hex-data :coord first) "-" (-> hex-data :coord second))}
        [hex-tile hex-data])]
     ;; Harbors
     [:g
      (for [harbor-data harbors]
        ^{:key (str "harbor-" (-> harbor-data :land-hex first) "-" (-> harbor-data :land-hex second) "-" (:direction harbor-data))}
        [harbor-trapezoid harbor-data])]]))
