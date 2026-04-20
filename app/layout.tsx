import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Heavy Air & Heat, Inc. | HVAC Services in Corpus Christi, TX',
  description: 'Professional HVAC services, heating, air conditioning, and 24/7 emergency repair in Corpus Christi, Portland, Aransas Pass, and Rockport. Family-owned since 1975.',
  keywords: [
    'HVAC Corpus Christi',
    'air conditioning repair',
    'heating repair',
    'emergency HVAC',
    'HVAC installation',
    'AC repair Corpus Christi',
    'furnace repair',
    '24/7 HVAC service',
    'commercial HVAC',
    'residential HVAC'
  ],
  authors: [{ name: 'Heavy Air & Heat, Inc.' }],
  creator: 'Heavy Air & Heat, Inc.',
  publisher: 'Heavy Air & Heat, Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://heavy-air-heat-website.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://heavy-air-heat-website.vercel.app',
    title: 'Heavy Air & Heat, Inc. | HVAC Services in Corpus Christi, TX',
    description: 'Professional HVAC services, heating, air conditioning, and 24/7 emergency repair in Corpus Christi, Portland, Aransas Pass, and Rockport. Family-owned since 1975.',
    siteName: 'Heavy Air & Heat, Inc.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Heavy Air & Heat, Inc. - Professional HVAC Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heavy Air & Heat, Inc. | HVAC Services in Corpus Christi, TX',
    description: 'Professional HVAC services, heating, air conditioning, and 24/7 emergency repair in Corpus Christi, Portland, Aransas Pass, and Rockport.',
    images: ['/og-image.png'],
    creator: '@heavyairheat',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'HVAC Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              "name": "Heavy Air & Heat, Inc.",
              "image": "https://heavy-air-heat-website.vercel.app/logo.png",
              "@id": "https://heavy-air-heat-website.vercel.app",
              "url": "https://heavy-air-heat-website.vercel.app",
              "telephone": "+13613348023",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4109 Beard Drive",
                "addressLocality": "Corpus Christi",
                "addressRegion": "TX",
                "postalCode": "78413",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 27.8006,
                "longitude": -97.3964
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/heavyairheat",
                "https://www.instagram.com/heavyairheat",
                "https://www.linkedin.com/company/heavy-air-heat"
              ]
            })
          }}
        />
        
        {/* Chat Widget Script */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69e5502c29e846304dd7d33f"
          strategy="afterInteractive"
        />
        
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
