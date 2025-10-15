"use client";

import { useLocale } from "@/lib/locale-context";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/project-card";

export function ProjectsSection() {
  const { locale, t } = useLocale();

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto max-w-8xl">
        <h2
          id="projects-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12 md:mb-16"
        >
          {t.projects.title}
        </h2>

        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-6 md:gap-8"
          role="list"
        >
          {projects.map((project) => (
            <li key={project.id} className="h-full">
              <ProjectCard project={project} locale={locale} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
