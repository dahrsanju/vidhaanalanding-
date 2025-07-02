import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Scale,
  Search,
  FileText,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Brain,
  Target,
  TrendingUp,
  DollarSign,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Solutions for Law Firms | Legal Practice Management AI | Vidhaana",
  description:
    "Transform your law firm with AI-powered legal research, case management, document automation, and client service tools. Increase billable hours by 40% and reduce costs by 60%.",
  keywords: [
    "law firm AI solutions",
    "legal practice management",
    "AI legal research",
    "law firm automation",
    "legal case management AI",
    "attorney productivity tools",
    "legal document automation",
    "law firm efficiency",
    "legal billing optimization",
    "AI legal assistant for lawyers",
  ],
  alternates: {
    canonical: "https://vidhaana.com/industries/law-firms",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Legal Solutions for Law Firms",
  description: "AI-powered solutions to enhance legal practice efficiency and client service for law firms",
  provider: {
    "@type": "Organization",
    name: "Vidhaana",
  },
  areaServed: "Legal Services Industry",
}

export default function LawFirmsPage() {
  const useCases = [
    {
      icon: Search,
      title: "AI-Powered Legal Research",
      description:
        "Revolutionary legal research capabilities that analyze case law, statutes, and regulations with unprecedented speed and accuracy.",
      features: [
        "Natural language case search",
        "Precedent identification",
        "Citation analysis",
        "Research memo generation",
      ],
      benefits: "75% faster legal research, 90% accuracy improvement",
      roi: "400% ROI through time savings",
    },
    {
      icon: FileText,
      title: "Document Automation & Drafting",
      description:
        "Intelligent document creation and review with AI-powered templates, clause libraries, and automated formatting.",
      features: [
        "Smart document templates",
        "Automated clause insertion",
        "Contract review and analysis",
        "Document version control",
      ],
      benefits: "80% faster document creation, 95% error reduction",
      roi: "350% ROI in first year",
    },
    {
      icon: Users,
      title: "Case Management & Analytics",
      description:
        "Comprehensive case management with AI insights, outcome prediction, and performance analytics for better case strategy.",
      features: ["Case outcome prediction", "Timeline management", "Evidence organization", "Performance analytics"],
      benefits: "60% better case outcomes, 50% improved efficiency",
      roi: "450% ROI through better results",
    },
    {
      icon: Clock,
      title: "Time Tracking & Billing Optimization",
      description:
        "Intelligent time tracking and billing optimization with automated time entry and billing code suggestions.",
      features: [
        "Automated time tracking",
        "Billing code optimization",
        "Revenue analytics",
        "Client billing automation",
      ],
      benefits: "40% increase in billable hours, 30% revenue growth",
      roi: "500% ROI through increased revenue",
    },
    {
      icon: Brain,
      title: "Client Communication & Service",
      description:
        "Enhanced client service with AI-powered communication tools, status updates, and intelligent client portals.",
      features: [
        "Automated client updates",
        "Intelligent client portals",
        "Communication scheduling",
        "Client satisfaction tracking",
      ],
      benefits: "95% client satisfaction, 70% faster response times",
      roi: "300% ROI through client retention",
    },
    {
      icon: Target,
      title: "Practice Area Specialization",
      description:
        "Specialized AI tools for different practice areas including litigation, corporate law, family law, and more.",
      features: [
        "Practice-specific workflows",
        "Specialized legal databases",
        "Custom AI models",
        "Industry-specific templates",
      ],
      benefits: "85% practice efficiency improvement, specialized expertise",
      roi: "380% ROI through specialization",
    },
  ]

  const practiceAreas = [
    {
      name: "Litigation",
      description: "AI-powered litigation support and case management",
      features: ["Discovery automation", "Case strategy analysis", "Evidence management"],
    },
    {
      name: "Corporate Law",
      description: "Corporate legal operations and transaction support",
      features: ["M&A due diligence", "Contract management", "Compliance monitoring"],
    },
    {
      name: "Family Law",
      description: "Family law practice management and client service",
      features: ["Case documentation", "Settlement analysis", "Client communication"],
    },
    {
      name: "Real Estate",
      description: "Real estate transaction and property law support",
      features: ["Title analysis", "Contract review", "Closing automation"],
    },
    {
      name: "Employment Law",
      description: "Employment law compliance and case management",
      features: ["Policy analysis", "Compliance tracking", "Case documentation"],
    },
    {
      name: "Intellectual Property",
      description: "IP portfolio management and prosecution support",
      features: ["Patent analysis", "Trademark monitoring", "IP portfolio tracking"],
    },
  ]

  const stats = [
    { number: "2,500+", label: "Law Firms", icon: Scale },
    { number: "$1.8M", label: "Average Annual Savings", icon: DollarSign },
    { number: "40%", label: "Increase in Billable Hours", icon: Clock },
    { number: "75%", label: "Faster Legal Research", icon: Search },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ label: "Industries", href: "/industries" }, { label: "Law Firms" }]}
              className="mb-8"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                  <Scale className="w-4 h-4 mr-2" />
                  Law Firm AI Solutions
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                  AI-Powered
                  <span className="block">Legal Practice</span>
                  <span className="block">Management</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform your law firm with AI-powered legal research, case management, document automation, and
                  client service tools. Increase billable hours by 40% while reducing operational costs.
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
                        <h3 className="text-lg font-semibold text-black">Law Firm Dashboard</h3>
                        <div className="flex items-center gap-2 text-green-600">
                          <TrendingUp className="w-5 h-5" />
                          <span className="text-sm font-medium">+40% Efficiency</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-black">247</div>
                          <div className="text-sm text-gray-600">Active Cases</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-black">1,847</div>
                          <div className="text-sm text-gray-600">Billable Hours</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Search className="w-5 h-5 text-black" />
                            <span className="text-sm">Research Completed</span>
                          </div>
                          <span className="text-xs text-green-600">75% Faster</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-black" />
                            <span className="text-sm">Documents Generated</span>
                          </div>
                          <span className="text-xs text-green-600">80% Faster</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results for Law Firms</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable impact across law firms of all sizes and practice areas
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">6 AI-Powered Use Cases for Law Firms</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed specifically for legal practice management and client service
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

        {/* Practice Areas Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Practice Area Specializations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized AI solutions tailored for different legal practice areas and specializations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceAreas.map((area, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-black mb-2">{area.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{area.description}</p>
                    <div className="space-y-2">
                      {area.features.map((feature, idx) => (
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
                Our proven methodology ensures successful AI implementation in law firms of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Practice Assessment",
                  description: "Comprehensive analysis of current legal practice operations and workflows",
                },
                {
                  step: "2",
                  title: "Custom Configuration",
                  description: "Tailored AI solution setup based on your practice areas and client needs",
                },
                {
                  step: "3",
                  title: "Team Training",
                  description: "Comprehensive training for attorneys and staff on AI tools and workflows",
                },
                {
                  step: "4",
                  title: "Ongoing Support",
                  description: "Continuous optimization, performance monitoring, and dedicated legal support",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Law Firm?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 2,500+ law firms already increasing efficiency and profitability with AI-powered legal solutions.
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
