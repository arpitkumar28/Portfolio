# Portfolio

## GreenFlow AI Showcase (Next.js + Tailwind)

This repo contains a ready-to-use React/Next.js + TypeScript component for showcasing the "GreenFlow AI" project with a dark, glassmorphism style powered by Tailwind CSS.

### Files added
- `components/greenflow/GreenFlowShowcase.tsx`
- `components/greenflow/FeatureCard.tsx`
- `components/greenflow/MetricCard.tsx`
- `components/greenflow/TechBadge.tsx`

### Integration (quick)

1. Install dependencies in your Next.js app (Tailwind + Next):

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Add Tailwind directives to your global CSS (`globals.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. Copy the `components/greenflow` folder into your Next.js project and import the component into a page:

```tsx
import GreenFlowShowcase from '../components/greenflow/GreenFlowShowcase'

export default function Home() {
	return <GreenFlowShowcase />
}
```

4. Add some screenshots into `public/assets/images/` using names `greenflow-1.png`, `greenflow-2.png`, `greenflow-3.png` or update the paths in the component.

5. Optional: install `next/image` optimizations or adjust to `img` if not using Next.js image loader.

I added a demo Next.js page and Tailwind/PostCSS configs to this repo so you can run a local demo.

### Run the demo locally

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open the demo at `http://localhost:3000/greenflow`.

Notes:
- Place screenshots in `public/assets/images/` or update the paths in `components/greenflow/GreenFlowShowcase.tsx`.
- The demo uses plain `img` tags so it works outside Next's image optimization too.

If you want I can also convert this repo into a full Next app structure (move files, tune ESLint/Prettier, CI), or remove `package.json` if you only need the component.
