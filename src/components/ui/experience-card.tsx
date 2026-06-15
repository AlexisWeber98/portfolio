import type { Experience } from "@/lib/types"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { formatPeriod, calculateDuration } from "@/lib/utils/date-formatter"

type ExperienceCardProps = {
  experience: Experience
  locale: "en" | "es"
}

export function ExperienceCard({ experience, locale }: ExperienceCardProps) {
  return (
    <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
          <div>
            <h3 className="text-xl font-bold text-foreground">{experience.role[locale]}</h3>
            <p className="text-lg text-primary font-semibold">{experience.company}</p>
          </div>
          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time>{formatPeriod(experience.period.start, experience.period.end, locale)}</time>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          {calculateDuration(experience.period.start, experience.period.end, locale)}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">{experience.description[locale]}</p>

        {experience.achievements && experience.achievements.length > 0 && (
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="leading-relaxed">
                {achievement[locale]}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
