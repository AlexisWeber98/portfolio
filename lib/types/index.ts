export type LocalizedText = {
  en: string;
  es: string;
};

export type DatePeriod = {
  start: string;
  end: string | null;
};

export type Experience = {
  id: string;
  company: string;
  role: LocalizedText;
  description: LocalizedText;
  achievements?: LocalizedText[];
  period: DatePeriod;
  technologies: string[];
  location: string;
};

export type Project = {
  id: string;
  title: string;
  description: LocalizedText;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
  featured?: boolean;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  content: LocalizedText;
  image: string;
  date: string;
  readTime: number;
  tags: string[];
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type SubmitStatus = "idle" | "success" | "error";
