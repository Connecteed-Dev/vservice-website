import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export const metadata: Metadata = {
  title: "V.Service - Climatizzazione e Riscaldamento",
  description: "Leader in climatizzazione e riscaldamento con 20 anni di esperienza",
  alternates: {
    canonical: SITE_URL,
    languages: {
      'it': `${SITE_URL}/it`,
      'en': `${SITE_URL}/en`,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'V.Service',
    title: 'V.Service — Impianti Termici e Climatizzazione Roma',
    description: 'Installazione e manutenzione di impianti di riscaldamento e aria condizionata a Roma e Lazio.',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1440, height: 632, alt: 'V.Service — Climatizzazione e Riscaldamento Roma' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V.Service — Impianti Termici e Climatizzazione Roma',
    description: 'Installazione e manutenzione di impianti di riscaldamento e aria condizionata a Roma e Lazio.',
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteId = process.env.NEXT_PUBLIC_IUBENDA_SITE_ID || 'IUBENDA_SITE_ID'
  const policyId = process.env.NEXT_PUBLIC_IUBENDA_POLICY_ID || 'IUBENDA_POLICY_ID'

  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Script id="iubenda-config" strategy="beforeInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {
              "siteId": ${siteId},
              "cookiePolicyId": ${policyId},
              "lang": "it",
              "storage": { "useSiteId": true }
            };
          `}
        </Script>
        <Script src="//cdn.iubenda.com/cs/iubenda_cs.js" strategy="afterInteractive" />
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
