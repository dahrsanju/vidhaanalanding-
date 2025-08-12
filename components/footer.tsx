import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.svg"
                alt="Vidhaana Logo"
                width={120}
                height={40}
                className="h-8 w-auto filter brightness-0 invert"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <p className="text-white text-sm max-w-md mb-4">
              Professional AI-powered legal assistance providing accessible and reliable legal guidance for individuals
              and businesses across all industries.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-white">
                <Mail className="w-4 h-4" />
                <span>support@vidhaana.com</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions" className="text-white hover:text-gray-200 transition-colors">
                  All Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/compliance-automation"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  Compliance Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/contract-management"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  Contract Management
                </Link>
              </li>
              <li>
                <Link href="/features/document-analysis" className="text-white hover:text-gray-200 transition-colors">
                  Document Analysis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/industries" className="text-white hover:text-gray-200 transition-colors">
                  All Industries
                </Link>
              </li>
              <li>
                <Link href="/industries/corporate-legal" className="text-white hover:text-gray-200 transition-colors">
                  Corporate Legal
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-white hover:text-gray-200 transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-gray-200 transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-white hover:text-gray-200 transition-colors">
                  All Features
                </Link>
              </li>
              <li>
                <Link href="/features/document-analysis" className="text-white hover:text-gray-200 transition-colors">
                  Document Analysis
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white hover:text-gray-200 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-gray-200 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white hover:text-gray-200 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-gray-200 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white hover:text-gray-200 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white hover:text-gray-200 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">© {new Date().getFullYear()} Vidhaana. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <div className="flex items-center gap-4 text-xs text-white">
              <span>SOC 2 Certified</span>
              <span>GDPR Compliant</span>
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
