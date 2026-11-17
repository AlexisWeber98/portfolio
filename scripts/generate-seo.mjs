/**
 * Generate crawler-facing discovery artifacts from the prerendered output.
 *
 * Runs after `vite-react-ssg build`, so the route list is derived from the
 * actual static pages instead of being duplicated here. Sitemap and llms.txt
 * need absolute URLs, so both are skipped unless VITE_SITE_URL is configured.
 */
import { readdir, readFile, writeFile } from "node:fs/promises"
import { join, relative, sep } from "node:path"
import { fileURLToPath } from "node:url"
import { loadEnv } from "vite"

const ROOT = fileURLToPath(new URL("..", import.meta.url))
const DIST = join(ROOT, "dist")

const env = loadEnv("production", ROOT, "VITE_")
const configuredUrl = (
  env.VITE_SITE_URL ??
  env.SITE_URL ??
  process.env.VITE_SITE_URL ??
  ""
)
  .trim()
  .replace(/\/+$/, "")

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

function cleanTitle(title) {
  return decodeEntities(title)
    .replace(/\s*\|\s*(Portfolio|Blog|Alexis Weber)\s*$/g, "")
    .replace(/^404\s*—\s*/, "")
    .trim()
}

async function collectRoutes(dir) {
  const routes = []

  async function walk(current) {
    const entries = await readdir(current, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.name.startsWith(".") || entry.name === "assets") continue
      const full = join(current, entry.name)
      if (entry.isDirectory()) {
        await walk(full)
      } else if (entry.name === "index.html") {
        const rel = relative(DIST, full).split(sep).join("/")
        const pathname = rel === "index.html" ? "/" : `/${rel.replace(/\/index\.html$/, "")}`
        const html = await readFile(full, "utf8")
        const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? pathname
        const description = html.match(/<meta\s+[^>]*\bname="description"\s+content="([^"]*)"/i)?.[1] ?? ""
        routes.push({
          pathname,
          title: cleanTitle(title),
          description: decodeEntities(description).replace(/\s+/g, " ").trim(),
        })
      }
    }
  }

  await walk(dir)

  const priority = (path) =>
    path === "/" ? 0 : path === "/blog" ? 1 : path.startsWith("/blog/") ? 2 : path === "/cv" ? 3 : 4

  return routes.sort(
    (a, b) => priority(a.pathname) - priority(b.pathname) || a.pathname.localeCompare(b.pathname)
  )
}

function buildRobots(origin) {
  const lines = [
    "# Search engines and AI crawlers are welcome.",
    "User-agent: *",
    "Allow: /",
    "",
    "User-agent: GPTBot",
    "Allow: /",
    "",
    "User-agent: ClaudeBot",
    "Allow: /",
    "",
    "User-agent: PerplexityBot",
    "Allow: /",
    "",
  ]
  if (origin) lines.push(`Sitemap: ${origin}/sitemap.xml`, "")
  return lines.join("\n")
}

function buildSitemap(routes, origin) {
  const urls = routes
    .map(({ pathname }) => `  <url>\n    <loc>${escapeXml(origin + pathname)}</loc>\n  </url>`)
    .join("\n")
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

function buildLlms(routes, origin) {
  const lines = [
    "# Alexis Weber",
    "",
    "> Software developer portfolio featuring projects, professional experience, and technical writing about web development and systems programming.",
    "",
    "## Pages",
    "",
  ]

  for (const route of routes.filter((r) => !r.pathname.startsWith("/blog/"))) {
    const suffix = route.description ? `: ${route.description}` : ""
    lines.push(`- [${route.title}](${origin}${route.pathname})${suffix}`)
  }

  const posts = routes.filter((r) => r.pathname.startsWith("/blog/"))
  if (posts.length > 0) {
    lines.push("", "## Blog posts", "")
    for (const post of posts) {
      const suffix = post.description ? `: ${post.description}` : ""
      lines.push(`- [${post.title}](${origin}${post.pathname})${suffix}`)
    }
  }

  lines.push("")
  return lines.join("\n")
}

const routes = await collectRoutes(DIST)
if (routes.length === 0) {
  console.warn("[seo] No prerendered index.html files found in dist; skipping artifact generation.")
  process.exit(0)
}

await writeFile(join(DIST, "robots.txt"), buildRobots(configuredUrl), "utf8")

if (!configuredUrl) {
  console.warn(
    "[seo] VITE_SITE_URL is unset: wrote robots.txt without a Sitemap directive and skipped " +
      "sitemap.xml / llms.txt (both require absolute URLs). Set VITE_SITE_URL in Vercel to enable them."
  )
  process.exit(0)
}

if (!/^https?:\/\//.test(configuredUrl)) {
  throw new Error(`[seo] VITE_SITE_URL must start with http:// or https:// (got "${configuredUrl}").`)
}

await writeFile(join(DIST, "sitemap.xml"), buildSitemap(routes, configuredUrl), "utf8")
await writeFile(join(DIST, "llms.txt"), buildLlms(routes, configuredUrl), "utf8")
console.log(`[seo] Generated robots.txt, sitemap.xml and llms.txt for ${routes.length} prerendered routes.`)
