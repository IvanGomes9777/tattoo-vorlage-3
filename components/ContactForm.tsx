"use client";

import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-cream-3 bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-gold focus:ring-2 focus:ring-gold/30 lg:py-2.5";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          website: data.get("website"), // honeypot
          consent: data.get("consent") === "on",
        }),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("success");
        setFeedback(json.message ?? "Danke für deine Anfrage!");
        form.reset();
      } else {
        setStatus("error");
        setFeedback(json.error ?? "Etwas ist schiefgelaufen. Bitte versuch es erneut.");
      }
    } catch {
      setStatus("error");
      setFeedback("Verbindungsfehler. Bitte versuch es später erneut.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-3" noValidate>
      {/* Honeypot – visually hidden, off-screen, ignored by humans */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website (bitte leer lassen)</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:gap-3">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink/80 lg:mb-1">Name *</label>
          <input id="name" name="name" type="text" required minLength={2} maxLength={100} className={fieldClass} placeholder="Dein Name" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink/80 lg:mb-1">Telefon</label>
          <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="Optional" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink/80 lg:mb-1">E-Mail *</label>
        <input id="email" name="email" type="email" required className={fieldClass} placeholder="du@beispiel.de" />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink/80 lg:mb-1">Deine Idee *</label>
        <textarea id="message" name="message" required minLength={5} maxLength={4000} rows={4} className={`${fieldClass} resize-none lg:h-[5.5rem]`} placeholder="Motiv, Körperstelle, ungefähre Größe – erzähl mir einfach, was du dir vorstellst." />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink/70">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-oxblood)]" />
        <span>
          Ich habe die{" "}
          <Link href="/datenschutz" className="font-medium text-oxblood underline">Datenschutzerklärung</Link>{" "}
          gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden. *
        </span>
      </label>

      <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full disabled:opacity-60">
        {status === "loading" ? "Wird gesendet …" : "Anfrage senden"}
      </button>

      {feedback && (
        <p
          role="status"
          className={`rounded-xl px-4 py-3 text-sm ${
            status === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-700"
          }`}
        >
          {feedback}
        </p>
      )}
      <p className="text-xs text-ink/45">Mit * markierte Felder sind Pflichtfelder.</p>
    </form>
  );
}
