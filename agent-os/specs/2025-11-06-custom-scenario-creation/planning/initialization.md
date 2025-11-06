# Initial Spec Idea

## User's Initial Description
**Feature Description: Custom Scenario Creation**

As a user, I'd like to create my own scenarios. I can:
1. Click on side bar toggle to enter custom scenario creation mode
2. Set up a custom scenario config, that will be cached in local storage
3. In a side bar to the right of the application, I can:
   1. Set up face up resource distribution and number token distribution
   2. Set up face down resource distribution and number token distribution
   3. Enter the grid pattern as with other scenarios, this should update the board with empty hexes for me to click on
   4. Select either hex type #{:water, :fog, :terrain, :village} or a harbor to add
4. When I click on a hex it should assign those coordinates in the scenario config with the selection I made in the sidebar. If I chose a harbor, the hex should show me 6 areas around the hex to click on to set the direction for the harbor. If it is a hex, it should just append the coordinates to the `:hex-types` map in the scenario config.

## Metadata
- Date Created: 2025-11-06
- Spec Name: custom-scenario-creation
- Spec Path: agent-os/specs/2025-11-06-custom-scenario-creation
