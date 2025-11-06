# Spec Requirements: Custom Scenario Creation

## Initial Description

As a user, I'd like to create my own scenarios. I can:
1. Click on side bar toggle to enter custom scenario creation mode
2. Set up a custom scenario config, that will be cached in local storage
3. In a side bar to the right of the application, I can:
   1. Set up face up resource distribution and number token distribution
   2. Set up face down resource distribution and number token distribution
   3. Enter the grid pattern as with other scenarios, this should update the board with empty hexes for me to click on
   4. Select either hex type #{:water, :fog, :terrain, :village} or a harbor to add
4. When I click on a hex it should assign those coordinates in the scenario config with the selection I made in the sidebar. If I chose a harbor, the hex should show me 6 areas around the hex to click on to set the direction for the harbor. If it is a hex, it should just append the coordinates to the `:hex-types` map in the scenario config.

## Requirements Discussion

### Initial Round Questions & Answers

**Q1: Scenario Metadata** - What metadata should be captured for a custom scenario?
**Answer:** Scenario name, number of players

**Q2: Grid Pattern Entry** - How should users enter the grid pattern?
**Answer:** Comma-separated rows (e.g., "3,4,5,4,3"), with example format shown to the user

**Q3: Resource & Token Distribution** - Should resource/token distributions be:
- Entered as counts (e.g., "Wood: 4, Brick: 3")
- Validated against hex counts
- Pre-populated with base game defaults

**Answer:**
- Counts are entered in separate fields in the sidebar (e.g., Wood: [input], Brick: [input])
- YES to validation against hex counts
- YES to pre-populated base game defaults

**Q4: Scenario ID Generation** - Should scenario IDs be auto-generated (e.g., from name + timestamp)?
**Answer:** Auto-generated from name by converting to kebab-case

**Q5: Editing Existing Scenarios** - Can users edit previously created custom scenarios?
**Answer:** YES - Load scenario into the editor, allow modification, re-save to local storage

**Q6: Visual Feedback** - What visual feedback should users see as they build?
**Answer:** Hexes show their type as text (e.g., "terrain", "water", "fog", "village")

**Q7: Error States** - How should we handle invalid configurations?
**Answer:** Block saving if validation fails. Validation rules: terrain hexes count must equal sum of resource distribution AND number token count must match terrain hexes count.

**Q8: Harbor Placement Workflow** - When placing a harbor, should:
- The harbor type be selected first, or
- User places harbor location then assigns type later

**Answer:** Just place harbor first, determine types later by clicking on them

**Q9: Exclusions** - Is there anything you explicitly DON'T want in the first version?
**Answer:** Keep it simple - no complex features yet

### Follow-up Questions & Answers

**Follow-up 1: Clear Mode** - How can users clear or remove hex assignments?
**Answer:**
- Clear/X button in each hex to clear it
- Clear All button in the sidebar

**Follow-up 2: Loading Previous Scenarios** - When loading a previous scenario to edit, what happens to unsaved work?
**Answer:**
- Show pop-up to warn user that current work is not saved
- Unsaved changes should NOT be committed to local storage

**Follow-up 3: Export Format** - Should custom scenarios be exportable (e.g., as EDN)?
**Answer:**
- Just export the scenario config map
- No EDN import for now (export only)

**Follow-up 4: Sidebar Organization** - For the sidebar with many fields (metadata, distributions, grid pattern, hex selection), should it be:
- Tabbed interface
- Accordion sections
- Single scrollable form

**Answer:** Scrollable form with all fields visible

**Follow-up 5: Harbor Configuration UI Details** - When a harbor is placed but type not yet assigned:
- What should the harbor show on the board?
- How does the user assign/change the harbor type later?

**Answer:**
- User can click "X" on harbor to remove it
- On board, harbors use same graphics as regular game (harbor-trapezoid)
- Contents show "?" if not assigned a type yet

**Follow-up 6: Validation Details** - When validation fails, should we:
- Show specific error messages
- Highlight which fields are incorrect
- Block saving entirely or allow saving with warnings

**Answer:**
- Block saving if validation fails
- Validation: terrain hexes count = sum of resource distribution AND number token count must match

### Existing Code to Reference

**Similar Features Identified:**
- Feature: Scenario Registry - Path: `/home/kcheung/code/catan/src/catan_board/scenarios/registry.cljs`
  - Already has logic for loading custom scenarios from local storage
  - Custom scenarios stored with key `:custom-scenarios`
  - The `get-scenario` function checks both built-in scenarios and custom scenarios from local storage
  - The `list-scenarios` function concatenates built-in and custom scenarios

**UI/Styling References:**
- Use same UI look as existing sidebar
- Harbor graphics should use existing harbor-trapezoid component
- Follow existing visual patterns and styling

## Visual Assets

### Files Provided:
No visual assets provided.

### Visual Insights:
N/A - No design mockups provided. Implementation will follow existing UI patterns in the application.

## Requirements Summary

### Feature Overview

Custom Scenario Creation mode allows users to design their own Catan board scenarios through an interactive visual editor. Users can configure all aspects of a scenario including:
- Board layout (grid pattern)
- Hex types (terrain, water, fog, village)
- Harbor placement and types
- Resource and number token distributions (face-up and face-down)
- Scenario metadata (name, player count)

Scenarios are saved to browser local storage and integrated with the existing scenario registry system.

### Functional Requirements

#### Mode Entry
- Sidebar toggle button to enter Custom Scenario Creation mode
- When activated, display creation interface in right sidebar

#### Scenario Metadata
- **Scenario Name**: Text input field
- **Player Count**: Number input field
- **Scenario ID**: Auto-generated from name (kebab-case conversion)

#### Grid Configuration
- Text input for grid pattern (hyphen-separated rows)
- Example format shown: "3-4-5-4-3"
- When entered, board updates to show empty hexes based on pattern

#### Resource Distribution Configuration
- **Face-Up Resources**: Separate input fields for each resource type
  - Wood: [count]
  - Brick: [count]
  - Sheep: [count]
  - Wheat: [count]
  - Ore: [count]
- **Face-Down Resources**: Same structure as face-up
- Pre-populated with base game defaults
- Validated: sum must equal terrain hex count

#### Number Token Distribution Configuration
- **Face-Up Tokens**: Input fields for each number (2-12, excluding 7)
- **Face-Down Tokens**: Same structure as face-up
- Pre-populated with base game defaults
- Validated: total count must match terrain hex count

#### Hex Type Selection
- Radio buttons or dropdown to select current placement mode:
  - Terrain hex
  - Water hex
  - Fog hex
  - Village hex
  - Harbor

#### Interactive Board Editing
- Click on empty hex to assign selected type
- Hex displays its type as text label (e.g., "terrain", "water", "fog", "village")
- Each hex shows clear/X button to remove assignment
- Coordinates automatically added to scenario config's `:hex-types` map

#### Harbor Placement Workflow
1. Select "Harbor" mode in sidebar
2. Click on hex to place harbor
3. Six directional areas appear around hex for direction selection
4. Click direction to set harbor orientation
5. Harbor displays on board with existing harbor-trapezoid graphics
6. Harbor contents show "?" if type not yet assigned
7. User can click on placed harbor to assign/change type later
8. User can click "X" on harbor to remove it

#### Clear Functionality
- Clear/X button on each individual hex
- "Clear All" button in sidebar to reset entire board

#### Scenario Loading & Editing
- Dropdown or list showing existing custom scenarios
- Click to load scenario into editor
- If unsaved work exists, show warning pop-up: "Current work is not saved. Continue?"
- Only save to local storage when user explicitly saves
- Unsaved changes are NOT auto-committed

#### Validation Rules
- **Terrain Hex Count**: Must equal sum of face-up and face-down resource distributions
- **Number Token Count**: Must equal terrain hex count
- **Saving Blocked**: If validation fails, disable save button and show specific error messages

#### Save & Export
- "Save Scenario" button
- Validates configuration before saving
- Saves to local storage under `:custom-scenarios` key
- "Export Scenario" button exports scenario config map (export only, no import in v1)

### UI/UX Specifications

#### Sidebar Layout
- Single scrollable form with all fields visible (no tabs or accordions)
- Sections organized top-to-bottom:
  1. Scenario Metadata (name, player count)
  2. Grid Pattern
  3. Face-Up Resource Distribution
  4. Face-Down Resource Distribution
  5. Face-Up Number Token Distribution
  6. Face-Down Number Token Distribution
  7. Hex Type Selection
  8. Actions (Save, Export, Clear All, Load Existing)

#### Sidebar Styling
- Match existing sidebar UI look and feel
- Consistent with current application design patterns

#### Board Display
- Empty hexes shown based on grid pattern
- Hex types displayed as text labels
- Harbors use existing harbor-trapezoid graphics
- Unassigned harbor types show "?" in contents
- Clear/X button visible on each assigned hex

#### Visual Feedback
- Real-time board updates as user configures
- Text labels on hexes showing current type
- Harbor direction indicators
- Validation error messages near relevant fields

### Data Model Specifications

#### Scenario Config Structure
Based on existing scenario format, custom scenarios should include:

```clojure
{:id            :generated-from-name
 :name          "User-Entered Name"
 :player-count  4
 :grid-pattern  [3 4 5 4 3]
 :hex-types     {[0 0] :terrain
                 [0 1] :water
                 [1 0] :fog
                 [1 1] :village
                 ;; ... coordinates -> type
                 }
 :harbors       {[2 1] {:direction :north-east
                        :type      :wood-harbor}
                 ;; ... coordinates -> harbor config
                 }
 :resources     {:face-up   {:wood  4 :brick 3 :sheep 4 :wheat 4 :ore 3}
                 :face-down {:wood  2 :brick 2 :sheep 2 :wheat 2 :ore 1}}
 :numbers       {:face-up   {2 1, 3 2, 4 2, 5 2, 6 2, 8 2, 9 2, 10 2, 11 2, 12 1}
                 :face-down {2 1, 3 1, 4 1, 5 1, 6 1, 8 1, 9 1, 10 1, 11 1, 12 1}}
}
```

#### Local Storage Structure
- Key: `:custom-scenarios`
- Value: Map of scenario-id to scenario-config
- Example:
```clojure
{:my-custom-map     {scenario config}
 :another-scenario  {scenario config}}
```

#### ID Generation
- Convert scenario name to kebab-case
- Example: "My Custom Map" -> `:my-custom-map`
- Handle uniqueness (append number if ID exists)

### Integration Points

#### Scenario Registry
- Custom scenarios already integrated via `registry.cljs`
- `get-scenario` function checks local storage
- `list-scenarios` function concatenates built-in and custom scenarios
- New custom scenarios will automatically appear in scenario selection

#### Local Storage Middleware
- Use existing `catan-board.middleware.local-storage` namespace
- Key: `:custom-scenarios`
- Save entire custom scenarios map on each save operation

#### Existing Harbor Graphics
- Reuse harbor-trapezoid component
- Follow existing harbor rendering patterns

### Validation Rules

#### Pre-Save Validation
1. **Grid Pattern Validation**
   - Must be hyphen-separated integers
   - Each number represents hexes in that row

2. **Resource Distribution Validation**
   - Count terrain hexes in `:hex-types`
   - Sum face-up resources = Sum face-down resources = Terrain hex count
   - Error message: "Resource distribution must match terrain hex count ([X] terrain hexes, [Y] resources configured)"

3. **Number Token Validation**
   - Count terrain hexes in `:hex-types`
   - Sum face-up tokens + Sum face-down tokens = Terrain hex count
   - Error message: "Number token count must match terrain hex count ([X] terrain hexes, [Y] tokens configured)"

4. **Metadata Validation**
   - Scenario name must not be empty
   - Player count must be positive integer

5. **Save Blocking**
   - Disable save button if any validation fails
   - Show all validation errors simultaneously

### Scope Boundaries

**In Scope (v1):**
- Interactive hex placement and editing
- Harbor placement with direction and type selection
- Full resource and number token configuration
- Grid pattern configuration
- Scenario metadata (name, player count)
- Save to local storage
- Load existing scenarios for editing
- Export scenario config
- Individual hex clearing
- Clear all functionality
- Validation and error messaging
- Integration with existing scenario registry

**Out of Scope (v1):**
- EDN/JSON import functionality (export only)
- Sharing scenarios between users
- Cloud storage or persistence beyond local storage
- Undo/redo functionality
- Drag-and-drop hex placement
- Visual hex templates or presets
- Copy/duplicate scenario functionality
- Scenario versioning
- Advanced validation (e.g., game balance checking)
- Tutorial or guided creation flow

### Technical Considerations

#### ClojureScript Patterns
- Follow existing code conventions in the codebase
- Use re-frame for state management (if that's the pattern)
- Maintain immutable data structures

#### Local Storage
- Browser-based persistence only
- No server-side storage in v1
- Clear warning about data loss if browser data cleared

#### Performance
- Grid patterns up to reasonable size (base game uses 5 rows max)
- No performance concerns for typical scenario sizes

#### Browser Compatibility
- Must work with local storage API
- Standard modern browser support

### Reusability Opportunities

**Components to Potentially Reuse:**
- Existing sidebar UI components and styling
- Harbor-trapezoid graphics component
- Scenario registry loading mechanism (`registry.cljs`)
- Local storage middleware (`local-storage.cljs`)
- Existing hex rendering components

**Backend Patterns to Reference:**
- Scenario data structure from existing scenarios (fog-islands, base-game, etc.)
- Local storage save/load patterns
- Scenario ID conventions

**Similar Features to Model After:**
- Scenario selection/loading flow
- Sidebar layout and organization
- Harbor rendering and display
