import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import JumpToTop from "@/components/JumpToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EMMPAC SOLUTIONS",
  description: "Complete Glee Under One Roof",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-300 dark:bg-gray-900`}>
        <ThemeProvider>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
          <JumpToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
