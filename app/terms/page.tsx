import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Scale, FileText, AlertTriangle, Shield, Users, Gavel, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Vidhaana AI Legal Assistant | User Agreement & Conditions",
  description:
    "Read Vidhaana's comprehensive terms of service and user agreement. Understand your rights and responsibilities when using our AI-powered legal assistance platform.",
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
  publisher: {
    "@type": "Organization",
    name: "Vidhaana",
  },
}

export default function TermsPage() {
  const sections = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      content: [
        "By accessing or using Vidhaana's AI legal assistant services, you agree to be bound by these comprehensive terms of service",
        "You must be at least 18 years old and have the legal capacity to enter into binding agreements to use our services",
        "If you disagree with any part of these terms, you may not access or use our AI legal assistance platform",
        "We may update these terms from time to time with reasonable notice to users via email or platform notifications",
        "Continued use of our services after changes constitutes acceptance of the updated terms and conditions",
        "These terms apply to all users, including individuals, businesses, law firms, and enterprise clients",
      ],
    },
    {
      icon: Users,
      title: "User Accounts & Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality and security of your account credentials",
        "You must provide accurate, complete, and up-to-date information when creating and maintaining your account",
        "You are fully responsible for all activities that occur under your account, including unauthorized access",
        "You must notify us immediately of any unauthorized use of your account or security breaches",
        "You may not share your account credentials with others or allow multiple users to access a single account",
        "You agree to use strong passwords and enable two-factor authentication when available",
        "Account suspension or termination may occur for violations of these terms or suspicious activity",
      ],
    },
    {
      icon: FileText,
      title: "Service Description & Limitations",
      content: [
        "Vidhaana provides AI-powered legal information, document analysis, and research assistance services",
        "Our service does not constitute legal advice and does not create attorney-client relationships",
        "AI analysis and recommendations are for informational purposes and should not replace professional legal counsel",
        "We do not guarantee the accuracy, completeness, or reliability of AI-generated content or analysis",
        "Users should verify all information with qualified legal professionals before making important decisions",
        "Service availability may be subject to maintenance, updates, or technical limitations",
        "We reserve the right to modify, suspend, or discontinue services with reasonable notice",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Uses & Conduct",
      content: [
        "Using the service for any unlawful purpose, illegal activity, or violation of applicable laws",
        "Attempting to gain unauthorized access to our systems, other users' accounts, or restricted areas",
        "Uploading, transmitting, or distributing malicious code, viruses, malware, or harmful content",
        "Reverse engineering, decompiling, or attempting to extract our proprietary AI models or algorithms",
        "Using the service to compete with, replicate, or create derivative works of our offerings",
        "Harassing, threatening, or engaging in abusive behavior toward other users or our staff",
        "Violating intellectual property rights or engaging in copyright infringement",
      ],
    },
    {
      icon: Shield,
      title: "Intellectual Property Rights",
      content: [
        "Vidhaana retains all rights, title, and interest in our AI technology, software, platform, and proprietary content",
        "Users retain ownership of their submitted documents, content, and personal information",
        "We may use anonymized and aggregated data to improve our AI models, services, and platform functionality",
        "Users grant us a limited, non-exclusive license to process their content for service delivery purposes",
        "Third-party content and materials are subject to respective owners' intellectual property rights",
        "Users may not copy, modify, distribute, or create derivative works from our proprietary technology",
        "Trademark and service mark rights are reserved and protected under applicable law",
      ],
    },
    {
      icon: Gavel,
      title: "Limitation of Liability & Disclaimers",
      content: [
        "Vidhaana's total liability is limited to the amount paid for services in the 12 months preceding the claim",
        "We are not liable for indirect, incidental, consequential, punitive, or special damages of any kind",
        "Users assume full responsibility for decisions made based on AI-generated information or analysis",
        "We do not warrant uninterrupted, error-free, or completely secure service operation",
        "Services are provided 'as is' without warranties of merchantability or fitness for particular purposes",
        "Some jurisdictions may not allow certain liability limitations, so these may not apply to you",
        "Force majeure events beyond our reasonable control may affect service availability",
      ],
    },
    {
      icon: Scale,
      title: "Dispute Resolution & Governing Law",
      content: [
        "Disputes will be resolved through binding arbitration rather than court proceedings or class actions",
        "Arbitration will be conducted under the Commercial Arbitration Rules of the American Arbitration Association",
        "Each party will bear their own costs, fees, and expenses in arbitration proceedings",
        "Class action lawsuits, jury trials, and punitive damages are expressly waived by all parties",
        "California state law governs these terms and any disputes arising from or related to our services",
        "Exclusive jurisdiction for any non-arbitrable matters lies with California state and federal courts",
        "The United Nations Convention on Contracts for the International Sale of Goods does not apply",
      ],
    },
    {
      icon: Clock,
      title: "Termination & Account Closure",
      content: [
        "Either party may terminate this agreement at any time with or without cause upon reasonable notice",
        "We may immediately suspend or terminate accounts for material violations of these terms",
        "Upon termination, your right to use the service ceases immediately and access will be revoked",
        "We will provide reasonable notice before terminating accounts for non-payment or policy violations",
        "Certain provisions of these terms survive termination, including intellectual property and liability limitations",
        "Data retention and deletion will be handled according to our Privacy Policy and applicable law",
        "Refunds for prepaid services may be provided at our discretion based on the circumstances",
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
                These comprehensive terms govern your use of Vidhaana's AI-powered legal assistance platform. Please
                read them carefully before using our services, as they contain important information about your rights
                and obligations.
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
                  terms of service. If you do not agree to these terms, please do not use our AI legal assistance
                  platform.
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

        {/* Additional Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service Level Agreement */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-black mb-4">Service Level Agreement</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We strive to provide reliable, high-quality AI legal assistance services with the following
                  commitments:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 99.9% uptime availability target</li>
                  <li>• Response times under 2 seconds for AI queries</li>
                  <li>• 24/7 customer support for premium users</li>
                  <li>• Regular security updates and maintenance</li>
                </ul>
              </div>

              {/* Compliance & Certifications */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-black mb-4">Compliance & Certifications</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our platform maintains industry-leading security and compliance standards:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• SOC 2 Type II certified security controls</li>
                  <li>• GDPR and CCPA privacy compliance</li>
                  <li>• ISO 27001 information security standards</li>
                  <li>• Regular third-party security audits</li>
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
                <Gavel className="w-12 h-12 text-black mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-black mb-4">Questions About These Terms?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  If you have any questions about these terms of service, need clarification on any provisions, or
                  require assistance with legal compliance matters, please contact our legal team.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
                  <div>
                    <p className="font-medium text-black mb-2">Legal Department</p>
                    <p>
                      <strong>Email:</strong> legal@vidhaana.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-black mb-2">Business Address</p>
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
                    <strong>Response Time:</strong> We respond to legal inquiries within 72 hours during business days.
                    For urgent matters, please call our main number and request priority assistance.
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
