import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AITransparencyBlock } from "@/components/AITransparencyBlock";
import { EducationalDisclaimer } from "@/components/EducationalDisclaimer";
import { SiteFooter } from "@/components/SiteFooter";
import { buildSiteIdentityGraph } from "@/lib/structured-data";
import { getSiteUrl, site } from "@/lib/site";
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
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `Beef Cut Translator | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Global beef cut ontology: translate regional names across countries with ambiguity-aware mappings.",
};

const siteIdentityLd = buildSiteIdentityGraph();

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
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteIdentityLd) }}
        />
        {children}
        <AITransparencyBlock />
        <EducationalDisclaimer />
        <SiteFooter />
      </body>
    </html>
  );
}
