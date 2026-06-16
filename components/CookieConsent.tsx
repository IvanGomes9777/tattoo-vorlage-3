"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "cc-cookie-consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setShow(true);
    } catch {
      /* storage blocked → stay silent */
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-label="Cookie-Einstellungen"
          aria-live="polite"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-cream-3 bg-white/95 p-5 shadow-card backdrop-blur sm:inset-x-auto sm:right-5 sm:bottom-5"
        >
          <p className="font-display text-lg text-oxblood">Clitze Cleine Cookies 🍪</p>
          <p className="prose-body mt-2 text-sm text-ink/75">
            Diese Seite nutzt nur technisch notwendige Cookies, damit alles
            funktioniert. Erst wenn du zustimmst, laden wir optionale Inhalte wie
            die eingebettete Karte. Details in der{" "}
            <Link href="/datenschutz" className="font-medium text-oxblood underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => decide("accepted")} className="btn btn-primary flex-1">
              Alle akzeptieren
            </button>
            <button onClick={() => decide("declined")} className="btn btn-ghost flex-1">
              Nur notwendige
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
