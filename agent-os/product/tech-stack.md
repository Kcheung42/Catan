# Tech Stack

## Overview

The Catan Digital Board application uses a Clojure/ClojureScript full-stack architecture with a focus on simplicity, interactive development, and reliable performance for projector display use cases.

## Backend

### Core Framework
- **Clojure 1.11+**: Primary backend language for API and business logic
- **Ring**: HTTP server abstraction and middleware
- **Compojure**: HTTP routing library for defining API endpoints
- **Reitit**: Alternative modern routing library (consider as Compojure alternative for better data-driven routing)

### API and Data
- **Cheshire**: JSON encoding/decoding for API responses
- **Spec/Malli**: Data validation and specification for board configurations
- **Mount/Component**: Lifecycle management for application state and dependencies

### Server
- **http-kit**: Async HTTP server (lightweight, fast)
- **Jetty**: Alternative production-grade servlet container

### Development Tools
- **REPL**: Interactive development and debugging
- **tools.namespace**: Code reloading during development
- **clj-kondo**: Static code analysis and linting

## Frontend

### Core Framework
- **ClojureScript 1.11+**: Primary frontend language compiled to JavaScript
- **Reagent**: React wrapper providing reactive components with Hiccup syntax
- **Re-frame**: State management framework built on Reagent with event-driven architecture

### Graphics Rendering
- **SVG (via Reagent)**: Primary rendering approach for hexagonal tiles, scalable and crisp for projector displays
- **Canvas API (optional)**: Alternative for performance optimization if SVG rendering becomes bottleneck

### UI Components
- **Hiccup syntax**: Declarative markup for UI structure
- **CSS/Garden**: Styling (Garden for Clojure-based CSS generation, or plain CSS)
- **Tailwind CSS (optional)**: Utility-first CSS framework for rapid styling

### State Management
- **Re-frame subscriptions**: Reactive queries for derived state
- **Re-frame events**: Command dispatching for state updates
- **Re-frame effects**: Side effects management (localStorage, API calls)
- **Re-frame coeffects**: Context injection for handlers

### Local Storage
- **Browser localStorage API**: Persist saved board configurations client-side
- **Transit**: Efficient data serialization format for localStorage

## Build Tools

### Primary Build Tool
- **Shadow-CLJS**: Recommended modern build tool with excellent developer experience
  - Hot code reloading
  - npm integration
  - Optimized production builds
  - Source maps for debugging

### Alternative Build Tools
- **Figwheel Main**: Alternative to Shadow-CLJS with similar hot-reloading capabilities
- **lein-cljsbuild**: Traditional Leiningen-based ClojureScript compilation

### Package Management
- **deps.edn**: Clojure dependency management (recommended)
- **Leiningen**: Alternative project automation and dependency management

## Testing

### Backend Testing
- **clojure.test**: Built-in unit testing framework
- **Midje/Expectations**: Alternative testing libraries with more expressive syntax

### Frontend Testing
- **cljs.test**: ClojureScript unit testing
- **re-frame-test**: Testing utilities specific to re-frame applications
- **day8/re-frame-10x**: Debugging and inspection tool for re-frame

### Integration Testing
- **kaocha**: Modern test runner with watch mode and plugins
- **Playwright/Puppeteer (via cljs)**: Browser automation for end-to-end testing

## Development Environment

### REPL-Driven Development
- **CIDER (Emacs)**: Mature Clojure development environment
- **Calva (VS Code)**: Modern Clojure extension with strong REPL integration
- **Cursive (IntelliJ)**: Commercial IDE plugin with excellent tooling

### Code Quality
- **clj-kondo**: Linting and static analysis
- **cljfmt**: Code formatting
- **kibit**: Static code analyzer suggesting idiomatic Clojure

## Deployment

### Hosting Options
- **Netlify/Vercel**: Static frontend hosting with CDN (if backend is minimal)
- **Heroku**: Simple full-stack deployment with Clojure buildpack
- **DigitalOcean/AWS**: VPS or container-based deployment for more control

### Build Artifacts
- **Uberjar**: Self-contained JAR file with embedded HTTP server for backend
- **Optimized JavaScript**: Advanced compilation output for frontend with tree-shaking

### Static Assets
- **CDN (Cloudflare)**: Serve static assets with caching for optimal load times
- **nginx**: Reverse proxy and static file serving (if self-hosting)

## Browser Support

### Target Browsers
- **Chrome 90+**: Primary development target
- **Firefox 88+**: Full support
- **Safari 14+**: macOS/iOS support
- **Edge 90+**: Windows support

### Web APIs Used
- **Fullscreen API**: For projector mode
- **localStorage API**: For board configuration persistence
- **CSS Grid/Flexbox**: For responsive layouts
- **SVG 2.0**: For hexagonal tile rendering

## Libraries and Utilities

### Clojure Libraries
- **clojure/data.json**: Alternative JSON library (if not using Cheshire)
- **medley**: Useful collection manipulation functions
- **camel-snake-kebab**: String case conversion utilities

### ClojureScript Libraries
- **cljs-ajax**: HTTP client for API calls from frontend
- **reagent-forms**: Form handling (if needed for advanced setup UI)
- **goog.string/goog.array**: Google Closure library utilities

### Hexagonal Grid Math
- **Custom implementation**: Hexagonal coordinate system (cube or axial coordinates)
- **Reference: Red Blob Games**: Algorithm reference for hex grid layout calculations

## Performance Optimization

### Frontend Performance
- **React.memo (via Reagent)**: Component memoization to prevent unnecessary re-renders
- **Re-frame subscriptions caching**: Automatic memoization of derived data
- **SVG optimization**: Minimize DOM nodes, use CSS transforms over attribute changes
- **Code splitting**: Lazy load non-critical features (board library, export/import)

### Backend Performance
- **HTTP/2**: Enable for faster asset loading
- **Gzip compression**: Reduce payload size
- **Caching headers**: Aggressive caching for static assets

## Development Workflow

### Local Development
1. Start backend REPL with `clj` or `lein repl`
2. Start Shadow-CLJS with `shadow-cljs watch app`
3. Connect editor to REPL for interactive development
4. Changes hot-reload automatically in browser

### Production Build
1. Compile ClojureScript with advanced optimizations: `shadow-cljs release app`
2. Build backend uberjar: `clj -T:build uber` or `lein uberjar`
3. Deploy uberjar to hosting platform
4. Serve compiled JavaScript assets via CDN or static host

## Security Considerations

### Client-Side Security
- **No sensitive data**: All data is client-side board configurations
- **Input validation**: Validate board configurations before rendering
- **XSS prevention**: Reagent escapes strings by default

### Backend Security (if applicable)
- **CORS configuration**: If API endpoints are exposed
- **Rate limiting**: Prevent abuse of board generation endpoints
- **HTTPS**: Enforce encrypted connections in production

## Notes

- Focus on simplicity and fast iteration over complex architecture
- Leverage Clojure's REPL for rapid prototyping and debugging
- SVG rendering provides crisp visuals at any zoom level for projector use
- Re-frame architecture keeps state management predictable and debuggable
- Shadow-CLJS recommended for best developer experience and build performance
