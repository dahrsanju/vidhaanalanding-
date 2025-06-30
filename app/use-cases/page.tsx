import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Briefcase,
  UserCheck,
  FileText,
  Gavel,
  BookOpen,
  PenTool,
  Building,
  Shield,
  Home,
  Users,
  AlertTriangle,
  Brain,
  CheckCircle,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Use Cases | Real Success Stories & Case Studies | 70% Cost Reduction",
  description:
    "Explore real-world AI legal use cases with proven results. See how businesses reduced legal costs by 70%, improved compliance, and streamlined legal processes with our AI assistant. Real case studies included.",
  keywords: [
    "AI legal use cases",
    "legal AI case studies",
    "AI legal success stories",
    "legal automation examples",
    "contract management AI",
    "legal compliance AI",
    "litigation support AI",
    "legal document automation",
    "AI legal ROI",
    "legal technology results",
    "legal cost reduction",
    "AI legal efficiency",
    "legal process automation",
    "legal AI benefits",
  ],
  openGraph: {
    title: "AI Legal Use Cases | Real Success Stories & Case Studies",
    description:
      "See how our AI legal assistant transforms legal challenges into solutions with proven results across different scenarios.",
    url: "https://vidhaana.com/use-cases",
  },
  alternates: {
    canonical: "https://vidhaana.com/use-cases",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Legal Use Cases",
  description: "Real-world use cases and success stories of AI legal assistance",
  url: "https://vidhaana.com/use-cases",
  mainEntity: {
    "@type": "ItemList",
    name: "Legal AI Use Cases",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Contract Management",
        description: "AI-powered contract review and management solutions",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Employment Law Compliance",
        description: "HR legal compliance and dispute resolution",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Legal Document Drafting",
        description: "Automated legal document creation and customization",
      },
    ],
  },
}

export default function UseCasesPage() {
  const useCases = [
    {
      icon: Briefcase,
      title: "Contract Management & Review",
      scenario: "Small Business Owner",
      industry: "Business Services",
      problem:
        "Sarah runs a growing consulting firm and needs to review supplier contracts, employment agreements, and client contracts but can't afford expensive legal fees of $400/hour for routine reviews.",
      solution:
        "AI analyzes contracts in minutes, identifies potential risks like unfavorable termination clauses, suggests improvements such as liability caps, and ensures compliance with local employment laws.",
      outcome:
        "Reduced legal costs by 70% (from $20,000 to $6,000 annually), improved contract quality with standardized risk assessments, and faster contract turnaround from 2 weeks to 2 days.",
      metrics: [
        "70% cost reduction",
        "85% faster processing",
        "95% risk identification accuracy",
        "100% compliance rate",
      ],
      timeline: "Implementation: 1 day, Results: Immediate",
    },
    {
      icon: UserCheck,
      title: "Employment Law Compliance",
      scenario: "HR Manager at Tech Startup",
      industry: "Technology",
      problem:
        "Mike manages HR for a 150-person startup dealing with complex employment issues, workplace disputes, remote work policies, and needs guidance on labor law compliance across multiple states.",
      solution:
        "AI provides instant guidance on employment law, helps draft compliant policies for remote work, offers dispute resolution strategies, and monitors regulatory changes across all operating states.",
      outcome:
        "Faster resolution of HR issues (3 days vs 3 weeks), improved compliance with employment regulations, reduced legal disputes by 60%, and standardized policies across all locations.",
      metrics: ["60% fewer disputes", "90% faster resolution", "100% policy compliance", "50% cost savings"],
      timeline: "Setup: 2 days, Full benefits: 30 days",
    },
    {
      icon: FileText,
      title: "Legal Document Drafting",
      scenario: "Startup Founder",
      industry: "Technology",
      problem:
        "Alex is launching a SaaS startup and needs various legal documents including privacy policies, terms of service, partnership agreements, and investor contracts but has limited budget for legal fees.",
      solution:
        "AI assists in drafting customized legal documents based on business model, industry requirements, and jurisdiction. Provides templates, clause recommendations, and compliance checks for GDPR, CCPA, and other regulations.",
      outcome:
        "Professional legal documents created in hours instead of weeks, saving $15,000 in legal fees, faster time-to-market, and investor-ready documentation package.",
      metrics: ["$15,000 saved", "95% faster creation", "100% compliance", "Investor-ready docs"],
      timeline: "Document creation: 2-4 hours each",
    },
    {
      icon: Gavel,
      title: "Litigation Support & Research",
      scenario: "Solo Legal Practitioner",
      industry: "Legal Services",
      problem:
        "Jennifer is a solo attorney handling complex commercial litigation cases and needs to research case law, analyze legal precedents, and prepare legal arguments but has limited time and resources for extensive research.",
      solution:
        "AI conducts comprehensive legal research across multiple databases, identifies relevant precedents, analyzes case strengths and weaknesses, and helps structure persuasive legal arguments with supporting citations.",
      outcome:
        "Reduced research time by 60%, improved case preparation quality, won 80% of cases (up from 65%), and increased billable hours for client work instead of research.",
      metrics: ["60% time savings", "80% win rate", "40% more billable hours", "95% research accuracy"],
      timeline: "Research: Hours vs days, Case prep: 50% faster",
    },
    {
      icon: BookOpen,
      title: "Regulatory Compliance Monitoring",
      scenario: "Healthcare Administrator",
      industry: "Healthcare",
      problem:
        "Dr. Martinez manages a multi-location medical practice and struggles with ensuring compliance with constantly changing healthcare regulations, HIPAA requirements, and avoiding costly violations.",
      solution:
        "AI monitors regulatory changes in real-time, assesses current compliance status, provides actionable recommendations, and creates compliance checklists tailored to each location and specialty.",
      outcome:
        "Maintained 100% compliance rate, avoided potential regulatory penalties worth $2.5M, reduced compliance workload by 50%, and improved patient data security.",
      metrics: ["100% compliance", "$2.5M penalties avoided", "50% workload reduction", "Zero violations"],
      timeline: "Setup: 1 week, Ongoing monitoring: Real-time",
    },
    {
      icon: PenTool,
      title: "Intellectual Property Protection",
      scenario: "Tech Entrepreneur",
      industry: "Technology",
      problem:
        "David has developed innovative AI algorithms and needs to protect intellectual property, file patents, understand IP law, and avoid infringement issues while expanding internationally.",
      solution:
        "AI guides through IP protection process, analyzes patent landscapes, identifies potential infringement issues, suggests patent strategies, and monitors competitor IP activities across multiple jurisdictions.",
      outcome:
        "Successfully protected 5 key innovations, avoided 3 potential IP disputes, reduced patent filing costs by 40%, and established strong IP portfolio for international expansion.",
      metrics: ["5 patents protected", "3 disputes avoided", "40% cost reduction", "Global IP strategy"],
      timeline: "Patent analysis: 1 day, Filing support: Ongoing",
    },
    {
      icon: Building,
      title: "Real Estate Transaction Support",
      scenario: "Real Estate Developer",
      industry: "Real Estate",
      problem:
        "Maria develops commercial properties and needs assistance with complex real estate transactions, zoning compliance, environmental regulations, and contract negotiations with multiple parties.",
      solution:
        "AI analyzes property transactions, reviews purchase agreements, ensures zoning compliance, identifies environmental risks, and provides negotiation strategies for better deal terms.",
      outcome:
        "Reduced transaction times by 35%, improved deal terms saving $500K per project, 100% zoning compliance, and faster due diligence process.",
      metrics: ["35% faster transactions", "$500K saved per project", "100% compliance", "Zero delays"],
      timeline: "Transaction analysis: 2-4 hours, Due diligence: 50% faster",
    },
    {
      icon: Shield,
      title: "Privacy & Data Protection",
      scenario: "E-commerce Platform",
      industry: "E-commerce",
      problem:
        "Lisa runs an international e-commerce platform and needs to comply with GDPR, CCPA, and other privacy regulations while handling customer data across multiple jurisdictions.",
      solution:
        "AI analyzes data handling practices, ensures privacy policy compliance, monitors regulatory changes, provides data breach response guidance, and creates jurisdiction-specific compliance strategies.",
      outcome:
        "Achieved 100% privacy compliance across 15 countries, reduced compliance costs by 45%, improved customer trust scores, and avoided potential fines worth $10M.",
      metrics: ["100% compliance", "45% cost reduction", "15 countries covered", "$10M fines avoided"],
      timeline: "Compliance audit: 1 week, Ongoing monitoring: Real-time",
    },
    {
      icon: Home,
      title: "Family Law Guidance",
      scenario: "Individual Client",
      industry: "Personal Legal",
      problem:
        "Robert is going through a divorce and needs guidance on child custody, asset division, and legal procedures but wants to minimize legal costs while ensuring fair representation.",
      solution:
        "AI provides guidance on family law procedures, helps prepare documentation, explains legal rights and options, and offers mediation strategies to reduce conflict and costs.",
      outcome:
        "Reduced legal fees by 55%, faster resolution (6 months vs 18 months), fair custody arrangement, and preserved family relationships through mediation guidance.",
      metrics: ["55% cost reduction", "3x faster resolution", "Fair outcomes", "Preserved relationships"],
      timeline: "Initial guidance: Immediate, Case support: Ongoing",
    },
    {
      icon: Users,
      title: "Corporate Governance",
      scenario: "Board of Directors",
      industry: "Corporate",
      problem:
        "The board of a growing company needs guidance on corporate governance, fiduciary duties, compliance with securities regulations, and risk management strategies.",
      solution:
        "AI provides corporate governance guidance, monitors regulatory requirements, assists with board resolutions, ensures compliance with securities laws, and offers risk assessment tools.",
      outcome:
        "Improved governance practices, 100% regulatory compliance, reduced corporate risks by 40%, and enhanced stakeholder confidence.",
      metrics: ["100% compliance", "40% risk reduction", "Enhanced governance", "Stakeholder confidence"],
      timeline: "Governance review: 1 week, Ongoing support: Real-time",
    },
  ]

  const categories = [
    { name: "Business & Corporate", count: 4, icon: Building },
    { name: "Individual Legal", count: 2, icon: Users },
    { name: "Compliance & Regulatory", count: 2, icon: Shield },
    { name: "Litigation & Research", count: 1, icon: Gavel },
    { name: "Intellectual Property", count: 1, icon: PenTool },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Real-World AI Legal Success Stories</h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                See how our AI legal assistance transforms legal challenges into measurable business results across
                different scenarios and industries
              </p>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">Use Case Categories</h2>
              <p className="text-lg text-gray-600">
                Comprehensive AI legal solutions across all legal domains and practice areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="border-2 border-black text-center">
                  <CardContent className="p-6">
                    <category.icon className="h-8 w-8 mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count} Use Cases</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="border-2 border-black hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <useCase.icon className="h-8 w-8" />
                        <div>
                          <CardTitle className="text-lg font-bold">{useCase.title}</CardTitle>
                          <p className="text-sm text-gray-600">
                            {useCase.scenario} • {useCase.industry}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-1 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-1 text-red-600" />
                        Challenge:
                      </h4>
                      <p className="text-gray-600 text-sm">{useCase.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-1 flex items-center">
                        <Brain className="w-4 h-4 mr-1 text-blue-600" />
                        AI Solution:
                      </h4>
                      <p className="text-gray-600 text-sm">{useCase.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-1 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                        Results:
                      </h4>
                      <p className="text-gray-600 text-sm">{useCase.outcome}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {useCase.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="bg-gray-100 p-2 rounded text-center">
                          <p className="text-xs font-semibold">{metric}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                      <h4 className="font-semibold text-sm mb-1 flex items-center text-blue-800">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Timeline:
                      </h4>
                      <p className="text-sm text-blue-700">{useCase.timeline}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">Proven Results Across All Use Cases</h2>
              <p className="text-lg text-gray-600">
                Consistent success metrics across different legal scenarios and industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">65%</div>
                <p className="text-gray-600">Average Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">75%</div>
                <p className="text-gray-600">Faster Processing Time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">95%</div>
                <p className="text-gray-600">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">100%</div>
                <p className="text-gray-600">Compliance Achievement</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their legal processes with AI and achieved
              measurable results
            </p>
            <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
              <Link href="/contact">Start Your Journey</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
