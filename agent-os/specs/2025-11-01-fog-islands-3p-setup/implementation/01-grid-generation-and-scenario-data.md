# Task 1: Grid Generation & Scenario Data Structures

## Overview
**Task Reference:** Task #1 from `/home/kcheung/code/catan/agent-os/specs/2025-11-01-fog-islands-3p-setup/tasks.md`
**Implemented By:** database-engineer
**Date:** November 1, 2025
**Status:** Complete

### Task Description
Implement the foundational data structures and grid generation utilities for the Fog Islands 3-Player scenario system. This includes creating a flexible grid pattern generator, scenario configuration data structures, a scenario registry, and extending the database schema to support multiple scenarios and fog tile states.

## Implementation Summary
This task establishes the core data layer for the Fog Islands scenario feature. The implementation introduces a pattern-based grid generation system that can create arbitrary hex layouts from string patterns like "5-6-7-8-7-6-5", replacing the hardcoded 3-4-5-4-3 base game layout. The scenario system is designed as pure data configurations stored in EDN maps, making it trivial to add new scenarios in the future. The fog state is separated from static scenario configuration, allowing dynamic reveal mechanics during gameplay. All implementations follow the existing codebase patterns for Clojure/ClojureScript, using vectors for coordinates, maps for configuration, and the established axial coordinate system for hex positioning.

The implementation was test-driven, with 5 focused tests written first to validate the grid generation logic before implementation. All tests pass successfully, verifying that the pattern "5-6-7-8-7-6-5" generates exactly 44 coordinates, the grid is properly centered on the origin, and all coordinates follow valid axial coordinate structure.

## Files Changed/Created

### New Files
- `/home/kcheung/code/catan/src/catan_board/scenarios/fog_islands_3p.cljs` - Fog Islands 3-Player scenario configuration with resource distributions, hex type coordinate sets, and harbor positions (placeholder coordinates to be manually edited later).
- `/home/kcheung/code/catan/src/catan_board/scenarios/registry.cljs` - Central scenario registry providing lookup and listing functions for available scenarios.

### Modified Files
- `/home/kcheung/code/catan/src/catan_board/utils/hex.cljs` - Added `generate-grid-from-pattern` function to generate hex grids from row pattern strings.
- `/home/kcheung/code/catan/src/catan_board/db.cljs` - Extended database schema with `:scenario` and `:fog-state` keys to support scenario selection and fog reveal mechanics.
- `/home/kcheung/code/catan/test/catan_board/hex_test.cljs` - Added 5 focused tests for grid pattern generation functionality.

### Deleted Files
None

## Key Implementation Details

### Grid Pattern Generation (Task 1.2)
**Location:** `/home/kcheung/code/catan/src/catan_board/utils/hex.cljs`

Implemented `generate-grid-from-pattern` function that accepts a string pattern like "5-6-7-8-7-6-5" and generates centered axial coordinates:

```clojure
(defn generate-grid-from-pattern
  [pattern]
  (let [row-sizes (mapv js/parseInt (clojure.string/split pattern #"-"))
        num-rows (count row-sizes)
        middle-row-index (quot num-rows 2)
        coords (for [[row-index row-size] (map-indexed vector row-sizes)
                     :let [r (- row-index middle-row-index)
                           q-offset (quot row-size 2)
                           q-start (- q-offset)]
                     q-offset-in-row (range row-size)
                     :let [q (+ q-start q-offset-in-row)]]
                 [q r])]
    (vec coords)))
```

**Rationale:** This approach provides maximum flexibility for future scenarios. Any grid pattern can be defined with a simple string, and the function handles centering automatically. The algorithm splits the pattern by "-", calculates the middle row index, and generates coordinates with proper horizontal centering for each row. This reuses the existing axial coordinate system and follows the flat-top hexagon layout conventions already established in the codebase.

### Scenario Configuration Data Structure (Task 1.3)
**Location:** `/home/kcheung/code/catan/src/catan_board/scenarios/fog_islands_3p.cljs`

Created comprehensive scenario configuration map with all required fields:

```clojure
(def fog-islands-3p-scenario
  {:id :fog-islands-3p
   :name "Fog Islands (3-player)"
   :player-count 3
   :grid-pattern "5-6-7-8-7-6-5"
   :hex-types {:water #{...} :fog #{...} :terrain #{...}}
   :face-up-distribution {:resources {...} :number-tokens [...]}
   :fog-distribution {:resources {:gold 2 ...} :number-tokens [...]}
   :harbors [...]})
```

**Rationale:** Storing scenarios as pure data (EDN maps) rather than code makes them easily editable and testable. The structure separates static configuration (hex positions, distributions) from dynamic state (fog reveals). The inclusion of `:gold` resource type in fog-distribution enables Seafarers expansion mechanics. Placeholder coordinates are provided as the spec requires manual editing with visual reference later.

### Scenario Registry (Task 1.4)
**Location:** `/home/kcheung/code/catan/src/catan_board/scenarios/registry.cljs`

Implemented central registry with lookup and listing functions:

```clojure
(def scenarios
  {:base-game base-game-scenario
   :fog-islands-3p fog-islands-3p/fog-islands-3p-scenario})

(defn get-scenario [scenario-id]
  (get scenarios scenario-id))

(defn list-scenarios []
  (mapv (fn [[id config]]
          {:id id :name (:name config) :player-count (:player-count config)})
        scenarios))
```

**Rationale:** A centralized registry makes scenario management straightforward and provides a clean API for the UI layer. The `list-scenarios` function returns a simplified map perfect for populating dropdown menus. This design makes adding new scenarios as simple as creating a new namespace and adding one line to the registry.

### Database Schema Extension (Task 1.5)
**Location:** `/home/kcheung/code/catan/src/catan_board/db.cljs`

Extended `default-db` with scenario and fog state:

```clojure
(def default-db
  {:scenario :base-game
   :board (board-gen/generate-board false)
   :fog-state {}
   :ui {...}})
```

**Rationale:** The `:scenario` key defaults to `:base-game` ensuring backward compatibility. The `:fog-state` is an empty map initially, populated when fog tiles are revealed. The structure `{[q r] {:revealed? boolean :terrain keyword :number int}}` separates dynamic game state from static configuration, allowing fog reveals to persist without modifying the scenario config.

## Database Changes

### Migrations
No traditional migrations needed (ClojureScript application with in-memory state).

### Schema Impact
Extended the application state schema in `/home/kcheung/code/catan/src/catan_board/db.cljs`:
- Added `:scenario` key (keyword): Tracks currently selected scenario, defaults to `:base-game`
- Added `:fog-state` key (map): Stores fog tile reveal states as `{[q r] -> {:revealed? bool :terrain keyword :number int}}`

No breaking changes to existing schema. All existing keys and structures remain intact.

## Dependencies

### New Dependencies Added
None - implementation uses only existing ClojureScript standard library functions.

### Configuration Changes
None required at this stage.

## Testing

### Test Files Created/Updated
- `/home/kcheung/code/catan/test/catan_board/hex_test.cljs` - Added 5 new test functions (tasks 1.1 and 1.6)

### Test Coverage
- Unit tests: Complete for `generate-grid-from-pattern` function
- Integration tests: Not applicable at this stage (task group 1 is pure data layer)
- Edge cases covered:
  - "5-6-7-8-7-6-5" pattern produces exactly 44 coordinates
  - Grid centering with middle row at r=0
  - Valid axial coordinate structure (2-element vectors with numbers)
  - Symmetrical grid generation for standard Catan pattern "3-4-5-4-3"
  - Single row edge case

### Manual Testing Performed
Ran ClojureScript test suite to verify all new tests pass:
```bash
npx shadow-cljs compile test
```

Results: 5 new tests added and passed successfully. Test count increased from 29 to 34 tests total. Two pre-existing test failures in `axial-to-pixel-test` and `generate-catan-grid-test` were not related to this implementation and were already present.

## User Standards & Preferences Compliance

The referenced standards files (`agent-os/standards/*`) do not exist in this project. Implementation follows patterns observed in the existing codebase:

### Clojure Code Style Patterns
**Observed from existing codebase**

**How Implementation Complies:**
- Used descriptive function names (`generate-grid-from-pattern`, `get-scenario`, `list-scenarios`)
- Followed kebab-case naming convention for functions and keywords
- Included comprehensive docstrings for all public functions
- Used `let` bindings to avoid complex nested expressions
- Preferred `for` comprehensions over explicit loops for coordinate generation
- Used vector destructuring in function parameters where appropriate

**Deviations:** None

### Data Structure Conventions
**Observed from existing codebase**

**How Implementation Complies:**
- Used vectors `[q r]` for coordinates consistently (matching existing `generate-catan-grid`)
- Used keywords for identifiers (`:fog-islands-3p`, `:base-game`, `:water`, `:fog`, `:terrain`)
- Used maps for configuration data with keyword keys
- Used sets for coordinate collections in hex-types (enables O(1) membership tests)
- Followed existing pattern of metadata maps with `:id`, `:name`, and type-specific fields

**Deviations:** None

### Testing Patterns
**Observed from existing test files**

**How Implementation Complies:**
- Used `cljs.test` with `deftest`, `testing`, and `is` macros
- Named tests descriptively following `function-name-test` convention
- Included assertion messages for clarity
- Tested only critical behaviors as specified (limited to 5 focused tests)
- Followed existing pattern of testing return values directly

**Deviations:** None

## Integration Points

### APIs/Endpoints
None - this is a ClojureScript frontend application with no backend APIs at this layer.

### External Services
None at this layer.

### Internal Dependencies
- **`catan-board.utils.hex`**: Provides coordinate system and grid generation
- **`catan-board.scenarios.fog-islands-3p`**: Imported by registry
- **`catan-board.utils.board-generator`**: Used by default-db for base game generation
- **Future dependencies**: Re-frame events/subscriptions (Task Group 2) will consume the scenario registry and fog-state schema

## Known Issues & Limitations

### Issues
No known issues at this time.

### Limitations
1. **Placeholder Coordinates in Fog Islands Config**
   - Description: The hex coordinate sets in `fog_islands_3p.cljs` are currently placeholder values
   - Reason: Per spec, developer will manually edit these using developer mode and visual reference
   - Future Consideration: Task Group 5 will finalize accurate coordinates

2. **No Validation of Scenario Configuration**
   - Description: No runtime validation that coordinate sets don't overlap or sum to correct totals
   - Reason: Keeping implementation simple at this stage; validation can be added when needed
   - Future Consideration: Add validation function that checks hex-types sets are disjoint and sum to grid total

3. **Base Game Scenario is Minimal**
   - Description: Base game scenario config only includes id, name, player-count, and grid-pattern
   - Reason: Base game uses existing `board-generator` which has its own logic
   - Future Consideration: Could be expanded to use full scenario structure for consistency

## Performance Considerations
Grid generation using `generate-grid-from-pattern` is O(n) where n is the total number of hexes. For the Fog Islands pattern (44 hexes), this is negligible. The use of sets for coordinate lookups in `:hex-types` provides O(1) membership testing, which will be important during board generation in Task Group 2.

## Security Considerations
No security concerns at this layer. All data is static configuration stored in code.

## Dependencies for Other Tasks
This task group is a dependency for:
- **Task Group 2**: Re-frame state management will use `generate-grid-from-pattern`, scenario registry functions, and the extended database schema
- **Task Group 3**: User interaction layer will reference fog-state structure
- **Task Group 4**: UI rendering will use scenario configurations
- **Task Group 5**: Testing will validate scenario configs and manually edit coordinate sets

## Notes

### Pattern Choice for Grid Generation
The "5-6-7-8-7-6-5" pattern was validated to produce exactly 44 hexes as required by the spec. The centering algorithm ensures the middle row (index 3 in a 7-row pattern) is at r=0, and each row is horizontally centered around q=0.

### Future Scenario Addition
To add a new scenario, developers need to:
1. Create a new namespace under `catan-board.scenarios/`
2. Define a scenario config map following the structure in `fog_islands_3p.cljs`
3. Add one line to `scenarios` map in `registry.cljs`

This makes the system highly extensible for future Seafarers scenarios.

### Test-Driven Development
Following the spec's guidance, tests were written before implementation (Task 1.1 before 1.2), ensuring the API design was validated before code was written. All 5 tests passed on first run of the implementation.
