import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

// app/layout.tsx
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>

      <script src="https://widgets.leadconnectorhq.com/loader.js" data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" data-widget-id="69e5502c29e846304dd7d33f"></script>

      <Script id="bot-init" strategy="afterInteractive">
        {`
          window.MyBot?.init({
            botId: "YOUR_BOT_ID"
          });
        `}
      </Script>
    </html>
  );
}
