# Obsidian Gold — Signature Motion Upgrade

## Design direction

- Palette remains Obsidian `#0B0D12`, Charcoal `#191C24`, Gold `#E8B85B`, Ivory `#F2F0EB`.
- Adds an editorial 3D portrait scene with two slow orbit rings, pointer-following amber light, a scanning highlight, and small technical labels.
- Desktop pointer movement applies restrained perspective to the portrait; touch devices do not use pointer tilt.
- Project cards gain a tactile lift, gold edge highlight, image depth, and a pointer-positioned ambient glow.
- Existing profile portrait and project illustrations remain in use. No fabricated project metrics or new capability claims were added.

## Accessibility and performance

- Honors `prefers-reduced-motion` by disabling continuous animations and transforms.
- Avoids pointer tracking on coarse-pointer devices.
- Effects are CSS-based and use existing dependencies; no new animation packages were added.
- Keep the decorative layers `aria-hidden` so assistive technology ignores them.

## Validation

- `git diff --check` should be run before committing.
- Run `npx tsc --noEmit` and `npm run build` in an environment with dependencies installed.
- Test at desktop and mobile widths, keyboard focus, and reduced-motion settings before deploying.
