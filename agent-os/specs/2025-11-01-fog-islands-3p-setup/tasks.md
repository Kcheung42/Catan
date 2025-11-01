# Task Breakdown: Fog Islands 3-Player Setup

## Overview
Total Tasks: 4 major task groups with 24 sub-tasks
Assigned roles: database-engineer, api-engineer, ui-designer, testing-engineer

## Task List

### Core Data Structures & Utilities

#### Task Group 1: Grid Generation & Scenario Data Structures
**Assigned implementer:** database-engineer
**Dependencies:** None

- [x] 1.0 Complete grid generation and scenario data layer
  - [x] 1.1 Write 2-8 focused tests for grid pattern generation
    - Limit to 2-8 highly focused tests maximum
    - Test only critical behaviors:
      - `generate-grid-from-pattern` with "5-6-7-8-7-6-5" produces 44 coordinates
      - Grid is properly centered (middle row at q=0)
      - Coordinates are valid axial coordinates
    - File: `/home/kcheung/code/catan/test/catan_board/hex_test.cljs`
    - Skip exhaustive edge case testing at this stage
  - [x] 1.2 Implement `generate-grid-from-pattern` function
    - File: `/home/kcheung/code/catan/src/catan_board/utils/hex.cljs`
    - Add function that parses pattern string (e.g., "5-6-7-8-7-6-5")
    - Generate axial coordinates for each row, centered on origin
    - Return vector of [q r] coordinates
    - Reuse existing hex coordinate system and conventions
  - [x] 1.3 Create Fog Islands scenario configuration namespace
    - File: `/home/kcheung/code/catan/src/catan_board/scenarios/fog_islands_3p.cljs`
    - Define `fog-islands-3p-scenario` config map with:
      - `:id :fog-islands-3p`
      - `:name "Fog Islands (3-player)"`
      - `:player-count 3`
      - `:grid-pattern "5-6-7-8-7-6-5"`
      - `:hex-types` - sets of coordinates for :water, :fog, :terrain (developer will manually edit coordinates)
      - `:face-up-distribution` - resource counts and number tokens for visible hexes (wood:3, brick:2, sheep:3, wheat:3, ore:2, desert:1)
      - `:fog-distribution` - resource counts and number tokens for fog hexes, including `:gold` resource type (wood:1, brick:2, sheep:1, wheat:2, ore:2, desert:2, gold:2)
      - `:harbors` - 8 harbor positions with land-hex coords, direction, and type
    - Leave coordinate sets with placeholder values for now (will be manually edited later)
  - [x] 1.4 Create scenario registry namespace
    - File: `/home/kcheung/code/catan/src/catan_board/scenarios/registry.cljs`
    - Create `scenarios` map: `{:base-game {...} :fog-islands-3p fog-islands-3p/fog-islands-3p-scenario}`
    - Implement `get-scenario [scenario-id]` - returns scenario config or nil
    - Implement `list-scenarios []` - returns list of available scenarios with id and name
  - [x] 1.5 Extend database schema
    - File: `/home/kcheung/code/catan/src/catan_board/db.cljs`
    - Add `:scenario :base-game` to `default-db`
    - Add `:fog-state {}` to `default-db` (map of [q r] -> {:revealed? false :terrain nil :number nil})
    - Keep existing structure intact
  - [x] 1.6 Ensure data layer tests pass
    - Run ONLY the 2-8 tests written in 1.1
    - Verify grid generation works correctly
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 1.1 pass
- `generate-grid-from-pattern` produces correct coordinate count and centering
- Scenario config has all required fields with proper structure
- Scenario registry can retrieve scenarios by ID
- Database schema includes scenario and fog-state keys

### Re-frame State Management

#### Task Group 2: Events, Subscriptions & Scenario Generation
**Assigned implementer:** database-engineer
**Dependencies:** Task Group 1

- [x] 2.0 Complete Re-frame state management layer
  - [x] 2.1 Write 2-8 focused tests for scenario generation
    - Limit to 2-8 highly focused tests maximum
    - Test only critical behaviors:
      - Scenario board generation produces correct hex count
      - Fog state initializes correctly (all :revealed? false)
      - Resource assignment doesn't exceed distribution counts
    - File: `/home/kcheung/code/catan/test/catan_board/utils/scenario_generator_test.cljs`
    - Skip exhaustive testing of all edge cases
  - [x] 2.2 Create scenario generator utility
    - File: `/home/kcheung/code/catan/src/catan_board/utils/scenario_generator.cljs`
    - Implement `generate-scenario-board [scenario-config]` function:
      - Generate grid coordinates from pattern using `hex/generate-grid-from-pattern`
      - Classify hexes by type (water/fog/terrain) using coordinate sets from config
      - Shuffle and assign resources to terrain hexes from `:face-up-distribution`
      - Shuffle and assign number tokens to non-desert terrain hexes
      - Create harbor vector from config (no shuffling - fixed positions)
      - Return map: `{:hexes [...] :harbors [...] :metadata {...}}`
    - Implement `initialize-fog-state [scenario-config]` function:
      - Create map of fog coordinates -> `{:revealed? false :terrain nil :number nil}`
  - [x] 2.3 Add Re-frame events for scenario management
    - File: `/home/kcheung/code/catan/src/catan_board/events.cljs`
    - Add `:set-scenario [scenario-id]` event handler:
      - Load scenario config from registry
      - Generate board using scenario-generator
      - Initialize fog state
      - Update db with new scenario, board, and fog-state
      - Clear any selected tokens
    - Modify `:generate-board` event to check current scenario:
      - If `:scenario` is `:base-game`, use existing board-gen/generate-board
      - Otherwise, use scenario-generator with current scenario config
  - [x] 2.4 Add Re-frame event for fog reveal
    - File: `/home/kcheung/code/catan/src/catan_board/events.cljs`
    - Add `:reveal-fog-tile [[q r]]` event handler:
      - Check if coordinate exists in fog-state and not already revealed
      - Get current scenario's fog-distribution
      - Randomly select terrain type from available fog resources
      - Randomly select number token from available fog tokens (exclude if terrain is desert)
      - Update fog-state for coordinate: `{:revealed? true :terrain X :number Y}`
      - Decrement available resources/tokens (track in separate state or accept duplicates)
  - [x] 2.5 Add Re-frame subscriptions for scenario system
    - File: `/home/kcheung/code/catan/src/catan_board/subs.cljs` (create if doesn't exist)
    - Add `(rf/reg-sub :current-scenario (fn [db _] (:scenario db)))`
    - Add `(rf/reg-sub :fog-state (fn [db _] (:fog-state db)))`
    - Add `(rf/reg-sub :available-scenarios (fn [db _] (registry/list-scenarios)))`
  - [x] 2.6 Ensure state management tests pass
    - Run ONLY the 2-8 tests written in 2.1
    - Verify scenario generation creates proper board structure
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 2.1 pass
- Scenario generator creates boards with correct hex counts and types
- `:set-scenario` event properly regenerates board
- `:reveal-fog-tile` event updates fog state correctly
- Subscriptions provide access to scenario and fog state

### User Interaction & Event Handling

#### Task Group 3: Interactive Fog Reveal & Scenario Selection
**Assigned implementer:** api-engineer
**Dependencies:** Task Groups 1, 2

- [x] 3.0 Complete user interaction layer
  - [x] 3.1 Write 2-8 focused tests for interaction handlers
    - Limit to 2-8 highly focused tests maximum
    - Test only critical behaviors:
      - Clicking fog hex triggers reveal event
      - Clicking water hex does nothing
      - Scenario selection triggers board regeneration
    - File: `/home/kcheung/code/catan/test/catan_board/views/interactions_test.cljs` (create if needed)
    - Skip exhaustive testing of all UI states
  - [x] 3.2 Add fog reveal click handler to hex-tile component
    - File: `/home/kcheung/code/catan/src/catan_board/views/hex.cljs`
    - Extend `hex-tile` function signature to accept `fog-state` parameter
    - Add click handler for fog hexes that dispatches `[:reveal-fog-tile coord]`
    - Only allow click if hex is fog type and not yet revealed
    - Do not interfere with existing edit-mode click handlers
  - [x] 3.3 Create scenario selection dropdown component
    - File: `/home/kcheung/code/catan/src/catan_board/views.cljs` (or views/controls.cljs if exists)
    - Create `scenario-selector` component:
      - Subscribe to `:available-scenarios`
      - Subscribe to `:current-scenario`
      - Render dropdown/select element with scenario options
      - On change, dispatch `[:set-scenario scenario-id]`
      - Style to match existing control panel aesthetic
  - [x] 3.4 Wire scenario selector into main view
    - File: `/home/kcheung/code/catan/src/catan_board/views.cljs`
    - Add `[scenario-selector]` component to controls area
    - Position near existing "Generate Board" button
    - Ensure it's visible and accessible on initial load
  - [x] 3.5 Ensure interaction tests pass
    - Run ONLY the 2-8 tests written in 3.1
    - Verify fog reveal click works
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 3.1 pass
- Clicking fog hexes reveals terrain and number token
- Scenario dropdown displays available scenarios
- Selecting a scenario regenerates the board

### UI Rendering & Visual Design

#### Task Group 4: Water & Fog Hex Rendering
**Assigned implementer:** ui-designer
**Dependencies:** Task Groups 1, 2, 3

- [x] 4.0 Complete rendering layer for new hex types
  - [x] 4.1 Write 2-8 focused tests for rendering
    - Limit to 2-8 highly focused tests maximum
    - Test only critical rendering behaviors:
      - Water hex renders with blue fill
      - Fog hex shows "?" when not revealed
      - Revealed fog hex shows terrain and number
      - Gold terrain renders correctly when revealed from fog
    - File: `/home/kcheung/code/catan/test/catan_board/views/hex_test.cljs` (create if needed)
    - Skip exhaustive testing of all visual states
  - [x] 4.2 Add water and gold patterns to SVG definitions
    - File: `/home/kcheung/code/catan/src/catan_board/views/hex.cljs`
    - VERIFY that water-pattern and gold-pattern already exist (added by api-engineer)
    - If they exist and look good, skip this step
    - If they need enhancement, improve the visual design
  - [x] 4.3 Extend hex-tile component for water hexes
    - File: `/home/kcheung/code/catan/src/catan_board/views/hex.cljs`
    - VERIFY that water hex rendering already exists (added by api-engineer)
    - If it exists and works correctly, skip this step
    - If it needs enhancement, improve the rendering
  - [x] 4.4 Extend hex-tile component for fog hexes
    - File: `/home/kcheung/code/catan/src/catan_board/views/hex.cljs`
    - VERIFY that fog hex rendering already exists (added by api-engineer)
    - If it exists and works correctly, skip this step
    - If it needs enhancement, improve the rendering or styling
  - [x] 4.5 Update hex-grid to pass fog-state to hex-tile
    - File: `/home/kcheung/code/catan/src/catan_board/views/hex.cljs`
    - VERIFY that hex-grid already passes fog-state (added by api-engineer)
    - If it exists and works correctly, skip this step
  - [x] 4.6 Test visual rendering manually
    - Load Fog Islands scenario
    - Verify water hexes appear blue and non-interactive
    - Verify fog hexes show "?" and are clickable
    - Click fog hex and verify it reveals with terrain/number
    - Verify revealed fog hex looks identical to face-up terrain
  - [x] 4.7 Ensure rendering tests pass
    - Run ONLY the 2-8 tests written in 4.1
    - Verify water and fog rendering works correctly
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 4.1 pass
- Water hexes render with blue color and no interaction
- Fog hexes show "?" symbol when covered
- Revealed fog hexes render identically to regular terrain
- Visual design matches reference image aesthetic

### Testing & Integration

#### Task Group 5: Integration Testing & Configuration Editing
**Assigned implementer:** testing-engineer
**Dependencies:** Task Groups 1-4

- [x] 5.0 Integration testing and configuration finalization
  - [x] 5.1 Review tests from Task Groups 1-4
    - Review the 2-8 tests written by database-engineer (Tasks 1.1, 2.1)
    - Review the 2-8 tests written by api-engineer (Task 3.1)
    - Review the 2-8 tests written by ui-designer (Task 4.1)
    - Total existing tests: approximately 8-32 tests
  - [x] 5.2 Analyze test coverage gaps for THIS feature only
    - Identify critical integration workflows that lack coverage:
      - Complete scenario selection flow (dropdown -> board regeneration)
      - Complete fog reveal flow (click -> state update -> re-render)
      - Scenario switching (fog islands -> base game -> fog islands)
      - Harbor rendering with fog islands scenario
    - Focus ONLY on integration points, not unit test gaps
    - Do NOT assess entire application test coverage
  - [x] 5.3 Write up to 10 additional strategic integration tests maximum
    - Add maximum of 10 new tests to fill critical integration gaps
    - File: `/home/kcheung/code/catan/test/catan_board/integration/scenario_integration_test.cljs` (create if needed)
    - Focus on end-to-end workflows:
      - Test full scenario selection and board generation
      - Test fog reveal persistence across re-renders
      - Test scenario config data integrity
    - Do NOT write comprehensive coverage for all scenarios
    - Skip edge cases and performance tests unless business-critical
  - [x] 5.4 Manually edit Fog Islands scenario coordinates
    - File: `/home/kcheung/code/catan/src/catan_board/scenarios/fog_islands_3p.cljs`
    - Using reference image and developer mode coordinates:
      - Define exact axial coordinates for 18 water hexes (outer border)
      - Define exact axial coordinates for 12 fog hexes (between islands)
      - Define exact axial coordinates for 14 terrain hexes (two island clusters)
    - Verify total = 44 hexes
    - Update harbor positions with correct land-hex coordinates and directions
    - Test in browser to ensure layout matches visual reference
  - [x] 5.5 Run feature-specific tests only
    - Run ONLY tests related to this spec's feature (tests from 1.1, 2.1, 3.1, 4.1, and 5.3)
    - Expected total: approximately 18-42 tests maximum
    - Do NOT run the entire application test suite
    - Verify all critical workflows pass
  - [x] 5.6 Perform end-to-end manual testing
    - Test scenario selection from dropdown
    - Test board renders with correct hex counts (18 water, 12 fog, 14 terrain)
    - Test fog reveal mechanics (click, reveal, persist)
    - Test scenario switching back to base game
    - Test harbors render correctly in Fog Islands layout
    - Test developer mode shows correct coordinates
    - Document any issues found

**Acceptance Criteria:**
- All feature-specific tests pass (approximately 18-42 tests total)
- Critical integration workflows are covered
- No more than 10 additional tests added by testing-engineer
- Fog Islands scenario coordinates are correctly defined
- Board layout visually matches reference image
- All functionality works end-to-end

## Execution Order

Recommended implementation sequence:
1. **Core Data Structures & Utilities** (Task Group 1) - Foundation for grid generation and scenario configs
2. **Re-frame State Management** (Task Group 2) - Events, subscriptions, and scenario generation logic
3. **User Interaction & Event Handling** (Task Group 3) - Wire up user actions and scenario selection
4. **UI Rendering & Visual Design** (Task Group 4) - Render water and fog hexes with proper styling
5. **Testing & Integration** (Task Group 5) - Integration tests and finalize scenario coordinates

## Implementation Notes

### Reusable Existing Code

- **Hex utilities** (`/home/kcheung/code/catan/src/catan_board/utils/hex.cljs`):
  - `axial-to-pixel` - Convert coordinates to pixel positions
  - `hex-vertices` - Calculate polygon vertices
  - `hex-center` - Get center coordinates
  - Direction constants (DIRECTION_N, DIRECTION_NE, etc.) for harbors

- **Harbor system** (`/home/kcheung/code/catan/src/catan_board/utils/harbors.cljs`):
  - `get-harbor-ratio` - Returns 2:1 or 3:1 trade ratio
  - `get-harbor-color` - Returns harbor color
  - Harbor position structure already matches needs

- **Hex rendering** (`/home/kcheung/code/catan/src/catan_board/views/hex.cljs`):
  - `hex-tile` component extends easily for new types
  - `resource-pattern` can add water pattern
  - `harbor-trapezoid` works as-is with new positions
  - `hex-grid` component orchestrates rendering

- **State management** (`/home/kcheung/code/catan/src/catan_board/events.cljs`, `/home/kcheung/code/catan/src/catan_board/db.cljs`):
  - Re-frame pattern established
  - Edit mode pattern can inform fog reveal interaction

### Key Design Decisions

1. **Scenario Configuration as Data**: Each scenario is pure EDN data, not hardcoded logic. This makes adding new scenarios straightforward.

2. **Fog State Separate from Board Config**: Fog reveal state is game state (changes during play), while scenario config is static.

3. **Manual Coordinate Editing**: Developer manually edits hex coordinates in scenario config using developer mode to view coordinates. No auto-calculation initially - this is simpler and more flexible.

4. **Reuse Existing Patterns**: Fog hexes use similar click handler pattern as edit mode. Water hexes reuse resource pattern system. Gold resource uses same pattern system as other resources.

5. **New Gold Resource Type**: `:gold` resource introduced for Seafarers scenarios, appears only in fog hexes. Requires new SVG pattern and rendering support.

6. **Minimal Testing During Development**: Each task group writes only 2-8 focused tests covering critical behaviors. Testing-engineer adds max 10 integration tests. Total expected: ~18-42 tests for entire feature.

7. **Backward Compatibility**: All changes maintain existing base game functionality. Scenario system defaults to `:base-game` which uses existing board generation.

### Future Extensibility

This architecture supports:
- **Additional Seafarers scenarios**: Add new config namespace + register in registry
- **Different grid patterns**: Use `generate-grid-from-pattern` with any pattern string
- **Scenario-specific mechanics**: Extend fog-state structure or add new state keys
- **Dynamic scenario loading**: Replace hardcoded configs with file loading
- **Scenario editor UI**: Build UI that modifies scenario config data structures
