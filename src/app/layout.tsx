import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { constructMetadata, generateStructuredData } from "@/config/seo";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateStructuredData();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0b0604] text-foreground font-sans antialiased selection:bg-orange-600 selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
