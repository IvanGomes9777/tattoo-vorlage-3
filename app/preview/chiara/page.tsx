"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ *
   SEKTION 5 — ÜBER MICH / CHIARA · 5 Design-Optionen
 * ------------------------------------------------------------------ */

const IMG = "/chiara.jpg";
const EYE = "Über mich";
const HEAD = "Hi, ich bin Chiara";
const BODY =
  "Seit 2019 bin ich Tätowiererin. Mit meiner lockeren Art gebe ich mein Bestes, falls du dich unwohl fühlst oder Angst hast – wir rocken das gemeinsam.";
const BODY2 =
  "Und wenn ich richtig gute Laune habe, darfst du sogar aussuchen, was für Musik gerade läuft. Lets go – mach dir dein eigenes Bild von mir.";

function Frame({ n, title, vibe, anim, children }: { n: number; title: string; vibe: string; anim: string; children: React.ReactNode }) {
  return (
    <motion.section initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8% 0px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mx-auto w-full max-w-5xl">
      <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-oxblood text-sm font-semibold text-cream">{n}</span>
        <h2 className="font-display text-2xl text-oxblood">{title}</h2>
        <span className="text-sm text-ink/55">— {vibe}</span>
      </div>
      <div className="overflow-hidden rounded-2xl border border-cream-3 bg-white shadow-[0_18px_50px_-20px_rgba(46,10,10,0.28)]">
        <div className="flex items-center gap-2 border-b border-cream-3 bg-cream-2/60 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#e0b3ab]" /><span className="h-3 w-3 rounded-full bg-[#e6cf9c]" /><span className="h-3 w-3 rounded-full bg-[#bcd3b0]" />
          <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs text-ink/45">clitze-clein.de</span>
        </div>
        {children}
      </div>
      <p className="mt-3 text-sm text-ink/60"><span className="font-medium text-oxblood">Animation &amp; Interaktion:</span> {anim}</p>
    </motion.section>
  );
}

const eye = "text-[0.7rem] uppercase tracking-[0.3em] text-gold";
const ctaGold = "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-gold-soft px-5 py-2.5 text-sm font-semibold text-oxblood-deep transition-transform hover:scale-105 active:scale-95";
const ctaGhostLight = "inline-flex items-center rounded-full border border-oxblood/30 px-5 py-2.5 text-sm font-medium text-oxblood transition-colors hover:bg-oxblood hover:text-cream";

/* ===== OPTION 1 — Dark Editorial (Porträt links, Cream-Text) ===== */
function C1() {
  return (
    <div className="grid items-center gap-8 bg-oxblood-deep px-6 py-12 text-cream sm:px-10 md:grid-cols-[1fr_1.2fr]">
      <div className="overflow-hidden rounded-3xl shadow-lg"><Image src={IMG} alt="Chiara" width={700} height={720} className="h-full w-full object-cover" /></div>
      <div>
        <p className={eye}>{EYE}</p>
        <h3 className="mt-3 font-display text-3xl text-cream sm:text-4xl">{HEAD}</h3>
        <p className="mt-4 text-cream/85">{BODY}</p>
        <p className="mt-3 text-cream/85">{BODY2}</p>
        <a className={`${ctaGold} mt-6`}>Lern mich kennen</a>
      </div>
    </div>
  );
}

/* ===== OPTION 2 — Hell & freundlich (Porträt links, dunkle Schrift) ===== */
function C2() {
  return (
    <div className="grid items-center gap-8 bg-cream px-6 py-12 sm:px-10 md:grid-cols-[1fr_1.2fr]">
      <div className="overflow-hidden rounded-3xl shadow-[0_18px_40px_-20px_rgba(46,10,10,0.4)]"><Image src={IMG} alt="Chiara" width={700} height={720} className="h-full w-full object-cover" /></div>
      <div>
        <p className={eye}>{EYE}</p>
        <h3 className="mt-3 font-display text-3xl text-oxblood sm:text-4xl">{HEAD}</h3>
        <p className="mt-4 text-ink/75">{BODY}</p>
        <p className="mt-3 text-ink/75">{BODY2}</p>
        <a className={`${ctaGhostLight} mt-6`}>Lern mich kennen</a>
      </div>
    </div>
  );
}

/* ===== OPTION 3 — Großes Porträt + überlappende Namenskarte ===== */
function C3() {
  return (
    <div className="bg-cream-2/50 px-6 py-12 sm:px-10">
      <div className="relative mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-3xl"><Image src={IMG} alt="Chiara" width={1200} height={620} className="h-72 w-full object-cover object-[center_25%] sm:h-96" /></div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10 -mt-20 ml-4 mr-auto max-w-md rounded-3xl border border-cream-3 bg-cream p-7 shadow-[0_18px_50px_-20px_rgba(46,10,10,0.4)]">
          <p className={eye}>{EYE}</p>
          <h3 className="mt-2 font-display text-3xl text-oxblood">{HEAD}</h3>
          <p className="mt-3 text-sm text-ink/75">{BODY}</p>
          <a className={`${ctaGhostLight} mt-5`}>Lern mich kennen</a>
        </motion.div>
      </div>
    </div>
  );
}

/* ===== OPTION 4 — Zitat-fokussiert (Pull-Quote + kleines Porträt) ===== */
function C4() {
  return (
    <div className="bg-oxblood-deep px-6 py-14 text-cream sm:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className={eye}>{EYE}</p>
        <blockquote className="mt-5 font-display text-3xl leading-snug text-cream sm:text-4xl">„Falls du Angst hast – <span className="text-gold">wir rocken das gemeinsam.</span>"</blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Image src={IMG} alt="Chiara" width={120} height={120} className="h-16 w-16 rounded-full object-cover ring-2 ring-gold/50" />
          <div className="text-left">
            <p className="font-display text-xl text-cream">Chiara</p>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/60">Tätowiererin seit 2019</p>
          </div>
        </div>
        <a className={`${ctaGold} mt-8`}>Lern mich kennen</a>
      </div>
    </div>
  );
}

/* ===== OPTION 5 — Split mit „seit 2019"-Badge ===== */
function C5() {
  return (
    <div className="grid items-stretch gap-0 bg-cream sm:grid-cols-2">
      <div className="relative min-h-[300px]">
        <Image src={IMG} alt="Chiara" fill className="object-cover" sizes="50vw" />
        <div className="absolute bottom-4 left-4 rounded-2xl bg-oxblood/90 px-4 py-2 text-cream backdrop-blur"><span className="font-display text-2xl text-gold">seit 2019</span></div>
      </div>
      <div className="flex flex-col justify-center px-7 py-12 sm:px-10">
        <p className={eye}>{EYE}</p>
        <h3 className="mt-3 font-display text-3xl text-oxblood sm:text-4xl">{HEAD}</h3>
        <p className="mt-4 text-ink/75">{BODY}</p>
        <p className="mt-3 text-ink/75">{BODY2}</p>
        <div className="mt-6"><a className={ctaGhostLight}>Lern mich kennen</a></div>
      </div>
    </div>
  );
}

export default function ChiaraPreview() {
  const options = [
    { title: "Dark Editorial", vibe: "edel, Porträt links, Cream-Text auf Dunkel", anim: "Porträt clip-revealt rein, Text staggert. Goldener CTA mit Scale-Bounce. (Aktuell auf der Seite.)", el: <C1 /> },
    { title: "Hell & freundlich", vibe: "warm, einladend, dunkle Schrift auf Beige", anim: "Helle Variante – passt zur Beige/Gold-Linie, wirkt nahbar. Sanftes Fade-in, Ghost-CTA füllt sich beim Hover.", el: <C2 /> },
    { title: "Porträt + Namenskarte", vibe: "magazinig, modern", anim: "Breites Porträt, darüber schiebt sich eine Beige-Karte mit Name & Text – schöner Tiefeneffekt.", el: <C3 /> },
    { title: "Zitat-fokussiert", vibe: "emotional, persönlich", anim: "Großes Pull-Quote („wir rocken das gemeinsam") mit rundem Porträt + Signatur. Sehr menschlich.", el: <C4 /> },
    { title: "Split + „seit 2019\"", vibe: "klar, vertrauensstark", anim: "Halb Porträt / halb Text, goldenes „seit 2019\"-Badge auf dem Bild. Badge poppt rein.", el: <C5 /> },
  ];
  return (
    <main className="min-h-screen bg-cream pb-24 pt-28">
      <header className="container-x mb-12 text-center">
        <p className={eye}>Sektion 5 · Live-Vergleich</p>
        <h1 className="mt-3 font-display text-4xl text-oxblood sm:text-5xl">Über mich / Chiara — 5 Optionen</h1>
        <p className="mx-auto mt-4 max-w-2xl text-ink/70">Mit Chiaras echtem Porträt &amp; ihrer Story. Sag mir die Nummer (1–5).</p>
      </header>
      <div className="container-x space-y-16">
        {options.map((o, i) => (<Frame key={o.title} n={i + 1} title={o.title} vibe={o.vibe} anim={o.anim}>{o.el}</Frame>))}
      </div>
    </main>
  );
}
