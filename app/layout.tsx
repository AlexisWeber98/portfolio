import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LocaleProvider } from "@/lib/locale-context"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "Personal portfolio showcasing projects, experience, and blog posts",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <LocaleProvider>
            <Navigation />
            {children}
          </LocaleProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
