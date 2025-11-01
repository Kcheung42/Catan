(ns catan-board.views
  (:require
   [re-frame.core :as rf]
   [catan-board.views.hex :as hex-view]))

(defn main-panel []
  (let [loading? @(rf/subscribe [:loading?])
        board-scale @(rf/subscribe [:board-scale])
        tournament-mode? @(rf/subscribe [:tournament-mode?])
        sidebar-open? @(rf/subscribe [:show-info-panel?])
        hexes @(rf/subscribe [:hexes])
        harbors @(rf/subscribe [:harbors])]
    [:div.app-container
     ;; Sidebar
     [:div.sidebar {:class (when sidebar-open? "open")}
      [:div.sidebar-header
       [:h2 "Controls"]
       [:button.sidebar-close
        {:on-click #(rf/dispatch [:toggle-info-panel])}
        "×"]]

      [:div.sidebar-content
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
         [:p.help-text "Prevents adjacent red numbers (6 & 8)"]]]

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
          "+"]]
        [:div.scale-shortcuts
         [:p.help-text "Keyboard: + / - keys"]]]]]

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
         [hex-view/hex-grid hexes harbors]
         [:p "Loading board... (" (count hexes) " hexes)"])]]]))
