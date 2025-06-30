import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vidhaana.com",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href && { item: `https://vidhaana.com${item.href}` }),
      })),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav
        aria-label="Breadcrumb navigation"
        className={`flex items-center space-x-2 text-sm text-gray-600 ${className}`}
      >
        <Link href="/" className="flex items-center hover:text-black transition-colors" aria-label="Go to homepage">
          <Home className="w-4 h-4" />
          <span className="sr-only">Home</span>
        </Link>

        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-black transition-colors"
                aria-current={index === items.length - 1 ? "page" : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-black font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}
