import { NextResponse } from "next/server";
import { createPayPalOrder, validateAmount } from "@/lib/paypal";

export const runtime = "nodejs"; // wegen Buffer in lib/paypal.ts

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Kern der Sicherheit: Betrag kommt vom Client, wird hier aber geprüft.
    const amount = validateAmount(body?.amount);

    const order = await createPayPalOrder(amount);
    return NextResponse.json({ id: order.id });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unbekannter Fehler";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
