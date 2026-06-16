import { NextResponse } from "next/server";
import { simpleRateLimit } from "@/lib/rateLimit";
import { sanitizeText, validateEmail } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (!simpleRateLimit(`raten:${ip}`, 5, 10 * 60_000)) {
    return NextResponse.json({ ok: false, error: "Zu viele Anfragen. Bitte später erneut." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const vorname = sanitizeText(String(body.vorname ?? ""));
  const nachname = sanitizeText(String(body.nachname ?? ""));
  const email = String(body.email ?? "").toLowerCase().trim();
  const ort = sanitizeText(String(body.ort ?? ""));
  const amount = Number(body.amount);

  if (!vorname || !nachname) {
    return NextResponse.json({ ok: false, error: "Bitte gib deinen Namen an." }, { status: 400 });
  }
  if (!validateEmail(email)) {
    return NextResponse.json({ ok: false, error: "Bitte gib eine gültige E-Mail an." }, { status: 400 });
  }
  if (!Number.isFinite(amount) || amount < 99 || amount > 5000) {
    return NextResponse.json({ ok: false, error: "Betrag muss zwischen 99 € und 5.000 € liegen." }, { status: 400 });
  }

  // TODO: Mailversand an das Studio anbinden (Resend/Nodemailer via Env).
  console.info("[raten] neue Anfrage", { name: `${vorname} ${nachname}`, email, ort, amount, term: body.term, ip });

  return NextResponse.json({ ok: true, message: "Anfrage erhalten." });
}
