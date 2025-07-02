import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Building2,
  Scale,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Users,
  Landmark,
  Stethoscope,
  Home,
  UserCheck,
  Package,
  Monitor,
  GraduationCap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Assistant Use-Cases | Contracts, Compliance, Litigation & More",
  description:
    "Explore practical use-cases for Vidhaana’s AI legal assistant: contract review, compliance monitoring, litigation prep, employment law, and international expansion.",
  alternates: { canonical: "https://vidhaana.com/use-cases" },
}

/* JSON-LD for SEO */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Legal Assistant Use-Cases",
  description: "Real-world applications of Vidhaana across multiple legal scenarios",
  url: "https://vidhaana.com/use-cases",
}

export default function UseCasesPage() {
  const useCases = [
    {
      icon: Building2,
      title: "Corporate Legal Operations",
      industry: "Corporate Legal",
      bullets: [
        "Automated M&A due diligence with 80% faster document review",
        "AI-powered contract lifecycle management reducing processing time by 70%",
        "Regulatory compliance monitoring with real-time alerts and updates",
        "Corporate governance policy automation and board resolution drafting",
      ],
    },
    {
      icon: Scale,
      title: "Law Firm Efficiency",
      industry: "Law Firms",
      bullets: [
        "Automated legal research cutting research time by 75%",
        "AI-assisted brief and motion drafting with precedent analysis",
        "Client intake automation and case management optimization",
        "Billing optimization and time tracking with AI insights",
      ],
    },
    {
      icon: Users,
      title: "Consumer Legal Access",
      industry: "B2C Consumer",
      bullets: [
        "Personal legal document generation (wills, contracts, leases)",
        "Consumer rights guidance with plain English explanations",
        "Small claims court preparation and filing assistance",
        "Family law mediation support and document preparation",
      ],
    },
    {
      icon: Landmark,
      title: "Financial Compliance",
      industry: "Financial Services",
      bullets: [
        "Automated regulatory compliance monitoring (SOX, GDPR, PCI)",
        "Loan agreement risk scoring and analysis automation",
        "Anti-money laundering (AML) transaction monitoring",
        "Securities law compliance checking and reporting",
      ],
    },
    {
      icon: Stethoscope,
      title: "Healthcare Legal Compliance",
      industry: "Healthcare",
      bullets: [
        "HIPAA compliance monitoring preventing data breaches",
        "Medical malpractice risk assessment and mitigation",
        "Healthcare contract and vendor agreement optimization",
        "Patient consent form automation and compliance checking",
      ],
    },
    {
      icon: Home,
      title: "Real Estate Transactions",
      industry: "Real Estate",
      bullets: [
        "Purchase agreement analysis with risk identification",
        "Lease agreement optimization and tenant screening",
        "Title search automation and verification processes",
        "Zoning compliance checking and regulatory guidance",
      ],
    },
    {
      icon: UserCheck,
      title: "HR Legal Operations",
      industry: "Human Resources",
      bullets: [
        "Employment contract generation with compliance checking",
        "Workplace policy monitoring and discrimination risk assessment",
        "Benefits administration legal guidance and compliance",
        "Termination and severance agreement optimization",
      ],
    },
    {
      icon: Package,
      title: "Procurement Legal Support",
      industry: "Procurement & Supply Chain",
      bullets: [
        "Vendor contract analysis and negotiation support",
        "Supply chain compliance monitoring across jurisdictions",
        "International trade law guidance and documentation",
        "Supplier risk assessment and mitigation strategies",
      ],
    },
    {
      icon: Monitor,
      title: "Technology Legal Compliance",
      industry: "Technology & SaaS",
      bullets: [
        "Privacy policy and terms of service optimization",
        "Data protection compliance automation (GDPR, CCPA)",
        "Software licensing and intellectual property protection",
        "Cybersecurity legal compliance and incident response",
      ],
    },
    {
      icon: GraduationCap,
      title: "Educational Institution Support",
      industry: "Education",
      bullets: [
        "FERPA compliance monitoring and student privacy protection",
        "Title IX policy management and compliance automation",
        "Faculty contract and tenure agreement analysis",
        "Educational technology compliance (COPPA, CIPA) monitoring",
      ],
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Use-Cases" }]} className="mb-6" />

          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Real-World Impact
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              AI-Powered Legal&nbsp;
              <span className="block text-black">Use-Cases</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover 40+ AI-powered legal use cases across 10 industries, delivering measurable results and
              transforming legal operations.
            </p>
          </div>
        </div>
      </section>

      {/* Use-Cases Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((item, idx) => (
              <Card key={idx} className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex p-4 rounded-2xl bg-black text-white group-hover:scale-110 transition-transform">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-black">{item.title}</CardTitle>
                      <p className="text-sm text-gray-500">{item.industry}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center text-gray-600 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Automate Your Legal Workflow?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start a free trial or talk to our experts to learn how Vidhaana can solve your specific use-case.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg h-auto">
            <Link href="/contact" className="flex items-center">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
