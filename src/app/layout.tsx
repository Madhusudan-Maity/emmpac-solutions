import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JumpToTop from "@/components/JumpToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EMMPAC Solutions",
  description: "Professional video production and multimedia services",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
