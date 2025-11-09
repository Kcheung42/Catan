# Catan Digital Board

A projector-optimized web application that replaces the physical Catan board game board. Display the board via projector and play with physical pieces on top.

## Features

- Random board generation following official Catan rules
- 20 hex tiles with 6 resource types (wood, brick, wheat, sheep, ore, desert)
- Number tokens (2-12) with probability indicators
- 9 harbor positions (4 general 3:1, 5 specialized 2:1)
- Board scaling (50% to 200%) for different projector setups
- Keyboard shortcuts for quick scaling

## Tech Stack

- **Frontend**: ClojureScript + Reagent + Re-frame
- **Build Tool**: Shadow-CLJS
- **Rendering**: SVG for crisp projector display

## Development

### Prerequisites

- Node.js (v16+)
- Java (v11+) for ClojureScript compilation

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:8081 in your browser.

### Build for Production

```bash
npm run build
```

The compiled application will be in `resources/public/`.

## Project Structure

```
src/catan_board/
├── core.cljs         # Application entry point
├── db.cljs           # Initial state
├── events.cljs       # Re-frame event handlers
├── subs.cljs         # Re-frame subscriptions
├── views.cljs        # React components
└── utils/            # Helper functions
```

## Keyboard Shortcuts

- `Ctrl/Cmd +` - Increase board scale
- `Ctrl/Cmd -` - Decrease board scale
- `Ctrl/Cmd 0` - Reset to 100% scale

## Roadmap

See `agent-os/product/roadmap.md` for the full development roadmap.

**Phase 1 (Current)**: Core Board Display
- ✓ Project setup
- ⏳ Hex grid layout
- ⏳ Resource tile rendering
- ⏳ Number tokens
- ⏳ Random generation
- ⏳ Harbor display
- ⏳ UI controls & scaling

## License

MIT
