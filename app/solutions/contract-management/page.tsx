import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  FileText,
  Search,
  Shield,
  Clock,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Database,
  Eye,
  Calendar,
  Bell,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Contract Management | Intelligent Contract Lifecycle Management | Vidhaana",
  description:
    "Streamline contract lifecycle management with AI-powered analysis, automated workflows, and intelligent risk assessment. Reduce contract processing time by 80% and improve compliance by 95%.",
  keywords: [
    "contract management software",
    "AI contract analysis",
    "contract lifecycle management",
    "automated contract review",
    "contract intelligence",
    "legal contract management",
    "contract automation",
    "contract risk assessment",
    "contract compliance",
    "contract management platform",
  ],
  alternates: {
    canonical: "https://vidhaana.com/solutions/contract-management",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Contract Management",
  description: "Intelligent contract lifecycle management with AI-powered analysis and automation",
  provider: {
    "@type": "Organization",
    name: "Vidhaana",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Contract Management Features",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Contract Analysis",
          description: "Automated contract review and risk assessment",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Contract Lifecycle Management",
          description: "End-to-end contract management from creation to renewal",
        },
      },
    ],
  },
}

export default function ContractManagementPage() {
  const coreFeatures = [
    {
      icon: Search,
      title: "AI-Powered Contract Analysis",
      description:
        "Advanced AI algorithms analyze contracts for risks, obligations, and opportunities with 99.5% accuracy, identifying critical clauses and potential issues instantly.",
      highlights: ["Risk identification", "Clause extraction", "Obligation tracking", "Compliance verification"],
    },
    {
      icon: FileText,
      title: "Automated Contract Creation",
      description:
        "Generate contracts using intelligent templates and AI-powered clause recommendations based on your specific requirements and industry standards.",
      highlights: ["Smart templates", "Clause library", "Auto-population", "Version control"],
    },
    {
      icon: Clock,
      title: "Lifecycle Management",
      description:
        "Manage the entire contract lifecycle from creation to renewal with automated workflows, milestone tracking, and intelligent notifications.",
      highlights: ["Workflow automation", "Milestone tracking", "Renewal alerts", "Performance monitoring"],
    },
    {
      icon: Shield,
      title: "Risk Assessment & Mitigation",
      description:
        "Proactively identify and assess contract risks with AI-powered scoring and receive actionable recommendations for risk mitigation.",
      highlights: ["Risk scoring", "Impact analysis", "Mitigation strategies", "Compliance monitoring"],
    },
    {
      icon: Users,
      title: "Collaboration & Approval",
      description:
        "Streamline contract collaboration with role-based access, approval workflows, and real-time commenting and negotiation tracking.",
      highlights: ["Role-based access", "Approval workflows", "Real-time collaboration", "Negotiation tracking"],
    },
    {
      icon: BarChart3,
      title: "Contract Analytics & Reporting",
      description:
        "Gain insights into contract performance, compliance status, and portfolio analytics with comprehensive dashboards and custom reports.",
      highlights: ["Performance dashboards", "Compliance reporting", "Portfolio analytics", "Custom reports"],
    },
  ]

  const contractTypes = [
    {
      name: "Sales Contracts",
      description: "Purchase agreements, service contracts, and sales terms",
      features: ["Revenue recognition", "Payment terms", "Delivery obligations"],
    },
    {
      name: "Employment Agreements",
      description: "Employment contracts, NDAs, and compensation agreements",
      features: ["Compliance tracking", "Benefit management", "Performance clauses"],
    },
    {
      name: "Vendor Contracts",
      description: "Supplier agreements, service level agreements, and procurement contracts",
      features: ["SLA monitoring", "Performance metrics", "Cost optimization"],
    },
    {
      name: "Partnership Agreements",
      description: "Joint ventures, strategic partnerships, and collaboration agreements",
      features: ["Revenue sharing", "IP protection", "Governance structures"],
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "80% Faster Processing",
      description: "Reduce contract processing time from weeks to hours with AI automation.",
    },
    {
      icon: Target,
      title: "95% Compliance Rate",
      description: "Achieve superior compliance with automated monitoring and alerts.",
    },
    {
      icon: Zap,
      title: "60% Cost Reduction",
      description: "Lower contract management costs through intelligent automation.",
    },
    {
      icon: Database,
      title: "100% Visibility",
      description: "Complete visibility into your contract portfolio and obligations.",
    },
  ]

  const workflowSteps = [
    {
      step: "01",
      title: "Contract Intake",
      description: "Upload or create contracts with AI-powered data extraction and categorization.",
      icon: FileText,
    },
    {
      step: "02",
      title: "AI Analysis",
      description: "Automated analysis identifies risks, obligations, and key terms instantly.",
      icon: Search,
    },
    {
      step: "03",
      title: "Review & Approval",
      description: "Streamlined review process with intelligent routing and approval workflows.",
      icon: CheckCircle,
    },
    {
      step: "04",
      title: "Execution & Monitoring",
      description: "Track performance, monitor compliance, and manage renewals automatically.",
      icon: Eye,
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ label: "Solutions", href: "/solutions" }, { label: "Contract Management" }]}
              className="mb-8"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                  <FileText className="w-4 h-4 mr-2" />
                  Contract Management
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                  Intelligent
                  <span className="block">Contract</span>
                  <span className="block">Lifecycle</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Streamline contract management with AI-powered analysis, automated workflows, and intelligent risk
                  assessment. Reduce processing time by 80% and improve compliance by 95%.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
                    <Link href="/contact" className="flex items-center">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg bg-transparent"
                  >
                    <Link href="#features">Explore Features</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Card className="border-2 border-black shadow-lg">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-black">Contract Dashboard</h3>
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="w-5 h-5" />
                          <span className="text-sm font-medium">All Current</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-black">247</div>
                          <div className="text-sm text-gray-600">Active Contracts</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-black">12</div>
                          <div className="text-sm text-gray-600">Expiring Soon</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-black" />
                            <span className="text-sm">Vendor Contract Review</span>
                          </div>
                          <span className="text-xs text-gray-600">Due Today</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-black" />
                            <span className="text-sm">Partnership Renewal</span>
                          </div>
                          <span className="text-xs text-gray-600">30 days</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section id="features" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Complete Contract Management Suite</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered platform provides comprehensive contract management capabilities from creation to renewal
                and everything in between.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-black text-white rounded-lg">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl font-bold text-black">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contract Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Support for All Contract Types</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform handles diverse contract types with specialized features and industry-specific templates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contractTypes.map((type, index) => (
                <Card key={index} className="border-2 border-black">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-black">{type.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-black mb-2">Key Features:</h4>
                      <div className="space-y-2">
                        {type.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                    >
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Proven Results</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Organizations using our contract management platform achieve significant improvements in efficiency,
                compliance, and cost reduction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 border-gray-200 text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Streamlined Workflow</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our intelligent workflow automates every step of the contract lifecycle, from initial creation to final
                execution and ongoing management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mb-4">
                    <step.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Seamless Integrations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with your existing tools and systems for a unified contract management experience.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                "Salesforce",
                "Microsoft 365",
                "DocuSign",
                "SAP",
                "Oracle",
                "Slack",
                "Teams",
                "Jira",
                "ServiceNow",
                "NetSuite",
                "HubSpot",
                "Workday",
              ].map((integration, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                    <span className="text-sm font-medium text-black">{integration}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Contract Management</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading organizations that have revolutionized their contract management with our AI-powered
              platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
                <Link href="/contact" className="flex items-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              >
                <Link href="/solutions">View All Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
