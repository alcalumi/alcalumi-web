import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alcalumi | AI Consulting by Miguel Cabanes",
  description:
    "Strategic AI consulting to help businesses harness the power of artificial intelligence. From strategy to implementation, we transform how you work.",
  keywords: [
    "AI consulting",
    "artificial intelligence",
    "AI strategy",
    "machine learning",
    "AI implementation",
    "digital transformation",
  ],
  openGraph: {
    title: "Alcalumi | AI Consulting",
    description:
      "Strategic AI consulting to help businesses harness the power of artificial intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
