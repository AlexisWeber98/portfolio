export const PERSONAL_INFO = {
  name: "Alexis David Weber",
  title: {
    en: "Software Developer | AWS Cloud Practitioner",
    es: "Desarrollador de Software | AWS Cloud Practitioner",
  },
  location: "Buenos Aires, Argentina",
  email: "alexis.weber@mailfence.com",
  phone: "+54 11 3565 5412",
  linkedin: "https://linkedin.com/in/aleweber",
  github: "https://github.com/alexisweber98",
} as const

export const CERTIFICATIONS = [
  {
    name: "AWS Certified Cloud Practitioner",
    year: "2025",
  },
  {
    name: "Lean Six Sigma",
    year: "2025",
  },
] as const

export const SKILLS = {
  languages: ["JavaScript", "TypeScript", "Rust (principiante)", "C# .NET (principiante)"],
  backend: ["Node.js", "Express", "Parse Server", "Sequelize"],
  databases: ["PostgreSQL", "MongoDB", "SQL"],
  frontend: ["React", "Next.js", "Redux", "Tailwind", "Vite"],
  tools: ["Git", "Docker", "Gitea", "Linux"],
  cloud: ["Vercel", "Fly.io", "AWS"],
  methodologies: ["Scrum", "Agile"],
} as const
