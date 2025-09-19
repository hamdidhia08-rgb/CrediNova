import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Charge les polices avec variables CSS
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CrediNova",
  description: "Fast, secure, and customizable credit card packs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
   <body className="font-sans antialiased text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen">
      {children}
    </body>

    </html>
  );
}
