import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Brain,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  BarChart3,
  Clock,
  Sparkles,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Platform | Comprehensive Legal Technology Solution | Vidhaana",
  description:
    "Discover Vidhaana's comprehensive AI legal platform. Advanced artificial intelligence for legal research, document analysis, compliance monitoring, and legal workflow automation. Transform your legal operations.",
  keywords: [
    "AI legal platform",
    "legal technology solution",
    "comprehensive legal AI",
    "legal workflow automation",
    "AI legal suite",
    "legal technology platform",
    "artificial intelligence legal",
    "legal AI solution",
    "legal technology stack",
    "AI legal ecosystem",
  ],
  alternates: {
    canonical: "https://vidhaana.com/solutions/ai-platform",
  },
}

export default function AIPlatformPage() {
  const platformFeatures = [
    {
      icon: Brain,
      title: "Advanced AI Engine",
      description:
        "State-of-the-art natural language processing and machine learning algorithms designed specifically for legal applications.",
      capabilities: [
        "Legal language understanding",
        "Context-aware analysis",
        "Predictive modeling",
        "Continuous learning",
      ],
      benefits: "99.5% accuracy in legal document analysis",
    },
    {
      icon: Zap,
      title: "Unified Workflow Integration",
      description:
        "Seamlessly integrate all legal processes into one comprehensive platform with intelligent automation.",
      capabilities: ["Process automation", "Workflow orchestration", "Task prioritization", "Smart notifications"],
      benefits: "85% reduction in manual legal tasks",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption, ensuring complete confidentiality of legal matters.",
      capabilities: ["AES-256 encryption", "Zero-trust architecture", "Audit trail logging", "Compliance monitoring"],
      benefits: "SOC 2 Type II certified security",
    },
    {
      icon: Globe,
      title: "Multi-Jurisdictional Intelligence",
      description: "Comprehensive legal knowledge spanning 50+ jurisdictions with real-time regulatory updates.",
      capabilities: [
        "Global legal database",
        "Jurisdiction-specific rules",
        "Real-time updates",
        "Cross-border compliance",
      ],
      benefits: "Coverage across 50+ countries and jurisdictions",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Powerful analytics and reporting tools that provide actionable insights into legal operations.",
      capabilities: ["Performance dashboards", "Predictive analytics", "Cost optimization", "Risk assessment"],
      benefits: "40% improvement in legal decision-making",
    },
    {
      icon: Users,
      title: "Collaborative Workspace",
      description: "Modern collaboration tools designed for legal teams with role-based access and real-time updates.",
      capabilities: ["Team collaboration", "Role-based permissions", "Real-time updates", "Communication tools"],
      benefits: "60% faster team collaboration",
    },
  ]

  const integrations = [
    { name: "Microsoft Office 365", category: "Productivity" },
    { name: "Google Workspace", category: "Productivity" },
    { name: "Salesforce", category: "CRM" },
    { name: "DocuSign", category: "E-Signature" },
    { name: "Slack", category: "Communication" },
    { name: "Zoom", category: "Video Conferencing" },
    { name: "SharePoint", category: "Document Management" },
    { name: "Box", category: "Cloud Storage" },
  ]

  const useCases = [
    {
      title: "Large Law Firms",
      description: "Streamline operations across multiple practice areas with unified AI platform",
      metrics: { efficiency: "75%", cost: "$2.5M", time: "60%" },
    },
    {
      title: "Corporate Legal Departments",
      description: "Centralize legal operations with comprehensive compliance and contract management",
      metrics: { efficiency: "80%", cost: "$1.8M", time: "70%" },
    },
    {
      title: "Government Agencies",
      description: "Enhance regulatory compliance and public sector legal operations",
      metrics: { efficiency: "65%", cost: "$3.2M", time: "55%" },
    },
    {
      title: "Legal Service Providers",
      description: "Scale legal services delivery with AI-powered automation and insights",
      metrics: { efficiency: "85%", cost: "$1.2M", time: "75%" },
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Solutions", href: "/solutions" }, { label: "AI Legal Platform" }]}
            className="mb-8"
          />

          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Comprehensive AI Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              The Complete AI Legal
              <span className="block text-black">Technology Platform</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your entire legal operation with our comprehensive AI platform. From document analysis to
              compliance monitoring, experience the future of legal technology in one unified solution.
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

      {/* Platform Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Comprehensive Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for modern legal operations in one integrated platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="border-2 border-black hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <div className="inline-flex p-3 rounded-2xl bg-black text-white mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-black">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-black">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {feature.capabilities.map((capability, capIndex) => (
                        <li key={capIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-black mr-2 flex-shrink-0 mt-0.5" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto bg-gray-50 border-l-4 border-black p-3 rounded-r-lg">
                    <p className="text-sm font-medium text-black">{feature.benefits}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Platform Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how different organizations leverage our AI platform for transformative results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-2 border-black">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">{useCase.metrics.efficiency}</div>
                      <div className="text-sm text-gray-600">Efficiency Gain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">{useCase.metrics.cost}</div>
                      <div className="text-sm text-gray-600">Annual Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">{useCase.metrics.time}</div>
                      <div className="text-sm text-gray-600">Time Reduction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Seamless Integrations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with your existing tools and workflows for a unified legal technology ecosystem
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <div className="w-6 h-6 bg-black rounded"></div>
                  </div>
                  <h4 className="font-semibold text-black text-sm">{integration.name}</h4>
                  <p className="text-xs text-gray-600">{integration.category}</p>
                </CardContent>
              </Card>
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
            {[
              { number: "10,000+", label: "Active Users", icon: Users },
              { number: "50M+", label: "Documents Processed", icon: BarChart3 },
              { number: "99.5%", label: "Platform Uptime", icon: Clock },
              { number: "85%", label: "Efficiency Improvement", icon: TrendingUp },
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

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to Transform Your Legal Operations?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the power of our comprehensive AI legal platform with a personalized demo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
