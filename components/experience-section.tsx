"use client"

import { useLocale } from "@/lib/locale-context"
import { experiences } from "@/lib/data/experience"
import { ExperienceCard } from "@/components/ui/experience-card"

export function ExperienceSection() {
  const { locale, t } = useLocale()

  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8" aria-labelledby="experience-heading">
      <div className="container mx-auto max-w-4xl">
        <h2
          id="experience-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12 md:mb-16"
        >
          {t.experience.title}
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />

          <ol className="space-y-8 md:space-y-12" role="list">
            {experiences.map((exp) => (
              <li key={exp.id} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div
                  className="absolute left-0 md:left-8 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background"
                  aria-hidden="true"
                />

                <article>
                  <ExperienceCard experience={exp} locale={locale} />
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
