import Link from "next/link";
import LogoEmblem from "./LogoEmblem";
import { studio } from "@/lib/studio";

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-oxblood-deep text-cream/80 paper">
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <LogoEmblem className="w-48 text-cream" />
          <p className="prose-body mt-5 max-w-sm text-cream/70">
            Dein clitze cleines Tattoo Atelier in Münster. 22 m², 100 % vegan,
            nachhaltig und für alle. Everybody&rsquo;s welcome.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={studio.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.51.01-4.75.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7C3.21 8.49 3.2 8.86 3.2 12s.01 3.51.07 4.75c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.9-.19-1.38-.32-1.7a2.86 2.86 0 0 0-.68-1.06 2.86 2.86 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32C15.51 4.01 15.14 4 12 4Zm0 3.06A4.94 4.94 0 1 1 7.06 12 4.94 4.94 0 0 1 12 7.06Zm0 1.8A3.14 3.14 0 1 0 15.14 12 3.14 3.14 0 0 0 12 8.86Zm5.14-2.94a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15Z" />
              </svg>
            </a>
            <a
              href={`tel:${studio.phoneRaw}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
              aria-label="Anrufen"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
                <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.25 1Z" />
              </svg>
            </a>
          </div>
        </div>

        <nav aria-label="Seiten">
          <h3 className="font-display text-lg text-cream">Atelier</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/studio" className="transition-colors hover:text-gold">Über das Atelier</Link></li>
            <li><Link href="/studio#chiara" className="transition-colors hover:text-gold">Über Chiara</Link></li>
            <li><Link href="/galerie" className="transition-colors hover:text-gold">Galerie</Link></li>
            <li><Link href="/raten" className="transition-colors hover:text-gold">Tattoo auf Raten</Link></li>
            <li><Link href="/kontakt" className="transition-colors hover:text-gold">Termin &amp; Kontakt</Link></li>
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-lg text-cream">Besuch &amp; Kontakt</h3>
          <address className="mt-4 space-y-2.5 text-sm not-italic">
            <p>{studio.street}<br />{studio.zip} {studio.city}</p>
            <p>
              <a href={`tel:${studio.phoneRaw}`} className="transition-colors hover:text-gold">{studio.phone}</a>
            </p>
            <p className="text-cream/60">Di–Fr · 10:00–16:00 Uhr<br />Termine nach Vereinbarung</p>
          </address>
        </div>
      </div>

      <div className="flourish opacity-30" />
      <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream/55 sm:flex-row">
        <p>© {new Date().getFullYear()} Clitze Clein – Tattoo Atelier · by C. Chiara Hartmann</p>
        <nav aria-label="Rechtliches" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/impressum" className="transition-colors hover:text-gold">Impressum</Link>
          <Link href="/datenschutz" className="transition-colors hover:text-gold">Datenschutz</Link>
          <Link href="/agb" className="transition-colors hover:text-gold">AGB</Link>
        </nav>
      </div>
    </footer>
  );
}
