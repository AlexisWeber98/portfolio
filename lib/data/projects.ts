import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "postulate",
    title: "Postulate",
    description: {
      en: "Job application platform connecting candidates with opportunities. Features include profile management, application tracking, and real-time notifications.",
      es: "Plataforma de postulación laboral que conecta candidatos con oportunidades. Incluye gestión de perfiles, seguimiento de aplicaciones y notificaciones en tiempo real.",
    },
    image: "/job-application-platform-interface.jpg",
    tags: ["Vite.js", "TypeScript", "PostgreSQL", "Tailwind", "Resend"],
    link: "https://postulateok.com",
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
    github: "https://github.com/username/repo",
    featured: true, // Set to true for featured projects
  },
];
