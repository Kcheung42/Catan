# Spec Requirements: Pip Token Swap

## Initial Description
Allow users to swap 2 pip tokens. When a user clicks on a pip token they may click on a second one and switch the two.

## Requirements Discussion

### First Round Questions

**Q1:** For the selection UI/UX - when a user clicks on the first pip token, should it show a visual indicator (like highlighting, border, or animation) to show it's selected and waiting for a second token to be clicked?
**Answer:** YES - first clicked token should show a visual indicator

**Q2:** Should there be any constraints on which tokens can be swapped? For example, should we validate against tournament mode rules that prevent adjacent red numbers (6s and 8s)?
**Answer:** NO - do NOT validate against tournament mode rules. Allow swaps that would create adjacent red numbers.

**Q3:** For the swap interaction flow - after clicking two tokens, should there be a confirmation step, or should the swap happen immediately?
**Answer:** NO confirmation needed - immediate swap on second click

**Q4:** If a user clicks a token to select it, then changes their mind, how should they cancel the selection? Should clicking the same token again deselect it, or clicking anywhere else on the board, or both?
**Answer:** Click anywhere else on the board (background/other areas) to cancel selection

**Q5:** Should this swap functionality be available at all times, or should there be a "swap mode" toggle that users enable when they want to swap tokens?
**Answer:** There should be an "Edit Mode" toggle (not just "swap mode" - call it "Edit Mode")

**Q6:** For visual feedback during selection - what specific indicator would you prefer for the selected token? (e.g., pulsing animation, colored border, glow effect, scale up slightly, etc.)
**Answer:** Use a pulsing glow effect for the selected token

**Q7:** After a swap is completed, should the board automatically re-validate for tournament mode rules and show warnings if violations exist, or just silently allow any configuration?
**Answer:** NO - do not re-validate or show warnings after swaps

**Q8:** How should this feature integrate with the existing board generation? Should generating a new board clear any active selection state?
**Answer:** YES - generating new board should clear any active selection state

**Q9:** Are there any features or behaviors you specifically want to exclude from this implementation? (e.g., undo/redo functionality, swap history, multi-token swaps, etc.)
**Answer:** NO additional exclusions beyond what was already listed

### Existing Code to Reference
Not applicable - no similar features were identified for reference.

### Follow-up Questions
No follow-up questions were needed.

## Visual Assets

### Files Provided:
No visual assets provided.

### Visual Insights:
No visual assets to analyze.

## Requirements Summary

### Functional Requirements

**Edit Mode Toggle:**
- Add an "Edit Mode" toggle control (NOT "swap mode" - must be called "Edit Mode")
- When Edit Mode is enabled, pip tokens become clickable for swapping
- When Edit Mode is disabled, normal board behavior applies

**Token Selection Flow:**
- User clicks first pip token → token shows pulsing glow effect
- Token remains selected with visual indicator until:
  - User clicks a second token (triggers swap), OR
  - User clicks anywhere else on the board/background (cancels selection)
- Selection state should track which token is currently selected

**Swap Execution:**
- When user clicks second pip token while first is selected:
  - Immediately swap the two token values (no confirmation dialog)
  - Clear selection state
  - Remove visual indicator from previously selected token
  - Update board display with swapped values

**Visual Feedback:**
- Selected token must display a pulsing glow effect and slightly enlarged
- Pulsing should be clearly visible and indicate "waiting for second selection"
- After swap completes, visual indicator is removed

**Cancellation Behavior:**
- Clicking anywhere on the board (background, hex tiles, other non-token areas) while a token is selected should:
  - Clear the selection state
  - Remove the pulsing glow effect
  - Return to normal Edit Mode state (ready for new selection)

**No Validation Constraints:**
- Do NOT validate swaps against tournament mode rules
- Allow swaps that create adjacent red numbers (6s and 8s)
- Do NOT show warnings or re-validate board after swaps
- Silently allow any token configuration

**Integration with Board Generation:**
- Generating a new board must clear any active selection state
- If a token is selected when new board is generated, remove selection
- Ensure no orphaned selection state persists

### Reusability Opportunities
No existing similar features were identified for potential code reuse.

### Scope Boundaries

**In Scope:**
- Edit Mode toggle UI control
- Click-to-select first pip token
- Pulsing glow visual effect for selected token
- Click second token to execute immediate swap
- Click background/non-token areas to cancel selection
- Clear selection state on new board generation
- Allow unrestricted swaps (no tournament validation)

**Out of Scope:**
- Confirmation dialogs before swapping
- Undo/redo functionality for swaps
- Swap history tracking
- Multi-token swaps (more than 2 at once)
- Tournament mode validation during swaps
- Warning messages about rule violations
- Drag-and-drop swap interaction
- Keyboard-based token selection
- Mobile/touch-specific gestures

### Technical Considerations

**State Management:**
- Need to track Edit Mode enabled/disabled state
- Need to track currently selected token (if any)
- Selection state must be clearable on board generation

**Visual Implementation:**
- Implement pulsing glow effect for selected tokens
- Ensure visual effect is performant and visually clear
- Consider CSS animations or SVG effects for pulsing

**Event Handling:**
- Token click events when Edit Mode is enabled
- Background/board click events for cancellation
- Prevent token clicks from bubbling to background click handler

**Integration Points:**
- Hook into board generation logic to clear selection state
- Coordinate with existing token rendering code
- Work with current board state management system

**Edge Cases to Handle:**
- User generates new board while token is selected
- User toggles Edit Mode off while token is selected
- Rapid clicking on multiple tokens in succession
- Clicking the same token twice (should this cancel or be ignored?)
