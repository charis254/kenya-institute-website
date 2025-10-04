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

import { Source_Serif_4, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"], variable: '--v0-font-geist' })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"], variable: '--v0-font-geist-mono' })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"], variable: '--v0-font-source-serif-4' })
const _v0_fontVariables = `${_geist.variable} ${_geistMono.variable} ${_sourceSerif_4.variable}`

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source-serif",
})

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
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${sourceSerif.variable} antialiased ${_v0_fontVariables}`}>
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
