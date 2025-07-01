import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
  ArrowRight,
  TrendingUp,
  Zap,
  Target,
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
  const whyChooseFeatures = [
    {
      icon: Scale,
      title: "Expert Legal Knowledge",
      description:
        "Access comprehensive legal information backed by extensive legal databases and case law from 50+ jurisdictions",
      stat: "50M+",
      statLabel: "Legal Documents",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Get instant legal assistance whenever you need it, day or night, with immediate responses",
      stat: "24/7",
      statLabel: "Always Available",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: Shield,
      title: "Secure & Confidential",
      description: "Your information is protected with enterprise-grade security and SOC 2 compliance",
      stat: "100%",
      statLabel: "Secure & Private",
      gradient: "from-red-500 to-pink-600",
    },
    {
      icon: Users,
      title: "User-Friendly Interface",
      description: "Simple interface designed for everyone, regardless of legal background or technical expertise",
      stat: "95%",
      statLabel: "User Satisfaction",
      gradient: "from-orange-500 to-yellow-600",
    },
  ]

  const industries = [
    {
      icon: Building2,
      title: "Corporate & Business Law",
      description:
        "Contract analysis, compliance monitoring, M&A due diligence, and corporate governance assistance for businesses of all sizes.",
      applications: ["Contract review", "Regulatory compliance", "Corporate structuring", "Risk assessment"],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      hoverColor: "hover:bg-blue-100",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Legal Compliance",
      description:
        "HIPAA compliance, medical malpractice guidance, healthcare regulations, and patient rights protection.",
      applications: ["HIPAA compliance", "Medical licensing", "Patient consent forms", "Healthcare contracts"],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      hoverColor: "hover:bg-green-100",
    },
    {
      icon: Truck,
      title: "Transportation & Logistics Law",
      description:
        "Shipping regulations, liability issues, transportation contracts, and international trade compliance.",
      applications: ["Shipping agreements", "Liability coverage", "DOT regulations", "International trade"],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      hoverColor: "hover:bg-purple-100",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail Legal",
      description: "Consumer protection laws, terms of service, privacy policies, and online business compliance.",
      applications: ["Terms of service", "Privacy policies", "Consumer rights", "Online disputes"],
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
      hoverColor: "hover:bg-orange-100",
    },
    {
      icon: Landmark,
      title: "Financial Services Legal",
      description: "Banking regulations, securities law, fintech compliance, and financial contract analysis.",
      applications: ["Banking compliance", "Securities regulations", "Loan agreements", "Investment policies"],
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600",
      hoverColor: "hover:bg-indigo-100",
    },
    {
      icon: Factory,
      title: "Manufacturing Legal Support",
      description: "Product liability, safety regulations, employment law, and supply chain legal issues.",
      applications: ["Product liability", "Safety compliance", "Employment contracts", "Supply agreements"],
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
      hoverColor: "hover:bg-red-100",
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
      badge: "AI-Powered",
      badgeColor: "bg-purple-100 text-purple-800",
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
      badge: "Global Coverage",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      icon: MessageSquare,
      title: "Interactive Legal Consultation",
      description:
        "Real-time AI-powered legal consultation that adapts to your specific situation and provides personalized, actionable guidance.",
      capabilities: ["24/7 availability", "Personalized responses", "Follow-up questions", "Contextual advice"],
      badge: "Real-time",
      badgeColor: "bg-green-100 text-green-800",
    },
    {
      icon: FileCheck,
      title: "Document Analysis & Review",
      description:
        "Automated analysis of legal documents with comprehensive risk assessment, compliance checking, and improvement suggestions.",
      capabilities: ["Risk identification", "Compliance verification", "Clause recommendations", "Version comparison"],
      badge: "Automated",
      badgeColor: "bg-orange-100 text-orange-800",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description:
        "Enterprise-grade security with end-to-end encryption, SOC 2 compliance, ensuring your legal matters remain confidential.",
      capabilities: ["End-to-end encryption", "Secure data storage", "Privacy compliance", "Access controls"],
      badge: "Enterprise-Grade",
      badgeColor: "bg-red-100 text-red-800",
    },
    {
      icon: Globe,
      title: "Multi-Jurisdictional Support",
      description:
        "Legal guidance across different jurisdictions with awareness of local laws, regulations, and legal procedures worldwide.",
      capabilities: ["International law", "State-specific guidance", "Local regulations", "Cross-border issues"],
      badge: "Worldwide",
      badgeColor: "bg-teal-100 text-teal-800",
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
      category: "Business",
      categoryColor: "bg-blue-100 text-blue-800",
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
      category: "HR & Employment",
      categoryColor: "bg-green-100 text-green-800",
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
      category: "Startup",
      categoryColor: "bg-purple-100 text-purple-800",
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
      category: "Legal Practice",
      categoryColor: "bg-orange-100 text-orange-800",
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
      category: "Healthcare",
      categoryColor: "bg-red-100 text-red-800",
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
      category: "IP & Tech",
      categoryColor: "bg-teal-100 text-teal-800",
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

        {/* Why Choose Vidhaana Section - Redesigned */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="why-choose-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-4">
                <Target className="w-4 h-4 mr-2" />
                Why Choose Vidhaana
              </div>
              <h2 id="why-choose-heading" className="text-3xl md:text-5xl font-bold text-black mb-6">
                The Future of Legal Assistance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the perfect blend of cutting-edge AI technology and comprehensive legal expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div key={index} className="group relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                  ></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right mb-4">
                      <div className="text-3xl font-bold text-black">{feature.stat}</div>
                      <div className="text-sm text-gray-500">{feature.statLabel}</div>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    <div className="mt-6 flex items-center text-black font-medium group-hover:text-blue-600 transition-colors">
                      <span className="text-sm">Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI-Based Industries Section - Redesigned */}
        <section className="py-20 bg-white" aria-labelledby="industries-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                <Building2 className="w-4 h-4 mr-2" />
                Industries We Serve
              </div>
              <h2 id="industries-heading" className="text-3xl md:text-5xl font-bold text-black mb-6">
                Specialized Legal AI Across Every Sector
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored solutions that understand the unique challenges and regulations of your industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`group ${industry.color} ${industry.hoverColor} rounded-2xl p-8 transition-all duration-300 hover:scale-105 border-2 ${industry.color.includes("border") ? "" : "border-gray-100"}`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-white shadow-md ${industry.iconColor}`}>
                      <industry.icon className="h-8 w-8" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-black">{index + 1}</div>
                      <div className="text-xs text-gray-500">of 6</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3">{industry.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{industry.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-black">Key Applications:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-black rounded-full mr-2 flex-shrink-0"></div>
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/50">
                    <button className="flex items-center text-black font-medium hover:text-gray-700 transition-colors group">
                      <span className="text-sm">Explore Solutions</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features Section - Redesigned */}
        <section
          className="py-20 bg-gradient-to-br from-black to-gray-900 text-white"
          aria-labelledby="features-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Advanced Technology
              </div>
              <h2 id="features-heading" className="text-3xl md:text-5xl font-bold mb-6">
                Cutting-Edge AI Legal Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the powerful AI capabilities that make our legal assistant the most advanced in the industry
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${feature.badgeColor}`}>
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-white">Core Capabilities:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {feature.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                            {capability}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <button className="flex items-center text-white font-medium hover:text-gray-300 transition-colors group">
                        <span className="text-sm">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section - Redesigned */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="use-cases-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                Real-World Success
              </div>
              <h2 id="use-cases-heading" className="text-3xl md:text-5xl font-bold text-black mb-6">
                Transforming Legal Challenges into Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our AI legal assistant delivers measurable results across different scenarios and industries
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-xl bg-gray-100 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                          <useCase.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-black">{useCase.title}</h3>
                          <p className="text-sm text-gray-600">{useCase.scenario}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${useCase.categoryColor}`}>
                        {useCase.category}
                      </span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="p-4 bg-red-50 rounded-xl border-l-4 border-red-400">
                        <h4 className="font-semibold text-sm mb-2 flex items-center text-red-800">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Challenge
                        </h4>
                        <p className="text-red-700 text-sm">{useCase.problem}</p>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-400">
                        <h4 className="font-semibold text-sm mb-2 flex items-center text-blue-800">
                          <Brain className="w-4 h-4 mr-2" />
                          AI Solution
                        </h4>
                        <p className="text-blue-700 text-sm">{useCase.solution}</p>
                      </div>

                      <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-400">
                        <h4 className="font-semibold text-sm mb-2 flex items-center text-green-800">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Results
                        </h4>
                        <p className="text-green-700 text-sm">{useCase.outcome}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-xl">
                        <div className="text-2xl font-bold text-green-800">{useCase.savings}</div>
                        <div className="text-xs text-green-600">Cost Savings</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl">
                        <div className="text-2xl font-bold text-blue-800">{useCase.timeReduction}</div>
                        <div className="text-xs text-blue-600">Time Saved</div>
                      </div>
                    </div>

                    <button className="w-full flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors group">
                      <span>View Full Case Study</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
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
