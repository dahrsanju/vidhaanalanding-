import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award } from "lucide-react"

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
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-20 lg:py-32" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">About Vidhaana AI Legal Assistant</h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Revolutionizing legal assistance through artificial intelligence and making professional legal guidance
                accessible to everyone
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-black">
                <CardContent className="p-8 text-center">
                  <Target className="h-16 w-16 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    To democratize access to legal information and assistance through cutting-edge AI technology, making
                    legal guidance accessible to everyone regardless of economic status or location.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black">
                <CardContent className="p-8 text-center">
                  <Eye className="h-16 w-16 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    A world where legal assistance is available to all, regardless of economic status or geographical
                    location, powered by intelligent technology that understands and serves human needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black">
                <CardContent className="p-8 text-center">
                  <Award className="h-16 w-16 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <p className="text-gray-600">
                    Integrity, accessibility, innovation, and excellence in everything we do. We believe in transparent
                    and ethical AI-powered legal assistance that serves humanity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Advanced AI Legal Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our advanced AI system is designed to provide comprehensive legal assistance with human-like
                understanding
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Advanced Natural Language Processing</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Understanding complex legal queries in plain English and multiple languages
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Analyzing legal documents and contracts with 95% accuracy
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Providing contextual legal advice and actionable recommendations
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Multi-language support for global accessibility and reach
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Comprehensive Legal Database</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Access to extensive case law and legal precedents from 50+ jurisdictions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Up-to-date statutory and regulatory information updated in real-time
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Jurisdiction-specific legal guidance for accurate local compliance
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Continuous learning and database updates for current legal landscape
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Built by Legal and Technology Experts</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our team combines decades of legal expertise with cutting-edge AI technology to create the most reliable
              and comprehensive legal assistance platform available in the market today.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
