import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Building2,
  Scale,
  Users,
  Landmark,
  Stethoscope,
  Home,
  UserCheck,
  Package,
  Monitor,
  GraduationCap,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Brain,
  Zap,
  Target,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Solutions by Industry | Corporate, Healthcare, Finance & More",
  description:
    "Comprehensive AI-powered legal solutions tailored for corporate legal, law firms, healthcare, financial services, real estate, HR, procurement, technology, and education sectors.",
  alternates: { canonical: "https://vidhaana.com/solutions" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Legal Solutions by Industry",
  description: "Industry-specific AI legal solutions and services",
  url: "https://vidhaana.com/solutions",
}

export default function SolutionsPage() {
  const industries = [
    {
      icon: Building2,
      title: "Corporate Legal",
      description:
        "Streamline corporate legal operations with AI-powered contract management and compliance monitoring.",
      useCases: [
        "Automated contract review and risk assessment",
        "Regulatory compliance monitoring and alerts",
        "Legal document generation and templates",
        "Corporate governance policy management",
        "M&A due diligence automation",
      ],
      benefits: ["70% faster contract processing", "95% compliance accuracy", "60% cost reduction"],
      href: "/industries/corporate-legal",
    },
    {
      icon: Scale,
      title: "Law Firms",
      description: "Enhance legal practice efficiency with AI research, case analysis, and client management tools.",
      useCases: [
        "Automated legal research and case law analysis",
        "Brief and motion drafting assistance",
        "Client intake and case management",
        "Billing optimization and time tracking",
        "Precedent analysis and citation checking",
      ],
      benefits: ["80% faster research", "50% more billable hours", "Enhanced case outcomes"],
      href: "/industries/law-firms",
    },
    {
      icon: Users,
      title: "B2C Consumer",
      description: "Democratize legal access with AI-powered consumer legal guidance and document preparation.",
      useCases: [
        "Personal legal document creation (wills, contracts)",
        "Consumer rights guidance and protection",
        "Small claims court preparation",
        "Tenant rights and landlord dispute resolution",
        "Family law guidance and mediation support",
      ],
      benefits: ["90% cost savings vs attorneys", "24/7 accessibility", "Plain English explanations"],
      href: "/industries/consumer",
    },
    {
      icon: Landmark,
      title: "Financial Services",
      description: "Navigate complex financial regulations with AI compliance monitoring and risk management.",
      useCases: [
        "Regulatory compliance automation (SOX, GDPR, PCI)",
        "Loan agreement analysis and risk scoring",
        "Anti-money laundering (AML) monitoring",
        "Securities law compliance checking",
        "Financial contract optimization",
      ],
      benefits: ["99% compliance rate", "75% faster loan processing", "Risk reduction by 65%"],
      href: "/industries/financial-services",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Ensure healthcare compliance with AI-powered HIPAA monitoring and medical legal guidance.",
      useCases: [
        "HIPAA compliance monitoring and breach prevention",
        "Medical malpractice risk assessment",
        "Healthcare contract and vendor agreement review",
        "Patient consent form optimization",
        "Medical licensing and credentialing support",
      ],
      benefits: ["100% HIPAA compliance", "$2.5M penalties avoided", "50% faster credentialing"],
      href: "/industries/healthcare",
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Streamline property transactions with AI contract analysis and regulatory compliance.",
      useCases: [
        "Purchase agreement review and risk analysis",
        "Lease agreement optimization and compliance",
        "Title search automation and verification",
        "Zoning and regulatory compliance checking",
        "Property dispute resolution guidance",
      ],
      benefits: ["85% faster closings", "40% fewer disputes", "Comprehensive risk coverage"],
      href: "/industries/real-estate",
    },
    {
      icon: UserCheck,
      title: "Human Resources",
      description: "Optimize HR operations with AI-powered employment law compliance and policy management.",
      useCases: [
        "Employment contract generation and review",
        "Workplace policy compliance monitoring",
        "Discrimination and harassment risk assessment",
        "Benefits administration legal guidance",
        "Termination and severance agreement optimization",
      ],
      benefits: ["90% policy compliance", "70% fewer HR disputes", "Streamlined onboarding"],
      href: "/industries/human-resources",
    },
    {
      icon: Package,
      title: "Procurement & Supply Chain",
      description: "Enhance procurement efficiency with AI contract analysis and supplier risk management.",
      useCases: [
        "Vendor contract analysis and negotiation support",
        "Supply chain compliance monitoring",
        "International trade law guidance",
        "Procurement policy optimization",
        "Supplier risk assessment and mitigation",
      ],
      benefits: ["60% faster procurement cycles", "Enhanced supplier compliance", "Risk mitigation"],
      href: "/industries/procurement",
    },
    {
      icon: Monitor,
      title: "Technology & SaaS",
      description: "Navigate tech regulations with AI-powered privacy compliance and IP protection.",
      useCases: [
        "Privacy policy and terms of service optimization",
        "Data protection compliance (GDPR, CCPA)",
        "Software licensing and IP protection",
        "SaaS agreement template generation",
        "Cybersecurity legal compliance monitoring",
      ],
      benefits: ["Full privacy compliance", "IP protection optimization", "Faster product launches"],
      href: "/industries/technology",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Support educational institutions with AI compliance monitoring and policy management.",
      useCases: [
        "FERPA compliance monitoring and student privacy",
        "Title IX policy management and compliance",
        "Faculty contract and tenure agreement review",
        "Student disciplinary procedure guidance",
        "Educational technology compliance (COPPA, CIPA)",
      ],
      benefits: ["100% regulatory compliance", "Streamlined policy management", "Risk reduction"],
      href: "/industries/education",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Solutions" }]} className="mb-6" />

          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Industry-Specific Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              AI Legal Solutions
              <span className="block text-black">Tailored for Your Industry</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how our AI-powered legal assistant transforms operations across 10 key industries with
              specialized use cases and proven results.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Brain,
                title: "Industry-Specific AI",
                description: "Trained on sector-specific legal requirements and regulations",
              },
              {
                icon: Zap,
                title: "Proven Results",
                description: "Average 70% cost reduction and 95% accuracy across all industries",
              },
              {
                icon: Target,
                title: "Tailored Use Cases",
                description: "3-5 specialized AI applications designed for each industry",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-2 border-black text-center">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-2xl bg-black text-white mb-4">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Solutions by Industry</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore AI-powered legal solutions designed specifically for your industry's unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex p-4 rounded-2xl bg-black text-white group-hover:scale-110 transition-transform">
                      <industry.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-black">{industry.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">{industry.description}</p>

                  <div>
                    <h4 className="font-semibold mb-3 text-black">AI-Powered Use Cases:</h4>
                    <ul className="space-y-2">
                      {industry.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2 text-black text-sm">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
                    <Link href={industry.href} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results Across All Industries</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Consistent performance and measurable outcomes across every sector we serve
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10", label: "Industries Served" },
              { number: "45+", label: "AI Use Cases" },
              { number: "70%", label: "Average Cost Reduction" },
              { number: "95%", label: "Accuracy Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how AI-powered legal solutions can revolutionize your industry's operations and outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg h-auto">
              <Link href="/contact" className="flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg h-auto bg-transparent"
            >
              <Link href="/use-cases">View All Use Cases</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
