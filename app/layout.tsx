import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import EmergencyBanner from '@/components/shared/EmergencyBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Heavy Air and Heat, Inc. | Commercial & Residential HVAC Services',
  description: '24/7 HVAC services for commercial and residential customers. Emergency repairs, installations, and maintenance.',
  keywords: ['HVAC', 'heating', 'cooling', 'air conditioning', 'commercial HVAC', 'emergency repair'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <EmergencyBanner />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
