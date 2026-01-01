import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JumpToTop from "@/components/JumpToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EMMPAC Solutions",
  description: "Best Professional video production and multimedia services provider in west bengal"
  ,
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
