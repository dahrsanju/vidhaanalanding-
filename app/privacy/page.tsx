import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Shield, Eye, Lock, Database, UserCheck, Globe, Clock, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Vidhaana AI Legal Assistant | Data Protection & Security",
  description:
    "Learn how Vidhaana protects your privacy and personal data. Our comprehensive privacy policy covers data collection, usage, storage, and your rights under GDPR and CCPA.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "CCPA compliance",
    "data security",
    "personal information",
    "AI legal privacy",
    "data collection",
    "user rights",
    "data processing",
  ],
  alternates: {
    canonical: "https://vidhaana.com/privacy",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  description: "Privacy policy for Vidhaana AI legal assistant",
  url: "https://vidhaana.com/privacy",
  dateModified: new Date().toISOString(),
}

export default function PrivacyPage() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account (name, email, company)",
        "Legal documents and content you submit for analysis",
        "Usage data and interaction patterns with our AI system",
        "Technical information like IP address, browser type, and device information",
        "Communication records when you contact our support team",
      ],
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        "Provide AI-powered legal assistance and document analysis",
        "Improve our AI models and service quality",
        "Send important service updates and security notifications",
        "Provide customer support and respond to your inquiries",
        "Comply with legal obligations and protect our rights",
      ],
    },
    {
      icon: Lock,
      title: "Data Security & Protection",
      content: [
        "AES-256 encryption for all data in transit and at rest",
        "SOC 2 Type II certified security controls and procedures",
        "Regular security audits and penetration testing",
        "Multi-factor authentication and access controls",
        "Secure data centers with 24/7 monitoring",
      ],
    },
    {
      icon: UserCheck,
      title: "Your Rights & Choices",
      content: [
        "Access and download your personal data",
        "Correct or update inaccurate information",
        "Delete your account and associated data",
        "Opt-out of non-essential communications",
        "Data portability to another service provider",
      ],
    },
    {
      icon: Globe,
      title: "International Transfers",
      content: [
        "Data may be processed in countries where we operate",
        "Adequate protection measures for international transfers",
        "Compliance with GDPR for EU residents",
        "Privacy Shield and Standard Contractual Clauses",
        "Regular assessment of data transfer mechanisms",
      ],
    },
    {
      icon: Clock,
      title: "Data Retention",
      content: [
        "Account data retained while your account is active",
        "Legal documents deleted within 30 days of analysis completion",
        "Usage data anonymized after 12 months",
        "Support communications retained for 3 years",
        "Legal compliance data retained as required by law",
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
            <Breadcrumbs items={[{ label: "Privacy Policy" }]} className="mb-8" />

            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Your Privacy Matters
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Privacy Policy</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are committed to protecting your privacy and ensuring the security of your personal information. This
                policy explains how we collect, use, and safeguard your data.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg text-left">
                <p className="text-blue-800 font-medium">
                  <strong>Last Updated:</strong>{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-blue-700 mt-2">
                  This privacy policy is effective immediately and applies to all users of Vidhaana's services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
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
                <FileText className="w-12 h-12 text-black mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-black mb-4">Questions About Your Privacy?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  If you have any questions about this privacy policy or how we handle your data, please don't hesitate
                  to contact our privacy team.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Email:</strong> privacy@vidhaana.com
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Legal Tech Ave, San Francisco, CA 94105
                  </p>
                  <p>
                    <strong>Response Time:</strong> We respond to privacy inquiries within 48 hours
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
