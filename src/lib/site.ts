/**
 * Site-level config used for absolute URLs in SEO/social meta.
 *
 * Social link-preview crawlers (LinkedIn, X, WhatsApp, Slack) require ABSOLUTE
 * og:image / og:url values. Set VITE_SITE_URL in the Vercel project env (e.g.
 * https://your-domain.com) so the prerendered HTML emits absolute URLs. When
 * unset (local builds), URLs fall back to relative paths.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, "")

export function absoluteUrl(path = ""): string {
  if (/^https?:\/\//.test(path)) return path
  if (!path) return SITE_URL
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`
}
