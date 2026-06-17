import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import HeroVideo from "@/components/HeroVideo";
import CarouselGallery from "@/components/CarouselGallery";
import RatenTeaser from "@/components/RatenTeaser";
import FinalCta from "@/components/FinalCta";
import { iconFor, StarIcon } from "@/components/Icons";
import { JsonLd, faqSchema } from "@/lib/schema";
import { values, reviews, faqs } from "@/lib/content";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  description:
    "Clitze Clein – dein veganes & nachhaltiges Tattoo Atelier in Münster. Auf 22 m² tätowiert Chiara mit Herz: plastikfrei, persönlich, für alle. Termin anfragen.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <span id="top" className="absolute top-0" aria-hidden />

      {/* ---------- HERO (Video, Sektion 2 – Option 2) ---------- */}
      <HeroVideo />

      {/* ---------- VALUES (Sektion 3) ---------- */}
      <section className="section-y bg-cream-2/60">
        <div className="container-x">
          <Stagger className="mx-auto max-w-2xl text-center">
            <StaggerItem><p className="eyebrow">Warum Clitze Clein</p></StaggerItem>
            <StaggerItem><h2 className="t-h1 mt-4">Die kleinste Dekadenz in Münster</h2></StaggerItem>
            <StaggerItem>
              <p className="prose-body mx-auto mt-5 text-ink/70">
                Tattoo-Zubehör ist oft schon vegan – aber nachhaltig? Oder alles, was
                über das Equipment hinausgeht? Fehlanzeige. Außer im Clitze Clein.
              </p>
            </StaggerItem>
          </Stagger>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <article className="card paper relative h-full overflow-hidden p-8 transition-transform duration-300 hover:-translate-y-1.5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-oxblood/8 p-3.5 text-oxblood">
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

      {/* ---------- ABOUT ATELIER (Sektion 4 – Option 3: Text über Bild-Band) ---------- */}
      <section id="atelier" className="relative scroll-mt-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/galerie-clitzeclein.jpg"
            alt="Innenansicht des Clitze Cleine Tattoo Ateliers in Münster mit goldenem Widderkopf und roter Atelier-Tür"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-oxblood-deep/95 via-oxblood-deep/70 to-oxblood-deep/25" />
        </div>
        <div className="container-x relative flex min-h-[78svh] items-center py-20">
          <Stagger className="max-w-xl">
            <StaggerItem><p className="eyebrow">Das Atelier</p></StaggerItem>
            <StaggerItem><h2 className="t-h1 mt-4 text-cream">Ein Safespace, in dem alles vegan ist</h2></StaggerItem>
            <StaggerItem>
              <p className="prose-body mt-5 text-cream/85">
                Von den Snacks und Getränken über Tampons bis hin zum Deo auf der
                Toilette – im Clitze Clein ist alles vegan. Zusätzlich sind fast alle
                Einweg-Artikel plastikfrei: Nadeln, Rasierer und das Material, mit dem
                das Equipment eingepackt wird, bestehen größtenteils aus Zuckerrohr.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="prose-body mt-4 text-cream/85">
                Hier soll dein clitze cleiner Safespace sein – ich freu mich auf euch,
                auf alle. Denn: everybody&rsquo;s welcome.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/#kontakt"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-semibold text-oxblood-deep transition-transform hover:scale-105 active:scale-95"
                >
                  🌱 Termin anfragen
                </Link>
                <span className="inline-flex items-baseline gap-2 text-cream">
                  <span className="font-display text-3xl text-gold">22 m²</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-cream/70">clitze clein</span>
                </span>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ---------- CHIARA (Sektion 5 – Option 2: Hell & freundlich) ---------- */}
      <section className="section-y">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <Image
                src="/chiara.jpg"
                alt="Chiara, Inhaberin und Tätowiererin von Clitze Clein, lachend in ihrem Atelier"
                width={1290}
                height={1330}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Stagger>
            <StaggerItem><p className="eyebrow">Über mich</p></StaggerItem>
            <StaggerItem><h2 className="t-h1 mt-4">Hi, ich bin Chiara</h2></StaggerItem>
            <StaggerItem>
              <p className="prose-body mt-5 text-ink/75">
                Seit 2019 bin ich Tätowiererin. Mit meiner lockeren Art gebe ich mein
                Bestes, falls du dich unwohl fühlst oder Angst hast – wir rocken das
                gemeinsam. Und wenn ich richtig gute Laune habe, darfst du sogar
                aussuchen, was für Musik gerade läuft.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="prose-body mt-4 text-ink/75">
                Lets go – mach dir dein eigenes Bild von mir.
              </p>
            </StaggerItem>
            <StaggerItem>
              <Link href="/#galerie" className="btn btn-ghost mt-8">
                Meine Arbeiten ansehen
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ---------- GALLERY PREVIEW ---------- */}
      <section id="galerie" className="section-y scroll-mt-24">
        <div className="container-x">
          <Stagger className="mx-auto max-w-2xl text-center">
            <StaggerItem><p className="eyebrow">Galerie</p></StaggerItem>
            <StaggerItem><h2 className="t-h1 mt-4">Tattoos, Gemälde &amp; das Atelier</h2></StaggerItem>
            <StaggerItem>
              <p className="prose-body mx-auto mt-5 text-ink/70">
                Ein clitze cleiner Einblick in meine Arbeit – von feinen Linien bis zu
                selbstgemalten Bildern an der Studiowand.
              </p>
            </StaggerItem>
          </Stagger>
          <Reveal className="mt-12">
            <CarouselGallery />
          </Reveal>
          <Reveal className="mt-12 text-center">
            <a href={studio.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Mehr auf Instagram</a>
          </Reveal>
        </div>
      </section>

      {/* ---------- REVIEWS (Sektion 7 – Option 7: Split Panel + Liste) ---------- */}
      <section className="section-y bg-cream-2/60">
        <div className="container-x">
          <Stagger className="mx-auto max-w-2xl text-center">
            <StaggerItem><p className="eyebrow">Stimmen</p></StaggerItem>
            <StaggerItem><h2 className="t-h1 mt-4">5,0 Sterne – mit Herz und Können</h2></StaggerItem>
          </Stagger>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Rating-Panel + Bewerten-Button */}
            <Reveal>
              <div className="flex h-full flex-col justify-center rounded-[2rem] bg-oxblood-deep p-8 text-center text-cream shadow-card">
                <p className="font-display text-[3.5rem] leading-none">5,0</p>
                <span className="mt-2 flex justify-center text-gold">
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                </span>
                <p className="mt-2 text-sm text-cream/70">61 Bewertungen gesamt</p>
                <div className="mt-5 space-y-2 text-sm">
                  <p className="rounded-xl bg-cream/10 px-3 py-2">Google <strong className="text-gold">5,0</strong> · 31 Rezensionen</p>
                  <p className="rounded-xl bg-cream/10 px-3 py-2">Infobel <strong className="text-gold">5,0</strong> · 30 Rezensionen</p>
                </div>
                <a
                  href={studio.googleReview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-semibold text-oxblood-deep transition-transform hover:scale-105 active:scale-95"
                >
                  ★ Bewertung abgeben
                </a>
              </div>
            </Reveal>

            {/* Rezensionen-Liste */}
            <Stagger className="space-y-4">
              {reviews.map((r) => (
                <StaggerItem key={r.name}>
                  <figure className="card p-6">
                    <span className="flex text-gold">
                      {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                    </span>
                    <blockquote className="prose-body mt-3 text-ink/80">&bdquo;{r.text}&ldquo;</blockquote>
                    <figcaption className="mt-4 text-sm font-medium text-oxblood">
                      {r.name} <span className="font-normal text-ink/50">· {r.source}</span>
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ---------- RATEN TEASER (Sektion 8 – Mix Option 9 Dialog + Option 6 Rechner) ---------- */}
      <RatenTeaser />

      {/* ---------- FINAL CTA (Sektion 9 – Mix Option 10 Porträt-Einladung + Option 9 Karte) ---------- */}
      <FinalCta />
    </>
  );
}
