import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Building2,
  FileText,
  Shield,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Target,
  Zap,
  Brain,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Solutions for Corporate Legal Departments | Contract Management & Compliance",
  description:
    "Transform your corporate legal operations with AI-powered contract management, compliance monitoring, M&A due diligence, and legal analytics. Reduce costs by 70% and improve efficiency.",
  keywords: [
    "corporate legal AI",
    "contract management software",
    "legal compliance automation",
    "M&A due diligence AI",
    "corporate governance AI",
    "legal analytics platform",
    "contract lifecycle management",
    "legal risk assessment",
    "corporate legal technology",
    "legal operations automation",
  ],
  alternates: {
    canonical: "https://vidhaana.com/industries/corporate-legal",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Legal Solutions for Corporate Legal",
  description: "AI-powered legal solutions for corporate legal departments",
  url: "https://vidhaana.com/industries/corporate-legal",
  provider: {
    "@type": "Organization",
    name: "Vidhaana",
  },
}

export default function CorporateLegalPage() {
  const useCases = [
    {
      icon: FileText,
      title: "Automated Contract Analysis & Review",
      description:
        "AI-powered contract analysis that identifies risks, suggests improvements, and ensures compliance across all contract types.",
      features: [
        "Risk scoring and identification",
        "Clause recommendation engine",
        "Compliance verification",
        "Version comparison and tracking",
      ],
      benefits: "80% faster contract review, 95% accuracy in risk identification",
      roi: "300% ROI in first year",
    },
    {
      icon: Shield,
      title: "Regulatory Compliance Monitoring",
      description:
        "Continuous monitoring of regulatory changes and automated compliance checking across multiple jurisdictions.",
      features: [
        "Real-time regulatory updates",
        "Automated compliance scoring",
        "Risk alert notifications",
        "Audit trail generation",
      ],
      benefits: "99% compliance rate, 75% reduction in compliance costs",
      roi: "250% ROI in 18 months",
    },
    {
      icon: TrendingUp,
      title: "M&A Due Diligence Automation",
      description: "Streamline merger and acquisition processes with AI-powered document review and risk assessment.",
      features: [
        "Document categorization and analysis",
        "Risk assessment automation",
        "Data room management",
        "Due diligence reporting",
      ],
      benefits: "70% faster due diligence, 60% cost reduction",
      roi: "400% ROI per transaction",
    },
    {
      icon: Users,
      title: "Corporate Governance Management",
      description:
        "Automate board resolutions, policy management, and governance compliance with intelligent workflows.",
      features: [
        "Board resolution automation",
        "Policy compliance tracking",
        "Governance reporting",
        "Meeting management",
      ],
      benefits: "90% reduction in administrative time, 100% compliance tracking",
      roi: "200% ROI in 12 months",
    },
    {
      icon: BarChart3,
      title: "Legal Analytics & Reporting",
      description:
        "Advanced analytics and reporting tools for legal spend analysis, performance metrics, and strategic insights.",
      features: ["Legal spend analytics", "Performance dashboards", "Predictive insights", "Custom reporting"],
      benefits: "50% better budget planning, 40% cost optimization",
      roi: "180% ROI in 24 months",
    },
    {
      icon: Clock,
      title: "Litigation Management & Prediction",
      description: "AI-powered litigation management with outcome prediction and strategic case planning capabilities.",
      features: [
        "Case outcome prediction",
        "Litigation cost estimation",
        "Discovery automation",
        "Settlement analysis",
      ],
      benefits: "65% better case outcomes, 45% cost reduction",
      roi: "350% ROI per case",
    },
    {
      icon: Target,
      title: "Intellectual Property Management",
      description: "Comprehensive IP portfolio management with AI-powered patent analysis and trademark monitoring.",
      features: [
        "Patent landscape analysis",
        "Trademark monitoring",
        "IP portfolio optimization",
        "Infringement detection",
      ],
      benefits: "80% faster IP analysis, 90% infringement detection accuracy",
      roi: "275% ROI in 18 months",
    },
    {
      icon: Zap,
      title: "Legal Workflow Automation",
      description: "Automate routine legal tasks and workflows to improve efficiency and reduce manual errors.",
      features: [
        "Document generation automation",
        "Approval workflow management",
        "Task scheduling and tracking",
        "Integration with existing systems",
      ],
      benefits: "85% reduction in manual tasks, 95% accuracy improvement",
      roi: "220% ROI in 15 months",
    },
    {
      icon: Brain,
      title: "Legal Knowledge Management",
      description:
        "AI-powered knowledge base that captures institutional knowledge and provides intelligent legal guidance.",
      features: [
        "Intelligent document search",
        "Legal precedent analysis",
        "Knowledge extraction",
        "Expert system recommendations",
      ],
      benefits: "70% faster legal research, 60% knowledge retention improvement",
      roi: "190% ROI in 20 months",
    },
    {
      icon: Shield,
      title: "Data Privacy & Security Compliance",
      description:
        "Automated GDPR, CCPA, and data privacy compliance monitoring with intelligent data mapping and protection.",
      features: [
        "Data mapping automation",
        "Privacy impact assessments",
        "Breach notification management",
        "Consent management",
      ],
      benefits: "100% privacy compliance, 80% faster breach response",
      roi: "300% ROI in 12 months",
    },
    {
      icon: FileText,
      title: "Contract Lifecycle Management",
      description: "End-to-end contract management from creation to renewal with AI-powered insights and automation.",
      features: [
        "Contract creation automation",
        "Renewal tracking and alerts",
        "Performance monitoring",
        "Vendor management integration",
      ],
      benefits: "90% contract visibility, 75% faster contract cycles",
      roi: "280% ROI in 16 months",
    },
    {
      icon: TrendingUp,
      title: "Legal Risk Assessment & Mitigation",
      description:
        "Proactive risk identification and mitigation strategies powered by AI analysis and predictive modeling.",
      features: [
        "Risk scoring algorithms",
        "Predictive risk modeling",
        "Mitigation strategy recommendations",
        "Risk monitoring dashboards",
      ],
      benefits: "85% risk reduction, 70% faster risk response",
      roi: "320% ROI in 14 months",
    },
  ]

  const stats = [
    { number: "5,000+", label: "Corporate Legal Teams", icon: Building2 },
    { number: "$2.5M", label: "Average Annual Savings", icon: TrendingUp },
    { number: "80%", label: "Faster Contract Processing", icon: Clock },
    { number: "95%", label: "Compliance Accuracy", icon: Shield },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-28 pb-16 monochrome-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ label: "Industries", href: "/industries" }, { label: "Corporate Legal" }]}
              className="mb-8"
            />

            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4 mr-2" />
                Corporate Legal Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                AI-Powered Corporate
                <span className="block text-black">Legal Operations</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Transform your corporate legal department with comprehensive AI solutions for contract management,
                compliance monitoring, M&A due diligence, and legal analytics. Reduce costs by 70% while improving
                efficiency and accuracy.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results for Corporate Legal</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable impact across corporate legal operations
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                12 AI-Powered Use Cases for Corporate Legal
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed specifically for corporate legal departments and in-house counsel
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

        {/* Implementation Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Implementation Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our proven methodology ensures successful AI implementation in your corporate legal department
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Assessment & Planning",
                  description: "Comprehensive analysis of current legal operations and AI readiness assessment",
                },
                {
                  step: "2",
                  title: "Custom Configuration",
                  description: "Tailored AI solution setup based on your specific corporate legal requirements",
                },
                {
                  step: "3",
                  title: "Integration & Training",
                  description: "Seamless integration with existing systems and comprehensive team training",
                },
                {
                  step: "4",
                  title: "Optimization & Support",
                  description: "Ongoing optimization, performance monitoring, and dedicated support",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Corporate Legal Operations?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 5,000+ corporate legal teams already saving millions with AI-powered legal solutions.
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
