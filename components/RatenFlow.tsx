"use client";

import { useMemo, useRef, useState } from "react";
import { studio } from "@/lib/studio";

const MIN = 99;
const MAX = 5000;
const chips = [250, 450, 800, 1500, 3000];
const terms = [3, 6, 12, 24];

const fmt = (n: number) =>
  n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
const fmtInt = (n: number) => n.toLocaleString("de-DE") + " €";

type Recap = { name: string; addr: string; email: string; motiv: string };

/**
 * /raten – „Dein Tattoo auf Raten" (mehrstufiger PayPal-Flow).
 * Adaptiert aus der gelieferten Vorlage, im Clitze-Clein-Look (Cream/Oxblood/Gold).
 */
export default function RatenFlow() {
  const [step, setStep] = useState(0);
  const [amount, setAmount] = useState(450);
  const [term, setTerm] = useState(6);
  const [agb, setAgb] = useState(false);
  const [recap, setRecap] = useState<Recap | null>(null);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [payload, setPayload] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const go = (n: number) => {
    setStep(n);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clamp = (v: number) => Math.max(MIN, Math.min(MAX, Math.round(v)));
  const pct = ((amount - MIN) / (MAX - MIN)) * 100;
  const rate = useMemo(() => amount / term, [amount, term]);

  const toCheckout = () => {
    const f = formRef.current;
    if (!f) return;
    const errs: Record<string, boolean> = {};
    f.querySelectorAll<HTMLInputElement | HTMLSelectElement>("[data-req]").forEach((el) => {
      if (!el.value.trim()) errs[el.name] = true;
    });
    if (!agb) errs.agb = true;
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const d = Object.fromEntries(new FormData(f).entries()) as Record<string, string>;
    setPayload({ ...d, amount: String(amount), term: String(term) });
    const name = [d.anrede, d.vorname, d.nachname].filter(Boolean).join(" ");
    const motivParts = [d.stelle, d.groesse].filter(Boolean).join(" · ");
    setRecap({
      name: name || "—",
      addr: `${d.strasse || ""}${d.zusatz ? ", " + d.zusatz : ""}\n${d.plz || ""} ${d.ort || ""}, ${d.land || ""}`,
      email: d.email || "",
      motiv: [motivParts, d.briefing].filter(Boolean).join(" — "),
    });
    go(3);
  };

  const submit = async () => {
    setSending(true);
    try {
      await fetch("/api/raten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      /* Anfrage wird trotzdem als eingegangen angezeigt; Studio prüft */
    }
    setSending(false);
    go(4);
  };

  const reset = () => {
    formRef.current?.reset();
    setAgb(false);
    setAmount(450);
    setTerm(6);
    setErrors({});
    setRecap(null);
    go(0);
  };

  const fieldCls = (name: string) =>
    `w-full rounded-xl border bg-white px-3.5 py-3 text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-gold focus:ring-2 focus:ring-gold/25 ${
      errors[name] ? "border-red-400" : "border-cream-3"
    }`;

  return (
    <div className="mx-auto max-w-2xl">
      {/* Topbar */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 -rotate-3 place-items-center rounded-xl bg-oxblood font-display text-base font-bold italic text-cream">CC</span>
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-oxblood">Clitze Clein</p>
            <p className="text-[0.62rem] uppercase tracking-[0.18em] text-ink/45">Tattoo Atelier · Münster</p>
          </div>
        </div>
        <span className="rounded-full border border-cream-3 bg-white px-3.5 py-1.5 text-xs text-ink/60">
          Wunschbetrag · <b className="text-oxblood">{fmtInt(amount)}</b>
        </span>
      </div>

      {/* Progress */}
      <div className="mb-7 flex gap-1.5">
        {[1, 2, 3, 4].map((seg) => (
          <span key={seg} className="h-1 flex-1 overflow-hidden rounded-full bg-cream-3">
            <span
              className="block h-full bg-gold transition-transform duration-500"
              style={{ transformOrigin: "left", transform: `scaleX(${step >= seg ? 1 : step === seg - 1 ? 0.5 : 0})` }}
            />
          </span>
        ))}
      </div>

      {/* STEP 0 — INTRO */}
      {step === 0 && (
        <section className="animate-[fadeUp_.5s_ease]">
          <p className="eyebrow flex items-center gap-2.5 before:h-px before:w-6 before:bg-gold">Powered by PayPal Ratenkauf</p>
          <h1 className="t-display mt-4">
            Dein Tattoo.<br />Jetzt stechen,<br /><span className="italic text-gold">in Raten zahlen.</span>
          </h1>
          <p className="lead mt-5 text-ink/75">
            Tattoos sind schweine teuer – das müssen wir nicht schönreden. Wenn das Budget fürs
            Coverup oder die Verewigung deines Vierbeiners gerade nicht reicht: Wunschbetrag wählen,
            Daten hinterlegen, über <strong className="text-oxblood">PayPal in monatlichen Raten</strong> zahlen.
          </p>

          <div className="card mt-7 p-7">
            <ul className="space-y-4">
              {[
                ["1", <><b className="text-oxblood">Wunschbetrag wählen</b> — du legst fest, wie viel finanziert wird (99 € – 5.000 €).</>],
                ["2", <><b className="text-oxblood">Daten hinterlegen</b> — Kontakt- &amp; Rechnungsdaten plus optional dein Motiv-Briefing.</>],
                ["3", <><b className="text-oxblood">Mit PayPal abschließen</b> — Laufzeit &amp; Raten wählst du im PayPal-Fenster.</>],
              ].map(([n, txt], i) => (
                <li key={i} className="flex items-start gap-3.5 text-[0.95rem] text-ink/75">
                  <span className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-lg bg-oxblood font-display text-xs text-cream">{n}</span>
                  <span>{txt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#a8331f]/25 bg-[#a8331f]/[0.06] p-4 text-sm text-[#9a3520]">
            <span aria-hidden>⚠️</span>
            <p><b>Ehrlich bleiben:</b> Ratenkauf ist ein Kredit. Buch nur, was du dir auch in Raten wirklich leisten kannst – lass dich nicht in die Schuldenfalle ziehen.</p>
          </div>

          <button onClick={() => go(1)} className="btn btn-primary mt-7 w-full sm:w-auto">Wunschbetrag wählen →</button>
        </section>
      )}

      {/* STEP 1 — AMOUNT */}
      {step === 1 && (
        <section className="animate-[fadeUp_.5s_ease]">
          <p className="eyebrow">Schritt 1 · Betrag</p>
          <h2 className="t-h2 mt-3">Wie viel soll finanziert werden?</h2>
          <p className="lead mt-3 text-ink/70">
            Stell den Betrag deines Tattoos ein. Die Ratenvorschau ist nur ein Beispiel – die echte
            Laufzeit &amp; Konditionen legst du gleich bei PayPal fest.
          </p>

          <div className="card mt-6 p-6 sm:p-7">
            <div className="flex items-baseline justify-center gap-1 pt-1">
              <span className="font-display text-[clamp(3.2rem,13vw,4.75rem)] font-semibold leading-none tabular-nums text-oxblood">
                {amount.toLocaleString("de-DE")}
              </span>
              <span className="font-display text-3xl text-ink/60">€</span>
            </div>
            <p className="mt-1 text-center text-sm text-ink/45">min. 99 € · max. 5.000 €</p>

            <div className="mt-5 flex items-center justify-center gap-3.5">
              <button onClick={() => setAmount((a) => clamp(a - 50))} aria-label="50 € weniger" className="grid h-12 w-12 place-items-center rounded-xl border border-cream-3 bg-cream text-2xl text-oxblood transition-colors hover:border-gold active:scale-95">−</button>
              <input
                type="range" min={MIN} max={MAX} step={1} value={amount}
                onChange={(e) => setAmount(clamp(Number(e.target.value)))}
                aria-label="Wunschbetrag"
                className="raten-range max-w-[340px] flex-1"
                style={{ backgroundImage: `linear-gradient(90deg, var(--color-gold) ${pct}%, var(--color-cream-3) ${pct}%)` }}
              />
              <button onClick={() => setAmount((a) => clamp(a + 50))} aria-label="50 € mehr" className="grid h-12 w-12 place-items-center rounded-xl border border-cream-3 bg-cream text-2xl text-oxblood transition-colors hover:border-gold active:scale-95">+</button>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {chips.map((c) => (
                <button key={c} onClick={() => setAmount(c)} className={`rounded-full border px-3.5 py-1.5 text-sm tabular-nums transition-colors ${amount === c ? "border-oxblood bg-oxblood text-cream" : "border-cream-3 bg-cream text-ink/65 hover:border-gold"}`}>
                  {fmtInt(c)}
                </button>
              ))}
            </div>

            <div className="mt-6 border-t border-dashed border-cream-3 pt-5">
              <div className="mb-3 flex items-center justify-between">
                <strong className="text-sm text-oxblood">Beispielhafte Ratenaufteilung</strong>
                <span className="text-xs text-ink/45">0 % Beispiel*</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {terms.map((m) => (
                  <button key={m} onClick={() => setTerm(m)} className={`rounded-xl border p-3 text-center transition-colors ${term === m ? "border-gold bg-gold/10 shadow-[inset_0_0_0_1px_var(--color-gold)]" : "border-cream-3 bg-cream hover:border-gold"}`}>
                    <span className="block text-xs text-ink/45">{m} Monate</span>
                    <span className="mt-1 block font-display text-lg font-semibold tabular-nums text-oxblood">{fmt(amount / m)}</span>
                    <span className="block text-[0.65rem] text-ink/45">pro Monat</span>
                  </button>
                ))}
              </div>
              <p className="mt-3 text-[0.72rem] leading-snug text-ink/45">
                * Nur zur Orientierung, zinsfrei gerechnet. PayPal prüft Bonität und nennt dir im Checkout die verbindlichen Laufzeiten, Zinsen und Raten. Verfügbar ab 99 € Bestellwert.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row">
            <button onClick={() => go(0)} className="btn btn-ghost">Zurück</button>
            <button onClick={() => go(2)} className="btn btn-primary flex-1">Weiter zu den Daten →</button>
          </div>
        </section>
      )}

      {/* STEP 2 — DATA */}
      {step === 2 && (
        <section className="animate-[fadeUp_.5s_ease]">
          <p className="eyebrow">Schritt 2 · Deine Daten</p>
          <h2 className="t-h2 mt-3">Bestell- &amp; Kontaktdaten</h2>
          <p className="lead mt-3 text-ink/70">
            PayPal braucht für den Ratenkauf eine vollständige Rechnungsadresse. Pflichtfelder sind mit <span className="text-[#a8331f]">*</span> markiert.
          </p>

          <form ref={formRef} noValidate className="mt-6">
            {/* Honeypot */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px]" aria-hidden />

            <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-ink/45 after:h-px after:flex-1 after:bg-cream-3">Kontakt</p>
            <div className="grid gap-3.5 sm:grid-cols-2">
              <Field label="Anrede">
                <select name="anrede" className={fieldCls("anrede")}>
                  <option value="">—</option><option>Frau</option><option>Herr</option><option>Divers</option>
                </select>
              </Field>
              <Field label="Firma (optional)"><input name="firma" placeholder="z. B. Musterfirma GmbH" className={fieldCls("firma")} /></Field>
              <Field label="Vorname" req><input name="vorname" data-req placeholder="Max" className={fieldCls("vorname")} /></Field>
              <Field label="Nachname" req><input name="nachname" data-req placeholder="Mustermann" className={fieldCls("nachname")} /></Field>
              <Field label="E-Mail" req><input name="email" type="email" data-req placeholder="max@beispiel.de" className={fieldCls("email")} /></Field>
              <Field label="Telefon"><input name="tel" type="tel" placeholder="+49 …" className={fieldCls("tel")} /></Field>
            </div>

            <p className="mb-3 mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-ink/45 after:h-px after:flex-1 after:bg-cream-3">Rechnungsadresse</p>
            <div className="grid gap-3.5 sm:grid-cols-2">
              <Field label="Straße & Nr." req full><input name="strasse" data-req placeholder="Musterstraße 12" className={fieldCls("strasse")} /></Field>
              <Field label="PLZ" req><input name="plz" data-req inputMode="numeric" placeholder="48143" className={fieldCls("plz")} /></Field>
              <Field label="Ort" req><input name="ort" data-req placeholder="Münster" className={fieldCls("ort")} /></Field>
              <Field label="Land" req>
                <select name="land" data-req defaultValue="Deutschland" className={fieldCls("land")}>
                  <option>Deutschland</option><option>Österreich</option><option>Schweiz</option>
                </select>
              </Field>
              <Field label="Adresszusatz"><input name="zusatz" placeholder="Hinterhaus, 2. OG …" className={fieldCls("zusatz")} /></Field>
            </div>

            <p className="mb-3 mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-ink/45 after:h-px after:flex-1 after:bg-cream-3">
              Dein Motiv <span className="normal-case tracking-normal text-ink/35">— optional, hilft Chiara</span>
            </p>
            <div className="grid gap-3.5 sm:grid-cols-2">
              <Field label="Körperstelle"><input name="stelle" placeholder="z. B. Unterarm innen" className={fieldCls("stelle")} /></Field>
              <Field label="Ungefähre Größe"><input name="groesse" placeholder="z. B. 15 × 10 cm" className={fieldCls("groesse")} /></Field>
              <Field label="Idee / Stil / Wunschtermin" full>
                <textarea name="briefing" rows={3} placeholder="Beschreib kurz dein Motiv, Stil (Fineline, Old School …) und wann du gern Termin hättest." className={`${fieldCls("briefing")} resize-y`} />
              </Field>
            </div>

            <label className={`mt-5 flex cursor-pointer items-start gap-3 text-sm ${errors.agb ? "text-[#a8331f]" : "text-ink/75"}`}>
              <input type="checkbox" checked={agb} onChange={(e) => setAgb(e.target.checked)} className="mt-0.5 h-4 w-4 accent-[var(--color-oxblood)]" />
              <span>Ich akzeptiere AGB &amp; Datenschutz und weiß, dass der Ratenkauf ein über PayPal vergebener Kredit ist. <span className="text-[#a8331f]">*</span></span>
            </label>
          </form>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row">
            <button onClick={() => go(1)} className="btn btn-ghost">Zurück</button>
            <button onClick={toCheckout} className="btn btn-primary flex-1">Zur Kasse →</button>
          </div>
        </section>
      )}

      {/* STEP 3 — CHECKOUT */}
      {step === 3 && (
        <section className="animate-[fadeUp_.5s_ease]">
          <p className="eyebrow">Schritt 3 · Kasse</p>
          <h2 className="t-h2 mt-3">Übersicht &amp; Zahlung</h2>
          <p className="lead mt-3 text-ink/70">Letzter Check, dann geht&rsquo;s zu PayPal.</p>

          <div className="raten-receipt card mt-6 p-6 sm:p-7">
            <div className="flex items-baseline justify-between py-2 text-sm text-ink/70">
              <span>Dein Tattoo auf Raten — Wunschbetrag</span><span className="tabular-nums text-oxblood">{fmt(amount)}</span>
            </div>
            <div className="flex items-baseline justify-between py-2 text-sm text-ink/70">
              <span>Gewählte Beispiel-Laufzeit</span><span className="tabular-nums text-oxblood">{term} Monate</span>
            </div>
            <div className="my-1.5 border-t border-dashed border-cream-3" />
            <div className="mt-1.5 flex items-baseline justify-between border-t-2 border-oxblood pt-3">
              <span className="font-display text-lg font-semibold text-oxblood">Gesamtbetrag</span>
              <span className="font-display text-2xl font-semibold tabular-nums text-oxblood">{fmt(amount)}</span>
            </div>
            <p className="mt-1 text-right text-xs text-ink/45">≈ {fmt(rate)} / Monat im Beispiel</p>
            {recap && (
              <>
                <div className="mt-4 border-t border-dashed border-cream-3" />
                <div className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink/75">
                  <b className="text-oxblood">{recap.name}</b>{"\n"}{recap.addr}{"\n"}{recap.email}
                  {recap.motiv && <><br /><br /><b className="text-oxblood">Motiv:</b> {recap.motiv}</>}
                </div>
              </>
            )}
          </div>

          <div className="card mt-4 p-6">
            <h3 className="font-display text-base font-semibold text-oxblood">Bezahlen</h3>
            <p className="mt-1 text-sm text-ink/70">
              Im Live-Betrieb öffnet sich hier das PayPal-Fenster. <b>„Später bezahlen / Ratenzahlung"</b> blendet PayPal automatisch ein, sofern dein Konto die Voraussetzungen erfüllt und der Betrag zwischen 99 € und 5.000 € liegt.
            </p>
            <button onClick={submit} disabled={sending} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#FFC439] py-3.5 text-sm font-semibold text-[#0a0a0a] transition-[filter] hover:brightness-105 active:scale-[0.99] disabled:opacity-60">
              <span><span className="text-[#003087]">Pay</span><span className="text-[#009cde]">Pal</span></span> · {sending ? "Wird gesendet …" : "Direkt bezahlen"}
            </button>
            <button onClick={submit} disabled={sending} className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-full bg-black py-3.5 text-sm font-semibold text-white transition-[filter] hover:brightness-125 active:scale-[0.99] disabled:opacity-60">
              Später bezahlen — in Raten mit <span className="font-bold">PayPal</span>
            </button>
            <p className="mt-3.5 flex items-start gap-2 text-[0.72rem] leading-snug text-ink/45">
              <span aria-hidden>ⓘ</span>
              Ob die Ratenoption erscheint, entscheidet allein PayPal (Bonität, Kontostatus, Betrag). Das Studio erhält den vollen Betrag sofort, PayPal trägt das Ausfallrisiko.
            </p>
          </div>

          <button onClick={() => go(2)} className="btn btn-ghost mt-6">Zurück</button>
        </section>
      )}

      {/* STEP 4 — SUCCESS */}
      {step === 4 && (
        <section className="animate-[fadeUp_.5s_ease] py-8 text-center">
          <div className="mx-auto grid h-[74px] w-[74px] place-items-center rounded-full bg-gold text-3xl text-oxblood-deep">✓</div>
          <h2 className="t-h2 mt-6">Buchung eingegangen</h2>
          <p className="mx-auto mt-3 max-w-md text-ink/75">
            Stark! Deine Anfrage über <b className="text-oxblood">{fmtInt(amount)}</b> ist bei Chiara gelandet. Sobald die PayPal-Finanzierung bestätigt ist, meldet sich das <b>Clitze Clein</b> bei dir zur Terminabstimmung.
          </p>
          <p className="mt-3 text-sm text-ink/45">Bestätigung &amp; Briefing gehen an deine E-Mail.</p>
          <button onClick={reset} className="btn btn-primary mx-auto mt-7">Von vorn beginnen</button>
        </section>
      )}

      <p className="mt-10 text-center text-xs leading-relaxed text-ink/45">
        „PayPal" und „Später bezahlen" sind Marken der PayPal Inc. Die Ratenfinanzierung wird ausschließlich von PayPal vergeben und geprüft.
      </p>
    </div>
  );
}

function Field({ label, req, full, children }: { label: string; req?: boolean; full?: boolean; children: React.ReactNode }) {
  return (
    <div className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <label className="text-[0.78rem] font-medium text-ink/65">
        {label} {req && <span className="text-[#a8331f]">*</span>}
      </label>
      {children}
    </div>
  );
}
