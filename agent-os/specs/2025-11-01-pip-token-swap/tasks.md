# Task Breakdown: Pip Token Swap

## Overview
Total Tasks: 17 organized into 4 task groups
Technology Stack: ClojureScript, Re-frame, Reagent, SVG
Feature: Interactive Edit Mode for swapping number tokens on Catan board

## Task List

### State Management Layer

#### Task Group 1: Database Schema & Re-frame Events
**Specialist Role:** ClojureScript/Re-frame Developer
**Dependencies:** None
**Files to Modify:**
- `/home/kcheung/code/catan/src/catan_board/db.cljs`
- `/home/kcheung/code/catan/src/catan_board/events.cljs`
- `/home/kcheung/code/catan/src/catan_board/subs.cljs`

**Tasks:**

- [x] 1.0 Complete state management layer
  - [x] 1.1 Write 2-4 focused tests for state management
    - Test `:toggle-edit-mode` event toggles boolean correctly
    - Test `:select-token` stores coordinate when no selection exists
    - Test `:select-token` swaps tokens when selection exists
    - Test `:clear-token-selection` clears selection state
    - **Location:** `/home/kcheung/code/catan/test/catan_board/token_swap_test.cljs` (new file)
    - **Pattern:** Follow existing test pattern from `/home/kcheung/code/catan/test/catan_board/hex_test.cljs`
  - [x] 1.2 Update database schema in `db.cljs`
    - Add `:edit-mode false` to `:ui` map in `default-db` (line 11)
    - Add `:selected-token-coord nil` to `:ui` map
    - Follow existing pattern: `{:ui {:show-info-panel true ... :edit-mode false :selected-token-coord nil}}`
  - [x] 1.3 Create `:toggle-edit-mode` event in `events.cljs`
    - Use `rf/reg-event-db` pattern (follow `:toggle-tournament-mode` on line 76)
    - Toggle `:edit-mode` boolean with `(update-in db [:ui :edit-mode] not)`
    - Clear selection when disabling: `(assoc-in db [:ui :selected-token-coord] nil)`
  - [x] 1.4 Create `:select-token` event in `events.cljs`
    - Accept `[_ coord]` parameter with token coordinate `[q r]`
    - Logic: If no selection exists, store coord; if selection exists, perform swap
    - Swap implementation: Find hexes by coord, swap `:number` values, clear selection
    - Reference board structure: `(get-in db [:board :hexes])`
  - [x] 1.5 Create `:clear-token-selection` event in `events.cljs`
    - Use `rf/reg-event-db` pattern
    - Set `[:ui :selected-token-coord]` to `nil`
  - [x] 1.6 Update `:generate-board` event in `events.cljs`
    - Add clear selection logic: `(assoc-in db [:ui :selected-token-coord] nil)`
    - Modify existing event handler on line 18
  - [x] 1.7 Create `:edit-mode?` subscription in `subs.cljs`
    - Use `rf/reg-sub` pattern (follow `:tournament-mode?` on line 40)
    - Return `(get-in db [:ui :edit-mode] false)`
  - [x] 1.8 Create `:selected-token-coord` subscription in `subs.cljs`
    - Use `rf/reg-sub` pattern
    - Return `(get-in db [:ui :selected-token-coord] nil)`
  - [x] 1.9 Ensure state management tests pass
    - Run ONLY the 2-4 tests written in 1.1
    - Command: `npx shadow-cljs compile test && node out/node-tests.js`
    - Verify toggle, select, swap, and clear behaviors work
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- Database schema includes `:edit-mode` and `:selected-token-coord` in `:ui` map
- All 4 events (toggle, select, clear, updated generate-board) properly registered
- Both subscriptions properly registered and return correct default values
- The 2-4 tests written in 1.1 pass
- Edit mode can be toggled on/off
- Token coordinates can be selected and stored
- Two selected tokens swap their number values
- Selection state clears when generating new board or toggling edit mode off

---

### UI Components Layer

#### Task Group 2: Sidebar Edit Mode Toggle
**Specialist Role:** Frontend/Reagent Developer
**Dependencies:** Task Group 1 (requires subscriptions and events)
**Files to Modify:**
- `/home/kcheung/code/catan/src/catan_board/views.cljs`

**Tasks:**

- [x] 2.0 Complete Edit Mode toggle UI
  - [x] 2.1 Write 2-3 focused tests for toggle UI component
    - Test Edit Mode toggle renders with correct initial state
    - Test clicking toggle dispatches `:toggle-edit-mode` event
    - Test help text displays correctly
    - **Location:** `/home/kcheung/code/catan/test/catan_board/views_test.cljs` (new file)
    - **Pattern:** Test component rendering and event dispatch
  - [x] 2.2 Add `:edit-mode?` subscription to `main-panel` component
    - Add subscription on line 9: `edit-mode? @(rf/subscribe [:edit-mode?])`
    - Follow existing pattern for `tournament-mode?` subscription
  - [x] 2.3 Create Edit Mode toggle section in sidebar
    - Add after Tournament Mode section (after line 36)
    - Copy structure from Tournament Mode toggle (lines 30-36)
    - Use `.toggle-container` and `.toggle-label` CSS classes
    - Checkbox input with `:checked edit-mode?`
    - Dispatch `:toggle-edit-mode` on `:on-change`
  - [x] 2.4 Add toggle label and help text
    - Label text: "Edit Mode"
    - Help text: "Click tokens to swap their numbers"
    - Use `.help-text` class (matches existing pattern on line 36)
  - [x] 2.5 Ensure UI toggle tests pass
    - Run ONLY the 2-3 tests written in 2.1
    - Verify component renders and dispatches events correctly
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 2-3 tests written in 2.1 pass
- Edit Mode toggle appears in sidebar below Tournament Mode
- Toggle correctly reflects current edit mode state
- Clicking toggle dispatches `:toggle-edit-mode` event
- Help text is visible and descriptive
- Styling matches existing Tournament Mode toggle

---

### Interactive Board Layer

#### Task Group 3: Token Click Handlers & Visual Feedback
**Specialist Role:** Frontend/SVG/Interaction Developer
**Dependencies:** Task Groups 1 & 2
**Files to Modify:**
- `/home/kcheung/code/catan/src/catan_board/views/hex.cljs`
- `/home/kcheung/code/catan/resources/public/css/styles.css`

**Tasks:**

- [x] 3.0 Complete interactive token swapping
  - [x] 3.1 Write 3-5 focused tests for token interactions
    - Test token receives `:on-click` handler when edit mode enabled
    - Test clicking token dispatches `:select-token` with correct coord
    - Test selected token has `.token-selected` class applied
    - Test clicking background dispatches `:clear-token-selection`
    - Test tokens are non-clickable when edit mode disabled
    - **Location:** `/home/kcheung/code/catan/test/catan_board/hex_interactions_test.cljs` (new file)
    - **Pattern:** Test event handlers and conditional rendering
  - [x] 3.2 Add subscriptions to `hex-grid` component
    - Pass `edit-mode?` and `selected-token-coord` to `hex-grid` function
    - Modify function signature on line 289: `[hexes harbors]` → `[hexes harbors edit-mode? selected-token-coord]`
    - Update component call in `views.cljs` line 63: `[hex-view/hex-grid hexes harbors]` → `[hex-view/hex-grid hexes harbors @(rf/subscribe [:edit-mode?]) @(rf/subscribe [:selected-token-coord])]`
  - [x] 3.3 Pass edit mode state to `hex-tile` component
    - Modify `hex-tile` function signature on line 88: `[hex-data]` → `[hex-data edit-mode? selected-token-coord]`
    - Update `hex-tile` calls in `hex-grid` (line 318) to pass parameters
  - [x] 3.4 Add conditional `:on-click` handler to number token group
    - Locate number token `[:g ...]` element (starts line 122)
    - Add `:on-click` handler when `edit-mode?` is true
    - Handler: `#(when edit-mode? (rf/dispatch [:select-token coord]))`
    - Prevent event bubbling: Use `.stopPropagation()` on event
  - [x] 3.5 Add conditional CSS class for selected token
    - Check if current token coord matches `selected-token-coord`
    - Add `:class` attribute to number token circle (line 124)
    - Logic: `{:class (when (= coord selected-token-coord) "token-selected")}`
  - [x] 3.6 Add background click handler to SVG root
    - Modify `[:svg ...]` element on line 306
    - Add `:on-click` handler: `#(when edit-mode? (rf/dispatch [:clear-token-selection]))`
    - Ensure token clicks stop propagation (prevents clearing when clicking token)
  - [x] 3.7 Create CSS animation for pulsing glow effect in `styles.css`
    - Add at end of file (after line 254)
    - Create `@keyframes token-pulse` with opacity/scale animation
    - Keyframes: 0% (opacity 1, scale 1) → 50% (opacity 0.6, scale 1.15) → 100% (opacity 1, scale 1)
    - Duration: 1.5s infinite
  - [x] 3.8 Create `.token-selected` CSS class in `styles.css`
    - Apply animation: `animation: token-pulse 1.5s ease-in-out infinite`
    - Add glow filter: `filter: drop-shadow(0 0 8px #3498db)`
    - Add scale transform: `transform: scale(1.1)`
    - Smooth transitions: `transition: all 0.2s ease`
    - Use cyan/blue glow to match app theme (`#3498db`)
  - [x] 3.9 Ensure token interaction tests pass
    - Run ONLY the 3-5 tests written in 3.1
    - Verify click handlers work and selection state updates
    - Do NOT run the entire test suite at this stage

**Acceptance Criteria:**
- The 3-5 tests written in 3.1 pass
- Tokens are clickable only when Edit Mode is enabled
- First token click shows pulsing glow effect
- Selected token has visual indicator (glow + scale)
- Second token click immediately swaps the two number values
- Clicking background/non-token areas clears selection
- Visual feedback is smooth and performant
- No event bubbling issues between token and background clicks

---

### Testing & Verification Layer

#### Task Group 4: Integration Testing & Edge Cases
**Specialist Role:** QA/Testing Specialist
**Dependencies:** Task Groups 1-3
**Files to Modify:**
- `/home/kcheung/code/catan/test/catan_board/token_swap_integration_test.cljs` (new file)

**Tasks:**

- [x] 4.0 Review existing tests and fill critical gaps only
  - [x] 4.1 Review tests from Task Groups 1-3
    - Review the 2-4 tests from state management (Task 1.1)
    - Review the 2-3 tests from UI toggle (Task 2.1)
    - Review the 3-5 tests from token interactions (Task 3.1)
    - Total existing tests: approximately 7-12 tests
  - [x] 4.2 Analyze test coverage gaps for pip token swap feature only
    - Identify critical user workflows lacking test coverage
    - Focus ONLY on gaps related to this spec's requirements
    - Do NOT assess entire application test coverage
    - Priority areas: end-to-end swap flow, edge cases, state cleanup
  - [x] 4.3 Write up to 8 additional integration tests maximum
    - **Test 1:** Complete swap workflow (toggle edit mode → select token 1 → select token 2 → verify swap → verify selection cleared)
    - **Test 2:** Cancel selection workflow (select token → click background → verify selection cleared)
    - **Test 3:** Disable edit mode clears selection (select token → toggle edit mode off → verify selection cleared)
    - **Test 4:** Generate new board clears selection (select token → generate board → verify selection cleared)
    - **Test 5:** Rapid clicking doesn't create broken states (click multiple tokens quickly → verify only last two swapped)
    - **Test 6:** Swap red numbers (6 and 8) successfully (no tournament validation)
    - **Test 7:** Swap creates adjacent red numbers without warnings
    - **Test 8:** Selection state persists across board scale changes
    - **Location:** `/home/kcheung/code/catan/test/catan_board/token_swap_integration_test.cljs`
    - **Pattern:** End-to-end workflow tests, not unit tests
    - Add ONLY tests that cover critical gaps, skip if existing tests sufficient
  - [x] 4.4 Run feature-specific tests only
    - Run ONLY tests related to pip token swap feature
    - Expected total: approximately 15-20 tests maximum
    - Command: `npx shadow-cljs compile test && node out/node-tests.js --namespace catan-board.token-swap*`
    - Do NOT run the entire application test suite
    - Verify all critical workflows pass

**Acceptance Criteria:**
- All feature-specific tests pass (approximately 15-20 tests total)
- Critical user workflows for pip token swap are covered
- No more than 8 additional tests added in this task group
- Edge cases handled: rapid clicking, mode changes, board regeneration
- No tournament validation occurs during or after swaps
- Selection state properly cleaned up in all scenarios
- Performance is acceptable (no lag from animations or event handlers)

---

## Execution Order

**Recommended implementation sequence:**
1. **Task Group 1:** State Management Layer (database schema, events, subscriptions)
2. **Task Group 2:** Sidebar Edit Mode Toggle (UI control)
3. **Task Group 3:** Interactive Board Layer (token clicks, visual feedback, CSS animations)
4. **Task Group 4:** Integration Testing & Edge Cases (comprehensive verification)

**Rationale:**
- State management must be in place before UI can subscribe to it
- Toggle UI provides user control before implementing interactions
- Token interactions depend on both state and toggle being functional
- Integration testing validates the complete feature after all pieces are implemented

---

## Implementation Notes

### Code Patterns to Follow

**Re-frame Events:**
```clojure
(rf/reg-event-db
 :event-name
 (fn [db [_ param]]
   (update-in db [:path :to :key] fn)))
```

**Re-frame Subscriptions:**
```clojure
(rf/reg-sub
 :subscription-name
 (fn [db _]
   (get-in db [:path :to :key] default-value)))
```

**Reagent Component with Subscription:**
```clojure
(let [value @(rf/subscribe [:subscription-name])]
  [:div
   [:input {:checked value
            :on-change #(rf/dispatch [:event-name])}]])
```

**SVG Event Handlers:**
```clojure
[:circle
 {:on-click #(do
               (.stopPropagation %)
               (rf/dispatch [:event-name param]))}]
```

### Testing Pattern

**Limit test scope during development:**
- Each task group writes 2-8 focused tests maximum
- Tests cover only critical behaviors for that layer
- Run only newly written tests, not entire suite
- Integration tests (Task Group 4) add maximum 8 tests for gaps
- Total expected tests: 15-20 for entire feature

**Test-driven approach:**
- Each task group starts with writing tests (x.1 sub-task)
- Implement functionality (x.2-x.8 sub-tasks)
- End with running ONLY those specific tests (x.9 sub-task)
- Final integration testing validates complete feature

### Tech Stack Alignment

**ClojureScript/Re-frame:**
- Use immutable data structures
- Follow re-frame reactive data flow (events → state → subscriptions → views)
- Keep components pure and side-effect free
- Use `rf/dispatch` for all state changes

**SVG/Reagent:**
- Leverage existing hex rendering in `views/hex.cljs`
- Use conditional rendering based on subscriptions
- Prevent event bubbling with `.stopPropagation()`
- Apply CSS classes conditionally with `:class` attribute

**CSS:**
- Follow existing design system (cyan/blue theme `#3498db`)
- Use CSS animations for performance (not JavaScript)
- Match existing transition timings (0.2s, 0.3s)
- Reuse existing classes (`.toggle-container`, `.help-text`, etc.)

---

## File Reference Guide

**Core Application Files:**
- `/home/kcheung/code/catan/src/catan_board/db.cljs` - Application state schema
- `/home/kcheung/code/catan/src/catan_board/events.cljs` - Re-frame event handlers
- `/home/kcheung/code/catan/src/catan_board/subs.cljs` - Re-frame subscriptions
- `/home/kcheung/code/catan/src/catan_board/views.cljs` - Main UI components & sidebar
- `/home/kcheung/code/catan/src/catan_board/views/hex.cljs` - Hex tile and board rendering
- `/home/kcheung/code/catan/resources/public/css/styles.css` - Application styles

**Test Files (to be created):**
- `/home/kcheung/code/catan/test/catan_board/token_swap_test.cljs` - State management tests
- `/home/kcheung/code/catan/test/catan_board/views_test.cljs` - UI component tests
- `/home/kcheung/code/catan/test/catan_board/hex_interactions_test.cljs` - Interaction tests
- `/home/kcheung/code/catan/test/catan_board/token_swap_integration_test.cljs` - Integration tests

**Existing Test Reference:**
- `/home/kcheung/code/catan/test/catan_board/hex_test.cljs` - Example test patterns

---

## Success Metrics

- [x] Edit Mode toggle appears and functions correctly in sidebar
- [x] Clicking first token shows clear pulsing glow effect
- [x] Clicking second token immediately swaps number values
- [x] Background clicks cancel selection without errors
- [x] Generating new board clears selection state
- [x] Disabling edit mode clears selection state
- [x] Swaps can create any configuration including adjacent red numbers
- [x] No tournament validation occurs during or after swaps
- [x] No performance degradation from animations or event handlers
- [x] All 15-20 feature-specific tests pass
- [x] Visual feedback is smooth and professional
