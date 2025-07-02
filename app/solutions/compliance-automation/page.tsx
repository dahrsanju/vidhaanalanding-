import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  BarChart3,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Database,
  Bell,
  Eye,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Compliance Automation | Intelligent Regulatory Monitoring | Vidhaana",
  description:
    "Automate regulatory compliance with AI-powered monitoring, real-time alerts, and intelligent risk assessment. Reduce compliance costs by 60% while ensuring 99.9% accuracy in regulatory adherence.",
  keywords: [
    "compliance automation",
    "regulatory monitoring AI",
    "automated compliance",
    "regulatory technology",
    "compliance management software",
    "AI regulatory compliance",
    "automated risk assessment",
    "compliance monitoring platform",
    "regulatory intelligence",
    "compliance automation tools",
  ],
  alternates: {
    canonical: "https://vidhaana.com/solutions/compliance-automation",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Compliance Automation",
  description: "Intelligent regulatory monitoring and automated compliance management",
  provider: {
    "@type": "Organization",
    name: "Vidhaana",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Compliance Automation Features",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Real-time Regulatory Monitoring",
          description: "Continuous monitoring of regulatory changes and updates",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automated Risk Assessment",
          description: "AI-powered risk identification and scoring",
        },
      },
    ],
  },
}

export default function ComplianceAutomationPage() {
  const coreFeatures = [
    {
      icon: Shield,
      title: "Real-time Regulatory Monitoring",
      description:
        "Continuously monitor regulatory changes across multiple jurisdictions with AI-powered intelligence that identifies relevant updates instantly.",
      highlights: ["24/7 monitoring", "Multi-jurisdiction coverage", "Instant notifications", "Relevance scoring"],
    },
    {
      icon: AlertTriangle,
      title: "Intelligent Risk Assessment",
      description:
        "Advanced AI algorithms analyze your operations against regulatory requirements to identify potential compliance risks before they become issues.",
      highlights: ["Predictive risk scoring", "Impact analysis", "Mitigation recommendations", "Trend identification"],
    },
    {
      icon: CheckCircle,
      title: "Automated Compliance Reporting",
      description:
        "Generate comprehensive compliance reports automatically with real-time data integration and customizable templates for different regulatory bodies.",
      highlights: ["Automated report generation", "Real-time data sync", "Custom templates", "Audit trails"],
    },
    {
      icon: Clock,
      title: "Deadline Management",
      description:
        "Never miss a compliance deadline with intelligent scheduling, automated reminders, and priority-based task management.",
      highlights: ["Smart scheduling", "Automated reminders", "Priority management", "Calendar integration"],
    },
    {
      icon: FileText,
      title: "Policy Management",
      description:
        "Maintain up-to-date policies and procedures with automated updates based on regulatory changes and version control.",
      highlights: ["Automated policy updates", "Version control", "Change tracking", "Approval workflows"],
    },
    {
      icon: BarChart3,
      title: "Compliance Analytics",
      description:
        "Gain deep insights into your compliance posture with advanced analytics, trend analysis, and performance metrics.",
      highlights: ["Performance dashboards", "Trend analysis", "Compliance scoring", "Predictive insights"],
    },
  ]

  const industries = [
    {
      name: "Financial Services",
      regulations: ["SOX", "GDPR", "PCI DSS", "Basel III"],
      description: "Comprehensive compliance for banking, insurance, and financial institutions.",
    },
    {
      name: "Healthcare",
      regulations: ["HIPAA", "FDA", "HITECH", "21 CFR Part 11"],
      description: "Medical device, pharmaceutical, and healthcare provider compliance.",
    },
    {
      name: "Technology",
      regulations: ["GDPR", "CCPA", "SOC 2", "ISO 27001"],
      description: "Data privacy and security compliance for tech companies.",
    },
    {
      name: "Manufacturing",
      regulations: ["ISO 9001", "OSHA", "EPA", "FDA"],
      description: "Quality, safety, and environmental compliance for manufacturers.",
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "60% Cost Reduction",
      description: "Reduce compliance costs through automation and intelligent risk management.",
    },
    {
      icon: Target,
      title: "99.9% Accuracy",
      description: "Achieve near-perfect compliance accuracy with AI-powered monitoring.",
    },
    {
      icon: Zap,
      title: "75% Faster Response",
      description: "Respond to regulatory changes 75% faster than traditional methods.",
    },
    {
      icon: Database,
      title: "Complete Audit Trail",
      description: "Maintain comprehensive audit trails for all compliance activities.",
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
              items={[{ label: "Solutions", href: "/solutions" }, { label: "Compliance Automation" }]}
              className="mb-8"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                  <Shield className="w-4 h-4 mr-2" />
                  Compliance Automation
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                  Intelligent
                  <span className="block">Regulatory</span>
                  <span className="block">Compliance</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Automate regulatory compliance with AI-powered monitoring, real-time alerts, and intelligent risk
                  assessment. Reduce compliance costs by 60% while ensuring 99.9% accuracy.
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
                        <h3 className="text-lg font-semibold text-black">Compliance Dashboard</h3>
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="w-5 h-5" />
                          <span className="text-sm font-medium">99.9% Compliant</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-black" />
                            <span className="text-sm">GDPR Update Available</span>
                          </div>
                          <span className="text-xs text-gray-600">2 min ago</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Eye className="w-5 h-5 text-black" />
                            <span className="text-sm">SOX Audit Scheduled</span>
                          </div>
                          <span className="text-xs text-gray-600">1 hour ago</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <BarChart3 className="w-5 h-5 text-black" />
                            <span className="text-sm">Risk Score: Low</span>
                          </div>
                          <span className="text-xs text-green-600">Improved</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Comprehensive Compliance Automation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered platform provides end-to-end compliance automation with intelligent monitoring,
                assessment, and reporting capabilities.
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

        {/* Industry Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Industry-Specific Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored compliance automation for your industry's unique regulatory requirements and standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="border-2 border-black">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-black">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-black mb-2">Supported Regulations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.regulations.map((reg, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-200 text-black text-sm font-medium rounded-full">
                            {reg}
                          </span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Measurable Results</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our compliance automation platform delivers quantifiable improvements in efficiency, accuracy, and cost
                reduction.
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

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered compliance automation follows a systematic approach to ensure comprehensive regulatory
                adherence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Setup & Configuration",
                  description: "Configure your regulatory requirements and compliance framework.",
                },
                {
                  step: "02",
                  title: "Continuous Monitoring",
                  description: "AI monitors regulatory changes and your operations 24/7.",
                },
                {
                  step: "03",
                  title: "Risk Assessment",
                  description: "Intelligent algorithms identify and score potential compliance risks.",
                },
                {
                  step: "04",
                  title: "Automated Response",
                  description: "Generate reports, alerts, and recommendations automatically.",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Compliance?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations that have transformed their compliance operations with our AI-powered
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
