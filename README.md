# Arpit Kumar Portfolio

A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

The repository includes a responsive portfolio landing page with sections for skills, projects, achievements, work journey, education, and contact. It also contains a dedicated GreenFlow demo page under `/greenflow`.

## Tech stack

- Next.js 13.5.6
- React 18.2
- TypeScript
- Tailwind CSS
- Framer Motion
- `lucide-react`
- `next/image`

## Features

- Responsive, mobile-first portfolio layout
- Hero section with recruiter-focused messaging
- Sticky navigation and smooth anchor scrolling
- Project showcase and image gallery
- Accessible contact form
- Back-to-top button
- SEO meta tags and JSON-LD support
- Reusable UI components under `components/ui`

## Project structure

- `pages/index.tsx` — homepage
- `pages/greenflow.tsx` — GreenFlow showcase page
- `components/` — site sections and shared UI components
- `components/greenflow/` — GreenFlow-specific showcase components
- `public/assets/images/` — image assets
- `styles/globals.css` — global Tailwind styles
- `tailwind.config.js` — Tailwind configuration
- `netlify.toml` — Netlify deployment settings

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app at:

```bash
http://localhost:3000
```

The GreenFlow demo page is available at:

```bash
http://localhost:3000/greenflow
```

## Build and production

Build the app:

```bash
npm run build
```

Start the production server locally:

```bash
npm start
```

## Visitor counter

The footer counter shows **page views**, not unique people. It counts at most once per
browser-tab session (stored in that tab's `sessionStorage`, including across refreshes)
and expires the server-side deduplication claim after 24 hours. Opening another tab or
clearing that tab's storage can count again; this is a practical deduplication policy,
not perfect unique-visitor tracking. Redis performs the dedupe claim and counter increment
in one Lua operation, so concurrent requests cannot lose increments. A shared Redis
rate limit allows 20 increments per hashed client address per hour; raw addresses are
not stored. Bot detection is not guaranteed.

Configure `REDIS_URL` in local `.env.local` and in Vercel **Settings → Environment
Variables** for each environment that should show a count. Use the Redis provider's
TLS connection URL (`rediss://...`) and mark it sensitive in Vercel. The Redis key
`visitor:count` is shared wherever the same Redis database and URL are used. To keep
Preview separate from production, give Preview a separate Redis database/URL; to share
counts, configure the same Redis URL in both. Development uses whichever URL is in
`.env.local`. No counter is initialized or reset automatically: if `visitor:count` does
not already exist, the endpoint returns 503 and the UI shows an em dash. Configure a
persistent Redis service before enabling the counter; no credentials are included in
this repository.

## Notes

- Image assets are served from `public/assets/images/`
- The project uses path aliases configured via `tsconfig.json` for imports like `@/components/Navbar`
- `netlify.toml` is included for Netlify deployment compatibility

## License

This repository contains the portfolio source code for Arpit Kumar.
