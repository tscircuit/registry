import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClientOnlyProviders } from "@/ui/components/ClientOnlyProviders"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "tscircuit registry",
  description: "tscircuit React PCB/Schematic Components",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ClientOnlyProviders>{children}</ClientOnlyProviders>
      </body>
    </html>
  )
}
