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
  publisher: {
    "@type": "Organization",
    name: "Vidhaana",
  },
}

export default function PrivacyPage() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account (name, email, company details)",
        "Legal documents and content you submit for AI analysis and review",
        "Usage data and interaction patterns with our AI legal assistant system",
        "Technical information including IP address, browser type, device information, and operating system",
        "Communication records when you contact our customer support team",
        "Payment information processed securely through our payment processors",
        "Cookies and similar tracking technologies for website functionality and analytics",
      ],
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        "Provide AI-powered legal assistance, document analysis, and legal research services",
        "Improve our AI models, algorithms, and overall service quality through machine learning",
        "Send important service updates, security notifications, and account-related communications",
        "Provide customer support and respond to your inquiries and technical issues",
        "Comply with legal obligations, protect our rights, and ensure platform security",
        "Process payments and manage your subscription and billing information",
        "Analyze usage patterns to enhance user experience and develop new features",
      ],
    },
    {
      icon: Lock,
      title: "Data Security & Protection",
      content: [
        "AES-256 encryption for all data in transit and at rest with military-grade security",
        "SOC 2 Type II certified security controls, procedures, and regular compliance audits",
        "Regular security audits, penetration testing, and vulnerability assessments",
        "Multi-factor authentication, role-based access controls, and zero-trust architecture",
        "Secure data centers with 24/7 monitoring, redundancy, and disaster recovery plans",
        "Employee security training and background checks for all personnel with data access",
        "Incident response procedures and breach notification protocols",
      ],
    },
    {
      icon: UserCheck,
      title: "Your Rights & Choices",
      content: [
        "Access and download your personal data in a portable format",
        "Correct, update, or modify inaccurate or incomplete information",
        "Delete your account and request removal of associated personal data",
        "Opt-out of non-essential marketing communications and promotional emails",
        "Data portability rights to transfer your information to another service provider",
        "Object to certain types of data processing for legitimate interests",
        "Withdraw consent for data processing where consent is the legal basis",
      ],
    },
    {
      icon: Globe,
      title: "International Data Transfers",
      content: [
        "Data may be processed in countries where we operate our services and infrastructure",
        "Adequate protection measures implemented for all international data transfers",
        "Full compliance with GDPR requirements for EU residents and data subjects",
        "Standard Contractual Clauses and other approved transfer mechanisms",
        "Regular assessment and monitoring of data transfer mechanisms and adequacy decisions",
        "Binding Corporate Rules for intra-group transfers where applicable",
        "Data localization options available for enterprise clients with specific requirements",
      ],
    },
    {
      icon: Clock,
      title: "Data Retention Policies",
      content: [
        "Account data retained while your account remains active and for legitimate business purposes",
        "Legal documents and analysis results deleted within 30 days of completion unless otherwise requested",
        "Usage data anonymized and aggregated after 12 months for analytics purposes",
        "Customer support communications retained for 3 years for quality assurance",
        "Legal compliance data retained as required by applicable laws and regulations",
        "Backup data securely deleted according to our data retention schedule",
        "Right to request early deletion of data subject to legal and contractual obligations",
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
                comprehensive policy explains how we collect, use, protect, and safeguard your data when using our
                AI-powered legal services.
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
                  This privacy policy is effective immediately and applies to all users of Vidhaana's AI legal assistant
                  services. We may update this policy from time to time, and we will notify you of any material changes.
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

        {/* Additional Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cookies Policy */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-black mb-4">Cookie Policy</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We use cookies and similar technologies to enhance your experience, analyze usage patterns, and
                  provide personalized content.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Essential cookies for website functionality</li>
                  <li>• Analytics cookies to understand user behavior</li>
                  <li>• Preference cookies to remember your settings</li>
                  <li>• Marketing cookies for relevant advertisements</li>
                </ul>
              </div>

              {/* Third-Party Services */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-black mb-4">Third-Party Services</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We work with trusted third-party service providers to deliver our services effectively and securely.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Payment processors for secure transactions</li>
                  <li>• Cloud infrastructure providers for hosting</li>
                  <li>• Analytics services for usage insights</li>
                  <li>• Customer support platforms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-center">
                <FileText className="w-12 h-12 text-black mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-black mb-4">Questions About Your Privacy?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  If you have any questions about this privacy policy, how we handle your data, or want to exercise your
                  privacy rights, please don't hesitate to contact our dedicated privacy team.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
                  <div>
                    <p className="font-medium text-black mb-2">Privacy Officer</p>
                    <p>
                      <strong>Email:</strong> privacy@vidhaana.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-black mb-2">Mailing Address</p>
                    <p>
                      123 Legal Tech Ave
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Response Time:</strong> We respond to privacy inquiries within 48 hours and data subject
                    requests within 30 days as required by applicable law.
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
