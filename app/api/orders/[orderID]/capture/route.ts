import { NextResponse } from "next/server";
import { capturePayPalOrder } from "@/lib/paypal";

export const runtime = "nodejs";

// Next.js 15: params ist ein Promise und muss awaited werden.
// Next.js 14: ersetze die Signatur durch { params }: { params: { orderID: string } }
//             und lass das `await` weg.
export async function POST(
  _req: Request,
  { params }: { params: Promise<{ orderID: string }> }
) {
  try {
    const { orderID } = await params;
    const result = await capturePayPalOrder(orderID);

    const capture = result?.purchase_units?.[0]?.payments?.captures?.[0];
    const status: string | undefined = capture?.status;

    // Bei Pay Later kann der Status zunächst PENDING sein (asynchrone Prüfung).
    // Verlasse dich für die FINALE Bestätigung auf den Webhook, nicht nur hier.
    if (status !== "COMPLETED") {
      return NextResponse.json(
        { status: status ?? "UNKNOWN", orderID },
        { status: 202 }
      );
    }

    // ───────────────────────────────────────────────────────────
    // ANDOCK-PUNKT: Zahlung ist durch.
    // Hier Kundendaten + Bestellung weiterverarbeiten, z. B.:
    //   await sendStudioEmail({ orderID, amount: capture.amount, kunde })
    //   await db.orders.create({ ... })
    // Tipp: Idempotent halten (gleiche orderID nicht doppelt verarbeiten),
    // weil der Webhook dieselbe Order ebenfalls melden kann.
    // ───────────────────────────────────────────────────────────

    return NextResponse.json({
      status,
      orderID,
      amount: capture?.amount,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unbekannter Fehler";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
