import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Brain,
  Search,
  MessageSquare,
  FileCheck,
  Shield,
  Globe,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Target,
  Clock,
  BarChart3,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Assistant Features | Advanced Legal Technology Capabilities | Vidhaana",
  description:
    "Explore Vidhaana's advanced AI legal features: natural language processing, comprehensive legal research, document analysis, enterprise security, and multi-jurisdictional support. 95% accuracy guaranteed.",
  keywords: [
    "AI legal features",
    "legal technology capabilities",
    "AI document analysis",
    "legal research automation",
    "legal AI technology",
    "artificial intelligence legal",
    "legal workflow automation",
    "legal compliance AI",
    "contract analysis AI",
    "legal analytics platform",
  ],
  alternates: {
    canonical: "https://vidhaana.com/features",
  },
}

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: Brain,
      title: "Advanced Natural Language Processing",
      description:
        "State-of-the-art AI that understands legal language with human-like comprehension and context awareness.",
      highlights: [
        "95% accuracy in legal document analysis",
        "Support for 25+ languages",
        "Context-aware interpretation",
        "Legal terminology recognition",
      ],
      benefits: "Process legal documents 10x faster with unprecedented accuracy",
      color: "bg-white border-gray-300",
    },
    {
      icon: Search,
      title: "Comprehensive Legal Research",
      description: "Access vast legal databases with AI-powered search and analysis across multiple jurisdictions.",
      highlights: [
        "50+ jurisdictions covered",
        "10M+ case law database",
        "Real-time legal updates",
        "Precedent identification",
      ],
      benefits: "Reduce research time by 80% while improving thoroughness",
      color: "bg-gray-50 border-gray-400",
    },
    {
      icon: MessageSquare,
      title: "Interactive Legal Consultation",
      description:
        "24/7 AI-powered legal guidance that adapts to your specific situation and provides personalized advice.",
      highlights: [
        "24/7 availability",
        "Instant responses (<1 second)",
        "Personalized guidance",
        "98% user satisfaction",
      ],
      benefits: "Get immediate legal guidance anytime, anywhere",
      color: "bg-white border-gray-300",
    },
    {
      icon: FileCheck,
      title: "Document Analysis & Review",
      description:
        "Automated analysis of legal documents with comprehensive risk assessment and improvement suggestions.",
      highlights: ["10x faster processing", "97% accuracy rate", "99% risk detection", "Automated compliance checking"],
      benefits: "Transform document review from hours to minutes",
      color: "bg-gray-50 border-gray-400",
    },
    {
      icon: Shield,
      title: "Enterprise Security & Privacy",
      description: "Bank-level security with end-to-end encryption ensuring complete confidentiality of legal matters.",
      highlights: [
        "AES-256 encryption",
        "SOC 2 Type II compliance",
        "99.9% uptime guarantee",
        "Zero-trust architecture",
      ],
      benefits: "Maintain absolute security and regulatory compliance",
      color: "bg-white border-gray-300",
    },
    {
      icon: Globe,
      title: "Multi-Jurisdictional Support",
      description:
        "Legal guidance across different jurisdictions with awareness of local laws and international regulations.",
      highlights: [
        "50+ countries supported",
        "All US states covered",
        "1M+ legal provisions",
        "Cross-border expertise",
      ],
      benefits: "Navigate complex multi-jurisdictional legal requirements",
      color: "bg-gray-50 border-gray-400",
    },
  ]

  const additionalFeatures = [
    {
      icon: BarChart3,
      title: "Legal Analytics & Insights",
      description: "Advanced analytics providing actionable insights into legal operations and performance metrics.",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Intelligent automation of routine legal tasks and processes to improve efficiency.",
    },
    {
      icon: Target,
      title: "Risk Assessment",
      description: "Proactive risk identification and mitigation strategies powered by AI analysis.",
    },
    {
      icon: Clock,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring of legal compliance and regulatory changes.",
    },
  ]

  const comparisonData = [
    {
      feature: "Document Processing Speed",
      traditional: "Hours to days",
      vidhaana: "Minutes",
      improvement: "10x faster",
    },
    {
      feature: "Research Accuracy",
      traditional: "Variable (70-85%)",
      vidhaana: "95% consistent",
      improvement: "15% better",
    },
    {
      feature: "Cost per Analysis",
      traditional: "$200-500",
      vidhaana: "$10-25",
      improvement: "95% savings",
    },
    {
      feature: "Availability",
      traditional: "Business hours",
      vidhaana: "24/7",
      improvement: "Always on",
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Features" }]} className="mb-8" />

          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-sm font-medium mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Advanced AI Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Cutting-Edge AI Features
              <span className="block text-black">Built for Legal Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover the advanced artificial intelligence capabilities that power our legal assistant, designed
              specifically for comprehensive legal assistance and professional workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Core AI Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six foundational features that transform how legal professionals work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className={`${feature.color} border-2 hover:shadow-xl transition-all duration-300`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-2xl bg-black text-white flex-shrink-0">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-black mb-2">{feature.title}</CardTitle>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black mb-3">Key Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {feature.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-black mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-black text-white p-4 rounded-lg">
                      <p className="text-sm font-medium">{feature.benefits}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Additional Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Extended features that enhance your legal workflow and decision-making
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-300 hover:border-black transition-colors text-center"
              >
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-2xl bg-gray-100 mb-4">
                    <feature.icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Vidhaana vs Traditional Methods</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI features compare to traditional legal assistance methods
            </p>
          </div>

          <div className="bg-white border-2 border-black rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-black text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left font-semibold">Traditional Methods</th>
                    <th className="px-6 py-4 text-left font-semibold">Vidhaana AI</th>
                    <th className="px-6 py-4 text-left font-semibold">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-medium text-black">{row.feature}</td>
                      <td className="px-6 py-4 text-gray-600">{row.traditional}</td>
                      <td className="px-6 py-4 text-black font-medium">{row.vidhaana}</td>
                      <td className="px-6 py-4">
                        <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                          {row.improvement}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven AI Performance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advanced features deliver consistent, measurable results across all legal domains
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "95%", label: "Accuracy Rate", icon: Target },
              { number: "50M+", label: "Documents Processed", icon: FileCheck },
              { number: "50+", label: "Jurisdictions", icon: Globe },
              { number: "24/7", label: "Availability", icon: Clock },
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Experience the Future of Legal Technology</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Start your free trial today and discover the power of AI-driven legal solutions with cutting-edge features
            designed for modern legal professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg shadow-lg">
              <Link href="/contact" className="flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
