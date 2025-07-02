import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@/components/analytics"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://vidhaana.com"),
  title: {
    default: "Vidhaana - AI-Powered Legal Assistant | 24/7 Legal Guidance & Expert Consultation",
    template: "%s | Vidhaana - AI Legal Assistant",
  },
  description:
    "Get professional AI-powered legal assistance 24/7. Expert guidance for contracts, compliance, litigation support, and legal research. Reduce legal costs by 70% with our advanced AI technology. Trusted by 10,000+ businesses worldwide.",
  keywords: [
    "AI legal assistant",
    "legal AI technology",
    "contract analysis AI",
    "legal compliance software",
    "document review automation",
    "legal research AI",
    "artificial intelligence law",
    "legal technology platform",
    "automated legal services",
    "legal consultation AI",
    "contract management software",
    "legal document analysis",
    "compliance monitoring AI",
    "legal guidance platform",
    "law firm technology",
    "legal AI solutions",
    "intelligent legal assistant",
    "legal process automation",
    "AI-powered legal advice",
    "legal technology innovation",
  ],
  authors: [{ name: "Vidhaana Legal AI", url: "https://vidhaana.com" }],
  creator: "Vidhaana",
  publisher: "Vidhaana",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vidhaana.com",
    siteName: "Vidhaana - AI Legal Assistant",
    title: "Vidhaana - AI-Powered Legal Assistant | 24/7 Legal Guidance",
    description:
      "Professional AI-powered legal assistance available 24/7. Expert guidance for contracts, compliance, and legal research. Reduce legal costs by 70%. Trusted by 10,000+ businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vidhaana AI Legal Assistant - Professional Legal Technology Platform",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidhaana - AI-Powered Legal Assistant | Reduce Legal Costs by 70%",
    description:
      "Professional AI-powered legal assistance available 24/7. Expert contract analysis, compliance monitoring, and legal research. Trusted by 10,000+ businesses worldwide.",
    images: ["/twitter-image.jpg"],
    creator: "@vidhaana",
    site: "@vidhaana",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  alternates: {
    canonical: "https://vidhaana.com",
    languages: {
      "en-US": "https://vidhaana.com",
    },
  },
  category: "Legal Technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vidhaana.com/#organization",
      name: "Vidhaana",
      alternateName: "Vidhaana AI Legal Assistant",
      description: "AI-powered legal assistant providing 24/7 professional legal guidance and consultation services.",
      url: "https://vidhaana.com",
      logo: {
        "@type": "ImageObject",
        url: "https://vidhaana.com/logo.svg",
        width: 180,
        height: 60,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-555-123-4567",
          contactType: "customer service",
          availableLanguage: ["English"],
          areaServed: "Worldwide",
          contactOption: "TollFree",
        },
        {
          "@type": "ContactPoint",
          email: "support@vidhaana.com",
          contactType: "customer support",
          availableLanguage: ["English"],
          areaServed: "Worldwide",
        },
      ],
      sameAs: [
        "https://twitter.com/vidhaana",
        "https://linkedin.com/company/vidhaana",
        "https://facebook.com/vidhaana",
      ],
      foundingDate: "2023",
      numberOfEmployees: "50-100",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
        addressRegion: "CA",
        addressLocality: "San Francisco",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://vidhaana.com/#website",
      url: "https://vidhaana.com",
      name: "Vidhaana - AI Legal Assistant",
      description: "Professional AI-powered legal assistance platform",
      publisher: {
        "@id": "https://vidhaana.com/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://vidhaana.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://vidhaana.com/#service",
      name: "AI Legal Assistant",
      description: "Professional AI-powered legal assistance and consultation services",
      provider: {
        "@id": "https://vidhaana.com/#organization",
      },
      areaServed: "Worldwide",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://vidhaana.com",
        availableLanguage: "English",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Legal AI Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Contract Analysis",
              description: "AI-powered contract review and analysis with risk assessment",
            },
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Legal Research",
              description: "Comprehensive legal research and case law analysis",
            },
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Compliance Monitoring",
              description: "Automated regulatory compliance monitoring and reporting",
            },
            availability: "https://schema.org/InStock",
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1247",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href="https://vidhaana.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Vidhaana" />
        <meta name="application-name" content="Vidhaana" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Preload critical resources */}
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} bg-white text-black antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className="min-h-screen" role="main" id="main-content">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  )
}
