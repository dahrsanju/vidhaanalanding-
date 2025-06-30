import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Brain,
  Search,
  MessageSquare,
  FileCheck,
  Shield,
  Globe,
  Clock,
  Zap,
  Users,
  BarChart3,
  RefreshCw,
  CheckCircle,
} from "lucide-react"

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
    },
    {
      icon: FileCheck,
      title: "Document Analysis & Review",
      description:
        "Automated analysis of legal documents with risk assessment, compliance checking, and improvement suggestions.",
      capabilities: ["Risk identification", "Compliance verification", "Clause recommendations", "Version comparison"],
      technicalDetails: "Advanced document processing with OCR, semantic analysis, and risk scoring algorithms.",
      benefits: ["Faster document processing", "Risk mitigation", "Compliance assurance", "Quality improvement"],
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
    },
    {
      icon: Globe,
      title: "Multi-Jurisdictional Support",
      description:
        "Legal guidance across different jurisdictions with awareness of local laws, regulations, and legal procedures.",
      capabilities: ["International law", "State-specific guidance", "Local regulations", "Cross-border issues"],
      technicalDetails: "Jurisdiction-aware AI models trained on legal systems from 50+ countries and all US states.",
      benefits: ["Global legal coverage", "Local law expertise", "Cross-border guidance", "Regulatory awareness"],
    },
    {
      icon: Clock,
      title: "Real-Time Legal Updates",
      description: "Stay current with the latest legal developments, regulatory changes, and case law updates.",
      capabilities: ["Automated monitoring", "Change notifications", "Impact analysis", "Update summaries"],
      technicalDetails: "AI-powered legal news monitoring with natural language processing for relevance scoring.",
      benefits: ["Stay legally current", "Proactive compliance", "Risk awareness", "Competitive advantage"],
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline legal processes with intelligent automation and workflow optimization.",
      capabilities: ["Process automation", "Task scheduling", "Deadline tracking", "Workflow optimization"],
      technicalDetails:
        "Intelligent workflow engine with machine learning-based process optimization and predictive scheduling.",
      benefits: ["Increased efficiency", "Reduced manual work", "Better organization", "Deadline compliance"],
    },
    {
      icon: Users,
      title: "Collaborative Platform",
      description: "Enable team collaboration with shared workspaces, document sharing, and communication tools.",
      capabilities: ["Team workspaces", "Document sharing", "Communication tools", "Role-based access"],
      technicalDetails:
        "Cloud-based collaboration platform with real-time synchronization and granular permission controls.",
      benefits: ["Enhanced teamwork", "Better communication", "Centralized resources", "Improved coordination"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and reporting tools to track legal metrics and performance indicators.",
      capabilities: ["Performance metrics", "Custom reports", "Data visualization", "Trend analysis"],
      technicalDetails: "Advanced analytics engine with machine learning-powered insights and customizable dashboards.",
      benefits: ["Data-driven decisions", "Performance tracking", "Trend identification", "Strategic insights"],
    },
    {
      icon: RefreshCw,
      title: "Continuous Learning",
      description: "AI system that continuously learns and improves from interactions and feedback.",
      capabilities: ["Machine learning", "Feedback integration", "Performance optimization", "Adaptive responses"],
      technicalDetails:
        "Self-improving AI with reinforcement learning and continuous model updates based on user feedback.",
      benefits: ["Improving accuracy", "Personalized experience", "Enhanced performance", "Adaptive intelligence"],
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Advanced AI Features</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence capabilities designed specifically for legal assistance
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-black hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <feature.icon className="h-12 w-12" />
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600">{feature.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2">Core Capabilities:</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {feature.capabilities.map((capability, capIndex) => (
                        <li key={capIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-semibold mb-1 text-sm text-blue-800">Technical Details:</h4>
                    <p className="text-sm text-blue-700">{feature.technicalDetails}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-black rounded-full mr-2 flex-shrink-0"></span>
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Why Our AI Features Stand Out</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare our advanced AI capabilities with traditional legal assistance methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-300">
              <CardHeader>
                <CardTitle className="text-center">Traditional Legal Services</CardTitle>
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

            <Card className="border-2 border-black bg-black text-white">
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

            <Card className="border-2 border-gray-300">
              <CardHeader>
                <CardTitle className="text-center">Basic Legal Software</CardTitle>
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

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Future of Legal Assistance</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how our advanced AI features can transform your legal workflow
          </p>
          <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
            <Link href="/contact">Try Our AI Features</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
