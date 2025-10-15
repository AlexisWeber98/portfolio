import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "postulate",
    title: "Postulate",
    description: {
      en: "Management and analysis platform for job search strategy, job application organizer with registration metrics .",
      es: "Plataforma de gestión y análisis de estrategia de búsqueda laboral, organizador de postulaciones laborales con metricas de registros.",
    },
    image: "/job-application-platform-interface.jpg",
    tags: ["Vite.js", "TypeScript", "PostgreSQL", "Tailwind", "Resend"],
    link: "https://postulateok.com",
    githubFrontend: "https://github.com/AlexisWeber98/postulate-client",
    githubBackend: "https://github.com/AlexisWeber98/postulate-api",
    featured: true,
  },
  {
    id: "craftbeer",
    title: "Craft Beer Shop",
    description: {
      en: "E-commerce platform for craft beer enthusiasts. Features product catalog, shopping cart, payment integration, and order management.",
      es: "Plataforma de comercio electrónico para entusiastas de la cerveza artesanal. Incluye catálogo de productos, carrito de compras, integración de pagos y gestión de pedidos.",
    },
    image: "/craft-beer-ecommerce-shop.jpg",
    tags: [
      "React",
      "Node.js",
      "MercadoPago-SDK",
      "PosgreSQL",
      "Tailwind",
      "Google-SDK",
      "NodeMailer",
    ],
    link: "https://craftbeershop.vercel.app",
    featured: true,
    github: "https://github.com/AlexisWeber98/CraftBeer_Ale",
  },
  {
    id: "wedding",
    title: "Wedding Invitation",
    description: {
      en: "wedding web invitation with event details, photo gallery, animations,music recommendations, and RSVP functionality.",
      es: "Invitación web de mi boda con detalles del evento, galería de fotos, animaciones, recomendación de música y confirmación de asistencia.",
    },
    image: "/wedding-invitation.jpg",
    tags: [
      "React",
      "Vite.js",
      "Typescript",
      "AWS Lambda",
      "AWS DynamoDB",
      "AWS Api Gateway",
    ],
    link: "https://aleymar.vercel.app",
    github: "https://github.com/AlexisWeber98/wedding",
    featured: true, // Set to true for featured projects
  },
];
