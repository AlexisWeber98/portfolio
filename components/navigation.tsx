"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-context"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { locale, setLocale, t } = useLocale()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLocale = () => {
    setLocale(locale === "en" ? "es" : "en")
  }

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "/blog", label: t.nav.blog },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
      role="banner"
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label={locale === "en" ? "Main navigation" : "Navegación principal"}
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-foreground hover:text-accent transition-colors"
            aria-label={locale === "en" ? "Go to homepage" : "Ir a la página principal"}
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLocale}
                className="text-muted-foreground hover:text-foreground"
                aria-label={locale === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
              >
                <Globe className="h-5 w-5" aria-hidden="true" />
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLocale}
              className="text-muted-foreground hover:text-foreground"
              aria-label={locale === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
            >
              <Globe className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={
                isOpen ? (locale === "en" ? "Close menu" : "Cerrar menú") : locale === "en" ? "Open menu" : "Abrir menú"
              }
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-border">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
