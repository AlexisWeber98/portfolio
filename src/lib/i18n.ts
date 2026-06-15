export type Locale = "en" | "es"

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Software Developer | AWS Cloud Practitioner",
      description:
        "I build scalable architectures and innovative solutions with focus on quality, security and best practices.",
      cta: "View My Work",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      description:
        "Software Developer with 2+ years of experience in scalable architectures, specialized in Node.js, microservices and AWS.",
    },
    experience: {
      title: "Experience",
      present: "Present",
    },
    projects: {
      title: "Selected Projects",
      viewProject: "View Project",
    },
    blog: {
      title: "Blog",
      readMore: "Read More",
      backToBlog: "Back to Blog",
    },
    contact: {
      title: "Get In Touch",
      description: "Have a project in mind or just want to chat? Feel free to reach out!",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      about: "Sobre Mí",
      experience: "Experiencia",
      projects: "Proyectos",
      blog: "Blog",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador de Software | AWS Cloud Practitioner",
      description:
        "Construyo arquitecturas escalables y soluciones innovadoras con enfoque en calidad, seguridad y buenas prácticas.",
      cta: "Ver Mi Trabajo",
      downloadCV: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      description:
        "Desarrollador de Software con 2+ años de experiencia en arquitecturas escalables, especializado en Node.js, microservicios y AWS.",
    },
    experience: {
      title: "Experiencia",
      present: "Presente",
    },
    projects: {
      title: "Proyectos Destacados",
      viewProject: "Ver Proyecto",
    },
    blog: {
      title: "Blog",
      readMore: "Leer Más",
      backToBlog: "Volver al Blog",
    },
    contact: {
      title: "Contacto",
      description: "¿Tienes un proyecto en mente o simplemente quieres charlar? ¡No dudes en contactarme!",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado exitosamente!",
      error: "Error al enviar el mensaje. Por favor intenta de nuevo.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
}

export function getTranslations(locale: Locale) {
  return translations[locale]
}
