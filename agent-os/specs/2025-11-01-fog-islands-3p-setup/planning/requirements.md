# Spec Requirements: Fog Islands 3-Player Setup

## Initial Description
Expand Catan and create the ability for the user to select an alternate board set up for the Seafarers edition. Begin with the Fog Islands 3-Player Set-up.

## Requirements Discussion

### First Round Questions

**Q1:** Board Layout Pattern - What is the hex grid structure?
**Answer:** 5-6-7-8-7-6-5 pattern (44 total hexes) - see visual provided

**Q2:** Island Configuration - How are the islands arranged?
**Answer:** 2 distinct island clusters with water hexes explicitly rendered between them

**Q3:** Fog Tile Mechanics - Should we include digital UI for revealing fog tiles?
**Answer:** YES - include digital UI for revealing fog tiles

**Q4:** Resource Distribution - Is the distribution different for face-up vs face-down hexes?
**Answer:** Different distributions for face-up vs face-down hexes (fog covered)

**Q5:** Harbor Placements - How many harbors and where?
**Answer:** 8 harbors in fixed positions

**Q6:** Number Token Distribution - Different for face-up vs face-down?
**Answer:** Different for face-up vs face-down hexes. User will edit a configuration map themselves, but we need to provide the structure for them to edit.

**Q7:** UI Integration - How should users select this scenario?
**Answer:** Dropdown scenario selection is good

**Q8:** Random vs Fixed Layout - Should the layout be randomized?
**Answer:** Fixed layout (not random)

**Q9:** Scope for Future - Should architecture support other Seafarers scenarios?
**Answer:** YES - architecture should support easy addition of other Seafarers scenarios

### Existing Code to Reference

No similar existing features identified for reference. This is a new Seafarers scenario expansion.

### Follow-up Questions

No follow-up questions were needed. The visual asset provided complete board layout details.

## Visual Assets

### Files Provided:
- `fog island 3 player setup.png`: Official Seafarers rulebook image showing the complete board layout

### Visual Insights:

**Board Structure:**
- 44 total hexes arranged in 5-6-7-8-7-6-5 row pattern
- Two distinct island clusters separated by water and fog hexes
- Blue water hexes form the outer border and separate islands

**Fog Tiles (White hexes with "?"):**
- Total: 12 fog-covered hexes
- Left cluster: 6 fog hexes
- Center/connecting area: 5 fog hexes
- Fog tiles hide terrain type and number tokens until revealed

**Face-Up Terrain Hexes:**
- Upper-left island cluster: 7 revealed hexes
  - Terrain types visible: Forest (trees), Hills (brick mountains), Pasture (sheep), Fields (wheat), Mountains (ore)
  - Number tokens: 6, 11, 5, 8, 12, 9, 10
- Lower-right island cluster: 7 revealed hexes
  - Similar terrain variety
  - Number tokens: 6, 5, 11, 8, 4, 9, 3

**Water Hexes:**
- Outer border: ~18 water hexes forming the ocean frame
- Water hexes are rendered as blue tiles (not just empty space)

**Harbor Configuration:**
- 8 harbors total
- Harbor types identified by icons:
  - 3:1 general trade harbors (question mark icon)
  - 2:1 specialized resource harbors (wheat, ore, wood, sheep, brick icons)
- Harbors positioned on edges between water and land/fog hexes

**Number Token Distribution:**
- Face-up hexes: 6, 11, 5, 8, 12, 9, 10, 6, 5, 11, 8, 4, 9, 3 (14 tokens visible)
- Fog-covered hexes: Will have their own set of number tokens revealed during gameplay

**Design Fidelity:**
- High-fidelity reference image from official rulebook
- Exact hex positions don't need to be exact for now. Allow developer to manually edit positions
- Professional game board aesthetic with blue water, varied terrain colors

## Requirements Summary

### Functional Requirements

**Core Scenario System:**
- Create a scenario selection mechanism allowing users to choose between "Base Game" and "Fog Islands 3-Player"
- Scenario selection should be available at game setup/initialization
- Selected scenario determines board layout, resource distribution, and special mechanics

**Fog Islands 3-Player Board Layout:**
- Implement 44-hex grid in 5-6-7-8-7-6-5 row pattern
- Two distinct island clusters:
  - Upper-left island: 7 face-up terrain hexes
  - Lower-right island: 7 face-up terrain hexes
- 12 fog-covered hexes (initially face-down):
- Explicit water hex rendering:
  - Outer border water hexes (~18 hexes)
  - Water hexes rendered as blue tiles, not empty space

**Fog Tile Mechanics:**
- Fog tiles display white/gray with "?" marker when covered
- Fog tiles hide both terrain type and number token
- Reveal interaction: Click/tap fog tile to reveal terrain and number
- Revealed fog tiles behave identically to regular terrain hexes
- Fog state persists during game session
- Visual transition animation when revealing (optional enhancement)

**Resource & Number Distribution:**
- Two separate configuration structures:
  1. Face-up hexes: Pre-defined terrain types and number tokens, but randomized using a distribution
  2. Face-down (fog) hexes: Hidden configuration revealed during gameplay
- User-editable configuration maps for:
  - Terrain type distribution (forest, hills, pasture, fields, mountains, desert)
  - Number token assignments (2-12, excluding 7)
- Face-up distribution (from visual):
  - Specific hex positions mapped to terrain + number
  - use the same coordinate system as the base catan board
- Face-down distribution:
  - Initially hidden, revealed through gameplay
  - Configuration structure mirrors face-up format

**Harbor System:**
- 8 harbors in fixed positions
- Harbor types:
  - 3:1 general trade harbors
  - 2:1 specialized resource harbors (wheat, wood, sheep, brick, ore)
- Harbor positioning:
  - Placed on edges between water and land/fog hexes
  - Each harbor associated with specific edge positions
- Harbor configuration structure:
  - Edge coordinates/identifiers
  - Harbor type (3:1 or 2:1 resource-specific)
  - Visual icon rendering

**New resource type**
- 1 new resource type :gold

**Data Structures Required:**

```clojure
;; Scenario configuration structure (user-editable)
{:scenario-id :fog-islands-3p
 :name "Fog Islands 3-Player"
 :player-count 3
 :board-config
 {:grid-pattern "5-6-7-8-7-6-5"  ; For generate-grid-from-pattern function
  :total-hexes 44

  ;; Hex type mapping (coordinates are editable by developer)
  ;; NOTE: Positions don't need to be exact initially - allow manual editing
  :hex-types
  {;; Water hexes (outer border, ~18 hexes total)
   :water #{[q1 r1] [q2 r2] ...}  ; Developer edits these axial coordinates

   ;; Fog hexes (12 total - hidden until revealed during gameplay)
   :fog #{[q3 r3] [q4 r4] ... [q14 r14]}  ; Developer edits these coordinates

   ;; Face-up terrain hexes (14 total - remaining coordinates)
   ;; Terrain will be assigned from :face-up-distribution
   :terrain #{[q15 r15] [q16 r16] ...}}  ; Auto-calculated or developer edits

  ;; Resource distribution for face-up hexes (randomized on generation)
  :face-up-distribution
  {:resources
   {:wood 3      ; Forest terrain
    :brick 2     ; Hills terrain
    :sheep 3     ; Pasture terrain
    :wheat 3     ; Fields terrain
    :ore 2       ; Mountains terrain
    :desert 1}   ; Desert (no number token)
   :total 14     ; Must match count of :terrain hexes

   ;; Number tokens for face-up hexes (user editable)
   :number-tokens [6 11 5 8 12 9 10 6 5 11 8 4 9 3]  ; 14 tokens
   :token-assignment :random}  ; Randomly assign to non-desert terrain

  ;; Resource distribution for fog hexes (revealed during gameplay)
  :fog-distribution
  {:resources
   {:wood 1
    :brick 2
    :sheep 1
    :wheat 2
    :ore 2
    :desert 2
    :gold 2}  ; User editable - total should be 12
   :total 12

   ;; Number tokens for fog hexes (user editable)
   :number-tokens [2 3 4 5 6 8 9 10 11 12 3 4]  ; 12 tokens (example)
   :token-assignment :random}  ; Randomly assign when fog revealed

  ;; Harbor configuration (8 fixed positions - user editable)
  :harbors
  [{:land-hex [q r]     ; Axial coordinate of hex the harbor is attached to
    :direction :n | :ne | :se | :s | :sw | :nw  ; Which edge of the hex
    :type :3-1}         ; 3:1 general trade
   {:land-hex [q r]
    :direction :ne
    :type :2-1-wheat}   ; 2:1 wheat harbor
   ;; ... 6 more harbors (developer edits all 8)
   ]

  ;; Island cluster definitions (for reference/future use)
  :islands
  [{:id :northwest-island
    :hex-coords #{[q1 r1] [q2 r2] ...}}  ; Developer edits
   {:id :southeast-island
    :hex-coords #{[q3 r3] [q4 r4] ...}}]}}  ; Developer edits

;; Game state structure (separate from static scenario config)
;; This tracks dynamic game state like fog reveals
{:current-scenario :fog-islands-3p
 :fog-reveal-state
 {[q1 r1] {:revealed? false   ; Has this fog hex been revealed?
           :terrain nil        ; Terrain type (assigned when revealed)
           :number nil}        ; Number token (assigned when revealed)
  [q2 r2] {:revealed? true
           :terrain :wood
           :number 8}
  ;; ... one entry per fog hex
  }}
```

**UI Components:**

1. **Scenario Selection Dropdown:**
   - Location: Game setup screen
   - Options: "Base Game (4-player)", "Fog Islands (3-player)", [future scenarios]
   - Triggers board re-render with selected scenario configuration

2. **Fog Tile Rendering:**
   - Visual state: White/gray hex with "?" symbol when covered
   - Interactive: Clickable/tappable to reveal
   - Revealed state: Shows terrain color, resource icon, number token
   - Hover state (desktop): Indicate interactivity

3. **Water Hex Rendering:**
   - Blue colored hexes (matching visual)
   - Non-interactive
   - Distinct from empty/no-hex space

4. **Board Display:**
   - Center the 44-hex grid appropriately
   - Maintain hex spacing and alignment
   - Render harbors on appropriate edges
   - Color-code terrain types consistently

**User Actions Enabled:**
- Select "Fog Islands 3-Player" scenario at game setup
- View fixed board layout with two island clusters
- Click fog-covered hexes to reveal terrain and numbers
- Place settlements and roads on revealed terrain
- Trade at harbors positioned around islands

**Data to be Managed:**
- Current scenario selection (game state)
- Fog tile reveal state (per-hex boolean)
- Board configuration (hex positions, types, numbers)
- Harbor positions and types
- Island cluster definitions

### Reusability Opportunities

**Existing Codebase Patterns:**
- Current hex rendering system can be extended to support water and fog hex types
- Existing number token rendering can be reused for fog tiles once revealed
- Current board generation logic can be adapted to load scenario configurations
- Harbor rendering system (if exists) can be extended with new positions

**New Abstractions to Create:**
- Scenario configuration loader/parser
- Fog tile state management
- Scenario selection UI component
- Water hex rendering component

### Scope Boundaries

**In Scope:**
- Fog Islands 3-Player scenario board layout
- Scenario selection dropdown UI
- Fog tile reveal mechanics (click to reveal)
- Fixed board configuration (not randomized)
- Water hex explicit rendering
- 8 harbor placements in fixed positions
- Separate resource/number distributions for face-up vs fog hexes
- Data structure to support user editing of configuration

**Out of Scope:**
- Other Seafarers scenarios (architecture should support, but not implemented now)
- Fog tile game rules enforcement (AI player behavior with fog, victory point counting)
- Randomized fog tile distribution
- Multiplayer synchronization of fog reveals
- Mobile-specific gesture controls (beyond basic click/tap)
- Animation effects for fog reveal (nice-to-have, not required)
- Sound effects
- Tutorial or rules explanation UI
- 4-player Fog Islands variant
- Scenario editor UI (user edits config directly in code/file)

**Future Enhancements Mentioned:**
- Additional Seafarers scenarios (Heading for New Shores, The Four Islands, etc.)
- Dynamic scenario loading from external files
- Scenario-specific game rules enforcement
- Fog reveal animation effects
- Multiplayer fog reveal synchronization

### Technical Considerations

**Integration Points:**
- Game initialization flow: Add scenario selection step before board generation
- Board rendering system: Extend to handle water, fog, and standard terrain hex types
- Game state management: Add fog tile reveal state tracking
- Harbor system: Load harbor positions from scenario configuration
- Number token system: Support hidden tokens on fog tiles

**Existing System Constraints:**
- ClojureScript + Reagent (React wrapper) frontend
- Re-frame for state management
- SVG-based hex rendering
- Current hex coordinate system (needs to support 5-6-7-8-7-6-5 pattern)

**Technology Preferences:**
- Continue using SVG for hex and harbor rendering
- Re-frame events for fog tile reveal interactions
- Re-frame subscriptions for scenario selection and fog state
- EDN format for scenario configuration data

**Architecture for Extensibility:**
- Scenario configuration as data (not hardcoded)
- Generic scenario loader that can load any board layout
- Pluggable fog mechanics (other scenarios might have different reveal rules)
- Harbor system that accepts arbitrary positions
- Island cluster definitions for potential future use (trade routes, etc.)

**Data Structure Design Principles:**
- Scenario config is pure data (EDN map)
- Hex positions use [row col] coordinate system
- Edge positions reference hex + direction
- Fog state separated from board configuration (game state vs. static config)
- Configuration easily editable by user in code

**Performance Considerations:**
- 44 hexes should render efficiently (less than base game's 61 hexes)
- Fog reveal is client-side state change (no server round-trip needed)
- Water hexes are static (no interaction or state changes)

**Visual Design Considerations:**
- Match official Catan Seafarers aesthetic
- Blue water hexes clearly distinct from land
- Fog tiles visually distinct (white/gray with "?")
- Maintain hex spacing and alignment for 44-hex layout
- Harbor icons positioned on edges, not overlapping hexes
