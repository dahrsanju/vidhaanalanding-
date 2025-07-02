"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Solutions",
      href: "/solutions",
      dropdown: [
        { name: "By Industry", href: "/industries" },
        { name: "Use Cases", href: "/use-cases" },
        { name: "Features", href: "/features" },
      ],
    },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ]

  const handleDropdownToggle = (itemName: string, event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  const handleDropdownHover = (itemName: string) => {
    setActiveDropdown(itemName)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
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
            <Link
              href="/"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded transition-transform hover:scale-105"
            >
              <Image
                src="/logo-optimized.png"
                alt="Vidhaana AI Legal Assistant Logo"
                width={64}
                height={64}
                priority
                className={`transition-all duration-300 ${
                  isScrolled ? "h-10 w-10 sm:h-12 sm:w-12" : "h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
                }`}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Primary Navigation">
              {navigation.map((item) => (
                <div key={item.name} className="relative" ref={item.dropdown ? dropdownRef : undefined}>
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => handleDropdownHover(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        onClick={(e) => handleDropdownToggle(item.name, e)}
                        className="flex items-center text-black hover:text-gray-600 font-medium transition-all duration-200 border-b-2 border-transparent hover:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded px-2 py-1 cursor-pointer"
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

                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border-2 border-black rounded-lg shadow-xl z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                          <div className="py-2">
                            <Link
                              href={item.href}
                              className="block px-4 py-3 text-sm text-black hover:bg-gray-50 transition-colors border-b border-gray-100"
                              onClick={() => setActiveDropdown(null)}
                            >
                              All {item.name}
                            </Link>
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-3 text-sm text-black hover:bg-gray-50 transition-colors last:rounded-b-lg"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-black hover:text-gray-600 font-medium transition-all duration-200 border-b-2 border-transparent hover:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded px-2 py-1"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                href="/contact"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium"
              >
                Get Started
              </Link>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded transition-colors hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden border-t border-gray-200 py-4 bg-white/95 backdrop-blur-md">
              {navigation.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="block py-3 px-2 text-black hover:text-gray-600 hover:bg-gray-50 font-medium transition-colors rounded flex-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={(e) => handleDropdownToggle(`mobile-${item.name}`, e)}
                        className="p-2 text-black hover:bg-gray-50 rounded"
                        aria-expanded={activeDropdown === `mobile-${item.name}`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === `mobile-${item.name}` ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.dropdown && activeDropdown === `mobile-${item.name}` && (
                    <div className="ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block py-2 px-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors rounded"
                          onClick={() => {
                            setIsMenuOpen(false)
                            setActiveDropdown(null)
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="block mt-4 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          )}
        </div>
      </header>
    </div>
  )
}
