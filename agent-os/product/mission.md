# Product Mission

## Pitch
Catan Digital Board is a web application that serves as a digital replacement for the physical Catan board, designed to be displayed via projector while players use physical game pieces (settlements, cities, roads, robber) on top of the projection. This is a display-only tool for the base Catan game - no game state tracking, no expansions, just the board itself.

## Users

### Primary Customers
- **Catan Players Without Boards**: Players who have game pieces but lack the physical board or have a damaged board
- **Board Game Cafes & Gaming Spaces**: Venues that need durable, reusable board solutions for high-traffic gameplay
- **Tech-Forward Game Groups**: Players who embrace digital tools to enhance traditional gaming with projector setups
- **Space-Conscious Gamers**: Players with limited storage who want to play without storing bulky board components

### User Personas

**The Veteran Player** (25-45)
- **Role:** Regular Catan player with established game group
- **Context:** Plays weekly with friends, owns player pieces but board is worn out or lost
- **Pain Points:** Physical board is damaged or missing tiles, same standard layout becomes predictable, expensive to replace ($40-60), storage takes up shelf space
- **Goals:** Keep playing with variety in board layouts, reduce cost of replacing physical board, maintain the tactile experience of placing pieces, easily set up games with different layouts

**The Game Night Host** (30-50)
- **Role:** Social organizer who hosts board game nights with projector setup
- **Context:** Has projector for movies/gaming, hosts regular game nights with rotating attendees
- **Pain Points:** Expensive to buy board game, setup and teardown takes time, limited space for storing games, wants professional presentation
- **Goals:** Offer variety without high costs, quick setup for game nights, maximize space efficiency, impress guests with tech-enhanced gaming

**The Board Game Cafe Owner** (35-55)
- **Role:** Business owner managing game inventory
- **Context:** Runs a venue where games are played frequently by different groups, already has projection equipment
- **Pain Points:** High replacement costs for damaged boards ($40-60 per replacement), tiles get lost, limited shelf space, need for multiple copies of popular games
- **Goals:** Reduce replacement costs, maximize game variety within space constraints, provide durable long-lasting solutions, differentiate venue with unique offerings

## The Problem

### Physical Boards Are Expensive and Wear Out

A standard Catan board costs $40-60. Physical components wear out with repeated play - tiles get lost, cardboard warps, edges fray, and colors fade. Players need to spend money to replace damaged boards. Storage space for the game adds up quickly, especially for those with limited space.

**Our Solution:** A digital board displayed via projector that provides infinite layout variety, never wears out, requires no physical storage space, and costs nothing beyond the initial web hosting. Players still use physical pieces for the authentic tactile experience.

### Standard Layout Becomes Predictable

The base game comes with a single recommended "standard" board layout. While the rules suggest random placement, physically shuffling and placing tiles takes time, and many groups fall into using the same layouts repeatedly, reducing strategic variety.

**Our Solution:** Instantly generate unlimited random board layouts with proper resource and number distribution, or manually design custom configurations. Every game can have a unique setup in seconds, not minutes.

### Digital Versions Eliminate Physical Interaction

Existing digital Catan games (Catan Universe, mobile apps) are fully computerized, removing the social and tactile experience of playing with physical pieces around a table. Players stare at individual screens instead of interacting face-to-face.

**Our Solution:** A hybrid approach that preserves the physical, social gameplay while leveraging digital technology only for the board display. Players gather around a table with a projected board, handle real game pieces (settlements, cities, roads, robber), and maintain the authentic board game experience.

### Projector Display Requires Special Optimization

Generic board game simulators or simple images aren't optimized for projection. They lack contrast, aren't readable from multiple angles, don't fill the screen properly, and don't adapt to different lighting conditions or projector resolutions.

**Our Solution:** Purpose-built projector optimization with high contrast modes, fullscreen support, adjustable zoom, and multiple visual themes for different lighting conditions and projector qualities.

## Differentiators

### Hybrid Physical-Digital Experience
Unlike fully digital Catan apps (Catan Universe, mobile versions), we preserve the tactile, social experience of physical gameplay. Players gather around a projected board, handle real settlements and roads, and maintain face-to-face interaction. We replace only the board itself, not the entire game experience.

### Display-Only, No Game Logic
Unlike board game simulators that track everything, we focus solely on displaying the board. No complex game state management, no piece tracking, no score calculations. This simplicity means faster load times, zero learning curve, and no possibility of software bugs affecting gameplay. The physical pieces are the source of truth.

### Projector-Optimized Display
Unlike general-purpose board images or simulators, our display is specifically engineered for projection: high contrast color schemes, clear visibility from multiple viewing angles, adjustable zoom for different table sizes, fullscreen support without browser chrome, and color themes optimized for different lighting conditions and projector qualities.

### Base Game Focus for Simplicity
Unlike complex digital implementations that try to do everything, we focus exclusively on the base Catan game. No expansions, no variants, no feature bloat. This makes the application fast, simple, and reliable. Players get exactly what they need - a board display - without unnecessary complexity.

### Cost-Effective Replacement
Unlike purchasing a physical board ($40-60) or digital game licenses ($20+), our web application provides unlimited board configurations at the cost of basic web hosting. Perfect for players who already have game pieces but need a board solution.

## Key Features

### Core Board Generation
- **20-Hex Base Game Board:** Display the classic Catan board layout with 19 resource hexes plus 1 desert hex
- **Five Resource Types:** Clear visual representation of wood (forest), brick (hills), wheat (fields), sheep (pasture), and ore (mountains)
- **Desert Tile:** Dedicated desert hex that starts with the robber
- **Number Tokens:** Display number tokens (2-12) on resource hexes following official distribution (two each of 3-11 except 7, one each of 2 and 12)
- **Harbor/Port Locations:** Show the 9 standard harbor positions (4 general 3:1 harbors, 5 specialized 2:1 resource harbors)

### Setup Options
- **Random Resource Distribution:** Automatically place resource tiles in random positions following official Catan distribution (4 wood, 4 wheat, 4 sheep, 3 brick, 3 ore, 1 desert)
- **Manual Resource Placement:** Click or drag to manually assign resource types to each hex position for custom board designs
- **Random Number Distribution:** Automatically place number tokens following official rules, ensuring balanced probability and avoiding adjacent high-probability numbers (6 and 8)
- **Manual Number Placement:** Manually assign number tokens to resource hexes for strategic customization
- **Board Validation:** Ensure layouts follow official rules (no adjacent red numbers like 6-6 or 6-8, correct token distribution)

### Projector Display Features
- **High-Contrast Mode:** Enhanced color saturation and contrast for clear visibility when projected
- **Fullscreen Mode:** Remove all browser UI elements to maximize board display area
- **Zoom Controls:** Scale the board to fit different projection surfaces and table sizes
- **Visual Themes:** Multiple color palettes (Classic, High Contrast, Colorblind-Friendly) optimized for different projectors and lighting conditions
- **Clean Layout:** Minimal UI that doesn't interfere with physical piece placement on the projection
- **Aspect Ratio Support:** Adapt to common projector resolutions (16:9, 16:10, 4:3)

### Configuration Management
- **Save Board Layouts:** Store favorite configurations with name and description for quick recall
- **Load Saved Boards:** Instantly reload previously saved layouts without regeneration
- **Export/Import Layouts:** Share board configurations with other players via JSON export
- **Quick Reset:** Generate a new random board with one click

## Success Metrics

### User Adoption
- **Active Users:** 200+ monthly active users within 6 months of launch
- **Session Duration:** Average 60-90 minutes per session (typical base game length)
- **Return Rate:** 40%+ of users return for multiple gaming sessions
- **Venue Adoption:** 5+ board game cafes or gaming spaces adopt the solution within first year

### Technical Performance
- **Board Generation Time:** < 1 second for complete board setup
- **Load Time:** Application loads in < 3 seconds on standard broadband
- **Display Performance:** Smooth rendering at 60fps during zoom/pan operations
- **Browser Support:** Works on 95%+ of modern browsers (Chrome, Firefox, Safari, Edge)

### User Satisfaction
- **Visibility Score:** 85%+ of users rate projected board as "clearly visible" in surveys
- **Setup Speed:** 70%+ faster setup compared to physical board (< 30 seconds vs 2-3 minutes)
- **Ease of Use:** 90%+ of users can generate and display a board without instructions
- **Feature Usage:** 60%+ of users utilize both random and manual placement options

### Business Value
- **Cost Savings:** Users save $40-60 on physical board purchases or replacements
- **User Feedback:** 80%+ positive sentiment in user reviews and feedback
- **Technical Reliability:** 99%+ uptime for web application
