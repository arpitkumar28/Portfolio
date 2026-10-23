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

The footer shows an **estimated unique visitor count**, deduplicated by an anonymous
browser ID stored in `localStorage`. Redis counts that browser once every 30 days. This
is not a count of verified people: clearing browser storage, using another browser or
device, or sharing a device can change the estimate. No raw IP address is stored; a
one-way address hash is used for rate limiting. Bot detection is not guaranteed.
Redis performs the visitor claim, counter initialization, rate limit, and increment in
one Lua operation, so concurrent requests cannot lose increments. The first visit
initializes the counter automatically.

Configure either the Upstash REST URL and token as `UPSTASH_REDIS_REST_URL` and
`UPSTASH_REDIS_REST_TOKEN`, or its TCP connection string as `REDIS_URL`, in local
`.env.local` and deployment environment variables. Keep credentials private. If REST
credentials and `REDIS_URL` are both present, the REST credentials take precedence. If
credentials are missing or invalid, the counter shows **Unavailable**. The counter
uses the `portfolio:visitor:*` key prefix so it can share a Redis database with another
project without colliding with that project's keys. Preview and Production share a
count when configured with the same credentials. The sample values in `.env.example`
are placeholders and must be replaced with valid credentials.

## Notes

- Image assets are served from `public/assets/images/`
- The project uses path aliases configured via `tsconfig.json` for imports like `@/components/Navbar`
- `netlify.toml` is included for Netlify deployment compatibility

## License

This repository contains the portfolio source code for Arpit Kumar.
