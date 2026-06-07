import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Invoice Tax Optimizer',
  description: 'Optimize Stripe invoices for multi-state tax compliance automatically.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a6527c81-44b8-4a1e-902e-85a1de357462"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
