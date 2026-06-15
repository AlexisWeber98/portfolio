import type { Locale } from "@/lib/i18n"
import { getExperiences, getProfile, getProjects } from "@/lib/content"

export async function generateCV(locale: Locale): Promise<string> {
  const [experiences, projects, { personal, certifications, skills }] = await Promise.all([
    getExperiences(),
    getProjects(),
    getProfile(),
  ])

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

${personal.name}
${personal.title[locale]}

${t.contact}
${"-".repeat(60)}
Email: ${personal.email}
Phone: ${personal.phone}
Location: ${personal.location}
GitHub: ${personal.github}
LinkedIn: ${personal.linkedin}

${t.certifications}
${"-".repeat(60)}
${certifications.map((cert) => `• ${cert.name} (${cert.year})`).join("\n")}

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
Languages: ${skills.languages.join(", ")}
Backend: ${skills.backend.join(", ")}
Databases: ${skills.databases.join(", ")}
Frontend: ${skills.frontend.join(", ")}
Tools: ${skills.tools.join(", ")}
Cloud: ${skills.cloud.join(", ")}
Methodologies: ${skills.methodologies.join(", ")}
`

  return cvContent
}

export async function downloadCV(locale: Locale): Promise<void> {
  const [cvContent, { personal }] = await Promise.all([generateCV(locale), getProfile()])
  const blob = new Blob([cvContent], { type: "text/plain;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `CV_${personal.name.replace(/\s+/g, "_")}_${locale.toUpperCase()}.txt`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
