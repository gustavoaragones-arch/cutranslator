import type { Metadata } from "next";
import { DM_Sans, Fraunces, JetBrains_Mono, Playfair_Display, Protest_Strike } from "next/font/google";
import { AITransparencyBlock } from "@/components/AITransparencyBlock";
import { EducationalDisclaimer } from "@/components/EducationalDisclaimer";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildSiteIdentityGraph } from "@/lib/structured-data";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const protestStrike = Protest_Strike({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

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

// NEXT_PUBLIC_* vars are inlined at build time; fall back to the canonical apex
// so metadataBase (and the sitemap index <loc> entries Next.js derives from it)
// never resolves to http://localhost:3000 in any environment.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cutranslator.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
      className={`${fraunces.variable} ${jetbrainsMono.variable} ${protestStrike.variable} ${playfair.variable} ${dmSans.variable} h-full antialiased`}
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
