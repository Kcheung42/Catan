(ns catan-board.views
  (:require
   [re-frame.core :as rf]
   [catan-board.views.hex :as hex-view]
   [catan-board.scenarios.registry :as registry]
   [catan-board.custom-editor.events]
   [catan-board.custom-editor.subs]))

(defn scenario-selector
  "Dropdown component for selecting between available Catan scenarios.
   Subscribes to :available-scenarios and :current-scenario.
   Dispatches :set-scenario when selection changes."
  []
  (let [available-scenarios @(rf/subscribe [:available-scenarios])
        current-scenario @(rf/subscribe [:current-scenario])]
    [:div.control-section
     [:h3 "Scenario"]
     [:select.scenario-dropdown
      {:value (name current-scenario)
       :on-change (fn [e]
                    (let [scenario-id (keyword (.. e -target -value))]
                      (rf/dispatch [:set-scenario scenario-id])))}
      (for [scenario available-scenarios]
        ^{:key (:id scenario)}
        [:option {:value (name (:id scenario))}
         (:name scenario)])]
     [:p.help-text (str "Currently playing: "
                        (:name (first (filter #(= (:id %) current-scenario)
                                              available-scenarios))))]]))

(defn scenario-metadata-editor
  "Form section for editing scenario metadata (name, player count, grid pattern)"
  [draft]
  [:div.control-section
   [:h3 "Scenario Metadata"]

   ;; Scenario Name
   [:div.form-group
    [:label "Scenario Name"]
    [:input.form-input
     {:type "text"
      :value (:name draft "")
      :placeholder "e.g., Custom Fog Islands"
      :on-change #(rf/dispatch [:update-scenario-name (.. % -target -value)])}]
    [:p.help-text "Give your scenario a unique name"]]

   ;; Player Count
   [:div.form-group
    [:label "Player Count"]
    [:select.form-select
     {:value (str (:player-count draft 4))
      :on-change #(rf/dispatch [:update-scenario-player-count (.. % -target -value)])}
     [:option {:value "2"} "2 Players"]
     [:option {:value "3"} "3 Players"]
     [:option {:value "4"} "4 Players"]
     [:option {:value "5"} "5 Players"]
     [:option {:value "6"} "6 Players"]]
    [:p.help-text "Number of players (2-6)"]]

   ;; Grid Pattern
   [:div.form-group
    [:label "Grid Pattern"]
    [:input.form-input
     {:type "text"
      :value (:grid-pattern draft "")
      :placeholder "e.g., 3-4-5-4-3"
      :on-change #(rf/dispatch [:update-grid-pattern (.. % -target -value)])}]
    [:p.help-text "Hex rows pattern (e.g., 3-4-5-4-3 for standard board)"]]])

(defn resource-distribution-editor
  "Form section for editing resource distribution (face-up or fog)"
  [draft distribution-type]
  (let [title (if (= distribution-type :face-up)
                "Face-Up Resources"
                "Face-Down (Fog) Resources")
        distribution-key (if (= distribution-type :face-up)
                           :face-up-distribution
                           :fog-distribution)
        event-key (if (= distribution-type :face-up)
                    :update-face-up-resource
                    :update-face-down-resource)
        resources (get-in draft [distribution-key :resources] {})
        resource-types [:water :desert :gold :wheat :brick :ore :sheep :wood]]
    [:div.control-section
     [:h3 title]
     [:div.resource-grid
      (for [resource-type resource-types]
        ^{:key resource-type}
        [:div.form-group.resource-input
         [:label (name resource-type)]
         [:input.form-input
          {:type "number"
           :min "0"
           :value (str (get resources resource-type 0))
           :on-change #(rf/dispatch [event-key resource-type (.. % -target -value)])}]])]
     [:p.help-text
      (if (= distribution-type :face-up)
        "Number of each resource type visible at game start"
        "Number of each resource type in fog tiles")]]))

(defn number-token-distribution-editor
  "Form section for editing number token distribution (face-up or fog)"
  [draft distribution-type]
  (let [title (if (= distribution-type :face-up)
                "Face-Up Number Tokens"
                "Face-Down (Fog) Number Tokens")
        distribution-key (if (= distribution-type :face-up)
                           :face-up-distribution
                           :fog-distribution)
        event-key (if (= distribution-type :face-up)
                    :update-face-up-number
                    :update-face-down-number)
        tokens (get-in draft [distribution-key :number-tokens] {})
        token-numbers [2 3 4 5 6 8 9 10 11 12]]
    [:div.control-section
     [:h3 title]
     [:div.number-grid
      (for [number token-numbers]
        ^{:key number}
        [:div.form-group.number-input
         [:label (str number)]
         [:input.form-input
          {:type "number"
           :min "0"
           :value (str (get tokens number 0))
           :on-change #(rf/dispatch [event-key number (.. % -target -value)])}]])]
     [:p.help-text
      (if (= distribution-type :face-up)
        "Number token distribution for visible hexes (note: 7 is omitted in Catan)"
        "Number token distribution for fog tiles")]]))

(defn hex-type-selection-editor
  "Form section for selecting hex type for board editing"
  []
  (let [selection-mode @(rf/subscribe [:editor-hex-selection-mode])]
    [:div.control-section
     [:h3 "Hex Type Selection"]
     [:div.hex-type-buttons
      [:button.btn-hex-type
       {:class (when (= selection-mode :terrain) "active")
        :on-click #(rf/dispatch [:set-editor-hex-selection-mode :terrain])}
       "Terrain"]
      [:button.btn-hex-type
       {:class (when (= selection-mode :water) "active")
        :on-click #(rf/dispatch [:set-editor-hex-selection-mode :water])}
       "Water"]
      [:button.btn-hex-type
       {:class (when (= selection-mode :fog) "active")
        :on-click #(rf/dispatch [:set-editor-hex-selection-mode :fog])}
       "Fog"]]
     [:p.help-text "Click a hex type, then click on the board to assign it"]
     [:button.btn-secondary
      {:on-click #(rf/dispatch [:clear-all-hex-assignments])}
      "Clear All Hex Assignments"]]))

(defn scenario-management-editor
  "Form section for loading and managing custom scenarios"
  []
  (let [custom-scenarios @(rf/subscribe [:custom-scenarios-list])]
    [:div.control-section
     [:h3 "Manage Scenarios"]
     (if (seq custom-scenarios)
       [:div.scenario-loader
        [:div.form-group
         [:label "Load Existing Scenario"]
         [:select.form-select
          {:on-change (fn [e]
                        (let [scenario-id (keyword (.. e -target -value))]
                          (when (not= scenario-id :select)
                            (rf/dispatch [:load-custom-scenario-for-editing scenario-id]))))}
          [:option {:value "select"} "-- Select a scenario --"]
          (for [[scenario-id scenario-config] custom-scenarios]
            ^{:key scenario-id}
            [:option {:value (name scenario-id)}
             (:name scenario-config)])]
         [:p.help-text "Load a saved scenario for editing"]]]
       [:p.help-text "No custom scenarios saved yet. Create and save one to see it here."])]))

(defn editor-action-buttons
  "Action buttons for scenario editor (save, reset, export)"
  [validation-errors]
  [:div.control-section
   [:h3 "Actions"]
   [:div.action-buttons
    [:button.btn-primary
     {:on-click #(rf/dispatch [:save-custom-scenario])
      :disabled (seq validation-errors)}
     "Save Scenario"]
    [:button.btn-secondary
     {:on-click #(rf/dispatch [:reset-custom-scenario-draft])}
     "Reset to Defaults"]
    [:button.btn-secondary
     {:on-click #(rf/dispatch [:export-custom-scenario])}
     "Export to Clipboard"]]
   (when (seq validation-errors)
     [:p.help-text.error "Fix validation errors before saving"])])

(defn main-panel []
  (let [loading? @(rf/subscribe [:loading?])
        board-scale @(rf/subscribe [:board-scale])
        tournament-mode? @(rf/subscribe [:tournament-mode?])
        swap-number-mode? @(rf/subscribe [:swap-number-mode?])
        developer-mode? @(rf/subscribe [:developer-mode?])
        landscape-mode? @(rf/subscribe [:landscape-mode?])
        random-harbor-mode? @(rf/subscribe [:random-harbor-mode?])
        sidebar-open? @(rf/subscribe [:show-info-panel?])
        editor-mode? @(rf/subscribe [:custom-scenario-editor-mode?])
        draft @(rf/subscribe [:custom-scenario-draft])
        validation-errors @(rf/subscribe [:custom-scenario-validation-errors])
        hexes @(rf/subscribe [:hexes])
        harbors @(rf/subscribe [:harbors])
        selected-token-coord @(rf/subscribe [:selected-token-coord])
        fog-state @(rf/subscribe [:fog-state-hexes])
        current-scenario @(rf/subscribe [:current-scenario])]
    [:div.app-container
     ;; Sidebar
     [:div.sidebar {:class (when sidebar-open? "open")}
      [:div.sidebar-header
       [:h2 "Controls"]
       [:button.sidebar-close
        {:on-click #(rf/dispatch [:toggle-info-panel])}
        "×"]]

      [:div.sidebar-content
       ;; Custom Scenario Editor Toggle
       [:div.control-section
        [:div.toggle-container
         [:label.toggle-label
          [:input {:type "checkbox"
                   :checked editor-mode?
                   :on-change #(rf/dispatch [:toggle-custom-scenario-editor])}]
          [:span.toggle-text "Custom Scenario Editor"]]
         [:p.help-text "Create and edit custom scenarios"]]]

       ;; Conditional rendering: either show editor form or normal controls
       (if editor-mode?
         ;; Custom Scenario Editor Form
         [:div.editor-form
          (when draft
            [:div
             [scenario-metadata-editor draft]
             [resource-distribution-editor draft :face-up]
             [number-token-distribution-editor draft :face-up]
             [resource-distribution-editor draft :fog]
             [number-token-distribution-editor draft :fog]
             [hex-type-selection-editor]
             [scenario-management-editor]
             [editor-action-buttons validation-errors]])

          ;; Validation errors display
          (when (seq validation-errors)
            [:div.control-section
             [:div.validation-errors
              [:h4 "Validation Errors:"]
              [:ul
               (for [[field error] validation-errors]
                 ^{:key field}
                 [:li error])]]])]

         ;; Normal Controls (when not in editor mode)
         [:div
          ;; Scenario Selection
          [scenario-selector]

          ;; Board Generation
          [:div.control-section
           [:h3 "Board Generation"]
           [:button.btn-primary
            {:on-click #(rf/dispatch [:generate-board])}
            (if loading? "Generating..." "Generate New Board")]
           [:div.toggle-container
            [:label.toggle-label
             [:input {:type "checkbox"
                      :checked tournament-mode?
                      :on-change #(rf/dispatch [:toggle-tournament-mode])}]
             [:span.toggle-text "Tournament Mode"]]
            [:p.help-text "Prevents adjacent red numbers (6 & 8)"]]

           [:div.toggle-container
            [:label.toggle-label
             [:input {:type "checkbox"
                      :checked random-harbor-mode?
                      :on-change #(rf/dispatch [:toggle-random-harbor-mode])}]
             [:span.toggle-text "Random Harbor Mode"]]
            [:p.help-text "Randomize harbor types"]]]

          ;; Board Edits
          [:div.control-section
           [:h3 "Board Edit"]
           [:button.btn-primary
            {:on-click #(rf/dispatch [:undo])}
            "Undo"]

           [:button.btn-primary
            {:on-click #(rf/dispatch [:shuffle-hidden-fog-tiles])}
            "Shuffle Hidden Fog Tiles"]

           [:div.toggle-container
            [:label.toggle-label
             [:input {:type "checkbox"
                      :checked landscape-mode?
                      :on-change #(rf/dispatch [:toggle-landscape-mode])}]
             [:span.toggle-text "Landscape Mode"]]
            [:p.help-text "Flip orientation to landscape"]]

           [:div.toggle-container
            [:label.toggle-label
             [:input {:type "checkbox"
                      :checked swap-number-mode?
                      :on-change #(rf/dispatch [:toggle-swap-number-mode])}]
             [:span.toggle-text "Swap Number Mode"]]
            [:p.help-text "Click tokens to swap their numbers"]]]

          ;; Board Scale
          [:div.control-section
           [:h3 "Board Scale"]
           [:div.scale-controls
            [:button.btn-scale
             {:on-click #(rf/dispatch [:decrease-scale])}
             "-"]
            [:span.scale-display (str board-scale "%")]
            [:button.btn-scale
             {:on-click #(rf/dispatch [:increase-scale])}
             "+"]]]

          [:div.toggle-container
           [:label.toggle-label
            [:input {:type "checkbox"
                     :checked developer-mode?
                     :on-change #(rf/dispatch [:toggle-developer-mode])}]
            [:span.toggle-text "Developer Mode"]]
           [:p.help-text "Show hex coordinates for debugging"]]])]]

     ;; Toggle button (when sidebar is closed)
     [:button.sidebar-toggle
      {:on-click #(rf/dispatch [:toggle-info-panel])
       :class (when sidebar-open? "hidden")}
      "☰"]

     ;; Board container
     [:div.board-container
      [:div {:style {:transform (str "scale(" (/ board-scale 100) ")")
                     :transform-origin "center center"}}
       (if (seq hexes)
         [hex-view/hex-grid
          {:scenario current-scenario
           :hexes hexes
           :harbors harbors
           :swap-number-mode? swap-number-mode?
           :selected-token-coord selected-token-coord
           :developer-mode? developer-mode?
           :fog-state fog-state}]
         [:p "Loading board... (" (count hexes) " hexes)"])]]]))
