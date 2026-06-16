# Clitze Clein – Tattoo Atelier Münster

Moderne, mehrseitige Website für **Clitze Clein**, das vegane & nachhaltige
Tattoo Atelier von Chiara in Münster. Warme Boutique-Ästhetik (Cream, Oxblood,
Gold), animationsreich, vollständig responsiv, SEO/GEO-optimiert und DSGVO-konform.

## Tech Stack

- **Next.js 15** (App Router, statisch generiert / SSG)
- **Tailwind CSS v4** (CSS-First Theme)
- **Framer Motion** (Scroll-Reveals, Micro-Interactions, Lightbox)
- **TypeScript**

## Seiten

| Route | Inhalt |
|---|---|
| `/` | Hero, Werte (vegan/nachhaltig/safespace), Atelier, Chiara, Galerie-Vorschau, Bewertungen, Raten-Teaser, CTA |
| `/studio` | Atelier-Story, Werte, Über Chiara, FAQ |
| `/galerie` | Filterbare Galerie (Tattoos / Gemälde / Studio) mit Lightbox |
| `/raten` | Tattoo auf Raten via PayPal |
| `/kontakt` | Anfrageformular, NAP, Öffnungszeiten, OpenStreetMap |
| `/impressum`, `/datenschutz`, `/agb` | Rechtliches |

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production-Build prüfen
```

## ⚠️ Vor dem Go-Live: echte Bilder einsetzen

Der Prototyp nutzt thematisch passende, lizenzfreie Unsplash-Bilder. Ersetze sie
durch Chiaras eigene Fotos. Alle Stellen sind im Code mit `REAL-PHOTO` markiert:

- **Logo:** liegt als SVG-Wordmark in `components/Logo.tsx` – bei Bedarf durch die
  gelieferte Logo-Datei (`/public/logo.svg`) ersetzen.
- **Porträt von Chiara:** `app/page.tsx`, `app/studio/page.tsx`
- **Studio-Innenaufnahmen:** `app/page.tsx`, `app/studio/page.tsx`
- **Echte Tattoo-/Gemälde-Fotos:** `lib/content.ts` (Array `gallery`)

Eigene Bilder am besten als WebP/AVIF nach `/public` legen und die `src`-Werte
anpassen (dann `images.unsplash.com` ggf. aus `next.config.ts` entfernen).

## Kontaktformular

`app/api/contact/route.ts` validiert und schützt Anfragen (Honeypot, Rate Limiting,
Sanitization). **Mailversand ist noch nicht angebunden** – einen Provider
(z. B. Resend oder Nodemailer) per Umgebungsvariablen ergänzen (`// TODO` im Code).

## Sicherheit & DSGVO

- Security-Header inkl. CSP, HSTS, X-Frame-Options in `next.config.ts`
- Cookie-Consent-Banner (`components/CookieConsent.tsx`)
- Impressum, Datenschutz & AGB enthalten
- Kein Tracking, nur technisch notwendiger lokaler Speicher

## SEO & GEO

- JSON-LD: `Organization`, `WebSite`, `LocalBusiness`/`TattooParlor`, `FAQPage`,
  `BreadcrumbList` (`lib/schema.tsx`)
- `sitemap.xml`, `robots.txt` (KI-Crawler erlaubt), `llms.txt`
- Open Graph, fluide Typografie, semantisches HTML, Answer-First-Texte

## Deployment (Vercel)

1. Repo mit Vercel verbinden → Framework „Next.js“ wird automatisch erkannt.
2. Deploy. Custom Domain unter **Settings → Domains** verbinden.
3. Für den Mailversand die Provider-Env-Vars im Vercel-Projekt setzen.
