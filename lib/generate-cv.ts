"use client"

import type { Locale } from "./i18n"
import { experiences } from "./data/experience"
import { projects } from "./data/projects"
import { PERSONAL_INFO, CERTIFICATIONS, SKILLS } from "./constants/personal-info"

export function generateCV(locale: Locale) {
  const translations = {
    en: {
      title: "Curriculum Vitae",
      contact: "Contact Information",
      experience: "Professional Experience",
      projects: "Featured Projects",
      skills: "Technical Skills",
      certifications: "Certifications",
      present: "Present",
      achievements: "Key Achievements",
    },
    es: {
      title: "Currículum Vitae",
      contact: "Información de Contacto",
      experience: "Experiencia Profesional",
      projects: "Proyectos Destacados",
      skills: "Habilidades Técnicas",
      certifications: "Certificaciones",
      present: "Presente",
      achievements: "Logros Clave",
    },
  }

  const t = translations[locale]

  let cvContent = `
${t.title}
${"=".repeat(60)}

${PERSONAL_INFO.name}
${PERSONAL_INFO.title[locale]}

${t.contact}
${"-".repeat(60)}
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

${t.certifications}
${"-".repeat(60)}
${CERTIFICATIONS.map((cert) => `• ${cert.name} (${cert.year})`).join("\n")}

${t.experience}
${"-".repeat(60)}
`

  experiences.forEach((exp) => {
    cvContent += `
${exp.role[locale]}
${exp.company} | ${exp.location}
${exp.period.start} - ${exp.period.end || t.present}

${exp.description[locale]}

${exp.achievements && exp.achievements.length > 0 ? `${t.achievements}:\n${exp.achievements.map((a) => `• ${a[locale]}`).join("\n")}\n` : ""}
Technologies: ${exp.technologies.join(", ")}

`
  })

  cvContent += `
${t.projects}
${"-".repeat(60)}
`

  projects.forEach((project) => {
    cvContent += `
${project.title}
${project.description[locale]}
Technologies: ${project.tags.join(", ")}
${project.link ? `Link: ${project.link}` : ""}
${project.github ? `GitHub: ${project.github}` : ""}

`
  })

  cvContent += `
${t.skills}
${"-".repeat(60)}
Languages: ${SKILLS.languages.join(", ")}
Backend: ${SKILLS.backend.join(", ")}
Databases: ${SKILLS.databases.join(", ")}
Frontend: ${SKILLS.frontend.join(", ")}
Tools: ${SKILLS.tools.join(", ")}
Cloud: ${SKILLS.cloud.join(", ")}
Methodologies: ${SKILLS.methodologies.join(", ")}
`

  return cvContent
}

export function downloadCV(locale: Locale) {
  const cvContent = generateCV(locale)
  const blob = new Blob([cvContent], { type: "text/plain;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `CV_${PERSONAL_INFO.name.replace(/\s+/g, "_")}_${locale.toUpperCase()}.txt`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
