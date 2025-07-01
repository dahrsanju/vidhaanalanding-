import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FAQSection } from "@/components/faq-section"
import {
  Shield,
  Clock,
  Users,
  Building2,
  Stethoscope,
  Truck,
  ShoppingCart,
  Landmark,
  Factory,
  FileText,
  Brain,
  Search,
  CheckCircle,
  Globe,
  Star,
  ArrowRight,
  TrendingUp,
  Zap,
  Target,
  Play,
  Award,
  DollarSign,
  Sparkles,
  ChevronRight,
  Quote,
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  #1 AI Legal Assistant Platform
                </div>

                {/* Main Headline */}
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                    Legal AI That
                    <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Actually Works
                    </span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                    Get professional legal guidance powered by advanced AI. Reduce costs by{" "}
                    <span className="font-bold text-green-600">70%</span> while maintaining expert quality.{" "}
                    <span className="font-semibold">Available 24/7</span> across all industries.
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-medium">4.8/5 (1,247+ reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>10,000+ businesses trust us</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>SOC 2 Certified</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg h-auto">
                    <Link href="/services" className="flex items-center">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg h-auto bg-transparent"
                  >
                    <Link href="#demo" className="flex items-center">
                      <Play className="w-5 h-5 mr-2" />
                      Watch Demo
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - Visual */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-black to-gray-800 rounded-3xl p-8 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl"></div>
                  <div className="relative">
                    {/* Mock AI Interface */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-500 ml-2">Vidhaana AI Assistant</span>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-100 rounded-lg p-3">
                          <p className="text-sm text-gray-700">
                            "Can you review this employment contract for potential risks?"
                          </p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
                          <p className="text-sm text-blue-800 font-medium">AI Analysis Complete ✓</p>
                          <p className="text-xs text-blue-600 mt-1">
                            Found 3 potential risks • Suggested 5 improvements • 95% confidence
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Floating Stats */}
                    <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                      <div className="text-2xl font-bold text-green-600">70%</div>
                      <div className="text-xs text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                      <div className="text-2xl font-bold text-blue-600">95%</div>
                      <div className="text-xs text-gray-600">Accuracy Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "10,000+", label: "Businesses Served", icon: Building2 },
                { number: "50M+", label: "Documents Analyzed", icon: FileText },
                { number: "95%", label: "Accuracy Rate", icon: Target },
                { number: "24/7", label: "Always Available", icon: Clock },
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

        {/* Value Proposition Section */}
        <section className="py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">
                Why Legal Professionals
                <span className="block text-blue-600">Choose Vidhaana</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the perfect blend of cutting-edge AI technology and comprehensive legal expertise
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Left - Benefits */}
              <div className="space-y-8">
                {[
                  {
                    icon: DollarSign,
                    title: "Reduce Legal Costs by 70%",
                    description: "Save thousands annually with AI-powered contract reviews and legal analysis",
                    color: "text-green-600",
                    bg: "bg-green-50",
                  },
                  {
                    icon: Clock,
                    title: "Get Instant Results",
                    description: "Receive comprehensive legal analysis in minutes, not days or weeks",
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                  },
                  {
                    icon: Shield,
                    title: "Enterprise-Grade Security",
                    description: "Your data is protected with SOC 2 compliance and end-to-end encryption",
                    color: "text-purple-600",
                    bg: "bg-purple-50",
                  },
                  {
                    icon: Globe,
                    title: "Global Legal Coverage",
                    description: "Access legal guidance across 50+ countries and all US jurisdictions",
                    color: "text-orange-600",
                    bg: "bg-orange-50",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div
                      className={`p-3 rounded-xl ${benefit.bg} ${benefit.color} group-hover:scale-110 transition-transform`}
                    >
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right - Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Brain className="w-8 h-8 text-blue-400" />
                      <h3 className="text-2xl font-bold">AI Legal Analysis</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Contract Risk Assessment</span>
                          <span className="text-green-400 font-bold">95%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full w-[95%]"></div>
                        </div>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Compliance Check</span>
                          <span className="text-blue-400 font-bold">98%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-blue-400 h-2 rounded-full w-[98%]"></div>
                        </div>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Legal Research</span>
                          <span className="text-purple-400 font-bold">92%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-purple-400 h-2 rounded-full w-[92%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4 mr-2" />
                Trusted Across Industries
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">
                One Platform,
                <span className="block text-blue-600">Every Industry</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized AI legal solutions tailored for your industry's unique challenges and regulations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  title: "Corporate & Business",
                  description: "Contract analysis, compliance monitoring, and corporate governance",
                  color: "from-blue-500 to-blue-600",
                  stats: "5,000+ companies",
                },
                {
                  icon: Stethoscope,
                  title: "Healthcare",
                  description: "HIPAA compliance, medical licensing, and healthcare regulations",
                  color: "from-green-500 to-green-600",
                  stats: "1,200+ practices",
                },
                {
                  icon: Landmark,
                  title: "Financial Services",
                  description: "Banking regulations, securities law, and fintech compliance",
                  color: "from-purple-500 to-purple-600",
                  stats: "800+ institutions",
                },
                {
                  icon: ShoppingCart,
                  title: "E-commerce & Retail",
                  description: "Consumer protection, privacy policies, and online compliance",
                  color: "from-orange-500 to-orange-600",
                  stats: "2,000+ stores",
                },
                {
                  icon: Factory,
                  title: "Manufacturing",
                  description: "Product liability, safety compliance, and supply chain legal",
                  color: "from-red-500 to-red-600",
                  stats: "600+ manufacturers",
                },
                {
                  icon: Truck,
                  title: "Transportation",
                  description: "Shipping regulations, liability coverage, and trade compliance",
                  color: "from-teal-500 to-teal-600",
                  stats: "400+ logistics firms",
                },
              ].map((industry, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${industry.color} text-white mb-6`}>
                    <industry.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3">{industry.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">{industry.stats}</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Powered by Advanced AI
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Technology That
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Understands Law
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI doesn't just process text—it understands legal context, identifies risks, and provides actionable
                insights
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Natural Language Processing",
                  description: "Understands complex legal language with 95% accuracy",
                  features: ["Document parsing", "Risk identification", "Context analysis"],
                },
                {
                  icon: Search,
                  title: "Comprehensive Research",
                  description: "Access to 50M+ legal documents across 50+ jurisdictions",
                  features: ["Case law search", "Precedent analysis", "Real-time updates"],
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-level security with SOC 2 compliance",
                  features: ["End-to-end encryption", "Secure storage", "Privacy controls"],
                },
              ].map((feature, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="inline-flex p-4 rounded-2xl bg-white/10 mb-6">
                      <feature.icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 mr-3 text-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Proven Results
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">
                Real Success,
                <span className="block text-green-600">Real Savings</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how businesses across industries are transforming their legal operations with AI
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  company: "TechStart Inc.",
                  industry: "Technology",
                  challenge: "High legal costs for contract reviews",
                  solution: "AI-powered contract analysis",
                  results: ["70% cost reduction", "$20,000 annual savings", "5x faster reviews"],
                  quote: "Vidhaana transformed our legal workflow. We now review contracts in minutes, not days.",
                  author: "Sarah Johnson, CEO",
                },
                {
                  company: "MedCare Group",
                  industry: "Healthcare",
                  challenge: "HIPAA compliance monitoring",
                  solution: "Automated compliance tracking",
                  results: ["100% compliance rate", "$2.5M penalties avoided", "50% less manual work"],
                  quote: "The AI caught compliance issues we would have missed. It's like having a legal expert 24/7.",
                  author: "Dr. Michael Chen, Administrator",
                },
              ].map((story, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      {story.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">{story.company}</h3>
                      <p className="text-gray-600">{story.industry}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Challenge</h4>
                      <p className="text-gray-700">{story.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Solution</h4>
                      <p className="text-gray-700">{story.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {story.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-green-50 rounded-lg p-3 text-center">
                            <div className="font-bold text-green-800">{result}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
                      <Quote className="w-6 h-6 text-blue-500 mb-3" />
                      <p className="text-gray-700 italic mb-3">"{story.quote}"</p>
                      <p className="text-sm font-medium text-gray-900">— {story.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">See Vidhaana in Action</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Watch how our AI analyzes a real contract in under 60 seconds
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="bg-black rounded-2xl aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/20 transition-colors cursor-pointer">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                    <p className="text-gray-300">Click to watch demo</p>
                    <p className="text-sm text-gray-500 mt-2">2:30 minutes • No signup required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">Loved by Legal Professionals</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join thousands of satisfied clients who trust Vidhaana for their legal needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, TechStart Inc.",
                  content:
                    "Vidhaana's AI legal assistant saved us over $20,000 in legal fees last year. The contract analysis is incredibly accurate and fast.",
                  rating: 5,
                },
                {
                  name: "Dr. Michael Chen",
                  role: "Healthcare Administrator",
                  content:
                    "The HIPAA compliance monitoring has been a game-changer. We've maintained 100% compliance and avoided costly violations.",
                  rating: 5,
                },
                {
                  name: "Jennifer Martinez",
                  role: "Solo Attorney",
                  content:
                    "The legal research capabilities are outstanding. I can now handle more cases with better preparation in less time.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-2 border-gray-100 hover:border-gray-200 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-black to-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">Ready to Transform Your Legal Operations?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join 10,000+ businesses already saving time and money with AI-powered legal assistance
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg h-auto">
                <Link href="/contact" className="flex items-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg h-auto bg-transparent"
              >
                <Link href="/services" className="flex items-center">
                  Explore Features
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
