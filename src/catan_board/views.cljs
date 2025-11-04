(ns catan-board.views
  (:require
   [re-frame.core :as rf]
   [catan-board.views.hex :as hex-view]
   [catan-board.scenarios.registry :as registry]))

(defn scenario-selector
  "Dropdown component for selecting between available Catan scenarios.
   Subscribes to :available-scenarios and :current-scenario.
   Dispatches :set-scenario when selection changes."
  []
  (let [available-scenarios @(rf/subscribe [:available-scenarios])
        current-scenario    @(rf/subscribe [:current-scenario])]
    [:div.control-section
     [:h3 "Scenario"]
     [:select.scenario-dropdown
      {:value     (name current-scenario)
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

(defn main-panel []
  (let [loading?             @(rf/subscribe [:loading?])
        board-scale          @(rf/subscribe [:board-scale])
        tournament-mode?     @(rf/subscribe [:tournament-mode?])
        swap-number-mode?    @(rf/subscribe [:swap-number-mode?])
        developer-mode?      @(rf/subscribe [:developer-mode?])
        landscape-mode?      @(rf/subscribe [:landscape-mode?])
        random-harbor-mode?  @(rf/subscribe [:random-harbor-mode?])
        sidebar-open?        @(rf/subscribe [:show-info-panel?])
        hexes                @(rf/subscribe [:hexes])
        harbors              @(rf/subscribe [:harbors])
        selected-token-coord @(rf/subscribe [:selected-token-coord])
        fog-state            @(rf/subscribe [:fog-state-hexes])
        current-scenario     @(rf/subscribe [:current-scenario])]
    [:div.app-container
     ;; Sidebar
     [:div.sidebar {:class (when sidebar-open? "open")}
      [:div.sidebar-header
       [:h2 "Controls"]
       [:button.sidebar-close
        {:on-click #(rf/dispatch [:toggle-info-panel])}
        "×"]]

      [:div.sidebar-content
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
          [:input {:type      "checkbox"
                   :checked   tournament-mode?
                   :on-change #(rf/dispatch [:toggle-tournament-mode])}]
          [:span.toggle-text "Tournament Mode"]]
         [:p.help-text "Prevents adjacent red numbers (6 & 8)"]]

        [:div.toggle-container
         [:label.toggle-label
          [:input {:type      "checkbox"
                   :checked   random-harbor-mode?
                   :on-change #(rf/dispatch [:toggle-random-harbor-mode])}]
          [:span.toggle-text "Random Harbor Mode"]]
         [:p.help-text "Randomize harbor types"]]]

       ;; Board Edits
       [:div.control-section
        [:h3 "Board Edit"]
        [:button.btn-primary
         {:on-click #(rf/dispatch [:undo-one-step])}
         "Undo"]

        [:button.btn-primary
         {:on-click #(rf/dispatch [:shuffle-hidden-fog-tiles])}
         "Shuffle Hidden Fog Tiles"]

        [:div.toggle-container
         [:label.toggle-label
          [:input {:type      "checkbox"
                   :checked   landscape-mode?
                   :on-change #(rf/dispatch [:toggle-landscape-mode])}]
          [:span.toggle-text "Landscape Mode"]]
         [:p.help-text "Flip orientation to landscape"]]

        [:div.toggle-container
         [:label.toggle-label
          [:input {:type      "checkbox"
                   :checked   swap-number-mode?
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
         [:input {:type      "checkbox"
                  :checked   developer-mode?
                  :on-change #(rf/dispatch [:toggle-developer-mode])}]
         [:span.toggle-text "Developer Mode"]]
        [:p.help-text "Show hex coordinates for debugging"]]]]

     ;; Toggle button (when sidebar is closed)
     [:button.sidebar-toggle
      {:on-click #(rf/dispatch [:toggle-info-panel])
       :class    (when sidebar-open? "hidden")}
      "☰"]

     ;; Board container
     [:div.board-container
      [:div {:style {:transform        (str "scale(" (/ board-scale 100) ")")
                     :transform-origin "center center"}}
       (if (seq hexes)
         [hex-view/hex-grid
          {:scenario             current-scenario
           :hexes                hexes
           :harbors              harbors
           :swap-number-mode?    swap-number-mode?
           :selected-token-coord selected-token-coord
           :developer-mode?      developer-mode?
           :fog-state            fog-state}]
         [:p "Loading board... (" (count hexes) " hexes)"])]]]))
