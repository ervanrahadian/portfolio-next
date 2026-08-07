# Ervan Rahadian — Personal Website

A rewrite of [ervanrahadian.web.app](https://ervanrahadian.web.app) on Next.js, statically exported and deployed to Firebase Hosting.

## Tech stack

| Concern   | Choice                                             |
| --------- | -------------------------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack, static export)  |
| UI        | React 19, TypeScript 5                             |
| Styling   | Tailwind CSS 4 (CSS-first theme in `globals.css`)  |
| Animation | Motion 13 (`motion/react`)                         |
| Icons     | React Icons 5                                      |
| PWA       | Serwist 9 service worker (bundled with esbuild)    |
| Hosting   | Firebase Hosting                                   |
| Tooling   | ESLint 9 (flat config), Prettier + Tailwind plugin |

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

## Scripts

| Script              | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the development server                 |
| `npm run build`     | Build and export the static site into `out/` |
| `npm run preview`   | Serve the exported `out/` folder locally     |
| `npm run lint`      | Lint with ESLint                             |
| `npm run lint:fix`  | Lint and auto-fix                            |
| `npm run typecheck` | Type check without emitting                  |
| `npm run format`    | Format the codebase with Prettier            |
| `npm run deploy`    | Build and deploy to Firebase Hosting         |

## Project structure

```
src/
├── app/                  # App Router entry, metadata, manifest, robots, sitemap
├── components/
│   ├── layout/           # Header, footer, back-to-top
│   ├── pwa/              # Service worker registration
│   ├── sections/         # Hero, About, Portfolio, Certification, Contact
│   ├── seo/              # JSON-LD structured data
│   └── ui/               # Reusable Section wrapper and scroll Reveal
├── data/                 # Site config and page content (single source of truth)
├── hooks/                # Scroll and active-section hooks
├── lib/                  # Small shared helpers
├── sw.ts                 # Service worker source
└── types/                # Shared content types
scripts/build-sw.mjs      # Bundles and builds the service worker
public/img/               # Images, logos and PWA icons
```

Content lives in `src/data`, so updating a project, certification or contact link is a data change rather than a markup change.

## Progressive web app

`src/app/manifest.ts` generates the web app manifest, and `src/sw.ts` is the service worker source. Because `next build` runs on Turbopack and the site is statically exported, the worker is built in a separate step by `scripts/build-sw.mjs`, which is chained onto `npm run build`:

1. esbuild bundles `src/sw.ts` and the Serwist runtime into a plain IIFE.
2. Serwist's `injectManifest` replaces the `self.__SW_MANIFEST` token with the precache list gathered from `out/`.

HTML, JS, CSS, fonts and icons are precached; portfolio and certificate images are cached at runtime instead, so the install stays small. Navigations use network-first with a `404.html` offline fallback.

`src/sw.ts` is excluded from the app `tsconfig.json` and type checked separately through `tsconfig.worker.json`, which swaps the DOM lib for the WebWorker lib.

Firebase serves `/sw.js` with `max-age=0, must-revalidate` so updates are picked up immediately, while hashed `_next/static` assets stay immutable for a year.

## Deployment

The site is exported as static HTML (`output: "export"` in `next.config.ts`) and served by Firebase Hosting from the `out/` directory.

First-time setup:

```bash
npx firebase-tools login
```

Then deploy:

```bash
npm run deploy
```

`firebase.json` targets the `ervanrahadian` hosting site under the `ervanrahadian-id` project, sets long-lived cache headers for hashed assets and images, and keeps HTML revalidating on every request.
