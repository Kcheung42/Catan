(ns catan-board.utils.resources)

;; -- Resource Types ----------------------------------------------------------

(def resource-types
  "All resource types in the base Catan game"
  #{:wood :brick :wheat :sheep :ore :desert})

;; -- Resource Colors ---------------------------------------------------------

(def resource-colors
  "Color mapping for each resource type (optimized for projector display)"
  {:wood   "#2d5016"   ; Dark green (forest)
   :brick  "#b8543c"   ; Burnt orange (clay/hills)
   :wheat  "#e8c547"   ; Golden yellow (fields)
   :sheep  "#9bcd6f"   ; Light green (pasture)
   :ore    "#7c7c7c"   ; Gray (mountains)
   :desert "#d4c4a0"}) ; Tan/beige (desert)

;; -- Resource Distribution ---------------------------------------------------

(def standard-distribution
  "Standard Catan resource distribution (19 total hexes)"
  {:wood   4
   :brick  3
   :wheat  4
   :sheep  4
   :ore    3
   :desert 1})

(defn create-resource-deck
  "Creates a shuffled deck of resources based on standard distribution"
  []
  (let [deck (flatten
              (for [[resource count] standard-distribution]
                (repeat count resource)))]
    (shuffle deck)))

(defn get-resource-color
  "Returns the color for a given resource type"
  [resource]
  (get resource-colors resource "#d4c4a0"))
