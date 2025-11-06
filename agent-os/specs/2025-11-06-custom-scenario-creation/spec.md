# Specification: Custom Scenario Creation

## Goal
Enable users to create, edit, save, and export custom Catan board scenarios through an interactive visual editor with complete control over board layout, hex types, harbors, and resource/number distributions.

## User Stories
- As a Catan enthusiast, I want to create my own custom scenarios so that I can design unique board configurations for my game nights
- As a user, I want to click on hexes to assign types so that I can visually build my board layout interactively
- As a user, I want to place harbors with specific directions and types so that I can customize trading options
- As a user, I want to save my custom scenarios to local storage so that I can reuse them later
- As a user, I want to load and edit existing custom scenarios so that I can refine my designs
- As a user, I want to export my scenarios so that I can share configurations with others
- As a user, I want validation feedback so that I know when my scenario configuration is invalid

## Core Requirements

### Functional Requirements
- Toggle between normal mode and Custom Scenario Creation mode via sidebar button
- Configure scenario metadata: name and player count
- Define grid pattern using hyphen-separated row format (e.g., "3-4-5-4-3")
- Configure face-up resource distribution with individual count inputs for each resource type
- Configure face-down resource distribution (for fog/reveal mechanics)
- Configure face-up number token distribution for each number (2-12, excluding 7)
- Configure face-down number token distribution
- Select hex type mode: terrain, water, fog, village, or harbor
- Click on empty hexes to assign selected type
- Clear individual hexes via X button on each hex
- Clear all hexes via "Clear All" button in sidebar
- Place harbors with directional selection (6 clickable areas around hex)
- Assign harbor types by clicking on placed harbors
- Display hex types as text labels on the board
- Display harbors with existing harbor-trapezoid graphics, showing "?" for unassigned types
- Load existing custom scenarios into editor with unsaved work warning
- Validate configuration before saving (resource counts must match terrain hex counts)
- Save scenarios to local storage under `:custom-scenarios` key
- Export scenario configuration as EDN/map (no import in v1)
- Auto-generate scenario IDs from name using kebab-case conversion

### Non-Functional Requirements
- Real-time board updates as user configures
- Pre-populate resource/token distributions with base game defaults
- Validation must prevent saving invalid configurations
- Unsaved changes must NOT be auto-committed to local storage
- Custom scenarios must integrate seamlessly with existing scenario registry
- UI must follow existing sidebar styling and patterns
- Performance must remain smooth with typical scenario sizes (up to ~50 hexes)

## Visual Design
No mockups provided. Implementation will follow existing UI patterns:
- Sidebar layout matches existing control sections
- Single scrollable form with all fields visible (no tabs/accordions)
- Hex type labels displayed as text on hexes
- Harbor graphics use existing harbor-trapezoid component
- Unassigned harbors show "?" in contents area
- Clear/X buttons visible on assigned hexes
- Validation errors displayed near relevant fields

## Reusable Components

### Existing Code to Leverage

**Scenario Registry Integration:**
- File: `/home/kcheung/code/catan/src/catan_board/scenarios/registry.cljs`
- Function `get-scenario` already checks local storage for custom scenarios
- Function `list-scenarios` concatenates built-in and custom scenarios
- Custom scenarios stored under `:custom-scenarios` key
- New scenarios will automatically appear in scenario selector

**Local Storage Middleware:**
- File: `/home/kcheung/code/catan/src/catan_board/middleware/local_storage.cljs`
- Use `assoc-to-local-storage-array!` function to save custom scenarios
- Use `load-from-local-storage` function with `:custom-scenarios` key
- Already has example code (lines 97-119) showing custom scenario structure

**Scenario Data Structure:**
- Files: `base_game_4p.cljs`, `fog_islands_4p.cljs`, `cloth_for_catan.cljs`
- Follow existing scenario config format with `:id`, `:name`, `:player-count`, `:grid-pattern`
- Base game uses `:face-up-distribution` with `:resources`, `:number-tokens`, `:assignment`
- Fog Islands uses `:hex-types` map for water/fog hex coordinates
- Fog Islands uses `:fog-distribution` for face-down resources/tokens
- Harbor format: `{:land-hex [q r] :direction int :type keyword}`

**Grid Generation:**
- File: `/home/kcheung/code/catan/src/catan_board/utils/hex.cljs`
- Function `generate-grid-from-pattern` generates hex coordinates from pattern string
- Use hex direction constants: `DIRECTION_N`, `DIRECTION_NE`, etc. (lines 12-18)
- Function `hex-neighbors` for finding adjacent hexes (useful for harbor placement)

**Harbor Rendering:**
- File: `/home/kcheung/code/catan/src/catan_board/views/hex.cljs`
- Function `harbor-trapezoid` (lines 287-398) renders harbors using existing graphics
- Harbors display resource icons or "?" for generic/unassigned types
- Direction-based positioning already implemented

**Sidebar UI Pattern:**
- File: `/home/kcheung/code/catan/src/catan_board/views.cljs`
- Existing sidebar structure (lines 44-123) with control sections
- Toggle pattern with `.toggle-container`, `.toggle-label`, checkbox input
- Button pattern with `.btn-primary` class
- Help text with `.help-text` class

**Re-frame Event Patterns:**
- File: `/home/kcheung/code/catan/src/catan_board/events.cljs`
- Use `rf/reg-event-db` for state mutations
- Use `persist-db` middleware for persisting to local storage (line 12-14)
- Follow toggle event pattern using `reg-toggle-event` helper (lines 25-38)
- Follow board generation pattern in `:generate-board` event (lines 105-111)

**Hex Click Handler Pattern:**
- File: `/home/kcheung/code/catan/src/catan_board/views/hex.cljs`
- Fog reveal click handler (lines 172-175) shows hex click pattern
- Token swap click handler for interactive hex selection
- Use `:on-click` with `(fn [e] (.stopPropagation e) (rf/dispatch [...]))`

### New Components Required

**Custom Scenario Editor State:**
- Need new UI state key `:custom-scenario-editor-mode` (boolean)
- Need new UI state key `:custom-scenario-draft` (stores working scenario config)
- Cannot reuse existing state - this is completely new editor functionality
- Draft must track: metadata, grid pattern, hex assignments, harbor placements, distributions

**Editor Mode Toggle:**
- Need new event `:toggle-custom-scenario-editor` to enter/exit editor mode
- Must initialize draft with default values when entering editor mode
- Must warn user about unsaved changes when loading scenario

**Hex Assignment Events:**
- Need new event `:set-editor-hex-type-mode` to change current selection mode (terrain/water/fog/village/harbor)
- Need new event `:assign-hex-type` for clicking hex to assign type
- Need new event `:clear-hex-assignment` for clearing individual hex
- Need new event `:clear-all-hex-assignments` for clearing entire board

**Harbor Placement Events:**
- Need new event `:place-harbor` for initial harbor placement (shows direction selector)
- Need new event `:set-harbor-direction` for selecting harbor direction
- Need new event `:set-harbor-type` for assigning/changing harbor type
- Need new event `:remove-harbor` for deleting harbor

**Configuration Events:**
- Need new event `:update-scenario-metadata` for name/player-count changes
- Need new event `:update-grid-pattern` for pattern string changes
- Need new event `:update-resource-distribution` for resource count changes
- Need new event `:update-number-distribution` for token count changes

**Scenario Management Events:**
- Need new event `:load-custom-scenario-for-editing` with unsaved warning
- Need new event `:save-custom-scenario` with validation
- Need new event `:export-custom-scenario` for exporting config

**Validation Functions:**
- Need function to count terrain hexes from hex assignments
- Need function to validate resource distribution totals match terrain count
- Need function to validate number token totals match terrain count
- Need function to check scenario name is non-empty

**Editor UI Components:**
- Need scrollable sidebar form with metadata, grid, distributions, hex selection sections
- Need individual resource/token input fields with labels
- Need hex type selector (radio buttons or dropdown)
- Need scenario loader dropdown/list
- Need validation error display areas

## Technical Approach

### Database Schema
Add to `db.cljs` default-db:
```clojure
{:ui {:custom-scenario-editor-mode false
      :editor-hex-selection-mode :terrain  ; :terrain, :water, :fog, :village, :harbor
      :custom-scenario-draft nil  ; Working copy of scenario being created/edited
      ;; ... existing UI state
      }}
```

Custom scenario draft structure:
```clojure
{:id            nil  ; Generated on save
 :name          ""
 :player-count  4
 :grid-pattern  "3-4-5-4-3"
 :hex-types     {}  ; {[q r] :terrain, [q r] :water, ...}
 :harbors       []  ; [{:land-hex [q r] :direction int :type keyword}]
 :face-up-distribution
 {:resources     {:water 0 :desert 1 :gold 0 :wheat 4 :brick 3 :ore 3 :sheep 4 :wood 4}
  :number-tokens {2 1, 3 2, 4 2, 5 2, 6 2, 8 2, 9 2, 10 2, 11 2, 12 1}
  :assignment    :random}
 :face-down-distribution
 {:resources     {:water 0 :desert 0 :gold 0 :wheat 0 :brick 0 :ore 0 :sheep 0 :wood 0}
  :number-tokens {2 0, 3 0, 4 0, 5 0, 6 0, 8 0, 9 0, 10 0, 11 0, 12 0}
  :assignment    :on-reveal}}
```

### Re-frame Events
Create new namespace: `src/catan_board/custom_editor/events.cljs`

This keeps custom scenario editor events separate from core board events.

**Mode Management:**
- `:toggle-custom-scenario-editor` - Toggle editor mode, initialize draft with defaults
- `:load-custom-scenario-for-editing` - Load existing scenario into draft (with warning)
- `:reset-custom-scenario-draft` - Clear draft and reset to defaults

**Hex Assignment:**
- `:set-editor-hex-selection-mode` - Set current mode (:terrain/:water/:fog/:village/:harbor)
- `:assign-hex-type` - Add hex coordinate to `:hex-types` map with selected type
- `:clear-hex-assignment` - Remove coordinate from `:hex-types` map
- `:clear-all-hex-assignments` - Clear entire `:hex-types` map and `:harbors` vector

**Harbor Management:**
- `:place-harbor-at-hex` - Record hex for harbor placement (UI shows direction selector)
- `:set-harbor-direction` - Add harbor to `:harbors` with land-hex, direction, type :generic
- `:assign-harbor-type` - Update harbor type at given coordinates
- `:remove-harbor` - Remove harbor from `:harbors` vector

**Configuration Updates:**
- `:update-scenario-name` - Update draft `:name` field
- `:update-scenario-player-count` - Update draft `:player-count` field
- `:update-grid-pattern` - Update draft `:grid-pattern` field, regenerate empty hexes
- `:update-face-up-resource` - Update specific resource count in face-up distribution
- `:update-face-down-resource` - Update specific resource count in face-down distribution
- `:update-face-up-number` - Update specific number token count in face-up distribution
- `:update-face-down-number` - Update specific number token count in face-down distribution

**Scenario Persistence:**
- `:save-custom-scenario` - Validate, generate ID, save to local storage via `assoc-to-local-storage-array!`
- `:export-custom-scenario` - Export draft as EDN string (download or copy to clipboard)

### Re-frame Subscriptions
Create new namespace: `src/catan_board/custom_editor/subs.cljs`

This keeps custom scenario editor subscriptions separate from core board subscriptions.

- `:custom-scenario-editor-mode?` - Subscribe to editor mode boolean
- `:custom-scenario-draft` - Subscribe to full draft
- `:editor-hex-selection-mode` - Subscribe to current hex type selection mode
- `:custom-scenario-validation-errors` - Derived subscription computing validation errors
- `:custom-scenarios-list` - Subscribe to list of saved custom scenarios for loading

### Frontend Components

**Modify `views.cljs`:**
- Add "Custom Scenario Editor" toggle button in sidebar (separate from other controls)
- When editor mode active, replace normal sidebar content with editor form
- Editor form sections (scrollable):
  1. Scenario Metadata: text input for name, number input for player count
  2. Grid Pattern: text input with example "3-4-5-4-3"
  3. Face-Up Resources: input fields for each resource type (wood, brick, sheep, wheat, ore, desert, gold)
  4. Face-Down Resources: same structure as face-up
  5. Face-Up Numbers: input fields for each number (2-12 excluding 7)
  6. Face-Down Numbers: same structure as face-up
  7. Hex Type Selection: radio buttons or dropdown for terrain/water/fog/village/harbor
  8. Load Existing: dropdown to select custom scenario, button to load
  9. Actions: Save button (disabled if validation fails), Export button, Clear All button
- Display validation errors below relevant sections

**Modify `views/hex.cljs`:**
- Add conditional rendering when editor mode is active
- Display hex type as text label in center of hex (instead of resource pattern)
- Add X button overlay on assigned hexes for clearing
- Add click handler to assign hex type based on selection mode
- For harbor mode: show 6 directional click areas around hex after initial click
- Update harbor rendering to show "?" for unassigned harbor types
- Add click handler on harbors to change type

### Validation Rules
Implement validation function that checks:

1. **Metadata Validation:**
   - Scenario name is not empty string
   - Player count is positive integer (2-6 typical range)

2. **Grid Pattern Validation:**
   - Pattern is hyphen-separated integers
   - Pattern is not empty

3. **Hex Count Validation:**
   - Count total hexes from grid pattern
   - Count terrain hexes from `:hex-types` map (exclude :water, :fog, :village)
   - Count assigned hexes matches expected hexes from grid pattern (optional warning)

4. **Resource Distribution Validation:**
   - Sum of face-up resources (excluding water/desert/gold) equals terrain hex count
   - OR if using desert: sum equals terrain hex count - 1 (desert has no token)
   - Face-down resources optional (for fog scenarios)

5. **Number Token Validation:**
   - Sum of face-up number tokens equals terrain hex count (or terrain - desert count)
   - Face-down tokens optional (for fog scenarios)

6. **Error Messages:**
   - "Scenario name is required"
   - "Player count must be between 2 and 6"
   - "Grid pattern is invalid (use format: 3,4,5,4,3)"
   - "Resource distribution mismatch: X terrain hexes, Y resources configured"
   - "Number token count mismatch: X terrain hexes, Y tokens configured"

### Local Storage Integration
Use existing `local-storage.cljs` functions:

**Saving Custom Scenario:**
```clojure
(assoc-to-local-storage-array!
  :custom-scenarios
  {scenario-id scenario-config})
```

**Loading Custom Scenarios:**
```clojure
(load-from-local-storage :custom-scenarios)
;; Returns map: {:scenario-id-1 {...} :scenario-id-2 {...}}
```

**ID Generation:**
- Convert scenario name to lowercase
- Replace spaces with hyphens
- Remove special characters
- Convert to keyword
- Example: "My Custom Map" -> `:my-custom-map`
- Handle duplicates by appending number: `:my-custom-map-2`

### Edge Cases and Constraints

**Edge Cases:**
- Loading scenario when draft has unsaved changes (show warning dialog)
- Saving scenario with same name as existing (overwrite with confirmation)
- Entering editor mode while board is being generated (disable or queue)
- Very large grid patterns (performance consideration, limit to reasonable size)
- Invalid grid pattern format (show error, prevent board generation)
- Clicking hex that's already assigned (allow re-assignment, update type)
- Placing harbor on hex that already has one (allow multiple harbors per hex in different directions)
- Removing harbor while in harbor placement flow (clear placement state)
- Negative or non-integer resource/token counts (validate input, show error)
- Exporting scenario with no name (use default name or require name first)

**Constraints:**
- Grid patterns limited to reasonable size (e.g., max 7 rows, max 8 hexes per row)
- Scenario names limited to reasonable length (e.g., 50 characters)
- Total custom scenarios capped by local storage limits (browser-dependent, ~5MB typical)
- No server-side validation or storage in v1
- Harbor directions limited to 6 standard directions (N, NE, SE, S, SW, NW)
- Harbor types limited to existing types: generic, wood, brick, wheat, sheep, ore
- Resource types limited to existing: water, desert, gold, wheat, brick, ore, sheep, wood

### Integration Points

**Scenario Registry (`registry.cljs`):**
- Custom scenarios already integrated via `get-scenario` and `list-scenarios`
- No code changes needed - scenarios automatically available once saved to local storage
- Dropdown in scenario selector will show custom scenarios

**Board Generator (`board-generator.cljs`):**
- Must support custom scenario format
- Should handle both base game format and fog islands format
- Must respect `:hex-types` map for pre-assigned hex positions
- Must respect `:harbors` vector for harbor placement

**Local Storage (`local-storage.cljs`):**
- Use existing `assoc-to-local-storage-array!` function
- Key: `:custom-scenarios`
- Value: Map of scenario-id to scenario-config

**Event Flow:**
1. User enters editor mode: `:toggle-custom-scenario-editor`
2. User configures scenario: multiple `:update-*` events
3. User assigns hexes: `:assign-hex-type` for each click
4. User places harbors: `:place-harbor-at-hex` then `:set-harbor-direction`
5. User validates: derived subscription `:custom-scenario-validation-errors`
6. User saves: `:save-custom-scenario` if validation passes
7. Scenario appears in registry: automatic via existing integration

## Out of Scope

**Explicitly Excluded from v1:**
- EDN/JSON import functionality (export only)
- Sharing scenarios between users (no cloud/server storage)
- Scenario versioning or change history
- Undo/redo for individual changes (only clear all)
- Drag-and-drop hex placement
- Copy/duplicate scenario functionality
- Visual hex templates or presets
- Advanced validation (game balance, reachability, fairness)
- Tutorial or guided creation flow
- Mobile-specific touch gestures (beyond standard tap)
- Keyboard shortcuts for hex placement
- Batch operations (e.g., fill all with terrain)
- Scenario preview before saving
- Scenario search or filtering
- Scenario tags or categories
- Multi-player collaborative editing
- Automatic scenario optimization
- Scenario testing/simulation mode

## Success Criteria

**Functional Success:**
- User can toggle into Custom Scenario Editor mode from sidebar
- User can create a complete valid scenario from scratch
- User can save scenario to local storage successfully
- Saved scenario appears in scenario selector dropdown
- User can load saved scenario into editor for modification
- User can export scenario configuration as EDN
- Validation prevents saving invalid configurations with clear error messages

**User Experience Success:**
- Real-time board updates as hexes are assigned
- Clear visual feedback for hex types (text labels)
- Harbors display correctly with direction and type
- Unsaved work warning prevents accidental data loss
- Pre-populated defaults make configuration faster
- Clear all button provides quick reset
- Individual hex clearing allows fine-tuned adjustments

**Technical Success:**
- No performance degradation with typical scenario sizes
- Custom scenarios integrate seamlessly with existing registry
- Local storage persistence works across browser sessions
- No data corruption or loss during save/load operations
- Validation logic is accurate and comprehensive
- Event handlers properly manage state without race conditions

**Integration Success:**
- Custom scenarios work with existing board generation
- Custom scenarios work with tournament mode toggle
- Custom scenarios work with fog reveal mechanics (if configured)
- Custom scenarios work with harbor randomization (if applicable)
- Custom scenarios work with all existing UI features (scale, landscape mode, etc.)
