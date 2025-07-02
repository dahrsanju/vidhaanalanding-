import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Scale,
  FileSearch,
  Clock,
  TrendingUp,
  Users,
  Brain,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Gavel,
  BookOpen,
  DollarSign,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Solutions for Law Firms | Legal Research & Case Management Automation",
  description:
    "Transform your law firm with AI-powered legal research, case management, and client services. Increase billable hours by 50%, reduce research time by 75%, and improve case outcomes with intelligent legal technology.",
  keywords: [
    "law firm AI solutions",
    "legal research automation",
    "case management software",
    "legal practice management",
    "AI legal research",
    "law firm technology",
    "legal billing optimization",
    "client management system",
    "legal document automation",
    "law firm efficiency tools",
  ],
  alternates: {
    canonical: "https://vidhaana.com/industries/law-firms",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Legal Solutions for Law Firms",
  description: "AI-powered legal solutions designed specifically for law firms and legal practices",
  url: "https://vidhaana.com/industries/law-firms",
  provider: {
    "@type": "Organization",
    name: "Vidhaana",
  },
}

export default function LawFirmsPage() {
  const useCases = [
    {
      icon: FileSearch,
      title: "Automated Legal Research",
      description:
        "AI-powered legal research that analyzes case law, statutes, and regulations to provide comprehensive research results in minutes instead of hours.",
      features: [
        "Case law analysis and citation checking",
        "Statute and regulation research",
        "Legal precedent identification",
        "Research memo generation",
      ],
      benefits: "75% faster research, 90% accuracy improvement",
      roi: "300% ROI in first 6 months",
    },
    {
      icon: Gavel,
      title: "Brief & Motion Drafting",
      description:
        "Intelligent document drafting with AI-powered templates, precedent analysis, and argument structuring for compelling legal briefs.",
      features: [
        "AI-powered brief templates",
        "Argument structure optimization",
        "Precedent integration",
        "Citation formatting automation",
      ],
      benefits: "60% faster drafting, improved case outcomes",
      roi: "250% ROI in 12 months",
    },
    {
      icon: Users,
      title: "Client Intake & Management",
      description:
        "Streamlined client onboarding and management with automated intake forms, conflict checking, and client communication tools.",
      features: [
        "Automated intake forms",
        "Conflict of interest checking",
        "Client communication automation",
        "Matter management integration",
      ],
      benefits: "50% faster client onboarding, 95% satisfaction rate",
      roi: "200% ROI in 18 months",
    },
    {
      icon: DollarSign,
      title: "Billing & Time Tracking Optimization",
      description:
        "AI-powered time tracking and billing optimization that maximizes billable hours and improves collection rates.",
      features: [
        "Automated time entry suggestions",
        "Billing optimization analysis",
        "Collection rate improvement",
        "Revenue forecasting",
      ],
      benefits: "40% increase in billable hours, 30% better collections",
      roi: "400% ROI in 9 months",
    },
    {
      icon: BookOpen,
      title: "Case Management & Analytics",
      description:
        "Comprehensive case management with predictive analytics for case outcomes, resource allocation, and strategic planning.",
      features: [
        "Case outcome prediction",
        "Resource allocation optimization",
        "Performance analytics",
        "Strategic planning insights",
      ],
      benefits: "35% better case outcomes, 45% efficiency improvement",
      roi: "280% ROI in 15 months",
    },
    {
      icon: Brain,
      title: "Legal Knowledge Management",
      description:
        "Intelligent knowledge base that captures firm expertise and provides instant access to precedents, templates, and best practices.",
      features: [
        "Expertise capture and organization",
        "Precedent library management",
        "Template automation",
        "Best practice sharing",
      ],
      benefits: "70% faster knowledge access, 60% better consistency",
      roi: "220% ROI in 20 months",
    },
  ]

  const practiceAreas = [
    {
      area: "Corporate Law",
      description: "M&A due diligence, contract analysis, and corporate governance automation",
      specializations: ["M&A Due Diligence", "Contract Review", "Corporate Compliance", "Securities Law"],
      benefits: "80% faster due diligence, 70% cost reduction",
    },
    {
      area: "Litigation",
      description: "Discovery automation, case strategy, and outcome prediction for litigation matters",
      specializations: ["Discovery Management", "Case Strategy", "Document Review", "Settlement Analysis"],
      benefits: "65% faster discovery, 40% better outcomes",
    },
    {
      area: "Real Estate Law",
      description: "Property transaction automation, title analysis, and regulatory compliance",
      specializations: ["Transaction Processing", "Title Analysis", "Zoning Compliance", "Lease Review"],
      benefits: "75% faster closings, 50% fewer disputes",
    },
    {
      area: "Employment Law",
      description: "Employment contract analysis, compliance monitoring, and dispute resolution",
      specializations: ["Contract Analysis", "Compliance Monitoring", "Dispute Resolution", "Policy Review"],
      benefits: "85% compliance rate, 60% faster resolution",
    },
    {
      area: "Intellectual Property",
      description: "Patent analysis, trademark monitoring, and IP portfolio management",
      specializations: ["Patent Analysis", "Trademark Monitoring", "Portfolio Management", "Infringement Detection"],
      benefits: "90% detection accuracy, 70% faster analysis",
    },
    {
      area: "Family Law",
      description: "Document automation, case management, and client communication for family matters",
      specializations: ["Document Automation", "Case Management", "Client Communication", "Settlement Mediation"],
      benefits: "60% faster processing, 95% client satisfaction",
    },
  ]

  const firmSizes = [
    {
      size: "Solo Practitioners",
      description: "Affordable AI solutions for individual attorneys and small practices",
      features: ["Basic legal research", "Document templates", "Client management", "Time tracking"],
      pricing: "Starting at $99/month",
    },
    {
      size: "Small Firms (2-10 attorneys)",
      description: "Collaborative tools and shared resources for growing practices",
      features: ["Team collaboration", "Shared knowledge base", "Advanced research", "Billing integration"],
      pricing: "Starting at $299/month",
    },
    {
      size: "Mid-Size Firms (11-50 attorneys)",
      description: "Comprehensive practice management with advanced analytics",
      features: ["Advanced analytics", "Custom workflows", "API integrations", "Dedicated support"],
      pricing: "Starting at $999/month",
    },
    {
      size: "Large Firms (50+ attorneys)",
      description: "Enterprise-grade solutions with custom implementation",
      features: ["Enterprise security", "Custom development", "Advanced integrations", "24/7 support"],
      pricing: "Custom pricing",
    },
  ]

  const stats = [
    { number: "2,500+", label: "Law Firms Served", icon: Scale },
    { number: "$1.8M", label: "Average Annual Savings", icon: TrendingUp },
    { number: "75%", label: "Faster Legal Research", icon: Clock },
    { number: "50%", label: "Increase in Billable Hours", icon: BarChart3 },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-28 pb-16 monochrome-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ label: "Industries", href: "/industries" }, { label: "Law Firms" }]}
              className="mb-8"
            />

            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                <Scale className="w-4 h-4 mr-2" />
                Law Firm Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                AI-Powered Legal Practice
                <span className="block text-black">Enhancement</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Transform your law firm with intelligent legal research, case management, and client services. Increase
                billable hours by 50%, reduce research time by 75%, and improve case outcomes with cutting-edge AI
                technology.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results for Law Firms</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable improvements in efficiency, profitability, and client satisfaction
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">AI-Powered Solutions for Law Firms</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI tools designed to enhance every aspect of legal practice management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="monochrome-card h-full">
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
                      <div className="monochrome-accent p-3 rounded-lg">
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

        {/* Practice Areas Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Practice Area Specializations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored AI solutions for different practice areas and legal specializations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area, index) => (
                <Card key={index} className="monochrome-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-black">{area.area}</CardTitle>
                    <p className="text-gray-600">{area.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-black">Specializations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.specializations.map((spec, specIndex) => (
                          <span
                            key={specIndex}
                            className="px-3 py-1 bg-black text-white text-xs rounded-full font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="monochrome-accent p-3 rounded-lg">
                      <p className="text-sm font-medium text-black mb-1">Proven Results:</p>
                      <p className="text-sm text-gray-700">{area.benefits}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Firm Size Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Solutions for Every Firm Size</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Scalable AI solutions designed for law firms of all sizes and practice types
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {firmSizes.map((firm, index) => (
                <Card key={index} className="monochrome-card">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-black">{firm.size}</CardTitle>
                    <p className="text-gray-600">{firm.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-black">Included Features:</h4>
                      <ul className="space-y-2">
                        {firm.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-black mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-black text-white p-4 rounded-lg text-center">
                      <p className="text-lg font-bold">{firm.pricing}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Law Firm?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 2,500+ law firms already improving efficiency and profitability with AI-powered legal solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
                <Link href="/contact" className="flex items-center">
                  Schedule Consultation
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
