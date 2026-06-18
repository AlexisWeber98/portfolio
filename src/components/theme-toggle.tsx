import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-context"

export function ThemeToggle() {
  const { locale } = useLocale()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // next-themes resolves the active theme only on the client, so we wait until
  // mount to render theme-dependent content and avoid a hydration mismatch.
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:text-foreground"
        aria-label={locale === "en" ? "Toggle theme" : "Cambiar tema"}
        disabled
      >
        <Moon className="h-5 w-5" aria-hidden="true" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-muted-foreground hover:text-foreground"
      aria-label={
        locale === "en"
          ? isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
          : isDark
            ? "Cambiar a modo claro"
            : "Cambiar a modo oscuro"
      }
    >
      {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
    </Button>
  )
}
