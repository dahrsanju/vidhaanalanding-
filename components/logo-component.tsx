"use client"

import Link from "next/link"

interface LogoComponentProps {
  variant?: "header" | "footer" | "default"
  scrolled?: boolean
  showTagline?: boolean
}

export function LogoComponent({ 
  variant = "header", 
  scrolled = false, 
  showTagline = true 
}: LogoComponentProps) {
  const getLogoClasses = () => {
    const baseClasses = "font-bold text-black transition-all duration-300"
    
    switch (variant) {
      case "header":
        return `${baseClasses} ${
          scrolled 
            ? "text-xl sm:text-2xl" 
            : "text-2xl sm:text-3xl lg:text-4xl"
        }`
      case "footer":
        return `${baseClasses} text-lg`
      default:
        return `${baseClasses} text-2xl`
    }
  }

  const getTaglineClasses = () => {
    const baseClasses = "text-gray-600 font-normal transition-all duration-300"
    
    switch (variant) {
      case "header":
        return `${baseClasses} ${
          scrolled 
            ? "text-xs sm:text-sm" 
            : "text-sm sm:text-base"
        }`
      case "footer":
        return `${baseClasses} text-sm`
      default:
        return `${baseClasses} text-sm`
    }
  }

  return (
    <Link
      href="/"
      className="flex flex-col focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded transition-transform hover:scale-105"
    >
      <div className="flex flex-col">
        <span className={getLogoClasses()}>
          VIDHAANA
        </span>
        {showTagline && (
          <span className={getTaglineClasses()}>
            Precision. Process. Powered by AI.
          </span>
        )}
      </div>
    </Link>
  )
}
