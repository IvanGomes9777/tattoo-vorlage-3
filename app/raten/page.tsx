import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dein Tattoo auf Raten – powered by PayPal",
  description:
    "Tattoo jetzt, bezahlen in Raten: Bei Clitze Clein in Münster zahlst du deinen Wunschbetrag bequem über PayPal-Ratenkauf. So funktioniert's – transparent und einfach.",
  alternates: { canonical: "/raten" },
};

const tiers = [
  { betrag: "50 €", raten: "ab ca. 8,90 € / Monat" },
  { betrag: "100 €", raten: "ab ca. 17,80 € / Monat" },
  { betrag: "200 €", raten: "ab ca. 35,60 € / Monat" },
  { betrag: "300 €", raten: "ab ca. 53,40 € / Monat" },
  { betrag: "400 €", raten: "ab ca. 71,20 € / Monat" },
  { betrag: "500 €", raten: "ab ca. 89,00 € / Monat" },
];

const steps = [
  { n: "01", t: "Wunschbetrag wählen", d: "Du entscheidest, welchen Betrag du in Raten zahlen möchtest." },
  { n: "02", t: "Über PayPal buchen", d: "Die Abwicklung läuft komplett über PayPal-Ratenkauf – sicher und bekannt." },
  { n: "03", t: "Entspannt abzahlen", d: "Du zahlst deinen Betrag in monatlichen Raten ab. Dein Tattoo gibt's trotzdem jetzt." },
];

export default function RatenPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Start", path: "/" }, { name: "Ratenzahlung", path: "/raten" }])} />

      <PageHeader
        eyebrow="Powered by PayPal"
        title="Dein Tattoo auf Raten"
        intro="Tattoos sind schweine teuer – da brauchen wir nicht drüber diskutieren. Fehlt das Kleingeld fürs Coverup oder die Verewigung deines Vierbeiners? Zahl in Raten."
        crumbs={[{ name: "Start", href: "/" }, { name: "Ratenzahlung" }]}
      />

      <section className="section-y">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="t-h2">So einfach geht&rsquo;s</h2>
            <p className="prose-body mt-5 text-ink/75">
              Dafür brauchst du nur eins: PayPal. Du buchst deinen Wunschbetrag und
              zahlst ihn bequem über den PayPal-Ratenkauf ab.
            </p>
            <div className="mt-6 rounded-2xl border border-gold/30 bg-gold-soft/10 p-5">
              <p className="prose-body text-ink/80">
                <strong className="text-oxblood">Aber Vorsicht:</strong> Lass dich
                mit Ratenzahlung nicht in die Schuldenfalle ziehen. Buch nur, was du
                dir realistisch leisten kannst.
              </p>
            </div>
            <Stagger className="mt-10 space-y-6">
              {steps.map((s) => (
                <StaggerItem key={s.n}>
                  <div className="flex gap-5">
                    <span className="font-display text-3xl text-gold">{s.n}</span>
                    <div>
                      <h3 className="font-display text-xl text-oxblood">{s.t}</h3>
                      <p className="prose-body mt-1 text-ink/70">{s.d}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card paper relative overflow-hidden p-8">
              <h3 className="font-display text-2xl text-oxblood">Beispiel-Beträge</h3>
              <p className="prose-body mt-2 text-sm text-ink/60">
                Richtwerte für die Ratenhöhe. Die genauen Konditionen legt PayPal
                beim Ratenkauf fest.
              </p>
              <ul className="mt-6 divide-y divide-cream-3">
                {tiers.map((t) => (
                  <li key={t.betrag} className="flex items-center justify-between py-3.5">
                    <span className="font-display text-xl text-ink">{t.betrag}</span>
                    <span className="text-sm text-ink/65">{t.raten}</span>
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="btn btn-primary mt-8 w-full">
                Wunschbetrag besprechen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-oxblood text-cream paper relative overflow-hidden">
        <div className="container-x relative text-center">
          <Reveal>
            <h2 className="t-h2 text-cream">Fragen zur Ratenzahlung?</h2>
            <p className="prose-body mx-auto mt-5 text-cream/80">
              Melde dich einfach – wir finden gemeinsam die passende Lösung für dein
              Wunsch-Tattoo.
            </p>
            <Link href="/kontakt" className="btn mt-8 bg-cream text-oxblood hover:bg-white">
              Kontakt aufnehmen
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
