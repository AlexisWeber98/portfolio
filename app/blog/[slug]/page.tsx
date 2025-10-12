import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/data/blog-posts"
import { Footer } from "@/components/footer"
import { BlogPostContent } from "@/components/blog/blog-post-content"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <main className="min-h-screen pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <BlogPostContent post={post} />
      </main>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}
