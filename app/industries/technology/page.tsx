import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Laptop, Shield, FileText, Database, Lock, CheckCircle, ArrowRight, BarChart3, Globe, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Solutions for Technology Companies | Tech Legal Compliance AI | Vidhaana",
  description:
    "Specialized AI legal solutions for technology companies. Data privacy compliance, IP management, software licensing, and tech contract automation for startups and enterprises.",
  keywords: [
    "technology legal AI",
    "tech company compliance",
    "data privacy automation",
    "IP management AI",
    "software licensing legal",
    "tech contract management",
    "GDPR compliance automation",
    "technology legal operations",
    "startup legal AI",
    "enterprise legal technology",
  ],
  alternates: {
    canonical: "https://vidhaana.com/industries/technology",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Legal Solutions for Technology Companies",
  description: "Specialized AI legal solutions for technology companies and startups",
  provider: {
    "@type": "Organization",
    name: "Vidhaana",
  },
  areaServed: "Technology Industry",
}

export default function TechnologyPage() {
  const useCases = [
    {
      icon: Shield,
      title: "Data Privacy & GDPR Compliance",
      description:
        "Comprehensive data privacy management ensuring compliance with GDPR, CCPA, and global privacy regulations for tech companies.",
      features: [
        "Automated privacy impact assessments",
        "Data mapping and classification",
        "Consent management automation",
        "Breach notification systems",
      ],
      benefits: "100% privacy compliance, 90% faster privacy assessments",
      roi: "500% ROI through avoided penalties",
    },
    {
      icon: Lock,
      title: "Intellectual Property Management",
      description:
        "AI-powered IP portfolio management including patent analysis, trademark monitoring, and trade secret protection.",
      features: [
        "Patent landscape analysis",
        "Trademark monitoring",
        "IP portfolio optimization",
        "Infringement detection",
      ],
      benefits: "80% faster IP analysis, 95% infringement detection accuracy",
      roi: "400% ROI through IP protection",
    },
    {
      icon: FileText,
      title: "Software Licensing & Contracts",
      description:
        "Specialized contract management for software licenses, SaaS agreements, and technology partnerships.",
      features: [
        "License compliance tracking",
        "SaaS agreement analysis",
        "API terms management",
        "Partnership contract optimization",
      ],
      benefits: "85% faster contract processing, 100% license compliance",
      roi: "350% ROI in 18 months",
    },
    {
      icon: Database,
      title: "Regulatory Compliance Automation",
      description:
        "Automated compliance monitoring for technology regulations including SOC 2, ISO 27001, and industry standards.",
      features: [
        "SOC 2 compliance monitoring",
        "ISO 27001 certification support",
        "Security audit automation",
        "Compliance reporting",
      ],
      benefits: "99% regulatory compliance, 70% faster audits",
      roi: "450% ROI through streamlined compliance",
    },
    {
      icon: Globe,
      title: "International Expansion Legal Support",
      description:
        "Legal guidance for international expansion including cross-border data transfers and local compliance requirements.",
      features: [
        "Cross-border data transfer analysis",
        "Local compliance mapping",
        "International contract templates",
        "Regulatory change monitoring",
      ],
      benefits: "75% faster international expansion, 100% compliance",
      roi: "380% ROI through accelerated growth",
    },
    {
      icon: Eye,
      title: "Employment & HR Legal Compliance",
      description:
        "Specialized employment law support for tech companies including remote work policies and equity compensation.",
      features: [
        "Remote work policy compliance",
        "Equity compensation analysis",
        "Employment contract automation",
        "HR policy management",
      ],
      benefits: "90% HR compliance, 60% faster policy updates",
      roi: "300% ROI through reduced HR legal costs",
    },
  ]

  const techRegulations = [
    {
      name: "GDPR",
      description: "General Data Protection Regulation",
      coverage: "EU data privacy and protection requirements",
    },
    {
      name: "CCPA",
      description: "California Consumer Privacy Act",
      coverage: "California data privacy and consumer rights",
    },
    {
      name: "SOC 2",
      description: "Service Organization Control 2",
      coverage: "Security, availability, and confidentiality controls",
    },
    {
      name: "ISO 27001",
      description: "Information Security Management",
      coverage: "Information security management systems",
    },
    {
      name: "COPPA",
      description: "Children's Online Privacy Protection Act",
      coverage: "Children's online privacy protection",
    },
    {
      name: "DMCA",
      description: "Digital Millennium Copyright Act",
      coverage: "Copyright protection for digital content",
    },
  ]

  const stats = [
    { number: "3,000+", label: "Tech Companies", icon: Laptop },
    { number: "$2.1M", label: "Average Annual Savings", icon: BarChart3 },
    { number: "100%", label: "Privacy Compliance", icon: Shield },
    { number: "80%", label: "Faster IP Analysis", icon: Lock },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ label: "Industries", href: "/industries" }, { label: "Technology" }]}
              className="mb-8"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                  <Laptop className="w-4 h-4 mr-2" />
                  Technology Legal AI
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                  AI Legal Solutions
                  <span className="block">for Technology</span>
                  <span className="block">Companies</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Navigate complex technology regulations with AI-powered data privacy compliance, IP management, and
                  specialized legal operations designed for startups and enterprises.
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
                        <h3 className="text-lg font-semibold text-black">Tech Compliance Dashboard</h3>
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="w-5 h-5" />
                          <span className="text-sm font-medium">100% Compliant</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-black">847</div>
                          <div className="text-sm text-gray-600">Data Subjects</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-black">0</div>
                          <div className="text-sm text-gray-600">Privacy Breaches</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-black" />
                            <span className="text-sm">GDPR Compliance</span>
                          </div>
                          <span className="text-xs text-green-600">Current</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Lock className="w-5 h-5 text-black" />
                            <span className="text-sm">IP Portfolio</span>
                          </div>
                          <span className="text-xs text-green-600">Protected</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results in Technology</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable impact across startups, scale-ups, and enterprise technology companies
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                6 AI-Powered Use Cases for Technology Companies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed specifically for technology companies and digital businesses
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

        {/* Regulations Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Technology Regulations Covered</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive coverage of all major technology regulations and compliance requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techRegulations.map((regulation, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-black mb-2">{regulation.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{regulation.description}</p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs font-medium text-black mb-1">Coverage:</p>
                      <p className="text-xs text-gray-700">{regulation.coverage}</p>
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
                Our proven methodology ensures successful AI implementation in technology companies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Technology Assessment",
                  description: "Comprehensive analysis of current technology stack and compliance requirements",
                },
                {
                  step: "2",
                  title: "Privacy & Security Setup",
                  description: "Custom configuration for data privacy and security compliance",
                },
                {
                  step: "3",
                  title: "Integration & Testing",
                  description: "Secure integration with existing tech infrastructure and thorough testing",
                },
                {
                  step: "4",
                  title: "Scaling Support",
                  description: "Ongoing optimization and support for rapid scaling and growth",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Tech Legal Operations?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 3,000+ technology companies already ensuring perfect compliance with AI-powered legal solutions.
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
