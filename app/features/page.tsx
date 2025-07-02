import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Assistant Features | NLP, Research, Security & Analytics | Advanced Legal AI",
  description:
    "Discover advanced AI legal features including natural language processing, comprehensive legal research, document analysis, enterprise security, and multi-jurisdictional support. 95% accuracy guaranteed.",
  alternates: {
    canonical: "https://vidhaana.com/features",
  },
}

export default function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: "Advanced Natural Language Processing",
      description: "Our AI understands complex legal language and interprets documents with human-like comprehension.",
      capabilities: [
        "Legal document parsing with 95% accuracy",
        "Contract clause analysis and risk identification",
        "Multi-language support for global accessibility",
        "Context-aware legal interpretation",
      ],
      technicalDetails: "Powered by transformer-based models trained on millions of legal documents",
      benefits: ["Faster document review", "Reduced human error", "Consistent analysis quality", "24/7 availability"],
      color: "from-blue-500 to-blue-600",
      stats: { accuracy: "95%", languages: "25+", documents: "50M+" },
    },
    {
      icon: Search,
      title: "Comprehensive Legal Research",
      description:
        "Access vast legal databases including case law, statutes, and regulations from multiple jurisdictions.",
      capabilities: [
        "Case law research across 50+ jurisdictions",
        "Statutory analysis and interpretation",
        "Precedent identification and tracking",
        "Real-time legal updates and alerts",
      ],
      technicalDetails: "Database contains over 50 million legal documents updated in real-time",
      benefits: [
        "Comprehensive research coverage",
        "Real-time legal updates",
        "Cross-jurisdictional analysis",
        "Precedent tracking",
      ],
      color: "from-green-500 to-green-600",
      stats: { jurisdictions: "50+", cases: "10M+", updates: "Daily" },
    },
    {
      icon: MessageSquare,
      title: "Interactive Legal Consultation",
      description:
        "Real-time AI-powered legal consultation that adapts to your situation and provides personalized guidance.",
      capabilities: [
        "24/7 availability for instant responses",
        "Personalized legal guidance",
        "Follow-up questions and clarifications",
        "Contextual advice based on your situation",
      ],
      technicalDetails: "Conversational AI with memory retention and context awareness",
      benefits: [
        "Immediate responses",
        "Personalized guidance",
        "Cost-effective consultation",
        "Continuous availability",
      ],
      color: "from-purple-500 to-purple-600",
      stats: { availability: "24/7", response: "<1s", satisfaction: "98%" },
    },
    {
      icon: FileCheck,
      title: "Document Analysis & Review",
      description: "Automated analysis of legal documents with risk assessment and improvement suggestions.",
      capabilities: [
        "Risk identification and scoring",
        "Compliance verification across jurisdictions",
        "Clause recommendations and improvements",
        "Version comparison and change tracking",
      ],
      technicalDetails: "Advanced document processing with OCR, semantic analysis, and risk scoring",
      benefits: ["Faster document processing", "Risk mitigation", "Compliance assurance", "Quality improvement"],
      color: "from-orange-500 to-red-500",
      stats: { processing: "10x", accuracy: "97%", risks: "99%" },
    },
    {
      icon: Shield,
      title: "Enterprise Security & Privacy",
      description: "Bank-level security with end-to-end encryption, ensuring your legal matters remain confidential.",
      capabilities: [
        "AES-256 encryption for all data",
        "SOC 2 Type II compliance",
        "GDPR and CCPA compliant data handling",
        "Zero-trust security architecture",
      ],
      technicalDetails: "Military-grade encryption with multi-layered security controls",
      benefits: ["Data protection", "Regulatory compliance", "Client confidentiality", "Secure communications"],
      color: "from-red-500 to-pink-500",
      stats: { encryption: "AES-256", compliance: "SOC 2", uptime: "99.9%" },
    },
    {
      icon: Globe,
      title: "Multi-Jurisdictional Support",
      description: "Legal guidance across different jurisdictions with awareness of local laws and regulations.",
      capabilities: [
        "International law expertise",
        "State-specific legal guidance",
        "Local regulations and compliance",
        "Cross-border legal issues",
      ],
      technicalDetails: "Jurisdiction-aware AI models trained on legal systems from 50+ countries",
      benefits: ["Global legal coverage", "Local law expertise", "Cross-border guidance", "Regulatory awareness"],
      color: "from-teal-500 to-cyan-500",
      stats: { countries: "50+", states: "All US", laws: "1M+" },
    },
  ]

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Features" }]} className="mb-8" />

          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Advanced AI Technology
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Cutting-Edge AI Features
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Built for Legal Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover the advanced artificial intelligence capabilities that power our legal assistant, designed
              specifically for comprehensive legal assistance and professional workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                        <feature.icon className="h-8 w-8" />
                      </div>
                      <h2 className="text-3xl font-bold text-black">{feature.title}</h2>
                    </div>

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">{feature.description}</p>

                    {/* Capabilities */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-black">Core Capabilities:</h3>
                      <div className="space-y-3">
                        {feature.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 leading-relaxed">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Details */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
                      <h4 className="font-semibold mb-2 text-blue-800">Technical Excellence:</h4>
                      <p className="text-blue-700 leading-relaxed">{feature.technicalDetails}</p>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-black">Key Benefits:</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center">
                            <Target className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats & Visual */}
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <div
                      className={`relative p-8 rounded-3xl bg-gradient-to-br ${feature.color} text-white shadow-2xl`}
                    >
                      <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
                      <div className="relative">
                        <h3 className="text-2xl font-bold mb-8">Performance Metrics</h3>

                        <div className="space-y-6">
                          {Object.entries(feature.stats).map(([key, value], statIndex) => (
                            <div key={statIndex} className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                                <span className="capitalize opacity-90">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                              </div>
                              <div className="text-2xl font-bold">{value}</div>
                            </div>
                          ))}
                        </div>

                        {/* Visual Element */}
                        <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                          <div className="flex items-center justify-center">
                            <feature.icon className="w-16 h-16 opacity-50" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Why Our AI Features
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Lead the Industry
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare our advanced AI capabilities with traditional legal assistance methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Traditional */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black">Traditional Legal Services</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Limited availability (business hours)",
                  "High hourly rates ($300-$800/hour)",
                  "Slow response times (days/weeks)",
                  "Manual research processes",
                  "Human error potential",
                  "Limited scalability",
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Our AI */}
            <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-2xl p-8 shadow-2xl transform scale-105">
              <div className="text-center mb-6">
                <Brain className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold">Vidhaana AI Features</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "24/7 availability",
                  "Cost-effective pricing",
                  "Instant responses",
                  "Automated research & analysis",
                  "Consistent 95% accuracy",
                  "Unlimited scalability",
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Basic Software */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black">Basic Legal Software</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Limited AI capabilities",
                  "Basic document templates",
                  "No personalized guidance",
                  "Limited legal knowledge",
                  "No real-time updates",
                  "Generic solutions",
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven AI Performance</h2>
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
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Experience the Future of
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Legal Technology
            </span>
          </h2>
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
