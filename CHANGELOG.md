# Changelog

All notable changes to the portfolio will be documented in this file.

## [Unreleased]

### Added - Phase 3A: Quick Wins
- Prioritized resume download CTA in Hero section
- Added availability mention in Hero description
- Reduced navigation items from 8 to 6 for cleaner UX
- Created BackToTop component with smooth scroll
- Added project images to featured project cards with hover zoom effects
- Improved color contrast for muted text (WCAG compliance)

### Changed - Phase 3A: Quick Wins
- Reordered Hero CTAs to prioritize resume download
- Updated navigation structure (removed Journey and Open To from nav)

### Added - Phase 3B: UI Modernization
- Expanded typography scale with comprehensive font sizes (xs through 9xl)
- Added custom spacing scale (18, 88, 128)
- Added new animations: fade-in, slide-up, scale-in
- Created premium button variants: ghost and link
- Enhanced GlassCard component with gradient option and improved transitions
- Improved animation quality with better easing and durations

### Changed - Phase 3B: UI Modernization
- Updated muted color from #94A3B8 to #CBD5E1 for better contrast
- Enhanced glassmorphism effects with subtle border transitions
- Improved micro-interactions across all components

### Added - Phase 3C: Recruiter Optimization
- Created SkillsMatrix component with proficiency levels (Mobile, Frontend, Backend, IoT)
- Created WhyHireMe component showcasing 6 key value propositions
- Updated Hero stats to be impact-focused (Projects Shipped, Technologies, Domains, Commitment)
- Added animated skill progress bars with visual indicators

### Changed - Phase 3C: Recruiter Optimization
- Refactored hero statistics to emphasize impact over generic metrics
- Improved recruiter-focused content throughout the portfolio

### Added - Phase 3D: Performance & SEO
- Implemented Next.js Image component for hero profile image
- Implemented Next.js Image component for featured project images
- Added priority loading for hero image
- Optimized image loading with automatic resizing and format selection

### Performance Improvements
- First Load JS: 156 kB → 161 kB (minimal increase due to new components)
- Build time: ~30 seconds
- Lighthouse-ready with optimized images

## [Previous]

### Initial Portfolio
- Basic Next.js setup with TypeScript
- Hero section with profile image and orbiting tech icons
- Projects section with featured and all projects
- About, Education, Journey, Open To, Contact sections
- Glassmorphism design system
- Framer Motion animations
- SEO metadata and structured data
- Responsive design
