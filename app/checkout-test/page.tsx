"use client";

import { useState } from "react";
import PayPalCheckout from "@/components/PayPalCheckout";

type Status =
  | { kind: "idle" }
  | { kind: "ok" | "pending" | "error"; msg: string };

export default function CheckoutTestPage() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const amount = 450; // fester Testbetrag

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 px-6 py-12">
      <div>
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          PayPal Sandbox-Test
        </p>
        <h1 className="mt-1 text-3xl font-semibold">
          Testbetrag: {amount.toLocaleString("de-DE")} &euro;
        </h1>
        <p className="mt-2 text-neutral-600">
          Im PayPal-Popup mit dem Sandbox-Personal-Account einloggen. Es wird
          kein echtes Geld bewegt.
        </p>
      </div>

      <PayPalCheckout
        amount={amount}
        onSuccess={({ orderID }) =>
          setStatus({ kind: "ok", msg: `Bezahlt \u2713  (Order ${orderID})` })
        }
        onPending={(orderID) =>
          setStatus({
            kind: "pending",
            msg: `In Pr\u00fcfung \u2013 Pay Later (Order ${orderID})`,
          })
        }
        onErrorMsg={(msg) => setStatus({ kind: "error", msg })}
      />

      {status.kind !== "idle" && (
        <div
          className={
            "rounded-lg border p-4 text-sm " +
            (status.kind === "ok"
              ? "border-green-300 bg-green-50 text-green-800"
              : status.kind === "pending"
                ? "border-amber-300 bg-amber-50 text-amber-800"
                : "border-red-300 bg-red-50 text-red-800")
          }
        >
          {status.msg}
        </div>
      )}
    </main>
  );
}
