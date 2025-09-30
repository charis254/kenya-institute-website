import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "KIDAR - Kenya Institute of Digital Asset Research",
  description:
    "Leading research institute for digital assets and blockchain technology in Africa, providing independent insights, professional training, and strategic advisory services.",
  generator: "v0.app",
  keywords: ["digital assets", "blockchain", "cryptocurrency", "research", "Kenya", "Africa", "training", "consulting"],
  authors: [{ name: "KIDAR Team" }],
  openGraph: {
    title: "KIDAR - Kenya Institute of Digital Asset Research",
    description: "Leading research institute for digital assets and blockchain technology in Africa",
    url: "https://kidar.org",
    siteName: "KIDAR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
