import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import JumpToTop from "@/components/JumpToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

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
  // IMPORTANT: don't set a single canonical for the entire site here.
  // Set canonicals per page instead.
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

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://emmpacsolutions.com/#organization",
        name: "EMMPAC Solutions",
        alternateName: [
          "EMMPAC",
          "EmmpacSolutions",
          "EMMPACSolutions",
          "emmpacsolutions", // exact no-space query
          "emmpac solutions" // spaced variant (optional)
        ],
        url: "https://emmpacsolutions.com",
        logo: "https://emmpacsolutions.com/images/logo.jpg",
      },
      {
        "@type": "WebSite",
        "@id": "https://emmpacsolutions.com/#website",
        name: "EMMPAC Solutions",
        url: "https://emmpacsolutions.com",
        publisher: { "@id": "https://emmpacsolutions.com/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://emmpacsolutions.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
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
