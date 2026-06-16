"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ *
   SEKTION 4 — ATELIER-VORSTELLUNG · 5 Design-Optionen
   "Ein Safespace, in dem alles vegan ist" + Studio-Foto
 * ------------------------------------------------------------------ */

const IMG = "/galerie-clitzeclein.jpg";
const EYE = "Das Atelier";
const HEAD = "Ein Safespace, in dem alles vegan ist";
const BODY =
  "Von den Snacks und Getränken über Tampons bis hin zum Deo auf der Toilette – im Clitze Clein ist alles vegan. Zusätzlich sind fast alle Einweg-Artikel plastikfrei: Nadeln, Rasierer und das Material, mit dem das Equipment eingepackt wird, bestehen größtenteils aus Zuckerrohr.";
const BODY2 = "Hier soll dein clitze cleiner Safespace sein. Everybody’s welcome.";

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
const cta = "inline-flex items-center gap-1.5 rounded-full border border-oxblood/30 px-5 py-2.5 text-sm font-medium text-oxblood transition-colors hover:bg-oxblood hover:text-cream";

/* ===== OPTION 1 — Bild links / Text rechts + 22m²-Badge ===== */
function A1() {
  return (
    <div className="grid items-center gap-8 bg-cream px-6 py-12 sm:px-10 md:grid-cols-2">
      <div className="relative">
        <div className="overflow-hidden rounded-3xl shadow-[0_18px_40px_-20px_rgba(46,10,10,0.4)]"><Image src={IMG} alt="Atelier" width={1024} height={768} className="h-full w-full object-cover" /></div>
        <div className="absolute -bottom-4 -right-2 rounded-2xl bg-oxblood px-6 py-4 text-cream shadow-lg"><p className="font-display text-3xl">22 m²</p><p className="text-xs uppercase tracking-[0.2em] text-gold">clitze clein</p></div>
      </div>
      <div>
        <p className={eye}>{EYE}</p>
        <h3 className="mt-3 font-display text-3xl text-oxblood sm:text-4xl">{HEAD}</h3>
        <p className="mt-4 text-ink/75">{BODY}</p>
        <p className="mt-3 text-ink/75">{BODY2}</p>
        <a className={`${cta} mt-6`}>Mehr über das Atelier</a>
      </div>
    </div>
  );
}

/* ===== OPTION 2 — Großes Bild, überlappende Beige-Textkarte ===== */
function A2() {
  return (
    <div className="bg-cream-2/50 px-6 py-12 sm:px-10">
      <div className="relative">
        <div className="overflow-hidden rounded-3xl"><Image src={IMG} alt="Atelier" width={1280} height={620} className="h-64 w-full object-cover sm:h-80" /></div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10 mx-auto -mt-16 max-w-xl rounded-3xl border border-cream-3 bg-cream p-7 shadow-[0_18px_50px_-20px_rgba(46,10,10,0.35)] sm:p-9">
          <p className={eye}>{EYE}</p>
          <h3 className="mt-3 font-display text-2xl text-oxblood sm:text-3xl">{HEAD}</h3>
          <p className="mt-4 text-sm text-ink/75">{BODY}</p>
          <a className={`${cta} mt-6`}>Mehr über das Atelier</a>
        </motion.div>
      </div>
    </div>
  );
}

/* ===== OPTION 3 — Text über Bild-Band (Verlauf) ===== */
function A3() {
  return (
    <div className="relative min-h-[420px] sm:min-h-[480px]">
      <Image src={IMG} alt="Atelier" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-oxblood-deep/90 via-oxblood-deep/55 to-transparent" />
      <div className="relative z-10 flex min-h-[420px] max-w-xl flex-col justify-center gap-4 px-7 py-12 sm:min-h-[480px] sm:px-12">
        <p className={eye}>{EYE}</p>
        <h3 className="font-display text-3xl text-cream sm:text-4xl">{HEAD}</h3>
        <p className="text-cream/85">{BODY}</p>
        <a className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-gold-soft px-5 py-2.5 text-sm font-semibold text-oxblood-deep transition-transform hover:scale-105">Mehr über das Atelier</a>
      </div>
    </div>
  );
}

/* ===== OPTION 4 — Zwei-Bild-Collage + Text ===== */
function A4() {
  return (
    <div className="grid items-center gap-8 bg-cream px-6 py-12 sm:px-10 md:grid-cols-[1.1fr_1fr]">
      <div className="grid grid-cols-2 gap-3">
        <Image src={IMG} alt="Atelier" width={500} height={640} className="col-span-2 h-48 w-full rounded-2xl object-cover sm:h-60" />
        <Image src="https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=500&q=70" alt="Equipment" width={300} height={300} className="aspect-square w-full rounded-2xl object-cover" />
        <Image src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=70" alt="Tattoo" width={300} height={300} className="aspect-square w-full rounded-2xl object-cover" />
      </div>
      <div>
        <p className={eye}>{EYE}</p>
        <h3 className="mt-3 font-display text-3xl text-oxblood sm:text-4xl">{HEAD}</h3>
        <p className="mt-4 text-ink/75">{BODY}</p>
        <a className={`${cta} mt-6`}>Mehr über das Atelier</a>
      </div>
    </div>
  );
}

/* ===== OPTION 5 — Editorial: große 22 m² Zahl + hohes Bild ===== */
function A5() {
  return (
    <div className="grid gap-8 bg-cream-2/40 px-6 py-12 sm:px-10 md:grid-cols-[1fr_0.8fr]">
      <div>
        <p className={eye}>{EYE}</p>
        <h3 className="mt-3 font-display text-3xl text-oxblood sm:text-4xl">{HEAD}</h3>
        <div className="my-6 flex items-end gap-3">
          <span className="font-display text-[5rem] leading-none text-gold">22</span>
          <span className="pb-2 text-sm uppercase tracking-[0.2em] text-ink/60">m²<br />clitze clein</span>
        </div>
        <p className="text-ink/75">{BODY}</p>
        <a className={`${cta} mt-6`}>Mehr über das Atelier</a>
      </div>
      <div className="overflow-hidden rounded-3xl"><Image src={IMG} alt="Atelier" width={600} height={800} className="h-full w-full object-cover" /></div>
    </div>
  );
}

export default function AtelierPreview() {
  const options = [
    { title: "Bild links / Text rechts", vibe: "klassisch, mit 22 m²-Badge", anim: "Bild faded per Clip rein, das Oxblood-22-m²-Badge poppt nach. Klassisch & klar.", el: <A1 /> },
    { title: "Bild + überlappende Karte", vibe: "modern, magazinig", anim: "Breites Bild, darüber schiebt sich eine Beige-Textkarte von unten ins Bild – schöner Tiefeneffekt.", el: <A2 /> },
    { title: "Text über Bild-Band", vibe: "cinematic, immersiv", anim: "Studio-Foto vollflächig mit dunklem Verlauf, Text + Gold-CTA darüber. Wirkt wie ein Feature-Banner.", el: <A3 /> },
    { title: "Zwei-Bild-Collage", vibe: "lebendig, erzählerisch", anim: "Studio-Foto + zwei kleine Detail-Bilder als Collage, Text daneben. Mehr Einblicke auf einmal.", el: <A4 /> },
    { title: "Editorial 22 m²", vibe: "edel, zahlenstark", anim: "Riesige goldene „22\" als Eyecatcher neben hohem Studio-Bild. Betont das „clitze cleine\".", el: <A5 /> },
  ];
  return (
    <main className="min-h-screen bg-cream pb-24 pt-28">
      <header className="container-x mb-12 text-center">
        <p className={eye}>Sektion 4 · Live-Vergleich</p>
        <h1 className="mt-3 font-display text-4xl text-oxblood sm:text-5xl">Atelier-Vorstellung — 5 Optionen</h1>
        <p className="mx-auto mt-4 max-w-2xl text-ink/70">Mit deinem echten Studio-Foto. Sag mir die Nummer (1–5) oder einen Kombi-Wunsch.</p>
      </header>
      <div className="container-x space-y-16">
        {options.map((o, i) => (<Frame key={o.title} n={i + 1} title={o.title} vibe={o.vibe} anim={o.anim}>{o.el}</Frame>))}
      </div>
    </main>
  );
}
