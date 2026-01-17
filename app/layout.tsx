import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Orchid Automation | AI-Powered Business Automation',
  description: 'Fractional Automation Partner for VCs and growth-stage startups—streamlining ops and supercharging GTM with AI-powered solutions.',
  keywords: 'automation, AI, business automation, startups, fractional, operations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
        {children}
      </body>
    </html>
  )
}
