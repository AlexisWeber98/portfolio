export const PERSONAL_INFO = {
  name: "Alexis David Weber",
  title: {
    en: "Software Developer | AWS Cloud Practitioner",
    es: "Desarrollador de Software | AWS Cloud Practitioner",
  },
  location: "Buenos Aires, Argentina",
  email: "contacto@alexisweber.com",
  linkedin: "https://linkedin.com/in/aleweber",
  github: "https://github.com/alexisweber98",
} as const

export const CERTIFICATIONS = [
  {
    name: "AWS Certified Cloud Practitioner",
    year: "2025",
  },
] as const

export const SKILLS = {
  languages: ["JavaScript", "TypeScript", "Rust (principiante)"],
  backend: ["Spring-boot", "Node.js", "Express", "Parse Server", "Sequelize"],
  databases: ["PostgreSQL", "MongoDB", "SQL"],
  frontend: ["React", "Next.js", "Redux", "Tailwind", "Vite"],
  tools: ["Git", "Docker", "Gitea", "Linux", "Claude Code", "Codex"],
  cloud: ["Vercel", "Fly.io", "AWS", "Hostinguer"],
  methodologies: ["Scrum", "Agile"],
} as const
