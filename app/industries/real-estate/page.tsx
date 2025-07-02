import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Home,
  FileText,
  Search,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Users,
  TrendingUp,
  DollarSign,
  AlertTriangle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Solutions for Real Estate | Property Law & Transaction AI | Vidhaana",
  description:
    "Specialized AI legal solutions for real estate professionals. Property transaction automation, contract analysis, title search, and real estate compliance management.",
  keywords: [
    "real estate legal AI",
    "property law automation",
    "real estate contract analysis",
    "title search AI",
    "property transaction legal",
    "real estate compliance",
    "property management legal",
    "real estate closing automation",
    "property law technology",
    "real estate legal operations",
  ],
  alternates: {
    canonical: "https://vidhaana.com/industries/real-estate",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Legal Solutions for Real Estate",
  description: "Specialized AI legal solutions for real estate professionals and property management",
  provider: {
    "@type": "Organization",
    name: "Vidhaana",
  },
  areaServed: "Real Estate Industry",
}

export default function RealEstatePage() {
  const useCases = [
    {
      icon: FileText,
      title: "Purchase Agreement Analysis",
      description:
        "AI-powered analysis of purchase agreements, sales contracts, and real estate transactions with automated risk assessment.",
      features: [
        "Contract risk identification",
        "Price analysis and validation",
        "Contingency clause review",
        "Closing timeline optimization",
      ],
      benefits: "85% faster contract review, 40% fewer disputes",
      roi: "350% ROI through faster closings",
    },
    {
      icon: Search,
      title: "Title Search & Due Diligence",
      description:
        "Automated title search and due diligence processes with AI-powered document analysis and risk identification.",
      features: [
        "Automated title search",
        "Lien and encumbrance detection",
        "Chain of title analysis",
        "Due diligence automation",
      ],
      benefits: "70% faster title searches, 95% accuracy improvement",
      roi: "400% ROI in first year",
    },
    {
      icon: Shield,
      title: "Lease Agreement Management",
      description:
        "Comprehensive lease management with AI analysis of lease terms, rent optimization, and tenant compliance monitoring.",
      features: [
        "Lease term optimization",
        "Rent analysis and benchmarking",
        "Tenant compliance tracking",
        "Lease renewal automation",
      ],
      benefits: "90% lease compliance, 60% faster lease processing",
      roi: "300% ROI in 18 months",
    },
    {
      icon: Clock,
      title: "Closing Process Automation",
      description:
        "Streamlined closing processes with automated document preparation, compliance checking, and timeline management.",
      features: [
        "Document preparation automation",
        "Compliance verification",
        "Timeline management",
        "Closing coordination",
      ],
      benefits: "75% faster closings, 90% on-time completion",
      roi: "450% ROI through efficiency gains",
    },
    {
      icon: BarChart3,
      title: "Property Valuation & Analysis",
      description:
        "AI-powered property valuation and market analysis with legal risk assessment and investment guidance.",
      features: [
        "Automated property valuation",
        "Market analysis and trends",
        "Legal risk assessment",
        "Investment opportunity analysis",
      ],
      benefits: "95% valuation accuracy, 80% faster analysis",
      roi: "380% ROI through better decisions",
    },
    {
      icon: Users,
      title: "Regulatory Compliance Management",
      description:
        "Comprehensive compliance management for real estate regulations, zoning laws, and local ordinances.",
      features: [
        "Zoning compliance verification",
        "Building code analysis",
        "Environmental regulation tracking",
        "Local ordinance monitoring",
      ],
      benefits: "100% regulatory compliance, 70% faster approvals",
      roi: "320% ROI through avoided penalties",
    },
  ]

  const propertyTypes = [
    {
      name: "Residential",
      description: "Single-family homes, condos, and residential properties",
      features: ["Purchase agreements", "Title insurance", "Mortgage documentation"],
    },
    {
      name: "Commercial",
      description: "Office buildings, retail spaces, and commercial properties",
      features: ["Lease negotiations", "Due diligence", "Investment analysis"],
    },
    {
      name: "Industrial",
      description: "Warehouses, manufacturing facilities, and industrial properties",
      features: ["Environmental compliance", "Zoning verification", "Lease management"],
    },
    {
      name: "Multi-Family",
      description: "Apartment buildings and multi-unit residential properties",
      features: ["Tenant management", "Rent optimization", "Compliance tracking"],
    },
    {
      name: "Land Development",
      description: "Raw land, development projects, and subdivision planning",
      features: ["Zoning analysis", "Development planning", "Regulatory approval"],
    },
    {
      name: "Investment Properties",
      description: "Rental properties and real estate investment portfolios",
      features: ["ROI analysis", "Portfolio management", "Tax optimization"],
    },
  ]

  const stats = [
    { number: "3,000+", label: "Real Estate Professionals", icon: Home },
    { number: "$1.5M", label: "Average Annual Savings", icon: DollarSign },
    { number: "85%", label: "Faster Closings", icon: Clock },
    { number: "40%", label: "Fewer Disputes", icon: AlertTriangle },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ label: "Industries", href: "/industries" }, { label: "Real Estate" }]}
              className="mb-8"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                  <Home className="w-4 h-4 mr-2" />
                  Real Estate Legal AI
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                  AI Legal Solutions
                  <span className="block">for Real Estate</span>
                  <span className="block">Professionals</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Streamline property transactions with AI-powered contract analysis, title search automation, and
                  comprehensive real estate legal operations designed for agents, brokers, and investors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
                    <Link href="/contact" className="flex items-center">
                      Schedule Demo
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg bg-transparent"
                  >
                    <Link href="#use-cases">Explore Use Cases</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Card className="border-2 border-black shadow-lg">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-black">Real Estate Dashboard</h3>
                        <div className="flex items-center gap-2 text-green-600">
                          <TrendingUp className="w-5 h-5" />
                          <span className="text-sm font-medium">+85% Efficiency</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-black">247</div>
                          <div className="text-sm text-gray-600">Active Transactions</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-black">15</div>
                          <div className="text-sm text-gray-600">Days to Close</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Search className="w-5 h-5 text-black" />
                            <span className="text-sm">Title Search Complete</span>
                          </div>
                          <span className="text-xs text-green-600">70% Faster</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-black" />
                            <span className="text-sm">Contracts Analyzed</span>
                          </div>
                          <span className="text-xs text-green-600">85% Faster</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results in Real Estate</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable impact across real estate agents, brokers, and property management companies
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-4 rounded-2xl bg-white/10 mb-4 group-hover:bg-white/20 transition-colors">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">6 AI-Powered Use Cases for Real Estate</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed specifically for real estate professionals and property management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors h-full">
                  <CardHeader>
                    <div className="inline-flex p-3 rounded-2xl bg-black text-white mb-4">
                      <useCase.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-black">Key Features:</h4>
                      <ul className="space-y-2">
                        {useCase.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-black mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto space-y-3">
                      <div className="bg-gray-100 border-l-4 border-black p-3 rounded-lg">
                        <p className="text-sm font-medium text-black mb-1">Impact:</p>
                        <p className="text-sm text-gray-700">{useCase.benefits}</p>
                      </div>
                      <div className="bg-black text-white p-3 rounded-lg">
                        <p className="text-sm font-medium mb-1">ROI:</p>
                        <p className="text-sm">{useCase.roi}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Property Types Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Property Types Supported</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized AI solutions for all types of real estate properties and transactions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {propertyTypes.map((type, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-black mb-2">{type.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                    <div className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Implementation Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our proven methodology ensures successful AI implementation in real estate operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Real Estate Assessment",
                  description: "Comprehensive analysis of current real estate operations and transaction workflows",
                },
                {
                  step: "2",
                  title: "Custom Configuration",
                  description: "Tailored AI solution setup based on your property types and market focus",
                },
                {
                  step: "3",
                  title: "System Integration",
                  description: "Seamless integration with existing MLS, CRM, and transaction management systems",
                },
                {
                  step: "4",
                  title: "Ongoing Optimization",
                  description: "Continuous optimization and dedicated real estate industry support",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Real Estate Operations?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 3,000+ real estate professionals already closing deals faster with AI-powered legal solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
                <Link href="/contact" className="flex items-center">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
