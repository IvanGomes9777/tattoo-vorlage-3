import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { JsonLd, baseGraph } from "@/lib/schema";
import { studio } from "@/lib/studio";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const viewport: Viewport = {
  themeColor: "#fbf7f1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(studio.url),
  title: {
    default: "Clitze Clein – Veganes Tattoo Atelier in Münster | by Chiara",
    template: "%s | Clitze Clein Münster",
  },
  description:
    "Veganes & nachhaltiges Tattoo Atelier in Münster. Auf 22 m² tätowiert Chiara mit Herz – plastikfrei, persönlich und für alle. Everybody's welcome. Jetzt Termin anfragen.",
  keywords: [
    "Tattoo Münster",
    "veganes Tattoo Studio",
    "nachhaltiges Tattoo",
    "Tätowiererin Münster",
    "Fine-Line Tattoo Münster",
    "Clitze Clein",
  ],
  authors: [{ name: studio.owner }],
  creator: studio.owner,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: studio.url,
    siteName: studio.name,
    title: "Clitze Clein – Veganes Tattoo Atelier in Münster",
    description:
      "Dein clitze cleines, veganes & nachhaltiges Tattoo Atelier in Münster. Everybody's welcome.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={baseGraph()} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
