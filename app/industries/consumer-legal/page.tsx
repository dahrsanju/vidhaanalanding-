import type { Metadata } from "next"
import { FileText, Shield, Heart, Home, Briefcase, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Services for Consumers | Affordable Legal Guidance & Document Preparation",
  description:
    "Access affordable AI-powered legal services for consumers. Get legal guidance, document preparation, and expert advice 24/7. Save 90% on legal costs with personalized legal assistance for individuals and families.",
  keywords: [
    "consumer legal services",
    "affordable legal help",
    "AI legal guidance",
    "legal document preparation",
    "personal legal assistant",
    "family law assistance",
    "consumer rights protection",
    "legal advice online",
    "DIY legal documents",
    "accessible legal services",
  ],
  alternates: {
    canonical: "https://vidhaana.com/industries/consumer-legal",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Legal Services for Consumers",
  description: "Affordable AI-powered legal services and guidance for individual consumers and families",
  url: "https://vidhaana.com/industries/consumer-legal",
  provider: {
    "@type": "Organization",
    name: "Vidhaana",
  },
}

export default function ConsumerLegalPage() {
  const legalServices = [
    {
      icon: FileText,
      title: "Personal Document Creation",
      description:
        "AI-powered generation of wills, contracts, leases, and other personal legal documents with step-by-step guidance.",
      features: [
        "Will and testament creation",
        "Power of attorney documents",
        "Rental agreements and leases",
        "Employment contracts",
      ],
      benefits: "90% cost savings vs traditional attorneys",
      pricing: "Starting at $29/document",
    },
    {
      icon: Shield,
      title: "Consumer Rights Guidance",
      description:
        "Expert guidance on consumer rights, warranty claims, debt collection, and dispute resolution with personalized advice.",
      features: [
        "Consumer protection advice",
        "Warranty and return guidance",
        "Debt collection defense",
        "Dispute resolution strategies",
      ],
      benefits: "95% success rate in consumer disputes",
      pricing: "Starting at $19/consultation",
    },
    {
      icon: Briefcase,
      title: "Small Claims Support",
      description:
        "Complete support for small claims court proceedings including document preparation, strategy guidance, and representation tips.",
      features: [
        "Small claims filing assistance",
        "Evidence organization",
        "Court procedure guidance",
        "Settlement negotiation support",
      ],
      benefits: "80% higher success rate in small claims",
      pricing: "Starting at $99/case",
    },
    {
      icon: Heart,
      title: "Family Law Assistance",
      description:
        "Compassionate support for family legal matters including divorce, custody, adoption, and domestic relations guidance.",
      features: [
        "Divorce document preparation",
        "Child custody agreements",
        "Adoption paperwork assistance",
        "Domestic relations guidance",
      ],
      benefits: "75% faster resolution, reduced emotional stress",
      pricing: "Starting at $149/matter",
    },
    {
      icon: Home,
      title: "Real Estate Guidance",
      description:
        "Expert assistance with home buying, selling, landlord-tenant issues, and property-related legal matters.",
      features: [
        "Purchase agreement review",
        "Landlord-tenant dispute resolution",
        "Property deed assistance",
        "HOA dispute guidance",
      ],
      benefits: "60% fewer real estate disputes",
      pricing: "Starting at $79/consultation",
    },
    {
      icon: DollarSign,
      title: "Financial Legal Support",
      description:
        "Guidance on bankruptcy, debt management, credit repair, and financial legal matters with personalized strategies.",
      features: [
        "Bankruptcy filing assistance",
        "Debt negotiation strategies",
        "Credit repair guidance",
        "Financial planning legal advice",
      ],
      benefits: "70% debt reduction on average",
      pricing: "Starting at $199/consultation",
    },
  ]

  const consumerTypes = [
    {
      type: "Individuals",
      description: "Personal legal matters and individual rights protection",
      commonNeeds: ["Wills and estates", "Consumer disputes", "Employment issues", "Personal contracts"],
      savings: "Save $2,500+ annually",
    },
    {
      type: "Families",
      description: "Family-focused legal guidance and document preparation",
      commonNeeds: ["Family law matters", "Child custody", "Adoption", "Estate planning"],
      savings: "Save $3,500+ annually",
    },
    {
      type: "Small Business Owners",
      description: "Legal support for entrepreneurs and small business operations",
      commonNeeds: ["Business formation", "Contract review", "Employment law", "Intellectual property"],
      savings: "Save $5,000+ annually",
    },
    {
      type: "Seniors",
      description: "Specialized legal assistance for senior citizens and retirees",
      commonNeeds: ["Estate planning", "Healthcare directives", "Social security", "Elder law"],
      savings: "Save $2,000+ annually",
    },
  ]

  const successStories = [
    {
      category: "Consumer Dispute",
      story:
        "Sarah successfully resolved a $3,500 warranty dispute with our AI guidance, saving $2,800 in attorney fees.",
      outcome: "Full refund received in 30 days",
      \
