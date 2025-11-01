# Specification: Fog Islands 3-Player Setup

## Goal

Implement the Fog Islands 3-Player scenario from Catan: Seafarers expansion, introducing a scenario selection system that supports water hexes, fog-covered tiles with reveal mechanics, and a fixed board layout with two distinct island clusters.

## User Stories

- As a Catan player, I want to select the "Fog Islands 3-Player" scenario at game setup so that I can play this Seafarers variant
- As a player, I want to click on fog-covered hexes to reveal their hidden terrain and number tokens
- As a player, I want to see water hexes rendered explicitly as blue tiles separating the island clusters
- As a player, I want to see 8 harbors positioned around the islands for trading
- As a developer, I want to easily add more Seafarers scenarios in the future by defining configuration data

## Core Requirements

### Functional Requirements

**Scenario Selection System:**
- Dropdown UI component to select between "Base Game (4-player)" and "Fog Islands (3-player)"
- Scenario selection triggers board regeneration with selected configuration
- Scenario configurations stored as pure data structures (EDN maps)

**Fog Islands Board Layout:**
- 44 hexes in 5-6-7-8-7-6-5 row pattern (vs. base game's 3-4-5-4-3 pattern with 19 land hexes)
- Two distinct island clusters: northwest island (7 face-up terrain hexes) and southeast island (7 face-up terrain hexes)
- 12 fog-covered hexes positioned between and around islands
- 18 water hexes forming outer border and separating islands
- Water hexes rendered as blue SVG polygons, not empty space

**Fog Tile Mechanics:**
- Fog tiles display as white/gray hexes with "?" symbol when covered
- Click/tap interaction reveals terrain type and number token
- Revealed fog tiles render identically to regular terrain hexes
- Fog reveal state persists in game state (separate from static board config)
- No animation required for initial implementation

**Resource & Number Distribution:**
- Face-up hexes (14 total): Resource distribution randomized from defined counts, number tokens randomly assigned
- Fog hexes (12 total): Hidden resource/number distribution, revealed during gameplay. Includes new `:gold` resource type (2 hexes)
- User-editable configuration maps for both distributions
- Developer manually edits coordinate positions (not auto-calculated initially)

**New Resource Type:**
- `:gold` resource type introduced for Seafarers scenarios
- Appears only in fog hexes (2 gold hexes in Fog Islands scenario)
- Requires rendering support (gold-pattern SVG, color scheme)
- Gold hexes function identically to other resource hexes once revealed

**Harbor System:**
- 8 harbors total (vs. 9 in base game)
- Mix of 3:1 general trade and 2:1 resource-specific harbors
- Fixed positions defined by land hex coordinate + edge direction
- Rendered using existing harbor trapezoid system

### Non-Functional Requirements

- Maintain existing SVG rendering performance (44 hexes < base game's water-included layout)
- Scenario configuration easily editable by developer in code
- Architecture supports adding future scenarios without major refactoring
- Reuse existing hex rendering, number token, and harbor systems

## Visual Design

**Visual Reference:** `planning/visuals/fog island 3 player setup.png`

**Key UI Elements:**
- Scenario dropdown in game setup controls area
- Fog tiles: White hexagon with centered "?" character (font-size: 32, fill: #666)
- Water tiles: Blue fill (#4A90E2), white stroke, no interaction
- Face-up terrain: Existing resource patterns (wood-pattern, brick-pattern, etc.)
- Harbors: Existing trapezoid rendering system

**Layout Notes:**
- Two island clusters visibly separated by water and fog hexes
- Board centered in viewport similar to base game
- Developer mode shows axial coordinates for manual position adjustment

## Reusable Components

### Existing Code to Leverage

**Hex Utilities (`catan-board.utils.hex`):**
- `axial-to-pixel` - Convert axial coords to pixel positions
- `hex-vertices` - Calculate 6 vertex points for SVG polygon
- `hex-center` - Get pixel center coordinates
- `hex-neighbors` - Find adjacent hexes (useful for validation)
- `hex-distance` - Calculate distance between hexes
- **NEW NEEDED:** `generate-grid-from-pattern` - Create grid from row pattern string like "5-6-7-8-7-6-5"

**Hex Rendering (`catan-board.views.hex`):**
- `hex-tile` component can be extended with new hex types: `:water` and `:fog`
- `resource-pattern` can add water-pattern and gold-pattern definitions
- `hex-grid` component handles rendering collection of hexes
- `harbor-trapezoid` component works with scenario-specific harbor positions

**Board Generation (`catan-board.utils.board-generator`):**
- Pattern: Shuffle resource deck, assign to coordinates
- Pattern: Shuffle number deck, assign to non-desert hexes
- Can be extended with scenario-based generation

**Harbor System (`catan-board.utils.harbors`):**
- `get-harbor-ratio` and `get-harbor-color` can be reused as-is
- Harbor position data structure already matches needs: `{:land-hex [q r] :direction int :type keyword}`

**State Management (`catan-board.events`, `catan-board.db`):**
- Re-frame event/subscription pattern established
- Current `:board` structure can be extended with `:scenario` key
- Edit mode pattern can be adapted for fog reveal interactions

### New Components Required

**Scenario Configuration Namespace (`catan-board.scenarios.fog-islands-3p`):**
- EDN data structure defining complete scenario configuration
- Cannot reuse existing board-generator because fixed layout (not randomized)
- Includes: hex positions by type, resource distributions, number tokens, harbor positions

**Scenario Loader/Generator (`catan-board.utils.scenario-generator`):**
- Loads scenario configuration and generates board state
- Assigns resources/numbers from distributions to coordinates
- Cannot reuse board-generator's full randomization (scenarios are partially fixed)
- Supports different scenario types

**Grid Pattern Generator (`catan-board.utils.hex/generate-grid-from-pattern`):**
- Parses pattern strings like "5-6-7-8-7-6-5"
- Generates axial coordinates for arbitrary hex patterns
- New function (doesn't exist in codebase)

**Fog Tile Component (extend `catan-board.views.hex/hex-tile`):**
- Add `:fog` hex type rendering branch
- White/gray fill, "?" symbol, click handler
- Conditional rendering based on reveal state

**Water Hex Component (extend `catan-board.views.hex/hex-tile`):**
- Add `:water` hex type rendering branch
- Blue fill, no interaction, no number token

**Gold Resource Support:**
- Add `:gold` to resource type handling
- Create gold-pattern SVG (yellow/gold color scheme)
- Handle gold terrain in hex-tile rendering

**Scenario Selection UI (`catan-board.views.controls`):**
- Dropdown component for scenario selection
- Dispatches event to regenerate board with selected scenario

**Re-frame Events:**
- `:set-scenario` - Change current scenario, regenerate board
- `:reveal-fog-tile` - Mark fog hex as revealed, assign terrain/number
- `:generate-scenario-board` - Generate board from scenario config

**Re-frame Subscriptions:**
- `:current-scenario` - Get selected scenario ID
- `:fog-reveal-state` - Get fog tile reveal states
- `:available-scenarios` - List of scenario options for dropdown

## Technical Approach

### Database Schema Changes

Extend `catan-board.db/default-db`:

```clojure
{:scenario :base-game  ; or :fog-islands-3p
 :board {:hexes [...]
         :harbors [...]
         :metadata {...}}
 :fog-state {[q r] {:revealed? boolean
                    :terrain keyword
                    :number int}}
 :ui {...}}
```

### Scenario Configuration Structure

New namespace `catan-board.scenarios.fog-islands-3p`:

```clojure
(def fog-islands-3p-scenario
  {:id :fog-islands-3p
   :name "Fog Islands (3-player)"
   :player-count 3

   :grid-pattern "5-6-7-8-7-6-5"  ; 44 total hexes

   ;; Developer manually edits these coordinate sets
   :hex-types
   {:water #{[q1 r1] [q2 r2] ...}   ; ~18 water hexes
    :fog #{[q3 r3] ...}              ; 12 fog hexes
    :terrain #{[q15 r15] ...}}       ; 14 face-up terrain hexes

   ;; Randomized distributions
   :face-up-distribution
   {:resources {:wood 3 :brick 2 :sheep 3 :wheat 3 :ore 2 :desert 1}
    :number-tokens [6 11 5 8 12 9 10 6 5 11 8 4 9 3]
    :assignment :random}

   :fog-distribution
   {:resources {:wood 1 :brick 2 :sheep 1 :wheat 2 :ore 2 :desert 2 :gold 2}
    :number-tokens [2 3 4 5 6 8 9 10 11 12 3 4]
    :assignment :on-reveal}  ; Assigned when fog revealed

   :harbors
   [{:land-hex [q r] :direction 0 :type :generic}
    {:land-hex [q r] :direction 1 :type :wheat}
    ;; ... 6 more (developer edits all 8)]})
```

### API / Data Flow

**Board Generation Flow:**
1. User selects scenario from dropdown
2. Dispatch `:set-scenario` event with scenario ID
3. Event handler loads scenario config from registry
4. Scenario generator creates board:
   - Generate grid coordinates from pattern
   - Classify hexes by type (water/fog/terrain) using coordinate sets
   - Shuffle and assign resources to terrain hexes
   - Shuffle and assign number tokens to non-desert terrain hexes
   - Initialize fog state map (all `{:revealed? false}`)
   - Load harbor positions from config
5. Update db with new board and fog state
6. Re-render board

**Fog Reveal Flow:**
1. User clicks fog hex
2. Dispatch `:reveal-fog-tile` event with coordinate
3. Event handler:
   - Check if coordinate is in fog state and not yet revealed
   - Select random terrain from fog distribution
   - Select random number token from fog distribution
   - Update fog state: `{:revealed? true :terrain X :number Y}`
4. Subscription provides updated fog state to view
5. Hex tile component renders revealed terrain/number instead of "?"

### Frontend Component Hierarchy

```
[main-view]
├── [controls-panel]
│   ├── [scenario-dropdown]  ; NEW
│   ├── [generate-button]
│   └── [tournament-mode-toggle]
└── [hex-grid]
    ├── [hex-tile type=:water]     ; EXTENDED
    ├── [hex-tile type=:fog]       ; EXTENDED
    ├── [hex-tile type=:terrain]   ; EXISTING
    └── [harbor-trapezoid]         ; EXISTING
```

### Key Functions to Implement

**`catan-board.utils.hex/generate-grid-from-pattern`**
- Input: pattern string "5-6-7-8-7-6-5"
- Output: vector of axial coordinates [[q r] ...]
- Algorithm: Parse row counts, generate centered grid

**`catan-board.utils.scenario-generator/generate-scenario-board`**
- Input: scenario config map
- Output: `{:hexes [...] :harbors [...] :fog-state {...}}`
- Combines grid generation, resource assignment, fog state initialization

**`catan-board.scenarios.registry/get-scenario`**
- Input: scenario-id keyword
- Output: scenario config map
- Simple registry lookup

**`catan-board.views.hex/hex-tile` (extend)**
- Add `:water` type branch: blue fill, no token
- Add `:fog` type branch: gray fill, "?", click handler if not revealed
- Check fog-reveal-state subscription to determine rendering

**`catan-board.events`**
- `:set-scenario [scenario-id]` - Switch scenario and regenerate board
- `:reveal-fog-tile [[q r]]` - Reveal fog hex at coordinate

### Testing Considerations

**Unit Tests (cljs.test):**

`catan-board.utils.hex-test`:
- `generate-grid-from-pattern-test` - Verify correct coordinate generation for various patterns
- Test "5-6-7-8-7-6-5" produces 44 coordinates
- Test centering (middle row centered on q=0)

`catan-board.scenarios.fog-islands-3p-test`:
- Verify configuration data validity (counts match)
- Water set + fog set + terrain set = 44 hexes
- Face-up resources sum to 14
- Fog resources sum to 12
- Number token counts correct (no 7s)

`catan-board.utils.scenario-generator-test`:
- Test board generation from config produces correct structure
- Verify all hexes have required fields based on type
- Fog state initialized correctly (all false)

**Integration Tests:**
- Generate Fog Islands board, verify hex count and types
- Reveal fog tile, verify state updates correctly
- Switch scenarios, verify board regenerates

**Manual Testing Checklist:**
- Select Fog Islands from dropdown, board displays correctly
- Click fog hex, reveals terrain and number token
- Click revealed fog hex, no change
- Click water hex, no interaction
- All 8 harbors visible in correct positions
- Developer mode shows coordinates for manual editing
- Switch back to base game, standard board loads

### Future Extensibility

**Architecture Supports:**

**Additional Seafarers Scenarios:**
- "Heading for New Shores" (4-player, similar structure)
- "The Four Islands" (4 island clusters)
- "Through the Desert" (different fog mechanics)

**Scenario Configuration Pattern:**
- Each scenario: separate namespace with config map
- Registry maps scenario ID to config loader
- Scenario generator handles any valid config structure

**Extension Points:**
- New hex types: Add to `hex-tile` type branches
- New fog rules: Extend fog-state structure
- Dynamic layouts: Add coordinate calculation functions
- Scenario editor: UI for editing configs (future)

**Not Included (Future Enhancements):**
- Scenario file loading (external JSON/EDN)
- Multiplayer fog reveal synchronization
- Fog reveal animations
- Other player counts (4-player variants)
- AI player fog awareness logic
- Scenario-specific rule enforcement

## Out of Scope

- Other Seafarers scenarios besides Fog Islands 3-Player
- Animated fog reveal transitions
- Sound effects for fog reveal
- Scenario editor GUI (developer edits EDN directly)
- Multiplayer synchronization
- 4-player Fog Islands variant
- Game rule enforcement specific to Seafarers (just board layout)
- Tutorial or help system explaining Seafarers rules
- Mobile gesture controls beyond basic click/tap

## Success Criteria

- User can select "Fog Islands 3-Player" from scenario dropdown and board generates correctly
- Board displays 44 hexes: 18 water, 12 fog, 14 terrain with correct visual distinction
- Clicking fog hex reveals terrain and number token
- Revealed fog hexes render identically to face-up terrain hexes
- 8 harbors positioned correctly on island edges
- Developer can manually edit scenario config coordinates and distributions
- Codebase structure supports adding new scenarios by creating new config namespaces
- All existing base game functionality remains unchanged

## Implementation Files

### New Files to Create

1. **`src/catan_board/scenarios/fog_islands_3p.cljs`**
   - Scenario configuration data structure
   - Resource/number distributions
   - Hex coordinate sets (water, fog, terrain)
   - Harbor positions

2. **`src/catan_board/scenarios/registry.cljs`**
   - Map of scenario IDs to config loaders
   - `get-scenario` function
   - `list-scenarios` function for dropdown

3. **`src/catan_board/utils/scenario_generator.cljs`**
   - `generate-scenario-board` function
   - Resource assignment from distributions
   - Fog state initialization
   - Harbor loading from config

4. **`test/catan_board/scenarios/fog_islands_3p_test.cljs`**
   - Validate config data structure
   - Test coordinate sets total 44
   - Test resource/number distributions

5. **`test/catan_board/utils/scenario_generator_test.cljs`**
   - Test board generation from config
   - Test fog state initialization

### Files to Modify

1. **`src/catan_board/utils/hex.cljs`**
   - Add `generate-grid-from-pattern` function
   - Parse pattern string, generate centered coordinates

2. **`src/catan_board/views/hex.cljs`**
   - Extend `hex-tile` component:
     - Add `:water` type rendering (blue fill, no token)
     - Add `:fog` type rendering (gray fill, "?", click handler)
     - Add `:gold` terrain support for revealed fog hexes
     - Check fog-reveal-state for fog hexes
   - Add water-pattern and gold-pattern to `resource-pattern` SVG defs

3. **`src/catan_board/db.cljs`**
   - Add `:scenario` key (default `:base-game`)
   - Add `:fog-state` key (default `{}`)

4. **`src/catan_board/events.cljs`**
   - Add `:set-scenario` event handler
   - Add `:reveal-fog-tile` event handler
   - Modify `:generate-board` to check current scenario

5. **`src/catan_board/subs.cljs`** (if exists, or in events.cljs)
   - Add `:current-scenario` subscription
   - Add `:fog-reveal-state` subscription
   - Add `:available-scenarios` subscription

6. **`src/catan_board/views.cljs`** (main view)
   - Add scenario dropdown component to controls
   - Pass fog-state subscription to hex-grid

7. **`test/catan_board/hex_test.cljs`**
   - Add tests for `generate-grid-from-pattern`

### Development Sequence

**Phase 1: Grid Generation Foundation**
1. Implement `generate-grid-from-pattern` in hex.cljs
2. Write tests for pattern generation
3. Verify correct coordinate generation for "5-6-7-8-7-6-5"

**Phase 2: Scenario System**
1. Create scenario registry namespace
2. Create Fog Islands config namespace with coordinate sets
3. Create scenario generator utility
4. Write tests for config validation

**Phase 3: State Management**
1. Extend db schema with scenario and fog-state
2. Implement re-frame events for scenario selection and fog reveal
3. Implement re-frame subscriptions

**Phase 4: Rendering**
1. Extend hex-tile component with water and fog types
2. Add water pattern to SVG defs
3. Wire up fog reveal click handlers

**Phase 5: UI Controls**
1. Add scenario dropdown to controls panel
2. Wire up to scenario selection event
3. Test scenario switching

**Phase 6: Testing & Polish**
1. Complete unit test coverage
2. Manual testing of fog reveal interactions
3. Developer mode coordinate verification
4. Documentation of config editing process

## References

- **Requirements Document:** `/home/kcheung/code/catan/agent-os/specs/2025-11-01-fog-islands-3p-setup/planning/requirements.md`
- **Visual Asset:** `/home/kcheung/code/catan/agent-os/specs/2025-11-01-fog-islands-3p-setup/planning/visuals/fog island 3 player setup.png`
- **Existing Hex Utils:** `/home/kcheung/code/catan/src/catan_board/utils/hex.cljs`
- **Existing Hex Rendering:** `/home/kcheung/code/catan/src/catan_board/views/hex.cljs`
- **Existing Board Generator:** `/home/kcheung/code/catan/src/catan_board/utils/board_generator.cljs`
- **Red Blob Games Hex Guide:** https://www.redblobgames.com/grids/hexagons/ (axial coordinate reference)
