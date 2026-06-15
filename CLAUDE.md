# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm**.

```bash
pnpm dev        # Vite dev server (client-side rendering)
pnpm build      # tsc --noEmit && vite-react-ssg build  → prerendered static site in dist/
pnpm preview    # Serve the built dist/ locally
pnpm typecheck  # tsc --noEmit (the type gate)
```

There is **no test runner** and **no ESLint config** yet. `pnpm typecheck` is the quality gate.

## Build caveat (inverted from the old Next.js setup)

The build **fails on TypeScript errors** — the `build` script runs `tsc --noEmit` first. This is deliberate: the previous Next.js config silently ignored type and lint errors. `vite build` alone does not type-check (esbuild strips types), which is why `tsc --noEmit` is prepended. Images are plain `<img>` (no build-time optimization layer).

## Architecture

Vite 7 + React 19 + React Router 6 (data router) + **vite-react-ssg** (static prerender) + Tailwind v4 + shadcn/ui (new-york). Path alias `@/*` → `./src/*` (resolved by `vite-tsconfig-paths`; declared in `tsconfig.json`).

### Rendering model — prerendered, not a plain SPA

`vite-react-ssg` renders **real static HTML per route** at build time (`dist/index.html`, `dist/blog/index.html`, `dist/blog/<slug>/index.html`). React Router **loaders run at build** and their data is baked into the HTML + a manifest used during client navigation. This preserves SEO and social link previews — the reason a pure SPA was rejected.

- Entry: `src/main.tsx` → `export const createRoot = ViteReactSSG({ routes })`. Importing this module in the browser self-mounts the app.
- Route table: `src/App.tsx`. `RootLayout` wraps `HomePage`, `BlogPage`, `BlogPostPage`, `NotFoundPage`.
- Dynamic `/blog/:slug` is prerendered via `getStaticPaths` on that route (derives slugs from `getBlogPosts()`).
- Per-route `<head>` (title, description, og/twitter, canonical) uses `<Head>` from `vite-react-ssg`. `index.html` intentionally has **no** title/og tags to avoid duplicates.
- Set `VITE_SITE_URL` (Vercel env) so og:image / og:url / canonical are absolute — social crawlers require absolute URLs. See `src/lib/site.ts`.

### Content access layer — the seam for a future backend

`src/lib/content/index.ts` is the **single boundary** between the UI and the content source. It exposes async getters (`getProjects`, `getExperiences`, `getBlogPosts`, `getBlogPost`, `getProfile`). Today they return the static data in `src/lib/data/*` and `src/lib/constants/*`; **nothing else in the app imports `@/lib/data`**. Pages consume these getters through React Router **loaders** (`useLoaderData`), and section components receive data via **props** (they no longer import data directly).

Phase 2 (planned): reimplement these getters to `fetch()` from a CMS/backend. No other frontend code changes; a publish webhook re-triggers `vite-react-ssg build` to refresh the static HTML. See `MIGRATION.md`.

### Internationalization

Client-side React Context, no URL locale segments. `src/lib/i18n.ts` holds `Locale` (`"en" | "es"`) and `translations`; `src/lib/locale-context.tsx` provides `useLocale()` → `{ locale, setLocale, t }`, persisted to `localStorage`. Any component with text reads `useLocale()`.

### Theming (dark mode)

`next-themes` (works in plain React) drives the `class` strategy on `<html>`. Color tokens (light + `.dark`) are CSS variables in `src/globals.css`. The toggle is `src/components/theme-toggle.tsx`, gated behind a `mounted` flag to avoid hydration mismatch.

### Fonts

Geist via `@fontsource-variable/geist` + `geist-mono` (imported in `main.tsx`). `src/fonts.css` defines `--font-geist-sans` / `--font-geist-mono`, which the existing `@theme inline` block in `globals.css` consumes — so `globals.css` is unchanged from the original.

### Cross-route anchors

The nav mixes in-page anchors (`#about`, …) with the `/blog` route. Anchors render as `<Link to={{ pathname: "/", hash }}>`; `RootLayout`'s `ScrollToHash` scrolls to the target after navigation (sections mount post-route-change).

### Contact form

Deferred (dead code in the old app). To re-enable, add a Vercel serverless function at `api/contact.ts` (the `vercel.json` rewrite already excludes `/api/`). See `MIGRATION.md`.

## Deploy (Vercel)

Framework preset **Vite**, build `pnpm build`, output `dist`. `vercel.json` rewrites unmatched paths to `/index.html` (excluding `/api/` and `/assets/`) so client-only routes resolve; prerendered HTML files are served first. Set `VITE_SITE_URL` in project env.
