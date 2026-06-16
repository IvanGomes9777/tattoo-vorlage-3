import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Termin & Kontakt – Tattoo Atelier in Münster",
  description:
    "Termin im Clitze Cleine Tattoo Atelier in Münster anfragen. Hammer Str. 174, 48153 Münster. Telefonisch erreichbar Di–Fr 10:00–16:00 Uhr. Jetzt Idee schicken.",
  alternates: { canonical: "/kontakt" },
};

const OSM =
  "https://www.openstreetmap.org/export/embed.html?bbox=7.605%2C51.930%2C7.640%2C51.950&layer=mapnik&marker=51.940%2C7.622";

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Start", path: "/" }, { name: "Kontakt", path: "/kontakt" }])} />

      <PageHeader
        eyebrow="Termin & Kontakt"
        title="Lass uns dein Tattoo planen"
        intro="Schick mir deine Idee, Referenzbilder und die gewünschte Körperstelle – ich melde mich so schnell wie möglich bei dir zurück."
        crumbs={[{ name: "Start", href: "/" }, { name: "Kontakt" }]}
      />

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="card p-7 sm:p-9">
              <h2 className="t-h2 mb-6">Anfrage senden</h2>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-6">
              <InfoBlock title="Adresse">
                {studio.street}<br />{studio.zip} {studio.city}<br />{studio.country}
                <div className="mt-3">
                  <a href={studio.maps} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-oxblood underline">
                    Routenplaner öffnen →
                  </a>
                </div>
              </InfoBlock>

              <InfoBlock title="Telefon & WhatsApp">
                <a href={`tel:${studio.phoneRaw}`} className="transition-colors hover:text-oxblood">{studio.phoneDisplay}</a>
              </InfoBlock>

              <InfoBlock title="Erreichbarkeit">
                <ul className="space-y-1.5">
                  {studio.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6">
                      <span className="text-ink/70">{h.day}</span>
                      <span className={h.time === "Geschlossen" ? "text-ink/45" : "font-medium text-oxblood"}>{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-ink/50">Tätowiert wird ausschließlich nach Terminvereinbarung.</p>
              </InfoBlock>

              <InfoBlock title="Social">
                <a href={studio.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-oxblood">
                  Instagram &amp; Facebook: {studio.instagramHandle}
                </a>
              </InfoBlock>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-card ring-1 ring-cream-3">
              <iframe
                title="Karte: Clitze Clein, Hammer Str. 174, Münster"
                src={OSM}
                loading="lazy"
                className="h-[360px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-center text-xs text-ink/50">
              Kartendaten © OpenStreetMap-Mitwirkende
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card p-6">
      <h3 className="font-display text-lg text-oxblood">{title}</h3>
      <div className="prose-body mt-2 text-ink/75">{children}</div>
    </div>
  );
}
