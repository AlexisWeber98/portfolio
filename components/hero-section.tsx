"use client"

import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-context"
import { downloadCV } from "@/lib/generate-cv"
import { PERSONAL_INFO } from "@/lib/constants/personal-info"

export function HeroSection() {
  const { locale, t } = useLocale()

  const handleDownloadCV = () => {
    downloadCV(locale)
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in">{t.hero.greeting}</p>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground animate-fade-in-up text-balance"
            >
              {PERSONAL_INFO.name}
            </h1>
            <p
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-accent animate-fade-in-up animation-delay-200"
              role="doc-subtitle"
            >
              {PERSONAL_INFO.title[locale]}
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
            {t.hero.description}
          </p>

          <nav
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600"
            aria-label={locale === "en" ? "Hero actions" : "Acciones principales"}
          >
            <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="#projects">
                {t.hero.cta}
                <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" onClick={handleDownloadCV}>
              <Download className="mr-2 h-4 w-4" aria-hidden="true" />
              {t.hero.downloadCV}
            </Button>
          </nav>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
