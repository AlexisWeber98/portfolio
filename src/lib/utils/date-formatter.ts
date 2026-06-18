export function formatPeriod(start: string, end: string | null, locale: "en" | "es"): string {
  const startDate = new Date(start)
  const startYear = startDate.getFullYear()
  const startMonth = startDate.toLocaleDateString(locale === "es" ? "es-ES" : "en-US", { month: "short" })

  if (!end) {
    return locale === "es" ? `${startMonth} ${startYear} - Presente` : `${startMonth} ${startYear} - Present`
  }

  const endDate = new Date(end)
  const endYear = endDate.getFullYear()
  const endMonth = endDate.toLocaleDateString(locale === "es" ? "es-ES" : "en-US", { month: "short" })

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`
}

export function calculateDuration(start: string, end: string | null, locale: "en" | "es"): string {
  const startDate = new Date(start)
  const endDate = end ? new Date(end) : new Date()

  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth())

  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  if (locale === "es") {
    if (years === 0) {
      return `${remainingMonths} ${remainingMonths === 1 ? "mes" : "meses"}`
    }
    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? "año" : "años"}`
    }
    return `${years} ${years === 1 ? "año" : "años"} ${remainingMonths} ${remainingMonths === 1 ? "mes" : "meses"}`
  }

  if (years === 0) {
    return `${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`
  }
  if (remainingMonths === 0) {
    return `${years} ${years === 1 ? "year" : "years"}`
  }
  return `${years} ${years === 1 ? "year" : "years"} ${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`
}
