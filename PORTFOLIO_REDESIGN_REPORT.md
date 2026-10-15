# Portfolio Redesign Report

## Design Summary

Continued the existing Pages Router redesign without changing frameworks, routes, or the existing project index. Applied the Obsidian Gold direction: near-black canvas (`#0B0D12`), charcoal surfaces (`#191C24`), ivory typography (`#F2F0EB`), restrained gold accents (`#E8B85B`), muted metadata, and low-contrast borders. Rebuilt the hero as an editorial two-column composition using the existing portrait asset, compacted its copy, and kept the exact requested headline.

## Files Changed

- `components/Projects.tsx` — replaced oversized carousel-style project cards with compact 16:9 featured and regular cards, concise descriptions, capped inline tags, valid action links, and an expandable filtered index of additional projects.
- `tailwind.config.js`, `styles/globals.css` — centralized the Obsidian Gold palette, surfaces, borders, global background, focus, selection, scroll, and shared card styles.
- `components/Hero.tsx` — replaced the capability-dashboard layout with an editorial portrait-and-copy hero, staged entrance, Explore Projects and View Resume actions, verified GitHub/LinkedIn links, and a prototype-qualified GreenFlow status.
- `components/Navbar.tsx`, `components/ui/Button.tsx`, `components/ui/GlassCard.tsx`, `components/ui/Section.tsx` — added gold active navigation, keyboard focus, subtler button/card transitions, and shared once-only scroll reveals that keep SSR content visible until motion initializes.
- `components/Projects.tsx`, `components/ProblemSolvingSecurity.tsx`, `components/About.tsx`, `components/Contact.tsx`, `components/ui/ImageModal.tsx` — updated remaining main-page accents and GreenFlow summary to the new palette and prototype language.
- `components/crisismesh/CrisisMeshShowcase.tsx` — replaced inert dashboard controls and unsupported live-operation claims with a labeled static concept illustration, scope note, and working navigation/demo links.
- `components/greenflow/GreenFlowShowcase.tsx` — retained the supplied GreenFlow screenshots and gallery while removing unsupported production, security, latency, and impact assertions; describes screens and integrations as prototype/unverified.
- `components/hospital-attendance/HospitalAttendanceShowcase.tsx` — replaced unsupported security, biometric, performance, and deployment claims and references to missing screenshots with a transparent concept page; removed the unverified repository CTA.
- `components/VisitorCounter.tsx` and `pages/api/visitor-count.ts` — use a persistent Redis counter, atomically deduplicate page views per browser-tab session, apply a shared Redis rate limit, validate input and methods, and safely show an unavailable state when Redis is not configured.
- `pages/crisis-mesh.tsx`, `pages/greenflow.tsx`, and `pages/hospital-attendance.tsx` — revised titles/descriptions to reflect prototype/concept status and kept page landmark structure valid.
- `PORTFOLIO_REDESIGN_REPORT.md` — this report, including the project-card implementation and this turn's validation results.
- `components/Hero.tsx` — exact “I build. I break. I secure.” headline, revised cybersecurity-focused description and CTAs, and subdued local portrait background.
- `components/Navbar.tsx` — requested navigation destinations, ARPIT wordmark, and visible focus styling.
- `styles/globals.css` — centralized dark palette, grid and glow layers, and reduced-motion treatment.
- `components/ProblemSolvingSecurity.tsx` — security profiles prioritized and HTB kept at its generic URL; existing TryHackMe, GitHub, LinkedIn, and resume destinations retained.
- `components/Projects.tsx` and `components/greenflow/GreenFlowShowcase.tsx` — references to missing GreenFlow images repaired.
- `components/ThemeToggle.tsx` — reduced the floating control to a compact icon button after it overlapped hero capability cards in the narrow browser capture.
- `PORTFOLIO_REDESIGN_REPORT.md` — this report.

The four PNG deletions were present in the working tree at the start of this audit. They exist in `HEAD` and Git history, but were not restored, preserving those user changes.

## Asset Repair

The missing paths were `/assets/images/greenflow-1.png` through `greenflow-4.png`. The existing repository contains corresponding numbered GreenFlow image assets named `.jpeg`; they are actual PNG-encoded image files, but distinct from the deleted PNGs (their Git object hashes differ). Updated both the featured project data and GreenFlow case-study gallery to use the existing numbered `.jpeg` assets. Left the existing `greenflow-5.png` and `greenflow-6.png` references intact.

Checked all GreenFlow image paths referenced by `components/Projects.tsx` and `components/greenflow/GreenFlowShowcase.tsx`; all 12 resolve locally. No references to the missing first four `.png` paths remain in those components, pages, or data.

## Routes, Links, and Credibility

The Next.js production build lists `/`, `/axiora`, `/crisis-mesh`, `/eduai-nexus`, `/elevra`, `/greenflow`, `/hospital-attendance`, and `/ncc-buddy`, plus `/api/visitor-count`. Existing project destinations are retained. TryHackMe uses the personal profile URL already in the code. Hack The Box remains at its generic profile page because the repository does not establish a personal profile URL. No achievements, metrics, credentials, or additional security claims were introduced by this continuation.

## Responsive and Accessibility Review

The project section uses a two-column CrisisMesh/GreenFlow featured row, a three-column regular grid on large screens, and compact additional-project cards. NCC Buddy and Food Ordering System now appear in the initial grid and are excluded from the additional-project list to avoid duplicates. Case-study cards continue to link to their existing routes. Cards without authentic project imagery use the branded fallback treatment.

Action links are individual anchors with visible focus treatment and safe new-tab attributes for external destinations. Thumbnail images have descriptive alt text; cards without a corresponding screenshot use a restrained branded treatment instead of an unrelated photo. Hover transitions are restrained, and card/image transitions respect reduced-motion preferences. Hero copy enters in a short stagger; portrait lighting drifts slowly on non-touch devices; major sections reveal once; project cards stagger and lift slightly. Coarse pointers disable portrait movement, and reduced-motion CSS disables these animations.

The local production preview was inspected in the browser at the default desktop viewport and at 768×1024 (tablet) and a 390×844 device override (390px wide viewport). The accessibility tree showed NCC Buddy and Food Ordering System in the initial project grid, the prototype-qualified hero, and working mobile menu links; selecting Projects updated the hash and closed the menu. The browser reported `innerWidth=390` and `document.documentElement.scrollWidth=382` (no horizontal overflow). Desktop hero and project actions were visible in the accessibility tree. Keyboard-only traversal, screen-reader output, numeric contrast measurement, and emulated reduced-motion preference were not completed.

Navigation remains anchor-based. Decorative hero layers use `aria-hidden`, and the hero retains a level-one heading. Keyboard focus styles are present in the navigation and theme toggle. Reduced-motion preferences disable the added ambient glow and global motion is reduced. Keyboard-only, screen-reader, contrast measurement, and system reduced-motion browser checks were not completed.

## Performance and SEO

No dependency or deployment configuration was added. The repository has `netlify.toml` with the Netlify Next.js plugin but no confirmed custom domain or verified Netlify site assignment. The current canonical/OG/JSON-LD/robots/sitemap values still contain `arpitkumar.dev`; the live web fetch showed that domain presenting a different portfolio, so it is not safe to infer that it belongs to this deployment. Domain-dependent SEO changes remain pending the owner's verified production domain. The sitemap currently omits public case-study routes. Twitter card metadata has no URL field; its image remains a relative path pending the same domain decision.

The visitor-count API does not read or write `data/visitor-count.json`. Configure `REDIS_URL` for a persistent shared count, atomic page-view increment and session deduplication, and a shared 20-increments/hour-per-hashed-address rate limit. The UI shows an em dash if Redis is unavailable or has no existing `visitor:count` key. Existing production data is preserved; the route never initializes or resets the counter. See `README.md` for Vercel environment configuration and the page-view policy.

## Validation Results

- `npx tsc --noEmit` after this update — passed (exit code 0).
- `git diff --check` after this update — passed (exit code 0).
- `npm run build` in the sandbox — compilation succeeded, then page-data collection failed at the sandbox `listen EPERM` IPC restriction.
- `npm run build` with local IPC access — passed (exit code 0); generated `/`, `/axiora`, `/crisis-mesh`, `/eduai-nexus`, `/elevra`, `/greenflow`, `/hospital-attendance`, `/ncc-buddy`, and `/api/visitor-count`. Next warned that optional `@next/swc-darwin-arm64` was not installed and skipped Google Fonts optimization because the build environment could not fetch Google Fonts.
- Automated tests — none are configured in `package.json`, and no test/spec files were found.
- Browser checks — local production preview inspected at desktop, tablet (768×1024), and mobile (390px device override); homepage content, project visibility, mobile navigation, and no horizontal overflow verified. Reduced-motion emulation, keyboard-only, screen-reader, and contrast measurements remain incomplete.
- Lint — not configured in `package.json` (no lint script).

## Remaining Issues and Next Steps

- Confirm the verified production domain. Canonical/OG/JSON-LD URL, sitemap route list, and robots sitemap URL are intentionally pending that confirmation; current `arpitkumar.dev` values should not be treated as verified.
- Set `REDIS_URL` in Vercel for each deployment environment that should display the visitor count. Without a working Redis URL and existing `visitor:count` key, the route returns 503 and the UI shows a dash.
- Complete keyboard-only, screen-reader, numeric contrast, and reduced-motion browser checks.
- Keep the four original PNG deletions intact unless the repository owner asks to restore them. The live references now use existing GreenFlow assets.

## Follow-up Visual Refinement — Current Palette Preserved

Kept the existing Obsidian Gold colour identity unchanged; the owner confirmed that the current colour direction works. Refined the page rhythm and interaction details rather than introducing another palette:

- Reduced excess vertical spacing between homepage sections so the page reads as one intentional editorial experience.
- Added a very subtle fixed grain texture, consistent premium easing tokens, and softer project-card shadows.
- Improved project screenshot hover treatment with restrained zoom and contrast changes; disabled those transitions for reduced-motion users.
- Changed the additional-project index to show three relevant items initially, with an explicit count to expand the rest. The six primary projects remain excluded from the expandable list, preventing NCC Buddy and Food Ordering System from appearing twice.
- Improved the active project-filter contrast by using the dark background colour on the gold selected state.
- Updated the browser theme colour to match the existing `#0B0D12` background.

Validation for this follow-up:
- `node node_modules/typescript/bin/tsc --noEmit` — passed.
- Whitespace check on the modified source/report files — passed (no trailing whitespace found).
- `next build` — blocked before compilation because the archive lacks the platform-specific Next.js SWC binary and the environment could not reach `registry.npmjs.org` to download it. This is an environment/dependency limitation, not a confirmed application build error.
- Visual browser inspection — not performed in this environment.
