"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "@/public/clintzecleintattoo.png";

/* ------------------------------------------------------------------ *
   SEKTION 1 — NAVBAR / HEADER · 5 Design-Optionen (Live-Vergleich)
   Marke: Clitze Clein · vegan, nachhaltig, cozy, "everybody's welcome"
   Palette: Cream #fbf7f1 · Oxblood #4a1212 · Gold #b08a4f
 * ------------------------------------------------------------------ */

const NAV = ["Start", "Atelier", "Galerie", "Ratenzahlung", "Kontakt"];

/* Browser-Frame, damit klar ist: das ist ein Mockup, nicht die echte Bar */
function Frame({
  n,
  title,
  vibe,
  anim,
  children,
}: {
  n: number;
  title: string;
  vibe: string;
  anim: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-5xl"
    >
      <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-oxblood text-sm font-semibold text-cream">
          {n}
        </span>
        <h2 className="font-display text-2xl text-oxblood">{title}</h2>
        <span className="text-sm text-ink/55">— {vibe}</span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-cream-3 bg-white shadow-[0_18px_50px_-20px_rgba(46,10,10,0.28)]">
        {/* faux browser chrome */}
        <div className="flex items-center gap-2 border-b border-cream-3 bg-cream-2/60 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#e0b3ab]" />
          <span className="h-3 w-3 rounded-full bg-[#e6cf9c]" />
          <span className="h-3 w-3 rounded-full bg-[#bcd3b0]" />
          <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs text-ink/45">
            clitze-clein.de
          </span>
        </div>
        {children}
      </div>

      <p className="mt-3 text-sm text-ink/60">
        <span className="font-medium text-oxblood">Animation &amp; Interaktion:</span> {anim}
      </p>
    </motion.section>
  );
}

/* Kleiner Hero-Streifen als Kontext hinter jeder Navbar */
function Backdrop({
  tone = "cream",
  children,
}: {
  tone?: "cream" | "dark" | "photo";
  children: React.ReactNode;
}) {
  const bg =
    tone === "dark"
      ? "bg-oxblood-deep"
      : tone === "photo"
        ? "bg-cream"
        : "bg-gradient-to-b from-cream to-cream-2";
  return (
    <div className={`relative ${bg}`}>
      {tone === "photo" && (
        <Image
          src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1400&q=70"
          alt=""
          fill
          className="object-cover opacity-90"
          sizes="100vw"
        />
      )}
      {children}
    </div>
  );
}

const linkBase = "relative text-sm font-medium transition-colors";

/* ============ OPTION 1 — Boutique Cream (elegant, hell) ============ */
function Option1() {
  return (
    <Backdrop tone="cream">
      <div className="flex items-center justify-between px-5 py-3.5 sm:px-8">
        <Image src={logo} alt="Clitze Clein" className="h-11 w-auto sm:h-12" priority />
        <ul className="hidden items-center gap-7 md:flex">
          {NAV.map((l) => (
            <li key={l}>
              <a className={`${linkBase} group text-ink/75 hover:text-oxblood`}>
                {l}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a className="rounded-full bg-oxblood px-5 py-2.5 text-sm font-medium text-cream transition-all hover:-translate-y-0.5 hover:bg-oxblood-deep">
          Termin anfragen
        </a>
      </div>
      <div className="px-5 pb-12 pt-6 text-center sm:px-8">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold">Vegan · Nachhaltig · Münster</p>
        <p className="mt-3 font-display text-3xl text-oxblood">Dein clitze cleines Tattoo Atelier</p>
      </div>
    </Backdrop>
  );
}

/* ============ OPTION 2 — Oxblood Bold (dunkle Bar, Statement) ============ */
function Option2() {
  return (
    <div>
      <div className="flex items-center justify-between bg-oxblood-deep px-5 py-3.5 sm:px-8">
        <Image src={logo} alt="Clitze Clein" className="h-11 w-auto brightness-0 invert sm:h-12" />
        <ul className="hidden items-center gap-7 md:flex">
          {NAV.map((l) => (
            <li key={l}>
              <a className={`${linkBase} text-cream/75 hover:tracking-wide hover:text-gold`}>{l}</a>
            </li>
          ))}
        </ul>
        <a className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-oxblood-deep transition-transform hover:scale-105 active:scale-95">
          Termin anfragen
        </a>
      </div>
      <Backdrop tone="dark">
        <div className="px-5 pb-12 pt-6 text-center sm:px-8">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold">Everybody&rsquo;s welcome</p>
          <p className="mt-3 font-display text-3xl text-cream">Kunst auf Haut – mit Herz, seit 2019</p>
        </div>
      </Backdrop>
    </div>
  );
}

/* ============ OPTION 3 — Floating Pill (verspielt, freundlich) ============ */
function Option3() {
  return (
    <Backdrop tone="cream">
      <div className="px-4 pt-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 rounded-full border border-cream-3 bg-white/85 px-3 py-2 shadow-[0_10px_30px_-12px_rgba(46,10,10,0.25)] backdrop-blur">
          <Image src={logo} alt="Clitze Clein" className="h-9 w-auto pl-1 sm:h-10" />
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((l) => (
              <li key={l}>
                <a className="block rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 transition-all hover:-translate-y-0.5 hover:bg-cream-2 hover:text-oxblood">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-oxblood to-oxblood-soft px-4 py-2 text-sm font-semibold text-cream transition-transform hover:scale-105 active:scale-95">
            🌱 Termin
          </a>
        </div>
      </div>
      <div className="px-5 pb-12 pt-7 text-center">
        <p className="font-display text-3xl text-oxblood">100 % vegan. Clitze clein. Für alle.</p>
      </div>
    </Backdrop>
  );
}

/* ============ OPTION 4 — Minimal Editorial (ultra-clean) ============ */
function Option4() {
  return (
    <Backdrop tone="photo">
      <div className="relative">
        <div className="flex items-center justify-between px-5 py-4 sm:px-10">
          <span className="font-display text-xl italic text-cream drop-shadow">Clitze Clein</span>
          <ul className="hidden items-center gap-8 md:flex">
            {NAV.map((l) => (
              <li key={l}>
                <a className="text-xs font-medium uppercase tracking-[0.18em] text-cream/85 transition-colors hover:text-gold">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a className="border-b border-gold pb-0.5 text-xs font-medium uppercase tracking-[0.18em] text-cream transition-colors hover:text-gold">
            Termin →
          </a>
        </div>
        <div className="px-5 pb-16 pt-10 sm:px-10">
          <p className="max-w-md font-display text-3xl text-cream drop-shadow sm:text-4xl">
            Kleine Kunst. Große Bedeutung.
          </p>
        </div>
        <div className="absolute inset-0 -z-0 bg-oxblood-deep/45" />
      </div>
    </Backdrop>
  );
}

/* ============ OPTION 5 — Center Emblem + Flourish (symmetrisch) ============ */
function Option5() {
  return (
    <Backdrop tone="cream">
      <div className="hidden items-center justify-center gap-6 px-6 py-4 md:flex">
        <ul className="flex flex-1 items-center justify-end gap-6">
          {NAV.slice(0, 2).map((l) => (
            <li key={l}>
              <a className="text-sm font-medium text-ink/70 transition-colors hover:text-oxblood">{l}</a>
            </li>
          ))}
        </ul>
        <Image src={logo} alt="Clitze Clein" className="h-14 w-auto shrink-0" priority />
        <ul className="flex flex-1 items-center gap-6">
          {NAV.slice(2).map((l) => (
            <li key={l}>
              <a className="text-sm font-medium text-ink/70 transition-colors hover:text-oxblood">{l}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* mobile */}
      <div className="flex items-center justify-between px-5 py-3 md:hidden">
        <Image src={logo} alt="Clitze Clein" className="h-10 w-auto" />
        <span className="flex flex-col gap-1.5">
          <span className="h-0.5 w-6 bg-oxblood" />
          <span className="h-0.5 w-6 bg-oxblood" />
          <span className="h-0.5 w-6 bg-oxblood" />
        </span>
      </div>
      <div className="relative flex items-center justify-center pb-2">
        <span className="h-px w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>
      <div className="px-5 pb-12 pt-4 text-center">
        <a className="inline-block rounded-full border border-oxblood/30 px-6 py-2.5 text-sm font-medium text-oxblood transition-all hover:bg-oxblood hover:text-cream">
          Termin anfragen
        </a>
      </div>
    </Backdrop>
  );
}

export default function NavbarPreview() {
  const options = [
    {
      title: "Boutique Cream",
      vibe: "elegant, hell, edel",
      anim:
        "Bar startet transparent über dem Hero und wird beim Scrollen cremefarben + leichter Schatten. Gold-Unterstrich zeichnet sich beim Hover unter jedem Link. CTA hebt sich beim Hover leicht an.",
      el: <Option1 />,
    },
    {
      title: "Oxblood Bold",
      vibe: "dunkel, selbstbewusst, Statement",
      anim:
        "Solide Oxblood-Bar, Links spreizen beim Hover die Buchstaben (letter-spacing) und färben sich gold. Gold-CTA mit Bounce (scale) beim Klick. Logo in Cream invertiert.",
      el: <Option2 />,
    },
    {
      title: "Floating Pill",
      vibe: "verspielt, cozy, vegan",
      anim:
        "Schwebende Pillen-Navigation mit Blur-Glas. Links sind Pills, die beim Hover hochfedern. Verlauf-CTA mit 🌱-Akzent und Scale-Bounce – passt zur lockeren, veganen Marke.",
      el: <Option3 />,
    },
    {
      title: "Minimal Editorial",
      vibe: "ultra-clean, Magazin-Look",
      anim:
        "Transparente Bar über einem Tattoo-Foto, maximaler Whitespace, Uppercase-Tracking. Links faden sanft auf Gold. CTA mit feiner Goldlinie. Sehr ruhig, hochwertig.",
      el: <Option4 />,
    },
    {
      title: "Center Emblem + Flourish",
      vibe: "symmetrisch, das Original-Logo im Zentrum",
      anim:
        "Echtes CC-Emblem mittig, Links links/rechts geteilt, darunter ein goldener Schwung (greift die Flourish des Logos auf), der sich beim Scrollen einzeichnet. Auf Mobile sauberes Burger-Layout.",
      el: <Option5 />,
    },
  ];

  return (
    <main className="min-h-screen bg-cream pb-24 pt-28">
      <header className="container-x mb-12 text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold">Sektion 1 von … · Live-Vergleich</p>
        <h1 className="mt-3 font-display text-4xl text-oxblood sm:text-5xl">Navbar / Header — 5 Optionen</h1>
        <p className="mx-auto mt-4 max-w-2xl text-ink/70">
          Fahre mit der Maus über Links &amp; Buttons, um die Micro-Animationen zu sehen. Sag mir,
          welche Option es wird (oder welche Elemente du kombinieren willst) – dann baue ich sie als
          echte, responsive Navbar ein und gehe weiter zur nächsten Sektion.
        </p>
      </header>

      <div className="container-x space-y-16">
        {options.map((o, i) => (
          <Frame key={o.title} n={i + 1} title={o.title} vibe={o.vibe} anim={o.anim}>
            {o.el}
          </Frame>
        ))}
      </div>
    </main>
  );
}
