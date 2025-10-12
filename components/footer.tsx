"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { PERSONAL_INFO } from "@/lib/constants/personal-info"

export function Footer() {
  const { t } = useLocale()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: PERSONAL_INFO.github, label: "GitHub" },
    { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} {PERSONAL_INFO.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
