import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { AITransparencyBlock } from "@/components/AITransparencyBlock";
import { EducationalDisclaimer } from "@/components/EducationalDisclaimer";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildSiteIdentityGraph } from "@/lib/structured-data";
import { getSiteUrl, site } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const defaultTitle = `Beef Cut Translator | ${site.name}`;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description:
    "Translate beef cut names between countries with a standardized anatomical mapping—built for clarity, ambiguity, and discovery.",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    title: defaultTitle,
    description:
      "Translate beef cut names between countries with a standardized anatomical mapping.",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description:
      "Translate beef cut names between countries with a standardized anatomical mapping.",
  },
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
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteIdentityLd) }}
        />
        <SiteHeader />
        {children}
        <AITransparencyBlock />
        <EducationalDisclaimer />
        <SiteFooter />
      </body>
    </html>
  );
}
