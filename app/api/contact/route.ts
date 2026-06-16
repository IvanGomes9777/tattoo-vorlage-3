import { NextResponse } from "next/server";
import { simpleRateLimit } from "@/lib/rateLimit";
import { sanitizeText, validateEmail, validatePhone } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  // 1. Rate limiting – max 5 submissions per IP per 10 minutes.
  if (!simpleRateLimit(ip, 5, 10 * 60_000)) {
    return NextResponse.json(
      { ok: false, error: "Zu viele Anfragen. Bitte versuch es später erneut." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  // 2. Honeypot – real users never fill this hidden field.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true }); // silently accept, drop the bot
  }

  // 3. Sanitize + validate.
  const name = sanitizeText(String(body.name ?? ""));
  const email = String(body.email ?? "").toLowerCase().trim();
  const phone = sanitizeText(String(body.phone ?? ""));
  const message = sanitizeText(String(body.message ?? ""));
  const consent = body.consent === true;

  if (!name || name.length < 2 || name.length > 100) {
    return NextResponse.json({ ok: false, error: "Bitte gib deinen Namen an." }, { status: 400 });
  }
  if (!validateEmail(email)) {
    return NextResponse.json({ ok: false, error: "Bitte gib eine gültige E-Mail an." }, { status: 400 });
  }
  if (!validatePhone(phone)) {
    return NextResponse.json({ ok: false, error: "Die Telefonnummer sieht nicht gültig aus." }, { status: 400 });
  }
  if (!message || message.length < 5 || message.length > 4000) {
    return NextResponse.json({ ok: false, error: "Bitte beschreibe kurz deine Idee." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ ok: false, error: "Bitte stimme der Datenschutzerklärung zu." }, { status: 400 });
  }

  // 4. Deliver the message.
  // TODO: connect a mail provider (e.g. Resend / Nodemailer) via env vars.
  //       Until then the request is validated and logged server-side.
  console.info("[contact] new enquiry", { name, email, phone, ip, length: message.length });

  return NextResponse.json({
    ok: true,
    message: "Danke! Deine Anfrage ist da – ich melde mich so schnell wie möglich.",
  });
}
