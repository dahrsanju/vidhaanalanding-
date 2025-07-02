import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Building2,
  Stethoscope,
  Landmark,
  CheckCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Scale,
  Users,
  Home,
  UserCheck,
  Package,
  Monitor,
  GraduationCap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Services by Industry | Healthcare, Finance, Tech & Manufacturing Legal AI",
  description:
    "Industry-specific AI legal assistance for healthcare, finance, technology, manufacturing, real estate, and more. Tailored legal solutions with proven results across all sectors. Reduce legal costs by 70%.",
  keywords: [
    "AI legal services by industry",
    "healthcare legal AI",
    "financial services legal compliance",
    "technology law AI",
    "manufacturing legal assistance",
    "real estate law AI",
    "corporate legal AI",
    "industry-specific legal services",
    "legal compliance by sector",
    "business legal AI solutions",
    "healthcare HIPAA compliance AI",
    "fintech legal compliance",
    "e-commerce legal AI",
    "transportation law AI",
  ],
  openGraph: {
    title: "AI Legal Services by Industry | Healthcare, Finance, Tech & More",
    description: "Industry-specific AI legal assistance tailored for your sector's unique challenges and requirements.",
    url: "https://vidhaana.com/industries",
  },
  alternates: {
    canonical: "https://vidhaana.com/industries",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Industries We Serve",
  description: "AI-powered legal assistance tailored for different industries and sectors",
  url: "https://vidhaana.com/industries",
  mainEntity: {
    "@type": "ItemList",
    name: "Industries Served",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Healthcare Legal AI",
        description: "HIPAA compliance and medical legal assistance",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Financial Services Legal AI",
        description: "Banking regulations and securities law compliance",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Technology Legal AI",
        description: "IP protection and tech startup legal guidance",
      },
    ],
  },
}

export default function IndustriesPage() {
  const industries = [
    {
      icon: Building2,
      title: "Corporate Legal",
      description:
        "Streamline corporate legal operations with AI-powered contract management, M&A support, and compliance monitoring.",
      applications: [
        "M&A Due Diligence",
        "Contract Lifecycle Management",
        "Regulatory Compliance",
        "Corporate Governance",
      ],
      benefits: [
        "80% faster due diligence processes",
        "70% reduction in contract processing time",
        "95% compliance accuracy rate",
        "60% cost savings on legal operations",
      ],
      caseStudy:
        "A Fortune 500 company reduced M&A due diligence time from 6 months to 6 weeks while improving accuracy by 40%.",
      color: "blue-500",
    },
    {
      icon: Scale,
      title: "Law Firms",
      description:
        "Enhance legal practice efficiency with AI research, case analysis, brief drafting, and client management tools.",
      applications: ["Legal Research Automation", "Brief & Motion Drafting", "Case Management", "Billing Optimization"],
      benefits: [
        "75% faster legal research",
        "50% increase in billable hours",
        "Enhanced case outcome quality",
        "Improved client satisfaction",
      ],
      caseStudy:
        "A mid-size law firm increased their billable hours by 40% while reducing research costs by $200,000 annually.",
      color: "purple-500",
    },
    {
      icon: Users,
      title: "B2C Consumer",
      description:
        "Democratize legal access with AI-powered consumer legal guidance, document preparation, and dispute resolution.",
      applications: [
        "Personal Document Creation",
        "Consumer Rights Guidance",
        "Small Claims Support",
        "Family Law Assistance",
      ],
      benefits: [
        "90% cost savings vs traditional attorneys",
        "24/7 legal guidance availability",
        "Plain English legal explanations",
        "Instant document generation",
      ],
      caseStudy:
        "Over 50,000 consumers have saved an average of $2,500 each on legal services while getting faster resolutions.",
      color: "green-500",
    },
    {
      icon: Landmark,
      title: "Financial Services",
      description:
        "Navigate complex financial regulations with AI compliance monitoring, risk management, and contract optimization.",
      applications: ["Regulatory Compliance", "Loan Agreement Analysis", "AML Monitoring", "Securities Law Compliance"],
      benefits: [
        "99% regulatory compliance rate",
        "75% faster loan processing",
        "65% reduction in compliance risks",
        "Automated regulatory reporting",
      ],
      caseStudy:
        "A regional bank achieved 100% regulatory compliance and reduced loan processing time by 60% while cutting costs by 45%.",
      color: "yellow-500",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description:
        "Ensure healthcare compliance with AI-powered HIPAA monitoring, malpractice risk assessment, and contract management.",
      applications: ["HIPAA Compliance", "Malpractice Risk Assessment", "Healthcare Contracts", "Medical Licensing"],
      benefits: [
        "100% HIPAA compliance achievement",
        "$2.5M in penalties avoided",
        "50% faster credentialing processes",
        "Reduced malpractice insurance costs",
      ],
      caseStudy:
        "A healthcare network of 200+ providers maintained perfect HIPAA compliance and reduced legal costs by 55%.",
      color: "red-500",
    },
    {
      icon: Home,
      title: "Real Estate",
      description:
        "Streamline property transactions with AI contract analysis, title verification, and regulatory compliance checking.",
      applications: [
        "Purchase Agreement Analysis",
        "Lease Optimization",
        "Title Search Automation",
        "Zoning Compliance",
      ],
      benefits: [
        "85% faster property closings",
        "40% reduction in transaction disputes",
        "Comprehensive risk coverage",
        "Automated compliance checking",
      ],
      caseStudy:
        "A real estate firm reduced average closing time from 45 to 15 days while eliminating 60% of post-closing disputes.",
      color: "orange-500",
    },
    {
      icon: UserCheck,
      title: "Human Resources",
      description:
        "Optimize HR operations with AI-powered employment law compliance, policy management, and contract generation.",
      applications: [
        "Employment Contracts",
        "Policy Compliance",
        "Discrimination Risk Assessment",
        "Benefits Administration",
      ],
      benefits: [
        "90% improvement in policy compliance",
        "70% reduction in HR-related disputes",
        "Streamlined onboarding processes",
        "Automated benefits compliance",
      ],
      caseStudy:
        "An enterprise company reduced HR legal issues by 80% and improved employee satisfaction scores by 25%.",
      color: "pink-500",
    },
    {
      icon: Package,
      title: "Procurement & Supply Chain",
      description:
        "Enhance procurement efficiency with AI contract analysis, supplier risk management, and compliance monitoring.",
      applications: [
        "Vendor Contract Analysis",
        "Supply Chain Compliance",
        "Trade Law Guidance",
        "Supplier Risk Assessment",
      ],
      benefits: [
        "60% faster procurement cycles",
        "Enhanced supplier compliance",
        "Reduced supply chain risks",
        "Automated contract negotiations",
      ],
      caseStudy:
        "A manufacturing company reduced procurement cycle time by 50% and improved supplier compliance by 85%.",
      color: "indigo-500",
    },
    {
      icon: Monitor,
      title: "Technology & SaaS",
      description:
        "Navigate tech regulations with AI-powered privacy compliance, IP protection, and software licensing management.",
      applications: [
        "Privacy Policy Optimization",
        "Data Protection Compliance",
        "IP Protection",
        "Software Licensing",
      ],
      benefits: [
        "Full GDPR and CCPA compliance",
        "Optimized IP protection strategies",
        "Faster product launch cycles",
        "Reduced regulatory risks",
      ],
      caseStudy:
        "A SaaS company achieved full privacy compliance across 15 jurisdictions and reduced legal review time by 70%.",
      color: "cyan-500",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Support educational institutions with AI compliance monitoring, policy management, and student privacy protection.",
      applications: [
        "FERPA Compliance",
        "Title IX Management",
        "Faculty Contracts",
        "Educational Technology Compliance",
      ],
      benefits: [
        "100% regulatory compliance",
        "Streamlined policy management",
        "Enhanced student privacy protection",
        "Reduced administrative burden",
      ],
      caseStudy:
        "A university system achieved perfect compliance across all campuses and reduced administrative legal costs by 45%.",
      color: "emerald-500",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-white pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Industry-Specific Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                Industries We Serve with
                <span className="block text-black">AI Legal Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Industry-specific AI-powered legal assistance tailored for your sector's unique challenges, regulations,
                and requirements
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-${industry.color} text-white group-hover:scale-110 transition-transform`}
                      >
                        <industry.icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-black">{industry.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">{industry.description}</p>

                    <div>
                      <h4 className="font-semibold mb-3 text-black">Key Applications:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {industry.applications.map((app, appIndex) => (
                          <li key={appIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-black">Industry Benefits:</h4>
                      <ul className="space-y-2">
                        {industry.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                      <h4 className="font-semibold mb-2 text-sm text-blue-800 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Success Story:
                      </h4>
                      <p className="text-sm text-blue-700 leading-relaxed">{industry.caseStudy}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white text-white bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted Across All Industries</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Consistent results and proven success across every sector
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "10+", label: "Industries Served" },
                { number: "70%", label: "Average Cost Reduction" },
                { number: "95%", label: "Compliance Rate" },
                { number: "10,000+", label: "Businesses Helped" },
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
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Ready to Transform Your Industry with
              <span className="block text-black">AI Legal Solutions?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Get industry-specific legal assistance tailored to your unique business needs and regulatory requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
