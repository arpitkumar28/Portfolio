# Portfolio theme and profile interaction update

## Changes
- Added a compact row of real profile/contact links over the bottom edge of the hero portrait: GitHub, LinkedIn, LeetCode, TryHackMe, and email.
- The hero portrait transitions from grayscale to full color on hover/focus-capable pointer interaction and has a restrained zoom transition. The About portrait uses the same grayscale-to-color interaction.
- Rebuilt the theme toggle as an explicit Light/Dark control, persists the selected theme in `localStorage`, follows the system preference when no saved choice exists, and updates the document theme class and `color-scheme`.
- Added a real light palette for Obsidian Gold using warm ivory surfaces and dark readable text; the gold accent is darkened in light mode for contrast.
- Changed the Axiora project thumbnail to use the existing dashboard screenshot instead of the generic illustration.
- Kept motion restrained and respected `prefers-reduced-motion` through existing global styles and utility classes.

## Verification status
- `git diff --check` was run where available; no whitespace errors were reported.
- A full TypeScript check and production build were not run because this archive does not include `node_modules`.
- Run `npm ci`, `npx tsc --noEmit`, and `npm run build` before deployment.
