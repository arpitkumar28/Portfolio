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

## Notes

- Image assets are served from `public/assets/images/`
- The project uses path aliases configured via `tsconfig.json` for imports like `@/components/Navbar`
- `netlify.toml` is included for Netlify deployment compatibility

## License

This repository contains the portfolio source code for Arpit Kumar.
