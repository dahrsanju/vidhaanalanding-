import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CheckCircle, X, Sparkles, ArrowRight, Star, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Assistant Pricing | Flexible Plans for Every Business Size",
  description:
    "Transparent pricing for Vidhaana AI legal assistant. Choose from Starter, Professional, or Enterprise plans. Free trial available. Reduce legal costs by up to 70%.",
  alternates: { canonical: "https://vidhaana.com/pricing" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Pricing Plans",
  description: "Pricing plans for Vidhaana AI legal assistant",
  url: "https://vidhaana.com/pricing",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and individual professionals",
      features: [
        "Up to 50 document reviews per month",
        "Basic contract analysis",
        "Email support",
        "Standard legal templates",
        "Basic compliance monitoring",
        "Single user access",
      ],
      notIncluded: ["Advanced AI features", "Priority support", "Custom integrations", "Multi-user access"],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and law firms",
      features: [
        "Up to 200 document reviews per month",
        "Advanced contract analysis & risk scoring",
        "Priority email & chat support",
        "Custom legal templates",
        "Advanced compliance monitoring",
        "Up to 5 user accounts",
        "API access",
        "Industry-specific guidance",
        "Bulk document processing",
      ],
      notIncluded: ["White-label solutions", "Dedicated account manager", "Custom AI training"],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited document reviews",
        "Full AI legal suite access",
        "24/7 dedicated support",
        "Custom legal templates & workflows",
        "Enterprise compliance monitoring",
        "Unlimited user accounts",
        "Full API access & integrations",
        "White-label solutions",
        "Custom AI model training",
        "Dedicated account manager",
        "SLA guarantees",
        "On-premise deployment options",
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial for all plans. No credit card required to start.",
    },
    {
      question: "Can I change my plan anytime?",
      answer:
        "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.",
    },
    {
      question: "What's included in document reviews?",
      answer:
        "Document reviews include contract analysis, risk assessment, compliance checking, and improvement suggestions.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes, we offer 20% discount for annual billing on all plans.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use enterprise-grade security with AES-256 encryption and are SOC 2 Type II compliant.",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Pricing" }]} className="mb-6" />

          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Transparent Pricing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Simple, Transparent
              <span className="block text-black">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include our core AI legal features with no hidden
              fees.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-2 hover:shadow-2xl transition-all duration-300 relative ${
                  plan.popular ? "border-black bg-black text-white" : "border-black bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-black"}`}>
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-black"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>{plan.period}</span>
                  </div>
                  <p className={`${plan.popular ? "text-gray-300" : "text-gray-600"}`}>{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className={`font-semibold mb-4 ${plan.popular ? "text-white" : "text-black"}`}>
                      What's included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle
                            className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                              plan.popular ? "text-green-400" : "text-green-600"
                            }`}
                          />
                          <span className={`text-sm ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.notIncluded.length > 0 && (
                    <div>
                      <h4 className={`font-semibold mb-4 ${plan.popular ? "text-white" : "text-black"}`}>
                        Not included:
                      </h4>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <X
                              className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                                plan.popular ? "text-gray-500" : "text-gray-400"
                              }`}
                            />
                            <span className={`text-sm ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    <Link href="/contact" className="flex items-center justify-center">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Why Choose Vidhaana?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compare the value of AI-powered legal assistance vs traditional legal services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-black">Traditional Legal Services</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <X className="w-5 h-5 mr-3 text-red-500" />
                  $300-$800 per hour
                </li>
                <li className="flex items-center text-gray-600">
                  <X className="w-5 h-5 mr-3 text-red-500" />
                  Limited availability (business hours only)
                </li>
                <li className="flex items-center text-gray-600">
                  <X className="w-5 h-5 mr-3 text-red-500" />
                  Slow response times (days to weeks)
                </li>
                <li className="flex items-center text-gray-600">
                  <X className="w-5 h-5 mr-3 text-red-500" />
                  High minimum retainers
                </li>
                <li className="flex items-center text-gray-600">
                  <X className="w-5 h-5 mr-3 text-red-500" />
                  Inconsistent quality
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-black">Vidhaana AI Legal Assistant</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  Starting at $99/month (70% cost savings)
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  24/7 availability
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  Instant responses
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  No setup fees or retainers
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  Consistent 95% accuracy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our pricing and plans</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-black">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-black">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Start Your Free Trial Today
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Legal Operations?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already saving time and money with AI-powered legal assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg h-auto">
              <Link href="/contact" className="flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg h-auto bg-transparent"
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
