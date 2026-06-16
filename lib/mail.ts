import { studio } from "./studio";

type Mail = { subject: string; text: string; replyTo?: string };

/**
 * Schickt eine Anfrage per E-Mail ans Studio.
 * Aktiv, sobald RESEND_API_KEY (und optional CONTACT_TO / CONTACT_FROM) als
 * Umgebungsvariable gesetzt ist – sonst wird die Anfrage nur serverseitig geloggt,
 * damit nie Daten verloren gehen.
 */
export async function sendStudioMail({ subject, text, replyTo }: Mail): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || studio.email;
  const from = process.env.CONTACT_FROM || "Clitze Clein <onboarding@resend.dev>";

  if (!key) {
    console.info("[mail] (kein RESEND_API_KEY) – Anfrage geloggt:", { to, subject, replyTo });
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], subject, text, ...(replyTo ? { reply_to: replyTo } : {}) }),
    });
    if (!res.ok) {
      console.error("[mail] Resend-Fehler", res.status, await res.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (e) {
    console.error("[mail] Versand fehlgeschlagen", e);
    return false;
  }
}
