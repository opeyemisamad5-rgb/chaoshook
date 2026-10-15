import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/config";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "CHAOS HOOK — HOOK INTO THE CHAOS | $CHAOS",
  description:
    "Welcome to CHAOS HOOK. An experimental corner of Web3 where unpredictability meets onchain culture. THE MARKET IS ORDER. WE ARE THE INTERRUPTION.",
  keywords: ["CHAOS HOOK", "$CHAOS", "Web3", "crypto", "experimental", "onchain culture"],
  authors: [{ name: "CHAOS HOOK" }],
  metadataBase: new URL("https://chaoshook.example.com"),
  openGraph: {
    title: "CHAOS HOOK — HOOK INTO THE CHAOS",
    description:
      "THE MARKET IS ORDER. WE ARE THE INTERRUPTION. An experimental corner of Web3.",
    type: "website",
    siteName: "CHAOS HOOK"
  },
  twitter: {
    card: "summary_large_image",
    title: "CHAOS HOOK — HOOK INTO THE CHAOS",
    description: "THE MARKET IS ORDER. WE ARE THE INTERRUPTION. $CHAOS"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="bg-void font-display text-bone antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-acid focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-black"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.name,
              slogan: SITE.tagline,
              description: SITE.description
            })
          }}
        />
      </body>
    </html>
  );
}
