"use client"

import Image from "next/image"
import { useState } from "react"

interface LogoProps {
  width?: number
  height?: number
  className?: string
  priority?: boolean
  alt?: string
}

export function Logo({
  width = 64,
  height = 64,
  className = "",
  priority = false,
  alt = "Vidhaana AI Legal Assistant Logo",
}: LogoProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <Image
      src={imageError ? "/placeholder.svg?height=64&width=64&text=V" : "/logo-optimized.png"}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={`transition-all duration-300 ${className}`}
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
      onError={() => setImageError(true)}
      onLoad={() => setImageError(false)}
    />
  )
}
