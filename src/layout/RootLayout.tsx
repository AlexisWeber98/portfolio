import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import { LocaleProvider } from "@/lib/locale-context"
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
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}

export default function RootLayout() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <LocaleProvider>
        <ScrollToHash />
        <Navigation />
        <Outlet />
        <Footer />
        <Analytics />
      </LocaleProvider>
    </ThemeProvider>
  )
}
