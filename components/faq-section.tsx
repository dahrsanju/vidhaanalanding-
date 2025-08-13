"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FAQItem {
  question: string
  answer: string
  category?: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
  title?: string
  description?: string
}

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our AI legal assistant",
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
              {title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-black">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-3 sm:p-4 lg:p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    aria-expanded={openItems.includes(index)}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-base sm:text-lg font-semibold pr-2 sm:pr-4">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" />
                    )}
                  </button>

                  {openItems.includes(index) && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6 text-gray-600 leading-relaxed text-sm sm:text-base"
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      {faq.answer}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
