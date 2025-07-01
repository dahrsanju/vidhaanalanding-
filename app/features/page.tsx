import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Search, MessageSquare, FileCheck, Shield, Globe, CheckCircle, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Assistant Features | NLP, Research, Security & Analytics | Advanced Legal AI",
  description:
    "Discover advanced AI legal features including natural language processing, comprehensive legal research, document analysis, enterprise security, and multi-jurisdictional support. 95% accuracy guaranteed.",
  keywords: [
    "AI legal features",
    "natural language processing legal",
    "legal research AI",
    "document analysis AI",
    "legal AI security",
    "multi-jurisdictional legal AI",
    "legal analytics AI",
    "automated legal workflows",
    "legal AI technology",
    "advanced legal features",
    "AI contract analysis",
    "legal document automation",
    "AI legal research tools",
    "legal compliance automation",
  ],
  openGraph: {
    title: "AI Legal Assistant Features | Advanced Technology for Legal Professionals",
    description:
      "Cutting-edge AI features designed specifically for comprehensive legal assistance and professional workflows.",
    url: "https://vidhaana.com/features",
  },
  alternates: {
    canonical: "https://vidhaana.com/features",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Legal Assistant Features",
  description: "Advanced AI features for comprehensive legal assistance",
  url: "https://vidhaana.com/features",
  mainEntity: {
    "@type": "ItemList",
    name: "AI Legal Features",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Natural Language Processing",
        description: "Advanced NLP for legal document understanding",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Legal Research AI",
        description: "Comprehensive legal database research capabilities",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Document Analysis",
        description: "Automated legal document review and analysis",
      },
    ],
  },
}

export default function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: "Advanced Natural Language Processing",
      description:
        "Our AI understands complex legal language and can interpret documents, contracts, and legal queries with human-like comprehension.",
      capabilities: [
        "Legal document parsing",
        "Contract clause analysis",
        "Multi-language support",
        "Context understanding",
      ],
      technicalDetails:
        "Powered by transformer-based models trained on millions of legal documents, achieving 95% accuracy in legal text interpretation.",
      benefits: ["Faster document review", "Reduced human error", "Consistent analysis quality", "24/7 availability"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Search,
      title: "Comprehensive Legal Research",
      description:
        "Access to vast legal databases including case law, statutes, regulations, and legal precedents from multiple jurisdictions.",
      capabilities: [
        "Case law research",
        "Statutory analysis",
        "Precedent identification",
        "Jurisdiction-specific guidance",
      ],
      technicalDetails:
        "Database contains over 50 million legal documents from 200+ jurisdictions, updated in real-time.",
      benefits: [
        "Comprehensive research coverage",
        "Real-time legal updates",
        "Cross-jurisdictional analysis",
        "Precedent tracking",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: MessageSquare,
      title: "Interactive Legal Consultation",
      description:
        "Real-time AI-powered legal consultation that adapts to your specific situation and provides personalized guidance.",
      capabilities: ["24/7 availability", "Personalized responses", "Follow-up questions", "Contextual advice"],
      technicalDetails:
        "Conversational AI with memory retention and context awareness, supporting multi-turn legal consultations.",
      benefits: [
        "Immediate responses",
        "Personalized guidance",
        "Cost-effective consultation",
        "Continuous availability",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FileCheck,
      title: "Document Analysis & Review",
      description:
        "Automated analysis of legal documents with risk assessment, compliance checking, and improvement suggestions.",
      capabilities: ["Risk identification", "Compliance verification", "Clause recommendations", "Version comparison"],
      technicalDetails: "Advanced document processing with OCR, semantic analysis, and risk scoring algorithms.",
      benefits: ["Faster document processing", "Risk mitigation", "Compliance assurance", "Quality improvement"],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description:
        "Enterprise-grade security with end-to-end encryption, ensuring your legal matters remain confidential.",
      capabilities: ["End-to-end encryption", "Secure data storage", "Privacy compliance", "Access controls"],
      technicalDetails:
        "AES-256 encryption, SOC 2 Type II compliance, GDPR compliant data handling, and zero-trust architecture.",
      benefits: ["Data protection", "Regulatory compliance", "Client confidentiality", "Secure communications"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Globe,
      title: "Multi-Jurisdictional Support",
      description:
        "Legal guidance across different jurisdictions with awareness of local laws, regulations, and legal procedures.",
      capabilities: ["International law", "State-specific guidance", "Local regulations", "Cross-border issues"],
      technicalDetails: "Jurisdiction-aware AI models trained on legal systems from 50+ countries and all US states.",
      benefits: ["Global legal coverage", "Local law expertise", "Cross-border guidance", "Regulatory awareness"],
      color: "from-teal-500 to-teal-600",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-32">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Advanced AI Technology
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                Advanced AI Legal
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Technology Features
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Cutting-edge artificial intelligence capabilities designed specifically for comprehensive legal
                assistance and professional workflows
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white group-hover:scale-110 transition-transform`}>
                        <feature.icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-black">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                    <div>
                      <h4 className="font-semibold mb-3 text-black">Core Capabilities:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {feature.capabilities.map((capability, capIndex) => (
                          <li key={capIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border-l-4 border-blue-500">
                      <h4 className="font-semibold mb-2 text-sm text-blue-800">Technical Details:</h4>
                      <p className="text-sm text-blue-700 leading-relaxed">{feature.technicalDetails}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-black">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
                Why Our AI Features
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Stand Out
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Compare our advanced AI capabilities with traditional legal assistance methods
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-300 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-center text-black">Traditional Legal Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-600">• Limited availability (business hours)</p>
                  <p className="text-sm text-gray-600">• High hourly rates ($300-$800/hour)</p>
                  <p className="text-sm text-gray-600">• Slow response times (days/weeks)</p>
                  <p className="text-sm text-gray-600">• Manual research processes</p>
                  <p className="text-sm text-gray-600">• Human error potential</p>
                  <p className="text-sm text-gray-600">• Limited scalability</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black bg-gradient-to-br from-black to-gray-800 text-white hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-center">Our AI Legal Assistant</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">• 24/7 availability</p>
                  <p className="text-sm">• Cost-effective pricing</p>
                  <p className="text-sm">• Instant responses</p>
                  <p className="text-sm">• Automated research & analysis</p>
                  <p className="text-sm">• Consistent accuracy</p>
                  <p className="text-sm">• Unlimited scalability</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-300 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-center text-black">Basic Legal Software</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-600">• Limited AI capabilities</p>
                  <p className="text-sm text-gray-600">• Basic document templates</p>
                  <p className="text-sm text-gray-600">• No personalized guidance</p>
                  <p className="text-sm text-gray-600">• Limited legal knowledge</p>
                  <p className="text-sm text-gray-600">• No real-time updates</p>
                  <p className="text-sm text-gray-600">• Generic solutions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven AI Performance</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our advanced features deliver consistent, measurable results
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "95%", label: "Accuracy Rate" },
                { number: "50M+", label: "Documents Processed" },
                { number: "200+", label: "Jurisdictions" },
                { number: "24/7", label: "Availability" },
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
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Experience the Future of
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-\
