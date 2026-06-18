/**
 * Content access layer — the single seam between the UI and the content source.
 *
 * Phase 1 (now): returns the static data in `@/lib/data` and `@/lib/constants`.
 * Phase 2 (future backend/CMS): reimplement these functions to `fetch()` from
 * the backend. Nothing else in the frontend changes — pages consume this layer
 * through React Router loaders, and `vite-react-ssg` runs the loaders at build
 * time (a publish webhook re-triggers the build to keep the static HTML fresh).
 *
 * Rule: nothing outside this folder may import from `@/lib/data`.
 */
import type { BlogPost, Experience, Project } from "@/lib/types"
import { blogPosts } from "@/lib/data/blog-posts"
import { experiences } from "@/lib/data/experience"
import { projects } from "@/lib/data/projects"
import { CERTIFICATIONS, PERSONAL_INFO, SKILLS } from "@/lib/constants/personal-info"

export type PersonalInfo = typeof PERSONAL_INFO
export type Certifications = typeof CERTIFICATIONS
export type Skills = typeof SKILLS

export interface SiteProfile {
  personal: PersonalInfo
  certifications: Certifications
  skills: Skills
}

export async function getProjects(): Promise<Project[]> {
  return projects
}

export async function getExperiences(): Promise<Experience[]> {
  return experiences
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return blogPosts
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return blogPosts.find((post) => post.slug === slug) ?? null
}

export async function getProfile(): Promise<SiteProfile> {
  return { personal: PERSONAL_INFO, certifications: CERTIFICATIONS, skills: SKILLS }
}
