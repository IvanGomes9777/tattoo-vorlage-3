"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/public/clintzecleintattoo.png";

const links = [
  { href: "/#top", label: "Start" },
  { href: "/#atelier", label: "Atelier" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/raten", label: "Ratenzahlung" },
  { href: "/#kontakt", label: "Kontakt" },
];

/**
 * Sektion 1 – Navbar (Option 3: "Floating Pill")
 * Schwebende Glas-Pille · Links federn beim Hover · 🌱-Verlauf-CTA mit Bounce.
 * Mobile-first, fixed, transparent→fester beim Scrollen, A11y-Burger-Menü.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-x pt-3 sm:pt-4">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-300 ${
            scrolled || open
              ? "border-cream-3 bg-white/85 shadow-[0_12px_34px_-14px_rgba(46,10,10,0.3)] backdrop-blur-md"
              : "border-transparent bg-white/55 backdrop-blur-sm"
          }`}
        >
          <Link href="/" aria-label="Clitze Clein – Startseite" className="shrink-0 pl-1">
            <Image src={logo} alt="Clitze Clein – Tattoo Atelier" priority className="h-9 w-auto sm:h-10" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                      active
                        ? "bg-cream-2 text-oxblood"
                        : "text-ink/70 hover:bg-cream-2 hover:text-oxblood"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/#kontakt"
              className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-oxblood to-oxblood-soft px-4 py-2.5 text-sm font-semibold text-cream shadow-[0_8px_20px_-8px_rgba(74,18,18,0.6)] transition-transform hover:scale-105 active:scale-95 sm:inline-flex"
            >
              <span aria-hidden>🌱</span> Termin anfragen
            </Link>

            {/* Burger */}
            <button
              type="button"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full text-oxblood transition-colors hover:bg-cream-2 md:hidden"
            >
              <div className="flex w-5 flex-col gap-[5px]">
                <span className={`h-0.5 w-full bg-current transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`h-0.5 w-full bg-current transition-all ${open ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-full bg-current transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </motion.nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 overflow-hidden rounded-3xl border border-cream-3 bg-white/95 p-3 shadow-[0_18px_50px_-20px_rgba(46,10,10,0.4)] backdrop-blur-md md:hidden"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                          active ? "bg-cream-2 text-oxblood" : "text-ink/80 hover:bg-cream-2 hover:text-oxblood"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
                <li className="mt-1">
                  <Link
                    href="/#kontakt"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-1.5 rounded-2xl bg-gradient-to-r from-oxblood to-oxblood-soft px-4 py-3 text-base font-semibold text-cream"
                  >
                    <span aria-hidden>🌱</span> Termin anfragen
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
