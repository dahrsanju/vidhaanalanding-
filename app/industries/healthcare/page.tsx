import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Stethoscope,
  Shield,
  FileText,
  Users,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Lock,
  Eye,
  Bell,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Solutions for Healthcare | HIPAA Compliance & Medical Legal AI | Vidhaana",
  description:
    "Specialized AI legal solutions for healthcare organizations. HIPAA compliance monitoring, medical malpractice risk assessment, healthcare contracts, and regulatory compliance automation.",
  keywords: [
    "healthcare legal AI",
    "HIPAA compliance automation",
    "medical legal technology",
    "healthcare contract management",
    "medical malpractice AI",
    "healthcare regulatory compliance",
    "medical device legal AI",
    "pharmaceutical compliance",
    "healthcare privacy law",
    "medical legal analytics",
  ],
  alternates: {
    canonical: "https://vidhaana.com/industries/healthcare",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Legal Solutions for Healthcare",
  description: "Specialized AI legal solutions for healthcare organizations and medical professionals",
  provider: {
    "@type": "Organization",
    name: "Vidhaana",
  },
  areaServed: "Healthcare Industry",
}

export default function HealthcarePage() {
  const useCases = [
    {
      icon: Shield,
      title: "HIPAA Compliance Monitoring",
      description:
        "Continuous monitoring of HIPAA compliance across all healthcare operations with real-time alerts and automated reporting.",
      features: [
        "Real-time privacy breach detection",
        "Automated compliance reporting",
        "Staff training compliance tracking",
        "Audit trail maintenance",
      ],
      benefits: "100% HIPAA compliance, 90% reduction in privacy violations",
      roi: "400% ROI through avoided penalties",
    },
    {
      icon: AlertTriangle,
      title: "Medical Malpractice Risk Assessment",
      description:
        "AI-powered analysis of medical practices to identify potential malpractice risks and provide preventive recommendations.",
      features: [
        "Risk pattern identification",
        "Predictive risk modeling",
        "Clinical decision support",
        "Documentation analysis",
      ],
      benefits: "75% reduction in malpractice claims, 60% lower insurance costs",
      roi: "500% ROI in first year",
    },
    {
      icon: FileText,
      title: "Healthcare Contract Management",
      description:
        "Specialized contract management for healthcare providers, including vendor agreements, employment contracts, and patient agreements.",
      features: [
        "Medical vendor contract analysis",
        "Employment agreement compliance",
        "Patient consent management",
        "Insurance contract optimization",
      ],
      benefits: "80% faster contract processing, 95% compliance accuracy",
      roi: "300% ROI in 18 months",
    },
    {
      icon: Users,
      title: "Medical Licensing & Credentialing",
      description:
        "Automated tracking and management of medical licenses, certifications, and credentialing requirements.",
      features: [
        "License expiration tracking",
        "Credentialing automation",
        "Compliance verification",
        "Renewal notifications",
      ],
      benefits: "100% license compliance, 70% faster credentialing",
      roi: "250% ROI in 12 months",
    },
    {
      icon: Lock,
      title: "Data Privacy & Security Compliance",
      description:
        "Comprehensive data privacy management ensuring compliance with HIPAA, HITECH, and state privacy laws.",
      features: [
        "Data mapping and classification",
        "Privacy impact assessments",
        "Breach notification automation",
        "Patient consent management",
      ],
      benefits: "99.9% data privacy compliance, zero privacy breaches",
      roi: "600% ROI through avoided penalties",
    },
    {
      icon: BarChart3,
      title: "Regulatory Compliance Analytics",
      description:
        "Advanced analytics for healthcare regulatory compliance including FDA, CMS, and state health department requirements.",
      features: [
        "Regulatory change monitoring",
        "Compliance performance metrics",
        "Risk assessment dashboards",
        "Audit preparation automation",
      ],
      benefits: "95% regulatory compliance, 80% faster audit preparation",
      roi: "350% ROI in 24 months",
    },
  ]

  const regulations = [
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      coverage: "Privacy and security of health information",
    },
    {
      name: "HITECH",
      description: "Health Information Technology for Economic and Clinical Health Act",
      coverage: "Electronic health records and breach notifications",
    },
    {
      name: "FDA Regulations",
      description: "Food and Drug Administration compliance",
      coverage: "Medical devices, pharmaceuticals, and clinical trials",
    },
    {
      name: "CMS Guidelines",
      description: "Centers for Medicare & Medicaid Services",
      coverage: "Medicare and Medicaid compliance requirements",
    },
    {
      name: "State Health Laws",
      description: "State-specific healthcare regulations",
      coverage: "Licensing, reporting, and operational requirements",
    },
    {
      name: "Joint Commission",
      description: "Healthcare accreditation standards",
      coverage: "Quality and safety standards for healthcare organizations",
    },
  ]

  const stats = [
    { number: "1,200+", label: "Healthcare Organizations", icon: Stethoscope },
    { number: "$4.1M", label: "Average Annual Savings", icon: BarChart3 },
    { number: "100%", label: "HIPAA Compliance Rate", icon: Shield },
    { number: "75%", label: "Risk Reduction", icon: AlertTriangle },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ label: "Industries", href: "/industries" }, { label: "Healthcare" }]}
              className="mb-8"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  Healthcare Legal AI
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                  AI Legal Solutions
                  <span className="block">for Healthcare</span>
                  <span className="block">Organizations</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Specialized AI legal assistance for healthcare providers, ensuring HIPAA compliance, managing medical
                  malpractice risks, and streamlining healthcare-specific legal operations.
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
                        <h3 className="text-lg font-semibold text-black">Healthcare Compliance Dashboard</h3>
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="w-5 h-5" />
                          <span className="text-sm font-medium">100% Compliant</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-black">847</div>
                          <div className="text-sm text-gray-600">Patients Protected</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-black">0</div>
                          <div className="text-sm text-gray-600">Privacy Breaches</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-black" />
                            <span className="text-sm">License Renewal Due</span>
                          </div>
                          <span className="text-xs text-gray-600">30 days</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Eye className="w-5 h-5 text-black" />
                            <span className="text-sm">Audit Preparation</span>
                          </div>
                          <span className="text-xs text-green-600">Ready</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results in Healthcare</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable impact across healthcare organizations of all sizes
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">6 AI-Powered Use Cases for Healthcare</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed specifically for healthcare organizations and medical professionals
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Healthcare Regulations Covered</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive coverage of all major healthcare regulations and compliance requirements
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
                Our proven methodology ensures successful AI implementation in healthcare organizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Healthcare Assessment",
                  description: "Comprehensive analysis of current healthcare compliance and legal operations",
                },
                {
                  step: "2",
                  title: "Custom Configuration",
                  description: "Tailored AI solution setup based on your specific healthcare requirements",
                },
                {
                  step: "3",
                  title: "HIPAA Integration",
                  description: "Secure integration with existing healthcare systems and HIPAA compliance",
                },
                {
                  step: "4",
                  title: "Ongoing Support",
                  description: "Continuous monitoring, optimization, and dedicated healthcare support",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Healthcare Legal Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 1,200+ healthcare organizations already ensuring perfect compliance with AI-powered legal solutions.
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
