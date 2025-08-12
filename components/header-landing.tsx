"use client"

import type React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export default function HeaderLanding() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
  ]

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  return (
    <div>
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <header
        className={`bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg border-gray-300 py-2" : "shadow-sm py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Tagline */}
            <Link
              href="/"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded transition-transform hover:scale-105"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-black">VIDHAANA</span>
                <span className="text-sm text-gray-600">Precision. Process. Powered by AI.</span>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Primary Navigation">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center text-gray-700 hover:text-black font-medium transition-all duration-200 border-b-2 border-transparent hover:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded px-2 py-1 cursor-pointer"
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-black font-medium transition-all duration-200 border-b-2 border-transparent hover:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded px-2 py-1"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}


            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}
