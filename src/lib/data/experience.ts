import type { Experience } from "@/lib/types"

export const experiences: Experience[] = [

  {
    id: "1",
    company: "FixRiver",
    role: {
      en: "Full Stack Developer & DevOps Engineer",
      es: "Desarrollador Full Stack | DevOps",
    },
    description: {
      en: "Contributed to the development of multiple services, including CRM platforms, learning platforms, and AI-powered websites. Implemented and optimized the company's AWS infrastructure.",
      es: "Colaboré en el desarrollo de múltiples servicios, incluidos CRM, plataformas educativas y sitios web con agentes de IA. También implementé y optimicé la infraestructura de AWS de la empresa.",
    },
    achievements: [
      {
        en: "Contributed to service development by integrating Stripe payment processing and WhatsApp features.",
        es: "Colaboré en el desarrollo de servicios e integré pasarelas de pago con Stripe y funcionalidades de WhatsApp.",
      },
      {
        en: "Implemented and optimized the AWS infrastructure used to host and deploy company services, reducing monthly costs by more than USD 200.",
        es: "Implementé y optimicé la infraestructura de AWS donde se alojan y despliegan los servicios de la empresa, reduciendo los costos mensuales en más de USD 200.",
      },
    ],
    period: {
      start: "2025-12",
      end: "",
    },
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Microservices", "Amazon ECS", "Amazon CloudFront", "AWS IAM", "AWS Secrets Manager", "Docker", "GitHub Actions", "Stripe", "WhatsApp"],
    location: "Remote",
  },

  {
    id: "2",
    company: "ggtruco.com (Freelance)",
    role: {
      en: "Backend Developer",
      es: "Desarrollador Backend",
    },
    description: {
      en: "Built the backend for an online Truco card game using Node.js, TypeScript and WebSockets.",
      es: "Desarrollé el backend de un juego de cartas Truco en línea con Node.js, TypeScript y WebSockets.",
    },
    achievements: [
      {
        en: "Implemented new features, a referral system and APIs for authentication and user management.",
        es: "Implementé nuevas funcionalidades, un sistema de referidos y APIs de autenticación y gestión de usuarios.",
      },
      {
        en: "Optimized server performance to support many simultaneous matches.",
        es: "Optimicé el rendimiento del servidor para soportar muchas partidas simultáneas.",
      },
    ],
    period: {
      start: "2025-10",
      end: "2026-02",
    },
    technologies: ["Node.js", "TypeScript", "WebSockets"],
    location: "Remote",
  },

  {
    id: "3",
    company: "Dazlabs",
    role: {
      en: "Team Lead Backend",
      es: "Team Lead Backend",
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
    technologies: ["Node.js", "Parse Server", "MongoDB", "Microservices", "Typescript"],
    location: "Remote",
  },
  {
    id: "4",
    company: "Dazlabs",
    role: {
      en: "Backend Developer",
      es: "Desarrollador Backend",
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
    technologies: ["Node.js", "Rust", "Parse Server", "Express", "Ackee", "Matomo", "Typescript"],
    location: "Remote",
  },
  {
    id: "5",
    company: "SouthSolutions",
    role: {
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
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
