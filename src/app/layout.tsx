import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import JumpToTop from "@/components/JumpToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "EMMPAC Solutions",
    template: "%s | EMMPAC Solutions",
  },
  description:
    "Construction, consultancy, inspection, waterproofing, training, media production & event management services in West Bengal, India.",
  keywords:
    "EMMPAC Solutions, emmpacsolutions, EMMPAC, construction consultancy, third party inspection, waterproofing, retrofit, structural health check, training, media production, event management, Purulia, West Bengal",
  authors: [{ name: "EMMPAC Solutions" }],
  creator: "EMMPAC Solutions",
  publisher: "EMMPAC Solutions",
  metadataBase: new URL("https://emmpacsolutions.com"),

  // GSC Verification (Checklist #2)
  // Set this in Vercel env vars as: NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  openGraph: {
    title: "EMMPAC Solutions",
    description:
      "Construction, consultancy, inspection, waterproofing, training, media production & event management services in West Bengal, India.",
    url: "https://emmpacsolutions.com",
    siteName: "EMMPAC Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMMPAC Solutions",
    description:
      "Construction, consultancy, inspection, waterproofing, training, media production & event management services in West Bengal, India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Structured Data (Checklist #3)
  // Strengthens brand/entity signals for both "emmpac solutions" and "emmpacsolutions".
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://emmpacsolutions.com/#organization",
        name: "EMMPAC Solutions",
        alternateName: [
          "EMMPAC",
          "EmmpacSolutions",
          "EMMPACSolutions",
          "emmpacsolutions",
          "EMMPACSOLUTIONS",
          "emmpac solutions",
        ],
        url: "https://emmpacsolutions.com",
        logo: "https://emmpacsolutions.com/images/logo.jpg",
        email: "emmpacsolutions@gmail.com",
        telephone: ["+918877000030", "+918116915768"],
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Emmpac Building, Ranchi Road, Opp. Sainik School, Purulia",
          addressLocality: "Purulia",
          addressRegion: "West Bengal",
          postalCode: "723149",
          addressCountry: "IN",
        },
        areaServed: ["IN-WB", "IN-JH"],
      },
      {
        "@type": "WebSite",
        "@id": "https://emmpacsolutions.com/#website",
        name: "EMMPAC Solutions",
        url: "https://emmpacsolutions.com",
        publisher: { "@id": "https://emmpacsolutions.com/#organization" },
      },
    ],
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <JumpToTop />
      </body>
    </html>
  );
}
