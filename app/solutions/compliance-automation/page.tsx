import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Shield,
  AlertTriangle,
  FileCheck,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight,
  Bell,
  Database,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Compliance Automation Platform | Regulatory Monitoring & Risk Management",
  description:
    "Automate regulatory compliance with AI-powered monitoring, risk assessment, and reporting. Ensure 99.9% compliance accuracy across GDPR, HIPAA, SOX, and industry regulations. Reduce compliance costs by 60%.",
  keywords: [
    "compliance automation",
    "regulatory compliance AI",
    "compliance monitoring software",
    "automated compliance reporting",
    "regulatory risk management",
    "GDPR compliance automation",
    "HIPAA compliance software",
    "SOX compliance automation",
    "compliance management platform",
    "regulatory technology",
  ],
  alternates: {
    canonical: "https://vidhaana.com/solutions/compliance-automation",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vidhaana Compliance Automation Platform",
  description: "AI-powered compliance automation and regulatory monitoring platform",
  url: "https://vidhaana.com/solutions/compliance-automation",
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

export default function ComplianceAutomationPage() {
  const coreFeatures = [
    {
      icon: Shield,
      title: "Real-Time Regulatory Monitoring",
      description:
        "Continuous monitoring of regulatory changes across multiple jurisdictions with instant alerts and impact assessments.",
      highlights: [
        "24/7 regulatory change detection",
        "Multi-jurisdiction coverage",
        "Impact assessment automation",
        "Customizable alert thresholds",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Automated Risk Assessment",
      description:
        "AI-powered risk scoring and assessment with predictive analytics to identify potential compliance issues before they occur.",
      highlights: [
        "Predictive risk modeling",
        "Automated risk scoring",
        "Compliance gap analysis",
        "Risk mitigation recommendations",
      ],
    },
    {
      icon: FileCheck,
      title: "Intelligent Compliance Reporting",
      description:
        "Automated generation of compliance reports with real-time data aggregation and customizable templates for different regulatory requirements.",
      highlights: [
        "Automated report generation",
        "Real-time data aggregation",
        "Customizable report templates",
        "Audit trail documentation",
      ],
    },
    {
      icon: BarChart3,
      title: "Compliance Analytics Dashboard",
      description:
        "Comprehensive analytics and visualization tools providing insights into compliance performance, trends, and areas for improvement.",
      highlights: [
        "Real-time compliance metrics",
        "Trend analysis and forecasting",
        "Performance benchmarking",
        "Executive dashboards",
      ],
    },
    {
      icon: Bell,
      title: "Proactive Alert System",
      description:
        "Intelligent alert system that notifies stakeholders of compliance issues, regulatory changes, and required actions with priority-based routing.",
      highlights: [
        "Priority-based alert routing",
        "Multi-channel notifications",
        "Escalation workflows",
        "Alert customization",
      ],
    },
    {
      icon: Database,
      title: "Centralized Compliance Repository",
      description:
        "Unified repository for all compliance-related documents, policies, and procedures with version control and access management.",
      highlights: [
        "Document version control",
        "Access management",
        "Policy lifecycle management",
        "Compliance library",
      ],
    },
  ]

  const industrySolutions = [
    {
      industry: "Financial Services",
      regulations: ["SOX", "GDPR", "PCI DSS", "Basel III", "MiFID II"],
      description: "Comprehensive compliance automation for banking, insurance, and investment firms.",
      benefits: ["99.9% regulatory accuracy", "60% cost reduction", "75% faster reporting"],
    },
    {
      industry: "Healthcare",
      regulations: ["HIPAA", "FDA", "HITECH", "GDPR", "State Privacy Laws"],
      description: "Healthcare-specific compliance monitoring with patient data protection focus.",
      benefits: ["100% HIPAA compliance", "Zero data breaches", "50% audit preparation time"],
    },
    {
      industry: "Technology",
      regulations: ["GDPR", "CCPA", "SOC 2", "ISO 27001", "NIST"],
      description: "Data privacy and security compliance for technology companies and SaaS providers.",
      benefits: ["Complete privacy compliance", "Automated security assessments", "40% faster certifications"],
    },
    {
      industry: "Manufacturing",
      regulations: ["OSHA", "EPA", "ISO 14001", "REACH", "RoHS"],
      description: "Environmental and safety compliance automation for manufacturing operations.",
      benefits: ["Zero safety violations", "Environmental compliance", "30% cost savings"],
    },
  ]

  const implementationSteps = [
    {
      step: 1,
      title: "Compliance Assessment & Setup",
      description: "Comprehensive analysis of current compliance state and system configuration.",
      duration: "1-2 weeks",
    },
    {
      step: 2,
      title: "Regulatory Framework Integration",
      description: "Integration of relevant regulatory frameworks and compliance requirements.",
      duration: "2-3 weeks",
    },
    {
      step: 3,
      title: "Automated Monitoring Activation",
      description: "Activation of real-time monitoring and alert systems with custom workflows.",
      duration: "1 week",
    },
    {
      step: 4,
      title: "Training & Optimization",
      description: "Team training and system optimization based on initial performance data.",
      duration: "Ongoing",
    },
  ]

  const stats = [
    { number: "99.9%", label: "Compliance Accuracy", icon: Shield },
    { number: "60%", label: "Cost Reduction", icon: TrendingUp },
    { number: "75%", label: "Faster Response", icon: Clock },
    { number: "100%", label: "Audit Trail Coverage", icon: FileCheck },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-28 pb-16 monochrome-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ label: "Solutions", href: "/solutions" }, { label: "Compliance Automation" }]}
              className="mb-8"
            />

            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Compliance Automation Platform
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                AI-Powered Compliance
                <span className="block text-black">Automation & Monitoring</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Automate regulatory compliance with intelligent monitoring, risk assessment, and reporting. Ensure 99.9%
                compliance accuracy while reducing costs by 60% across GDPR, HIPAA, SOX, and industry-specific
                regulations.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Compliance Results</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable impact on compliance performance and operational efficiency
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Comprehensive Compliance Automation Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced AI-powered features designed to automate every aspect of regulatory compliance management
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

        {/* Industry Solutions Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Industry-Specific Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored compliance automation for your industry's unique regulatory requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industrySolutions.map((solution, index) => (
                <Card key={index} className="monochrome-card">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-black">{solution.industry}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {solution.regulations.map((regulation, regIndex) => (
                        <span key={regIndex} className="px-3 py-1 bg-black text-white text-xs rounded-full font-medium">
                          {regulation}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                    <div>
                      <h4 className="font-semibold mb-3 text-black">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-black mr-2 flex-shrink-0 mt-0.5" />
                            {benefit}
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

        {/* Implementation Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Implementation Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Streamlined implementation process to get your compliance automation up and running quickly
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {implementationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">{step.description}</p>
                  <p className="text-sm text-black font-medium">{step.duration}</p>
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
              Join thousands of organizations already saving time and money with AI-powered compliance automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
                <Link href="/contact" className="flex items-center">
                  Get Started Today
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
