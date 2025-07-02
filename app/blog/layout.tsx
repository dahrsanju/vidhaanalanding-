import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Vidhaana AI Legal Blog",
    default: "AI Legal Technology Blog | Expert Insights & Industry Trends | Vidhaana",
  },
  description:
    "Stay updated with the latest AI legal technology trends, expert insights, case studies, and industry analysis from Vidhaana's legal technology experts.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
