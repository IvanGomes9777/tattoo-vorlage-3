import "server-only";

/**
 * Server-only PayPal-Helper (Orders API v2).
 * Wird NIE im Client importiert – das Client-Secret darf den Server nie verlassen.
 */

const BASE =
  process.env.PAYPAL_ENV === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

// PayPal Ratenzahlung wird nur in diesem Bereich angeboten.
const MIN_EUR = 99;
const MAX_EUR = 5000;

async function getAccessToken(): Promise<string> {
  const id = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;
  if (!id || !secret) {
    throw new Error(
      "PayPal-Credentials fehlen (PAYPAL_CLIENT_ID / PAYPAL_CLIENT_SECRET)."
    );
  }

  const auth = Buffer.from(`${id}:${secret}`).toString("base64");
  const res = await fetch(`${BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`PayPal-Authentifizierung fehlgeschlagen: ${res.status}`);
  }
  const data = await res.json();
  return data.access_token as string;
}

/**
 * Validiert den Betrag SERVERSEITIG. Niemals dem Client-Wert blind vertrauen.
 * Gibt den geprüften Betrag (2 Nachkommastellen) zurück oder wirft.
 */
export function validateAmount(input: unknown): number {
  const n = Number(input);
  if (!Number.isFinite(n)) throw new Error("Ungültiger Betrag.");
  const rounded = Math.round(n * 100) / 100;
  if (rounded < MIN_EUR || rounded > MAX_EUR) {
    throw new Error(`Betrag muss zwischen ${MIN_EUR} € und ${MAX_EUR} € liegen.`);
  }
  return rounded;
}

/** Erstellt eine PayPal-Order mit Intent CAPTURE. Betrag in EUR. */
export async function createPayPalOrder(amount: number) {
  const token = await getAccessToken();
  const res = await fetch(`${BASE}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: { currency_code: "EUR", value: amount.toFixed(2) },
          description: "Dein Tattoo auf Raten",
        },
      ],
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Order-Erstellung fehlgeschlagen: ${JSON.stringify(data)}`);
  }
  return data as { id: string; status: string };
}

/** Bucht (captured) eine zuvor genehmigte Order. */
export async function capturePayPalOrder(orderID: string) {
  const token = await getAccessToken();
  const res = await fetch(`${BASE}/v2/checkout/orders/${orderID}/capture`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Capture fehlgeschlagen: ${JSON.stringify(data)}`);
  }
  return data;
}
