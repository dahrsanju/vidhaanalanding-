"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Features", href: "/features" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Contact", href: "/contact" },
    { name: "Legal Disclaimer", href: "/legal-disclaimer" },
  ]

  return (
    <div>
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <header
        className={`bg-white border-b-2 border-black sticky top-0 z-50 transition-shadow duration-200 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link
              href="/"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
            >
              <Image src="/logo.svg" alt="Vidhaana logo" width={100} height={100} priority className="h-24 w-24" />
            </Link>

            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Primary Navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-gray-600 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden border-t border-black py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-black hover:text-gray-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    </div>
  )
}
