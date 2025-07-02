import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Landmark,
  Shield,
  FileText,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Lock,
  Eye,
  DollarSign,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Solutions for Financial Services | Banking & Finance Legal AI | Vidhaana",
  description:
    "Specialized AI legal solutions for financial institutions. Regulatory compliance automation, loan agreement analysis, AML monitoring, and securities law compliance for banks and financial services.",
  keywords: [
    "financial services legal AI",
    "banking compliance automation",
    "financial regulatory AI",
    "loan agreement analysis",
    "AML compliance monitoring",
    "securities law AI",
    "banking legal technology",
    "financial contract management",
    "regulatory reporting automation",
    "financial risk assessment AI",
  ],
  alternates: {
    canonical: "https://vidhaana.com/industries/financial-services",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Legal Solutions for Financial Services",
  description: "Specialized AI legal solutions for banks, credit unions, and financial institutions",
  provider: {
    "@type": "Organization",
    name: "Vidhaana",
  },
  areaServed: "Financial Services Industry",
}

export default function FinancialServicesPage() {
  const useCases = [
    {
      icon: Shield,
      title: "Regulatory Compliance Automation",
      description:
        "Comprehensive compliance monitoring for banking regulations including Dodd-Frank, Basel III, and GDPR with real-time updates.",
      features: [
        "Multi-jurisdiction compliance tracking",
        "Automated regulatory reporting",
        "Real-time regulation updates",
        "Compliance risk scoring",
      ],
      benefits: "99% regulatory compliance, 75% faster reporting",
      roi: "450% ROI through avoided penalties",
    },
    {
      icon: FileText,
      title: "Loan Agreement Analysis",
      description:
        "AI-powered analysis of loan agreements, credit facilities, and lending documents with automated risk assessment.",
      features: [
        "Credit risk evaluation",
        "Loan term optimization",
        "Collateral analysis",
        "Default prediction modeling",
      ],
      benefits: "60% faster loan processing, 40% reduction in defaults",
      roi: "380% ROI in first year",
    },
    {
      icon: Eye,
      title: "AML & Fraud Detection",
      description:
        "Advanced anti-money laundering monitoring and fraud detection using AI pattern recognition and behavioral analysis.",
      features: [
        "Transaction pattern analysis",
        "Suspicious activity detection",
        "Customer due diligence automation",
        "Regulatory reporting automation",
      ],
      benefits: "95% fraud detection accuracy, 80% false positive reduction",
      roi: "600% ROI through prevented losses",
    },
    {
      icon: TrendingUp,
      title: "Securities Law Compliance",
      description:
        "Automated compliance monitoring for securities regulations, trading activities, and investment advisory requirements.",
      features: [
        "Trading compliance monitoring",
        "Investment advisory compliance",
        "Market manipulation detection",
        "Disclosure requirement tracking",
      ],
      benefits: "100% securities compliance, 70% faster trade clearing",
      roi: "350% ROI in 18 months",
    },
    {
      icon: Lock,
      title: "Data Privacy & Protection",
      description:
        "Comprehensive data privacy management ensuring compliance with financial privacy laws and customer data protection.",
      features: [
        "Customer data mapping",
        "Privacy impact assessments",
        "Consent management",
        "Data breach response automation",
      ],
      benefits: "99.9% data privacy compliance, zero data breaches",
      roi: "500% ROI through avoided penalties",
    },
    {
      icon: BarChart3,
      title: "Risk Management Analytics",
      description:
        "Advanced risk analytics for credit risk, operational risk, and market risk with predictive modeling and reporting.",
      features: [
        "Credit risk modeling",
        "Operational risk assessment",
        "Market risk analysis",
        "Stress testing automation",
      ],
      benefits: "85% risk prediction accuracy, 65% cost reduction",
      roi: "420% ROI in 24 months",
    },
  ]

  const regulations = [
    {
      name: "Dodd-Frank Act",
      description: "Comprehensive financial reform legislation",
      coverage: "Systemic risk, consumer protection, derivatives trading",
    },
    {
      name: "Basel III",
      description: "International banking regulatory framework",
      coverage: "Capital requirements, liquidity standards, leverage ratios",
    },
    {
      name: "GDPR & CCPA",
      description: "Data privacy and protection regulations",
      coverage: "Customer data privacy, consent management, breach notifications",
    },
    {
      name: "SOX Compliance",
      description: "Sarbanes-Oxley Act requirements",
      coverage: "Financial reporting, internal controls, audit requirements",
    },
    {
      name: "AML/BSA",
      description: "Anti-Money Laundering and Bank Secrecy Act",
      coverage: "Suspicious activity monitoring, customer due diligence",
    },
    {
      name: "Securities Regulations",
      description: "SEC and FINRA compliance requirements",
      coverage: "Trading compliance, investment advisory, market conduct",
    },
  ]

  const stats = [
    { number: "800+", label: "Financial Institutions", icon: Landmark },
    { number: "$3.2M", label: "Average Annual Savings", icon: DollarSign },
    { number: "99%", label: "Regulatory Compliance", icon: Shield },
    { number: "65%", label: "Risk Reduction", icon: AlertTriangle },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ label: "Industries", href: "/industries" }, { label: "Financial Services" }]}
              className="mb-8"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                  <Landmark className="w-4 h-4 mr-2" />
                  Financial Services Legal AI
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                  AI Legal Solutions
                  <span className="block">for Financial</span>
                  <span className="block">Institutions</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Navigate complex financial regulations with AI-powered compliance monitoring, risk management, and
                  automated legal operations designed specifically for banks and financial services.
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
                        <h3 className="text-lg font-semibold text-black">Financial Compliance Dashboard</h3>
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="w-5 h-5" />
                          <span className="text-sm font-medium">99% Compliant</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-black">$2.4M</div>
                          <div className="text-sm text-gray-600">Penalties Avoided</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-black">847</div>
                          <div className="text-sm text-gray-600">Loans Processed</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-black" />
                            <span className="text-sm">Basel III Compliance</span>
                          </div>
                          <span className="text-xs text-green-600">Current</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Eye className="w-5 h-5 text-black" />
                            <span className="text-sm">AML Monitoring</span>
                          </div>
                          <span className="text-xs text-green-600">Active</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results in Financial Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable impact across banks, credit unions, and financial institutions
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
                6 AI-Powered Use Cases for Financial Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed specifically for banks, credit unions, and financial institutions
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Financial Regulations Covered</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive coverage of all major financial regulations and compliance requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regulations.map((regulation, index) => (
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
                Our proven methodology ensures successful AI implementation in financial institutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Financial Assessment",
                  description: "Comprehensive analysis of current financial compliance and risk management",
                },
                {
                  step: "2",
                  title: "Regulatory Mapping",
                  description: "Custom configuration based on your specific regulatory requirements",
                },
                {
                  step: "3",
                  title: "Secure Integration",
                  description: "Bank-grade security integration with existing financial systems",
                },
                {
                  step: "4",
                  title: "Continuous Monitoring",
                  description: "Ongoing compliance monitoring and dedicated financial services support",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial Legal Operations?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 800+ financial institutions already achieving perfect compliance with AI-powered legal solutions.
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
