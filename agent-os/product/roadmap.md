# Product Roadmap

## Phase 1: Core Board Display (MVP) ✅

1. [x] **Hex Grid Layout System** - Implement hexagonal grid rendering system that displays 20 hex tiles in the classic Catan board pattern (3-4-5-4-3 row configuration) with proper positioning and spacing. `M`

2. [x] **Resource Tile Rendering** - Create visual representations for all five resource types (wood/forest, brick/hills, wheat/fields, sheep/pasture, ore/mountains) plus desert, with clear colors and optional icons for each resource type. `S`

3. [x] **Number Token Display** - Render number tokens (2-12) on resource hexes with proper styling, including probability dots and visual hierarchy (highlighting 6 and 8 as high-probability numbers). `S`

4. [x] **Random Board Generation** - Implement algorithm to randomly distribute resources (4 wood, 4 wheat, 4 sheep, 3 brick, 3 ore, 1 desert) and number tokens (following official distribution) with validation to avoid adjacent 6-8 combinations. `M`

5. [x] **Harbor/Port Display** - Render the 9 harbor positions around the board edges with visual indicators for harbor type (4 general 3:1 harbors, 5 specialized 2:1 resource harbors positioned correctly). `M`

6. [x] **Basic UI Controls** - Create simple control panel with "Generate New Board" button and display of current board configuration (resource and number distribution). `S`

## Phase 2: Setup Customization

7. [x] **Manual Resource Placement Mode** - Add interactive mode where users can click each hex to cycle through resource types, allowing full custom board design with visual feedback and resource count validation. `M`

8. [x] **Manual Number Placement Mode** - Implement interface for manually assigning number tokens to resource hexes with drag-and-drop or click-to-assign interaction, preventing placement on desert tile. `M`

9. [x] **Board Validation System** - Create validation rules to check official Catan constraints (correct resource distribution, correct number distribution, no adjacent red numbers, numbers not on desert) with visual warnings for violations. `M`

10. [x] **Setup Mode Toggle** - Add UI to switch between "Random" and "Manual" setup modes for both resources and numbers independently, with clear visual distinction between modes. `S`

11. [.] **Board Reset and Undo** - Implement reset button to clear manual placements, undo functionality for manual placement mistakes, and quick-switch between saved states during setup. `S`

## Phase 3: Projector Optimization

12. [ ] **Fullscreen Mode** - Implement browser fullscreen API integration with keyboard shortcut (F11) and button control, removing all browser chrome and UI elements for maximum board visibility. `S`

13. [ ] **High-Contrast Display Modes** - Create multiple visual themes optimized for projection: Classic (standard colors), High Contrast (enhanced saturation and borders), Colorblind-Friendly (deuteranopia/protanopia safe), Dark Mode (for low-light rooms). `M`

14. [ ] **Zoom and Pan Controls** - Add zoom functionality (mouse wheel, pinch gestures, +/- buttons) and pan capability (drag, arrow keys) to adjust board size and position for different projection surfaces and table configurations. `M`

15. [ ] **Responsive Layout System** - Ensure board scales correctly across common projector aspect ratios (16:9, 16:10, 4:3) and resolutions (720p, 1080p, 4K), with automatic centering and fitting. `M`

16. [ ] **Display Settings Panel** - Create collapsible settings panel (hidden during projection) for adjusting theme, zoom level, contrast, and brightness preferences with live preview. `S`

## Phase 4: Configuration Management

17. [x] **Save Board Configurations** - Implement local storage system to save board layouts with user-provided names and descriptions, storing resource positions, number positions, and display settings. `M`

18. [x] **Load Saved Boards** - Create board library UI showing thumbnails of saved boards with quick-load functionality, search/filter by name, and delete option for unwanted saves. `S`

19. [x] **Export/Import Board Layouts** - Add JSON export functionality for sharing board configurations via file download, and import functionality to load configurations from JSON files shared by other users. `M`

20. [x] **Board Preview Generation** - Generate small thumbnail previews of saved boards for quick visual identification in the board library, rendered as mini versions of the full board. `S`

21. [x] **Board History and Favorites** - Track recently generated/loaded boards (last 10) for quick access, and allow marking favorite configurations with star/favorite button for easy retrieval. `S`

## Notes

- Each feature represents an end-to-end functional and testable increment
- Features are ordered by technical dependencies and MVP prioritization
- Phase 1 delivers a working product, subsequent phases add polish and convenience
- All features focus exclusively on base Catan game - no expansion content
- Effort estimates: XS (1 day), S (2-3 days), M (1 week), L (2 weeks), XL (3+ weeks)

## Bonus Features Already Implemented

Beyond Phase 1, you've also implemented:
- **Partial Zoom Controls** (Phase 3, #14) - Board scaling with +/- buttons and keyboard shortcuts (50%-500% range). Pan controls not yet implemented.
- **Tournament Mode Toggle** - Prevents adjacent red numbers (6 & 8), integrated into board generation validation.
