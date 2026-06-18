# Development Guide

Practical recipes for working on this portfolio. Stack: Vite + React + React Router + Tailwind v4, prerendered with `vite-react-ssg`, deployed on Vercel.

## Setup

```bash
pnpm install
pnpm dev          # http://localhost:5173
```

Before pushing:

```bash
pnpm typecheck    # must pass — the build fails on type errors
pnpm build        # produces dist/ (prerendered HTML per route)
pnpm preview      # sanity-check the built site
```

## Project layout

```
index.html                 Vite entry (no SEO tags — managed per route)
vite.config.ts             react + tailwind + tsconfig-paths; ssgOptions
vercel.json                SPA fallback rewrite for client-only routes
src/
  main.tsx                 ViteReactSSG entry; imports global CSS + fonts
  App.tsx                  Route table (RouteRecord[])
  globals.css              Tailwind v4 + theme tokens (do not need to touch)
  fonts.css                Geist CSS variables
  layout/RootLayout.tsx    Providers + Navigation + Footer + ScrollToHash + <Outlet/>
  pages/                   HomePage, BlogPage, BlogPostPage, NotFoundPage (+ their loaders)
  components/              sections + ui/ (shadcn)
  lib/
    content/index.ts       ← content access layer (the only file that imports lib/data)
    data/                  static content: projects, experience, blog-posts
    constants/             personal-info (identity, certs, skills)
    i18n.ts, locale-context.tsx
    site.ts                absolute-URL helper for SEO
```

## Add a blog post

Edit `src/lib/data/blog-posts.ts` and append a `BlogPost` to the `blogPosts` array:

```ts
{
  id: "unique-id",
  slug: "url-slug",                 // becomes /blog/url-slug, prerendered automatically
  title:   { en: "...", es: "..." },
  excerpt: { en: "...", es: "..." },
  content: { en: `# Markdown...`, es: `# Markdown...` },  // inline Markdown, mind backticks in code fences
  image: "/your-image.jpg",         // place the file in public/
  date: "2026-06-15",               // YYYY-MM-DD
  readTime: 5,                      // minutes
  tags: ["Tag1", "Tag2"],
}
```

No routing changes needed — the next `pnpm build` discovers the new slug (via `getStaticPaths`) and prerenders `/blog/<slug>/index.html` with its own SEO/og meta. The two commented-out posts at the bottom of the file are a ready template.

## Add a project / experience

Same pattern in `src/lib/data/projects.ts` (`projects`) and `src/lib/data/experience.ts` (`experiences`). They render on the home page via the home loader → section props. Field shapes live in `src/lib/types/index.ts`.

## Edit identity, certifications, skills

`src/lib/constants/personal-info.ts` — `PERSONAL_INFO` (name, title, email, socials), `CERTIFICATIONS`, `SKILLS`. Certs/skills flow to the About section through the content layer; name/socials are used by the hero and footer.

## Add / change UI text (i18n)

Add a key under **both** `en` and `es` in `src/lib/i18n.ts`, then read it via `const { t } = useLocale()`. Any component showing text must read `locale`/`t` from `useLocale()`.

## Dark mode

The `class` strategy is wired (`next-themes` in `RootLayout`). Color tokens are CSS variables in `src/globals.css` under `:root` (light) and `.dark`. To recolor, edit those `oklch(...)` values. The toggle button is `src/components/theme-toggle.tsx`.

## Add a route

1. Create `src/pages/MyPage.tsx` (default-export the component; export a `loader` if it needs data — fetch through `@/lib/content`, never `@/lib/data`).
2. Register it in `src/App.tsx` under the `RootLayout` children: `{ path: "my-path", element: <MyPage />, loader: myLoader }`.
3. For SEO, render `<Head>` (from `vite-react-ssg`) inside the page with `<title>` / `<meta>` / canonical.
4. If the route is dynamic (`my-path/:id`), add `getStaticPaths` to its route entry so it prerenders.

## Deploy to Vercel

First time: import the repo, set **Framework Preset = Vite**, **Output = `dist`** (Build = `pnpm build`, install auto-detected). Add env var **`VITE_SITE_URL`** = your production URL (e.g. `https://your-domain.com`) so social previews use absolute URLs. Each PR gets a Vercel preview deploy automatically; `vercel.json` is already in the repo. To add a contact backend later, see `MIGRATION.md`.
