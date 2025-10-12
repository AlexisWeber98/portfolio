"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-context"
import ReactMarkdown from "react-markdown"
import type { BlogPost } from "@/lib/types"

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const { locale, t } = useLocale()

  return (
    <article className="container mx-auto max-w-4xl">
      <Button variant="ghost" className="mb-8" asChild>
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.blog.backToBlog}
        </Link>
      </Button>

      <div className="relative h-80 md:h-96 lg:h-[28rem] rounded-lg overflow-hidden mb-8">
        <Image 
          src={post.image || "/placeholder.svg"} 
          alt={post.title[locale]} 
          fill 
          className="object-cover object-center" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          quality={90}
          priority
        />
      </div>

      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          {post.title[locale]}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          <time className="flex items-center gap-2" dateTime={post.date}>
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString(locale === "en" ? "en-US" : "es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {post.readTime} {locale === "en" ? "min read" : "min de lectura"}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-sm font-medium bg-accent/10 text-accent-foreground rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-8">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 mt-6">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 mt-4">{children}</h3>
            ),
            p: ({ children }) => <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>,
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">{children}</ul>
            ),
            li: ({ children }) => <li className="leading-relaxed">{children}</li>,
            code: ({ children }) => (
              <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground">{children}</code>
            ),
            pre: ({ children }) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
          }}
        >
          {post.content[locale]}
        </ReactMarkdown>
      </div>
    </article>
  )
}
