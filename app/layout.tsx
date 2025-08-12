import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import LayoutWrapper from "@/components/layout-wrapper"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Vidhaana - AI-Powered Legal Assistant",
  description: "Professional AI-powered legal assistance available 24/7.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-black antialiased`}>
        <LayoutWrapper>
          <main className="min-h-screen" role="main" id="main-content">
            {children}
          </main>
        </LayoutWrapper>
      </body>
    </html>
  )
}
