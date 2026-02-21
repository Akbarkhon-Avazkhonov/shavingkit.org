import type React from "react"
import type { Metadata, Viewport } from "next"
import { Syne, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "ShavingKit.org - Shaving, Sharpened.",
  description: "Precision tools for the ultimate skin ritual. From surgical-grade steel to nutrient-rich lathers. Discover the kit that defines your edge.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.jpg",
  },
}

export const viewport: Viewport = {
  themeColor: "#101419",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${montserrat.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
