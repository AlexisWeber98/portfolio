import { useLoaderData } from "react-router-dom"
import { Head } from "vite-react-ssg"
import type { Experience, Project } from "@/lib/types"
import type { SiteProfile } from "@/lib/content"
import { getExperiences, getProfile, getProjects } from "@/lib/content"
import { absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/site"
import { personJsonLd, serializeJsonLd, webSiteJsonLd } from "@/lib/structured-data"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"

export interface HomeLoaderData {
  profile: SiteProfile
  experiences: Experience[]
  projects: Project[]
}

export async function homeLoader(): Promise<HomeLoaderData> {
  const [profile, experiences, projects] = await Promise.all([
    getProfile(),
    getExperiences(),
    getProjects(),
  ])
  return { profile, experiences, projects }
}

export default function HomePage() {
  const { profile, experiences, projects } = useLoaderData() as HomeLoaderData

  const title = "Alexis Weber — Software Developer"
  const description =
    "Alexis Weber, Software Developer based in Buenos Aires, specialized in Node.js, TypeScript, microservices and AWS. Projects, experience and blog."

  return (
    <main className="min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={absoluteUrl("/")} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={absoluteUrl("/")} />
        <meta property="og:image" content={absoluteUrl(DEFAULT_OG_IMAGE)} />
        <meta property="og:image:alt" content="Alexis Weber — Software Developer" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={absoluteUrl(DEFAULT_OG_IMAGE)} />
        <script type="application/ld+json">{serializeJsonLd([personJsonLd(), webSiteJsonLd()])}</script>
      </Head>
      <HeroSection />
      <AboutSection certifications={profile.certifications} skills={profile.skills} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
    </main>
  )
}
