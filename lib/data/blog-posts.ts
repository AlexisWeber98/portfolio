export type BlogPost = {
  id: string
  slug: string
  title: {
    en: string
    es: string
  }
  excerpt: {
    en: string
    es: string
  }
  content: {
    en: string
    es: string
  }
  date: string
  readTime: number
  tags: string[]
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-scalable-react-applications",
    title: {
      en: "Building Scalable React Applications",
      es: "Construyendo Aplicaciones React Escalables",
    },
    excerpt: {
      en: "Learn best practices for building large-scale React applications that are maintainable and performant.",
      es: "Aprende las mejores prácticas para construir aplicaciones React a gran escala que sean mantenibles y eficientes.",
    },
    content: {
      en: `# Building Scalable React Applications

When building large-scale React applications, it's crucial to establish patterns and practices that will help your codebase remain maintainable as it grows.

## Component Architecture

One of the most important aspects of building scalable React applications is establishing a solid component architecture. Here are some key principles:

### 1. Component Composition

Break down your UI into small, reusable components. Each component should have a single responsibility and be easy to understand.

### 2. State Management

Choose the right state management solution for your needs. For smaller applications, React's built-in hooks might be sufficient. For larger applications, consider solutions like Redux or Zustand.

### 3. Code Organization

Organize your code in a way that makes sense for your team. A common pattern is to group files by feature rather than by type.

## Performance Optimization

Performance is critical for user experience. Here are some techniques:

- Use React.memo for expensive components
- Implement code splitting with React.lazy
- Optimize re-renders with useMemo and useCallback
- Use virtualization for long lists

## Testing Strategy

A comprehensive testing strategy is essential for maintaining code quality:

- Write unit tests for utility functions
- Use integration tests for component interactions
- Implement end-to-end tests for critical user flows

## Conclusion

Building scalable React applications requires careful planning and adherence to best practices. By following these guidelines, you can create applications that are both performant and maintainable.`,
      es: `# Construyendo Aplicaciones React Escalables

Al construir aplicaciones React a gran escala, es crucial establecer patrones y prácticas que ayudarán a que tu código permanezca mantenible a medida que crece.

## Arquitectura de Componentes

Uno de los aspectos más importantes de construir aplicaciones React escalables es establecer una arquitectura de componentes sólida. Aquí hay algunos principios clave:

### 1. Composición de Componentes

Divide tu UI en componentes pequeños y reutilizables. Cada componente debe tener una única responsabilidad y ser fácil de entender.

### 2. Gestión de Estado

Elige la solución de gestión de estado adecuada para tus necesidades. Para aplicaciones más pequeñas, los hooks integrados de React pueden ser suficientes. Para aplicaciones más grandes, considera soluciones como Redux o Zustand.

### 3. Organización del Código

Organiza tu código de una manera que tenga sentido para tu equipo. Un patrón común es agrupar archivos por característica en lugar de por tipo.

## Optimización de Rendimiento

El rendimiento es crítico para la experiencia del usuario. Aquí hay algunas técnicas:

- Usa React.memo para componentes costosos
- Implementa división de código con React.lazy
- Optimiza re-renderizados con useMemo y useCallback
- Usa virtualización para listas largas

## Estrategia de Pruebas

Una estrategia de pruebas integral es esencial para mantener la calidad del código:

- Escribe pruebas unitarias para funciones de utilidad
- Usa pruebas de integración para interacciones de componentes
- Implementa pruebas end-to-end para flujos de usuario críticos

## Conclusión

Construir aplicaciones React escalables requiere planificación cuidadosa y adherencia a las mejores prácticas. Siguiendo estas pautas, puedes crear aplicaciones que sean tanto eficientes como mantenibles.`,
    },
    date: "2024-01-15",
    readTime: 8,
    tags: ["React", "JavaScript", "Architecture"],
    image: "/blog-react-architecture.jpg",
  },
  {
    id: "2",
    slug: "modern-css-techniques",
    title: {
      en: "Modern CSS Techniques for 2024",
      es: "Técnicas CSS Modernas para 2024",
    },
    excerpt: {
      en: "Explore the latest CSS features and techniques that will improve your web development workflow.",
      es: "Explora las últimas características y técnicas CSS que mejorarán tu flujo de trabajo de desarrollo web.",
    },
    content: {
      en: `# Modern CSS Techniques for 2024

CSS has evolved significantly in recent years, introducing powerful new features that make styling web applications easier and more efficient.

## Container Queries

Container queries allow you to style elements based on the size of their container rather than the viewport. This is a game-changer for component-based design.

\`\`\`css
.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
\`\`\`

## CSS Grid and Subgrid

CSS Grid has become the go-to layout system, and subgrid makes it even more powerful by allowing nested grids to align with their parent grid.

## Custom Properties (CSS Variables)

CSS custom properties enable dynamic theming and make your stylesheets more maintainable.

## Conclusion

These modern CSS techniques will help you build more responsive and maintainable web applications.`,
      es: `# Técnicas CSS Modernas para 2024

CSS ha evolucionado significativamente en los últimos años, introduciendo nuevas características poderosas que hacen que el estilo de aplicaciones web sea más fácil y eficiente.

## Container Queries

Las container queries te permiten estilizar elementos basándote en el tamaño de su contenedor en lugar del viewport. Esto es un cambio radical para el diseño basado en componentes.

\`\`\`css
.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
\`\`\`

## CSS Grid y Subgrid

CSS Grid se ha convertido en el sistema de diseño preferido, y subgrid lo hace aún más poderoso al permitir que las cuadrículas anidadas se alineen con su cuadrícula padre.

## Propiedades Personalizadas (Variables CSS)

Las propiedades personalizadas de CSS permiten tematización dinámica y hacen que tus hojas de estilo sean más mantenibles.

## Conclusión

Estas técnicas CSS modernas te ayudarán a construir aplicaciones web más responsivas y mantenibles.`,
    },
    date: "2024-02-20",
    readTime: 6,
    tags: ["CSS", "Web Design", "Frontend"],
    image: "/blog-css-grid.jpg",
  },
  {
    id: "3",
    slug: "typescript-best-practices",
    title: {
      en: "TypeScript Best Practices",
      es: "Mejores Prácticas de TypeScript",
    },
    excerpt: {
      en: "Master TypeScript with these essential best practices and patterns for writing type-safe code.",
      es: "Domina TypeScript con estas prácticas y patrones esenciales para escribir código type-safe.",
    },
    content: {
      en: `# TypeScript Best Practices

TypeScript has become the standard for building large-scale JavaScript applications. Here are some best practices to help you write better TypeScript code.

## Type Inference

Let TypeScript infer types when possible. Explicit types are not always necessary.

\`\`\`typescript
// Good
const name = "John"

// Unnecessary
const name: string = "John"
\`\`\`

## Use Interfaces for Object Shapes

Interfaces are perfect for defining the shape of objects and can be extended easily.

## Avoid 'any'

The 'any' type defeats the purpose of TypeScript. Use 'unknown' when you truly don't know the type.

## Conclusion

Following these best practices will help you write more maintainable and type-safe TypeScript code.`,
      es: `# Mejores Prácticas de TypeScript

TypeScript se ha convertido en el estándar para construir aplicaciones JavaScript a gran escala. Aquí hay algunas mejores prácticas para ayudarte a escribir mejor código TypeScript.

## Inferencia de Tipos

Deja que TypeScript infiera tipos cuando sea posible. Los tipos explícitos no siempre son necesarios.

\`\`\`typescript
// Bien
const name = "John"

// Innecesario
const name: string = "John"
\`\`\`

## Usa Interfaces para Formas de Objetos

Las interfaces son perfectas para definir la forma de objetos y pueden extenderse fácilmente.

## Evita 'any'

El tipo 'any' derrota el propósito de TypeScript. Usa 'unknown' cuando realmente no conozcas el tipo.

## Conclusión

Seguir estas mejores prácticas te ayudará a escribir código TypeScript más mantenible y type-safe.`,
    },
    date: "2024-03-10",
    readTime: 5,
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    image: "/blog-typescript.jpg",
  },
]
