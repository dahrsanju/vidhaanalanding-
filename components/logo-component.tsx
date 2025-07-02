"use client"

import Image from "next/image"
import { useState } from "react"

interface LogoProps {
  width?: number
  height?: number
  className?: string
  priority?: boolean
  alt?: string
  variant?: "header" | "footer" | "default"
  scrolled?: boolean
}

export function Logo({
  width = 180,
  height = 60,
  className = "",
  priority = false,
  alt = "Vidhaana AI Legal Assistant",
  variant = "default",
  scrolled = false,
}: LogoProps) {
  const [imageError, setImageError] = useState(false)

  // Define responsive sizing based on variant and scroll state
  const getLogoClasses = () => {
    const baseClasses = "transition-all duration-300 logo-responsive"

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

  return (
    <Image
      src={imageError ? "/placeholder.svg?height=60&width=180&text=Vidhaana" : "/logo.svg"}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={getLogoClasses()}
      style={{
        maxWidth: "100%",
        height: "auto",
        objectFit: "contain",
      }}
      onError={() => setImageError(true)}
      onLoad={() => setImageError(false)}
    />
  )
}
