type BrandLogoProps = {
  className?: string
  "aria-hidden"?: boolean
  "aria-label"?: string
}

/**
 * The AW mark from the personal card. The main shape inherits `currentColor`
 * so it stays visible in both themes; the cyan accents are fixed brand colors.
 */
export function BrandLogo({
  className,
  "aria-hidden": ariaHidden,
  "aria-label": ariaLabel = "Alexis Weber",
}: BrandLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -12 184 94"
      className={className}
      role={ariaHidden ? undefined : "img"}
      aria-hidden={ariaHidden}
      aria-label={ariaHidden ? undefined : ariaLabel}
    >
      <path d="M0 82 L66 -12 L132 82 L101 82 L66 29 L31 82 Z" fill="currentColor" />
      <path d="M93 82 L153 -12 L184 -12 L124 82 Z" fill="var(--brand-cyan)" />
      <path d="M49 82 L66 57 L83 82 Z" fill="var(--brand-cyan)" />
    </svg>
  )
}
