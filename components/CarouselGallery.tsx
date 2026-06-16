"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gallery } from "@/lib/content";

const filters = [
  { key: "all", label: "Alle" },
  { key: "tattoo", label: "Meine Tattoos" },
  { key: "kunst", label: "Meine Gemälde" },
  { key: "studio", label: "Das Studio" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

/**
 * Sektion 6 – Galerie-Vorschau (Option 8: Karussell mit Kategorie-Buttons)
 * Buttons filtern, welche Fotos das Karussell durchläuft. Auto-Advance,
 * Pfeile, Punkte; pausiert beim Hover; respektiert prefers-reduced-motion.
 */
export default function CarouselGallery() {
  const [active, setActive] = useState<FilterKey>("all");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const items = useMemo(
    () => gallery.filter((g) => active === "all" || g.category === active),
    [active],
  );

  // Kategorie gewechselt → zurück auf erstes Bild
  useEffect(() => setIndex(0), [active]);

  // Auto-Advance
  useEffect(() => {
    if (paused || items.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 3500);
    return () => clearInterval(t);
  }, [paused, items.length]);

  const go = (n: number) => setIndex((n + items.length) % items.length);
  const current = items[Math.min(index, items.length - 1)];

  return (
    <div>
      {/* Kategorie-Buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-2.5">
        {filters.map((f) => {
          const on = active === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              aria-pressed={on}
              className={`min-h-11 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                on
                  ? "bg-oxblood text-cream shadow-soft"
                  : "bg-white text-ink/70 ring-1 ring-cream-3 hover:-translate-y-0.5 hover:ring-gold/60"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Karussell */}
      <div
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[1.6rem] bg-oxblood-deep shadow-card ring-1 ring-cream-3"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative aspect-[16/10] sm:aspect-[16/9]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`${active}-${current?.src}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(max-width: 768px) 100vw, 56rem"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oxblood-deep/75 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 font-display text-lg text-cream sm:bottom-6 sm:left-7 sm:text-xl">
                {current.caption}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Pfeile */}
          <button
            onClick={() => go(index - 1)}
            aria-label="Vorheriges Bild"
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/85 text-oxblood backdrop-blur transition-colors hover:bg-cream"
          >
            ‹
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Nächstes Bild"
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/85 text-oxblood backdrop-blur transition-colors hover:bg-cream"
          >
            ›
          </button>

          {/* Punkte */}
          <div className="absolute bottom-4 right-5 flex gap-1.5 sm:bottom-6 sm:right-7">
            {items.map((it, i) => (
              <button
                key={it.src}
                onClick={() => setIndex(i)}
                aria-label={`Bild ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-gold" : "w-2 bg-cream/50 hover:bg-cream/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
