import type { LoaderFunctionArgs } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
import { Head } from "vite-react-ssg"
import { getBlogPost } from "@/lib/content"
import { absoluteUrl } from "@/lib/site"
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

  return (
    <>
      <Head>
        <title>{`${post.title[locale]} | Blog`}</title>
        <meta name="description" content={post.excerpt[locale]} />
        <link rel="canonical" href={absoluteUrl(`/blog/${post.slug}`)} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title[locale]} />
        <meta property="og:description" content={post.excerpt[locale]} />
        <meta property="og:image" content={absoluteUrl(post.image)} />
        <meta property="og:url" content={absoluteUrl(`/blog/${post.slug}`)} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="min-h-screen pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <BlogPostContent post={post} />
      </main>
    </>
  )
}
