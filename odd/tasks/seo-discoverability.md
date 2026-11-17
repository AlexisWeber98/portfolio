# SEO discoverability (web + AI crawlers)

## Objective

Make the prerendered portfolio fully discoverable by traditional search engines and AI/bot crawlers by adding machine-readable discovery artifacts and structured data, and by closing gaps in the existing per-route metadata.

## Problem / Why

The site already bakes per-route `<Head>` metadata and produces real static HTML per route, but it exposes no `robots.txt`, no `sitemap.xml`, and no `llms.txt`. Search engines and LLM crawlers therefore have no authoritative index of the available pages. Several routes also emit incomplete Open Graph / Twitter cards, and no page carries JSON-LD structured data, so rich results and entity understanding are weaker than they need to be.

## Scope

In:
- Build-time generation of `robots.txt`, `sitemap.xml`, and `llms.txt` from the prerendered output.
- JSON-LD helpers plus `Person`/`WebSite` on the home page and `BlogPosting` on post pages.
- Metadata gap fixes on Home, Blog list, Blog post, and CV pages.
- Documentation of the `VITE_SITE_URL` requirement.

Out:
- Contact form backend, OG raster image generation, analytics/consent changes, blog content edits.

## Constraints

- Package manager is `pnpm`; quality gate is `pnpm typecheck`, full gate is `pnpm build`.
- No test runner exists; verification is typecheck + build + structural inspection of `dist`.
- Technical artifacts stay in English; user-facing replies stay in warm Rioplatense Spanish.
- `VITE_SITE_URL` is supplied only by Vercel env; the generator must not invent a domain.
- No push, PR, or merge. Work-unit commits on this feature branch are the delivery boundary.

## Route declaration

Inline route. Trigger evidence: the native `task`/`delegate` tool is not exposed in this session, so delegation is unavailable. This is the documented degradation path: declared openly, single writer, bounded reads, no silent monolith. Advisory 400-line-per-task heuristic: forecast ~220 authored changed lines, no split needed.

## Tasks

- [x] **T1 — Build-time discovery artifacts** (`scripts/generate-seo.mjs`, `package.json`, `DEVELOPMENT.md`)
  - Walk `dist/**/index.html` after `vite-react-ssg build`; derive public routes.
  - Emit `dist/robots.txt`, `dist/sitemap.xml`, `dist/llms.txt` using `VITE_SITE_URL`.
  - Fail loud with a clear warning when `VITE_SITE_URL` is missing: no fabricated domain.
  - Acceptance: `pnpm build` with `VITE_SITE_URL` set produces all three artifacts with one entry per prerendered route; blog slugs appear automatically; without the env the build still succeeds and reports the omission.
  - Checks: `VITE_SITE_URL=https://example.com pnpm build`, inspect `dist/robots.txt`, `dist/sitemap.xml`, `dist/llms.txt`.

- [ ] **T2 — Structured data** (`src/lib/structured-data.ts`, `src/pages/HomePage.tsx`, `src/pages/BlogPostPage.tsx`)
  - Typed helpers producing `Person`, `WebSite`, and `BlogPosting` JSON-LD with absolute URLs.
  - Inject via `<Head>` using `dangerouslySetInnerHTML`, escaping `<` to avoid script breakout.
  - Acceptance: built HTML for `/` contains `Person` and `WebSite`; built HTML for the post contains `BlogPosting` with headline, date, author, and image.
  - Checks: `pnpm typecheck`, `pnpm build`, grep `@type` in `dist/index.html` and `dist/blog/<slug>/index.html`.

- [ ] **T3 — Metadata gaps** (`src/pages/HomePage.tsx`, `src/pages/BlogPage.tsx`, `src/pages/BlogPostPage.tsx`, `src/pages/CvPage.tsx`)
  - Home: add `og:image`, `og:locale`, Twitter title/description/image.
  - Blog list: add canonical, `og:type`, `og:title`, `og:description`, `og:url`, `og:image`, `og:locale`, Twitter tags.
  - Blog post: add `article:published_time`, `article:author`, `article:tag`, Twitter title/description/image.
  - CV: add `og:locale`.
  - Acceptance: no route lacks canonical + OG title/description/url + Twitter card fields.
  - Checks: `pnpm typecheck`, inspect baked `<head>` on each prerendered page.

- [ ] **T4 — Final verification**
  - `pnpm typecheck`, full `pnpm build` with a sample `VITE_SITE_URL`, structural checks over all prerendered HTML and generated artifacts.
  - Acceptance: all checks pass; every failed, skipped, or pending check is reported explicitly.

## Progress

- Branch: `feat/seo-discoverability` (created from `main`).
- T1 complete; T2–T4 pending.
- Route: inline (degradation, delegation tool unavailable).

## Verification evidence

- T1: `VITE_SITE_URL=https://example.com pnpm build` exit 0; 4 prerendered routes; `dist/robots.txt`, `dist/sitemap.xml`, `dist/llms.txt` present with one absolute `<loc>` per route and blog slug derived automatically. Fixed a regex gap: prerendered `<meta data-rh="true" name="description" ...>` required an attribute-agnostic match so llms.txt includes descriptions.
- T1 (pending check): verify the unset-`VITE_SITE_URL` warning path on a clean build.

## Next step

Start T2: typed JSON-LD helpers and injection on Home and BlogPost pages.
