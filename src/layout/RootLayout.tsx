import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import { LocaleProvider, useLocale } from "@/lib/locale-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

/**
 * React Router does not scroll to hash targets on navigation, and when arriving
 * from another route (e.g. /blog -> /#about) the target section only mounts
 * after the route change. Defer the scroll a frame so the element exists.
 */
function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}

/** Lets keyboard and screen reader users bypass the navigation (WCAG 2.4.1). */
function SkipLink() {
  const { locale } = useLocale()
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-ring"
    >
      {locale === "en" ? "Skip to content" : "Saltar al contenido"}
    </a>
  )
}

export default function RootLayout() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <LocaleProvider>
        <ScrollToHash />
        <SkipLink />
        <Navigation />
        <Outlet />
        <Footer />
        <Analytics />
      </LocaleProvider>
    </ThemeProvider>
  )
}
