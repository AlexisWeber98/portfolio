/**
 * Site-level config used for absolute URLs in SEO/social meta.
 *
 * Social link-preview crawlers (LinkedIn, X, WhatsApp, Slack) require ABSOLUTE
 * og:image / og:url values. Set VITE_SITE_URL in the Vercel project env (e.g.
 * https://alexisweber.com, Production only) so the prerendered HTML emits absolute URLs. When
 * unset (local builds), URLs fall back to relative paths.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, "")

/** Default social-preview image (1200x630) shared by routes without their own artwork. */
export const DEFAULT_OG_IMAGE = "/og-image.png"

export function absoluteUrl(path = ""): string {
  if (/^https?:\/\//.test(path)) return path
  if (!path) return SITE_URL
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`
}
