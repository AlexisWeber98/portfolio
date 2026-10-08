import { Head } from "vite-react-ssg"
import { Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-context"
import { absoluteUrl } from "@/lib/site"

const CV_PDF = "/cv/alexis-weber-cv.pdf"
const CV_PREVIEW = "/cv/alexis-weber-cv.png"

export default function CvPage() {
  const { t } = useLocale()
  const title = `${t.cv.title} | Alexis Weber`

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>{title}</title>
        <meta name="description" content={t.cv.description} />
        <link rel="canonical" href={absoluteUrl("/cv")} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={t.cv.description} />
        <meta property="og:url" content={absoluteUrl("/cv")} />
        <meta property="og:image" content={absoluteUrl(CV_PREVIEW)} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={t.cv.description} />
        <meta name="twitter:image" content={absoluteUrl(CV_PREVIEW)} />
      </Head>
      <div className="container mx-auto max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{t.cv.title}</h1>
          <p className="text-lg text-muted-foreground">{t.cv.description}</p>
        </header>

        <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a href={CV_PDF} download>
              <Download className="mr-2 h-4 w-4" aria-hidden="true" />
              {t.cv.download}
            </a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
            <a href={CV_PDF} target="_blank" rel="noopener">
              <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
              {t.cv.open}
            </a>
          </Button>
        </div>

        {t.cv.languageNote && (
          <p className="mb-6 text-center text-sm text-muted-foreground">{t.cv.languageNote}</p>
        )}

        <div className="mx-auto max-w-[794px] rounded-xl border border-border bg-card p-2 sm:p-4 shadow-lg">
          <img
            src={CV_PREVIEW}
            alt={t.cv.alt}
            width={1240}
            height={1754}
            className="h-auto w-full rounded-md bg-white"
          />
        </div>
      </div>
    </main>
  )
}
