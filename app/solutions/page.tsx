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

export default function SolutionsPage() {
  const industries = [
    {
      icon: Building2,
      title: "Corporate Legal",
      description: "Streamline corporate operations with AI contract management and compliance monitoring.",
      keyFeatures: ["M&A Due Diligence", "Contract Lifecycle Management", "Regulatory Compliance"],
      benefits: "70% faster contract processing, 95% compliance accuracy",
      href: "/industries/corporate-legal",
    },
    {
      icon: Scale,
      title: "Law Firms",
      description: "Enhance legal practice efficiency with AI research, case analysis, and client management.",
      keyFeatures: ["Legal Research Automation", "Brief Drafting", "Case Management"],
      benefits: "80% faster research, 50% more billable hours",
      href: "/industries/law-firms",
    },
    {
      icon: Users,
      title: "Consumer Legal",
      description: "Democratize legal access with AI-powered consumer guidance and document preparation.",
      keyFeatures: ["Personal Document Creation", "Consumer Rights Guidance", "Small Claims Support"],
      benefits: "90% cost savings vs attorneys, 24/7 accessibility",
      href: "/industries/consumer",
    },
    {
      icon: Landmark,
      title: "Financial Services",
      description: "Navigate complex regulations with AI compliance monitoring and risk management.",
      keyFeatures: ["Regulatory Compliance", "Loan Agreement Analysis", "AML Monitoring"],
      benefits: "99% compliance rate, 75% faster loan processing",
      href: "/industries/financial-services",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Ensure healthcare compliance with AI-powered HIPAA monitoring and risk assessment.",
      keyFeatures: ["HIPAA Compliance", "Malpractice Risk Assessment", "Healthcare Contracts"],
      benefits: "100% HIPAA compliance, $2.5M penalties avoided",
      href: "/industries/healthcare",
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Streamline property transactions with AI contract analysis and compliance checking.",
      keyFeatures: ["Purchase Agreement Analysis", "Lease Optimization", "Title Search Automation"],
      benefits: "85% faster closings, 40% fewer disputes",
      href: "/industries/real-estate",
    },
  ]

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero - Compact */}
      <section className="pt-28 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Solutions" }]} className="mb-6" />

          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Industry-Specific Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              AI Legal Solutions
              <span className="block text-black">Tailored for Your Industry</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Discover how our AI-powered legal assistant transforms operations across key industries with specialized
              use cases and proven results.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits - Compact */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Brain,
                title: "Industry-Specific AI",
                description: "Trained on sector-specific legal requirements",
              },
              {
                icon: Zap,
                title: "Proven Results",
                description: "Average 70% cost reduction across all industries",
              },
              {
                icon: Target,
                title: "Tailored Use Cases",
                description: "Specialized AI applications for each sector",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-2 border-black text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-2xl bg-black text-white mb-4">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid - Compact */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Solutions by Industry</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore AI-powered legal solutions designed specifically for your industry's unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="border-2 border-black hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex p-3 rounded-2xl bg-black text-white group-hover:scale-110 transition-transform">
                      <industry.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black">{industry.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2 text-black text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {industry.keyFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs font-medium text-black">{industry.benefits}</p>
                  </div>

                  <Button asChild className="w-full bg-black text-white hover:bg-gray-800 text-sm">
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

      {/* Stats - Compact */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Proven Results Across All Industries</h2>
            <p className="text-lg text-gray-300">Consistent performance and measurable outcomes</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "10", label: "Industries Served" },
              { number: "45+", label: "AI Use Cases" },
              { number: "70%", label: "Average Cost Reduction" },
              { number: "95%", label: "Accuracy Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Compact */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Transform Your Industry?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how AI-powered legal solutions can revolutionize your industry's operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3">
              <Link href="/contact" className="flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 bg-transparent"
            >
              <Link href="/use-cases">View Use Cases</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
