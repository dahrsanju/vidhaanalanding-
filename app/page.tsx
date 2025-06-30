import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Scale,
  Shield,
  Clock,
  Users,
  Building2,
  Stethoscope,
  Truck,
  ShoppingCart,
  Landmark,
  Factory,
  Briefcase,
  FileText,
  Brain,
  Search,
  MessageSquare,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Gavel,
  UserCheck,
  FileCheck,
  PenTool,
  Globe,
} from "lucide-react"

export default function HomePage() {
  const industries = [
    {
      icon: Building2,
      title: "Corporate & Business",
      description: "Contract analysis, compliance monitoring, M&A due diligence, and corporate governance assistance.",
      applications: ["Contract review", "Regulatory compliance", "Corporate structuring", "Risk assessment"],
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "HIPAA compliance, medical malpractice guidance, healthcare regulations, and patient rights.",
      applications: ["HIPAA compliance", "Medical licensing", "Patient consent forms", "Healthcare contracts"],
    },
    {
      icon: Truck,
      title: "Transportation & Logistics",
      description: "Shipping regulations, liability issues, transportation contracts, and regulatory compliance.",
      applications: ["Shipping agreements", "Liability coverage", "DOT regulations", "International trade"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Consumer protection laws, terms of service, privacy policies, and online business compliance.",
      applications: ["Terms of service", "Privacy policies", "Consumer rights", "Online disputes"],
    },
    {
      icon: Landmark,
      title: "Financial Services",
      description: "Banking regulations, securities law, fintech compliance, and financial contract analysis.",
      applications: ["Banking compliance", "Securities regulations", "Loan agreements", "Investment policies"],
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Product liability, safety regulations, employment law, and supply chain legal issues.",
      applications: ["Product liability", "Safety compliance", "Employment contracts", "Supply agreements"],
    },
  ]

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
    },
    {
      icon: MessageSquare,
      title: "Interactive Legal Consultation",
      description:
        "Real-time AI-powered legal consultation that adapts to your specific situation and provides personalized guidance.",
      capabilities: ["24/7 availability", "Personalized responses", "Follow-up questions", "Contextual advice"],
    },
    {
      icon: FileCheck,
      title: "Document Analysis & Review",
      description:
        "Automated analysis of legal documents with risk assessment, compliance checking, and improvement suggestions.",
      capabilities: ["Risk identification", "Compliance verification", "Clause recommendations", "Version comparison"],
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description:
        "Enterprise-grade security with end-to-end encryption, ensuring your legal matters remain confidential.",
      capabilities: ["End-to-end encryption", "Secure data storage", "Privacy compliance", "Access controls"],
    },
    {
      icon: Globe,
      title: "Multi-Jurisdictional Support",
      description:
        "Legal guidance across different jurisdictions with awareness of local laws, regulations, and legal procedures.",
      capabilities: ["International law", "State-specific guidance", "Local regulations", "Cross-border issues"],
    },
  ]

  const useCases = [
    {
      icon: Briefcase,
      title: "Contract Management",
      scenario: "Small Business Owner",
      problem: "Need to review supplier contracts and employment agreements but can't afford expensive legal fees.",
      solution:
        "AI analyzes contracts, identifies potential risks, suggests improvements, and ensures compliance with local laws.",
      outcome: "Reduced legal costs by 70% while maintaining contract quality and legal protection.",
    },
    {
      icon: UserCheck,
      title: "Employment Law Guidance",
      scenario: "HR Manager",
      problem: "Dealing with complex employment issues, workplace disputes, and need guidance on labor law compliance.",
      solution:
        "AI provides instant guidance on employment law, helps draft policies, and offers dispute resolution strategies.",
      outcome: "Faster resolution of HR issues and improved compliance with employment regulations.",
    },
    {
      icon: FileText,
      title: "Legal Document Drafting",
      scenario: "Startup Founder",
      problem:
        "Need to create various legal documents including privacy policies, terms of service, and partnership agreements.",
      solution: "AI assists in drafting customized legal documents based on business needs and industry requirements.",
      outcome: "Professional legal documents created in hours instead of weeks, saving thousands in legal fees.",
    },
    {
      icon: Gavel,
      title: "Litigation Support",
      scenario: "Legal Professional",
      problem: "Need to research case law, analyze legal precedents, and prepare legal arguments for complex cases.",
      solution:
        "AI conducts comprehensive legal research, identifies relevant precedents, and helps structure legal arguments.",
      outcome: "Reduced research time by 60% and improved case preparation with comprehensive legal analysis.",
    },
    {
      icon: BookOpen,
      title: "Regulatory Compliance",
      scenario: "Healthcare Administrator",
      problem: "Ensuring compliance with constantly changing healthcare regulations and avoiding costly violations.",
      solution: "AI monitors regulatory changes, assesses compliance status, and provides actionable recommendations.",
      outcome: "Maintained 100% compliance rate and avoided potential regulatory penalties worth millions.",
    },
    {
      icon: PenTool,
      title: "Intellectual Property Protection",
      scenario: "Tech Entrepreneur",
      problem: "Need to protect intellectual property, file patents, and understand IP law for new innovations.",
      solution:
        "AI guides through IP protection process, analyzes patent landscapes, and identifies potential infringement issues.",
      outcome: "Successfully protected key innovations and avoided costly IP disputes through proactive guidance.",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">AI-Powered Legal Assistance</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get professional legal guidance powered by advanced AI technology. Accessible, reliable, and available
              24/7 across multiple industries and legal domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
                <Link href="/services">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vidhaana Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Why Choose Vidhaana?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with legal expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-black">
              <CardContent className="p-6 text-center">
                <Scale className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Legal Knowledge</h3>
                <p className="text-gray-600">
                  Access comprehensive legal information backed by extensive legal databases
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-black">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p className="text-gray-600">Get legal assistance whenever you need it, day or night</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-black">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure & Confidential</h3>
                <p className="text-gray-600">Your information is protected with enterprise-grade security</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-black">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
                <p className="text-gray-600">Simple interface designed for everyone, regardless of legal background</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI-Based Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">AI Legal Assistance Across Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered legal assistance serves diverse industries with specialized knowledge and tailored
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-2 border-black hover:shadow-lg transition-shadow">
                <CardHeader>
                  <industry.icon className="h-12 w-12 mb-4" />
                  <CardTitle className="text-xl font-bold">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Applications:</h4>
                    <ul className="space-y-1">
                      {industry.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-600" />
                          {app}
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

      {/* AI Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Advanced AI Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence capabilities designed specifically for legal assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-black hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 mb-4" />
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Capabilities:</h4>
                    <ul className="space-y-1">
                      {feature.capabilities.map((capability, capIndex) => (
                        <li key={capIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Real-World Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI legal assistance transforms legal challenges into solutions across different scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-2 border-black">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <useCase.icon className="h-8 w-8" />
                    <div>
                      <CardTitle className="text-lg font-bold">{useCase.title}</CardTitle>
                      <p className="text-sm text-gray-600">{useCase.scenario}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-1 text-red-600" />
                      Challenge:
                    </h4>
                    <p className="text-gray-600 text-sm">{useCase.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1 flex items-center">
                      <Brain className="w-4 h-4 mr-1 text-blue-600" />
                      AI Solution:
                    </h4>
                    <p className="text-gray-600 text-sm">{useCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                      Result:
                    </h4>
                    <p className="text-gray-600 text-sm">{useCase.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">How Our AI Legal Assistant Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Getting legal assistance has never been easier</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Describe Your Issue</h3>
              <p className="text-gray-600">Tell us about your legal question or upload documents for analysis</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">Our AI analyzes your case using comprehensive legal databases</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Guidance</h3>
              <p className="text-gray-600">Receive detailed legal guidance and next steps recommendations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Take Action</h3>
              <p className="text-gray-600">Implement recommendations with ongoing AI support and monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Legal Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust Vidhaana for their legal needs across industries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
