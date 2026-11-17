# Tarjeta Branding

## Objective
Apply the color palette from `tarjeta/tarjeta_alexis_weber_editable.svg` to the site and use its "AW" mark as the brand logo.

## Problem / Why
`src/globals.css` currently defines neutral grayscale tokens (`oklch(... 0 0)`), so the site has no visual identity. The header shows a generic `Portfolio` wordmark, the footer has no brand mark, and there is no favicon. The personal card already defines a strong, consistent palette and logo.

## Decisions
- User chose option **B**: light mode stays light using the card's cyan as accent; dark mode uses the card's deep navy background.
- Palette source of truth: `tarjeta/tarjeta_alexis_weber_editable.svg`.
  - Navy: `#000b18`, `#001326`, `#001a35`
  - Blue: `#0878e8`, electric `#00c7f4`
  - Cyan: `#00bdf2`
  - Off-white: `#f7f9fc`
- Logo: extract the vector "AW" mark; make it theme-aware in-app via `currentColor`, keep fixed colors in the favicon.
- No test runner in this project. `pnpm typecheck` and `pnpm build` are the quality gates; no strict TDD mode is registered.

## Scope / Constraints
- Branch: `feat/tarjeta-branding` (created from `main`).
- Do not touch CV files, PDF/PNG assets, `scripts/build-cv.sh`, or the source SVG in `tarjeta/`.
- Generated technical artifacts stay in English.
- Route: delegated direct writer for T1–T3 (write rule: 2+ non-trivial files); inline git state checks.
- Delivery strategy: `ask-on-risk`. Forecast: ~150 authored changed lines.

## Checklist
- [x] T1 — Replace theme tokens in `src/globals.css` with card-derived brand tokens; expose brand utilities in `@theme inline`; fix the invalid `hsl(var(--muted-foreground))` scrollbar usage.
- [ ] T2 — Add theme-aware `BrandLogo` React component and static `public/aw-logo.svg` favicon; link it from `index.html`.
- [ ] T3 — Use the logo in `src/components/navigation.tsx` and `src/components/footer.tsx`, preserving locale and theme behavior.
- [ ] T4 — Verify with `pnpm typecheck` and `pnpm build`; record observed results.

## Acceptance Criteria
- Light mode: off-white background, navy text, cyan/blue accents, WCAG-readable muted text.
- Dark mode: deep navy background, off-white text, cyan accents, visible borders.
- AW mark visible in header, footer, and browser tab; adapts to both themes.
- Existing i18n, theme toggle, routing, and prerender build remain intact.

## Checks
- `pnpm typecheck`
- `pnpm build`

## Progress / Verification Evidence
- Branch created: `feat/tarjeta-branding` from `main` at `9043386`.
- T1 complete: brand tokens, light/dark semantic remap, brand utilities and valid `color-mix` scrollbar colors in `src/globals.css`. `pnpm typecheck` passed.
- T2–T4 pending.
- Route deviation: native delegation was unavailable (invalid agent model in global opencode config; worker not selectable). User explicitly authorized inline implementation.

## Next Step
Delegate T1–T3 to one bounded writer, then verify T4.
