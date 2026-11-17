import { PERSONAL_INFO } from "@/lib/constants/personal-info"
import { absoluteUrl } from "@/lib/site"
import type { BlogPost } from "@/lib/types"

type Schema = Record<string, unknown>

/**
 * Serializes a schema object for a `application/ld+json` script tag.
 * Escaping `<` prevents an injected value from terminating the script element.
 */
export function serializeJsonLd(schema: Schema | Schema[]): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c")
}

export function personJsonLd(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    url: absoluteUrl("/"),
    jobTitle: PERSONAL_INFO.title.en,
    email: `mailto:${PERSONAL_INFO.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
    sameAs: [PERSONAL_INFO.linkedin, PERSONAL_INFO.github],
    knowsAbout: ["Software Development", "TypeScript", "React", "Node.js", "Rust"],
  }
}

export function webSiteJsonLd(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${PERSONAL_INFO.name} — Portfolio`,
    url: absoluteUrl("/"),
    inLanguage: "en",
  }
}

export function blogPostingJsonLd(post: BlogPost, locale: "en" | "es"): Schema {
  const author = {
    "@type": "Person",
    name: PERSONAL_INFO.name,
    url: absoluteUrl("/"),
  }
  const url = absoluteUrl(`/blog/${post.slug}`)

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title[locale],
    description: post.excerpt[locale],
    image: absoluteUrl(post.image),
    datePublished: post.date,
    dateModified: post.date,
    author,
    publisher: author,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: locale,
    keywords: post.tags.join(", "),
    articleSection: post.tags,
  }
}
