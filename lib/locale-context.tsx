"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import type { Locale } from "./i18n"
import { getTranslations } from "./i18n"

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: ReturnType<typeof getTranslations>
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [t, setT] = useState(getTranslations("en"))

  useEffect(() => {
    // Load locale from localStorage
    const savedLocale = localStorage.getItem("locale") as Locale | null
    if (savedLocale && (savedLocale === "en" || savedLocale === "es")) {
      setLocaleState(savedLocale)
      setT(getTranslations(savedLocale))
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    setT(getTranslations(newLocale))
    localStorage.setItem("locale", newLocale)
  }

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
