import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FAQSection } from "@/components/faq-section"
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
  Star,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI-Powered Legal Assistant | Professional Legal Guidance 24/7 | Reduce Costs by 70%",
  description:
    "Transform your legal experience with Vidhaana's AI-powered legal assistant. Get expert guidance for contracts, compliance, litigation support across all industries. Available 24/7 with 95% accuracy. Trusted by 10,000+ businesses. Reduce legal costs by up to 70%.",
  keywords: [
    "AI legal assistant",
    "legal AI technology",
    "contract analysis AI",
    "legal document review",
    "compliance monitoring",
    "legal research automation",
    "artificial intelligence law",
    "legal consultation online",
    "automated legal services",
    "legal guidance 24/7",
    "reduce legal costs",
    "legal technology platform",
    "AI contract review",
    "legal compliance software",
    "intelligent legal assistant",
  ],
  openGraph: {
    title: "AI-Powered Legal Assistant | Professional Legal Guidance 24/7",
    description:
      "Transform your legal experience with expert AI guidance. Reduce legal costs by 70% while maintaining professional quality. Trusted by 10,000+ businesses worldwide.",
    url: "https://vidhaana.com",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Vidhaana AI Legal Assistant - Professional Legal Technology Platform",
      },
    ],
  },
  alternates: {
    canonical: "https://vidhaana.com",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI-Powered Legal Assistant",
  description: "Professional AI-powered legal assistance available 24/7 across multiple industries",
  url: "https://vidhaana.com",
  mainEntity: {
    "@type": "Service",
    name: "AI Legal Assistant",
    description: "Comprehensive AI-powered legal assistance and consultation services",
    provider: {
      "@type": "Organization",
      name: "Vidhaana",
    },
    offers: {
      "@type": "Offer",
      description: "Professional legal guidance powered by advanced AI technology",
      availability: "https://schema.org/InStock",
      priceRange: "$$",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1247",
      bestRating: "5",
      worstRating: "1",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vidhaana.com",
      },
    ],
  },
}

const faqs = [
  {
    question: "How accurate is the AI legal assistant?",
    answer:
      "Our AI legal assistant achieves 95% accuracy in legal document analysis and interpretation. It's trained on millions of legal documents and continuously updated with the latest legal developments. However, we always recommend consulting with a qualified attorney for complex legal matters.",
  },
  {
    question: "Can the AI replace a human lawyer?",
    answer:
      "No, our AI legal assistant is designed to complement, not replace, human legal expertise. It provides initial guidance, document analysis, and research support, but complex legal matters still require human attorney oversight and personalized advice.",
  },
  {
    question: "What types of legal documents can the AI analyze?",
    answer:
      "Our AI can analyze various legal documents including contracts, agreements, terms of service, privacy policies, employment documents, real estate contracts, and more. It identifies risks, suggests improvements, and ensures compliance with relevant regulations.",
  },
  {
    question: "Is my data secure and confidential?",
    answer:
      "Yes, we use enterprise-grade security with AES-256 encryption, SOC 2 Type II compliance, and GDPR-compliant data handling. Your legal information is protected with the highest security standards, though communications may not be subject to attorney-client privilege.",
  },
  {
    question: "How much can I save using the AI legal assistant?",
    answer:
      "Our clients typically reduce legal costs by 60-70% while maintaining quality. For example, contract reviews that cost $400/hour with traditional lawyers can be completed in minutes with our AI, saving thousands annually for businesses.",
  },
  {
    question: "Which jurisdictions does the AI support?",
    answer:
      "Our AI supports legal guidance across 50+ countries and all US states. It's trained on jurisdiction-specific laws and regulations, providing localized legal guidance while being aware of cross-border legal implications.",
  },
]

export default function HomePage() {
  const industries = [
    {
      icon: Building2,
      title: "Corporate & Business Law",
      description:
        "Contract analysis, compliance monitoring, M&A due diligence, and corporate governance assistance for businesses of all sizes.",
      applications: ["Contract review", "Regulatory compliance", "Corporate structuring", "Risk assessment"],
    },
    {
      icon: Stethoscope,
      title: "Healthcare Legal Compliance",
      description:
        "HIPAA compliance, medical malpractice guidance, healthcare regulations, and patient rights protection.",
      applications: ["HIPAA compliance", "Medical licensing", "Patient consent forms", "Healthcare contracts"],
    },
    {
      icon: Truck,
      title: "Transportation & Logistics Law",
      description:
        "Shipping regulations, liability issues, transportation contracts, and international trade compliance.",
      applications: ["Shipping agreements", "Liability coverage", "DOT regulations", "International trade"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail Legal",
      description: "Consumer protection laws, terms of service, privacy policies, and online business compliance.",
      applications: ["Terms of service", "Privacy policies", "Consumer rights", "Online disputes"],
    },
    {
      icon: Landmark,
      title: "Financial Services Legal",
      description: "Banking regulations, securities law, fintech compliance, and financial contract analysis.",
      applications: ["Banking compliance", "Securities regulations", "Loan agreements", "Investment policies"],
    },
    {
      icon: Factory,
      title: "Manufacturing Legal Support",
      description: "Product liability, safety regulations, employment law, and supply chain legal issues.",
      applications: ["Product liability", "Safety compliance", "Employment contracts", "Supply agreements"],
    },
  ]

  const features = [
    {
      icon: Brain,
      title: "Advanced Natural Language Processing",
      description:
        "Our AI understands complex legal language and can interpret documents, contracts, and legal queries with human-like comprehension and 95% accuracy.",
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
        "Access to vast legal databases including case law, statutes, regulations, and legal precedents from 50+ jurisdictions worldwide.",
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
        "Real-time AI-powered legal consultation that adapts to your specific situation and provides personalized, actionable guidance.",
      capabilities: ["24/7 availability", "Personalized responses", "Follow-up questions", "Contextual advice"],
    },
    {
      icon: FileCheck,
      title: "Document Analysis & Review",
      description:
        "Automated analysis of legal documents with comprehensive risk assessment, compliance checking, and improvement suggestions.",
      capabilities: ["Risk identification", "Compliance verification", "Clause recommendations", "Version comparison"],
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description:
        "Enterprise-grade security with end-to-end encryption, SOC 2 compliance, ensuring your legal matters remain confidential.",
      capabilities: ["End-to-end encryption", "Secure data storage", "Privacy compliance", "Access controls"],
    },
    {
      icon: Globe,
      title: "Multi-Jurisdictional Support",
      description:
        "Legal guidance across different jurisdictions with awareness of local laws, regulations, and legal procedures worldwide.",
      capabilities: ["International law", "State-specific guidance", "Local regulations", "Cross-border issues"],
    },
  ]

  const useCases = [
    {
      icon: Briefcase,
      title: "Contract Management",
      scenario: "Small Business Owner",
      problem:
        "Need to review supplier contracts and employment agreements but can't afford expensive legal fees of $400/hour.",
      solution:
        "AI analyzes contracts in minutes, identifies potential risks, suggests improvements, and ensures compliance with local laws.",
      outcome: "Reduced legal costs by 70% while maintaining contract quality and legal protection.",
      savings: "$14,000 annually",
      timeReduction: "85% faster processing",
    },
    {
      icon: UserCheck,
      title: "Employment Law Guidance",
      scenario: "HR Manager",
      problem:
        "Dealing with complex employment issues, workplace disputes, and labor law compliance across multiple states.",
      solution:
        "AI provides instant guidance on employment law, helps draft policies, and offers dispute resolution strategies.",
      outcome: "Faster resolution of HR issues and improved compliance with employment regulations.",
      savings: "60% fewer disputes",
      timeReduction: "90% faster resolution",
    },
    {
      icon: FileText,
      title: "Legal Document Drafting",
      scenario: "Startup Founder",
      problem:
        "Need to create various legal documents including privacy policies, terms of service, and partnership agreements.",
      solution: "AI assists in drafting customized legal documents based on business needs and industry requirements.",
      outcome: "Professional legal documents created in hours instead of weeks, saving thousands in legal fees.",
      savings: "$15,000 saved",
      timeReduction: "95% faster creation",
    },
    {
      icon: Gavel,
      title: "Litigation Support",
      scenario: "Legal Professional",
      problem: "Need to research case law, analyze legal precedents, and prepare legal arguments for complex cases.",
      solution:
        "AI conducts comprehensive legal research, identifies relevant precedents, and helps structure legal arguments.",
      outcome: "Reduced research time by 60% and improved case preparation with comprehensive legal analysis.",
      savings: "40% more billable hours",
      timeReduction: "60% time savings",
    },
    {
      icon: BookOpen,
      title: "Regulatory Compliance",
      scenario: "Healthcare Administrator",
      problem: "Ensuring compliance with constantly changing healthcare regulations and avoiding costly violations.",
      solution: "AI monitors regulatory changes, assesses compliance status, and provides actionable recommendations.",
      outcome: "Maintained 100% compliance rate and avoided potential regulatory penalties worth millions.",
      savings: "$2.5M penalties avoided",
      timeReduction: "50% workload reduction",
    },
    {
      icon: PenTool,
      title: "Intellectual Property Protection",
      scenario: "Tech Entrepreneur",
      problem: "Need to protect intellectual property, file patents, and understand IP law for new innovations.",
      solution:
        "AI guides through IP protection process, analyzes patent landscapes, and identifies potential infringement issues.",
      outcome: "Successfully protected key innovations and avoided costly IP disputes through proactive guidance.",
      savings: "40% cost reduction",
      timeReduction: "Patent analysis in 1 day",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "Vidhaana's AI legal assistant saved us over $20,000 in legal fees last year. The contract analysis is incredibly accurate and fast.",
      rating: 5,
      image: "/images/testimonial-sarah.jpg",
    },
    {
      name: "Dr. Michael Chen",
      role: "Healthcare Administrator",
      content:
        "The HIPAA compliance monitoring has been a game-changer. We've maintained 100% compliance and avoided costly violations.",
      rating: 5,
      image: "/images/testimonial-michael.jpg",
    },
    {
      name: "Jennifer Martinez",
      role: "Solo Attorney",
      content:
        "The legal research capabilities are outstanding. I can now handle more cases with better preparation in less time.",
      rating: 5,
      image: "/images/testimonial-jennifer.jpg",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32" itemScope itemType="https://schema.org/WebPageElement">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6" itemProp="headline">
                AI-Powered Legal Assistant for Modern Businesses
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto" itemProp="description">
                Get professional legal guidance powered by advanced AI technology. Accessible, reliable, and available
                24/7 across multiple industries and legal domains. <strong>Reduce legal costs by up to 70%</strong>{" "}
                while maintaining expert quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
                  <Link href="/services" aria-label="Get started with AI legal services">
                    Get Started Today
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg bg-transparent"
                >
                  <Link href="/about" aria-label="Learn more about our AI technology">
                    Learn More About Our AI
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span>4.8/5 from 1,247+ reviews</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                <span>Trusted by 10,000+ businesses worldwide</span>
                <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                <span>SOC 2 Type II Certified</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Vidhaana Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="why-choose-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-black mb-4">
                Why Choose Vidhaana AI Legal Assistant?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our AI-powered platform combines cutting-edge technology with comprehensive legal expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-2 border-black hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Scale className="h-12 w-12 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-2">Expert Legal Knowledge</h3>
                  <p className="text-gray-600">
                    Access comprehensive legal information backed by extensive legal databases and case law from 50+
                    jurisdictions
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                  <p className="text-gray-600">
                    Get instant legal assistance whenever you need it, day or night, with immediate responses
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-2">Secure & Confidential</h3>
                  <p className="text-gray-600">
                    Your information is protected with enterprise-grade security and SOC 2 compliance
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
                  <p className="text-gray-600">
                    Simple interface designed for everyone, regardless of legal background or technical expertise
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI-Based Industries Section */}
        <section className="py-20" aria-labelledby="industries-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="industries-heading" className="text-3xl md:text-4xl font-bold text-black mb-4">
                AI Legal Assistance Across Industries
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered legal assistance serves diverse industries with specialized knowledge and tailored
                solutions for every sector
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="border-2 border-black hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <industry.icon className="h-12 w-12" aria-hidden="true" />
                      <CardTitle className="text-xl font-bold">{industry.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Applications:</h4>
                      <ul className="space-y-1" role="list">
                        {industry.applications.map((app, appIndex) => (
                          <li key={appIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 mr-2 text-green-600" aria-hidden="true" />
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
        <section className="py-20 bg-gray-50" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-black mb-4">
                Advanced AI Legal Technology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence capabilities designed specifically for comprehensive legal
                assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 border-black hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 mb-4" aria-hidden="true" />
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Core Capabilities:</h4>
                      <ul className="space-y-1" role="list">
                        {feature.capabilities.map((capability, capIndex) => (
                          <li key={capIndex} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-black rounded-full mr-2" aria-hidden="true"></span>
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
        <section className="py-20" aria-labelledby="use-cases-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="use-cases-heading" className="text-3xl md:text-4xl font-bold text-black mb-4">
                Real-World Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our AI legal assistance transforms legal challenges into measurable business results across
                different scenarios
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="border-2 border-black hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <useCase.icon className="h-8 w-8" aria-hidden="true" />
                      <div>
                        <CardTitle className="text-lg font-bold">{useCase.title}</CardTitle>
                        <p className="text-sm text-gray-600">{useCase.scenario}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-1 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-1 text-red-600" aria-hidden="true" />
                        Challenge:
                      </h4>
                      <p className="text-gray-600 text-sm">{useCase.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 flex items-center">
                        <Brain className="w-4 h-4 mr-1 text-blue-600" aria-hidden="true" />
                        AI Solution:
                      </h4>
                      <p className="text-gray-600 text-sm">{useCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1 text-green-600" aria-hidden="true" />
                        Results:
                      </h4>
                      <p className="text-gray-600 text-sm">{useCase.outcome}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="bg-green-50 p-3 rounded text-center border border-green-200">
                        <p className="text-sm font-semibold text-green-800">{useCase.savings}</p>
                        <p className="text-xs text-green-600">Cost Savings</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded text-center border border-blue-200">
                        <p className="text-sm font-semibold text-blue-800">{useCase.timeReduction}</p>
                        <p className="text-xs text-blue-600">Time Saved</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-black mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by thousands of businesses and legal professionals worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 border-black">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-15 h-15 rounded-full mr-4 bg-gray-200"></div>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20" aria-labelledby="how-it-works-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold text-black mb-4">
                How Our AI Legal Assistant Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Getting professional legal assistance has never been easier or more accessible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Describe Your Legal Issue",
                  description: "Tell us about your legal question or upload documents for comprehensive AI analysis",
                },
                {
                  step: 2,
                  title: "Advanced AI Analysis",
                  description:
                    "Our AI analyzes your case using comprehensive legal databases and case law from 50+ jurisdictions",
                },
                {
                  step: 3,
                  title: "Get Expert Guidance",
                  description:
                    "Receive detailed legal guidance and actionable next steps recommendations with 95% accuracy",
                },
                {
                  step: 4,
                  title: "Take Informed Action",
                  description:
                    "Implement recommendations with ongoing AI support and monitoring for continued compliance",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* CTA Section */}
        <section className="py-20 bg-black text-white" aria-labelledby="cta-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Legal Experience?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of businesses and individuals who trust Vidhaana for their legal needs across industries.
              Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
                <Link href="/contact" aria-label="Start free trial of AI legal assistant">
                  Start Free Trial
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              >
                <Link href="/services" aria-label="Explore all AI legal services">
                  Explore All Services
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="text-sm">SOC 2 Type II Certified</div>
              <div className="text-sm">GDPR Compliant</div>
              <div className="text-sm">ISO 27001 Certified</div>
              <div className="text-sm">99.9% Uptime SLA</div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
