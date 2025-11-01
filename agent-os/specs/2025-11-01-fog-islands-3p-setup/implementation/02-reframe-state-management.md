# Task 2: Events, Subscriptions & Scenario Generation

## Overview
**Task Reference:** Task #2 from `agent-os/specs/2025-11-01-fog-islands-3p-setup/tasks.md`
**Implemented By:** database-engineer
**Date:** 2025-11-01
**Status:** Complete

### Task Description
This task implements the Re-frame state management layer for the Fog Islands scenario system, including scenario generation utilities, Re-frame events for scenario management and fog reveal, and Re-frame subscriptions for accessing scenario and fog state.

## Implementation Summary
I implemented a complete Re-frame state management layer that enables the application to generate boards from scenario configurations, manage fog tile reveal mechanics, and provide reactive subscriptions to scenario and fog state. The implementation follows the existing Re-frame patterns in the codebase and reuses the hex grid generation functions from Task Group 1.

The scenario generator utility creates boards by classifying hex coordinates according to the scenario configuration, shuffling and assigning resources and number tokens to terrain hexes, and creating placeholder hexes for water and fog types. The Re-frame events enable scenario switching, board regeneration with scenario-specific logic, and fog tile reveal with random terrain and number selection. Subscriptions provide reactive access to the current scenario, fog state, and available scenarios list.

## Files Changed/Created

### New Files
- `/home/kcheung/code/catan/test/catan_board/utils/scenario_generator_test.cljs` - Test suite with 6 focused tests covering scenario board generation, fog state initialization, resource distribution validation, and board structure verification
- `/home/kcheung/code/catan/src/catan_board/utils/scenario_generator.cljs` - Scenario generation utility with functions to generate boards from configuration and initialize fog state

### Modified Files
- `/home/kcheung/code/catan/src/catan_board/events.cljs` - Added `:set-scenario` event for scenario switching, `:reveal-fog-tile` event for fog reveal mechanics, and modified `:generate-board` to check current scenario
- `/home/kcheung/code/catan/src/catan_board/subs.cljs` - Added subscriptions for `:current-scenario`, `:fog-state`, and `:available-scenarios`
- `/home/kcheung/code/catan/src/catan_board/scenarios/fog_islands_3p.cljs` - Corrected hex coordinate assignments to ensure all 44 coordinates match the generated grid pattern (18 water, 12 fog, 14 terrain)

### Deleted Files
None

## Key Implementation Details

### Scenario Generator Utility
**Location:** `/home/kcheung/code/catan/src/catan_board/utils/scenario_generator.cljs`

The scenario generator provides two main functions:

1. `generate-scenario-board` - Generates a complete board from scenario configuration by:
   - Generating grid coordinates from the pattern string using `hex/generate-grid-from-pattern`
   - Classifying each coordinate as water, fog, or terrain based on the scenario's `:hex-types` sets
   - Shuffling resources from `:face-up-distribution` and assigning to terrain hexes
   - Shuffling number tokens and assigning to non-desert terrain hexes
   - Creating water and fog hexes with their type as the resource
   - Returning a board structure with `:hexes`, `:harbors`, and `:metadata`

2. `initialize-fog-state` - Creates the initial fog state map with all fog coordinates set to `{:revealed? false :terrain nil :number nil}`

**Rationale:** This approach separates board generation logic for scenarios from the existing base game generator, allowing different generation strategies while reusing the hex grid foundation. The classification-based approach makes it easy to assign different hex types from coordinate sets defined in scenario configurations.

### Re-frame Events for Scenario Management
**Location:** `/home/kcheung/code/catan/src/catan_board/events.cljs`

Added three key event handlers:

1. `:set-scenario` - Switches to a new scenario by:
   - Loading the scenario configuration from the registry
   - Generating a new board using the appropriate generator (base game or scenario generator)
   - Initializing fog state for scenario-based boards
   - Updating the database with the new scenario ID, board, and fog state
   - Clearing any active token selection

2. `:reveal-fog-tile` - Reveals a fog hex by:
   - Checking if the coordinate exists in fog state and is not already revealed
   - Creating shuffled decks from the scenario's fog distribution
   - Randomly selecting a terrain type and number token (nil for desert)
   - Updating the fog state with `:revealed? true` and the selected terrain/number

3. Modified `:generate-board` - Now checks the current scenario:
   - If scenario is `:base-game`, uses existing `board-gen/generate-board`
   - Otherwise, uses scenario generator with the current scenario configuration
   - This maintains backward compatibility with the base game

**Rationale:** These events follow the existing Re-frame patterns in the codebase, using simple database updates and conditional logic. The `:reveal-fog-tile` event creates new shuffled decks on each reveal to ensure random selection, which is acceptable given the spec notes that tracking available resources/tokens is optional ("accept duplicates").

### Re-frame Subscriptions
**Location:** `/home/kcheung/code/catan/src/catan_board/subs.cljs`

Added three new subscriptions:

1. `:current-scenario` - Returns the current scenario ID from the database
2. `:fog-state` - Returns the fog state map from the database
3. `:available-scenarios` - Calls `registry/list-scenarios` to return the list of available scenarios

**Rationale:** These subscriptions follow the simple query pattern used throughout the existing subscriptions file, directly accessing database keys or calling pure utility functions.

### Hex Coordinate Corrections
**Location:** `/home/kcheung/code/catan/src/catan_board/scenarios/fog_islands_3p.cljs`

Corrected the placeholder hex coordinates to ensure:
- All 44 coordinates are valid coordinates generated by the "5-6-7-8-7-6-5" pattern
- No duplicate coordinates across the three hex type sets
- Counts are correct: 18 water, 12 fog, 14 terrain

The key issue was that coordinate [-4 1] was originally included but is not generated by the pattern (row 1 ranges from q=-3 to q=3, not q=-4). I systematically verified all coordinates against the actual generated grid to ensure validity.

**Rationale:** While these are placeholder coordinates that will be manually edited by the testing-engineer in Task 5.4, having valid coordinates ensures the tests pass and the generator works correctly during development.

## Database Changes (if applicable)

No database schema changes were needed. The schema was already extended in Task Group 1 to include `:scenario` and `:fog-state` keys. This implementation uses those existing keys.

## Dependencies (if applicable)

### New Dependencies Added
None. The implementation uses only existing dependencies (re-frame, ClojureScript standard library).

### Configuration Changes
None.

## Testing

### Test Files Created/Updated
- `/home/kcheung/code/catan/test/catan_board/utils/scenario_generator_test.cljs` - 6 focused tests covering scenario generation

### Test Coverage
- Unit tests: Complete (6 tests covering critical scenario generation behaviors)
- Integration tests: None at this stage (will be added by testing-engineer in Task Group 5)
- Edge cases covered:
  - Board generates correct hex counts matching configuration
  - Fog state initializes with all coordinates unrevealed
  - Resource assignment respects distribution limits
  - Board structure includes required fields (:hexes, :harbors, :metadata)
  - All hexes have required fields based on type
  - Harbors match configuration

### Manual Testing Performed
Ran the 6 tests in scenario_generator_test.cljs using `npx shadow-cljs compile test`. All tests pass successfully:
- `generate-scenario-board-produces-expected-hex-count` - PASS
- `initialize-fog-state-creates-unrevealed-entries` - PASS
- `scenario-board-resource-assignment-respects-distribution` - PASS
- `scenario-board-has-required-structure` - PASS
- `scenario-board-hexes-have-required-fields` - PASS
- `scenario-board-harbors-match-config` - PASS

The tests verify that the scenario generator creates boards with the correct structure, hex counts, and resource distributions as specified in the configuration.

## User Standards & Preferences Compliance

The implementation complies with the user's standards and preferences as defined in the provided standards files. Since many of the referenced standards files were not found in the repository, I followed the patterns established in the existing codebase.

### Global Code Style
**Compliance:**
- Used consistent indentation and formatting matching existing ClojureScript files
- Followed naming conventions (kebab-case for functions and vars)
- Added clear docstrings to all public functions
- Used meaningful variable names that convey purpose
- Kept functions focused on single responsibilities

### Re-frame Patterns
**Compliance:**
- Events registered with `rf/reg-event-db` following the established pattern
- Subscriptions registered with `rf/reg-sub` for reactive data access
- Events return updated database values, not side effects
- Used threading macros (`->`) for sequential database updates
- Maintained separation between events (state changes) and subscriptions (state queries)

### Testing Patterns
**Compliance:**
- Limited to 2-8 focused tests as specified in the task requirements (6 tests total)
- Tests focus on critical behaviors rather than exhaustive edge cases
- Used descriptive test names and clear assertion messages
- Followed the existing test structure using `cljs.test` and `deftest`/`testing`/`is` macros

### Backward Compatibility
**Compliance:**
- Modified `:generate-board` event maintains backward compatibility with base game
- All existing events and subscriptions remain unchanged
- New subscriptions and events use new keywords that don't conflict with existing ones
- Default database state maintains `:scenario :base-game` to preserve existing behavior

## Integration Points (if applicable)

### Internal Dependencies
- `catan-board.utils.hex/generate-grid-from-pattern` - Used to generate hex coordinates from pattern string
- `catan-board.scenarios.registry/get-scenario` - Used to load scenario configurations by ID
- `catan-board.scenarios.registry/list-scenarios` - Used in `:available-scenarios` subscription
- `catan-board.utils.board-generator/generate-board` - Used for base game board generation in modified `:generate-board` event
- `catan-board.scenarios.fog-islands-3p/fog-islands-3p-scenario` - Configuration data for the Fog Islands scenario

### State Structure
The implementation updates and reads from the following database keys:
- `:scenario` - Current scenario ID (keyword)
- `:board` - Board data with `:hexes`, `:harbors`, `:metadata`
- `:fog-state` - Map of fog hex coordinates to reveal state
- `:ui` - Existing UI state (used for tournament mode, selected tokens)

## Known Issues & Limitations

### Issues
None identified. All tests pass and implementation meets acceptance criteria.

### Limitations
1. **Fog Reveal Resource Tracking**
   - Description: The `:reveal-fog-tile` event does not track which resources/tokens have been used
   - Impact: It's possible (though unlikely due to randomization) for the same resource or number to be assigned to multiple fog hexes
   - Reason: The spec explicitly states to "accept duplicates" as an acceptable approach for the initial implementation
   - Future Consideration: Could be enhanced to track available resources in fog state and decrement on reveal

2. **Placeholder Coordinates**
   - Description: The Fog Islands scenario coordinates are functional placeholders, not the final layout
   - Impact: The visual layout won't match the reference image until Task 5.4 is completed
   - Reason: Task explicitly states coordinates are placeholders to be manually edited later
   - Future Consideration: Testing-engineer will manually edit coordinates in Task 5.4 using developer mode

## Performance Considerations
The scenario generator shuffles resources and numbers on each board generation, which is negligible for the small dataset sizes involved (14 terrain hexes, 13 number tokens). The fog reveal event creates new shuffled decks on each reveal, which is also performant given the small size of fog distributions (12 resources, 10 number tokens).

No performance optimizations are needed at this stage.

## Security Considerations
No security concerns. All data is client-side and the implementation doesn't interact with external services or handle sensitive data.

## Dependencies for Other Tasks
This implementation provides the foundation for:
- **Task Group 3** (api-engineer): The `:reveal-fog-tile` event and `:fog-state` subscription are ready for UI interaction wiring
- **Task Group 4** (ui-designer): The scenario generator creates water and fog hexes with the correct structure for rendering
- **Task Group 5** (testing-engineer): The scenario configuration structure is ready for coordinate editing and integration testing

## Notes
The most challenging aspect of this implementation was ensuring the placeholder hex coordinates in the Fog Islands scenario configuration were valid coordinates generated by the "5-6-7-8-7-6-5" pattern. I systematically verified all 44 coordinates against the actual generated grid to eliminate duplicates and invalid coordinates. While these are placeholders, having valid coordinates ensures the tests pass and the generator works correctly during development.

The implementation follows a clean separation of concerns:
- Scenario generator handles pure data transformation (config -> board)
- Re-frame events handle state updates with side effects
- Subscriptions provide reactive read access to state
- Tests focus on critical behaviors rather than exhaustive coverage

This approach makes the code easy to understand, test, and extend with additional scenarios in the future.
