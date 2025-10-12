"use client"

import { useLocale } from "@/lib/locale-context"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CERTIFICATIONS, SKILLS } from "@/lib/constants/personal-info"

export function AboutSection() {
  const { locale, t } = useLocale()

  const aboutText = {
    en: "Software Developer with 2+ years of experience in scalable architectures, specialized in Node.js, microservices and AWS. Certified as AWS Cloud Practitioner, with success in performance optimization (up to 40% in MongoDB) and technical team leadership. Oriented to innovative solutions with focus on quality, security and best practices (SOLID, Clean Code).",
    es: "Desarrollador de Software con 2+ años de experiencia en arquitecturas escalables, especializado en Node.js, microservicios y AWS. Certificado como AWS Cloud Practitioner, con éxito en la optimización de rendimiento (hasta 40% en MongoDB) y liderazgo de equipos técnicos. Orientado a soluciones innovadoras con enfoque en calidad, seguridad y buenas prácticas (SOLID, Clean Code).",
  }

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 md:mb-12">{t.about.title}</h2>

        <div className="space-y-6">
          <Card className="p-6 md:p-8 bg-card border-border">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">{aboutText[locale]}</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {locale === "es" ? "Certificaciones" : "Certifications"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {CERTIFICATIONS.map((cert) => (
                    <Badge key={cert.name} variant="secondary">
                      {cert.name} ({cert.year})
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {locale === "es" ? "Habilidades Técnicas" : "Technical Skills"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">
                      {locale === "es" ? "Lenguajes" : "Languages"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {SKILLS.languages.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {SKILLS.backend.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {SKILLS.frontend.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Cloud & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {SKILLS.cloud.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
