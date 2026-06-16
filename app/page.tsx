import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import { iconFor, StarIcon } from "@/components/Icons";
import { JsonLd, faqSchema } from "@/lib/schema";
import { values, reviews, faqs } from "@/lib/content";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  description:
    "Clitze Clein – dein veganes & nachhaltiges Tattoo Atelier in Münster. Auf 22 m² tätowiert Chiara mit Herz: plastikfrei, persönlich, für alle. Termin anfragen.",
  alternates: { canonical: "/" },
};

const HERO_IMG =
  "https://images.unsplash.com/photo-1612459284970-e8f027596582?auto=format&fit=crop&w=1600&q=70";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={HERO_IMG}
            alt="Tätowiererin Chiara bei der Arbeit im Clitze Clein Atelier in Münster"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/92 via-cream/80 to-cream" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/55 to-transparent" />
        </div>

        <div className="container-x relative pt-28 pb-16">
          <Reveal>
            <p className="eyebrow">Vegan · Nachhaltig · Münster</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="h-display mt-5 max-w-3xl">
              Dein <span className="italic text-gold">clitze cleines</span> Tattoo Atelier.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lead mt-6 text-ink/75">
              22 m², 100 % vegan und nachhaltig – mitten in Münster. Hier entsteht
              deine Kunst in entspannter Atmosphäre. Kein Urteil, keine Berührungsängste.
              Einfach dein Safespace. <span className="font-medium text-oxblood">Everybody&rsquo;s welcome.</span>
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn btn-primary">Termin anfragen</Link>
              <Link href="/galerie" className="btn btn-ghost">Galerie ansehen</Link>
            </div>
          </Reveal>
          <Reveal delay={0.34}>
            <div className="mt-10 flex items-center gap-3 text-sm text-ink/70">
              <span className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
              </span>
              <span>
                <strong className="text-oxblood">5,0</strong> bei Google · seit {studio.founded} mit Herz dabei
              </span>
            </div>
          </Reveal>
        </div>

        <span className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink/40 md:flex">
          Scrollen
          <span className="h-10 w-px animate-pulse bg-ink/30" />
        </span>
      </section>

      {/* ---------- VALUES ---------- */}
      <section className="section-y bg-cream-2/60">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Warum Clitze Clein</p>
            <h2 className="h-1 mt-4">Die kleinste Dekadenz in Münster</h2>
            <p className="prose-body mx-auto mt-5 text-ink/70">
              Tattoo-Zubehör ist oft schon vegan – aber nachhaltig? Oder alles, was
              über das Equipment hinausgeht? Fehlanzeige. Außer im Clitze Clein.
            </p>
          </Reveal>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
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

      {/* ---------- ABOUT ATELIER ---------- */}
      <section className="section-y">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-card">
                {/* REAL-PHOTO: replace with interior photo of the atelier */}
                <Image
                  src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1000&q=70"
                  alt="Innenansicht des Clitze Cleine Tattoo Ateliers"
                  width={1000}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-oxblood px-7 py-5 text-cream shadow-card sm:block">
                <p className="font-display text-3xl">22 m²</p>
                <p className="text-xs uppercase tracking-[0.2em] text-cream/70">clitze clein</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="eyebrow">Das Atelier</p>
            <h2 className="h-1 mt-4">Ein Safespace, in dem alles vegan ist</h2>
            <p className="prose-body mt-5 text-ink/75">
              Von den Snacks und Getränken über Tampons bis hin zum Deo auf der
              Toilette – im Clitze Clein ist alles vegan. Zusätzlich sind fast alle
              Einweg-Artikel plastikfrei: Nadeln, Rasierer und das Material, mit dem
              das Equipment eingepackt wird, bestehen größtenteils aus Zuckerrohr.
            </p>
            <p className="prose-body mt-4 text-ink/75">
              Hier soll dein clitze cleiner Safespace sein. Ich freu mich auf euch –
              auf alle. Denn: everybody&rsquo;s welcome.
            </p>
            <Link href="/studio" className="btn btn-ghost mt-8">Mehr über das Atelier</Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- CHIARA TEASER ---------- */}
      <section className="section-y bg-oxblood-deep text-cream paper relative overflow-hidden">
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              {/* REAL-PHOTO: replace with portrait of Chiara */}
              <Image
                src="https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=900&q=70"
                alt="Chiara, Inhaberin und Tätowiererin von Clitze Clein"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="eyebrow">Über mich</p>
            <h2 className="h-1 mt-4 text-cream">Hi, ich bin Chiara</h2>
            <p className="prose-body mt-5 text-cream/80">
              Seit 2019 bin ich Tätowiererin. Mit meiner lockeren Art gebe ich mein
              Bestes, falls du dich unwohl fühlst oder Angst hast – wir rocken das
              gemeinsam. Und wenn ich richtig gute Laune habe, darfst du sogar
              aussuchen, was für Musik gerade läuft.
            </p>
            <p className="prose-body mt-4 text-cream/80">
              Lets go – mach dir dein eigenes Bild von mir.
            </p>
            <Link href="/studio#chiara" className="btn mt-8 bg-cream text-oxblood hover:bg-white">
              Lern mich kennen
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- GALLERY PREVIEW ---------- */}
      <section className="section-y">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Galerie</p>
            <h2 className="h-1 mt-4">Tattoos, Gemälde &amp; das Atelier</h2>
            <p className="prose-body mx-auto mt-5 text-ink/70">
              Ein clitze cleiner Einblick in meine Arbeit – von feinen Linien bis zu
              selbstgemalten Bildern an der Studiowand.
            </p>
          </Reveal>
          <div className="mt-12">
            <Gallery limit={8} />
          </div>
          <Reveal className="mt-12 text-center">
            <Link href="/galerie" className="btn btn-primary">Ganze Galerie ansehen</Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- REVIEWS ---------- */}
      <section className="section-y bg-cream-2/60">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Stimmen</p>
            <h2 className="h-1 mt-4">5,0 Sterne – mit Herz und Können</h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <StaggerItem key={r.name}>
                <figure className="card h-full p-7">
                  <span className="flex text-gold">
                    {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                  </span>
                  <blockquote className="prose-body mt-4 text-ink/80">&bdquo;{r.text}&ldquo;</blockquote>
                  <figcaption className="mt-5 text-sm font-medium text-oxblood">
                    {r.name} <span className="font-normal text-ink/50">· {r.source}</span>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- RATEN TEASER ---------- */}
      <section className="section-y">
        <div className="container-x">
          <Reveal className="card paper relative overflow-hidden p-10 text-center md:p-16">
            <p className="eyebrow">Powered by PayPal</p>
            <h2 className="h-1 mt-4">Dein Tattoo auf Raten</h2>
            <p className="prose-body mx-auto mt-5 text-ink/70">
              Tattoos sind schweine teuer – darüber müssen wir nicht diskutieren.
              Fehlt das nötige Kleingeld fürs Coverup oder die Verewigung deines
              Vierbeiners? Zahl deinen Wunschbetrag bequem in Raten via PayPal.
            </p>
            <Link href="/raten" className="btn btn-primary mt-8">So funktioniert&rsquo;s</Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="section-y bg-oxblood text-cream paper relative overflow-hidden">
        <div className="container-x relative text-center">
          <Reveal>
            <h2 className="h-1 text-cream">Bereit für dein Tattoo?</h2>
            <p className="prose-body mx-auto mt-5 text-cream/80">
              Schick mir deine Idee – ich freu mich auf dich. Telefonisch erreichbar
              Dienstag bis Freitag von 11:00 bis 16:00 Uhr.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/kontakt" className="btn bg-cream text-oxblood hover:bg-white">Termin anfragen</Link>
              <a href={`tel:${studio.phoneRaw}`} className="btn btn-ghost border-cream/40 text-cream hover:bg-cream hover:text-oxblood">
                {studio.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
