import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { iconFor } from "@/components/Icons";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { values, faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Das Atelier & Chiara – vegan und nachhaltig tätowieren",
  description:
    "Lerne das Clitze Cleine Tattoo Atelier in Münster kennen: 22 m², 100 % vegan, plastikfrei und ein echter Safespace. Und Chiara, deine Tätowiererin seit 2019.",
  alternates: { canonical: "/studio" },
};

export default function StudioPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Start", path: "/" }, { name: "Atelier", path: "/studio" }])} />
      <JsonLd data={faqSchema(faqs)} />

      <PageHeader
        eyebrow="Das Atelier"
        title="Die kleinste Dekadenz in Münster"
        intro="Auf den clitze cleinen 22 m² ist hier alles vegan und nachhaltig. Hier soll dein Safespace sein – everybody's welcome."
        crumbs={[{ name: "Start", href: "/" }, { name: "Atelier" }]}
      />

      {/* Story */}
      <section className="section-y">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <Image
                src="/galerie-clitzeclein.jpg"
                alt="Behandlungsbereich im Clitze Clein Atelier mit Marmorboden, Spiegel und roter Atelier-Tür"
                width={2048}
                height={1536}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="t-h2">Vegan ist hier keine Ausnahme, sondern Standard</h2>
            <p className="prose-body mt-5 text-ink/75">
              Tattoo-Zubehör wie Farben, Blaupapier und Stifte ist meist schon von
              sich aus vegan. Aber nachhaltig? Oder alles, was über das Equipment
              hinausgeht? Fehlanzeige – außer im Clitze Clein.
            </p>
            <p className="prose-body mt-4 text-ink/75">
              Von den Snacks und Getränken über Tampons bis hin zum Deo auf der
              Toilette ist alles vegan. Zusätzlich sind fast alle Einweg-Artikel
              plastikfrei. Dazu gehören die Nadeln, Rasierer und alles, womit das
              Tattoo-Equipment eingepackt wird – das besteht nämlich größtenteils
              aus Zuckerrohr.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-y bg-cream-2/60">
        <div className="container-x">
          <Stagger className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <article className="card paper relative h-full overflow-hidden p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-oxblood/8 text-oxblood">
                    {iconFor(v.icon)}
                  </span>
                  <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
                  <p className="prose-body mt-3 text-ink/70">{v.text}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Chiara */}
      <section id="chiara" className="section-y scroll-mt-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <Image
                src="/chiara.jpg"
                alt="Chiara, Tätowiererin und Inhaberin von Clitze Clein, lachend in ihrem Atelier"
                width={1290}
                height={1330}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="eyebrow">Über mich</p>
            <h2 className="t-h2 mt-4">Chiara</h2>
            <p className="prose-body mt-5 text-ink/75">
              Hi! Ich bin Chiara und seit 2019 Tätowiererin. Mit meiner lockeren Art
              werde ich mein Bestes geben, falls ihr euch unwohl fühlt, Angst habt
              oder was auch immer – wir rocken das gemeinsam!
            </p>
            <p className="prose-body mt-4 text-ink/75">
              Wenn ich richtig gute Laune habe, darfst du auch aussuchen, was für
              Musik grade läuft. Lets go – mach dir dein eigenes Bild von mir!
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/galerie" className="btn btn-ghost">Meine Arbeiten</Link>
              <Link href="/kontakt" className="btn btn-primary">Termin anfragen</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />
    </>
  );
}

function FaqSection() {
  return (
    <section className="section-y bg-oxblood-deep text-cream paper relative overflow-hidden">
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Häufige Fragen</p>
          <h2 className="t-h2 mt-4 text-cream">Gut zu wissen</h2>
        </Reveal>
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f) => (
            <Reveal key={f.q}>
              <details className="group rounded-2xl border border-cream/15 bg-cream/5 p-5 transition-colors open:bg-cream/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-cream">
                  {f.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-cream/30 text-cream transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="prose-body mt-3 text-cream/75">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
