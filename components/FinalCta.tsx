import Image from "next/image";
import { Reveal } from "./Reveal";
import ContactForm from "./ContactForm";
import { studio } from "@/lib/studio";

const OSM =
  "https://www.openstreetmap.org/export/embed.html?bbox=7.605%2C51.930%2C7.640%2C51.950&layer=mapnik&marker=51.940%2C7.622";

/**
 * Sektion 9 – Kontakt: Chiaras persönliche Einladung (links) + E-Mail-Anfrageformular
 * (rechts), darunter die echte Karte über volle Breite.
 */
export default function FinalCta() {
  return (
    <section id="kontakt" className="relative scroll-mt-24 overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Persönliche Einladung */}
        <div className="paper relative flex flex-col justify-center bg-oxblood-deep px-7 py-16 text-cream sm:px-12">
          <Reveal>
            <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto]">
              <div>
                <p className="eyebrow">Everybody&rsquo;s welcome</p>
                <h2 className="t-h1 mt-3 text-cream">Ich freu mich auf dich!</h2>
                <p className="prose-body mt-4 text-cream/80">
                  Schick mir deine Idee – wir rocken das gemeinsam. Versprochen.
                </p>

                <div className="mt-6 space-y-1.5 text-sm text-cream/80">
                  <p>{studio.street} · {studio.zip} {studio.city}</p>
                  <p>Dienstag–Freitag · 10:00–16:00 Uhr</p>
                  <p>
                    <a href={`tel:${studio.phoneRaw}`} className="transition-colors hover:text-gold">
                      {studio.phoneDisplay}
                    </a>
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${studio.phoneRaw.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-semibold text-oxblood-deep transition-transform hover:scale-105 active:scale-95"
                  >
                    🌱 Termin per WhatsApp
                  </a>
                  <a
                    href={`tel:${studio.phoneRaw}`}
                    className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-oxblood"
                  >
                    Anrufen
                  </a>
                </div>

                <p className="mt-5 text-sm text-cream/55">– Chiara</p>
              </div>

              <div className="flex justify-center sm:justify-end">
                <Image
                  src="/chiara.jpg"
                  alt="Chiara, Tätowiererin von Clitze Clein"
                  width={260}
                  height={260}
                  className="h-40 w-40 rounded-full object-cover ring-4 ring-cream/15 sm:h-48 sm:w-48"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* E-Mail-Anfrageformular */}
        <div className="flex flex-col justify-center bg-cream-2/50 px-7 py-16 sm:px-12">
          <Reveal delay={0.1}>
            <p className="eyebrow">Schreib mir</p>
            <h2 className="t-h2 mt-3">Anfrage per E-Mail senden</h2>
            <p className="prose-body mt-3 text-ink/70">
              Erzähl mir kurz von deiner Idee – ich melde mich so schnell wie möglich zurück.
            </p>
            <div className="mt-6 rounded-[1.6rem] border border-cream-3 bg-white p-6 shadow-soft sm:p-7">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Karte über volle Breite */}
      <div className="relative h-[360px] w-full sm:h-[420px]">
        <iframe
          title="Karte: Clitze Clein, Hammer Str. 174, Münster"
          src={OSM}
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href={studio.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 rounded-full bg-cream/95 px-4 py-2 text-xs font-medium text-oxblood shadow-soft backdrop-blur transition-colors hover:bg-cream"
        >
          Routenplaner öffnen →
        </a>
      </div>
    </section>
  );
}
