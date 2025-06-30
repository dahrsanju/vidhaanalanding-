export default function LegalDisclaimerPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Legal Disclaimer</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Important information about our AI legal assistance services
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-black p-8 md:p-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">No Attorney-Client Relationship</h2>
                <p className="text-gray-700 leading-relaxed">
                  The use of Vidhaana's AI legal assistance platform does not create an attorney-client relationship
                  between you and Vidhaana, its operators, or any affiliated legal professionals. The information
                  provided through our platform is for informational purposes only and should not be construed as legal
                  advice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Not a Substitute for Professional Legal Advice</h2>
                <p className="text-gray-700 leading-relaxed">
                  While our AI system is designed to provide helpful legal information, it cannot replace the
                  personalized advice of a qualified attorney. The law is complex and varies by jurisdiction. For
                  specific legal matters, we strongly recommend consulting with a licensed attorney in your area.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Accuracy and Completeness</h2>
                <p className="text-gray-700 leading-relaxed">
                  We strive to provide accurate and up-to-date legal information through our AI system. However, we
                  cannot guarantee the accuracy, completeness, or timeliness of the information provided. Laws change
                  frequently, and our AI system may not reflect the most recent legal developments.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  Vidhaana and its operators shall not be liable for any damages, losses, or consequences arising from
                  the use of information provided through our platform. Users assume full responsibility for any actions
                  taken based on the information received from our AI system.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
                <p className="text-gray-700 leading-relaxed">
                  While we implement security measures to protect your information, communications through our platform
                  may not be subject to attorney-client privilege. Do not share highly sensitive or confidential
                  information through our system without first consulting with a qualified attorney.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Jurisdictional Limitations</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our AI system provides general legal information that may not be applicable to your specific
                  jurisdiction. Laws vary significantly between states, countries, and local jurisdictions. Always
                  verify the applicability of any legal information to your specific location and circumstances.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Emergency Situations</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our AI platform is not designed to handle emergency legal situations. If you are facing an immediate
                  legal emergency, contact local emergency services or seek immediate assistance from a qualified
                  attorney.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Updates to This Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to update this legal disclaimer at any time. Users are responsible for reviewing
                  this disclaimer periodically to stay informed of any changes. Continued use of our platform
                  constitutes acceptance of any updates to this disclaimer.
                </p>
              </div>

              <div className="bg-gray-100 p-6 border-l-4 border-black">
                <h3 className="text-lg font-semibold mb-2">Important Notice</h3>
                <p className="text-gray-700">
                  By using Vidhaana's AI legal assistance platform, you acknowledge that you have read, understood, and
                  agree to be bound by this legal disclaimer. If you do not agree with these terms, please do not use
                  our services.
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
  )
}
