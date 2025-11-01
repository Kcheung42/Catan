# Specification: Pip Token Swap

## Goal
Enable users to swap number tokens on the Catan board through an interactive Edit Mode that allows clicking two tokens to exchange their values.

## User Stories
- As a board setup coordinator, I want to swap number tokens so that I can manually adjust the board configuration without regenerating
- As a player, I want visual feedback when selecting a token so that I know which token will be swapped
- As a user, I want to easily cancel a token selection so that I can change my mind without completing the swap

## Core Requirements

### Functional Requirements
- Users can toggle Edit Mode on/off to enable token swapping
- In Edit Mode, clicking a token selects it with visual feedback (pulsing glow)
- Clicking a second token immediately swaps the two number values
- Clicking background/non-token areas cancels the current selection
- Swaps are unrestricted - no validation against tournament mode rules
- Generating a new board clears any active token selection

### Non-Functional Requirements
- Visual feedback must be clear and performant (CSS-based animations preferred)
- Selection state must be properly managed to avoid orphaned selections
- UI must be responsive and work with existing board scaling
- Click event handling must prevent unintended bubbling

## Visual Design
No mockups provided. Design follows existing UI patterns:
- Edit Mode toggle similar to Tournament Mode toggle in sidebar
- Pulsing glow effect using CSS animations on selected token
- Selected token slightly enlarged (scale effect) for emphasis
- Visual indicator removed immediately after swap or cancellation

## Reusable Components

### Existing Code to Leverage
**Re-frame Events Pattern:**
- `events.cljs` - Follow existing event handler patterns like `:toggle-tournament-mode` and `:generate-board`
- Use `rf/reg-event-db` for state mutations
- Follow pattern: `(fn [db _] (update-in db [:ui :key] fn))`

**Re-frame Subscriptions Pattern:**
- `subs.cljs` - Follow existing subscription patterns like `:tournament-mode?` and `:show-info-panel?`
- Use `rf/reg-sub` for UI state subscriptions
- Follow pattern: `(fn [db _] (get-in db [:ui :key] default))`

**UI Toggle Pattern:**
- `views.cljs` - Reuse existing toggle component structure from Tournament Mode
- Follow `.toggle-container` and `.toggle-label` CSS classes
- Use checkbox input with `:on-change` event dispatch

**SVG Token Rendering:**
- `views/hex.cljs` - Extend existing number token rendering in `hex-tile` function
- Leverage existing circle and text elements (lines 124-152)
- Add conditional class or style based on selection state

**CSS Styling Patterns:**
- `styles.css` - Follow existing button, toggle, and transition patterns
- Reuse `.toggle-container`, `.toggle-label`, `.help-text` classes
- Create new animation using existing transition timing (0.2s, 0.3s)

### New Components Required
**Edit Mode State:**
- Need new UI state key `:edit-mode` (boolean)
- Need new UI state key `:selected-token-coord` (stores [q r] or nil)
- Cannot reuse existing state - this is new functionality

**Token Click Handlers:**
- Need new event `:toggle-edit-mode` for mode toggle
- Need new event `:select-token` for token click in Edit Mode
- Need new event `:clear-token-selection` for background clicks
- Need new event `:swap-tokens` for executing the swap

**Pulsing Glow Animation:**
- Need new CSS animation for pulsing effect
- Cannot reuse existing transitions - requires keyframe animation
- Should pulse opacity and scale subtly

## Technical Approach

### Database Schema
Add to `db.cljs` default-db:
```clojure
{:ui {:edit-mode false
      :selected-token-coord nil
      ;; ... existing UI state
      }}
```

### Re-frame Events
Add to `events.cljs`:
- `:toggle-edit-mode` - Toggle edit mode boolean, clear selection when disabled
- `:select-token` - Handle token click: if no selection, store coord; if selection exists, swap
- `:clear-token-selection` - Clear selected-token-coord
- Update `:generate-board` - Clear selection state when generating new board

### Re-frame Subscriptions
Add to `subs.cljs`:
- `:edit-mode?` - Subscribe to edit mode state
- `:selected-token-coord` - Subscribe to selected token coordinate

### Frontend Components
Modify `views.cljs`:
- Add Edit Mode toggle in sidebar (after Tournament Mode section)
- Include help text: "Click tokens to swap their numbers"

Modify `views/hex.cljs`:
- Add conditional `:on-click` handler to number token group when Edit Mode is active
- Add conditional CSS class or inline style for pulsing effect when token is selected
- Pass edit-mode and selected-token-coord as subscriptions to hex-grid
- Add background click handler to SVG root element for clearing selection

### CSS Animations
Add to `styles.css`:
- Keyframe animation for pulsing glow effect
- CSS class `.token-selected` with animation, scale transform, and filter effects
- Use existing color scheme (cyan/blue glow to match app theme)

### Testing Requirements
- Test toggle Edit Mode on/off
- Test selecting first token shows visual indicator
- Test selecting second token swaps values and clears selection
- Test clicking background clears selection
- Test disabling Edit Mode clears selection
- Test generating new board clears selection
- Test rapid clicking doesn't create broken states
- Verify swaps work for all number combinations including red numbers (6, 8)
- Verify no tournament validation occurs

## Out of Scope
- Confirmation dialogs before swapping
- Undo/redo functionality for swaps
- Swap history tracking
- Multi-token swaps (selecting more than 2 tokens)
- Tournament mode validation during or after swaps
- Warning messages about adjacent red numbers
- Drag-and-drop swap interaction
- Keyboard-based token selection
- Mobile/touch-specific gestures beyond standard tap

## Success Criteria
- Edit Mode toggle appears in sidebar and works correctly
- Selected token displays clear pulsing glow effect
- Clicking two tokens swaps their number values immediately
- Background click cancels selection without errors
- Generating new board clears selection state
- Swaps can create any configuration including adjacent red numbers
- No performance degradation from animation or event handlers
- Visual feedback is smooth and professional
