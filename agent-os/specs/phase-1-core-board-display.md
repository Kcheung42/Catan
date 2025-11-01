# Specification: Phase 1 - Core Board Display (MVP)

## Overview

Phase 1 delivers the minimum viable product for the Catan Digital Board application: a functional board display system that can generate and render randomized Catan boards optimized for projector display. This phase focuses exclusively on getting a working board visualization that players can use immediately for gameplay, laying the foundation for future customization and projector optimization features.

The MVP includes hex grid rendering, all resource types, number token display with proper distribution, harbor locations, random board generation with validation, and basic UI controls. Players will be able to generate new boards instantly and project them for use with physical game pieces.

## User Stories

1. As a Catan player, I want to see a complete board layout with all 20 hexes displayed in the standard Catan arrangement, so that I can use it as a replacement for my physical board.

2. As a game night host, I want to click a "Generate New Board" button and instantly see a new randomized board layout, so that I can quickly set up games with variety.

3. As a veteran player, I want to see number tokens clearly displayed on each resource hex with probability indicators, so that I can make strategic decisions about settlement placement.

4. As a board game cafe owner, I want the board to follow official Catan rules for resource and number distribution, so that games are fair and balanced.

5. As a tech-forward gamer, I want to see harbor locations clearly marked around the board edges, so that I know where to place settlements for trading advantages.

6. As a player using a projector, I want the board to render clearly with good contrast and readable text, so that all players around the table can see the layout.

7. As a player using a projector, I want to be able to resize the board, while mainting proper ratio, so that the board fits my physical pieces

8. As a first-time user, I want the interface to be simple and intuitive with minimal controls, so that I can start using the board without reading documentation.

## Core Requirements

### Functional Requirements

- Display 20 hexagonal tiles in the classic Catan 3-4-5-4-3 row pattern
- Render 5 distinct resource types (wood, brick, wheat, sheep, ore) plus desert with clear visual differentiation
- Show number tokens (2-12) on resource hexes with probability dots (pips)
- Highlight high-probability numbers (6 and 8) with distinct styling (red color)
- Generate random board layouts following official Catan distribution rules
- Validate boards to ensure no adjacent 6-8 combinations
- Display 9 harbor positions with type indicators (4 general 3:1, 5 specialized 2:1)
- Provide "Generate New Board" button for instant randomization
- Show current board configuration summary (resource counts, number distribution)

### Non-Functional Requirements

- Board generation completes in under 1 second
- SVG rendering maintains crispness at any zoom level for projector display
- Application loads in under 3 seconds on standard broadband
- Responsive layout works on common screen resolutions (1920x1080, 1280x720)
- Code follows ClojureScript and Re-frame best practices for maintainability
- All validations are unit tested with 80%+ coverage
- Browser compatibility: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## Features Breakdown

### 1. Hex Grid Layout System

**Description:** Implement the foundational hexagonal grid rendering system that positions 20 hex tiles in the standard Catan board arrangement.

**Technical Approach:**
- Use axial coordinate system for hex positioning (q, r coordinates)
- Calculate hex centers using flat-top hexagon orientation
- Arrange hexes in 3-4-5-4-3 row pattern centered on screen
- Each hex has consistent size and spacing for visual balance
- SVG-based rendering for scalability

**Data Structure:**
```clojure
{:hex-size 60  ; radius in pixels
 :layout-type :flat-top
 :grid-coordinates [[0 0] [1 0] [2 0] ...]  ; axial coordinates for 20 hexes
 :hex-spacing 1.0}  ; multiplier for spacing between hexes
```

**Validation:**
- Verify exactly 20 hexes are rendered
- Confirm proper spacing and alignment
- Ensure hexes don't overlap

### 2. Resource Tile Rendering

**Description:** Create distinct visual representations for each of the 6 tile types with clear colors and optional icons.

**Technical Approach:**
- Define color palette for each resource type:
  - Wood (Forest): Dark green (#1a5f1a)
  - Brick (Hills): Burnt orange (#b8543c)
  - Wheat (Fields): Golden yellow (#e8c547)
  - Sheep (Pasture): Light green (#9bcd6f)
  - Ore (Mountains): Gray (#7c7c7c)
  - Desert: Tan/beige (#d4c4a0)
- Each hex filled with solid color
- Optional: Add resource icon (tree, brick, wheat stalk, sheep, mountain, cactus)
- Include subtle border for visual separation

**Data Structure:**
```clojure
{:resource-types #{:wood :brick :wheat :sheep :ore :desert}
 :resource-distribution {:wood 4 :brick 3 :wheat 4 :sheep 4 :ore 3 :desert 1}
 :board-state [{:coord [0 0] :resource :wood}
               {:coord [1 0] :resource :brick}
               ...]}
```

**Validation:**
- Verify correct resource distribution (4-3-4-4-3-1)
- Ensure each hex has exactly one resource assigned
- Confirm desert tile has no number token

### 3. Number Token Display

**Description:** Render number tokens on resource hexes with proper styling and probability indicators.

**Technical Approach:**
- Display numbers 2-12 as centered text on hexes
- Add probability pips (dots) below numbers:
  - 2, 12: 1 pip
  - 3, 11: 2 pips
  - 4, 10: 3 pips
  - 5, 9: 4 pips
  - 6, 8: 5 pips (red color for prominence)
- Use red background circle for 6 and 8 tokens
- Large, readable font size (24-28px)
- High contrast text color (black or white depending on hex color)

**Data Structure:**
```clojure
{:number-distribution {2 1, 3 2, 4 2, 5 2, 6 2, 8 2, 9 2, 10 2, 11 2, 12 1}
 :number-probabilities {2 1, 3 2, 4 3, 5 4, 6 5, 8 5, 9 4, 10 3, 11 2, 12 1}
 :board-state [{:coord [0 0] :resource :wood :number 5}
               {:coord [1 0] :resource :brick :number 8}
               ...]}
```

**Validation:**
- Verify correct number distribution
- Confirm no number on desert tile
- Ensure probability pips match number values

### 4. Random Board Generation

**Description:** Implement algorithm to randomly distribute resources and numbers while following official Catan rules.

**Technical Approach:**
- Randomization in two phases: resources first, then numbers
- Resource placement:
  - Shuffle resource types according to distribution
  - Assign to hex coordinates sequentially
- Number placement:
  - Shuffle numbers according to distribution
  - Assign to non-desert hexes in spiral pattern (standard Catan numbering)
  - Validate no adjacent 6-8 combinations
  - Retry if validation fails (max 10 attempts)
  - Use alternative algorithm if retries exhausted
- Seed random generation for reproducibility (optional)

**Algorithm:**
```clojure
(defn generate-board []
  (let [resources (shuffle-resources)
        hex-coords (get-hex-coordinates)
        resource-board (assign-resources resources hex-coords)
        numbers (shuffle-numbers)
        numbered-board (assign-numbers numbers resource-board)]
    (if (validate-board numbered-board)
      numbered-board
      (recur))))  ; retry if validation fails
```

**Validation Rules:**
- No two red numbers (6, 8) can be adjacent
- Correct resource distribution maintained
- Correct number distribution maintained
- Desert has no number
- All 20 hexes have assignments

### 5. Harbor/Port Display

**Description:** Render the 9 harbor locations around the board perimeter with type indicators.

**Technical Approach:**
- Position harbors on edges between two coastal hexes
- Harbor types:
  - General 3:1 (4 harbors): "3:1" text
  - Wood 2:1: "2:1" + wood icon
  - Brick 2:1: "2:1" + brick icon
  - Wheat 2:1: "2:1" + wheat icon
  - Sheep 2:1: "2:1" + sheep icon
  - Ore 2:1: "2:1" + ore icon
- Visual style: Small rectangles or circles extending from board edge
- Point toward the two hexes they connect
- Clear text labels and color coding matching resource types

**Data Structure:**
```clojure
{:harbors [{:position :north-west :type :general :ratio 3}
           {:position :north-east :type :wood :ratio 2}
           {:position :east-1 :type :brick :ratio 2}
           ...]}
```

**Harbor Placement:**
- Follow standard Catan harbor positions (9 specific edge locations)
- 4 general harbors distributed evenly
- 5 specialized harbors (one per resource type)

### 6. Basic UI Controls

**Description:** Create simple control panel for board generation, configuration display, and board scaling.

**Technical Approach:**
- Minimal UI overlay on top of board display
- "Generate New Board" button (prominent, easy to click)
- Board scaling controls:
  - Zoom in/out buttons (+ and -)
  - Keyboard shortcuts (Ctrl/Cmd + and -, mouse wheel with Ctrl/Cmd)
  - Scale percentage display (e.g., "100%", "125%", "150%")
  - Maintain aspect ratio when scaling
  - Persist scale preference in localStorage
- Board configuration summary panel:
  - Resource count display (4 wood, 3 brick, etc.)
  - Number distribution confirmation
  - Generation timestamp or board ID
- Clean, unobtrusive design that doesn't interfere with board visibility
- Collapsible or hideable for projector use

**UI Components:**
- Button component: Large, clear, accessible
- Scale controls component: Compact, always visible
- Info panel component: Collapsible, positioned at top or side
- Loading indicator: Shows during board generation (if > 100ms)

**Re-frame Events:**
- `:generate-board` - Trigger new board generation
- `:toggle-info-panel` - Show/hide configuration details
- `:set-board-scale` - Update board scale (50% to 200% range)
- `:increase-scale` - Increment scale by 25%
- `:decrease-scale` - Decrement scale by 25%
- `:reset-scale` - Reset to 100%

**Re-frame Subscriptions:**
- `:current-board` - Returns current board state
- `:resource-summary` - Returns resource count map
- `:number-summary` - Returns number distribution map
- `:board-scale` - Returns current scale percentage (default 100)

## Technical Architecture

### Re-frame Structure

**DB Schema:**
```clojure
{:board {:hexes [{:coord [0 0] :resource :wood :number 5}
                 {:coord [1 0] :resource :brick :number 8}
                 ...]
         :harbors [{:position :north-west :type :general :ratio 3}
                   ...]
         :metadata {:generated-at "2025-10-31T12:00:00Z"
                    :board-id "abc123"}}
 :ui {:show-info-panel true
      :loading false
      :board-scale 100}}  ; percentage: 50-200
```

**Events:**
- `:initialize-db` - Set up initial app state
- `:generate-board` - Create new random board
- `:generate-board-success` - Update DB with generated board
- `:generate-board-failure` - Handle generation errors
- `:toggle-info-panel` - Show/hide info panel
- `:set-board-scale` - Update board scale (50-200%)
- `:increase-scale` - Increment scale by 25%
- `:decrease-scale` - Decrement scale by 25%
- `:reset-scale` - Reset scale to 100%

**Subscriptions:**
- `:board` - Return current board state
- `:hexes` - Return hex data for rendering
- `:harbors` - Return harbor data
- `:show-info-panel?` - Info panel visibility
- `:resource-counts` - Derived data: resource distribution
- `:number-counts` - Derived data: number distribution
- `:board-scale` - Return current scale percentage

**Effects:**
- `:generate-board-async` - Perform board generation (potentially async)
- `:local-storage-save` - Save board scale preference to localStorage
- `:local-storage-load` - Load saved scale preference on app init

### SVG Rendering

**Hex Rendering:**
- Calculate 6 vertices for each hexagon using trigonometry
- Create SVG polygon element with calculated points
- Fill with resource color
- Add stroke for border
- Apply scale transform based on board-scale setting

**Text Rendering:**
- SVG text element positioned at hex center
- Number value as main text
- Probability pips as circles below number
- Font sizes scale proportionally with board scale

**Coordinate Conversion:**
- Axial coordinates (q, r) to pixel coordinates (x, y)
- Formula for flat-top hexagons:
  ```clojure
  x = hex-size * scale-factor * (3/2 * q)
  y = hex-size * scale-factor * (sqrt(3)/2 * q + sqrt(3) * r)
  ```
  where `scale-factor = board-scale / 100`

**Scaling Implementation:**
- Apply SVG transform to parent group element
- Use `transform="scale(scale-factor)"` for clean scaling
- Alternatively, adjust hex-size calculation directly
- Ensure crisp rendering at all scale levels

### Validation Functions

```clojure
(defn validate-resource-distribution [board]
  "Ensures correct count of each resource type")

(defn validate-number-distribution [board]
  "Ensures correct count of each number")

(defn validate-no-adjacent-red-numbers [board]
  "Ensures no 6-8 combinations are adjacent")

(defn validate-desert-has-no-number [board]
  "Ensures desert tile has no number token")

(defn validate-board [board]
  "Master validation function calling all validators")
```

## Data Structures

### Hexagonal Coordinates

Using axial coordinate system:
- q: column coordinate
- r: row coordinate
- Enables easy neighbor calculations and distance computations

### Board State

Complete board representation:
```clojure
{:hexes [{:coord [q r]
          :resource :wood|:brick|:wheat|:sheep|:ore|:desert
          :number 2-12|nil
          :has-robber? boolean}
         ...]
 :harbors [{:edge-coords [[q1 r1] [q2 r2]]
            :type :general|:wood|:brick|:wheat|:sheep|:ore
            :ratio 2|3}
           ...]
 :config {:hex-size 60
          :spacing 1.0
          :layout :flat-top}}
```

## Implementation Notes

### Hex Grid Mathematics

Reference implementation based on Red Blob Games hexagon guide:
- Use axial coordinates for storage and logic
- Convert to pixel coordinates for rendering
- Flat-top orientation for standard Catan look
- Neighbor finding: 6 directions using coordinate offsets

### Random Generation Strategy

Two-phase approach:
1. Randomly place resources (simple shuffle)
2. Iteratively place numbers with validation
   - Try spiral pattern first (standard Catan)
   - If validation fails, retry with different shuffle
   - Use constraint-based placement if retries exhausted

### Performance Considerations

- Memoize hex vertex calculations (6 points per hex = 120 calculations)
- Use React.memo (via Reagent) for hex components to prevent unnecessary re-renders
- Generate board in background with loading indicator if > 100ms
- Optimize SVG by minimizing DOM nodes and using CSS transforms

### Browser Compatibility

- SVG 2.0 features well-supported in target browsers
- Avoid experimental CSS features
- Use polyfills if needed for older Safari versions
- Test on all target browsers before Phase 1 completion

## Acceptance Criteria

Phase 1 is complete when:

1. A user can load the application and see a randomly generated Catan board within 3 seconds
2. The board displays exactly 20 hexes in the correct 3-4-5-4-3 arrangement
3. All 6 resource types are visually distinct and clearly identifiable
4. Number tokens (2-12) are displayed with correct probability pips
5. Numbers 6 and 8 are highlighted in red for easy identification
6. The board follows official Catan distribution rules (4-3-4-4-3-1 resources, correct number counts)
7. No two red numbers (6, 8) are ever placed adjacent to each other
8. The desert tile never has a number token
9. All 9 harbors are displayed in standard positions with correct types (4 general, 5 specialized)
10. Clicking "Generate New Board" creates a new valid random board in under 1 second
11. The UI shows resource and number distribution summary
12. Users can scale the board from 50% to 200% using zoom controls
13. Keyboard shortcuts (Ctrl/Cmd +/-) and mouse wheel (with Ctrl/Cmd) adjust board scale
14. Board scale maintains aspect ratio and displays current percentage
15. Board scale preference persists across browser sessions (localStorage)
16. The board is clearly visible and readable when projected at various scales (tested with actual projector)
17. Application works correctly in Chrome, Firefox, Safari, and Edge
18. All validation functions have unit tests with 80%+ code coverage
19. No console errors or warnings during normal operation

## Testing Strategy

### Unit Tests
- Hex coordinate calculations (axial to pixel conversion)
- Scaling factor calculations and transformations
- Resource distribution validation
- Number distribution validation
- Adjacent hex detection
- Red number adjacency validation
- Board generation algorithm
- Scale event handlers (increase, decrease, set, reset)

### Integration Tests
- Full board generation flow
- Re-frame event handlers
- Subscription computations
- SVG rendering output
- Scale persistence to/from localStorage
- Keyboard and mouse wheel event handling

### Manual Testing
- Visual inspection of board layouts
- Board scaling at different percentages (50%, 75%, 100%, 150%, 200%)
- Projector display testing (contrast, readability at various scales)
- Physical piece fitting at different scales
- Keyboard shortcut functionality (Ctrl/Cmd +/-, mouse wheel)
- Cross-browser compatibility testing
- Performance testing (generation speed, render time, scaling smoothness)
- Random generation testing (generate 100+ boards, verify all valid)
- Scale persistence across browser refresh

## Out of Scope for Phase 1

- Manual resource placement (deferred to Phase 2)
- Manual number placement (deferred to Phase 2)
- Advanced validation system with visual warnings (deferred to Phase 2)
- Fullscreen mode (deferred to Phase 3)
- High-contrast themes (deferred to Phase 3)
- Zoom and pan controls (deferred to Phase 3)
- Save/load board configurations (deferred to Phase 4)
- Export/import functionality (deferred to Phase 4)
- Board history tracking (deferred to Phase 4)
- Expansion support (explicitly excluded from entire project)

## Success Criteria

Phase 1 successfully delivers value when:

- A player can use the application to play a complete game of Catan without needing the physical board
- Board generation is fast enough that players don't perceive any delay
- The board is readable and clear when projected on a table
- New users can generate and use a board without instructions
- The application is stable with no crashes or errors during normal use
- The codebase is clean, well-tested, and ready for Phase 2 feature additions

## Dependencies and Prerequisites

### Development Tools Required
- Clojure 1.11+
- ClojureScript 1.11+
- Shadow-CLJS
- Node.js and npm (for Shadow-CLJS)

### Libraries Required
- Reagent (React wrapper)
- Re-frame (state management)
- Hiccup (for SVG generation via Reagent)

### Development Environment
- REPL-capable editor (CIDER, Calva, or Cursive)
- Modern web browser for testing
- Access to projector for display testing

## Timeline Estimate

Based on roadmap effort estimates:
- Feature 1 (Hex Grid): 1 week (M)
- Feature 2 (Resource Rendering): 2-3 days (S)
- Feature 3 (Number Tokens): 2-3 days (S)
- Feature 4 (Random Generation): 1 week (M)
- Feature 5 (Harbor Display): 1 week (M)
- Feature 6 (UI Controls + Board Scaling): 3-4 days (S-M)

Total estimated effort: 3-4 weeks for full Phase 1 completion with testing and refinement.

**Note:** Board scaling adds approximately 1 day to Feature 6 for implementation of scale controls, keyboard shortcuts, localStorage persistence, and testing.

## Next Steps After Phase 1

Upon successful completion of Phase 1, the team will:
1. Gather user feedback on board visibility and usability
2. Test with real projector setups and game sessions
3. Identify pain points or missing features
4. Plan Phase 2 implementation (Setup Customization)
5. Consider early projector optimization features if needed based on feedback
