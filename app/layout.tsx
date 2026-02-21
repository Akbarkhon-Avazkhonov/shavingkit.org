import type React from "react"
import type { Metadata, Viewport } from "next"
import { Archivo_Black, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Outdoornests.com - Pack the World. Carry the Comfort.",
  description: "Precision-engineered luggage for those who find home on the road. From indestructible hardshells to versatile weekenders -- your next nest is right here.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.jpg",
  },
}

export const viewport: Viewport = {
  themeColor: "#1E3A5F",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
