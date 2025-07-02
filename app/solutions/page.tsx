import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Brain,
  FileText,
  Shield,
  BarChart3,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  Globe,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Solutions | Comprehensive Legal Technology Platform | Vidhaana",
  description:
    "Discover Vidhaana's comprehensive AI legal solutions: document intelligence, compliance automation, legal analytics, contract management, and risk assessment. Transform your legal operations with cutting-edge AI technology.",
  keywords: [
    "AI legal solutions",
    "legal technology platform",
    "document intelligence",
    "compliance automation",
    "legal analytics",
    "contract management AI",
    "legal risk assessment",
    "AI legal platform",
    "legal workflow automation",
    "legal technology solutions",
  ],
  alternates: {
    canonical: "https://vidhaana.com/solutions",
  },
}

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Brain,
      title: "AI Legal Platform",
      description:
        "Comprehensive AI-powered legal technology platform that unifies all your legal operations in one intelligent system.",
      features: [
        "Unified legal workflow management",
        "Advanced AI engine with 99.5% accuracy",
        "Multi-jurisdictional legal intelligence",
        "Enterprise-grade security and compliance",
      ],
      benefits: "85% reduction in manual legal tasks",
      href: "/solutions/ai-platform",
      color: "bg-white border-gray-300",
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description:
        "Advanced AI document analysis and processing that transforms how you handle legal documents and contracts.",
      features: [
        "Automated contract review and analysis",
        "Risk identification and scoring",
        "Clause extraction and comparison",
        "Version control and change tracking",
      ],
      benefits: "10x faster document processing",
      href: "/solutions/document-intelligence",
      color: "bg-gray-50 border-gray-400",
    },
    {
      icon: Shield,
      title: "Compliance Automation",
      description:
        "Intelligent compliance monitoring and automation that ensures regulatory adherence across all jurisdictions.",
      features: [
        "Real-time regulatory monitoring",
        "Automated compliance checking",
        "Risk alert notifications",
        "Audit trail generation",
      ],
      benefits: "99% compliance accuracy",
      href: "/solutions/compliance-automation",
      color: "bg-white border-gray-300",
    },
    {
      icon: BarChart3,
      title: "Legal Analytics",
      description:
        "Powerful analytics and insights platform that transforms legal data into actionable business intelligence.",
      features: [
        "Performance dashboards and metrics",
        "Predictive legal analytics",
        "Cost optimization insights",
        "Custom reporting and visualization",
      ],
      benefits: "40% improvement in legal decision-making",
      href: "/solutions/legal-analytics",
      color: "bg-gray-50 border-gray-400",
    },
    {
      icon: Zap,
      title: "Contract Management",
      description: "End-to-end contract lifecycle management with AI-powered automation and intelligent insights.",
      features: [
        "Contract creation and templates",
        "Automated renewal tracking",
        "Performance monitoring",
        "Vendor management integration",
      ],
      benefits: "75% faster contract cycles",
      href: "/solutions/contract-management",
      color: "bg-white border-gray-300",
    },
    {
      icon: Target,
      title: "Risk Assessment",
      description:
        "Proactive risk identification and mitigation powered by advanced AI analysis and predictive modeling.",
      features: [
        "Risk scoring algorithms",
        "Predictive risk modeling",
        "Mitigation strategy recommendations",
        "Risk monitoring dashboards",
      ],
      benefits: "85% risk reduction",
      href: "/solutions/risk-assessment",
      color: "bg-gray-50 border-gray-400",
    },
  ]

  const industries = [
    { name: "Corporate Legal", clients: "5,000+", savings: "$2.5M" },
    { name: "Law Firms", clients: "2,500+", savings: "$1.8M" },
    { name: "Healthcare", clients: "1,200+", savings: "$4.1M" },
    { name: "Financial Services", clients: "800+", savings: "$3.2M" },
    { name: "Real Estate", clients: "3,000+", savings: "$1.5M" },
    { name: "Technology", clients: "1,500+", savings: "$2.1M" },
  ]

  const stats = [
    { number: "10,000+", label: "Active Users", icon: Users },
    { number: "50M+", label: "Documents Processed", icon: FileText },
    { number: "50+", label: "Jurisdictions", icon: Globe },
    { number: "95%", label: "Accuracy Rate", icon: Target },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Solutions" }]} className="mb-8" />

          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-sm font-medium mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Comprehensive AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Transform Legal Operations
              <span className="block text-black">with AI Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover our comprehensive suite of AI-powered legal solutions designed to revolutionize how legal
              professionals work, from document analysis to compliance monitoring and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Complete AI Legal Solution Suite</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six integrated solutions that work together to transform your entire legal operation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className={`${solution.color} border-2 hover:shadow-xl transition-all duration-300 h-full`}
              >
                <CardHeader>
                  <div className="inline-flex p-3 rounded-2xl bg-black text-white mb-4">
                    <solution.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-black">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-black">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-black mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto space-y-4">
                    <div className="bg-black text-white p-3 rounded-lg">
                      <p className="text-sm font-medium">{solution.benefits}</p>
                    </div>

                    <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
                      <Link href={solution.href} className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Proven Results Across Industries</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our solutions deliver measurable impact across diverse legal sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-black mb-4">{industry.name}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-black">{industry.clients}</div>
                      <div className="text-sm text-gray-600">Clients Served</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-black">{industry.savings}</div>
                      <div className="text-sm text-gray-600">Average Savings</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">How Our Solutions Work Together</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Integrated AI solutions that create a seamless legal technology ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Assessment & Planning",
                description: "Analyze your current legal operations and identify optimization opportunities",
              },
              {
                step: "2",
                title: "Solution Integration",
                description: "Deploy and integrate AI solutions tailored to your specific needs",
              },
              {
                step: "3",
                title: "Training & Adoption",
                description: "Comprehensive training and change management for seamless adoption",
              },
              {
                step: "4",
                title: "Optimization & Growth",
                description: "Continuous optimization and expansion of AI capabilities",
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

      {/* Stats */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Performance</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results across thousands of legal professionals worldwide
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

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to Transform Your Legal Operations?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover how our comprehensive AI solutions can revolutionize your legal practice. Schedule a personalized
            demo to see the technology in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg shadow-lg">
              <Link href="/contact" className="flex items-center">
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
