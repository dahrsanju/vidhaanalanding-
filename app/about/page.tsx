import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Eye, Award, Brain, Users, Globe, CheckCircle, Sparkles, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Vidhaana - AI Legal Technology Company | Our Mission & Vision",
  description:
    "Learn about Vidhaana's mission to democratize legal assistance through AI technology. Discover our advanced AI capabilities, vision for accessible legal services, and commitment to innovation in legal technology.",
  keywords: [
    "about Vidhaana",
    "AI legal technology company",
    "legal AI mission",
    "artificial intelligence law",
    "legal technology innovation",
    "AI legal capabilities",
    "legal assistance democratization",
    "legal AI vision",
    "legal technology company",
    "AI legal assistant company",
    "legal AI development",
    "legal technology solutions",
  ],
  openGraph: {
    title: "About Vidhaana - AI Legal Technology Company",
    description:
      "Revolutionizing legal assistance through artificial intelligence. Learn about our mission, vision, and advanced AI capabilities in legal technology.",
    url: "https://vidhaana.com/about",
  },
  alternates: {
    canonical: "https://vidhaana.com/about",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Vidhaana",
  description: "Learn about Vidhaana's mission to democratize legal assistance through AI technology",
  url: "https://vidhaana.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Vidhaana",
    description: "AI-powered legal assistant providing accessible legal guidance",
    foundingDate: "2023",
    mission: "To democratize access to legal information and assistance through cutting-edge AI technology",
    vision:
      "A world where legal assistance is available to all, regardless of economic status or geographical location",
  },
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-white pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                About Our Mission
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                Revolutionizing Legal
                <span className="block text-black">Through AI Innovation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Making professional legal guidance accessible to everyone through cutting-edge artificial intelligence
                and innovative technology solutions
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-black text-white mb-6 group-hover:scale-110 transition-transform">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To democratize access to legal information and assistance through cutting-edge AI technology, making
                    legal guidance accessible to everyone regardless of economic status or location.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-gray-800 text-white mb-6 group-hover:scale-110 transition-transform">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A world where legal assistance is available to all, regardless of economic status or geographical
                    location, powered by intelligent technology that understands and serves human needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-gray-600 text-white mb-6 group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black">Our Values</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Integrity, accessibility, innovation, and excellence in everything we do. We believe in transparent
                    and ethical AI-powered legal assistance that serves humanity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-black rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                Advanced AI Technology
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
                AI Legal Capabilities
                <span className="block text-black">That Actually Work</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our advanced AI system is designed to provide comprehensive legal assistance with human-like
                understanding and professional accuracy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-black">Advanced Natural Language Processing</h3>
                  <ul className="space-y-4">
                    {[
                      "Understanding complex legal queries in plain English and multiple languages",
                      "Analyzing legal documents and contracts with 95% accuracy",
                      "Providing contextual legal advice and actionable recommendations",
                      "Multi-language support for global accessibility and reach",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start group">
                        <CheckCircle className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-black">Comprehensive Legal Database</h3>
                  <ul className="space-y-4">
                    {[
                      "Access to extensive case law and legal precedents from 50+ jurisdictions",
                      "Up-to-date statutory and regulatory information updated in real-time",
                      "Jurisdiction-specific legal guidance for accurate local compliance",
                      "Continuous learning and database updates for current legal landscape",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start group">
                        <CheckCircle className="w-5 h-5 text-black mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Legal Professionals Worldwide</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI technology delivers consistent results across all legal domains
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "95%", label: "Accuracy Rate", icon: Target },
                { number: "50+", label: "Jurisdictions", icon: Globe },
                { number: "10,000+", label: "Businesses Served", icon: Users },
                { number: "24/7", label: "Always Available", icon: CheckCircle },
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

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-black rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Expert Team
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Built by Legal and
              <span className="block text-black">Technology Experts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Our team combines decades of legal expertise with cutting-edge AI technology to create the most reliable
              and comprehensive legal assistance platform available in the market today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Legal Experts",
                  description: "Former attorneys and legal professionals with 20+ years of experience",
                  number: "15+",
                },
                {
                  title: "AI Engineers",
                  description: "Machine learning specialists and NLP experts from top tech companies",
                  number: "25+",
                },
                {
                  title: "Years Combined Experience",
                  description: "Decades of expertise in law, technology, and artificial intelligence",
                  number: "200+",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold text-black mb-2">{item.number}</div>
                    <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Experience the Future of Legal Assistance?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of legal professionals who trust Vidhaana for comprehensive AI-powered legal guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg h-auto">
                <Link href="/contact" className="flex items-center">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg h-auto bg-transparent"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
