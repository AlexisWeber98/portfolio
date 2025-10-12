# Personal Portfolio Website

Portfolio personal profesional de Alexis David Weber - Desarrollador de Software especializado en Node.js, microservicios y AWS.

## Características

- ✅ Bilingüe (Español/Inglés)
- ✅ Mobile-first responsive design
- ✅ Portfolio de proyectos
- ✅ Línea de tiempo de experiencia profesional
- ✅ Sistema de blog con enrutamiento dinámico
- ✅ Formulario de contacto con API de email
- ✅ Descarga de CV en formato texto
- ✅ Diseño semántico y accesible
- ✅ Arquitectura modular siguiendo SOLID y Clean Code

## Estructura del Proyecto

\`\`\`
├── app/                      # Next.js App Router
│   ├── blog/                # Blog pages
│   ├── api/                 # API routes
│   └── page.tsx             # Homepage
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── projects-section.tsx
│   ├── experience-section.tsx
│   └── contact-section.tsx
├── lib/                     # Utilities and data
│   ├── constants/           # Constants and configuration
│   ├── data/                # Data files (projects, experience, blog)
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   └── i18n.ts              # Internationalization
└── public/                  # Static assets
\`\`\`

## Agregar Nuevos Proyectos

Para agregar un nuevo proyecto, edita `lib/data/projects.ts`:

\`\`\`typescript
{
  id: "unique-id",
  title: "Project Name",
  description: {
    en: "English description",
    es: "Descripción en español",
  },
  image: "/path-to-image.jpg",
  tags: ["Tech1", "Tech2"],
  link: "https://project-url.com",
  github: "https://github.com/user/repo",
  featured: true,
}
\`\`\`

## Tecnologías

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Language:** TypeScript
- **Deployment:** Vercel

## Principios de Diseño

- **SOLID:** Separación de responsabilidades
- **KISS:** Keep It Simple, Stupid
- **DRY:** Don't Repeat Yourself
- **Modularidad:** Componentes reutilizables
- **Accesibilidad:** Semántica HTML y ARIA

## Contacto

- Email: alexis.weber@mailfence.com
- LinkedIn: [linkedin.com/in/aleweber](https://linkedin.com/in/aleweber)
- GitHub: [github.com/alexisweber98](https://github.com/alexisweber98)
# portfolio
