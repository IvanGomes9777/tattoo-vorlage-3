import type { Metadata } from "next";
import RatenFlow from "@/components/RatenFlow";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dein Tattoo auf Raten – powered by PayPal",
  description:
    "Tattoo jetzt, bezahlen in Raten: Bei Clitze Clein in Münster zahlst du deinen Wunschbetrag ab 99 € bequem über PayPal-Ratenkauf. Wunschbetrag wählen, Daten hinterlegen, fertig.",
  alternates: { canonical: "/raten" },
};

export default function RatenPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Start", path: "/" }, { name: "Ratenzahlung", path: "/raten" }])} />
      <section className="section-y pt-28 sm:pt-32">
        <div className="container-x">
          <RatenFlow />
        </div>
      </section>
    </>
  );
}
