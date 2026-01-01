import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JumpToTop from "@/components/JumpToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EMMPAC Solutions",
  description: "Best Professional video production and multimedia services provider in west bengal",
  keywords: "video production, multimedia services, construction consultancy, awareness activities, training programs, event management, West Bengal, Purulia",
  authors: [{ name: "EMMPAC Solutions" }],
  creator: "EMMPAC Solutions",
  publisher: "EMMPAC Solutions",
  metadataBase: new URL("https://emmpacsolutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EMMPAC Solutions",
    description: "Best Professional video production and multimedia services provider in west bengal",
    url: "https://emmpacsolutions.com",
    siteName: "EMMPAC Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMMPAC Solutions",
    description: "Best Professional video production and multimedia services provider in west bengal",
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

  return (
    <html lang="en">
      <body className={inter.className}>
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <JumpToTop />
      </body>
    </html>
  );
}
