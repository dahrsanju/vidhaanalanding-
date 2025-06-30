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
  GraduationCap,
  Home,
  Zap,
  Gamepad2,
  CheckCircle,
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
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Legal guidance for educational institutions, covering student rights, employment, and regulatory compliance.",
      applications: ["Student policies", "Employment law", "Title IX compliance", "Intellectual property"],
      benefits: [
        "Student policy compliance",
        "Title IX guidance",
        "Faculty contract management",
        "IP protection for research",
      ],
      caseStudy:
        "A university system improved policy compliance by 85% and reduced legal disputes by 50% across 12 campuses.",
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Comprehensive real estate legal assistance for property transactions, development, and management.",
      applications: ["Property transactions", "Lease agreements", "Zoning compliance", "Property disputes"],
      benefits: [
        "Faster property closings",
        "Reduced transaction disputes",
        "Zoning compliance assurance",
        "Lease optimization",
      ],
      caseStudy: "A real estate firm reduced transaction times by 35% and improved client satisfaction scores by 25%.",
    },
    {
      icon: Zap,
      title: "Energy & Utilities",
      description: "Navigate complex energy regulations and utility law with specialized AI legal assistance.",
      applications: ["Regulatory compliance", "Environmental law", "Contract negotiations", "Permit applications"],
      benefits: [
        "Environmental compliance",
        "Permit process acceleration",
        "Contract optimization",
        "Regulatory risk mitigation",
      ],
      caseStudy: "An energy company reduced permit processing time by 50% and achieved 100% environmental compliance.",
    },
    {
      icon: Gamepad2,
      title: "Gaming & Entertainment",
      description: "Legal support for gaming companies, entertainment businesses, and content creators.",
      applications: ["Licensing agreements", "Content policies", "User agreements", "Intellectual property"],
      benefits: [
        "Content licensing optimization",
        "User policy compliance",
        "IP protection strategies",
        "Platform agreement guidance",
      ],
      caseStudy:
        "A gaming studio reduced licensing costs by 40% and improved content compliance across multiple platforms.",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                Industries We Serve with AI Legal Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Industry-specific AI-powered legal assistance tailored for your sector's unique challenges, regulations,
                and requirements
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="border-2 border-black hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <industry.icon className="h-12 w-12" />
                      <CardTitle className="text-2xl font-bold">{industry.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600">{industry.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2">Key Applications:</h4>
                      <ul className="grid grid-cols-2 gap-1">
                        {industry.applications.map((app, appIndex) => (
                          <li key={appIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 mr-2 text-green-600 flex-shrink-0" />
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Industry Benefits:</h4>
                      <ul className="space-y-1">
                        {industry.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-black rounded-full mr-2 flex-shrink-0"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-100 p-4 rounded border-l-4 border-black">
                      <h4 className="font-semibold mb-1 text-sm">Success Story:</h4>
                      <p className="text-sm text-gray-700">{industry.caseStudy}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Industry with AI Legal Solutions?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get industry-specific legal assistance tailored to your unique business needs and regulatory requirements
            </p>
            <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
