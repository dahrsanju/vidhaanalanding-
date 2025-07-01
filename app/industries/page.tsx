import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Building2,
  Stethoscope,
  Truck,
  ShoppingCart,
  Landmark,
  Factory,
  CheckCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Services by Industry | Healthcare, Finance, Tech & Manufacturing Legal AI",
  description:
    "Industry-specific AI legal assistance for healthcare, finance, technology, manufacturing, real estate, and more. Tailored legal solutions with proven results across all sectors. Reduce legal costs by 70%.",
  keywords: [
    "AI legal services by industry",
    "healthcare legal AI",
    "financial services legal compliance",
    "technology law AI",
    "manufacturing legal assistance",
    "real estate law AI",
    "corporate legal AI",
    "industry-specific legal services",
    "legal compliance by sector",
    "business legal AI solutions",
    "healthcare HIPAA compliance AI",
    "fintech legal compliance",
    "e-commerce legal AI",
    "transportation law AI",
  ],
  openGraph: {
    title: "AI Legal Services by Industry | Healthcare, Finance, Tech & More",
    description: "Industry-specific AI legal assistance tailored for your sector's unique challenges and requirements.",
    url: "https://vidhaana.com/industries",
  },
  alternates: {
    canonical: "https://vidhaana.com/industries",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Industries We Serve",
  description: "AI-powered legal assistance tailored for different industries and sectors",
  url: "https://vidhaana.com/industries",
  mainEntity: {
    "@type": "ItemList",
    name: "Industries Served",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Healthcare Legal AI",
        description: "HIPAA compliance and medical legal assistance",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Financial Services Legal AI",
        description: "Banking regulations and securities law compliance",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Technology Legal AI",
        description: "IP protection and tech startup legal guidance",
      },
    ],
  },
}

export default function IndustriesPage() {
  const industries = [
    {
      icon: Building2,
      title: "Corporate & Business",
      description: "Comprehensive legal support for businesses of all sizes, from startups to Fortune 500 companies.",
      applications: ["Contract review", "Regulatory compliance", "Corporate structuring", "Risk assessment"],
      benefits: [
        "Reduce legal costs by up to 70%",
        "Faster contract turnaround times",
        "Improved compliance monitoring",
        "24/7 legal guidance availability",
      ],
      caseStudy:
        "A tech startup reduced their legal expenses from $50,000 to $15,000 annually while improving contract quality and compliance.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description:
        "Specialized AI assistance for healthcare providers, ensuring compliance with complex medical regulations.",
      applications: ["HIPAA compliance", "Medical licensing", "Patient consent forms", "Healthcare contracts"],
      benefits: [
        "Ensure HIPAA compliance",
        "Streamline licensing processes",
        "Reduce malpractice risks",
        "Automated policy updates",
      ],
      caseStudy:
        "A medical practice improved their compliance rate to 100% and avoided potential HIPAA violations worth $2.5M in penalties.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Truck,
      title: "Transportation & Logistics",
      description: "Navigate complex transportation regulations and international trade laws with AI-powered guidance.",
      applications: ["Shipping agreements", "Liability coverage", "DOT regulations", "International trade"],
      benefits: [
        "Simplified regulatory compliance",
        "Reduced shipping disputes",
        "International trade guidance",
        "Liability risk assessment",
      ],
      caseStudy:
        "A logistics company reduced shipping disputes by 60% and improved international compliance across 15 countries.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Protect your online business with comprehensive legal guidance for digital commerce.",
      applications: ["Terms of service", "Privacy policies", "Consumer rights", "Online disputes"],
      benefits: [
        "GDPR and privacy compliance",
        "Reduced customer disputes",
        "Platform policy alignment",
        "International sales support",
      ],
      caseStudy:
        "An e-commerce platform achieved 99.9% policy compliance and reduced customer disputes by 45% after implementing AI legal guidance.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Landmark,
      title: "Financial Services",
      description: "Navigate complex financial regulations with AI assistance tailored for the financial sector.",
      applications: ["Banking compliance", "Securities regulations", "Loan agreements", "Investment policies"],
      benefits: [
        "Regulatory compliance assurance",
        "Risk management optimization",
        "Faster loan processing",
        "Investment policy guidance",
      ],
      caseStudy:
        "A fintech company reduced compliance costs by 55% while maintaining perfect regulatory standing across multiple jurisdictions.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Comprehensive legal support for manufacturing operations, safety compliance, and supply chain management.",
      applications: ["Product liability", "Safety compliance", "Employment contracts", "Supply agreements"],
      benefits: [
        "Enhanced safety compliance",
        "Reduced product liability risks",
        "Streamlined supply agreements",
        "Employment law guidance",
      ],
      caseStudy:
        "A manufacturing company improved safety compliance by 40% and reduced product liability claims by 30%.",
      color: "from-red-500 to-red-600",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-32">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Industry-Specific Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                Industries We Serve with
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Legal Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Industry-specific AI-powered legal assistance tailored for your sector's unique challenges, regulations,
                and requirements
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${industry.color} text-white group-hover:scale-110 transition-transform`}
                      >
                        <industry.icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-black">{industry.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">{industry.description}</p>

                    <div>
                      <h4 className="font-semibold mb-3 text-black">Key Applications:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {industry.applications.map((app, appIndex) => (
                          <li key={appIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-black">Industry Benefits:</h4>
                      <ul className="space-y-2">
                        {industry.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 mr-2 text-blue-600 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border-l-4 border-blue-500">
                      <h4 className="font-semibold mb-2 text-sm text-blue-800 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Success Story:
                      </h4>
                      <p className="text-sm text-blue-700 leading-relaxed">{industry.caseStudy}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted Across All Industries</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Consistent results and proven success across every sector
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "10+", label: "Industries Served" },
                { number: "70%", label: "Average Cost Reduction" },
                { number: "95%", label: "Compliance Rate" },
                { number: "10,000+", label: "Businesses Helped" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Ready to Transform Your Industry with
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Legal Solutions?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Get industry-specific legal assistance tailored to your unique business needs and regulatory requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg h-auto">
                <Link href="/contact" className="flex items-center">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg h-auto bg-transparent"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
