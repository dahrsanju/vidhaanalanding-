"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface LogoFallbackProps {
  width?: number
  height?: number
  className?: string
  priority?: boolean
  alt?: string
  variant?: "header" | "footer" | "default"
  scrolled?: boolean
}

export function LogoFallback({
  width = 180,
  height = 60,
  className = "",
  priority = false,
  alt = "Vidhaana AI Legal Assistant",
  variant = "default",
  scrolled = false,
}: LogoFallbackProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Define responsive sizing based on variant and scroll state
  const getLogoClasses = () => {
    const baseClasses = "transition-all duration-300 logo-responsive logo-force-visible object-contain"

    switch (variant) {
      case "header":
        return `${baseClasses} ${
          scrolled
            ? "h-8 w-auto sm:h-10 md:h-12 logo-header-scrolled"
            : "h-10 w-auto sm:h-12 md:h-14 lg:h-16 logo-header"
        }`
      case "footer":
        return `${baseClasses} logo-footer filter brightness-0 invert`
      default:
        return `${baseClasses} ${className}`
    }
  }

  // Fallback text component
  const FallbackText = () => <span className="logo-fallback text-xl font-bold text-black">Vidhaana</span>

  useEffect(() => {
    // Preload the image
    const img = new window.Image()
    img.onload = () => setImageLoaded(true)
    img.onerror = () => setImageError(true)
    img.src = "/logo.svg"
  }, [])

  if (imageError) {
    return <FallbackText />
  }

  return (
    <div className="logo-container">
      <Image
        src="/logo.svg"
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={getLogoClasses()}
        style={{
          maxWidth: "100%",
          height: "auto",
          width: "auto",
          objectFit: "contain",
        }}
        onError={() => {
          console.error("Logo failed to load")
          setImageError(true)
        }}
        onLoad={() => {
          setImageLoaded(true)
        }}
        unoptimized={true} // Disable Next.js optimization for SVG
      />
      {!imageLoaded && !imageError && <div className="logo-loading w-32 h-8 bg-gray-200 animate-pulse rounded"></div>}
    </div>
  )
}
