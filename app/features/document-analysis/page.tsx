import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  FileText,
  Brain,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Target,
  BarChart3,
  Search,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Document Analysis & Review | Automated Contract Analysis | Legal Document AI",
  description:
    "Advanced AI-powered document analysis and review platform. Automated contract analysis, risk assessment, compliance checking, and intelligent document processing for legal professionals.",
  keywords: [
    "AI document analysis",
    "automated contract review",
    "legal document AI",
    "contract analysis software",
    "document review automation",
    "AI contract intelligence",
    "legal document processing",
    "contract risk assessment",
    "document analysis platform",
    "AI legal review",
  ],
  alternates: {
    canonical: "https://vidhaana.com/features/document-analysis",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI Document Analysis Platform",
  description: "AI-powered document analysis and review for legal professionals",
  url: "https://vidhaana.com/features/document-analysis",
  applicationCategory: "Legal Technology",
  operatingSystem: "Web-based",
}

export default function DocumentAnalysisPage() {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Document Processing",
      description:
        "Advanced AI algorithms that understand legal language, context, and document structure for comprehensive analysis.",
      capabilities: [
        "Natural language understanding",
        "Legal terminology recognition",
        "Document structure analysis",
        "Context-aware processing",
      ],
    },
    {
      icon: Target,
      title: "Risk Assessment & Scoring",
      description:
        "Automated risk identification and scoring system that highlights potential issues and provides actionable insights.",
      capabilities: [
        "Risk scoring algorithms",
        "Issue prioritization",
        "Risk category classification",
        "Mitigation recommendations",
      ],
    },
    {
      icon: Shield,
      title: "Compliance Verification",
      description:
        "Comprehensive compliance checking against regulatory requirements and industry standards across jurisdictions.",
      capabilities: [
        "Multi-jurisdiction compliance",
        "Regulatory requirement mapping",
        "Standards verification",
        "Compliance reporting",
      ],
    },
    {
      icon: Search,
      title: "Clause Analysis & Extraction",
      description:
        "Intelligent clause identification, extraction, and analysis with recommendations for improvements and alternatives.",
      capabilities: [
        "Clause identification",
        "Standard clause library",
        "Alternative suggestions",
        "Clause comparison",
      ],
    },
    {
      icon: Clock,
      title: "Version Control & Tracking",
      description:
        "Advanced version control system that tracks changes, maintains audit trails, and enables collaborative review.",
      capabilities: ["Change tracking", "Version comparison", "Audit trail maintenance", "Collaborative annotations"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Comprehensive analytics and reporting tools that provide insights into document patterns and review efficiency.",
      capabilities: ["Review analytics", "Performance metrics", "Pattern recognition", "Custom reporting"],
    },
  ]

  const useCases = [
    {
      title: "Contract Review Automation",
      description: "Automate the review of sales contracts, NDAs, and service agreements",
      timeReduction: "85%",
      accuracyImprovement: "95%",
    },
    {
      title: "M&A Due Diligence",
      description: "Streamline due diligence document review for mergers and acquisitions",
      timeReduction: "70%",
      accuracyImprovement: "92%",
    },
    {
      title: "Compliance Documentation",
      description: "Ensure regulatory compliance across all legal documents",
      timeReduction: "80%",
      accuracyImprovement: "98%",
    },
    {
      title: "Litigation Document Review",
      description: "Accelerate discovery and document review for litigation cases",
      timeReduction: "75%",
      accuracyImprovement: "90%",
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: "85% Faster Review",
      description: "Dramatically reduce document review time while maintaining accuracy",
    },
    {
      icon: Target,
      title: "95% Accuracy Rate",
      description: "Industry-leading accuracy in risk identification and analysis",
    },
    {
      icon: TrendingUp,
      title: "70% Cost Reduction",
      description: "Significant cost savings compared to traditional review methods",
    },
    {
      icon: Shield,
      title: "100% Compliance",
      description: "Ensure complete compliance with regulatory requirements",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-28 pb-16 monochrome-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ label: "Features", href: "/features" }, { label: "Document Analysis" }]}
              className="mb-8"
            />

            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                <FileText className="w-4 h-4 mr-2" />
                AI Document Analysis
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                Intelligent Document
                <span className="block text-black">Analysis & Review</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Transform your document review process with AI-powered analysis that identifies risks, ensures
                compliance, and provides actionable insights in minutes instead of hours.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="monochrome-card text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 rounded-2xl bg-black text-white mb-4">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Advanced AI Document Analysis Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI capabilities designed for professional legal document review and analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="monochrome-card h-full">
                  <CardHeader>
                    <div className="inline-flex p-3 rounded-2xl bg-black text-white mb-4">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                    <div>
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Real-World Use Cases</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how our AI document analysis transforms legal workflows across different practice areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="monochrome-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="monochrome-accent p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-black">{useCase.timeReduction}</div>
                        <div className="text-sm text-gray-600">Time Reduction</div>
                      </div>
                      <div className="bg-black text-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold">{useCase.accuracyImprovement}</div>
                        <div className="text-sm">Accuracy Rate</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">How AI Document Analysis Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our advanced AI processes documents through multiple layers of analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Document Upload & Processing",
                  description:
                    "Upload documents in any format. Our AI extracts and processes text, images, and metadata.",
                  icon: FileText,
                },
                {
                  step: "2",
                  title: "AI Analysis & Risk Assessment",
                  description:
                    "Advanced algorithms analyze content, identify risks, and check compliance requirements.",
                  icon: Brain,
                },
                {
                  step: "3",
                  title: "Insights & Recommendations",
                  description:
                    "Receive detailed analysis reports with actionable insights and improvement recommendations.",
                  icon: Target,
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <div className="inline-flex p-3 rounded-2xl bg-gray-200 mb-4">
                    <step.icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Technical Specifications</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Enterprise-grade AI technology with industry-leading performance and security
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="monochrome-card">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-black">Supported Formats</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• PDF, Word, Excel, PowerPoint</li>
                    <li>• Plain text and RTF files</li>
                    <li>• Scanned documents (OCR)</li>
                    <li>• Email formats (MSG, EML)</li>
                    <li>• Image files (JPG, PNG, TIFF)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="monochrome-card">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-black">Processing Speed</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • 1-page document: <strong>2 seconds</strong>
                    </li>
                    <li>
                      • 10-page contract: <strong>15 seconds</strong>
                    </li>
                    <li>
                      • 100-page agreement: <strong>2 minutes</strong>
                    </li>
                    <li>
                      • Batch processing: <strong>1000+ docs/hour</strong>
                    </li>
                    <li>• Real-time analysis available</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="monochrome-card">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-black">Security & Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• SOC 2 Type II certified</li>
                    <li>• GDPR and CCPA compliant</li>
                    <li>• AES-256 encryption</li>
                    <li>• Zero data retention option</li>
                    <li>• On-premise deployment available</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Document Review Process?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the power of AI document analysis with our comprehensive platform. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
                <Link href="/contact" className="flex items-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              >
                <Link href="/features">Explore All Features</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
