import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Building2, Globe, Scale, FileText, Handshake, Shield, ArrowRight, Sparkles, CheckCircle } from "lucide-react"

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
      icon: FileText,
      title: "Contract Review & Drafting",
      bullets: ["Instant clause risk scoring", "AI-suggested improvements", "Version comparison & redlining"],
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      bullets: ["Continuous rule-set monitoring", "Jurisdiction-specific alerts", "Audit-ready reporting"],
    },
    {
      icon: Scale,
      title: "Litigation Preparation",
      bullets: ["Auto-generated case summaries", "Precedent discovery", "Deposition Q&A drafting"],
    },
    {
      icon: Building2,
      title: "Corporate Governance",
      bullets: ["Policy template generation", "Board-minute automation", "Entity management reminders"],
    },
    {
      icon: Handshake,
      title: "Mergers & Acquisitions",
      bullets: ["Due-diligence document triage", "Risk heat-maps", "Deal-term benchmarking"],
    },
    {
      icon: Globe,
      title: "International Expansion",
      bullets: ["Cross-border regulatory checks", "Localization guidance", "Custom export-control watchlists"],
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
              Discover where Vidhaana delivers measurable results across the legal lifecycle.
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
                    <CardTitle className="text-xl font-bold text-black">{item.title}</CardTitle>
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
