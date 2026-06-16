"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { StarIcon } from "./Icons";
import { studio } from "@/lib/studio";

/**
 * Sektion 2 – Hero (Option 2: "Full-Bleed Cinematic")
 * Loop-Video (Higsfield AI) als Full-Bleed-Hintergrund, dunkler Verlauf links
 * für Lesbarkeit. Respektiert prefers-reduced-motion (zeigt dann nur das Poster).
 */
export default function HeroVideo() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduce) return;
    v.play().catch(() => {
      /* autoplay blocked → poster stays */
    });
  }, [reduce]);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        {!reduce && (
          <video
            ref={videoRef}
            className={`h-full w-full object-cover transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
            src="/hero-loop.mp4"
            poster="/galerie-clitzeclein.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            onCanPlay={() => setReady(true)}
          />
        )}
        {/* Poster fallback layer (and for reduced motion) */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            ready && !reduce ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: "url(/galerie-clitzeclein.jpg)" }}
        />
        {/* Legibility overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-oxblood-deep/88 via-oxblood-deep/55 to-oxblood-deep/15" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-cream" />
      </div>

      {/* Content */}
      <div className="container-x relative pb-20 pt-32">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[0.72rem] font-medium uppercase tracking-[0.32em] text-gold"
        >
          Vegan · Nachhaltig · Everybody&rsquo;s welcome
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,1.4rem+5.5vw,5.5rem)] leading-[1.04] text-cream"
        >
          Kunst auf Haut. <span className="italic text-gold">Mit Herz.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-[clamp(1.05rem,1rem+0.4vw,1.3rem)] leading-relaxed text-cream/85"
        >
          Dein clitze cleines Tattoo Atelier in Münster. 22 m², 100 % vegan und
          nachhaltig – seit 2019 tätowiert Chiara hier in entspannter Atmosphäre.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3.5 text-sm font-semibold text-oxblood-deep shadow-[0_10px_30px_-10px_rgba(176,138,79,0.7)] transition-transform hover:scale-105 active:scale-95"
          >
            <span aria-hidden>🌱</span> Termin anfragen
          </Link>
          <Link
            href="/galerie"
            className="inline-flex items-center rounded-full border border-cream/40 px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-oxblood"
          >
            Galerie ansehen
          </Link>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex items-center gap-3 text-sm text-cream/75"
        >
          <span className="flex text-gold">
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
          </span>
          <span>
            <strong className="text-cream">5,0</strong> bei Google · seit {studio.founded} mit Herz dabei
          </span>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <span className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-cream/55 md:flex">
        Scrollen
        <span className="h-10 w-px animate-pulse bg-cream/40" />
      </span>
    </section>
  );
}
