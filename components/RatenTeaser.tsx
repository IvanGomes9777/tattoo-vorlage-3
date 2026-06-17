"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const MIN = 99;
const MAX = 800;
const FACTOR = 0.178; // Richtwert Monatsrate

const bubbles = [
  { side: "l", text: "Tattoos sind doch schweine teuer …" },
  { side: "r", text: "Stimmt! Drum geht’s bei mir auch in Raten. 😎" },
  { side: "l", text: "Echt? Und wie soll das gehen?" },
  { side: "r", text: "Wunschbetrag wählen, via PayPal in Raten zahlen – fertig. 🌱" },
] as const;

/**
 * Sektion 8 – Tattoo auf Raten (Mix aus Option 9 "Sprechblasen" + Option 6 "Raten-Rechner").
 * Links der lockere Chat, rechts der interaktive Rechner mit Live-Monatsrate.
 */
export default function RatenTeaser() {
  const [amount, setAmount] = useState(199);
  const rate = (amount * FACTOR).toFixed(2).replace(".", ",");
  const pct = ((amount - MIN) / (MAX - MIN)) * 100;

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Links: Heading + Chat */}
          <div>
            <Stagger>
              <StaggerItem><p className="eyebrow">Powered by PayPal</p></StaggerItem>
              <StaggerItem><h2 className="t-h1 mt-4">Dein Tattoo auf Raten</h2></StaggerItem>
              <StaggerItem>
                <p className="prose-body mt-4 text-ink/75">
                  Tattoos sind schweine teuer – da brauchen wir nicht drüber zu
                  diskutieren. Zahl deinen Wunschbetrag einfach in Raten via PayPal.
                </p>
              </StaggerItem>
            </Stagger>

            <Stagger className="mt-7 flex flex-col gap-2.5">
              {bubbles.map((b, i) => (
                <StaggerItem key={i} className={b.side === "r" ? "self-end" : "self-start"}>
                  <p
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-[0.95rem] leading-snug ${
                      b.side === "r"
                        ? "rounded-br-md bg-oxblood text-cream"
                        : "rounded-bl-md bg-white text-ink ring-1 ring-cream-3"
                    }`}
                  >
                    {b.text}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Rechts: Raten-Rechner */}
          <Reveal delay={0.1}>
            <div className="card p-8 text-center sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">Dein Wunschbetrag</p>
              <p className="mt-3 font-display text-[3.25rem] leading-none text-oxblood">{amount} €</p>
              <p className="mt-2 text-ink/70">
                ab <strong className="text-lg text-gold">{rate} €</strong> / Monat
              </p>

              <input
                type="range"
                min={MIN}
                max={MAX}
                step={10}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                aria-label="Wunschbetrag wählen"
                className="raten-range mt-7"
                style={{
                  backgroundImage: `linear-gradient(90deg, var(--color-gold) ${pct}%, var(--color-cream-3) ${pct}%)`,
                }}
              />
              <div className="mt-1.5 flex justify-between text-xs text-ink/45">
                <span>{MIN} €</span>
                <span>{MAX} €</span>
              </div>

              <Link href="/raten" className="btn btn-primary mt-7 w-full">
                Wunschbetrag buchen
              </Link>
              <p className="mt-3 text-xs text-ink/50">
                Unverbindlicher Richtwert. Die genauen Konditionen legt der PayPal-Ratenkauf fest.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
