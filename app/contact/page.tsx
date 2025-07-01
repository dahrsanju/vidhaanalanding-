import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Vidhaana AI Legal Assistant | Get Expert Legal Help | Free Consultation",
  description:
    "Contact Vidhaana for AI-powered legal assistance. Get expert legal guidance 24/7. Send us a message or email for professional legal consultation and support. Free initial consultation available.",
  keywords: [
    "contact AI legal assistant",
    "legal consultation contact",
    "AI legal help contact",
    "legal assistance contact",
    "legal AI support",
    "contact legal experts",
    "AI legal consultation",
    "legal guidance contact",
    "professional legal contact",
    "legal AI inquiry",
    "free legal consultation",
    "legal AI demo",
    "legal technology support",
  ],
  openGraph: {
    title: "Contact Vidhaana AI Legal Assistant | Get Expert Legal Help",
    description: "Get in touch with our AI legal experts for professional legal assistance and consultation.",
    url: "https://vidhaana.com/contact",
  },
  alternates: {
    canonical: "https://vidhaana.com/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
