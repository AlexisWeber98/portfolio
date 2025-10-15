import type { Project } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
  locale: "en" | "es";
};

export function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {project.description[locale]}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex flex-wrap gap-2">
        {project.link && (
          <Button asChild variant="default" size="sm" className="w-full sm:flex-1">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {locale === "es" ? "Ver Proyecto" : "View Project"}
            </a>
          </Button>
        )}
        {project.github && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full sm:flex-1 bg-transparent"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {locale === "es" ? "Código" : "Code"}
            </a>
          </Button>
        )}

        {project.githubFrontend && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full sm:flex-1 bg-transparent"
          >
            <a
              href={project.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              {locale === "es" ? "Código Frontend" : "Code"}
            </a>
          </Button>
        )}

        {project.githubBackend && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full sm:flex-1 bg-transparent"
          >
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              {locale === "es" ? "Código Backend" : "Code"}
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
