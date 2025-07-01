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
  Users,
  AlertTriangle,
  Brain,
  CheckCircle,
  TrendingUp,
  Sparkles,
  ArrowRight,
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
      <div className="bg-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-white pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Real Success Stories
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                Real-World AI Legal
                <span className="block text-black">Success Stories</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                See how our AI legal assistance transforms legal challenges into measurable business results across
                different scenarios and industries
              </p>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">Use Case Categories</h2>
              <p className="text-lg text-gray-600">
                Comprehensive AI legal solutions across all legal domains and practice areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="border-2 border-black text-center hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <category.icon className="h-8 w-8 mx-auto mb-3 text-black" />
                    <h3 className="font-semibold mb-1 text-black">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count} Use Cases</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="border-2 border-black hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex p-3 rounded-2xl bg-black text-white group-hover:scale-110 transition-transform">
                          <useCase.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-black">{useCase.title}</CardTitle>
                          <p className="text-sm text-gray-600">
                            {useCase.scenario} • {useCase.industry}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-1 flex items-center text-black">
                        <AlertTriangle className="w-4 h-4 mr-1" />
                        Challenge:
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{useCase.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-1 flex items-center text-black">
                        <Brain className="w-4 h-4 mr-1" />
                        AI Solution:
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{useCase.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-1 flex items-center text-black">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Results:
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{useCase.outcome}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {useCase.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="bg-gray-100 p-2 rounded text-center">
                          <p className="text-xs font-semibold text-black">{metric}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 p-3 rounded-xl border-l-4 border-black">
                      <h4 className="font-semibold text-sm mb-1 flex items-center text-black">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Timeline:
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">{useCase.timeline}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Proven Results Across All Use Cases</h2>
              <p className="text-lg text-gray-300">
                Consistent success metrics across different legal scenarios and industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">65%</div>
                <p className="text-gray-300">Average Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">75%</div>
                <p className="text-gray-300">Faster Processing Time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <p className="text-gray-300">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-gray-300">Compliance Achievement</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Ready to Create Your
              <span className="block text-black">Success Story?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who have transformed their legal processes with AI and achieved
              measurable results
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg h-auto">
                <Link href="/contact" className="flex items-center">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg h-auto bg-transparent"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
