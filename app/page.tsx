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
  ShoppingCart,
  Landmark,
  Factory,
  FileText,
  Globe,
  Star,
  ArrowRight,
  Target,
  Play,
  DollarSign,
  Sparkles,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI-Powered Legal Assistant | Professional Legal Guidance 24/7 | Reduce Costs by 70%",
  description:
    "Transform your legal experience with Vidhaana's AI-powered legal assistant. Get expert guidance for contracts, compliance, litigation support across all industries. Available 24/7 with 95% accuracy. Trusted by 10,000+ businesses. Reduce legal costs by up to 70%.",
  alternates: {
    canonical: "https://vidhaana.com",
  },
}

const faqs = [
  {
    question: "How accurate is the AI legal assistant?",
    answer:
      "Our AI legal assistant achieves 95% accuracy in legal document analysis and interpretation. It's trained on millions of legal documents and continuously updated with the latest legal developments.",
  },
  {
    question: "Can the AI replace a human lawyer?",
    answer:
      "No, our AI legal assistant is designed to complement, not replace, human legal expertise. It provides initial guidance, document analysis, and research support, but complex legal matters still require human attorney oversight.",
  },
  {
    question: "What types of legal documents can the AI analyze?",
    answer:
      "Our AI can analyze various legal documents including contracts, agreements, terms of service, privacy policies, employment documents, real estate contracts, and more.",
  },
  {
    question: "How much can I save using the AI legal assistant?",
    answer:
      "Our clients typically reduce legal costs by 60-70% while maintaining quality. For example, contract reviews that cost $400/hour with traditional lawyers can be completed in minutes with our AI.",
  },
]

export default function HomePage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section - Compact */}
      <section className="relative min-h-[80vh] flex items-center bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                #1 AI Legal Assistant Platform
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                Legal AI That
                <span className="block text-black">Actually Works</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Get professional legal guidance powered by advanced AI. Reduce costs by{" "}
                <span className="font-bold text-black">70%</span> while maintaining expert quality.{" "}
                <span className="font-semibold">Available 24/7</span> across all industries.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="flex text-black">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium">4.8/5 (1,247+ reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>10,000+ businesses</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
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
                  <Link href="#demo" className="flex items-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative bg-black rounded-3xl p-6 shadow-2xl">
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                    <span className="text-sm text-gray-500 ml-2">Vidhaana AI Assistant</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-sm text-gray-700">
                        "Can you review this employment contract for potential risks?"
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-black">
                      <p className="text-sm text-black font-medium">AI Analysis Complete ✓</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Found 3 potential risks • Suggested 5 improvements • 95% confidence
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-3 -right-3 bg-white rounded-xl p-3 shadow-lg border border-gray-200">
                  <div className="text-xl font-bold text-black">70%</div>
                  <div className="text-xs text-gray-600">Cost Reduction</div>
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white rounded-xl p-3 shadow-lg border border-gray-200">
                  <div className="text-xl font-bold text-black">95%</div>
                  <div className="text-xs text-gray-600">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Compact */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "10,000+", label: "Businesses Served", icon: Building2 },
              { number: "50M+", label: "Documents Analyzed", icon: FileText },
              { number: "95%", label: "Accuracy Rate", icon: Target },
              { number: "24/7", label: "Always Available", icon: Clock },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-3 rounded-2xl bg-white/10 mb-3 group-hover:bg-white/20 transition-colors">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section - Compact */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4">
              Why Legal Professionals
              <span className="block text-black">Choose Vidhaana</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of cutting-edge AI technology and comprehensive legal expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: DollarSign,
                title: "70% Cost Reduction",
                description: "Save thousands annually with AI-powered contract reviews",
              },
              {
                icon: Clock,
                title: "Instant Results",
                description: "Receive comprehensive legal analysis in minutes",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "SOC 2 compliance and end-to-end encryption",
              },
              {
                icon: Globe,
                title: "Global Coverage",
                description: "Legal guidance across 50+ countries",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-2 border-black hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-xl bg-black text-white mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Compact */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4">
              Trusted Across
              <span className="block text-black">Every Industry</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized AI legal solutions tailored for your industry's unique challenges
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Building2, title: "Corporate", count: "5,000+" },
              { icon: Stethoscope, title: "Healthcare", count: "1,200+" },
              { icon: Landmark, title: "Finance", count: "800+" },
              { icon: ShoppingCart, title: "E-commerce", count: "2,000+" },
              { icon: Factory, title: "Manufacturing", count: "600+" },
            ].map((industry, index) => (
              <Card
                key={index}
                className="border-2 border-black hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-4 text-center">
                  <div className="inline-flex p-3 rounded-2xl bg-black text-white mb-3 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-black text-sm mb-1">{industry.title}</h3>
                  <p className="text-xs text-gray-600">{industry.count} clients</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-white bg-transparent"
            >
              <Link href="/industries" className="flex items-center">
                View All Industries
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials - Compact */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4">Loved by Legal Professionals</h2>
            <p className="text-lg text-gray-600">Join thousands of satisfied clients who trust Vidhaana</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                content:
                  "Vidhaana saved us over $20,000 in legal fees last year. The contract analysis is incredibly accurate.",
                rating: 5,
              },
              {
                name: "Dr. Michael Chen",
                role: "Healthcare Administrator",
                content: "The HIPAA compliance monitoring has been a game-changer. We've maintained 100% compliance.",
                rating: 5,
              },
              {
                name: "Jennifer Martinez",
                role: "Solo Attorney",
                content:
                  "The legal research capabilities are outstanding. I can handle more cases with better preparation.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 border-black">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-black" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-black text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
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

      {/* Final CTA - Compact */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Ready to Transform Your Legal Operations?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 10,000+ businesses already saving time and money with AI-powered legal assistance
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
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
