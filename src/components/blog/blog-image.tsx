import { cn } from "@/lib/utils"

interface BlogImageProps {
  src?: string
  alt?: string
  className?: string
  imgClassName?: string
  zoomOnHover?: boolean
  loading?: "lazy" | "eager"
}

/**
 * Consistent 16:9 frame for blog images. The surface stays light in both
 * themes so dark logos on transparent backgrounds (e.g. SVG marks) never
 * vanish in dark mode; object-contain + padding avoids cropping/stretching.
 */
export function BlogImage({ src, alt = "", className, imgClassName, zoomOnHover, loading }: BlogImageProps) {
  return (
    <div className={cn("relative aspect-video w-full overflow-hidden bg-neutral-100", className)}>
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        loading={loading}
        {...(alt === "" ? { role: "presentation" } : {})}
        className={cn(
          "absolute inset-0 h-full w-full object-contain object-center p-6 sm:p-8",
          zoomOnHover && "transition-transform duration-300 group-hover:scale-105",
          imgClassName,
        )}
      />
    </div>
  )
}
