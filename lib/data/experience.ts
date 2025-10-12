import type { Experience } from "@/lib/types"

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Dazlabs",
    role: {
      en: "Team Lead Backend Developer",
      es: "Team Lead Backend Developer",
    },
    description: {
      en: "Coordinated and supervised a team of 3 developers in creating microservices with Node.js, Parse Server and MongoDB for real-time video game systems.",
      es: "Coordiné y supervisé un equipo de 3 desarrolladores en la creación de microservicios con Node.js, Parse Server y MongoDB para sistemas de videojuegos en tiempo real.",
    },
    achievements: [
      {
        en: "Collaborated with the lab team on research into new technologies, implementing scalable improvements",
        es: "Colaboré con el equipo de laboratorio en investigaciones sobre nuevas tecnologías, implementando mejoras escalables",
      },
      {
        en: "Trained new team members in best practices, accelerating their productivity by 30%",
        es: "Capacité a nuevos integrantes en buenas prácticas, acelerando su productividad en un 30%",
      },
    ],
    period: {
      start: "2024-11",
      end: "2025-05",
    },
    technologies: ["Node.js", "Parse Server", "MongoDB", "Microservices"],
    location: "Remote",
  },
  {
    id: "2",
    company: "Dazlabs",
    role: {
      en: "Backend Developer",
      es: "Backend Developer",
    },
    description: {
      en: "Automated repetitive tasks that became standard within the company, reducing development time by 40%.",
      es: "Automaticé tareas repetitivas que se convirtieron en estándar dentro de la empresa, reduciendo el tiempo de desarrollo en un 40%.",
    },
    achievements: [
      {
        en: "Developed a packager in Rust that generates functional backends with Parse Server or Express, reducing configurations by 80%",
        es: "Desarrollé un empaquetador en Rust que genera backends funcionales con Parse Server o Express, reduciendo configuraciones en un 80%",
      },
      {
        en: "Implemented and customized open-source microservices like Ackee and Matomo to improve report accuracy",
        es: "Implementé y personalicé microservicios de código abierto como Ackee y Matomo para mejorar la precisión de reportes",
      },
    ],
    period: {
      start: "2024-04",
      end: "2024-11",
    },
    technologies: ["Node.js", "Rust", "Parse Server", "Express", "Ackee", "Matomo"],
    location: "Remote",
  },
  {
    id: "3",
    company: "SouthSolutions",
    role: {
      en: "Full Stack Developer",
      es: "Full Stack Developer",
    },
    description: {
      en: "Developed web applications using TypeScript, Vite, Next.js, Tailwind and Redux. Built backend solutions with Node.js and PostgreSQL.",
      es: "Desarrollé aplicaciones web utilizando TypeScript, Vite, Next.js, Tailwind y Redux. Construí soluciones backend con Node.js y PostgreSQL.",
    },
    achievements: [
      {
        en: "Developed mobile applications with React Native and Expo",
        es: "Desarrollé aplicaciones móviles con React Native y Expo",
      },
      {
        en: "Implemented SEO best practices that positioned developments between 4th and 10th position in search results",
        es: "Implementé buenas prácticas SEO que posicionaron los desarrollos entre la 4ta y 10ma posición en resultados de búsqueda",
      },
      {
        en: "Deployed projects to production using Vercel and Fly.io",
        es: "Desplegué proyectos en producción utilizando Vercel y Fly.io",
      },
    ],
    period: {
      start: "2023-11",
      end: "2025-02",
    },
    technologies: [
      "TypeScript",
      "Next.js",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Tailwind",
      "Redux",
      "Vercel",
      "Fly.io",
    ],
    location: "Remote",
  },
]
