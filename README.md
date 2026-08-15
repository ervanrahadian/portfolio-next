# Ervan Rahadian — Personal Website

Live site: [ervanrahadian.web.app](https://ervanrahadian.web.app)

Personal portfolio built with Next.js, statically exported and hosted on Firebase.

## Tech stack

- Next.js 16 (App Router, static export)
- React 19
- TypeScript
- Tailwind CSS 4
- Motion
- React Icons
- Serwist (PWA)
- Firebase Hosting

## Features

- Hero, about, portfolio, certifications, and contact sections
- Scroll animations and responsive layout
- SEO metadata, sitemap, and robots
- Offline-friendly PWA via Serwist

## Getting started

```bash
npm install
npm run dev
```

Dev server: http://localhost:3000

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the static site into `out/` |
| `npm run preview` | Serve `out/` locally |
| `npm run lint` | Lint with ESLint |
| `npm run typecheck` | Type-check without emitting |
| `npm run format` | Format with Prettier |
| `npm run deploy` | Build and deploy to Firebase Hosting |

## Deployment

```bash
npx firebase-tools login   # first time only
npm run deploy
```
