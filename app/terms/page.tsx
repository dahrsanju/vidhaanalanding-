import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Scale, FileText, AlertTriangle, Shield, Users, Gavel, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Vidhaana AI Legal Assistant | User Agreement & Conditions",
  description:
    "Read Vidhaana's terms of service and user agreement. Understand your rights and responsibilities when using our AI-powered legal assistance platform.",
  keywords: [
    "terms of service",
    "user agreement",
    "terms and conditions",
    "legal terms",
    "service agreement",
    "user responsibilities",
    "AI legal terms",
    "platform rules",
    "service limitations",
    "user rights",
  ],
  alternates: {
    canonical: "https://vidhaana.com/terms",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service",
  description: "Terms of service for Vidhaana AI legal assistant",
  url: "https://vidhaana.com/terms",
  dateModified: new Date().toISOString(),
}

export default function TermsPage() {
  const sections = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      content: [
        "By accessing or using Vidhaana's services, you agree to be bound by these terms",
        "You must be at least 18 years old to use our services",
        "If you disagree with any part of these terms, you may not use our services",
        "We may update these terms from time to time with notice to users",
        "Continued use after changes constitutes acceptance of new terms",
      ],
    },
    {
      icon: Users,
      title: "User Accounts & Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality of your account",
        "You must provide accurate and complete information when creating an account",
        "You are responsible for all activities that occur under your account",
        "You must notify us immediately of any unauthorized use of your account",
        "You may not share your account credentials with others",
      ],
    },
    {
      icon: FileText,
      title: "Service Description & Limitations",
      content: [
        "Vidhaana provides AI-powered legal information and document analysis",
        "Our service does not constitute legal advice or create attorney-client relationships",
        "AI analysis is for informational purposes and should not replace professional legal counsel",
        "We do not guarantee the accuracy or completeness of AI-generated content",
        "Users should verify all information with qualified legal professionals",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Uses",
      content: [
        "Using the service for any unlawful purpose or illegal activity",
        "Attempting to gain unauthorized access to our systems or other users' accounts",
        "Uploading malicious code, viruses, or harmful content",
        "Reverse engineering, decompiling, or attempting to extract our AI models",
        "Using the service to compete with or replicate our offerings",
      ],
    },
    {
      icon: Shield,
      title: "Intellectual Property Rights",
      content: [
        "Vidhaana retains all rights to our AI technology, software, and platform",
        "Users retain ownership of their submitted documents and content",
        "We may use anonymized data to improve our AI models and services",
        "Users grant us a limited license to process their content for service delivery",
        "Third-party content is subject to respective owners' intellectual property rights",
      ],
    },
    {
      icon: Gavel,
      title: "Limitation of Liability",
      content: [
        "Vidhaana's liability is limited to the amount paid for services in the past 12 months",
        "We are not liable for indirect, incidental, or consequential damages",
        "Users assume responsibility for decisions made based on AI-generated information",
        "We do not warrant uninterrupted or error-free service operation",
        "Some jurisdictions may not allow certain liability limitations",
      ],
    },
    {
      icon: Scale,
      title: "Dispute Resolution",
      content: [
        "Disputes will be resolved through binding arbitration rather than court proceedings",
        "Arbitration will be conducted under the rules of the American Arbitration Association",
        "Each party will bear their own costs and fees in arbitration proceedings",
        "Class action lawsuits and jury trials are waived",
        "California law governs these terms and any disputes arising from them",
      ],
    },
    {
      icon: Clock,
      title: "Termination",
      content: [
        "Either party may terminate the agreement at any time with notice",
        "We may suspend or terminate accounts for violation of these terms",
        "Upon termination, your right to use the service ceases immediately",
        "We will provide reasonable notice before terminating accounts for non-payment",
        "Certain provisions of these terms survive termination of the agreement",
      ],
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Terms of Service" }]} className="mb-8" />

            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                <Scale className="w-4 h-4 mr-2" />
                Legal Agreement
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Terms of Service</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                These terms govern your use of Vidhaana's AI-powered legal assistance platform. Please read them
                carefully before using our services.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg text-left">
                <p className="text-amber-800 font-medium">
                  <strong>Effective Date:</strong>{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-amber-700 mt-2">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these
                  terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black mb-4">{section.title}</h2>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-center">
                <Gavel className="w-12 h-12 text-black mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-black mb-4">Questions About These Terms?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  If you have any questions about these terms of service or need clarification on any provisions, please
                  contact our legal team.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Email:</strong> legal@vidhaana.com
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Legal Tech Ave, San Francisco, CA 94105
                  </p>
                  <p>
                    <strong>Response Time:</strong> We respond to legal inquiries within 72 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
