import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Building2,
  Scale,
  Users,
  Landmark,
  Stethoscope,
  Home,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Brain,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Solutions by Industry | Corporate, Healthcare, Finance & More",
  description:
    "Comprehensive AI-powered legal solutions tailored for corporate legal, law firms, healthcare, financial services, real estate, HR, procurement, technology, and education sectors.",
  alternates: { canonical: "https://vidhaana.com/solutions" },
}

export default function SolutionsPage() {
  const industries = [
    {
      icon: Building2,
      title: "Corporate Legal",
      description: "Streamline corporate operations with AI contract management and compliance monitoring.",
      keyFeatures: [
        "M&A Due Diligence",
        "Contract Lifecycle Management",
        "Regulatory Compliance",
        "Corporate Governance",
      ],
      benefits: "70% faster contract processing, 95% compliance accuracy",
      stats: { clients: "5,000+", savings: "$2.5M", efficiency: "80%" },
      color: "from-blue-500 to-blue-600",
      href: "/industries/corporate-legal",
    },
    {
      icon: Scale,
      title: "Law Firms",
      description: "Enhance legal practice efficiency with AI research, case analysis, and client management.",
      keyFeatures: ["Legal Research Automation", "Brief Drafting", "Case Management", "Billing Optimization"],
      benefits: "80% faster research, 50% more billable hours",
      stats: { clients: "2,500+", savings: "$1.8M", efficiency: "75%" },
      color: "from-purple-500 to-purple-600",
      href: "/industries/law-firms",
    },
    {
      icon: Users,
      title: "Consumer Legal",
      description: "Democratize legal access with AI-powered consumer guidance and document preparation.",
      keyFeatures: [
        "Personal Document Creation",
        "Consumer Rights Guidance",
        "Small Claims Support",
        "Family Law Assistance",
      ],
      benefits: "90% cost savings vs attorneys, 24/7 accessibility",
      stats: { clients: "50,000+", savings: "$125M", efficiency: "95%" },
      color: "from-green-500 to-green-600",
      href: "/industries/consumer",
    },
    {
      icon: Landmark,
      title: "Financial Services",
      description: "Navigate complex regulations with AI compliance monitoring and risk management.",
      keyFeatures: ["Regulatory Compliance", "Loan Agreement Analysis", "AML Monitoring", "Securities Law Compliance"],
      benefits: "99% compliance rate, 75% faster loan processing",
      stats: { clients: "800+", savings: "$3.2M", efficiency: "85%" },
      color: "from-yellow-500 to-orange-500",
      href: "/industries/financial-services",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Ensure healthcare compliance with AI-powered HIPAA monitoring and risk assessment.",
      keyFeatures: ["HIPAA Compliance", "Malpractice Risk Assessment", "Healthcare Contracts", "Medical Licensing"],
      benefits: "100% HIPAA compliance, $2.5M penalties avoided",
      stats: { clients: "1,200+", savings: "$4.1M", efficiency: "90%" },
      color: "from-red-500 to-pink-500",
      href: "/industries/healthcare",
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Streamline property transactions with AI contract analysis and compliance checking.",
      keyFeatures: [
        "Purchase Agreement Analysis",
        "Lease Optimization",
        "Title Search Automation",
        "Zoning Compliance",
      ],
      benefits: "85% faster closings, 40% fewer disputes",
      stats: { clients: "3,000+", savings: "$1.5M", efficiency: "70%" },
      color: "from-indigo-500 to-blue-500",
      href: "/industries/real-estate",
    },
  ]

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Solutions" }]} className="mb-8" />

          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Industry-Specific AI Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Transform Your Industry with
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Legal Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover how our AI-powered legal assistant revolutionizes operations across industries with specialized
              solutions, proven results, and measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Brain,
                title: "Industry-Specific AI",
                description: "Trained on sector-specific legal requirements and regulations",
                metric: "50+ Industries",
              },
              {
                icon: Zap,
                title: "Proven Results",
                description: "Average 70% cost reduction across all industries",
                metric: "$500M+ Saved",
              },
              {
                icon: Target,
                title: "Tailored Solutions",
                description: "Specialized AI applications for each sector",
                metric: "200+ Use Cases",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-black text-white mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="text-2xl font-bold text-black">{benefit.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Solutions by Industry</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore AI-powered legal solutions designed specifically for your industry's unique challenges and
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                ></div>

                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${industry.color} text-white group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <industry.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black">{industry.title}</h3>
                      <p className="text-gray-600">{industry.stats.clients} clients served</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">{industry.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-black">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.keyFeatures.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-lg font-bold text-black">{industry.stats.savings}</div>
                      <div className="text-xs text-gray-600">Total Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-black">{industry.stats.efficiency}</div>
                      <div className="text-xs text-gray-600">Efficiency Gain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-black">{industry.stats.clients}</div>
                      <div className="text-xs text-gray-600">Happy Clients</div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl mb-6 border-l-4 border-blue-500">
                    <p className="text-sm font-medium text-blue-800">{industry.benefits}</p>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${industry.color} text-white hover:shadow-lg transition-all`}
                  >
                    <Link href={industry.href} className="flex items-center justify-center">
                      Explore Solutions
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven Impact Across All Industries</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Consistent performance and measurable outcomes that drive real business value
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10", label: "Industries Served", icon: Building2 },
              { number: "200+", label: "AI Use Cases", icon: Brain },
              { number: "70%", label: "Average Cost Reduction", icon: TrendingUp },
              { number: "95%", label: "Accuracy Rate", icon: Target },
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
            Join thousands of businesses already revolutionizing their legal operations with AI-powered solutions
            tailored specifically for their industry.
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
              <Link href="/use-cases">Explore Use Cases</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
