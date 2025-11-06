# Task Breakdown: Custom Scenario Creation

## Overview
**Total Task Groups:** 5
**Estimated Complexity:** High (Major Feature)
**Assigned Roles:** database-engineer, ui-designer, api-engineer, testing-engineer

This task breakdown implements a complete custom scenario creation feature that enables users to design, save, and export Catan board scenarios through an interactive visual editor with comprehensive configuration options.

## Task List

### Task Group 1: Database Schema & Re-frame Foundation
**Assigned Implementer:** database-engineer
**Dependencies:** None
**Complexity:** Medium
**Estimated Effort:** 4-6 hours

#### Objective
Establish the core state management infrastructure for the custom scenario editor, including database schema, Re-frame events, and subscriptions.

#### Tasks

- [x] 1.0 Complete database layer and Re-frame foundation
  - [x] 1.1 Write 2-8 focused tests for core state management
    - Test editor mode toggle (enter/exit mode)
    - Test draft initialization with default values
    - Test hex selection mode switching
    - Test critical validation logic (resource count vs terrain hex count)
    - Skip exhaustive testing of all edge cases at this stage

  - [x] 1.2 Extend database schema in `/home/kcheung/code/catan/src/catan_board/db.cljs`
    - Add `:custom-scenario-editor-mode` boolean to `:ui` map (default: false)
    - Add `:editor-hex-selection-mode` keyword to `:ui` map (default: :terrain)
    - Add `:custom-scenario-draft` to `:ui` map (default: nil)
    - Reference existing UI state structure pattern from lines 16-24

  - [x] 1.3 Create scenario draft data structure
    - Define draft structure following existing scenario format (see base-game-4p.cljs)
    - Include fields: `:id`, `:name`, `:player-count`, `:grid-pattern`, `:hex-types`, `:harbors`
    - Include `:face-up-distribution` with `:resources`, `:number-tokens`, `:assignment`
    - Include `:fog-distribution` (face-down) with same structure
    - Pre-populate with base game defaults from base-game-4p scenario
    - Example structure documented in spec.md lines 176-192

  - [x] 1.4 Create custom editor events namespace and register mode management events in `/home/kcheung/code/catan/src/catan_board/custom_editor/events.cljs`
    - Create new namespace: `catan-board.custom-editor.events`
    - Require dependencies: re-frame.core, catan-board.db, local-storage middleware
    - `:toggle-custom-scenario-editor` - Toggle editor mode, initialize draft with defaults on entry
    - `:reset-custom-scenario-draft` - Clear draft, reset to base game defaults
    - `:load-custom-scenario-for-editing` - Load existing scenario into draft (accept scenario-id parameter)
    - Use `reg-toggle-event` helper pattern for toggle (from catan-board.events lines 25-38)
    - Use `persist-db` middleware for state persistence (from catan-board.events line 12-14)

  - [x] 1.5 Register configuration update events in `/home/kcheung/code/catan/src/catan_board/custom_editor/events.cljs`
    - `:update-scenario-name` - Update draft `:name` field
    - `:update-scenario-player-count` - Update draft `:player-count` field
    - `:update-grid-pattern` - Update draft `:grid-pattern` field
    - `:update-face-up-resource` - Update specific resource count (accept resource-type and count)
    - `:update-face-down-resource` - Update specific face-down resource count
    - `:update-face-up-number` - Update specific number token count (accept number and count)
    - `:update-face-down-number` - Update specific face-down number count
    - Follow existing event pattern structure from events.cljs

  - [x] 1.6 Register hex assignment events in `/home/kcheung/code/catan/src/catan_board/custom_editor/events.cljs`
    - `:set-editor-hex-selection-mode` - Set current mode (`:terrain`, `:water`, `:fog`, `:village`, `:harbor`)
    - `:assign-hex-type` - Add coordinate to `:hex-types` map with selected type (accept [q r] coord)
    - `:clear-hex-assignment` - Remove coordinate from `:hex-types` map (accept [q r] coord)
    - `:clear-all-hex-assignments` - Clear entire `:hex-types` map and `:harbors` vector

  - [x] 1.7 Register harbor management events in `/home/kcheung/code/catan/src/catan_board/custom_editor/events.cljs`
    - `:place-harbor-at-hex` - Initiate harbor placement flow (accept [q r] coord)
    - `:set-harbor-direction` - Add harbor with direction to `:harbors` vector (accept coord, direction int)
    - `:assign-harbor-type` - Update harbor type (accept coord, direction, type keyword)
    - `:remove-harbor` - Remove harbor from `:harbors` vector (accept coord and direction)
    - Harbor structure: `{:land-hex [q r] :direction int :type keyword}`
    - Use direction constants from hex.cljs: `DIRECTION_N`, `DIRECTION_NE`, etc. (hex.cljs lines 12-18)

  - [x] 1.8 Implement validation logic
    - Create validation function that checks scenario completeness
    - Validation rules:
      - Scenario name not empty
      - Player count is positive integer (2-6 range)
      - Grid pattern is valid (hyphen-separated integers)
      - Count terrain hexes from `:hex-types` (exclude :water, :fog)
      - Sum of face-up resources equals terrain hex count
      - Sum of face-up number tokens equals terrain hex count (or terrain minus desert count)
    - Return map of validation errors with descriptive messages
    - Reference validation rules from spec.md lines 262-291

  - [x] 1.9 Register scenario persistence events in `/home/kcheung/code/catan/src/catan_board/custom_editor/events.cljs`
    - `:save-custom-scenario` - Validate draft, generate ID from name, save to local storage
    - Generate ID by converting name to kebab-case (e.g., "My Custom Map" -> :my-custom-map)
    - Handle duplicate IDs by appending number (e.g., :my-custom-map-2)
    - Use `assoc-to-local-storage-array!` with key `:custom-scenarios`
    - Reference local-storage.cljs example (lines 97-119)
    - `:export-custom-scenario` - Convert draft to EDN string for export (copy to clipboard or download)

  - [x] 1.10 Create custom editor subscriptions namespace in `/home/kcheung/code/catan/src/catan_board/custom_editor/subs.cljs`
    - Create new namespace: `catan-board.custom-editor.subs`
    - Require dependencies: re-frame.core
    - `:custom-scenario-editor-mode?` - Subscribe to editor mode boolean
    - `:custom-scenario-draft` - Subscribe to full draft map
    - `:editor-hex-selection-mode` - Subscribe to current hex type selection mode
    - `:custom-scenario-validation-errors` - Derived subscription computing validation errors
    - `:custom-scenarios-list` - Subscribe to list of saved custom scenarios from local storage
    - Use existing subscription pattern from catan-board.subs

  - [x] 1.11 Ensure database layer tests pass
    - Run ONLY the 2-8 tests written in 1.1
    - Verify event handlers update state correctly
    - Verify subscriptions return expected values
    - Verify validation logic catches invalid configurations
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 1.1 pass
- Editor mode can be toggled on/off
- Draft initializes with base game defaults
- All configuration update events work correctly
- Hex assignment and harbor placement events update draft properly
- Validation function correctly identifies invalid scenarios
- Save event persists to local storage under `:custom-scenarios` key
- Export event generates EDN string representation
- All subscriptions return correct data from app-db

**Files to Modify:**
- `/home/kcheung/code/catan/src/catan_board/db.cljs` (schema extension)
- `/home/kcheung/code/catan/src/catan_board/custom_editor/events.cljs` (custom editor event handlers)
- `/home/kcheung/code/catan/src/catan_board/custom_editor/subs.cljs` (custom editor subscriptions)

**Integration Points:**
- Local storage middleware (`local-storage.cljs`)
- Scenario registry (`registry.cljs`)
- Hex utilities (`utils/hex.cljs`)

---

### Task Group 2: Custom Scenario Editor UI - Sidebar Form
**Assigned Implementer:** ui-designer
**Dependencies:** Task Group 1
**Complexity:** High
**Estimated Effort:** 6-8 hours

#### Objective
Build the comprehensive sidebar editor form with all configuration inputs, following existing sidebar patterns and styling.

#### Tasks

- [ ] 2.0 Complete editor sidebar UI
  - [ ] 2.1 Write 2-8 focused tests for sidebar UI components
    - Test editor mode toggle button renders
    - Test sidebar displays editor form when mode is active
    - Test metadata inputs update draft state
    - Test resource distribution inputs update draft state
    - Test validation errors display correctly
    - Skip exhaustive testing of all form interactions

  - [ ] 2.2 Add editor toggle button in `/home/kcheung/code/catan/src/catan_board/views.cljs`
    - Add "Custom Scenario Editor" toggle in sidebar after existing control sections
    - Use existing toggle pattern from views.cljs (lines 62-68, 70-76)
    - Toggle should dispatch `:toggle-custom-scenario-editor` event
    - Button text: "Custom Scenario Editor" with checkbox
    - Place in new control section after "Board Edit" section

  - [ ] 2.3 Create conditional editor form rendering
    - When `:custom-scenario-editor-mode?` is true, replace normal sidebar content with editor
    - Use subscription `@(rf/subscribe [:custom-scenario-editor-mode?])`
    - Editor form should be scrollable container with all sections visible
    - Follow existing sidebar structure pattern (views.cljs lines 44-123)

  - [ ] 2.4 Build scenario metadata section
    - Section heading: "Scenario Metadata"
    - Text input for scenario name:
      - Label: "Scenario Name"
      - Placeholder: "My Custom Scenario"
      - Value bound to draft `:name`
      - On-change dispatches `:update-scenario-name` with new value
    - Number input for player count:
      - Label: "Player Count"
      - Min: 2, Max: 6, Default: 4
      - Value bound to draft `:player-count`
      - On-change dispatches `:update-scenario-player-count` with new value
    - Use existing form input styling from sidebar

  - [ ] 2.5 Build grid pattern configuration section
    - Section heading: "Grid Pattern"
    - Text input for grid pattern:
      - Label: "Grid Pattern (hyphen-separated rows)"
      - Placeholder: "3-4-5-4-3"
      - Value bound to draft `:grid-pattern`
      - On-change dispatches `:update-grid-pattern` with new value
    - Help text: "Example: 3-4-5-4-3 creates standard base game layout"
    - Reference help text pattern from views.cljs (lines 68, 76)

  - [ ] 2.6 Build face-up resource distribution section
    - Section heading: "Face-Up Resources"
    - Create input field for each resource type:
      - Wood, Brick, Sheep, Wheat, Ore, Desert, Gold, Water
      - Each with label and number input (min: 0)
      - Value bound to draft `:face-up-distribution` -> `:resources` -> resource-type
      - On-change dispatches `:update-face-up-resource` with resource-type and count
    - Display total count below inputs: "Total: X resources"
    - Use grid or flex layout for compact display

  - [ ] 2.7 Build face-down resource distribution section
    - Section heading: "Face-Down Resources (Fog)"
    - Same structure as face-up section
    - Value bound to draft `:fog-distribution` -> `:resources` -> resource-type
    - On-change dispatches `:update-face-down-resource` with resource-type and count
    - Help text: "Used for fog reveal mechanics"

  - [ ] 2.8 Build face-up number token distribution section
    - Section heading: "Face-Up Number Tokens"
    - Create input field for each number (2-12, excluding 7):
      - Numbers: 2, 3, 4, 5, 6, 8, 9, 10, 11, 12
      - Each with label and number input (min: 0)
      - Value bound to draft `:face-up-distribution` -> `:number-tokens` -> number
      - On-change dispatches `:update-face-up-number` with number and count
    - Display total count below inputs: "Total: X tokens"
    - Use grid or flex layout for compact display

  - [ ] 2.9 Build face-down number token distribution section
    - Section heading: "Face-Down Number Tokens (Fog)"
    - Same structure as face-up tokens section
    - Value bound to draft `:fog-distribution` -> `:number-tokens` -> number
    - On-change dispatches `:update-face-down-number` with number and count

  - [ ] 2.10 Build hex type selection section
    - Section heading: "Hex Type Selection"
    - Radio button group or dropdown for hex type modes:
      - Options: "Terrain", "Water", "Fog", "Village", "Harbor"
      - Values: `:terrain`, `:water`, `:fog`, `:village`, `:harbor`
      - Bound to subscription `:editor-hex-selection-mode`
      - On-change dispatches `:set-editor-hex-selection-mode` with selected mode
    - Help text: "Click on board hexes to assign selected type"
    - Highlight currently selected mode visually

  - [ ] 2.11 Build scenario management section
    - Section heading: "Manage Scenarios"
    - Dropdown/select to load existing custom scenario:
      - Label: "Load Existing Scenario"
      - Options from `:custom-scenarios-list` subscription
      - On-change shows warning if draft has unsaved changes
      - Dispatches `:load-custom-scenario-for-editing` with scenario-id
    - "Load" button next to dropdown

  - [ ] 2.12 Build action buttons section
    - Section heading: "Actions"
    - "Save Scenario" button:
      - Dispatches `:save-custom-scenario` on click
      - Disabled if validation errors exist (check `:custom-scenario-validation-errors` subscription)
      - Use `.btn-primary` class (views.cljs line 59)
      - Show "Saved!" confirmation briefly after successful save
    - "Export Scenario" button:
      - Dispatches `:export-custom-scenario` on click
      - Use `.btn-primary` class
    - "Clear All" button:
      - Dispatches `:clear-all-hex-assignments` on click
      - Use `.btn-primary` class
      - Show confirmation dialog: "Clear all hex assignments?"

  - [ ] 2.13 Build validation error display
    - Subscribe to `:custom-scenario-validation-errors`
    - Display errors in red/warning color near relevant sections
    - Show errors above action buttons as summary
    - Example errors:
      - "Scenario name is required"
      - "Resource count (X) doesn't match terrain hexes (Y)"
      - "Number token count (X) doesn't match terrain hexes (Y)"
    - Reference validation messages from spec.md lines 286-291

  - [ ] 2.14 Apply consistent styling
    - Match existing sidebar styling from views.cljs
    - Use existing CSS classes: `.control-section`, `.btn-primary`, `.help-text`, `.toggle-container`
    - Ensure form is scrollable when content exceeds viewport
    - Use consistent spacing and typography
    - Test responsive behavior at different viewport sizes

  - [ ] 2.15 Ensure UI component tests pass
    - Run ONLY the 2-8 tests written in 2.1
    - Verify editor toggle works
    - Verify form displays when editor mode is active
    - Verify inputs dispatch correct events
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 2.1 pass
- Editor toggle button appears in sidebar
- Editor form displays when mode is active
- All metadata, distribution, and configuration inputs work correctly
- Hex type selection updates correctly
- Action buttons dispatch appropriate events
- Validation errors display clearly
- Save button is disabled when validation fails
- Form is scrollable and matches existing sidebar styling
- Load scenario dropdown shows all custom scenarios

**Files to Modify:**
- `/home/kcheung/code/catan/src/catan_board/views.cljs` (main sidebar editor UI)

**Reusable Patterns:**
- Toggle pattern (lines 62-68, 70-76)
- Button pattern (line 59)
- Help text pattern (lines 68, 76)
- Sidebar structure (lines 44-123)

---

### Task Group 3: Interactive Board Editing - Hex & Harbor Placement
**Assigned Implementer:** api-engineer
**Dependencies:** Task Groups 1, 2
**Complexity:** High
**Estimated Effort:** 6-8 hours

#### Objective
Implement interactive hex clicking, type assignment, harbor placement workflow, and real-time board updates in editor mode.

#### Tasks

- [ ] 3.0 Complete interactive board editing
  - [ ] 3.1 Write 2-8 focused tests for board interactions
    - Test hex click assigns type to coordinate
    - Test harbor placement shows directional selector
    - Test harbor direction selection adds harbor to draft
    - Test clear button removes hex assignment
    - Test harbor type assignment updates harbor in draft
    - Skip exhaustive testing of all interaction scenarios

  - [ ] 3.2 Modify hex click handler in `/home/kcheung/code/catan/src/catan_board/views/hex.cljs`
    - Add conditional logic: if editor mode is active, handle differently
    - Check subscription `:custom-scenario-editor-mode?`
    - When editor mode is active and hex is clicked:
      - Get current `:editor-hex-selection-mode` from subscription
      - If mode is `:terrain`, `:water`, `:fog`, or `:village`:
        - Dispatch `:assign-hex-type` with coordinate [q r] and type
      - If mode is `:harbor`:
        - Dispatch `:place-harbor-at-hex` with coordinate [q r]
    - Use existing click handler pattern from hex.cljs (lines 172-175)
    - Prevent event propagation with `.stopPropagation`

  - [ ] 3.3 Implement hex type label display
    - When editor mode is active, display hex type as text label in center of hex
    - Check if coordinate exists in draft `:hex-types` map
    - Display type name: "terrain", "water", "fog", "village"
    - Use SVG text element centered in hex
    - Font size: 12-14px, centered, bold
    - Color: black or dark gray for visibility

  - [ ] 3.4 Add clear button overlay on assigned hexes
    - When hex has type assignment in editor mode, show "X" button in corner
    - Position button in top-right area of hex using SVG positioning
    - Button should be small circle with "×" text inside
    - On click, dispatch `:clear-hex-assignment` with coordinate [q r]
    - Use `.stopPropagation` to prevent hex click handler from triggering
    - Style: semi-transparent background, visible but not obtrusive

  - [ ] 3.5 Implement harbor directional selector
    - When `:place-harbor-at-hex` event is dispatched, update UI state to show directional selector
    - Add UI state key `:harbor-placement-coord` to track which hex is in placement mode
    - Around selected hex, render 6 clickable directional areas (one for each direction)
    - Use existing hex neighbor logic from hex.cljs `hex-neighbors` function
    - Directional areas should be positioned at:
      - North (direction 0)
      - North-East (direction 1)
      - South-East (direction 2)
      - South (direction 3)
      - South-West (direction 4)
      - North-West (direction 5)
    - Reference direction constants from hex.cljs lines 12-18
    - Each area: small clickable trapezoid or triangle pointing inward
    - On click, dispatch `:set-harbor-direction` with coordinate and direction int

  - [ ] 3.6 Implement harbor rendering in editor mode
    - Use existing `harbor-trapezoid` component from hex.cljs (lines 287-398)
    - Render harbors from draft `:harbors` vector
    - For each harbor: `{:land-hex [q r] :direction int :type keyword}`
    - If harbor type is not assigned (or is `:generic`), show "?" in contents area
    - Otherwise show resource icon as normal
    - Harbor graphics should match existing game harbor appearance

  - [ ] 3.7 Add harbor type assignment click handler
    - When harbor is clicked in editor mode, cycle through harbor types
    - Types: `:generic`, `:wood`, `:brick`, `:wheat`, `:sheep`, `:ore`
    - Dispatch `:assign-harbor-type` with land-hex coord, direction, and new type
    - Visual feedback: briefly highlight harbor when type changes

  - [ ] 3.8 Add harbor removal functionality
    - Add small "X" button on each harbor in editor mode
    - Position in corner of harbor trapezoid
    - On click, dispatch `:remove-harbor` with land-hex coord and direction
    - Use `.stopPropagation` to prevent other click handlers

  - [ ] 3.9 Implement real-time board updates
    - Subscribe to `:custom-scenario-draft` to get current state
    - When draft `:grid-pattern` changes, regenerate empty hex grid
    - Use `generate-grid-from-pattern` from hex.cljs
    - Display empty hexes for user to click and assign
    - Update hex displays immediately when `:hex-types` map changes
    - Update harbor displays immediately when `:harbors` vector changes

  - [ ] 3.10 Handle edge cases
    - Clicking on already-assigned hex: allow re-assignment (update type)
    - Clicking outside board: no action (don't crash)
    - Harbor placement on hex with existing harbor in same direction: show warning or prevent
    - Multiple harbors on same hex but different directions: allow (this is valid)
    - Switching hex selection mode: clear harbor placement state if active

  - [ ] 3.11 Ensure interaction tests pass
    - Run ONLY the 2-8 tests written in 3.1
    - Verify hex clicks assign types correctly
    - Verify harbor placement workflow works end-to-end
    - Verify clear buttons remove assignments
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 3.1 pass
- Clicking on hex in editor mode assigns selected type
- Hex type displays as text label on assigned hexes
- Clear "X" button appears on assigned hexes and removes assignment
- Harbor placement shows 6 directional selection areas
- Clicking direction creates harbor with that orientation
- Harbors display using existing graphics with "?" for unassigned types
- Clicking harbor cycles through harbor types
- Harbor "X" button removes harbor
- Board updates in real-time as draft changes
- All interactions feel smooth and responsive

**Files to Modify:**
- `/home/kcheung/code/catan/src/catan_board/views/hex.cljs` (hex click handlers, hex rendering)

**Reusable Components:**
- `harbor-trapezoid` component (lines 287-398)
- Hex click handler pattern (lines 172-175)
- Direction constants (lines 12-18)
- `generate-grid-from-pattern` function

---

### Task Group 4: Integration & Scenario Loading
**Assigned Implementer:** api-engineer
**Dependencies:** Task Groups 1, 2, 3
**Complexity:** Medium
**Estimated Effort:** 3-4 hours

#### Objective
Ensure custom scenarios integrate seamlessly with existing scenario registry and board generation systems, and implement scenario loading/editing workflow.

#### Tasks

- [ ] 4.0 Complete integration and scenario loading
  - [ ] 4.1 Write 2-8 focused tests for integration
    - Test custom scenario appears in scenario dropdown
    - Test loading custom scenario generates board correctly
    - Test loading scenario for editing populates draft
    - Test unsaved changes warning when loading different scenario
    - Test saved scenario persists across page reload
    - Skip exhaustive integration testing

  - [ ] 4.2 Verify scenario registry integration
    - Confirm `get-scenario` in registry.cljs checks local storage (already implemented, line 32)
    - Confirm `list-scenarios` concatenates custom scenarios (already implemented, line 48)
    - Test that newly saved custom scenario appears in scenario selector dropdown
    - No code changes should be needed - verify existing integration works
    - Reference registry.cljs lines 23-48

  - [ ] 4.3 Test board generation with custom scenarios
    - Verify custom scenarios work with existing board generator
    - Test with scenario containing `:hex-types` map (fog islands pattern)
    - Test with scenario containing face-up and face-down distributions
    - Test with harbors in various directions
    - Verify board generation event `:generate-board` handles custom scenarios
    - Reference board generation pattern in events.cljs lines 105-111

  - [ ] 4.4 Implement load scenario for editing workflow
    - When user selects scenario from "Load Existing" dropdown in editor
    - Check if current draft has unsaved changes (compare to last saved state)
    - If unsaved changes exist, show browser confirm dialog:
      - Message: "You have unsaved changes. Loading a different scenario will discard them. Continue?"
      - If user confirms, proceed; otherwise cancel
    - Dispatch `:load-custom-scenario-for-editing` with selected scenario-id
    - Event handler should:
      - Load scenario config from local storage
      - Populate draft with all scenario fields
      - Update editor UI to reflect loaded scenario

  - [ ] 4.5 Implement export functionality
    - `:export-custom-scenario` event should convert draft to EDN string
    - Use ClojureScript `pr-str` to serialize draft map
    - Copy to clipboard using browser Clipboard API:
      - `(.writeText js/navigator.clipboard edn-string)`
    - Show success notification: "Scenario copied to clipboard!"
    - Alternatively: trigger download as .edn file using blob/download link

  - [ ] 4.6 Test local storage persistence
    - Save custom scenario and verify it persists in localStorage
    - Reload page and verify scenario appears in dropdown
    - Load scenario and verify all fields are correctly restored
    - Verify multiple custom scenarios can be saved without conflicts
    - Reference local storage example in local-storage.cljs lines 97-119

  - [ ] 4.7 Test tournament mode and random harbor mode compatibility
    - Verify custom scenarios work with tournament mode toggle
    - Verify custom scenarios work with random harbor mode toggle
    - Test board generation with both modes active
    - Ensure no conflicts or crashes

  - [ ] 4.8 Ensure integration tests pass
    - Run ONLY the 2-8 tests written in 4.1
    - Verify custom scenarios appear in dropdown
    - Verify board generation works with custom scenarios
    - Verify load for editing workflow works correctly
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-8 tests written in 4.1 pass
- Saved custom scenarios automatically appear in scenario selector dropdown
- Custom scenarios generate boards correctly with existing board generator
- Loading scenario for editing populates all draft fields correctly
- Unsaved changes warning prevents accidental data loss
- Export copies scenario EDN to clipboard successfully
- Custom scenarios persist across page reloads
- Custom scenarios work with tournament mode and random harbor mode
- Multiple custom scenarios can coexist without conflicts

**Files to Modify:**
- `/home/kcheung/code/catan/src/catan_board/custom_editor/events.cljs` (export logic, load for editing)
- No changes needed to `/home/kcheung/code/catan/src/catan_board/scenarios/registry.cljs` (already integrated)

**Integration Points:**
- Scenario registry (`registry.cljs`) - no changes needed
- Board generator (`utils/board-generator.cljs`) - verify compatibility
- Local storage (`middleware/local-storage.cljs`) - use existing functions

---

### Task Group 5: Testing, Validation & Polish
**Assigned Implementer:** testing-engineer
**Dependencies:** Task Groups 1-4
**Complexity:** Medium
**Estimated Effort:** 4-5 hours

#### Objective
Review all tests from previous task groups, identify critical gaps, and add strategic end-to-end tests focused on complete user workflows for this feature.

#### Tasks

- [ ] 5.0 Review existing tests and fill critical gaps only
  - [ ] 5.1 Review tests from Task Groups 1-4
    - Review the 2-8 tests written by database-engineer (Task 1.1)
    - Review the 2-8 tests written by ui-designer (Task 2.1)
    - Review the 2-8 tests written by api-engineer (Tasks 3.1 and 4.1)
    - Total existing tests: approximately 8-24 tests
    - Document what workflows are already covered

  - [ ] 5.2 Analyze test coverage gaps for custom scenario creation feature only
    - Identify critical user workflows lacking coverage:
      - End-to-end: Create scenario from scratch, assign hexes, save, reload page, load scenario
      - End-to-end: Edit existing scenario, modify hexes, save updates
      - End-to-end: Place harbors with directions, assign types, verify rendering
      - Validation workflow: Attempt to save invalid scenario, verify error messages
      - Export workflow: Export scenario, verify EDN format is valid
    - Focus ONLY on gaps related to custom scenario creation spec
    - Do NOT assess entire application test coverage
    - Prioritize end-to-end workflows over unit test gaps

  - [ ] 5.3 Write up to 10 additional strategic tests maximum
    - Add maximum of 10 new tests to fill identified critical gaps
    - Focus on integration points and complete user workflows:
      - Test 1: Complete scenario creation workflow (enter editor → configure → assign hexes → save → verify in dropdown)
      - Test 2: Load scenario for editing workflow (load → modify → save → reload page → verify changes)
      - Test 3: Harbor placement complete workflow (select harbor mode → click hex → select direction → assign type → verify rendering)
      - Test 4: Validation blocking save workflow (create invalid scenario → attempt save → verify error display → fix errors → save succeeds)
      - Test 5: Export scenario workflow (create scenario → export → verify EDN is valid ClojureScript map)
      - Test 6-10: Additional tests ONLY if critical gaps remain
    - Do NOT write comprehensive coverage for all scenarios
    - Skip edge cases unless business-critical
    - Skip performance tests (assume reasonable scenario sizes)
    - Skip accessibility tests unless blocking issue found

  - [ ] 5.4 Test validation error messaging
    - Verify validation errors display clearly and accurately
    - Test each validation rule:
      - Empty scenario name shows error
      - Invalid player count shows error
      - Invalid grid pattern shows error
      - Resource count mismatch shows specific error with counts
      - Number token count mismatch shows specific error with counts
    - Verify save button is disabled when validation fails
    - Verify errors clear when issues are fixed

  - [ ] 5.5 Test UI polish and user experience
    - Verify all buttons have appropriate hover states
    - Verify form inputs have proper focus states
    - Verify scrolling works smoothly in sidebar
    - Verify hex labels are readable and properly positioned
    - Verify harbor graphics render correctly in all directions
    - Verify clear buttons are visible and clickable
    - Verify loading existing scenario updates all form fields

  - [ ] 5.6 Test edge cases and error handling
    - Test very long scenario name (50+ characters)
    - Test very large grid pattern (7 rows, 8 hexes per row)
    - Test assigning all hexes to water (0 terrain hexes)
    - Test scenario with 0 face-up resources (all face-down)
    - Test scenario with multiple harbors on same hex (different directions)
    - Test rapid clicking on hexes (verify state stays consistent)
    - Test switching selection modes during harbor placement
    - Test closing editor with unsaved changes then reopening

  - [ ] 5.7 Test cross-browser compatibility (if applicable)
    - Test local storage works in Chrome, Firefox, Safari
    - Test clipboard API works (or gracefully degrades)
    - Test SVG rendering for hex labels and buttons
    - Document any browser-specific issues

  - [ ] 5.8 Run feature-specific tests only
    - Run ONLY tests related to custom scenario creation feature
    - Tests from tasks 1.1, 2.1, 3.1, 4.1, and 5.3
    - Expected total: approximately 18-34 tests maximum
    - Do NOT run the entire application test suite
    - Verify all critical workflows pass
    - Fix any failing tests before marking task complete

  - [ ] 5.9 Document testing gaps and future improvements
    - Document any identified gaps that are out of scope for v1
    - Note any performance concerns with large scenarios
    - Note any accessibility improvements for future consideration
    - Document any browser compatibility issues
    - Create list of potential enhancements for v2

**Acceptance Criteria:**
- All feature-specific tests pass (approximately 18-34 tests total)
- Critical user workflows for custom scenario creation are covered
- No more than 10 additional tests added by testing-engineer
- Validation error messaging is clear and accurate
- UI is polished and user-friendly
- Edge cases are handled gracefully without crashes
- Testing focused exclusively on custom scenario creation feature
- Documentation of gaps and future improvements provided

**Files to Modify:**
- Test files for database layer (events, subscriptions)
- Test files for UI components (views)
- Test files for integration (end-to-end workflows)

**Test Tooling:**
- Use existing ClojureScript test framework
- Follow existing test patterns from codebase
- Focus on functional correctness, not exhaustive coverage

---

## Execution Order & Dependencies

### Recommended Implementation Sequence

1. **Phase 1: Foundation** (Task Group 1)
   - Establish database schema and Re-frame events/subscriptions
   - Critical for all other tasks
   - Estimated: 4-6 hours

2. **Phase 2: UI Construction** (Task Group 2)
   - Build editor sidebar form with all configuration inputs
   - Depends on Task Group 1 (needs events and subscriptions)
   - Estimated: 6-8 hours

3. **Phase 3: Interactivity** (Task Group 3)
   - Implement hex clicking, harbor placement, real-time updates
   - Depends on Task Groups 1 and 2 (needs state management and UI)
   - Estimated: 6-8 hours

4. **Phase 4: Integration** (Task Group 4)
   - Connect to scenario registry, test board generation, implement export
   - Depends on Task Groups 1, 2, and 3 (needs complete feature)
   - Estimated: 3-4 hours

5. **Phase 5: Quality Assurance** (Task Group 5)
   - Review tests, fill gaps, validate workflows, polish UI
   - Depends on Task Groups 1-4 (needs working feature)
   - Estimated: 4-5 hours

### Total Estimated Effort
**23-31 hours** (approximately 3-4 full working days)

### Parallel Execution Opportunities
- Task Groups 2 and 3 can be worked on in parallel after Task Group 1 completes
- Task Group 3 (hex interactions) and Task Group 2 (sidebar UI) have minimal overlap
- Task Group 5 (testing) can begin partial work once Task Group 1 completes (writing tests for completed tasks)

---

## Risk Areas & Mitigation

### High Risk Areas

1. **State Management Complexity**
   - Risk: Draft state synchronization with UI and local storage
   - Mitigation: Use Re-frame's reactive subscriptions; test state updates thoroughly
   - Owner: database-engineer

2. **Harbor Placement UX**
   - Risk: Directional selector UI may be confusing or hard to use
   - Mitigation: Clear visual indicators; test with users; provide help text
   - Owner: api-engineer

3. **Validation Logic Completeness**
   - Risk: Missing edge cases in validation could allow invalid scenarios
   - Mitigation: Comprehensive validation testing; reference existing scenario formats
   - Owner: database-engineer, testing-engineer

4. **Local Storage Limits**
   - Risk: Browser local storage limits (~5MB) could be exceeded with many scenarios
   - Mitigation: Monitor storage usage; consider adding limit warnings; document limitation
   - Owner: api-engineer

5. **Board Generation Compatibility**
   - Risk: Custom scenarios may not work with existing board generator
   - Mitigation: Follow existing scenario format exactly; test with various configurations
   - Owner: api-engineer

### Medium Risk Areas

1. **Real-time UI Updates**
   - Risk: Performance issues with frequent re-renders as user configures
   - Mitigation: Optimize subscriptions; use React key props; test with large scenarios
   - Owner: ui-designer

2. **Unsaved Changes Warning**
   - Risk: Users may accidentally lose work
   - Mitigation: Implement clear warning dialog; test workflow thoroughly
   - Owner: api-engineer

3. **Export Functionality**
   - Risk: Clipboard API may not work in all browsers
   - Mitigation: Provide fallback to download file; test cross-browser
   - Owner: api-engineer

### Low Risk Areas

1. **Scenario Registry Integration**
   - Risk: Low - registry already supports custom scenarios from local storage
   - Verification needed: Confirm integration works as expected

2. **UI Styling Consistency**
   - Risk: Low - following existing patterns from views.cljs
   - Mitigation: Use existing CSS classes; reference sidebar structure

---

## Testing Strategy Summary

### Test Distribution by Task Group

- **Task Group 1 (database-engineer):** 2-8 tests
  - Focus: Event handlers, subscriptions, validation logic

- **Task Group 2 (ui-designer):** 2-8 tests
  - Focus: UI component rendering, form inputs, error display

- **Task Group 3 (api-engineer):** 2-8 tests
  - Focus: Hex click handlers, harbor placement, real-time updates

- **Task Group 4 (api-engineer):** 2-8 tests
  - Focus: Integration with registry, board generation, export

- **Task Group 5 (testing-engineer):** Up to 10 tests
  - Focus: End-to-end workflows, validation, edge cases

### Total Expected Tests
**Approximately 18-34 tests maximum** for this feature

### Testing Principles
- Write focused tests that cover critical behaviors
- Limit tests to 2-8 per task group during development
- Testing-engineer adds up to 10 strategic tests for workflow coverage
- Do NOT aim for exhaustive coverage
- Run only feature-specific tests during development
- Full test suite runs can happen after feature completion

---

## Success Metrics

### Functional Completeness
- [ ] User can enter Custom Scenario Editor mode
- [ ] User can configure scenario metadata (name, player count)
- [ ] User can define grid pattern and see empty hexes
- [ ] User can assign hex types by clicking
- [ ] User can place harbors with directional selection
- [ ] User can configure resource and number distributions
- [ ] User can save scenario to local storage
- [ ] Saved scenarios appear in scenario dropdown
- [ ] User can load and edit existing scenarios
- [ ] User can export scenario as EDN
- [ ] Validation prevents saving invalid scenarios
- [ ] Clear buttons remove individual assignments
- [ ] Clear All removes all assignments

### User Experience Quality
- [ ] Real-time board updates as user configures
- [ ] Clear visual feedback for all interactions
- [ ] Validation errors are clear and actionable
- [ ] No crashes or data loss during normal usage
- [ ] Performance remains smooth with typical scenario sizes
- [ ] UI matches existing sidebar styling and patterns

### Technical Quality
- [ ] All feature-specific tests pass (18-34 tests)
- [ ] Custom scenarios integrate with existing scenario registry
- [ ] Custom scenarios work with board generator
- [ ] Local storage persistence works across sessions
- [ ] Code follows existing ClojureScript patterns
- [ ] No breaking changes to existing functionality

---

## Reference Files

### Key Files to Study Before Implementation

**Database & Events:**
- `/home/kcheung/code/catan/src/catan_board/db.cljs` - Database schema
- `/home/kcheung/code/catan/src/catan_board/custom_editor/events.cljs` - Custom editor event handlers
- `/home/kcheung/code/catan/src/catan_board/custom_editor/subs.cljs` - Custom editor subscriptions

**UI Components:**
- `/home/kcheung/code/catan/src/catan_board/views.cljs` - Main UI and sidebar
- `/home/kcheung/code/catan/src/catan_board/views/hex.cljs` - Hex rendering and interactions

**Scenario Data:**
- `/home/kcheung/code/catan/src/catan_board/scenarios/base_game_4p.cljs` - Base game format
- `/home/kcheung/code/catan/src/catan_board/scenarios/fog_islands_4p.cljs` - Fog islands format with hex-types
- `/home/kcheung/code/catan/src/catan_board/scenarios/registry.cljs` - Scenario registry and lookup

**Utilities:**
- `/home/kcheung/code/catan/src/catan_board/utils/hex.cljs` - Hex coordinates and grid generation
- `/home/kcheung/code/catan/src/catan_board/middleware/local_storage.cljs` - Local storage functions

**Specification:**
- `/home/kcheung/code/catan/agent-os/specs/2025-11-06-custom-scenario-creation/spec.md` - Complete feature spec
- `/home/kcheung/code/catan/agent-os/specs/2025-11-06-custom-scenario-creation/planning/requirements.md` - User requirements

---

## Notes for Implementers

### For database-engineer (Task Group 1)
- Start by extending `db.cljs` with new UI state keys
- Follow existing event handler patterns from `events.cljs`
- Use `reg-toggle-event` helper for simple toggles
- Reference `persist-db` middleware for local storage persistence
- Validation function is critical - test thoroughly
- ID generation from scenario name should handle edge cases (duplicates, special characters)

### For ui-designer (Task Group 2)
- Follow existing sidebar structure from `views.cljs` closely
- Reuse CSS classes: `.control-section`, `.btn-primary`, `.help-text`, `.toggle-container`
- Form should be scrollable - test with long content
- Validation error display is critical for UX
- Pre-populate fields with base game defaults to reduce user effort
- Consider using grid or flex layout for resource/token inputs (8 resources + 10 numbers = 18+ inputs)

### For api-engineer (Task Groups 3 & 4)
- Hex click handler needs careful conditional logic for editor vs. normal mode
- Harbor directional selector is the most complex UI interaction - test thoroughly
- SVG text positioning for hex labels may need adjustment - reference hex size from `db.cljs` (line 7)
- Clipboard API for export may not work in all browsers - consider fallback
- Unsaved changes warning should use browser's native `confirm()` dialog
- Real-time updates should feel instant - optimize re-renders if needed

### For testing-engineer (Task Group 5)
- Focus on end-to-end workflows rather than isolated unit tests
- Validation error display is critical - test all error conditions
- Edge cases: very large scenarios, 0 terrain hexes, multiple harbors per hex
- Cross-browser testing may reveal local storage or clipboard API issues
- Document any gaps or future improvements for v2 consideration

---

## Future Enhancements (Out of Scope for v1)

These are explicitly out of scope but may be considered for future versions:

- EDN/JSON import functionality (currently export-only)
- Sharing scenarios between users (cloud storage)
- Scenario versioning and change history
- Undo/redo for individual changes
- Drag-and-drop hex placement
- Copy/duplicate scenario functionality
- Visual hex templates or presets
- Advanced validation (game balance, reachability)
- Tutorial or guided creation flow
- Mobile-specific touch gestures
- Keyboard shortcuts for hex placement
- Batch operations (e.g., fill all with terrain)
- Scenario preview before saving
- Scenario search or filtering
- Scenario tags or categories
- Multi-player collaborative editing
- Automatic scenario optimization
- Scenario testing/simulation mode
