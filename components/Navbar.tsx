"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Start" },
  { href: "/studio", label: "Atelier" },
  { href: "/galerie", label: "Galerie" },
  { href: "/raten", label: "Ratenzahlung" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-cream/90 shadow-[0_1px_0_0_rgba(74,18,18,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between py-3.5">
        <Link href="/" className="text-oxblood transition-opacity hover:opacity-80" aria-label="Zur Startseite">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`group relative text-sm font-medium tracking-wide transition-colors ${
                    active ? "text-oxblood" : "text-ink/70 hover:text-oxblood"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/kontakt" className="btn btn-primary hidden h-11 min-h-0 px-5 py-0 text-sm sm:inline-flex">
            Termin anfragen
          </Link>

          <button
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-oxblood/15 text-oxblood md:hidden"
          >
            <span className="sr-only">Menü</span>
            <div className="flex w-5 flex-col gap-[5px]">
              <span className={`h-0.5 w-full bg-current transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 pb-6 pt-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-xl px-3 py-3 text-lg font-medium text-ink/80 transition-colors hover:bg-cream-2 hover:text-oxblood"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link href="/kontakt" className="btn btn-primary w-full">
                  Termin anfragen
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
