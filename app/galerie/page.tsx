import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Galerie – Tattoos, Gemälde & das Atelier",
  description:
    "Die Bildersammlung von Clitze Clein in Münster: Chiaras Tattoos, ihre selbstgemalten Bilder und Einblicke in das vegane Tattoo Atelier.",
  alternates: { canonical: "/galerie" },
};

export default function GaleriePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Start", path: "/" }, { name: "Galerie", path: "/galerie" }])} />

      <PageHeader
        eyebrow="Galerie"
        title="Meine Tattoos, Gemälde & das Atelier"
        intro="Hier geht's zur Bildersammlung von meinen Tattoos, den selbstgemalten Bildern und dem Laden. Filtere nach dem, was dich interessiert – und tippe für die Großansicht."
        crumbs={[{ name: "Start", href: "/" }, { name: "Galerie" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <Gallery />
        </div>
      </section>

      <section className="section-y bg-cream-2/60">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="h-2">Dein Motiv ist noch nicht dabei?</h2>
            <p className="prose-body mx-auto mt-5 text-ink/70">
              Bring deine eigene Idee mit – wir verfeinern sie gemeinsam zu etwas,
              das wirklich zu dir gehört.
            </p>
            <Link href="/kontakt" className="btn btn-primary mt-8">Idee besprechen</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
