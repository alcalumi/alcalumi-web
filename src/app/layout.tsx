import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/Providers";
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
  title: "Alcalumi | Consultoría IA por Miguel Cabanes",
  description:
    "Consultoría estratégica de IA para ayudar a las empresas a aprovechar el poder de la inteligencia artificial. De la estrategia a la implementación, transformamos tu forma de trabajar.",
  keywords: [
    "consultoría IA",
    "inteligencia artificial",
    "estrategia IA",
    "machine learning",
    "implementación IA",
    "transformación digital",
    "AI consulting",
  ],
  openGraph: {
    title: "Alcalumi | Consultoría IA",
    description:
      "Consultoría estratégica de IA para ayudar a las empresas a aprovechar el poder de la inteligencia artificial.",
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
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
