import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Users, Building, Home, Briefcase, Shield, Sparkles, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Services | Contract Analysis, Compliance & Legal Research | 24/7 Support",
  description:
    "Comprehensive AI-powered legal services including document review, contract analysis, compliance monitoring, family law, business law, and litigation support. Available 24/7 with expert guidance and 95% accuracy.",
  keywords: [
    "AI legal services",
    "contract analysis AI",
    "legal document review",
    "compliance monitoring",
    "family law assistance",
    "business law support",
    "legal research automation",
    "litigation support AI",
    "employment law guidance",
    "real estate law AI",
    "AI legal consultation",
    "automated legal services",
    "legal technology services",
    "AI contract review",
    "legal compliance software",
  ],
  openGraph: {
    title: "AI Legal Services | Contract Analysis, Compliance & Legal Research",
    description:
      "Comprehensive AI-powered legal services across multiple practice areas. Get expert legal assistance 24/7.",
    url: "https://vidhaana.com/services",
  },
  alternates: {
    canonical: "https://vidhaana.com/services",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Legal Services",
  description: "Comprehensive AI-powered legal assistance across multiple practice areas",
  url: "https://vidhaana.com/services",
  provider: {
    "@type": "Organization",
    name: "Vidhaana",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legal Services Catalog",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Document Review & Analysis",
          description: "AI-powered analysis of contracts, agreements, and legal documents",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Family Law Assistance",
          description: "Guidance on family-related legal matters including divorce and custody",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Law Support",
          description: "Comprehensive business legal assistance for startups and companies",
        },
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
}

export default function ServicesPage() {
  const services = [
    {
      icon: FileText,
      title: "Document Review & Analysis",
      description:
        "AI-powered analysis of contracts, agreements, and legal documents with detailed insights and recommendations.",
      features: ["Contract analysis", "Risk assessment", "Clause recommendations", "Compliance checking"],
    },
    {
      icon: Users,
      title: "Family Law Assistance",
      description: "Guidance on family-related legal matters including divorce, custody, and domestic relations.",
      features: ["Divorce proceedings", "Child custody", "Adoption guidance", "Domestic relations"],
    },
    {
      icon: Building,
      title: "Business Law Support",
      description: "Comprehensive business legal assistance for startups and established companies.",
      features: ["Business formation", "Employment law", "Intellectual property", "Commercial contracts"],
    },
    {
      icon: Home,
      title: "Real Estate Law",
      description: "Expert guidance on property transactions, landlord-tenant issues, and real estate disputes.",
      features: ["Property transactions", "Lease agreements", "Zoning issues", "Property disputes"],
    },
    {
      icon: Briefcase,
      title: "Employment Law",
      description: "Assistance with workplace issues, employment contracts, and labor law matters.",
      features: ["Employment contracts", "Workplace disputes", "Discrimination issues", "Wage and hour law"],
    },
    {
      icon: Shield,
      title: "Criminal Law Guidance",
      description: "Initial guidance and information about criminal law matters and procedures.",
      features: ["Legal procedures", "Rights information", "Court processes", "Defense strategies"],
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-white pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Professional Legal Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                Comprehensive AI
                <span className="block text-black">Legal Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Professional AI-powered legal assistance across multiple practice areas, available 24/7 with expert
                guidance and comprehensive support
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader>
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-black text-white mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-black mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
                How Our AI
                <span className="block text-black">Legal Services Work</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Getting professional legal assistance has never been easier or more accessible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Describe Your Legal Issue",
                  description: "Tell us about your legal question or upload documents for comprehensive analysis",
                },
                {
                  step: "2",
                  title: "AI Analysis & Research",
                  description: "Our AI analyzes your case using comprehensive legal databases and case law",
                },
                {
                  step: "3",
                  title: "Get Expert Guidance",
                  description: "Receive detailed legal guidance and actionable next steps recommendations",
                },
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results Across All Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Consistent excellence in AI-powered legal assistance
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "95%", label: "Accuracy Rate" },
                { number: "70%", label: "Cost Reduction" },
                { number: "24/7", label: "Availability" },
                { number: "1,247+", label: "Happy Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Ready to Get
              <span className="block text-black">Professional Legal Assistance?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Contact us today to discuss your legal needs and see how our AI can provide expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg h-auto">
                <Link href="/contact" className="flex items-center">
                  Get Legal Assistance Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg h-auto bg-transparent"
              >
                <Link href="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
