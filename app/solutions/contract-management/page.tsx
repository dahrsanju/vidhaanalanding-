import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  FileText,
  Brain,
  Workflow,
  Shield,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Zap,
  Eye,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Contract Management Platform | Automated Contract Lifecycle Management",
  description:
    "Streamline contract management with AI-powered analysis, automated creation, and lifecycle management. Reduce contract processing time by 80% and ensure 95% compliance. Complete contract visibility and control.",
  keywords: [
    "contract management software",
    "AI contract analysis",
    "contract lifecycle management",
    "automated contract creation",
    "contract risk assessment",
    "contract compliance monitoring",
    "contract analytics platform",
    "legal contract automation",
    "contract management system",
    "intelligent contract platform",
  ],
  alternates: {
    canonical: "https://vidhaana.com/solutions/contract-management",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vidhaana Contract Management Platform",
  description: "AI-powered contract management and lifecycle automation platform",
  url: "https://vidhaana.com/solutions/contract-management",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web-based",
  offers: {
    "@type": "Offer",
    price: "Contact for pricing",
    priceCurrency: "USD",
  },
  provider: {
    "@type": "Organization",
    name: "Vidhaana",
  },
}

export default function ContractManagementPage() {
  const coreFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Contract Analysis",
      description:
        "Advanced AI algorithms analyze contracts for risks, compliance issues, and optimization opportunities with 95% accuracy.",
      highlights: [
        "Risk scoring and identification",
        "Clause recommendation engine",
        "Compliance verification",
        "Language optimization suggestions",
      ],
    },
    {
      icon: Zap,
      title: "Automated Contract Creation",
      description:
        "Generate contracts automatically using AI-powered templates and intelligent clause libraries tailored to your business needs.",
      highlights: [
        "Smart template library",
        "Dynamic clause insertion",
        "Industry-specific templates",
        "Custom template creation",
      ],
    },
    {
      icon: Workflow,
      title: "Complete Lifecycle Management",
      description:
        "Manage the entire contract lifecycle from creation to renewal with automated workflows and milestone tracking.",
      highlights: [
        "Automated workflow management",
        "Milestone and deadline tracking",
        "Renewal notifications",
        "Version control and history",
      ],
    },
    {
      icon: Shield,
      title: "Risk Assessment & Mitigation",
      description:
        "Proactive risk identification and mitigation strategies with predictive analytics and compliance monitoring.",
      highlights: [
        "Predictive risk modeling",
        "Compliance gap analysis",
        "Risk mitigation recommendations",
        "Regulatory change monitoring",
      ],
    },
    {
      icon: Users,
      title: "Collaborative Review Process",
      description:
        "Streamlined collaboration tools for legal teams, stakeholders, and external parties with real-time editing and approval workflows.",
      highlights: [
        "Real-time collaboration",
        "Approval workflow automation",
        "Comment and annotation system",
        "Stakeholder notifications",
      ],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Reporting",
      description:
        "Comprehensive analytics dashboard providing insights into contract performance, compliance metrics, and cost optimization.",
      highlights: [
        "Contract performance metrics",
        "Compliance reporting",
        "Cost analysis and optimization",
        "Custom dashboard creation",
      ],
    },
  ]

  const contractTypes = [
    {
      type: "Sales Contracts",
      description: "Revenue agreements, service contracts, and customer agreements",
      features: [
        "Revenue recognition automation",
        "Payment term optimization",
        "Customer risk assessment",
        "Performance milestone tracking",
      ],
      benefits: "40% faster deal closure, 25% revenue increase",
    },
    {
      type: "Employment Agreements",
      description: "Employment contracts, NDAs, and HR-related agreements",
      features: [
        "Compliance with labor laws",
        "Compensation benchmarking",
        "Benefits optimization",
        "Termination clause management",
      ],
      benefits: "60% faster hiring, 100% compliance rate",
    },
    {
      type: "Vendor Contracts",
      description: "Supplier agreements, service contracts, and procurement deals",
      features: [
        "Vendor performance tracking",
        "Cost optimization analysis",
        "SLA monitoring",
        "Risk assessment automation",
      ],
      benefits: "30% cost savings, 50% better vendor performance",
    },
    {
      type: "Partnership Agreements",
      description: "Joint ventures, strategic partnerships, and collaboration agreements",
      features: [
        "Partnership structure optimization",
        "Revenue sharing automation",
        "Performance metrics tracking",
        "Dispute resolution management",
      ],
      benefits: "35% faster partnerships, 20% better outcomes",
    },
  ]

  const integrations = [
    "Salesforce",
    "Microsoft 365",
    "Google Workspace",
    "DocuSign",
    "Adobe Sign",
    "SAP",
    "Oracle",
    "NetSuite",
    "HubSpot",
    "Slack",
    "Teams",
    "Zoom",
  ]

  const implementationPhases = [
    {
      phase: 1,
      title: "Contract Intake & Assessment",
      description: "Import existing contracts and conduct comprehensive analysis of current contract portfolio.",
      duration: "1-2 weeks",
    },
    {
      phase: 2,
      title: "Template & Workflow Setup",
      description: "Configure contract templates, approval workflows, and integration with existing systems.",
      duration: "2-3 weeks",
    },
    {
      phase: 3,
      title: "Team Training & Go-Live",
      description: "Comprehensive team training and system activation with ongoing support and monitoring.",
      duration: "1 week",
    },
    {
      phase: 4,
      title: "Optimization & Scaling",
      description: "Performance optimization, advanced feature activation, and scaling across the organization.",
      duration: "Ongoing",
    },
  ]

  const stats = [
    { number: "80%", label: "Faster Processing", icon: Clock },
    { number: "95%", label: "Compliance Rate", icon: Shield },
    { number: "60%", label: "Cost Reduction", icon: TrendingUp },
    { number: "100%", label: "Contract Visibility", icon: Eye },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-28 pb-16 monochrome-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ label: "Solutions", href: "/solutions" }, { label: "Contract Management" }]}
              className="mb-8"
            />

            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                <FileText className="w-4 h-4 mr-2" />
                Contract Management Platform
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                AI-Powered Contract
                <span className="block text-black">Lifecycle Management</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Streamline your entire contract lifecycle with intelligent automation, risk assessment, and compliance
                monitoring. Reduce processing time by 80% while ensuring 95% compliance across all contract types.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  <Link href="#demo">Watch Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Contract Management Results</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable improvements in contract processing efficiency and compliance
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

        {/* Core Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Complete Contract Management Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI-powered features to manage every aspect of your contract lifecycle
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <Card key={index} className="monochrome-card h-full">
                  <CardHeader>
                    <div className="inline-flex p-3 rounded-2xl bg-black text-white mb-4">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                    <div className="mt-auto">
                      <h4 className="font-semibold mb-3 text-black">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {feature.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-black mr-2 flex-shrink-0 mt-0.5" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contract Types Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Specialized Contract Type Support</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored features and workflows for different contract types and business requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contractTypes.map((contract, index) => (
                <Card key={index} className="monochrome-card">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-black">{contract.type}</CardTitle>
                    <p className="text-gray-600">{contract.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-black">Specialized Features:</h4>
                      <ul className="space-y-2">
                        {contract.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-black mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="monochrome-accent p-3 rounded-lg">
                      <p className="text-sm font-medium text-black mb-1">Proven Results:</p>
                      <p className="text-sm text-gray-700">{contract.benefits}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Seamless Integrations</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect with your existing tools and workflows for maximum efficiency
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black rounded-lg p-4 text-center hover:bg-black hover:text-white transition-colors"
                >
                  <p className="font-medium">{integration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Implementation Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Streamlined implementation process to get your contract management system operational quickly
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {implementationPhases.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {phase.phase}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black">{phase.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">{phase.description}</p>
                  <p className="text-sm text-black font-medium">{phase.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Contract Management Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations already streamlining their contract processes with AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
                <Link href="/contact" className="flex items-center">
                  Get Started Now
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
