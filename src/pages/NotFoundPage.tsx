import { Link } from "react-router-dom"
import { Head } from "vite-react-ssg"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-context"

export default function NotFoundPage() {
  const { locale } = useLocale()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
      <Head>
        <title>404 — Not Found | Portfolio</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1 className="text-7xl font-bold text-foreground">404</h1>
      <p className="text-lg text-muted-foreground">
        {locale === "en" ? "This page could not be found." : "No se encontró esta página."}
      </p>
      <Button asChild>
        <Link to="/">{locale === "en" ? "Back to home" : "Volver al inicio"}</Link>
      </Button>
    </main>
  )
}
