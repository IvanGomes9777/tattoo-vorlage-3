import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { studio } from "@/lib/studio";

const OSM =
  "https://www.openstreetmap.org/export/embed.html?bbox=7.605%2C51.930%2C7.640%2C51.950&layer=mapnik&marker=51.940%2C7.622";

/**
 * Sektion 9 – Schluss-CTA (Mix aus Option 10 "Porträt-Einladung" + Option 9 "Karte + Adresse").
 * Links Chiaras persönliche Einladung mit Kontaktdaten, rechts die echte Karte.
 */
export default function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Persönliche Einladung */}
        <div className="paper relative flex flex-col justify-center bg-oxblood-deep px-7 py-16 text-cream sm:px-12">
          <Reveal>
            <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto]">
              {/* Text */}
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
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-semibold text-oxblood-deep transition-transform hover:scale-105 active:scale-95"
                  >
                    🌱 Termin anfragen
                  </Link>
                  <a
                    href={`tel:${studio.phoneRaw}`}
                    className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-oxblood"
                  >
                    Anrufen
                  </a>
                </div>

                <p className="mt-5 text-sm text-cream/55">– Chiara</p>
              </div>

              {/* Porträt rechts, zentriert */}
              <div className="flex justify-center sm:justify-end">
                <Image
                  src="/chiara.jpg"
                  alt="Chiara, Tätowiererin von Clitze Clein"
                  width={260}
                  height={260}
                  className="h-44 w-44 rounded-full object-cover ring-4 ring-cream/15 sm:h-52 sm:w-52"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Karte */}
        <div className="relative min-h-[340px] lg:min-h-full">
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
      </div>
    </section>
  );
}
