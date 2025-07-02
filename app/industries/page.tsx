import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Building2,
  Stethoscope,
  Landmark,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Scale,
  Users,
  Home,
  CheckCircle,
  Star,
  BarChart3,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Services by Industry | Healthcare, Finance, Tech & Manufacturing Legal AI",
  description:
    "Industry-specific AI legal assistance for healthcare, finance, technology, manufacturing, real estate, and more. Tailored legal solutions with proven results across all sectors. Reduce legal costs by 70%.",
  alternates: {
    canonical: "https://vidhaana.com/industries",
  },
}

export default function IndustriesPage() {
  const industries = [
    {
      icon: Building2,
      title: "Corporate Legal",
      description:
        "Streamline corporate legal operations with AI-powered contract management and compliance monitoring.",
      applications: [
        "M&A Due Diligence",
        "Contract Lifecycle Management",
        "Regulatory Compliance",
        "Corporate Governance",
      ],
      benefits: [
        "80% faster due diligence",
        "70% reduction in contract processing",
        "95% compliance accuracy",
        "60% cost savings",
      ],
      caseStudy:
        "Fortune 500 company reduced M&A due diligence time from 6 months to 6 weeks while improving accuracy by 40%.",
      stats: { clients: "5,000+", savings: "$2.5M", rating: 4.9 },
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      icon: Scale,
      title: "Law Firms",
      description:
        "Enhance legal practice efficiency with AI research, case analysis, brief drafting, and client management.",
      applications: ["Legal Research Automation", "Brief & Motion Drafting", "Case Management", "Billing Optimization"],
      benefits: [
        "75% faster legal research",
        "50% increase in billable hours",
        "Enhanced case outcomes",
        "Improved client satisfaction",
      ],
      caseStudy:
        "Mid-size law firm increased billable hours by 40% while reducing research costs by $200,000 annually.",
      stats: { clients: "2,500+", savings: "$1.8M", rating: 4.8 },
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      icon: Users,
      title: "Consumer Legal",
      description: "Democratize legal access with AI-powered consumer legal guidance and document preparation.",
      applications: [
        "Personal Document Creation",
        "Consumer Rights Guidance",
        "Small Claims Support",
        "Family Law Assistance",
      ],
      benefits: [
        "90% cost savings vs attorneys",
        "24/7 legal guidance",
        "Plain English explanations",
        "Instant document generation",
      ],
      caseStudy:
        "Over 50,000 consumers saved an average of $2,500 each on legal services while getting faster resolutions.",
      stats: { clients: "50,000+", savings: "$125M", rating: 4.7 },
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
    {
      icon: Landmark,
      title: "Financial Services",
      description: "Navigate complex financial regulations with AI compliance monitoring and risk management.",
      applications: ["Regulatory Compliance", "Loan Agreement Analysis", "AML Monitoring", "Securities Law Compliance"],
      benefits: [
        "99% regulatory compliance",
        "75% faster loan processing",
        "65% reduction in risks",
        "Automated reporting",
      ],
      caseStudy:
        "Regional bank achieved 100% regulatory compliance and reduced loan processing time by 60% while cutting costs by 45%.",
      stats: { clients: "800+", savings: "$3.2M", rating: 4.9 },
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-100",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Ensure healthcare compliance with AI-powered HIPAA monitoring and malpractice risk assessment.",
      applications: ["HIPAA Compliance", "Malpractice Risk Assessment", "Healthcare Contracts", "Medical Licensing"],
      benefits: [
        "100% HIPAA compliance",
        "$2.5M penalties avoided",
        "50% faster credentialing",
        "Reduced insurance costs",
      ],
      caseStudy:
        "Healthcare network of 200+ providers maintained perfect HIPAA compliance and reduced legal costs by 55%.",
      stats: { clients: "1,200+", savings: "$4.1M", rating: 4.8 },
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-100",
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Streamline property transactions with AI contract analysis and regulatory compliance checking.",
      applications: [
        "Purchase Agreement Analysis",
        "Lease Optimization",
        "Title Search Automation",
        "Zoning Compliance",
      ],
      benefits: ["85% faster closings", "40% fewer disputes", "Comprehensive risk coverage", "Automated compliance"],
      caseStudy:
        "Real estate firm reduced average closing time from 45 to 15 days while eliminating 60% of post-closing disputes.",
      stats: { clients: "3,000+", savings: "$1.5M", rating: 4.6 },
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-100",
    },
  ]

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Industries" }]} className="mb-8" />

          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Industry-Specific AI Legal Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Revolutionizing Legal Operations
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Across Every Industry
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Industry-specific AI-powered legal assistance tailored for your sector's unique challenges, regulations,
              and requirements. Proven results across 10+ industries.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${industry.bgColor} p-1`}
              >
                <div className="bg-white rounded-3xl p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${industry.color} text-white shadow-lg`}>
                          <industry.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-black">{industry.title}</h2>
                          <div className="flex items-center mt-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-gray-600 ml-1">{industry.stats.rating} rating</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">{industry.description}</p>

                      {/* Applications */}
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3 text-black">Key Applications:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {industry.applications.map((app, appIndex) => (
                            <div key={appIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                              {app}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-8">
                        <h3 className="font-semibold mb-3 text-black">Industry Benefits:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {industry.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <TrendingUp className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        asChild
                        className={`bg-gradient-to-r ${industry.color} text-white hover:shadow-lg transition-all`}
                      >
                        <Link
                          href={`/industries/${industry.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex items-center"
                        >
                          Explore {industry.title} Solutions
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>

                    {/* Stats & Case Study */}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      {/* Stats Cards */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center">
                          <BarChart3 className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                          <div className="text-lg font-bold text-black">{industry.stats.clients}</div>
                          <div className="text-xs text-gray-600">Clients Served</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center">
                          <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                          <div className="text-lg font-bold text-black">{industry.stats.savings}</div>
                          <div className="text-xs text-gray-600">Total Savings</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center">
                          <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2 fill-current" />
                          <div className="text-lg font-bold text-black">{industry.stats.rating}</div>
                          <div className="text-xs text-gray-600">Client Rating</div>
                        </div>
                      </div>

                      {/* Case Study */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="flex items-center mb-4">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                          <h4 className="font-semibold text-black">Success Story</h4>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed italic">"{industry.caseStudy}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted Across All Industries</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Consistent results and proven success across every sector we serve
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Industries Served", icon: Building2 },
              { number: "70%", label: "Average Cost Reduction", icon: TrendingUp },
              { number: "95%", label: "Compliance Rate", icon: CheckCircle },
              { number: "62,500+", label: "Businesses Helped", icon: Users },
            ].map((stat, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get industry-specific legal assistance tailored to your unique business needs and regulatory requirements.
            Join thousands of satisfied clients across all industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg shadow-lg">
              <Link href="/contact" className="flex items-center">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/solutions">View All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
