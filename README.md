# YTA Website

Next.js website framework using the Pages Router.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Start editing from `src/pages/index.tsx`. Shared layout helpers live in
`src/components/`, global styles live in `src/styles/globals.css`, and future
utilities/types can go in `src/lib/` and `src/types/`.

## Structure

- `src/pages/` - Pages Router routes and app shell
- `src/components/` - reusable UI and layout components
- `src/styles/` - global CSS and Tailwind entry
- `src/lib/` - shared utilities
- `src/types/` - shared TypeScript types

## Scripts

- `npm run dev` - start local development
- `npm run build` - create a production build
- `npm run build:static` - export the website to `out/` for Cloudflare Pages
- `npm run start` - run the production build
- `npm run lint` - run ESLint

## Temporary Cloudflare hosting

Connect the `johndychuah/yta` GitHub repository to a Cloudflare Pages project:

- Production branch: `main`
- Build command: `npm run build:static`
- Build output directory: `out`
- Root directory: the repository root

Cloudflare builds and deploys new commits automatically. The deployment uses
static assets and does not need a running Node.js server.
Images are served directly from the exported assets. The contact form prepares
an email draft in the visitor's email application.
