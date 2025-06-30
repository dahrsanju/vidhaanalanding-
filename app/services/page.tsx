import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Users, Building, Home, Briefcase, Shield } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: FileText,
      title: "Document Review & Analysis",
      description:
        "AI-powered analysis of contracts, agreements, and legal documents with detailed insights and recommendations.",
      features: ["Contract analysis", "Risk assessment", "Clause recommendations", "Compliance checking"],
    },
    {
      icon: Users,
      title: "Family Law Assistance",
      description: "Guidance on family-related legal matters including divorce, custody, and domestic relations.",
      features: ["Divorce proceedings", "Child custody", "Adoption guidance", "Domestic relations"],
    },
    {
      icon: Building,
      title: "Business Law Support",
      description: "Comprehensive business legal assistance for startups and established companies.",
      features: ["Business formation", "Employment law", "Intellectual property", "Commercial contracts"],
    },
    {
      icon: Home,
      title: "Real Estate Law",
      description: "Expert guidance on property transactions, landlord-tenant issues, and real estate disputes.",
      features: ["Property transactions", "Lease agreements", "Zoning issues", "Property disputes"],
    },
    {
      icon: Briefcase,
      title: "Employment Law",
      description: "Assistance with workplace issues, employment contracts, and labor law matters.",
      features: ["Employment contracts", "Workplace disputes", "Discrimination issues", "Wage and hour law"],
    },
    {
      icon: Shield,
      title: "Criminal Law Guidance",
      description: "Initial guidance and information about criminal law matters and procedures.",
      features: ["Legal procedures", "Rights information", "Court processes", "Defense strategies"],
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive AI-powered legal assistance across multiple practice areas
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-black hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 mb-4" />
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Getting legal assistance has never been easier</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your legal needs and see how our AI can help
          </p>
          <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
            <Link href="/contact">Get Legal Assistance</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
