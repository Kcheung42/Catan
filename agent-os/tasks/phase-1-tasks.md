# Task Breakdown: Phase 1 - Core Board Display (MVP)

## Overview

**Total Tasks:** 54 actionable development tasks
**Estimated Timeline:** 3-4 weeks
**Target Delivery:** Functional Catan board display with random generation and scaling

This task list breaks down Phase 1 of the Catan Digital Board application into specific, actionable development tasks. Each task includes clear acceptance criteria, dependencies, effort estimates, and priority levels.

## Effort Estimates Legend

- **XS:** < 2 hours
- **S:** 2-4 hours
- **M:** 4-8 hours
- **L:** 1-2 days
- **XL:** 2+ days

## Priority Levels

- **P0 (Critical):** Must have for MVP
- **P1 (High):** Core functionality
- **P2 (Medium):** Important but not blocking
- **P3 (Low):** Nice to have, can defer

---

## Setup and Project Initialization

### Task Group 0: Project Bootstrap
**Priority:** P0 (Critical)
**Dependencies:** None
**Estimated Total Time:** 1 day

#### Task 0.1: Initialize Project Structure
**Effort:** M (4-8 hours)
**Priority:** P0

Create the basic project structure and configuration files.

**Actions:**
- [ ] Create project root directory structure:
  ```
  catan-board/
  ├── src/
  │   └── catan_board/
  │       ├── core.cljs
  │       ├── events.cljs
  │       ├── subs.cljs
  │       ├── views.cljs
  │       ├── db.cljs
  │       └── config.cljs
  ├── test/
  │   └── catan_board/
  ├── resources/
  │   └── public/
  │       ├── index.html
  │       └── css/
  │           └── style.css
  ├── deps.edn
  ├── shadow-cljs.edn
  └── README.md
  ```
- [ ] Create `deps.edn` with dependencies:
  - ClojureScript 1.11.60+
  - Reagent 1.2.0
  - Re-frame 1.3.0
  - day8/re-frame-10x (dev only)
- [ ] Create `shadow-cljs.edn` configuration:
  - Configure `:app` build target
  - Set up hot reload
  - Configure source paths
  - Set up dev HTTP server
- [ ] Create basic `index.html` with root div
- [ ] Add `.gitignore` for ClojureScript projects

**Acceptance Criteria:**
- [ ] Project structure follows ClojureScript conventions
- [ ] All configuration files are valid and parseable
- [ ] `shadow-cljs watch app` runs without errors
- [ ] Browser opens to dev server showing blank page with no console errors

---

#### Task 0.2: Initial Re-frame Setup
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 0.1

Set up basic Re-frame architecture with initial DB schema.

**Actions:**
- [ ] Create `src/catan_board/db.cljs`:
  - Define initial DB schema with spec or comment
  - Create `default-db` function
  ```clojure
  {:board {:hexes []
           :harbors []
           :metadata {}}
   :ui {:show-info-panel false
        :loading false
        :board-scale 100}}
  ```
- [ ] Create `src/catan_board/events.cljs`:
  - Register `:initialize-db` event
  - Set up event interceptors
- [ ] Create `src/catan_board/subs.cljs`:
  - Register basic subscriptions (`:board`, `:ui`)
- [ ] Create `src/catan_board/views.cljs`:
  - Create root component that renders "Catan Board"
- [ ] Create `src/catan_board/core.cljs`:
  - Set up app initialization
  - Mount root component
  - Dispatch `:initialize-db`

**Acceptance Criteria:**
- [ ] Application loads and displays "Catan Board" text
- [ ] Re-frame DB is initialized with correct schema
- [ ] No console errors or warnings
- [ ] Re-frame-10x dev tool shows DB structure (in dev mode)

---

#### Task 0.3: Development Environment Setup
**Effort:** S (2-4 hours)
**Priority:** P1
**Dependencies:** Task 0.1

Configure development tooling and testing infrastructure.

**Actions:**
- [ ] Add test dependencies to `deps.edn`:
  - cljs.test
  - day8.re-frame-test
- [ ] Configure Shadow-CLJS test build in `shadow-cljs.edn`
- [ ] Create sample test file: `test/catan_board/core_test.cljs`
- [ ] Set up test runner script
- [ ] Add npm scripts if needed (package.json)
- [ ] Document development workflow in README:
  - How to start dev server
  - How to run tests
  - How to build for production

**Acceptance Criteria:**
- [ ] Tests can be run with `shadow-cljs watch test` or similar
- [ ] Sample test passes
- [ ] Hot reload works for both code and tests
- [ ] README has clear development instructions

---

## Feature 1: Hex Grid Layout System

### Task Group 1: Hexagonal Grid Foundation
**Priority:** P0 (Critical)
**Dependencies:** Task Group 0
**Estimated Total Time:** 1 week

#### Task 1.1: Write Hex Coordinate Math Tests
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 0.3

Write focused tests for hexagonal coordinate calculations.

**Actions:**
- [ ] Create `test/catan_board/hex_math_test.cljs`
- [ ] Write 2-8 focused tests covering:
  - Axial to pixel coordinate conversion (flat-top hexagons)
  - Hex vertex calculation (6 points)
  - Standard Catan board coordinates generation (20 hexes, 3-4-5-4-3 pattern)
  - Neighbor finding for a given hex
  - Distance calculation between hexes (for validation)
- [ ] Test edge cases:
  - Center hex (0,0)
  - Edge hexes
  - Scaling factors (50%, 100%, 200%)

**Acceptance Criteria:**
- [ ] 2-8 tests written and failing (TDD approach)
- [ ] Tests cover critical hex math operations
- [ ] Tests are clear and well-documented

---

#### Task 1.2: Implement Hex Coordinate System
**Effort:** M (4-8 hours)
**Priority:** P0
**Dependencies:** Task 1.1

Implement hexagonal grid mathematics using axial coordinates.

**Actions:**
- [ ] Create `src/catan_board/hex_math.cljs`
- [ ] Implement coordinate conversion functions:
  ```clojure
  (defn axial->pixel [q r hex-size scale-factor]
    "Convert axial coordinates to pixel coordinates")

  (defn hex-vertices [center-x center-y hex-size]
    "Calculate 6 vertices for a flat-top hexagon")

  (defn hex-neighbors [q r]
    "Return coordinates of 6 neighboring hexes")

  (defn hex-distance [q1 r1 q2 r2]
    "Calculate distance between two hexes")
  ```
- [ ] Implement Catan board layout:
  ```clojure
  (defn catan-board-coordinates []
    "Return vector of [q r] coordinates for 20 hexes in 3-4-5-4-3 pattern")
  ```
- [ ] Use flat-top hexagon orientation (standard Catan look)
- [ ] Reference: Red Blob Games hexagon guide for formulas

**Acceptance Criteria:**
- [ ] All tests from Task 1.1 pass
- [ ] Functions are pure and well-documented
- [ ] Coordinate conversions are mathematically correct
- [ ] Board coordinates match standard Catan layout

---

#### Task 1.3: Create SVG Hex Component
**Effort:** M (4-8 hours)
**Priority:** P0
**Dependencies:** Task 1.2

Build Reagent component for rendering a single hexagon.

**Actions:**
- [ ] Create `src/catan_board/components/hex.cljs`
- [ ] Implement `hex-tile` component:
  - Accept props: `coord`, `resource`, `number`, `hex-size`, `scale`
  - Calculate pixel position from axial coordinates
  - Calculate 6 vertices using `hex-vertices`
  - Render SVG polygon with points
  - Apply fill color based on resource type
  - Add stroke for border
- [ ] Memoize component using `reagent/memo` for performance
- [ ] Add hover state (subtle highlight) for future interactivity

**Acceptance Criteria:**
- [ ] Component renders a hexagon at correct position
- [ ] Hexagon has 6 equal sides and proper geometry
- [ ] Component is memoized (doesn't re-render unnecessarily)
- [ ] Works with different hex sizes and scale factors

---

#### Task 1.4: Implement Board Grid Container
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 1.3

Create the SVG container and board layout component.

**Actions:**
- [ ] Create `src/catan_board/components/board.cljs`
- [ ] Implement `board-grid` component:
  - Render SVG container with viewBox
  - Calculate board dimensions based on hex count and size
  - Center the board in viewport
  - Apply scaling transform based on `:board-scale` subscription
- [ ] Subscribe to `:hexes` to get hex data
- [ ] Subscribe to `:board-scale` to get current scale
- [ ] Map over hexes and render `hex-tile` for each
- [ ] Ensure proper SVG grouping and transforms

**Acceptance Criteria:**
- [ ] Board renders centered in viewport
- [ ] All 20 hexes are positioned correctly in 3-4-5-4-3 pattern
- [ ] Hexes don't overlap
- [ ] Board scales correctly when scale factor changes
- [ ] SVG is clean and efficient (minimal DOM nodes)

---

#### Task 1.5: Run and Verify Hex Grid Tests
**Effort:** XS (< 2 hours)
**Priority:** P0
**Dependencies:** Task 1.4

Verify hex grid functionality works end-to-end.

**Actions:**
- [ ] Run ONLY the hex math tests from Task 1.1
- [ ] Verify all coordinate calculations are correct
- [ ] Test board rendering in browser:
  - Load app and verify 20 hexes appear
  - Check spacing and alignment visually
  - Verify no console errors
- [ ] Test at different scale factors (50%, 100%, 200%)

**Acceptance Criteria:**
- [ ] All hex math tests pass (2-8 tests)
- [ ] Board displays correctly in browser
- [ ] Hexes are properly spaced and aligned
- [ ] Scaling works smoothly

---

## Feature 2: Resource Tile Rendering

### Task Group 2: Resource Visualization
**Priority:** P0 (Critical)
**Dependencies:** Task Group 1
**Estimated Total Time:** 2-3 days

#### Task 2.1: Write Resource Rendering Tests
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 1.5

Write focused tests for resource type rendering and validation.

**Actions:**
- [ ] Create `test/catan_board/resources_test.cljs`
- [ ] Write 2-8 focused tests covering:
  - Resource color mapping (correct color for each type)
  - Resource distribution validation (4-3-4-4-3-1)
  - Resource assignment to hexes
  - Desert tile has no number
  - All hexes have exactly one resource

**Acceptance Criteria:**
- [ ] 2-8 tests written and failing (TDD approach)
- [ ] Tests cover resource data structures and validation
- [ ] Tests are clear and specific

---

#### Task 2.2: Define Resource Data Structures
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 2.1

Create resource type definitions and color mappings.

**Actions:**
- [ ] Create `src/catan_board/resources.cljs`
- [ ] Define resource types:
  ```clojure
  (def resource-types #{:wood :brick :wheat :sheep :ore :desert})

  (def resource-distribution
    {:wood 4 :brick 3 :wheat 4 :sheep 4 :ore 3 :desert 1})

  (def resource-colors
    {:wood "#1a5f1a"     ; dark green
     :brick "#b8543c"    ; burnt orange
     :wheat "#e8c547"    ; golden yellow
     :sheep "#9bcd6f"    ; light green
     :ore "#7c7c7c"      ; gray
     :desert "#d4c4a0"}) ; tan/beige
  ```
- [ ] Implement validation functions:
  ```clojure
  (defn valid-resource-distribution? [resources]
    "Check if resource counts match official distribution")

  (defn assign-resources [coords]
    "Assign shuffled resources to hex coordinates")
  ```

**Acceptance Criteria:**
- [ ] Resource types and colors are defined
- [ ] Color palette is accessible (good contrast)
- [ ] Validation functions work correctly
- [ ] All tests from Task 2.1 pass

---

#### Task 2.3: Update Hex Component for Resources
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 2.2

Enhance hex component to display resource colors.

**Actions:**
- [ ] Update `src/catan_board/components/hex.cljs`
- [ ] Add resource color logic:
  - Get color from `resource-colors` map
  - Apply as SVG polygon fill
- [ ] Add subtle border (stroke) for visual separation
- [ ] Optional: Add resource icon overlay (tree, brick, wheat stalk, etc.)
  - Use simple SVG shapes or Unicode characters
  - Keep it minimal and clear

**Acceptance Criteria:**
- [ ] Each hex displays correct color for its resource
- [ ] Colors are distinct and easily differentiated
- [ ] Borders provide clear visual separation
- [ ] Icons (if added) are clear and don't clutter

---

#### Task 2.4: Create Resource Distribution Logic
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 2.3

Implement resource shuffling and assignment.

**Actions:**
- [ ] In `src/catan_board/resources.cljs`:
- [ ] Implement `generate-resource-pool`:
  ```clojure
  (defn generate-resource-pool []
    "Create a vector of resources according to distribution"
    ; Returns: [:wood :wood :wood :wood :brick :brick :brick ...]
    )
  ```
- [ ] Implement `shuffle-resources`:
  ```clojure
  (defn shuffle-resources [resource-pool]
    "Randomly shuffle resource pool")
  ```
- [ ] Implement `assign-resources-to-hexes`:
  ```clojure
  (defn assign-resources-to-hexes [coords]
    "Assign shuffled resources to coordinates, return hex data"
    ; Returns: [{:coord [0 0] :resource :wood} ...]
    )
  ```

**Acceptance Criteria:**
- [ ] Resource pool has correct counts (4-3-4-4-3-1)
- [ ] Shuffling produces different layouts each time
- [ ] All 20 hexes get exactly one resource
- [ ] Distribution validation passes

---

#### Task 2.5: Run and Verify Resource Tests
**Effort:** XS (< 2 hours)
**Priority:** P0
**Dependencies:** Task 2.4

Verify resource rendering works correctly.

**Actions:**
- [ ] Run ONLY resource tests from Task 2.1
- [ ] Test in browser:
  - Manually create a board with resources
  - Verify all 6 resource types display correctly
  - Check color differentiation
  - Verify desert is visually distinct
- [ ] Test resource assignment randomness (generate 10 times, verify variety)

**Acceptance Criteria:**
- [ ] All resource tests pass (2-8 tests)
- [ ] Resources display correctly in browser
- [ ] Colors are clearly distinct
- [ ] Resource distribution is correct

---

## Feature 3: Number Token Display

### Task Group 3: Number Tokens and Probability
**Priority:** P0 (Critical)
**Dependencies:** Task Group 2
**Estimated Total Time:** 2-3 days

#### Task 3.1: Write Number Token Tests
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 2.5

Write focused tests for number token logic.

**Actions:**
- [ ] Create `test/catan_board/numbers_test.cljs`
- [ ] Write 2-8 focused tests covering:
  - Number distribution validation (correct counts)
  - Probability pip calculation (2->1, 3->2, ..., 6->5, 8->5)
  - Number assignment to non-desert hexes only
  - Red number identification (6 and 8)
  - Number token data structure

**Acceptance Criteria:**
- [ ] 2-8 tests written and failing (TDD approach)
- [ ] Tests cover number generation and validation
- [ ] Tests are specific and actionable

---

#### Task 3.2: Define Number Token Data
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 3.1

Create number distribution and probability data.

**Actions:**
- [ ] Create `src/catan_board/numbers.cljs`
- [ ] Define number data:
  ```clojure
  (def number-distribution
    {2 1, 3 2, 4 2, 5 2, 6 2, 8 2, 9 2, 10 2, 11 2, 12 1})

  (def number-probabilities
    {2 1, 3 2, 4 3, 5 4, 6 5, 8 5, 9 4, 10 3, 11 2, 12 1})

  (def red-numbers #{6 8})
  ```
- [ ] Implement helper functions:
  ```clojure
  (defn pip-count [number]
    "Return number of probability pips for a number")

  (defn red-number? [number]
    "Check if number is 6 or 8")

  (defn valid-number-distribution? [numbers]
    "Validate number counts match distribution")
  ```

**Acceptance Criteria:**
- [ ] Number distribution matches official Catan rules
- [ ] Probability calculations are correct
- [ ] Helper functions work as expected
- [ ] All tests from Task 3.1 pass

---

#### Task 3.3: Create Number Token Component
**Effort:** M (4-8 hours)
**Priority:** P0
**Dependencies:** Task 3.2

Build component to render number tokens on hexes.

**Actions:**
- [ ] Create `src/catan_board/components/number_token.cljs`
- [ ] Implement `number-token` component:
  - Accept props: `number`, `position`, `is-red?`
  - Render number text centered on hex
  - If red (6 or 8), render red background circle
  - Render probability pips below number:
    - Small circles arranged horizontally
    - Count matches `pip-count`
  - Use large, readable font (24-28px base, scale with board)
  - High contrast text (white on red, black on hex)
- [ ] Make component conditional (don't render on desert)

**Acceptance Criteria:**
- [ ] Number tokens are clearly visible and readable
- [ ] Red numbers (6, 8) have red background circle
- [ ] Probability pips are correctly displayed
- [ ] Numbers don't render on desert tiles
- [ ] Text scales properly with board scale

---

#### Task 3.4: Update Hex Component for Numbers
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 3.3

Integrate number token component into hex rendering.

**Actions:**
- [ ] Update `src/catan_board/components/hex.cljs`
- [ ] Add logic to render number token if hex has number:
  ```clojure
  (when number
    [number-token {:number number
                   :position [cx cy]
                   :is-red? (red-number? number)}])
  ```
- [ ] Ensure proper layering (number on top of hex fill)
- [ ] Test with various resource/number combinations

**Acceptance Criteria:**
- [ ] Numbers display correctly on resource hexes
- [ ] Desert hex never shows a number
- [ ] Number tokens are properly positioned
- [ ] Visual hierarchy is clear (number stands out)

---

#### Task 3.5: Implement Number Assignment Logic
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 3.4

Create logic to assign numbers to hexes.

**Actions:**
- [ ] In `src/catan_board/numbers.cljs`:
- [ ] Implement `generate-number-pool`:
  ```clojure
  (defn generate-number-pool []
    "Create vector of numbers according to distribution"
    ; Returns: [2 3 3 4 4 5 5 6 6 8 8 9 9 10 10 11 11 12]
    )
  ```
- [ ] Implement `shuffle-numbers`:
  ```clojure
  (defn shuffle-numbers [number-pool]
    "Randomly shuffle numbers")
  ```
- [ ] Implement `assign-numbers-to-hexes`:
  ```clojure
  (defn assign-numbers-to-hexes [hexes]
    "Assign numbers to hexes (skip desert), return updated hexes"
    ; Uses spiral pattern for standard Catan numbering
    )
  ```

**Acceptance Criteria:**
- [ ] Number pool has correct counts
- [ ] Numbers are assigned to all non-desert hexes
- [ ] Desert hex never gets a number
- [ ] Spiral pattern is implemented (optional but nice)

---

#### Task 3.6: Run and Verify Number Token Tests
**Effort:** XS (< 2 hours)
**Priority:** P0
**Dependencies:** Task 3.5

Verify number token rendering works correctly.

**Actions:**
- [ ] Run ONLY number token tests from Task 3.1
- [ ] Test in browser:
  - Create board with resources and numbers
  - Verify all numbers display correctly
  - Check red highlighting on 6 and 8
  - Verify probability pips are correct
  - Confirm desert has no number
- [ ] Test number randomness (generate 10 times)

**Acceptance Criteria:**
- [ ] All number token tests pass (2-8 tests)
- [ ] Numbers render clearly and correctly
- [ ] Red numbers are highlighted
- [ ] Probability pips are accurate
- [ ] Desert never has a number

---

## Feature 4: Random Board Generation

### Task Group 4: Board Generation Algorithm
**Priority:** P0 (Critical)
**Dependencies:** Task Groups 1, 2, 3
**Estimated Total Time:** 1 week

#### Task 4.1: Write Board Validation Tests
**Effort:** M (4-8 hours)
**Priority:** P0
**Dependencies:** Task 3.6

Write comprehensive tests for board validation logic.

**Actions:**
- [ ] Create `test/catan_board/validation_test.cljs`
- [ ] Write 2-8 focused tests covering:
  - Adjacent red number detection (6-8, 8-6, 6-6, 8-8)
  - Valid boards pass all validations
  - Invalid boards fail appropriately
  - Edge cases (red numbers at board edges)
  - Complete board structure validation

**Acceptance Criteria:**
- [ ] 2-8 tests written and failing
- [ ] Tests cover all validation rules
- [ ] Edge cases are tested

---

#### Task 4.2: Implement Board Validation Functions
**Effort:** M (4-8 hours)
**Priority:** P0
**Dependencies:** Task 4.1

Create validation logic for generated boards.

**Actions:**
- [ ] Create `src/catan_board/validation.cljs`
- [ ] Implement validation functions:
  ```clojure
  (defn get-adjacent-hexes [hexes q r]
    "Get neighboring hexes for a given coordinate")

  (defn adjacent-red-numbers? [hexes]
    "Check if any red numbers (6,8) are adjacent"
    ; Return true if 6-8, 8-6, 6-6, or 8-8 are neighbors
    )

  (defn validate-resource-distribution [hexes]
    "Ensure correct resource counts")

  (defn validate-number-distribution [hexes]
    "Ensure correct number counts")

  (defn validate-desert-has-no-number [hexes]
    "Ensure desert has no number token")

  (defn validate-board [hexes]
    "Run all validations, return {:valid? bool :errors [...]}")
  ```
- [ ] Use `hex-neighbors` function from hex-math
- [ ] Return detailed error messages for debugging

**Acceptance Criteria:**
- [ ] All validation tests from Task 4.1 pass
- [ ] Validation correctly identifies invalid boards
- [ ] Validation passes for valid boards
- [ ] Error messages are clear and actionable

---

#### Task 4.3: Write Board Generation Tests
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 4.2

Write tests for the full board generation algorithm.

**Actions:**
- [ ] Create `test/catan_board/generation_test.cljs`
- [ ] Write 2-8 tests covering:
  - Generated boards are always valid
  - Generated boards have correct structure
  - Retry logic works (simulate validation failures)
  - Multiple generations produce different boards
  - Board generation completes quickly (< 1 second)

**Acceptance Criteria:**
- [ ] 2-8 tests written and failing
- [ ] Tests verify board quality and performance
- [ ] Tests are deterministic where possible

---

#### Task 4.4: Implement Board Generation Algorithm
**Effort:** L (1-2 days)
**Priority:** P0
**Dependencies:** Task 4.3

Create the main board generation algorithm with retry logic.

**Actions:**
- [ ] Create `src/catan_board/generation.cljs`
- [ ] Implement generation algorithm:
  ```clojure
  (defn generate-board []
    "Generate a complete valid Catan board"
    ; 1. Get board coordinates
    ; 2. Assign resources
    ; 3. Assign numbers with validation
    ; 4. If invalid, retry (max 10 attempts)
    ; 5. Return board state or error
    )

  (defn generate-board-with-retry [max-retries]
    "Generate board with retry logic for validation failures")
  ```
- [ ] Two-phase approach:
  - Phase 1: Assign resources (simple shuffle)
  - Phase 2: Assign numbers (validate, retry if needed)
- [ ] Use spiral pattern for number placement (standard Catan)
- [ ] Add timeout/max-retry limit
- [ ] Log generation attempts for debugging

**Acceptance Criteria:**
- [ ] All generation tests from Task 4.3 pass
- [ ] Generated boards are always valid
- [ ] Generation completes in < 1 second
- [ ] Algorithm handles edge cases gracefully
- [ ] No infinite loops possible

---

#### Task 4.5: Create Re-frame Events for Generation
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 4.4

Wire up board generation to Re-frame event system.

**Actions:**
- [ ] Update `src/catan_board/events.cljs`
- [ ] Implement events:
  ```clojure
  (rf/reg-event-fx
   :generate-board
   (fn [{:keys [db]} _]
     {:db (assoc-in db [:ui :loading] true)
      :generate-board-async nil}))

  (rf/reg-event-db
   :generate-board-success
   (fn [db [_ board]]
     (-> db
         (assoc :board board)
         (assoc-in [:ui :loading] false))))

  (rf/reg-event-db
   :generate-board-failure
   (fn [db [_ error]]
     (-> db
         (assoc-in [:ui :error] error)
         (assoc-in [:ui :loading] false))))
  ```
- [ ] Register effect handler:
  ```clojure
  (rf/reg-fx
   :generate-board-async
   (fn [_]
     (js/setTimeout
      #(rf/dispatch [:generate-board-success (generate-board)])
      0)))
  ```
- [ ] Add error handling for generation failures

**Acceptance Criteria:**
- [ ] `:generate-board` event triggers generation
- [ ] Loading state is managed correctly
- [ ] Generated board is stored in app DB
- [ ] Errors are handled gracefully
- [ ] UI reflects loading and success states

---

#### Task 4.6: Create Re-frame Subscriptions for Board Data
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 4.5

Create subscriptions for accessing board data.

**Actions:**
- [ ] Update `src/catan_board/subs.cljs`
- [ ] Implement subscriptions:
  ```clojure
  (rf/reg-sub :board (fn [db _] (:board db)))
  (rf/reg-sub :hexes (fn [db _] (get-in db [:board :hexes])))
  (rf/reg-sub :harbors (fn [db _] (get-in db [:board :harbors])))
  (rf/reg-sub :loading? (fn [db _] (get-in db [:ui :loading])))

  ; Derived data
  (rf/reg-sub
   :resource-counts
   :<- [:hexes]
   (fn [hexes _]
     (frequencies (map :resource hexes))))

  (rf/reg-sub
   :number-counts
   :<- [:hexes]
   (fn [hexes _]
     (frequencies (map :number (remove #(nil? (:number %)) hexes)))))
  ```

**Acceptance Criteria:**
- [ ] All subscriptions return correct data
- [ ] Derived subscriptions update when board changes
- [ ] Subscriptions are efficient (memoized by Re-frame)
- [ ] No unnecessary re-renders

---

#### Task 4.7: Run and Verify Board Generation Tests
**Effort:** XS (< 2 hours)
**Priority:** P0
**Dependencies:** Task 4.6

Verify board generation works end-to-end.

**Actions:**
- [ ] Run ALL board generation and validation tests
- [ ] Test in browser:
  - Generate 20+ boards
  - Verify all are valid
  - Check for visual variety
  - Measure generation time (should be < 1 second)
  - Verify loading state appears briefly
- [ ] Stress test: Generate 100 boards rapidly

**Acceptance Criteria:**
- [ ] All board generation tests pass
- [ ] All validation tests pass
- [ ] Generated boards are always valid
- [ ] No adjacent red numbers
- [ ] Generation is fast (< 1 second)
- [ ] No errors or crashes

---

## Feature 5: Harbor/Port Display

### Task Group 5: Harbor Rendering
**Priority:** P1 (High)
**Dependencies:** Task Group 4
**Estimated Total Time:** 1 week

#### Task 5.1: Write Harbor Data Tests
**Effort:** S (2-4 hours)
**Priority:** P1
**Dependencies:** Task 4.7

Write tests for harbor data structures and placement.

**Actions:**
- [ ] Create `test/catan_board/harbors_test.cljs`
- [ ] Write 2-8 focused tests covering:
  - Harbor count (exactly 9 harbors)
  - Harbor type distribution (4 general, 5 specialized)
  - Harbor position data structure
  - Harbor data validation
  - Edge coordinate calculations

**Acceptance Criteria:**
- [ ] 2-8 tests written and failing
- [ ] Tests cover harbor structure and validation
- [ ] Tests are specific and actionable

---

#### Task 5.2: Define Harbor Data and Positions
**Effort:** M (4-8 hours)
**Priority:** P1
**Dependencies:** Task 5.1

Create harbor definitions and standard positions.

**Actions:**
- [ ] Create `src/catan_board/harbors.cljs`
- [ ] Define harbor data:
  ```clojure
  (def harbor-types [:general :wood :brick :wheat :sheep :ore])

  (def harbor-ratios
    {:general 3
     :wood 2, :brick 2, :wheat 2, :sheep 2, :ore 2})

  ; Standard Catan harbor positions (edge locations)
  (def standard-harbor-positions
    [{:edge-coords [[q1 r1] [q2 r2]] :type :general :ratio 3}
     {:edge-coords [[q3 r3] [q4 r4]] :type :wood :ratio 2}
     ; ... 9 total
     ])
  ```
- [ ] Implement harbor generation:
  ```clojure
  (defn generate-harbors []
    "Generate standard or randomized harbor placements"
    ; For MVP, use fixed standard positions
    ; Phase 2 can add randomization
    )
  ```
- [ ] Calculate edge midpoints for rendering

**Acceptance Criteria:**
- [ ] Harbor positions match standard Catan layout
- [ ] Exactly 9 harbors (4 general, 5 specialized)
- [ ] All tests from Task 5.1 pass
- [ ] Harbor data structure is clear and usable

---

#### Task 5.3: Create Harbor Component
**Effort:** M (4-8 hours)
**Priority:** P1
**Dependencies:** Task 5.2

Build component to render harbor indicators.

**Actions:**
- [ ] Create `src/catan_board/components/harbor.cljs`
- [ ] Implement `harbor-indicator` component:
  - Accept props: `edge-coords`, `type`, `ratio`
  - Calculate midpoint of edge
  - Render small rectangle or circle extending from edge
  - Display ratio text ("3:1" or "2:1")
  - For specialized harbors, show resource icon or color
  - Point toward the two hexes it connects
  - Use clear, readable styling
- [ ] Create visual styles:
  - General harbors: Neutral color (gray/white)
  - Specialized harbors: Match resource color
  - Clear borders and text contrast

**Acceptance Criteria:**
- [ ] Harbor indicators are clearly visible
- [ ] Text is readable at normal and zoomed scales
- [ ] Harbor types are visually distinguishable
- [ ] Harbors point to correct hex edges
- [ ] Component is clean and reusable

---

#### Task 5.4: Integrate Harbors into Board
**Effort:** S (2-4 hours)
**Priority:** P1
**Dependencies:** Task 5.3

Add harbor rendering to the main board component.

**Actions:**
- [ ] Update `src/catan_board/components/board.cljs`
- [ ] Subscribe to `:harbors` subscription
- [ ] Render harbor components:
  ```clojure
  (for [harbor @(rf/subscribe [:harbors])]
    ^{:key (:edge-coords harbor)}
    [harbor-indicator harbor])
  ```
- [ ] Ensure proper layering (harbors on top of hexes)
- [ ] Test with full board (hexes + harbors)

**Acceptance Criteria:**
- [ ] All 9 harbors render correctly
- [ ] Harbors are positioned on correct edges
- [ ] Harbors don't obscure important hex information
- [ ] Visual hierarchy is clear

---

#### Task 5.5: Add Harbors to Board Generation
**Effort:** S (2-4 hours)
**Priority:** P1
**Dependencies:** Task 5.4

Include harbor data in generated boards.

**Actions:**
- [ ] Update `src/catan_board/generation.cljs`
- [ ] Modify `generate-board` to include harbors:
  ```clojure
  (defn generate-board []
    {:hexes (generate-hexes)
     :harbors (generate-harbors)
     :metadata {:generated-at (js/Date.)
                :board-id (random-uuid)}})
  ```
- [ ] Update initial DB in `db.cljs` to include harbors
- [ ] Ensure harbors persist through board regeneration

**Acceptance Criteria:**
- [ ] Generated boards include harbor data
- [ ] Harbors are consistent across regenerations (for MVP)
- [ ] Board data structure is complete
- [ ] No errors when accessing harbor data

---

#### Task 5.6: Run and Verify Harbor Tests
**Effort:** XS (< 2 hours)
**Priority:** P1
**Dependencies:** Task 5.5

Verify harbor rendering works correctly.

**Actions:**
- [ ] Run ONLY harbor tests from Task 5.1
- [ ] Test in browser:
  - Generate multiple boards
  - Verify all 9 harbors appear
  - Check harbor positions and types
  - Verify visual clarity
  - Test at different scale levels
- [ ] Verify harbor data in Re-frame DB

**Acceptance Criteria:**
- [ ] All harbor tests pass (2-8 tests)
- [ ] Harbors render correctly on all boards
- [ ] Harbor types and positions are correct
- [ ] Visual presentation is clear

---

## Feature 6: Basic UI Controls + Board Scaling

### Task Group 6: User Interface and Controls
**Priority:** P0 (Critical)
**Dependencies:** Task Group 5
**Estimated Total Time:** 3-4 days

#### Task 6.1: Write UI Component Tests
**Effort:** S (2-4 hours)
**Priority:** P1
**Dependencies:** Task 5.6

Write tests for UI controls and scaling logic.

**Actions:**
- [ ] Create `test/catan_board/ui_test.cljs`
- [ ] Write 2-8 focused tests covering:
  - Generate button click triggers board generation
  - Scale increase/decrease events
  - Scale boundaries (50% min, 200% max)
  - Scale persistence to localStorage
  - Info panel toggle
  - Keyboard shortcuts (not directly testable, but test handlers)

**Acceptance Criteria:**
- [ ] 2-8 tests written and failing
- [ ] Tests cover UI events and state changes
- [ ] Tests are specific and actionable

---

#### Task 6.2: Implement Scale Event Handlers
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 6.1

Create Re-frame events for board scaling.

**Actions:**
- [ ] Update `src/catan_board/events.cljs`
- [ ] Implement scale events:
  ```clojure
  (rf/reg-event-db
   :set-board-scale
   (fn [db [_ scale]]
     (assoc-in db [:ui :board-scale] (clamp scale 50 200))))

  (rf/reg-event-fx
   :increase-scale
   (fn [{:keys [db]} _]
     (let [current (get-in db [:ui :board-scale] 100)
           new-scale (min 200 (+ current 25))]
       {:db (assoc-in db [:ui :board-scale] new-scale)
        :local-storage-save [:board-scale new-scale]})))

  (rf/reg-event-fx
   :decrease-scale
   (fn [{:keys [db]} _]
     (let [current (get-in db [:ui :board-scale] 100)
           new-scale (max 50 (- current 25))]
       {:db (assoc-in db [:ui :board-scale] new-scale)
        :local-storage-save [:board-scale new-scale]})))

  (rf/reg-event-fx
   :reset-scale
   (fn [_]
     {:dispatch [:set-board-scale 100]
      :local-storage-save [:board-scale 100]}))
  ```
- [ ] Implement helper function `clamp` for boundary checking

**Acceptance Criteria:**
- [ ] Scale events update DB correctly
- [ ] Scale stays within 50-200% range
- [ ] Events trigger localStorage saves
- [ ] All scale tests from Task 6.1 pass

---

#### Task 6.3: Implement localStorage Effects
**Effort:** S (2-4 hours)
**Priority:** P1
**Dependencies:** Task 6.2

Create Re-frame effects for localStorage persistence.

**Actions:**
- [ ] Update `src/catan_board/events.cljs` (or create `effects.cljs`)
- [ ] Implement localStorage effects:
  ```clojure
  (rf/reg-fx
   :local-storage-save
   (fn [[key value]]
     (.setItem js/localStorage (name key) (pr-str value))))

  (rf/reg-fx
   :local-storage-load
   (fn [key]
     (when-let [value (.getItem js/localStorage (name key))]
       (rf/dispatch [:local-storage-loaded key (cljs.reader/read-string value)]))))
  ```
- [ ] Add event for loading scale on init:
  ```clojure
  (rf/reg-event-db
   :local-storage-loaded
   (fn [db [_ key value]]
     (assoc-in db [:ui key] value)))
  ```
- [ ] Load scale preference on app initialization
- [ ] Handle missing/corrupt localStorage gracefully

**Acceptance Criteria:**
- [ ] Scale preference saves to localStorage
- [ ] Scale preference loads on app init
- [ ] Missing data doesn't cause errors
- [ ] Corrupt data is handled gracefully

---

#### Task 6.4: Create Generate Button Component
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 6.3

Build the main "Generate New Board" button.

**Actions:**
- [ ] Create `src/catan_board/components/controls.cljs`
- [ ] Implement `generate-button` component:
  ```clojure
  (defn generate-button []
    (let [loading? @(rf/subscribe [:loading?])]
      [:button
       {:on-click #(rf/dispatch [:generate-board])
        :disabled loading?
        :class "generate-btn"}
       (if loading?
         "Generating..."
         "Generate New Board")]))
  ```
- [ ] Style button:
  - Large, prominent
  - Clear text
  - Good contrast
  - Disabled state visual feedback
  - Hover/active states
- [ ] Add loading spinner or animation (optional)

**Acceptance Criteria:**
- [ ] Button is prominent and easy to find
- [ ] Clicking triggers `:generate-board` event
- [ ] Button shows loading state
- [ ] Button is disabled while loading
- [ ] Styling is clean and accessible

---

#### Task 6.5: Create Scale Controls Component
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 6.4

Build board scaling controls.

**Actions:**
- [ ] In `src/catan_board/components/controls.cljs`
- [ ] Implement `scale-controls` component:
  ```clojure
  (defn scale-controls []
    (let [scale @(rf/subscribe [:board-scale])]
      [:div.scale-controls
       [:button {:on-click #(rf/dispatch [:decrease-scale])} "−"]
       [:span.scale-display (str scale "%")]
       [:button {:on-click #(rf/dispatch [:increase-scale])} "+"]
       [:button {:on-click #(rf/dispatch [:reset-scale])} "Reset"]]))
  ```
- [ ] Add keyboard event listener:
  ```clojure
  (defn setup-keyboard-shortcuts []
    (.addEventListener js/document "keydown"
      (fn [e]
        (when (or (.-ctrlKey e) (.-metaKey e))
          (case (.-key e)
            "+" (.preventDefault e) (rf/dispatch [:increase-scale])
            "-" (.preventDefault e) (rf/dispatch [:decrease-scale])
            "0" (.preventDefault e) (rf/dispatch [:reset-scale])
            nil)))))
  ```
- [ ] Add mouse wheel handler (Ctrl/Cmd + wheel)
- [ ] Style controls compactly

**Acceptance Criteria:**
- [ ] Scale controls update board scale
- [ ] Current scale percentage is displayed
- [ ] Keyboard shortcuts work (Ctrl/Cmd +/-)
- [ ] Mouse wheel with Ctrl/Cmd works
- [ ] Controls are compact and unobtrusive
- [ ] Scale boundaries are respected

---

#### Task 6.6: Create Info Panel Component
**Effort:** S (2-4 hours)
**Priority:** P1
**Dependencies:** Task 6.5

Build panel showing board configuration details.

**Actions:**
- [ ] In `src/catan_board/components/info_panel.cljs`
- [ ] Implement `info-panel` component:
  ```clojure
  (defn info-panel []
    (let [show? @(rf/subscribe [:show-info-panel?])
          resource-counts @(rf/subscribe [:resource-counts])
          number-counts @(rf/subscribe [:number-counts])]
      (when show?
        [:div.info-panel
         [:h3 "Board Configuration"]
         [:div.resources
          [:h4 "Resources"]
          (for [[resource count] resource-counts]
            [:div {:key resource}
             (str (name resource) ": " count)])]
         [:div.numbers
          [:h4 "Numbers"]
          (for [[number count] number-counts]
            [:div {:key number}
             (str number ": " count)])]])))
  ```
- [ ] Add toggle button to show/hide
- [ ] Make it collapsible or hideable
- [ ] Style for readability
- [ ] Position at top or side (not blocking board)

**Acceptance Criteria:**
- [ ] Info panel displays resource counts
- [ ] Info panel displays number counts
- [ ] Panel can be toggled on/off
- [ ] Panel doesn't block board visibility
- [ ] Data updates when board regenerates

---

#### Task 6.7: Create Main UI Layout
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 6.6

Combine all UI components into main layout.

**Actions:**
- [ ] Update `src/catan_board/views.cljs`
- [ ] Create main app component:
  ```clojure
  (defn app []
    [:div.catan-app
     [:header
      [:h1 "Catan Digital Board"]
      [generate-button]
      [scale-controls]]
     [:main
      [board-grid]
      [info-panel]]
     [:footer
      [:p "Press Ctrl/Cmd + and - to scale"]]])
  ```
- [ ] Add CSS for layout:
  - Header with controls
  - Main board area (centered)
  - Footer with instructions
  - Responsive design (flexbox or grid)
- [ ] Ensure clean, minimal design
- [ ] Keep board as focal point

**Acceptance Criteria:**
- [ ] All components render correctly
- [ ] Layout is clean and intuitive
- [ ] Board is the focal point
- [ ] Controls are accessible but unobtrusive
- [ ] Layout works at different screen sizes

---

#### Task 6.8: Add CSS Styling
**Effort:** M (4-8 hours)
**Priority:** P1
**Dependencies:** Task 6.7

Create comprehensive CSS for the application.

**Actions:**
- [ ] Update `resources/public/css/style.css`
- [ ] Style all components:
  - App layout (header, main, footer)
  - Board container (centered, responsive)
  - Hexagons (clean, sharp borders)
  - Number tokens (readable, high contrast)
  - Harbors (clear, distinguishable)
  - Buttons (accessible, clear states)
  - Info panel (readable, compact)
  - Scale controls (compact, functional)
- [ ] Add responsive breakpoints:
  - Mobile: Adjust layout for small screens
  - Tablet: Optimize for medium screens
  - Desktop: Full layout
- [ ] Add accessibility features:
  - Focus states
  - High contrast options
  - Clear hover states
- [ ] Test in different browsers

**Acceptance Criteria:**
- [ ] All components are styled consistently
- [ ] Design is clean and professional
- [ ] Board is optimized for projector display
- [ ] Responsive design works on different devices
- [ ] Accessibility features are present
- [ ] Cross-browser compatibility verified

---

#### Task 6.9: Run and Verify UI Tests
**Effort:** XS (< 2 hours)
**Priority:** P1
**Dependencies:** Task 6.8

Verify all UI controls work correctly.

**Actions:**
- [ ] Run ONLY UI tests from Task 6.1
- [ ] Manual testing:
  - Click generate button multiple times
  - Test scale controls (buttons, keyboard, mouse wheel)
  - Verify scale boundaries (50-200%)
  - Test info panel toggle
  - Verify localStorage persistence (refresh browser)
  - Test on different screen sizes
  - Test keyboard shortcuts
- [ ] Verify all features work together

**Acceptance Criteria:**
- [ ] All UI tests pass (2-8 tests)
- [ ] Generate button creates new boards
- [ ] Scale controls work correctly
- [ ] Scale persists across sessions
- [ ] Keyboard shortcuts function
- [ ] Mouse wheel scaling works
- [ ] Info panel displays correct data
- [ ] No console errors

---

## Testing and Quality Assurance

### Task Group 7: Integration and E2E Testing
**Priority:** P1 (High)
**Dependencies:** Task Group 6
**Estimated Total Time:** 2-3 days

#### Task 7.1: Review All Existing Tests
**Effort:** S (2-4 hours)
**Priority:** P1
**Dependencies:** Task 6.9

Review all tests written in previous task groups.

**Actions:**
- [ ] Review hex math tests (Task 1.1)
- [ ] Review resource tests (Task 2.1)
- [ ] Review number token tests (Task 3.1)
- [ ] Review validation tests (Task 4.1)
- [ ] Review generation tests (Task 4.3)
- [ ] Review harbor tests (Task 5.1)
- [ ] Review UI tests (Task 6.1)
- [ ] Total expected: approximately 14-56 tests
- [ ] Ensure all tests are passing
- [ ] Check test coverage

**Acceptance Criteria:**
- [ ] All previously written tests are reviewed
- [ ] All tests are passing
- [ ] Test count is tracked
- [ ] Coverage gaps identified

---

#### Task 7.2: Analyze Test Coverage Gaps
**Effort:** S (2-4 hours)
**Priority:** P1
**Dependencies:** Task 7.1

Identify critical gaps in test coverage for THIS feature.

**Actions:**
- [ ] Analyze integration points:
  - Board generation flow (end-to-end)
  - Re-frame event chains
  - Subscription computations
  - localStorage persistence
- [ ] Identify untested critical workflows:
  - Generate → Display → Regenerate cycle
  - Scale → Save → Load cycle
  - Validation failure → Retry cycle
- [ ] Focus ONLY on gaps related to Phase 1 requirements
- [ ] Do NOT assess entire application coverage
- [ ] Prioritize end-to-end workflows over unit test gaps

**Acceptance Criteria:**
- [ ] Critical gaps are identified and documented
- [ ] Focus is on Phase 1 feature requirements
- [ ] Integration points are prioritized
- [ ] List of up to 10 additional tests is created

---

#### Task 7.3: Write Integration Tests
**Effort:** M (4-8 hours)
**Priority:** P1
**Dependencies:** Task 7.2

Add up to 10 strategic integration tests.

**Actions:**
- [ ] Create `test/catan_board/integration_test.cljs`
- [ ] Write up to 10 integration tests covering:
  - Full board generation workflow
  - Board validation during generation
  - Re-frame event chain (generate → success → display)
  - localStorage save and load cycle
  - Scale changes update board correctly
  - Info panel updates when board regenerates
  - Error handling (generation failures)
  - Cross-component interactions
- [ ] Focus on end-to-end user workflows
- [ ] Use re-frame-test utilities for event testing
- [ ] Skip edge cases unless business-critical

**Acceptance Criteria:**
- [ ] Maximum 10 new tests added
- [ ] Tests cover critical integration points
- [ ] Tests verify end-to-end workflows
- [ ] All new tests pass
- [ ] Total test count: approximately 24-66 tests

---

#### Task 7.4: Run Full Test Suite
**Effort:** XS (< 2 hours)
**Priority:** P0
**Dependencies:** Task 7.3

Run all Phase 1 tests and verify quality.

**Actions:**
- [ ] Run complete test suite
- [ ] Verify all tests pass
- [ ] Check test execution time (should be fast)
- [ ] Review test output for warnings
- [ ] Verify test coverage meets goals (80%+)
- [ ] Fix any failing tests

**Acceptance Criteria:**
- [ ] All Phase 1 tests pass (approximately 24-66 tests)
- [ ] Test execution is fast (< 10 seconds)
- [ ] No warnings or errors
- [ ] Test coverage is acceptable (80%+)
- [ ] CI-ready (tests can run in automated environment)

---

## Manual Testing and Validation

### Task Group 8: Manual QA and Projector Testing
**Priority:** P0 (Critical)
**Dependencies:** Task Group 7
**Estimated Total Time:** 2-3 days

#### Task 8.1: Cross-Browser Testing
**Effort:** M (4-8 hours)
**Priority:** P0
**Dependencies:** Task 7.4

Test application across all target browsers.

**Actions:**
- [ ] Test on Chrome 90+ (primary target)
  - Board rendering
  - All UI controls
  - Keyboard shortcuts
  - localStorage
  - Performance
- [ ] Test on Firefox 88+
  - Same tests as Chrome
  - Check for rendering differences
- [ ] Test on Safari 14+ (macOS)
  - SVG rendering quality
  - localStorage compatibility
  - Keyboard shortcut handling
- [ ] Test on Edge 90+ (Windows)
  - Same tests as Chrome
  - Check for Edge-specific issues
- [ ] Document any browser-specific issues
- [ ] Fix critical issues, defer minor ones

**Acceptance Criteria:**
- [ ] Application works on all target browsers
- [ ] Core functionality is identical across browsers
- [ ] Visual rendering is consistent
- [ ] No critical browser-specific bugs
- [ ] Minor issues are documented

---

#### Task 8.2: Projector Display Testing
**Effort:** M (4-8 hours)
**Priority:** P0
**Dependencies:** Task 8.1

Test board visibility and clarity with actual projector.

**Actions:**
- [ ] Set up projector environment:
  - Project board onto table
  - Test at different scales (50%, 100%, 150%, 200%)
  - Test in different lighting conditions
- [ ] Verify readability:
  - Resource colors are distinct
  - Number tokens are clear
  - Harbors are visible
  - Text is readable from all angles
- [ ] Test with physical pieces:
  - Place settlements, cities, roads on projection
  - Verify alignment at different scales
  - Check for optimal scale percentage
- [ ] Test color contrast:
  - High contrast for number tokens
  - Resource differentiation
  - Harbor visibility
- [ ] Document optimal settings:
  - Recommended scale percentage
  - Lighting recommendations
  - Projector brightness/contrast settings

**Acceptance Criteria:**
- [ ] Board is clearly visible when projected
- [ ] All elements are readable from player positions
- [ ] Physical pieces fit properly at recommended scale
- [ ] Colors are distinct in projection environment
- [ ] Optimal settings are documented

---

#### Task 8.3: Random Generation Quality Testing
**Effort:** S (2-4 hours)
**Priority:** P1
**Dependencies:** Task 8.2

Verify board generation produces quality, varied results.

**Actions:**
- [ ] Generate 100+ boards
- [ ] Verify all boards are valid:
  - No adjacent red numbers
  - Correct resource distribution
  - Correct number distribution
  - Desert has no number
- [ ] Check for variety:
  - Different resource placements
  - Different number placements
  - No obvious patterns or repetition
- [ ] Measure performance:
  - Generation time for each board
  - Average time should be < 1 second
  - No boards take > 2 seconds
- [ ] Check for edge cases:
  - Retry mechanism works
  - No infinite loops
  - Error handling is graceful

**Acceptance Criteria:**
- [ ] 100+ generated boards all pass validation
- [ ] Boards show good variety in layouts
- [ ] Average generation time < 1 second
- [ ] No performance issues or hangs
- [ ] Edge cases are handled correctly

---

#### Task 8.4: Accessibility Testing
**Effort:** S (2-4 hours)
**Priority:** P2
**Dependencies:** Task 8.3

Verify application is accessible and usable.

**Actions:**
- [ ] Keyboard navigation:
  - Tab through all controls
  - Verify focus indicators
  - Test keyboard shortcuts (Ctrl/Cmd +/-)
- [ ] Screen reader testing (basic):
  - Button labels are clear
  - Alt text for visual elements (if applicable)
- [ ] Color contrast:
  - Run automated contrast checker
  - Verify WCAG AA compliance for text
- [ ] Focus states:
  - All interactive elements have visible focus
  - Focus order is logical
- [ ] Mobile/touch testing:
  - Scale controls work on touch devices
  - Buttons are appropriately sized

**Acceptance Criteria:**
- [ ] Keyboard navigation works smoothly
- [ ] Focus indicators are clear
- [ ] Color contrast meets WCAG AA standards
- [ ] Basic screen reader compatibility
- [ ] Touch controls work on mobile devices

---

## Performance and Optimization

### Task Group 9: Performance Optimization
**Priority:** P2 (Medium)
**Dependencies:** Task Group 8
**Estimated Total Time:** 1-2 days

#### Task 9.1: Measure and Optimize Rendering Performance
**Effort:** M (4-8 hours)
**Priority:** P2
**Dependencies:** Task 8.4

Ensure smooth rendering and scaling.

**Actions:**
- [ ] Measure rendering performance:
  - Initial board load time
  - Board regeneration time
  - Scale change smoothness
  - Browser DevTools Performance tab
- [ ] Identify bottlenecks:
  - Excessive re-renders
  - Heavy calculations
  - DOM manipulation issues
- [ ] Apply optimizations:
  - Memoize hex vertex calculations
  - Use React.memo (via Reagent) for components
  - Optimize Re-frame subscriptions
  - Reduce unnecessary DOM nodes
- [ ] Test with React DevTools Profiler
- [ ] Verify 60fps during scale operations
- [ ] Optimize SVG if needed

**Acceptance Criteria:**
- [ ] Board loads in < 3 seconds
- [ ] Board generation completes in < 1 second
- [ ] Scaling is smooth (60fps or close)
- [ ] No jank or stuttering
- [ ] Performance is acceptable on older devices

---

#### Task 9.2: Optimize Bundle Size
**Effort:** S (2-4 hours)
**Priority:** P2
**Dependencies:** Task 9.1

Ensure fast load times by optimizing JavaScript bundle.

**Actions:**
- [ ] Build production bundle:
  - Use Shadow-CLJS release build
  - Enable advanced compilation
  - Check bundle size
- [ ] Analyze bundle:
  - Use source-map-explorer or similar
  - Identify large dependencies
- [ ] Apply optimizations:
  - Remove unused dependencies
  - Tree-shaking via advanced compilation
  - Code splitting if needed (defer for Phase 1)
- [ ] Test production build:
  - Verify functionality is identical
  - Check load time on slow connection
  - Test gzip compression

**Acceptance Criteria:**
- [ ] Production bundle is optimized
- [ ] Load time is < 3 seconds on standard broadband
- [ ] Advanced compilation doesn't break functionality
- [ ] No console errors in production build
- [ ] Bundle size is reasonable (< 500KB gzipped)

---

## Documentation and Deployment Prep

### Task Group 10: Documentation and Deployment
**Priority:** P1 (High)
**Dependencies:** Task Group 9
**Estimated Total Time:** 1-2 days

#### Task 10.1: Write User Documentation
**Effort:** S (2-4 hours)
**Priority:** P1
**Dependencies:** Task 9.2

Create end-user documentation.

**Actions:**
- [ ] Create user guide:
  - How to generate a new board
  - How to use scale controls
  - Keyboard shortcuts reference
  - Recommended projector settings
  - Troubleshooting common issues
- [ ] Add in-app help (optional):
  - Tooltip on controls
  - Help button with instructions
- [ ] Create screenshots or GIFs:
  - Board example
  - Control panel
  - Scaling in action
- [ ] Document browser requirements
- [ ] Add FAQ section

**Acceptance Criteria:**
- [ ] User guide is clear and complete
- [ ] All features are documented
- [ ] Screenshots/GIFs are included
- [ ] Documentation is accessible (README or dedicated page)

---

#### Task 10.2: Write Developer Documentation
**Effort:** S (2-4 hours)
**Priority:** P1
**Dependencies:** Task 10.1

Document code architecture and development workflow.

**Actions:**
- [ ] Update README.md:
  - Project overview
  - Tech stack
  - Installation instructions
  - Development workflow
  - Build and deploy instructions
  - Testing instructions
- [ ] Document code architecture:
  - Re-frame structure
  - Component hierarchy
  - Data flow
  - Key algorithms (hex math, generation, validation)
- [ ] Add code comments:
  - Complex algorithms
  - Non-obvious logic
  - Public API functions
- [ ] Create architecture diagram (optional)

**Acceptance Criteria:**
- [ ] README is comprehensive
- [ ] Development workflow is documented
- [ ] Code architecture is explained
- [ ] Key functions have comments
- [ ] New developers can onboard easily

---

#### Task 10.3: Prepare for Deployment
**Effort:** M (4-8 hours)
**Priority:** P0
**Dependencies:** Task 10.2

Set up deployment configuration and process.

**Actions:**
- [ ] Choose hosting platform:
  - Netlify (recommended for static site)
  - Vercel
  - GitHub Pages
  - Self-hosted (nginx)
- [ ] Create production build script:
  - `shadow-cljs release app`
  - Copy assets to deploy directory
  - Optimize and compress
- [ ] Configure hosting:
  - Set up project on hosting platform
  - Configure build command
  - Configure deploy directory
  - Set up custom domain (optional)
- [ ] Test deployment:
  - Deploy to staging/preview
  - Verify functionality
  - Test on different devices/browsers
  - Check performance
- [ ] Set up CI/CD (optional for Phase 1):
  - GitHub Actions
  - Auto-deploy on push to main

**Acceptance Criteria:**
- [ ] Deployment process is documented
- [ ] Production build works correctly
- [ ] Hosting is configured
- [ ] Test deployment is successful
- [ ] Application is accessible via URL

---

#### Task 10.4: Final QA and Launch Checklist
**Effort:** S (2-4 hours)
**Priority:** P0
**Dependencies:** Task 10.3

Complete final quality assurance before launch.

**Actions:**
- [ ] Run complete QA checklist:
  - All tests pass
  - All acceptance criteria met
  - Cross-browser testing complete
  - Projector testing complete
  - Performance benchmarks met
  - Documentation complete
  - Deployment tested
- [ ] Final manual testing:
  - Generate 20+ boards
  - Test all UI controls
  - Test keyboard shortcuts
  - Test localStorage persistence
  - Test at different scales
  - Test error handling
- [ ] Security check:
  - No console warnings
  - No exposed secrets
  - HTTPS configured (for production)
- [ ] Launch readiness review:
  - All Phase 1 features complete
  - All critical bugs fixed
  - Documentation ready
  - Deployment ready

**Acceptance Criteria:**
- [ ] All Phase 1 acceptance criteria met (see spec)
- [ ] All tests passing (approximately 24-66 tests)
- [ ] All features working correctly
- [ ] No critical bugs
- [ ] Documentation complete
- [ ] Deployment ready
- [ ] Application is production-ready

---

## Summary of Task Groups

1. **Setup and Project Initialization** (4 tasks) - 1 day
2. **Hex Grid Layout System** (5 tasks) - 1 week
3. **Resource Tile Rendering** (5 tasks) - 2-3 days
4. **Number Token Display** (6 tasks) - 2-3 days
5. **Random Board Generation** (7 tasks) - 1 week
6. **Harbor/Port Display** (6 tasks) - 1 week
7. **Basic UI Controls + Board Scaling** (9 tasks) - 3-4 days
8. **Integration and E2E Testing** (4 tasks) - 2-3 days
9. **Manual QA and Projector Testing** (4 tasks) - 2-3 days
10. **Performance Optimization** (2 tasks) - 1-2 days
11. **Documentation and Deployment** (4 tasks) - 1-2 days

**Total Tasks:** 54
**Estimated Timeline:** 3-4 weeks
**Expected Test Count:** 24-66 tests (approximately)

---

## Execution Order Recommendations

### Week 1: Foundation
- Task Group 0: Setup (Day 1)
- Task Group 1: Hex Grid (Days 2-5)

### Week 2: Core Features
- Task Group 2: Resources (Days 1-2)
- Task Group 3: Numbers (Days 3-4)
- Task Group 4: Generation (Day 5)

### Week 3: Complete Features
- Task Group 4: Generation (Days 1-2, continued)
- Task Group 5: Harbors (Days 3-5)

### Week 4: Polish and Launch
- Task Group 6: UI Controls (Days 1-3)
- Task Group 7: Integration Testing (Day 4)
- Task Group 8: Manual QA (Day 5)

### Optional Week 5: Optimization and Deployment
- Task Group 9: Performance (Days 1-2)
- Task Group 10: Documentation and Deployment (Days 3-4)
- Final QA and Launch (Day 5)

---

## Key Implementation Notes

### Technical Approach
- **Framework:** ClojureScript + Reagent + Re-frame
- **Rendering:** SVG for crisp, scalable graphics
- **State Management:** Re-frame event-driven architecture
- **Testing:** cljs.test + re-frame-test
- **Build Tool:** Shadow-CLJS
- **Deployment:** Static site hosting (Netlify recommended)

### Critical Success Factors
1. **Test-Driven Development:** Write tests before implementation for core logic
2. **Incremental Validation:** Run tests after each task group
3. **Projector Testing:** Test with actual projector early and often
4. **Performance Focus:** Keep generation under 1 second
5. **Clean Code:** Follow ClojureScript idioms and best practices

### Risk Mitigation
- **Validation Complexity:** Adjacent red number detection may need iteration
- **Performance:** SVG rendering should be optimized early
- **Browser Compatibility:** Test on Safari early (can be tricky)
- **Projector Visibility:** Get real projector access for testing ASAP

### Dependencies
- No external APIs or backend services
- Minimal third-party libraries (Reagent, Re-frame)
- No database or server required
- LocalStorage only for preferences

### Next Steps After Phase 1
Upon completion:
1. Gather user feedback from real game sessions
2. Test with multiple projector setups
3. Identify pain points and missing features
4. Plan Phase 2: Setup Customization
5. Consider early projector optimization if needed

---

## Task List Maintenance

This task list should be:
- **Updated** as tasks are completed
- **Refined** if requirements change
- **Referenced** daily during development
- **Reviewed** at the end of each week
- **Used** as basis for sprint planning (if using Agile)

Check off tasks as completed, add notes on blockers or changes, and track overall progress toward the 3-4 week timeline.
