import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">About Vidhaana</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionizing legal assistance through artificial intelligence
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
                  legal guidance accessible to everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-black">
              <CardContent className="p-8 text-center">
                <Eye className="h-16 w-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  A world where legal assistance is available to all, regardless of economic status or geographical
                  location, powered by intelligent technology.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-black">
              <CardContent className="p-8 text-center">
                <Award className="h-16 w-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Integrity, accessibility, innovation, and excellence in everything we do. We believe in transparent
                  and ethical AI-powered legal assistance.
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">AI Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced AI system is designed to provide comprehensive legal assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Advanced Natural Language Processing</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Understanding complex legal queries in plain English
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Analyzing legal documents and contracts
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Providing contextual legal advice and recommendations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Multi-language support for global accessibility
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Comprehensive Legal Database</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Access to extensive case law and legal precedents
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Up-to-date statutory and regulatory information
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Jurisdiction-specific legal guidance
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Continuous learning and database updates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Built by Legal and Tech Experts</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Our team combines decades of legal expertise with cutting-edge AI technology to create the most reliable and
            comprehensive legal assistance platform available.
          </p>
        </div>
      </section>
    </div>
  )
}
