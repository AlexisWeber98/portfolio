import type { LoaderFunctionArgs } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
import { Head } from "vite-react-ssg"
import { getBlogPost } from "@/lib/content"
import { absoluteUrl, socialImageUrl } from "@/lib/site"
import { blogPostingJsonLd, serializeJsonLd } from "@/lib/structured-data"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import NotFoundPage from "@/pages/NotFoundPage"
import { useLocale } from "@/lib/locale-context"
import type { BlogPost } from "@/lib/types"

export async function blogPostLoader({ params }: LoaderFunctionArgs): Promise<BlogPost | null> {
  return getBlogPost(params.slug as string)
}

export default function BlogPostPage() {
  const post = useLoaderData() as BlogPost | null
  const { locale } = useLocale()

  // Mirrors Next's notFound(): the URL stays put and 404 content is rendered.
  if (!post) return <NotFoundPage />

  const title = `${post.title[locale]} | Alexis Weber`
  const description = post.excerpt[locale]
  const url = absoluteUrl(`/blog/${post.slug}`)
  const ogLocale = locale === "en" ? "en_US" : "es_AR"

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title[locale]} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialImageUrl(post.image)} />
        <meta property="og:image:alt" content={post.title[locale]} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.date} />
        <meta property="article:author" content={absoluteUrl("/")} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title[locale]} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImageUrl(post.image)} />
        <script type="application/ld+json">{serializeJsonLd(blogPostingJsonLd(post, locale))}</script>
      </Head>
      <main id="main-content" tabIndex={-1} className="focus:outline-none min-h-screen pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <BlogPostContent post={post} />
      </main>
    </>
  )
}
