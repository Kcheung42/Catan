(ns catan-board.views.hex
  (:require
   [re-frame.core :as rf]
   [catan-board.utils.hex :as hex-utils]
   [catan-board.utils.resources :as resources]
   [catan-board.utils.numbers :as numbers]
   [catan-board.utils.harbors :as harbors]
   [catan-board.db :as db]
   [clojure.string :as str]
   [catan-board.utils.hex :as hex]))

(defn resource-pattern
  "Creates SVG pattern definitions for resource textures"
  []
  [:defs
   ;; Wood pattern - larger trees
   [:pattern {:id "wood-pattern" :width 20 :height 20 :patternUnits "userSpaceOnUse"}
    [:rect {:width 20 :height 20 :fill "#487748"}]
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
    [:ellipse {:cx 5 :cy 7 :rx 2.5 :ry 2 :fill "#ffffff"}] ; body
    [:circle {:cx 3.5 :cy 6.5 :r 1.2 :fill "#ffffff"}] ; head
    [:circle {:cx 3 :cy 6.2 :r 0.3 :fill "#333"}] ; eye
    [:rect {:x 4.5 :y 8.5 :width 0.4 :height 1.2 :fill "#333"}] ; leg front
    [:rect {:x 6 :y 8.5 :width 0.4 :height 1.2 :fill "#333"}] ; leg back
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
    [:circle {:cx 10 :cy 5 :r 0.5 :fill "#c4b490"}]]

   ;; Water pattern - ocean blue
   [:pattern {:id "water-pattern" :width 20 :height 20 :patternUnits "userSpaceOnUse"}
    [:rect {:width 20 :height 20 :fill "#4A90E2"}]]

   ;; Gold pattern - gold bars stacked (for Seafarers scenarios)
   [:pattern {:id "gold-pattern" :width 20 :height 20 :patternUnits "userSpaceOnUse"}
    [:rect {:width 20 :height 20 :fill "#DAA520"}]
    ;; Gold bar 1 - top left
    [:rect {:x 1 :y 2 :width 8 :height 3 :fill "#FFD700" :stroke "#B8860B" :stroke-width 0.5}]
    [:line {:x1 1 :y1 2 :x2 9 :y2 2 :stroke "#FFF8DC" :stroke-width 0.3}] ; highlight
    [:line {:x1 1 :y1 5 :x2 9 :y2 5 :stroke "#8B7500" :stroke-width 0.3}] ; shadow
    ;; Gold bar 2 - top right
    [:rect {:x 11 :y 1 :width 8 :height 3 :fill "#FFD700" :stroke "#B8860B" :stroke-width 0.5}]
    [:line {:x1 11 :y1 1 :x2 19 :y2 1 :stroke "#FFF8DC" :stroke-width 0.3}]
    [:line {:x1 11 :y1 4 :x2 19 :y2 4 :stroke "#8B7500" :stroke-width 0.3}]
    ;; Gold bar 3 - middle
    [:rect {:x 5 :y 7 :width 8 :height 3 :fill "#FFD700" :stroke "#B8860B" :stroke-width 0.5}]
    [:line {:x1 5 :y1 7 :x2 13 :y2 7 :stroke "#FFF8DC" :stroke-width 0.3}]
    [:line {:x1 5 :y1 10 :x2 13 :y2 10 :stroke "#8B7500" :stroke-width 0.3}]
    ;; Gold bar 4 - bottom left
    [:rect {:x 2 :y 13 :width 8 :height 3 :fill "#FFD700" :stroke "#B8860B" :stroke-width 0.5}]
    [:line {:x1 2 :y1 13 :x2 10 :y2 13 :stroke "#FFF8DC" :stroke-width 0.3}]
    [:line {:x1 2 :y1 16 :x2 10 :y2 16 :stroke "#8B7500" :stroke-width 0.3}]
    ;; Gold bar 5 - bottom right
    [:rect {:x 12 :y 14 :width 8 :height 3 :fill "#FFD700" :stroke "#B8860B" :stroke-width 0.5}]
    [:line {:x1 12 :y1 14 :x2 20 :y2 14 :stroke "#FFF8DC" :stroke-width 0.3}]
    [:line {:x1 12 :y1 17 :x2 20 :y2 17 :stroke "#8B7500" :stroke-width 0.3}]]])

(defn hex-tile
  "Renders a single hexagonal tile as an SVG polygon.
   hex-data: {:coord [q r] :resource keyword :number int}
   swap-number-mode?: boolean indicating if swap number mode is active
   selected-token-coord: [q r] of selected token or nil
   developer-mode?: boolean indicating if developer mode is active
   fog-state: map of [q r] -> {:revealed? boolean :terrain keyword :number int}"
  [hex-data swap-number-mode? selected-token-coord developer-mode? fog-state]
  (let [{:keys [coord resource number]} hex-data
        hex-size                        db/hex-size
        vertices                        (hex-utils/hex-vertices coord hex-size)
        points                          (hex-utils/vertices-to-svg-points vertices)
        [cx cy]                         (hex-utils/hex-center coord hex-size)

        ;; Check if this is a fog hex and get its reveal state
        fog-info     (get fog-state coord)
        is-fog?      (= resource :fog)
        is-revealed? (and is-fog? fog-info (:revealed? fog-info))

        ;; Determine actual resource and number to display
        ;; If fog and revealed, use the revealed terrain/number
        ;; If fog and not revealed, show fog hex
        ;; Otherwise, use the hex's own resource/number
        display-resource (if is-revealed?
                           (:terrain fog-info)
                           resource)
        display-number   (if is-revealed?
                           (:number fog-info)
                           number)

        ;; Get fill - use pattern if available, otherwise solid color
        fill (if (and is-fog? (not is-revealed?))
               "#d4d4d4" ; Light gray for unrevealed fog
               (if display-resource
                 (str "url(#" (name display-resource) "-pattern)")
                 (resources/get-resource-color display-resource)))

        ;; Check if this token is selected
        is-selected? (= coord selected-token-coord)

        ;; Determine if hex should be clickable for fog reveal
        is-fog-clickable? (and is-fog? (not is-revealed?) (not swap-number-mode?))

        landscape-mode? @(rf/subscribe [:landscape-mode?])]

    [:g {:key (str "hex-" (first coord) "-" (second coord))}
     ;; Hex polygon with pattern

     [:polygon
      {:points       points
       :fill         fill
       :stroke       hex-utils/path-color
       :stroke-width 6
       :style        (when is-fog-clickable?
                       {:cursor "pointer"})
       :on-click     (when is-fog-clickable?
                       (fn [e]
                         (.stopPropagation e)
                         (rf/dispatch [:reveal-fog-tile coord])))}]

     ;; Unrevealed fog hex: show "?" symbol
     (when (and is-fog? (not is-revealed?))
       [:text
        {:x                 cx
         :y                 cy
         :text-anchor       "middle"
         :dominant-baseline "middle"
         :font-size         32
         :fill              "#ffffff"
         :font-weight       "bold"
         :font-family       "Arial, sans-serif"
         :pointer-events    "none"}
        "?"])

     ;; Number token (for terrain hexes and revealed fog hexes with numbers)
     (when display-number
       (let [is-red? (numbers/is-red-number? display-number)
             pips    (numbers/get-probability-pips display-number)]
         [:g
          {:on-click (when swap-number-mode?
                       (fn [e]
                         (.stopPropagation e)
                         (rf/dispatch [:select-token coord])))
           :style    (when swap-number-mode?
                       {:cursor "pointer"})}
          ;; Circle background
          [:circle
           {:cx           cx
            :cy           cy
            :r            18
            :fill         (if is-red? "#d32f2f" "#f5f5dc")
            :stroke       "#333"
            :stroke-width 2
            :class        (when is-selected? "token-selected")}]

          ;; Number text
          [:text
           {:x                 cx
            :y                 (- cy 3)
            :text-anchor       "middle"
            :dominant-baseline "middle"
            :fill              (if is-red? "#ffffff" "#333")
            :font-size         20
            :font-weight       "bold"
            :font-family       "Arial, sans-serif"
            :class             (when is-selected? "token-selected")}
           (str display-number)]

          ;; Probability pips
          [:g
           (for [i (range pips)]
             ^{:key i}
             [:circle
              {:cx   (+ cx (* (- i (/ (dec pips) 2)) 3))
               :cy   (+ cy 10)
               :r    1.5
               :fill (if is-red? "#ffffff" "#333")}])]]))

     ;; Desert cactus emoji
     (when (= display-resource :desert)
       [:text
        {:x                 cx
         :y                 cy
         :text-anchor       "middle"
         :dominant-baseline "middle"
         :font-size         28
         :style             {:filter "drop-shadow(2px 2px 3px rgba(0,0,0,0.3))"}}
        "🌵"])

     ;; Developer mode: Show coordinates
     (when developer-mode?
       (let [[q r] coord]
         [:text
          {:x                 cx
           :y                 (- cy (* hex-size 0.7))
           :text-anchor       "middle"
           :dominant-baseline "middle"
           :transform         (when landscape-mode? (str "rotate(" -90 " " cx " " cy ")"))
           :font-size         10
           :font-weight       "bold"
           :fill              "#000000"
           :style             {:filter "drop-shadow(0 0 2px rgba(255,255,255,0.8))"}}
          (str "[" q "," r "]")]))]))

(defn get-edge-points
  "Gets the two vertices of a hex edge based on direction.
   Directions: 0=S, 1=SE, 2=NE, 3=N, 4=NW, 5=SW (counter clockwise from south/bottom)
   For flat-top hexagons, vertices are at 60° intervals starting from 0° (east).
   Vertex positions: V0=0°(E), V1=60°(NE), V2=120°(NW), V3=180°(W), V4=240°(SW), V5=300°(SE)
   Edges are between consecutive vertices:
   - S (dir 0) = edge between V4 and V5 (bottom edge)
   - SE (dir 1) = edge between V5 and V0 (lower-right edge)
   - NE (dir 2) = edge between V0 and V1 (upper-right edge)
   - N (dir 3) = edge between V1 and V2 (top edge)
   - NW (dir 4) = edge between V2 and V3 (upper-left edge)
   - SW (dir 5) = edge between V3 and V4 (lower-left edge)"
  [center hex-size direction]
  (let [[cx cy]       center
        ;; Map direction to vertex indices (going clockwise from north)
        ;; Formula: first vertex = (1 - direction) mod 6, second vertex = (2 - direction) mod 6
        vertex-index1 (mod (- 1 direction) 6)
        vertex-index2 (mod (- 2 direction) 6)
        angle1        (* (/ Math/PI 3) vertex-index1)
        angle2        (* (/ Math/PI 3) vertex-index2)
        x1            (+ cx (* hex-size (Math/cos angle1)))
        y1            (+ cy (* hex-size (Math/sin angle1)))
        x2            (+ cx (* hex-size (Math/cos angle2)))
        y2            (+ cy (* hex-size (Math/sin angle2)))]
    [[x1 y1] [x2 y2]]))

(defn harbor-trapezoid
  "Renders a harbor as a trapezoid tile on the edge of the board"
  [harbor-data]
  (let [{:keys [land-hex direction type]} harbor-data
        hex-size                          db/hex-size
        [cx cy]                           (hex-utils/axial-to-pixel land-hex hex-size)

        ;; Get the two vertices of the edge
        [[x1 y1] [x2 y2]] (get-edge-points [cx cy] hex-size direction)

        ;; Calculate midpoint of edge
        mid-x (/ (+ x1 x2) 2)
        mid-y (/ (+ y1 y2) 2)

        ;; Calculate outward direction (perpendicular to edge)
        edge-angle          (Math/atan2 (- y2 y1) (- x2 x1))
        perpendicular-angle (+ edge-angle (/ Math/PI 2))

        ;; Distance to push hexagon outward
        offset (* -1 (* hex-size 0.7))

        ;; Create irregular hexagon points
        ;; Base edge stays same (x1,y1 to x2,y2)
        ;; Create 6 points total for hexagon

        ;; Point at right side (from x2, angled outward)
        side-offset  (* offset 0.6)
        x-side-right (+ x2 (* side-offset (Math/cos perpendicular-angle)))
        y-side-right (+ y2 (* side-offset (Math/sin perpendicular-angle)))

        ;; Outer peak points (left, center, right along outer edge)
        x-outer-right (+ x2 (* offset (Math/cos perpendicular-angle)))
        y-outer-right (+ y2 (* offset (Math/sin perpendicular-angle)))

        ;; Center peak (pushed out slightly further)
        peak-offset (* offset 1.15)
        mid-outer-x (+ mid-x (* peak-offset (Math/cos perpendicular-angle)))
        mid-outer-y (+ mid-y (* peak-offset (Math/sin perpendicular-angle)))

        x-outer-left (+ x1 (* offset (Math/cos perpendicular-angle)))
        y-outer-left (+ y1 (* offset (Math/sin perpendicular-angle)))

        ;; Point at left side (from x1, angled outward)
        x-side-left (+ x1 (* side-offset (Math/cos perpendicular-angle)))
        y-side-left (+ y1 (* side-offset (Math/sin perpendicular-angle)))

        ;; Hexagon points: base -> right side -> right outer -> center peak -> left outer -> left side -> back to base
        points (str x1 "," y1 " "
                    x2 "," y2 " "
                    x-side-right "," y-side-right " "
                    x-outer-right "," y-outer-right " "
                    mid-outer-x "," mid-outer-y " "
                    x-outer-left "," y-outer-left " "
                    x-side-left "," y-side-left)

        ;; Get harbor properties
        ratio (harbors/get-harbor-ratio type)
        color (harbors/get-harbor-color type)

        ;; Text position (center of trapezoid)
        text-x (+ mid-x (* (/ offset 2) (Math/cos perpendicular-angle)))
        text-y (+ mid-y (* (/ offset 2) (Math/sin perpendicular-angle)))

        ;; Calculate rotation angle for text (along the edge, always readable)
        rotation-deg      (* (/ 180 Math/PI) edge-angle)
        readable-rotation (+ rotation-deg 180)

        ;; Resource icon for specific harbors
        resource-icon (case type
                        :wood    "🪵"
                        :brick   "🧱"
                        :wheat   "🌾"
                        :sheep   "🐑"
                        :ore     "🪨"
                        :generic "?"
                        "")]

    [:g {:key (str "harbor-" (first land-hex) "-" (second land-hex) "-" direction)}
     ;; Hexagonal harbor tile with rounded corners
     [:polygon
      {:points          points
       :fill            color
       :stroke          hex-utils/path-color
       :stroke-width    6
       :stroke-linejoin "round"
       :opacity         0.95}]

     ;; Trade ratio text
     (when (= type :generic)
       [:text
        {:x                 text-x
         :y                 (if resource-icon (- text-y 8) text-y)
         :text-anchor       "middle"
         :dominant-baseline "middle"
         :fill              "#000000"
         :font-size         10
         :font-weight       "bold"
         :font-family       "Arial, sans-serif"
         :transform         (str "rotate(" readable-rotation " " text-x " " text-y ")")}
        (str ratio ":1")])

     ;; Resource icon for specific harbors
     [:text
      {:x                 text-x
       :y                 (if (= type :generic)
                            (+ text-y 10)
                            (+ text-y 3))
       :text-anchor       "middle"
       :dominant-baseline "middle"
       :font-size         21
       :transform         (str "rotate(" readable-rotation " " text-x " " text-y ")")}
      resource-icon]]))

(defn- compute-original-center
  "Returns the center [x y] among all pixels"
  [current-scenario-config all-pixels padding]
  (let [grid-pattern     (:grid-pattern current-scenario-config)
        col-sizes        (mapv js/parseInt (clojure.string/split grid-pattern #"-"))
        num-cols         (count col-sizes)
        middle-col-index (quot num-cols 2)
        middle-col-value (nth col-sizes middle-col-index)
        min-x            (apply min (map first all-pixels))
        max-x            (apply max (map first all-pixels))
        min-y            (apply min (map second all-pixels))
        max-y            (apply max (map second all-pixels))
        view-x           (- min-x padding)
        view-y           (- min-y padding)
        view-width       (+ (- max-x min-x) (* padding 2))
        view-height      (+ (- max-y min-y) (* padding 2))]
    [(if (even? middle-col-value)
       (- (+ view-x (/ view-width 2)) (/ padding 2))
       (+ view-x (/ view-width 2))) ;center-x
     (+ view-y (/ view-height 2))])) ;center-y

(defn hex-grid
  "Renders the complete hex grid.
   hexes: vector of hex data maps
   harbors: vector of harbor data maps
   swap-number-mode?: boolean indicating if swap number mode is active
   selected-token-coord: [q r] of selected token or nil
   developer-mode?: boolean indicating if developer mode is active
   fog-state: map of [q r] -> {:revealed? boolean :terrain keyword :number int}"
  [hexes harbors swap-number-mode? selected-token-coord developer-mode? fog-state current-scenario]
  (let [hex-size    db/hex-size
        ;; Calculate SVG viewBox to center the board
        ;; The grid spans from -2 to 2 in both q and r
        ;; Calculate pixel bounds
        all-coords  (map :coord hexes)
        all-pixels  (map #(hex-utils/axial-to-pixel % hex-size) all-coords)
        landscape-mode? @(rf/subscribe [:landscape-mode?])
        padding     (* hex-size 2)
        [center-x
         center-y]  (compute-original-center current-scenario all-pixels padding)
        min-x       (apply min (map (if landscape-mode? second first) all-pixels))
        max-x       (apply max (map (if landscape-mode? second first) all-pixels))
        min-y       (apply min (map (if landscape-mode? first second) all-pixels))
        max-y       (apply max (map (if landscape-mode? first second) all-pixels))
        ;; Add padding
        view-x      (- min-x padding)
        view-y      (- min-y padding)
        view-width  (+ (- max-x min-x) (* padding 2))
        view-height (+ (- max-y min-y) (* padding 2))

        ]
    [:svg
     {:viewBox  (str view-x " " view-y " " view-width " " view-height)
      :width    "100%"
      :height   "100%"
      :style    {:max-width  "1200px"
                 :max-height "800px"}
      :on-click (when swap-number-mode?
                  (fn [e]
                    (rf/dispatch [:clear-token-selection])))}
     ;; Pattern definitions
     [resource-pattern]

     ;; Hexes
     [:g (when landscape-mode? {:transform (str "rotate (90 " center-x " " center-y " )")})
      [:g
       (for [hex-data hexes]
         ^{:key (str "hex-" (-> hex-data :coord first) "-" (-> hex-data :coord second))}
         [hex-tile hex-data swap-number-mode? selected-token-coord developer-mode? fog-state ])]

      ;; Harbors
      [:g
       (for [harbor-data harbors]
         ^{:key (str "harbor-" (-> harbor-data :land-hex first) "-" (-> harbor-data :land-hex second) "-" (:direction harbor-data))}
         [harbor-trapezoid harbor-data])]

      ;; White Dot at Vertices
      [:g
       (for [{:keys [coord]} hexes]
         ^{:key (str "hex-dots-" (-> hex-data :coord first) "-" (-> hex-data :coord second))}
         (let [hex-size db/hex-size
               vertices (hex-utils/hex-vertices coord hex-size)]
           (for [[x y] vertices]
             [:circle {:cx   x
                       :cy   y
                       :r    10
                       :fill hex-utils/path-color}])))]]]))
