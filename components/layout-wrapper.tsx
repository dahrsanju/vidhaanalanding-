"use client"

import { usePathname } from "next/navigation"
import HeaderEnhanced from "./header-enhanced"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLandingPage = pathname === "/landing"

  return (
    <>
      {!isLandingPage && <HeaderEnhanced />}
      {children}
    </>
  )
}
