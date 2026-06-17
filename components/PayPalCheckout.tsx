"use client";

import {
  PayPalScriptProvider,
  PayPalButtons,
  PayPalMessages,
} from "@paypal/react-paypal-js";

type Props = {
  /** Bereits in der UI begrenzter Betrag (99–5000). Wird serverseitig erneut geprüft. */
  amount: number;
  onSuccess?: (details: { orderID: string; amount?: unknown }) => void;
  onPending?: (orderID: string) => void;
  onErrorMsg?: (msg: string) => void;
};

export default function PayPalCheckout({
  amount,
  onSuccess,
  onPending,
  onErrorMsg,
}: Props) {
  return (
    <PayPalScriptProvider
      options={{
        // Hinweis: ab @paypal/react-paypal-js v8 heißen die Keys camelCase.
        // Bei älteren Versionen stattdessen "client-id", "enable-funding" etc.
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
        currency: "EUR",
        intent: "capture",
        components: "buttons,messages",
        enableFunding: "paylater", // schaltet "Später Bezahlen" + Ratenzahlung frei
        // disableFunding: "card,sepa", // optional: andere Methoden ausblenden
      }}
    >
      {/* Echtes PayPal-Ratenbanner – zeigt die tatsächlichen Konditionen,
          ersetzt jede selbstgebaute (und rechtlich heikle) Ratenvorschau. */}
      <PayPalMessages
        amount={amount}
        style={{ layout: "text", logo: { type: "inline" } }}
      />

      <PayPalButtons
        style={{ layout: "vertical", shape: "pill", label: "pay" }}
        // 1) Order serverseitig erstellen lassen
        createOrder={async () => {
          const res = await fetch("/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount }),
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error ?? "Order fehlgeschlagen");
          return data.id;
        }}
        // 2) Nach Freigabe serverseitig capturen
        onApprove={async (data) => {
          const res = await fetch(`/api/orders/${data.orderID}/capture`, {
            method: "POST",
          });
          const details = await res.json();

          if (res.status === 202) {
            onPending?.(data.orderID); // z. B. Pay Later noch in Prüfung
            return;
          }
          if (!res.ok) {
            onErrorMsg?.(details.error ?? "Zahlung fehlgeschlagen");
            return;
          }
          onSuccess?.({ orderID: data.orderID, amount: details.amount });
        }}
        onError={(err) => {
          onErrorMsg?.(err instanceof Error ? err.message : "PayPal-Fehler");
        }}
      />
    </PayPalScriptProvider>
  );
}
