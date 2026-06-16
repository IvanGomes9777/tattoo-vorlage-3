"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ *
   SEKTION 2 — HERO · 5 Design-Optionen (Live-Vergleich)
   Marke: Clitze Clein · vegan, nachhaltig, cozy, everybody's welcome
 * ------------------------------------------------------------------ */

const PORTRAIT = "/chiara.jpg";
const INTERIOR = "/galerie-clitzeclein.jpg";
const TATTOO = "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=70";

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
          <span className="h-3 w-3 rounded-full bg-[#e0b3ab]" />
          <span className="h-3 w-3 rounded-full bg-[#e6cf9c]" />
          <span className="h-3 w-3 rounded-full bg-[#bcd3b0]" />
          <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs text-ink/45">clitze-clein.de</span>
        </div>
        {children}
      </div>
      <p className="mt-3 text-sm text-ink/60">
        <span className="font-medium text-oxblood">Animation &amp; Interaktion:</span> {anim}
      </p>
    </motion.section>
  );
}

const eyebrow = "text-[0.7rem] uppercase tracking-[0.3em] text-gold";
const cta = "rounded-full bg-gradient-to-r from-oxblood to-oxblood-soft px-5 py-3 text-sm font-semibold text-cream transition-transform hover:scale-105 active:scale-95";
const ctaGhost = "rounded-full border border-oxblood/30 px-5 py-3 text-sm font-medium text-oxblood transition-colors hover:bg-oxblood hover:text-cream";

/* ===== OPTION 1 — Split Editorial ===== */
function Hero1() {
  return (
    <div className="grid min-h-[440px] grid-cols-1 sm:min-h-[520px] md:grid-cols-2">
      <div className="flex flex-col justify-center gap-5 bg-gradient-to-b from-cream to-cream-2 px-7 py-12 sm:px-10">
        <p className={eyebrow}>Vegan · Nachhaltig · Münster</p>
        <h1 className="font-display text-4xl leading-[1.05] text-oxblood sm:text-5xl">
          Dein <span className="italic text-gold">clitze cleines</span> Tattoo Atelier
        </h1>
        <p className="max-w-sm text-ink/70">22 m², 100 % vegan &amp; nachhaltig – mitten in Münster. Dein Safespace. Everybody&rsquo;s welcome.</p>
        <div className="flex flex-wrap gap-3">
          <a className={cta}>🌱 Termin anfragen</a>
          <a className={ctaGhost}>Galerie ansehen</a>
        </div>
      </div>
      <div className="relative min-h-[260px]">
        <Image src={PORTRAIT} alt="Chiara" fill className="object-cover" sizes="50vw" />
      </div>
    </div>
  );
}

/* ===== OPTION 2 — Full-Bleed Cinematic ===== */
function Hero2() {
  return (
    <div className="relative flex min-h-[440px] items-center sm:min-h-[520px]">
      <Image src={INTERIOR} alt="Atelier" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-oxblood-deep/85 via-oxblood-deep/55 to-transparent" />
      <div className="relative z-10 flex flex-col gap-5 px-7 py-12 sm:px-12">
        <p className={eyebrow}>Everybody&rsquo;s welcome</p>
        <h1 className="max-w-xl font-display text-4xl leading-[1.05] text-cream sm:text-6xl">Kunst auf Haut. Mit Herz.</h1>
        <p className="max-w-md text-cream/80">Seit 2019 tätowiert Chiara in entspannter, veganer Atmosphäre.</p>
        <div className="flex flex-wrap gap-3">
          <a className={cta}>🌱 Termin anfragen</a>
          <a className="rounded-full border border-cream/40 px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-oxblood">Galerie</a>
        </div>
      </div>
    </div>
  );
}

/* ===== OPTION 3 — Warm Minimal Centered ===== */
function Hero3() {
  return (
    <div className="flex min-h-[440px] flex-col items-center justify-center gap-6 bg-cream px-7 py-14 text-center sm:min-h-[520px]">
      <p className={eyebrow}>Vegan · Nachhaltig · Seit 2019</p>
      <h1 className="max-w-2xl font-display text-4xl leading-[1.05] text-oxblood sm:text-6xl">
        Kleine Kunst.<br />Große Bedeutung.
      </h1>
      <span className="h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <p className="max-w-md text-ink/70">Dein clitze cleines Tattoo Atelier in Münster – persönlich, ehrlich, für alle.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <a className={cta}>🌱 Termin anfragen</a>
        <a className={ctaGhost}>Mehr erfahren</a>
      </div>
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {["100 % vegan", "plastikfrei", "Safespace"].map((t) => (
          <span key={t} className="rounded-full bg-cream-2 px-3 py-1.5 text-xs font-medium text-oxblood">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ===== OPTION 4 — Collage / Polaroid ===== */
function Hero4() {
  const cards = [
    { src: PORTRAIT, rot: "-6deg", cls: "left-[4%] top-[14%] w-[38%]" },
    { src: INTERIOR, rot: "5deg", cls: "right-[5%] top-[10%] w-[40%]" },
    { src: TATTOO, rot: "-3deg", cls: "right-[18%] bottom-[6%] w-[30%]" },
  ];
  return (
    <div className="relative min-h-[460px] overflow-hidden bg-cream-2/70 sm:min-h-[540px]">
      {cards.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: parseFloat(c.rot) }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
          className={`absolute ${c.cls} overflow-hidden rounded-xl border-4 border-white shadow-xl`}
        >
          <Image src={c.src} alt="" width={400} height={460} className="h-auto w-full object-cover" />
        </motion.div>
      ))}
      <div className="relative z-10 flex min-h-[460px] flex-col items-center justify-center gap-4 px-6 text-center sm:min-h-[540px]">
        <h1 className="font-display text-4xl text-oxblood drop-shadow-[0_2px_8px_rgba(251,247,241,0.9)] sm:text-6xl">
          Clitze clein.<br />Ganz groß für dich.
        </h1>
        <a className={`${cta} shadow-lg`}>🌱 Termin anfragen</a>
      </div>
    </div>
  );
}

/* ===== OPTION 5 — Bold Oxblood Statement + Stats ===== */
function Hero5() {
  const stats = [
    { v: "5,0★", l: "bei Google" },
    { v: "100 %", l: "vegan" },
    { v: "22 m²", l: "clitze clein" },
    { v: "2019", l: "seit" },
  ];
  return (
    <div className="grid min-h-[460px] grid-cols-1 bg-oxblood-deep sm:min-h-[520px] md:grid-cols-[1.3fr_1fr]">
      <div className="flex flex-col justify-center gap-6 px-7 py-12 sm:px-10">
        <p className={eyebrow}>Dein Tattoo Atelier in Münster</p>
        <h1 className="font-display text-4xl leading-[1.05] text-cream sm:text-6xl">
          Vegan tätowiert.<br /><span className="text-gold">Für alle.</span>
        </h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, type: "spring", stiffness: 200, damping: 14 }}
            >
              <p className="font-display text-2xl text-gold sm:text-3xl">{s.v}</p>
              <p className="text-xs uppercase tracking-wide text-cream/60">{s.l}</p>
            </motion.div>
          ))}
        </div>
        <div><a className={`${cta} bg-gold from-gold to-gold-soft text-oxblood-deep`}>🌱 Termin anfragen</a></div>
      </div>
      <div className="relative min-h-[240px]">
        <Image src={PORTRAIT} alt="Chiara" fill className="object-cover" sizes="40vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-oxblood-deep/40 to-transparent" />
      </div>
    </div>
  );
}

export default function HeroPreview() {
  const options = [
    { title: "Split Editorial", vibe: "elegant, zweigeteilt, modern", anim: "Text-Spalte staggert beim Laden ein (Zeile für Zeile), Foto erscheint per sanftem Clip-Reveal. CTA mit Scale-Bounce.", el: <Hero1 /> },
    { title: "Full-Bleed Cinematic", vibe: "großes Foto, dramatisch", anim: "Studio-Foto füllt den Screen mit langsamem Ken-Burns-Zoom, dunkler Verlauf links. Headline fadet aus dem Dunkel auf.", el: <Hero2 /> },
    { title: "Warm Minimal", vibe: "ruhig, edel, viel Weißraum", anim: "Zentrierte Serif-Headline, goldener Divider zeichnet sich ein, Vegan-Pills poppen nacheinander rein. Sehr clean.", el: <Hero3 /> },
    { title: "Collage / Polaroid", vibe: "verspielt, cozy, handgemacht", anim: "Foto-Karten fliegen leicht gekippt rein (Stagger), beim Hover richten sie sich auf & zoomen. Passt zur lockeren Marke.", el: <Hero4 /> },
    { title: "Oxblood Statement + Stats", vibe: "selbstbewusst, vertrauensstark", anim: "Dunkles Panel, Headline + Porträt, Vertrauens-Zahlen (5,0★, 100 % vegan, 22 m², 2019) poppen als Spring-Animation rein.", el: <Hero5 /> },
  ];

  return (
    <main className="min-h-screen bg-cream pb-24 pt-28">
      <header className="container-x mb-12 text-center">
        <p className={eyebrow}>Sektion 2 · Live-Vergleich</p>
        <h1 className="mt-3 font-display text-4xl text-oxblood sm:text-5xl">Hero-Section — 5 Optionen</h1>
        <p className="mx-auto mt-4 max-w-2xl text-ink/70">Der erste Eindruck der Startseite. Sag mir die Nummer (1–5) oder welche Elemente du kombinieren willst – dann baue ich die finale Hero ein.</p>
      </header>
      <div className="container-x space-y-16">
        {options.map((o, i) => (
          <Frame key={o.title} n={i + 1} title={o.title} vibe={o.vibe} anim={o.anim}>{o.el}</Frame>
        ))}
      </div>
    </main>
  );
}
