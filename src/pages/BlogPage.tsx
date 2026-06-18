import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import { Head } from "vite-react-ssg"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-context"
import { getBlogPosts } from "@/lib/content"
import type { BlogPost } from "@/lib/types"

export async function blogListLoader(): Promise<BlogPost[]> {
  return getBlogPosts()
}

export default function BlogPage() {
  const posts = useLoaderData() as BlogPost[]
  const { locale, t } = useLocale()
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))
  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>{`${t.blog.title} | Portfolio`}</title>
        <meta
          name="description"
          content={
            locale === "en"
              ? "Thoughts on web development, design, and technology."
              : "Reflexiones sobre desarrollo web, diseño y tecnología."
          }
        />
      </Head>
      <div className="container mx-auto max-w-6xl">
        <header className="mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">{t.blog.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {locale === "en"
              ? "Thoughts on web development, design, and technology."
              : "Reflexiones sobre desarrollo web, diseño y tecnología."}
          </p>
        </header>

        {/* Tag filters */}
        <nav
          className="flex flex-wrap gap-2 mb-8 md:mb-12"
          aria-label={locale === "en" ? "Filter posts by tag" : "Filtrar publicaciones por etiqueta"}
        >
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag(null)}
            aria-pressed={selectedTag === null}
          >
            {locale === "en" ? "All" : "Todos"}
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
              aria-pressed={selectedTag === tag}
            >
              {tag}
            </Button>
          ))}
        </nav>

        {/* Blog posts grid */}
        <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10" role="list">
          {filteredPosts.map((post) => (
            <li key={post.id}>
              <article className="h-full">
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full min-h-[600px] max-h-[800px]">
                  <div className="relative h-80 md:h-96 overflow-hidden bg-muted">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt=""
                      className="absolute inset-0 w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300 p-4"
                      role="presentation"
                      loading="lazy"
                    />
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <time className="flex items-center gap-2" dateTime={post.date}>
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        {new Date(post.date).toLocaleDateString(locale === "en" ? "en-US" : "es-ES", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        <span
                          aria-label={`${post.readTime} ${locale === "en" ? "minutes read" : "minutos de lectura"}`}
                        >
                          {post.readTime} min
                        </span>
                      </span>
                    </div>
                    <CardTitle className="text-xl md:text-2xl line-clamp-2 leading-tight">
                      <Link to={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                        {post.title[locale]}
                      </Link>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col pb-4">
                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
                      <CardDescription className="text-base leading-relaxed text-muted-foreground mb-4">
                        {post.excerpt[locale]}
                      </CardDescription>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border/50">
                      <ul
                        className="flex flex-wrap gap-2"
                        aria-label={locale === "en" ? "Post tags" : "Etiquetas del artículo"}
                      >
                        {post.tags.map((tag) => (
                          <li key={tag}>
                            <span className="px-3 py-1 text-sm font-medium bg-accent/10 text-accent-foreground rounded-full">
                              {tag}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-border/50">
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                      asChild
                    >
                      <Link to={`/blog/${post.slug}`}>
                        {t.blog.readMore}
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
