"use client";

import { motion } from "framer-motion";
import { iconFor } from "@/components/Icons";
import { values } from "@/lib/content";

/* ------------------------------------------------------------------ *
   SEKTION 3 — WERTE "Warum Clitze Clein" · 5 Design-Optionen
   Inhalt: 100 % Vegan · Nachhaltig · Dein Safespace
 * ------------------------------------------------------------------ */

const EYEBROW = "Warum Clitze Clein";
const HEAD = "Die kleinste Dekadenz in Münster";
const INTRO =
  "Tattoo-Zubehör ist oft schon vegan – aber nachhaltig? Oder alles, was über das Equipment hinausgeht? Fehlanzeige. Außer im Clitze Clein.";

function Frame({ n, title, vibe, anim, children }: { n: number; title: string; vibe: string; anim: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-5xl"
    >
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

const eyebrowCls = "text-[0.7rem] uppercase tracking-[0.3em] text-gold";

/* ===== OPTION 1 — Cream Cards (elegant) ===== */
function Werte1() {
  return (
    <div className="bg-cream-2/50 px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <p className={eyebrowCls}>{EYEBROW}</p>
        <h3 className="mt-3 font-display text-3xl text-oxblood sm:text-4xl">{HEAD}</h3>
        <p className="mx-auto mt-4 text-ink/70">{INTRO}</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {values.map((v) => (
          <motion.article key={v.title} whileHover={{ y: -6 }} className="rounded-2xl border border-cream-3 bg-white p-7 shadow-[0_12px_30px_-16px_rgba(46,10,10,0.25)]">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-oxblood/8 p-3.5 text-oxblood">{iconFor(v.icon)}</span>
            <h4 className="mt-5 font-display text-xl text-oxblood">{v.title}</h4>
            <p className="mt-2 text-sm text-ink/70">{v.text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

/* ===== OPTION 2 — Oxblood Band, große Nummern ===== */
function Werte2() {
  return (
    <div className="bg-oxblood-deep px-6 py-12 text-cream sm:px-10">
      <p className={eyebrowCls}>{EYEBROW}</p>
      <h3 className="mt-3 max-w-xl font-display text-3xl sm:text-4xl">{HEAD}</h3>
      <div className="mt-10 space-y-px">
        {values.map((v, i) => (
          <motion.div key={v.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group flex items-start gap-5 border-t border-cream/15 py-6">
            <span className="font-display text-3xl text-gold sm:text-4xl">0{i + 1}</span>
            <div className="flex-1">
              <h4 className="font-display text-2xl transition-colors group-hover:text-gold">{v.title}</h4>
              <p className="mt-1 max-w-lg text-cream/70">{v.text}</p>
            </div>
            <span className="hidden text-gold sm:block">{iconFor(v.icon)}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ===== OPTION 3 — Split Sticky Editorial ===== */
function Werte3() {
  return (
    <div className="grid bg-cream px-6 py-12 sm:px-10 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
      <div className="md:sticky md:top-10 md:self-start">
        <p className={eyebrowCls}>{EYEBROW}</p>
        <h3 className="mt-3 font-display text-3xl text-oxblood sm:text-4xl">{HEAD}</h3>
        <p className="mt-4 text-ink/70">{INTRO}</p>
      </div>
      <div className="mt-8 divide-y divide-cream-3 md:mt-0">
        {values.map((v) => (
          <motion.div key={v.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-4 py-6 first:pt-0">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-oxblood/8 p-2.5 text-oxblood">{iconFor(v.icon)}</span>
            <div>
              <h4 className="font-display text-xl text-oxblood">{v.title}</h4>
              <p className="mt-1 text-sm text-ink/70">{v.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ===== OPTION 4 — Bento (verspielt, cozy) ===== */
function Werte4() {
  return (
    <div className="bg-cream-2/50 px-6 py-12 sm:px-10">
      <p className={`${eyebrowCls} text-center`}>{EYEBROW}</p>
      <h3 className="mx-auto mt-3 max-w-xl text-center font-display text-3xl text-oxblood sm:text-4xl">{HEAD}</h3>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl bg-gradient-to-br from-oxblood to-oxblood-soft p-8 text-cream sm:row-span-2 sm:flex sm:flex-col sm:justify-between">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream/15 p-3">{iconFor(values[0].icon)}</span>
          <div className="mt-6"><h4 className="font-display text-3xl">{values[0].title}</h4><p className="mt-2 text-cream/80">{values[0].text}</p></div>
        </motion.div>
        {values.slice(1).map((v) => (
          <motion.div key={v.title} whileHover={{ scale: 1.02 }} className="rounded-3xl border border-cream-3 bg-white p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 p-2.5 text-gold">{iconFor(v.icon)}</span>
            <h4 className="mt-4 font-display text-xl text-oxblood">{v.title}</h4>
            <p className="mt-2 text-sm text-ink/70">{v.text}</p>
          </motion.div>
        ))}
        <motion.div whileHover={{ scale: 1.02 }} className="flex items-center justify-center rounded-3xl bg-gold/15 p-7 text-center">
          <p className="font-display text-2xl text-oxblood">Everybody&rsquo;s welcome 🌱</p>
        </motion.div>
      </div>
    </div>
  );
}

/* ===== OPTION 5 — Minimal Statements + Gold Flourish ===== */
function Werte5() {
  return (
    <div className="bg-cream px-6 py-14 text-center sm:px-10">
      <p className={eyebrowCls}>{EYEBROW}</p>
      <h3 className="mx-auto mt-3 max-w-xl font-display text-3xl text-oxblood sm:text-4xl">{HEAD}</h3>
      <div className="mx-auto mt-10 max-w-2xl">
        {values.map((v, i) => (
          <motion.div key={v.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
            {i > 0 && <span className="mx-auto my-7 block h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />}
            <span className="mx-auto flex h-12 w-12 items-center justify-center text-gold">{iconFor(v.icon)}</span>
            <h4 className="mt-3 font-display text-2xl text-oxblood">{v.title}</h4>
            <p className="mx-auto mt-2 max-w-md text-ink/70">{v.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function WertePreview() {
  const options = [
    { title: "Cream Cards", vibe: "elegant, klassisch, klar", anim: "Drei Karten faden gestaffelt ein, heben sich beim Hover sanft an (lift). Icon in zarter Oxblood-Kachel.", el: <Werte1 /> },
    { title: "Oxblood Band", vibe: "dunkel, große Nummern, Statement", anim: "Dunkles Band, Zeilen sliden von links ein (Stagger), Titel färbt sich beim Hover gold. Große 01/02/03.", el: <Werte2 /> },
    { title: "Split Sticky Editorial", vibe: "magazinig, ruhig", anim: "Linke Überschrift bleibt beim Scrollen sticky stehen, rechts scrollen die Werte mit feinen Trennlinien rein.", el: <Werte3 /> },
    { title: "Bento (verspielt)", vibe: "cozy, modern, passt zur Pill-Navbar", anim: "Bento-Grid: großes Vegan-Tile in Oxblood, kleinere Tiles + 🌱-Tile. Alle skalieren beim Hover leicht.", el: <Werte4 /> },
    { title: "Minimal + Gold-Flourish", vibe: "edel, viel Weißraum", anim: "Zentrierte Statements, dazwischen goldene Flourish-Linien (wie im Logo), Werte poppen nacheinander rein.", el: <Werte5 /> },
  ];
  return (
    <main className="min-h-screen bg-cream pb-24 pt-28">
      <header className="container-x mb-12 text-center">
        <p className={eyebrowCls}>Sektion 3 · Live-Vergleich</p>
        <h1 className="mt-3 font-display text-4xl text-oxblood sm:text-5xl">Werte „Warum Clitze Clein" — 5 Optionen</h1>
        <p className="mx-auto mt-4 max-w-2xl text-ink/70">Die Sektion direkt nach der Hero: vegan · nachhaltig · safespace. Sag mir die Nummer (1–5) oder einen Kombi-Wunsch.</p>
      </header>
      <div className="container-x space-y-16">
        {options.map((o, i) => (
          <Frame key={o.title} n={i + 1} title={o.title} vibe={o.vibe} anim={o.anim}>{o.el}</Frame>
        ))}
      </div>
    </main>
  );
}
