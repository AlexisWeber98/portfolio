# Migration: Next.js 15 → Vite + React + React Router

## Why we migrated

The app barely used Next.js: almost every component was `"use client"`, there was no server data fetching, no middleware, no ISR, and the only API route (contact) was a dead, commented-out stub. It was effectively a client app paying the cost of the App Router / RSC model for no benefit. Moving to Vite + React matches how the project is actually developed.

**The one real tradeoff was SEO.** A pure Vite SPA serves an empty shell, and social link-preview crawlers (LinkedIn, X, WhatsApp, Slack) do not execute JavaScript — every shared link would preview generically. Because a portfolio exists to be shared, we kept SEO by using **`vite-react-ssg`**: it stays in the Vite + React Router model but prerenders real static HTML per route at build time, with per-page `<head>` baked in. No runtime server.

## Future content backend (phase 2)

The goal is to edit experiences, skills, and blog posts without touching the frontend. The migration prepared for this with a **content access layer** (`src/lib/content/index.ts`): the UI only talks to its async getters, never to `src/lib/data` directly. When a backend/CMS is chosen, reimplement those getters to `fetch()` from it — nothing else in the frontend changes. A "publish" webhook then triggers a Vercel rebuild (`vite-react-ssg build`) so the static HTML stays fresh with SEO intact. (This rebuild-on-publish model fits authored content; truly real-time dynamic content would warrant revisiting SSR.)

## Next → Vite mapping

| Next.js | Now |
|---|---|
| `app/layout.tsx` | `index.html` + `src/main.tsx` + `src/layout/RootLayout.tsx` |
| `app/page.tsx`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` | `src/pages/*` + route table in `src/App.tsx` |
| `generateStaticParams` | `getStaticPaths` on the `blog/:slug` route (slugs from `getBlogPosts()`) |
| `export const metadata` | `<Head>` (from `vite-react-ssg`) per page |
| `next/link` | `Link` from `react-router-dom` |
| `next/image` (was `unoptimized`) | plain `<img>` with `object-*` + `loading="lazy"` |
| `next/font` (geist) | `@fontsource-variable/geist` + CSS vars in `src/fonts.css` |
| `notFound()` (`next/navigation`) | `*` route → `NotFoundPage`; the slug page renders it when the post is missing |
| `useParams` async `params` | `useParams()` (sync) + route `loader` + `useLoaderData()` |
| `@vercel/analytics/next` | `@vercel/analytics/react` |
| `app/api/contact/route.ts` | deferred → `api/contact.ts` (Vercel function) when re-enabled |
| `next.config.mjs` (ignored TS/lint errors) | removed — the build now **fails** on type errors |

## Re-enabling the contact form (deferred)

1. Create `api/contact.ts` at the repo root (Vercel auto-detects `/api/*` functions for any framework). Port the old validation logic; return JSON. The `vercel.json` rewrite already excludes `/api/` so the function is reachable.
2. Restore `ContactSection` on the home page and wire a real email provider (Resend / SES) via an env var.

## What did NOT change

i18n context (`lib/i18n`, `lib/locale-context`), the content data files and types, the Tailwind v4 tokens in `globals.css`, all shadcn/ui components, and `lib/generate-cv.ts` (now fetches through the content layer instead of importing data directly).

## Rollback

The original Next.js structure is in git history (and the `main` branch prior to this migration). This document is the map back.
