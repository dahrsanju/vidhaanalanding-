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
  TrendingUp,
  Clock,
  DollarSign,
  Target,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Assistant Use-Cases | Contracts, Compliance, Litigation & More",
  description:
    "Explore practical use-cases for Vidhaana's AI legal assistant: contract review, compliance monitoring, litigation prep, employment law, and international expansion.",
  alternates: { canonical: "https://vidhaana.com/use-cases" },
}

export default function UseCasesPage() {
  const useCases = [
    {
      icon: Building2,
      title: "Corporate Legal Operations",
      industry: "Corporate Legal",
      description: "Streamline complex corporate legal processes with AI-powered automation and analysis.",
      applications: [
        "Automated M&A due diligence with 80% faster document review",
        "AI-powered contract lifecycle management reducing processing time by 70%",
        "Regulatory compliance monitoring with real-time alerts and updates",
        "Corporate governance policy automation and board resolution drafting",
      ],
      metrics: { time: "80%", cost: "$2.5M", accuracy: "95%" },
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Scale,
      title: "Law Firm Efficiency",
      industry: "Law Firms",
      description: "Enhance legal practice productivity with intelligent research and case management tools.",
      applications: [
        "Automated legal research cutting research time by 75%",
        "AI-assisted brief and motion drafting with precedent analysis",
        "Client intake automation and case management optimization",
        "Billing optimization and time tracking with AI insights",
      ],
      metrics: { time: "75%", cost: "$1.8M", accuracy: "92%" },
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Consumer Legal Access",
      industry: "Consumer Legal",
      description: "Democratize legal services with affordable, accessible AI-powered guidance.",
      applications: [
        "Personal legal document generation (wills, contracts, leases)",
        "Consumer rights guidance with plain English explanations",
        "Small claims court preparation and filing assistance",
        "Family law mediation support and document preparation",
      ],
      metrics: { time: "90%", cost: "$125M", accuracy: "88%" },
      color: "from-green-500 to-green-600",
    },
    {
      icon: Landmark,
      title: "Financial Compliance",
      industry: "Financial Services",
      description: "Navigate complex financial regulations with automated compliance monitoring.",
      applications: [
        "Automated regulatory compliance monitoring (SOX, GDPR, PCI)",
        "Loan agreement risk scoring and analysis automation",
        "Anti-money laundering (AML) transaction monitoring",
        "Securities law compliance checking and reporting",
      ],
      metrics: { time: "85%", cost: "$3.2M", accuracy: "99%" },
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Legal Compliance",
      industry: "Healthcare",
      description: "Ensure healthcare compliance with specialized AI monitoring and risk assessment.",
      applications: [
        "HIPAA compliance monitoring preventing data breaches",
        "Medical malpractice risk assessment and mitigation",
        "Healthcare contract and vendor agreement optimization",
        "Patient consent form automation and compliance checking",
      ],
      metrics: { time: "70%", cost: "$4.1M", accuracy: "100%" },
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Home,
      title: "Real Estate Transactions",
      industry: "Real Estate",
      description: "Accelerate property transactions with intelligent contract analysis and verification.",
      applications: [
        "Purchase agreement analysis with risk identification",
        "Lease agreement optimization and tenant screening",
        "Title search automation and verification processes",
        "Zoning compliance checking and regulatory guidance",
      ],
      metrics: { time: "65%", cost: "$1.5M", accuracy: "93%" },
      color: "from-indigo-500 to-blue-500",
    },
  ]

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Use Cases" }]} className="mb-8" />

          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Real-World AI Applications
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              AI-Powered Legal Use Cases
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                That Drive Results
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover 40+ AI-powered legal use cases across 10 industries, delivering measurable results and
              transforming legal operations with proven impact.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div key={index} className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`w-full h-full bg-gradient-to-br ${useCase.color} rounded-3xl`}></div>
                </div>

                <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Content Section */}
                    <div className="lg:col-span-2 p-8 lg:p-12">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${useCase.color} text-white shadow-lg`}>
                          <useCase.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-black">{useCase.title}</h2>
                          <p className="text-gray-600">{useCase.industry}</p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 mb-8 leading-relaxed">{useCase.description}</p>

                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-black">Key Applications:</h3>
                        <div className="space-y-3">
                          {useCase.applications.map((application, appIndex) => (
                            <div key={appIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 leading-relaxed">{application}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Metrics Section */}
                    <div
                      className={`bg-gradient-to-br ${useCase.color} p-8 lg:p-12 text-white flex flex-col justify-center`}
                    >
                      <h3 className="text-2xl font-bold mb-8">Impact Metrics</h3>

                      <div className="space-y-6">
                        <div className="flex items-center">
                          <Clock className="w-6 h-6 mr-3" />
                          <div>
                            <div className="text-3xl font-bold">{useCase.metrics.time}</div>
                            <div className="text-sm opacity-90">Time Reduction</div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <DollarSign className="w-6 h-6 mr-3" />
                          <div>
                            <div className="text-3xl font-bold">{useCase.metrics.cost}</div>
                            <div className="text-sm opacity-90">Total Savings</div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <Target className="w-6 h-6 mr-3" />
                          <div>
                            <div className="text-3xl font-bold">{useCase.metrics.accuracy}</div>
                            <div className="text-sm opacity-90">Accuracy Rate</div>
                          </div>
                        </div>
                      </div>

                      <Button asChild className="mt-8 bg-white text-black hover:bg-gray-100 transition-all">
                        <Link
                          href={`/industries/${useCase.industry.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex items-center justify-center"
                        >
                          Explore Solutions
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven Impact Across All Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Consistent performance and measurable outcomes that drive real business transformation
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "40+", label: "AI Use Cases", icon: Sparkles },
              { number: "10", label: "Industries Covered", icon: Building2 },
              { number: "75%", label: "Average Time Savings", icon: Clock },
              { number: "95%", label: "Success Rate", icon: TrendingUp },
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
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Ready to Implement These Use Cases?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Start leveraging AI-powered legal solutions today. Our experts will help you identify the best use cases for
            your specific needs and industry requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg shadow-lg">
              <Link href="/contact" className="flex items-center">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/solutions">Explore All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
