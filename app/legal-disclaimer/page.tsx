import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Disclaimer | Vidhaana AI Legal Assistant Terms & Conditions | Important Legal Notice",
  description:
    "Important legal disclaimer for Vidhaana AI legal assistant. Understand our terms, limitations, and legal responsibilities. No attorney-client relationship created. Read before using our services.",
  keywords: [
    "legal disclaimer",
    "AI legal terms",
    "legal assistant disclaimer",
    "attorney client relationship",
    "legal AI limitations",
    "legal technology disclaimer",
    "AI legal responsibility",
    "legal guidance disclaimer",
    "legal AI terms of use",
    "legal consultation disclaimer",
    "AI legal service terms",
    "legal technology terms",
  ],
  openGraph: {
    title: "Legal Disclaimer | Vidhaana AI Legal Assistant",
    description: "Important legal disclaimer and terms for using Vidhaana AI legal assistant services.",
    url: "https://vidhaana.com/legal-disclaimer",
  },
  alternates: {
    canonical: "https://vidhaana.com/legal-disclaimer",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Legal Disclaimer",
  description: "Legal disclaimer and terms for Vidhaana AI legal assistant",
  url: "https://vidhaana.com/legal-disclaimer",
  dateModified: new Date().toISOString(),
  publisher: {
    "@type": "Organization",
    name: "Vidhaana",
  },
}

export default function LegalDisclaimerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-white pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                Legal
                <span className="block text-black">Disclaimer</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Important legal information about our AI legal assistance services and terms of use
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border-2 border-black rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-black">No Attorney-Client Relationship</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The use of Vidhaana's AI legal assistance platform does not create an attorney-client relationship
                    between you and Vidhaana, its operators, or any affiliated legal professionals. The information
                    provided through our platform is for informational purposes only and should not be construed as
                    legal advice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-black">Not a Substitute for Professional Legal Advice</h2>
                  <p className="text-gray-700 leading-relaxed">
                    While our AI system is designed to provide helpful legal information, it cannot replace the
                    personalized advice of a qualified attorney. The law is complex and varies by jurisdiction. For
                    specific legal matters, we strongly recommend consulting with a licensed attorney in your area.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-black">Accuracy and Completeness</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We strive to provide accurate and up-to-date legal information through our AI system. However, we
                    cannot guarantee the accuracy, completeness, or timeliness of the information provided. Laws change
                    frequently, and our AI system may not reflect the most recent legal developments.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-black">Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Vidhaana and its operators shall not be liable for any damages, losses, or consequences arising from
                    the use of information provided through our platform. Users assume full responsibility for any
                    actions taken based on the information received from our AI system.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-black">Confidentiality</h2>
                  <p className="text-gray-700 leading-relaxed">
                    While we implement security measures to protect your information, communications through our
                    platform may not be subject to attorney-client privilege. Do not share highly sensitive or
                    confidential information through our system without first consulting with a qualified attorney.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-black">Jurisdictional Limitations</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our AI system provides general legal information that may not be applicable to your specific
                    jurisdiction. Laws vary significantly between states, countries, and local jurisdictions. Always
                    verify the applicability of any legal information to your specific location and circumstances.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-black">Emergency Situations</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our AI platform is not designed to handle emergency legal situations. If you are facing an immediate
                    legal emergency, contact local emergency services or seek immediate assistance from a qualified
                    attorney.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-black">Updates to This Disclaimer</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to update this legal disclaimer at any time. Users are responsible for
                    reviewing this disclaimer periodically to stay informed of any changes. Continued use of our
                    platform constitutes acceptance of any updates to this disclaimer.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-black">
                  <h3 className="text-lg font-semibold mb-2 text-black">Important Notice</h3>
                  <p className="text-gray-700 leading-relaxed">
                    By using Vidhaana's AI legal assistance platform, you acknowledge that you have read, understood,
                    and agree to be bound by this legal disclaimer. If you do not agree with these terms, please do not
                    use our services.
                  </p>
                </div>

                <div className="text-center pt-8">
                  <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
