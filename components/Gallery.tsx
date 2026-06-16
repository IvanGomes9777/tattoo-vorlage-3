"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gallery, type Galleryitem } from "@/lib/content";

const filters = [
  { key: "all", label: "Alles" },
  { key: "tattoo", label: "Tattoos" },
  { key: "kunst", label: "Gemälde" },
  { key: "studio", label: "Das Atelier" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export default function Gallery({ limit }: { limit?: number }) {
  const [active, setActive] = useState<FilterKey>("all");
  const [lightbox, setLightbox] = useState<Galleryitem | null>(null);

  const items = gallery
    .filter((g) => active === "all" || g.category === active)
    .slice(0, limit ?? gallery.length);

  return (
    <div>
      <div className="mb-9 flex flex-wrap justify-center gap-2.5">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`min-h-11 rounded-full px-5 py-2 text-sm font-medium transition-all ${
              active === f.key
                ? "bg-oxblood text-cream shadow-soft"
                : "bg-white text-ink/70 ring-1 ring-cream-3 hover:ring-gold/50"
            }`}
            aria-pressed={active === f.key}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-2 gap-4 [column-fill:_balance] sm:columns-3 lg:columns-4">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.button
              layout
              key={item.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setLightbox(item)}
              className="group mb-4 block w-full overflow-hidden rounded-xl bg-cream-2 ring-1 ring-cream-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span className="relative block">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={750}
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-oxblood-deep/70 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs font-medium text-cream">{item.caption}</span>
                </span>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-oxblood-deep/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.caption}
          >
            <motion.figure
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[88vh] max-w-3xl overflow-hidden rounded-2xl bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src.replace(/w=\d+/, "w=1400")}
                alt={lightbox.alt}
                width={1400}
                height={1750}
                className="h-auto max-h-[78vh] w-full object-contain"
              />
              <figcaption className="flex items-center justify-between gap-4 px-5 py-3 text-sm text-ink/75">
                <span>{lightbox.caption}</span>
                <button
                  onClick={() => setLightbox(null)}
                  className="rounded-full px-3 py-1 text-oxblood transition-colors hover:bg-cream-2"
                  aria-label="Schließen"
                >
                  Schließen ✕
                </button>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
