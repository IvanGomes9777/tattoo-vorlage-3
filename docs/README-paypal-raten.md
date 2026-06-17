# PayPal Ratenzahlung — Integration (Next.js App Router)

Sauberer, manipulationssicherer PayPal-Checkout inkl. „Später Bezahlen" /
Ratenzahlung für den Tattoo-auf-Raten-Flow. Du baust den Checkout — die
Ratenoption liefert PayPal selbst.

---

## 0. Mentales Modell (wichtig, bevor du was versprichst)

- Du integrierst den **PayPal Checkout**. Du baust **keine** Ratenzahlung,
  rechnest keine Raten, speicherst keine Kreditdaten.
- **Später Bezahlen** (30 Tage später + Ratenzahlung in 3/6/12/24 Raten) wird
  von PayPal **automatisch** eingeblendet, sobald `enable-funding=paylater`
  gesetzt ist — vorausgesetzt, das Händlerkonto und der Betrag erfüllen die
  Bedingungen.
- Ob die Ratenoption beim Kunden erscheint, entscheidet **allein PayPal**
  (Bonität, Kontostatus, Betrag 99–5.000 €). Darauf hast du null Einfluss.

---

## 1. Voraussetzungen beim KUNDEN (Studio) — nicht bei dir

Das musst du dem Studio klar sagen, sonst stehst du am Ende als Schuldiger da,
obwohl dein Code stimmt:

- **Verifiziertes PayPal-Geschäftskonto**, seit **mind. 180 Tagen** aktiv,
  mit hinterlegter **USt-IdNr.**
- PayPal muss **„Später Bezahlen" für dieses Konto freigeschaltet** haben.
- Betragskorridor pro Kauf: **99 € – 5.000 €**.

Kann das Studio das nicht erfüllen, läuft normaler PayPal-/Kartencheckout —
aber die Ratenoption taucht schlicht nicht auf.

> Hinweis: Ab **20.11.2026** gelten EU-weit strengere Verbraucherkredit-Regeln,
> die auch Buy-now-pay-later betreffen (mehr Bonitätsprüfung/Datenerfassung).
> Das betrifft die PayPal-Seite, nicht deinen Code — aber halt es im Hinterkopf.

---

## 2. PayPal Developer Setup (du)

1. Auf <https://developer.paypal.com> mit dem **Geschäftskonto des Studios**
   einloggen (oder dich als Entwickler einladen lassen).
2. **Apps & Credentials** → neue App anlegen.
   - Du bekommst **Client ID** + **Secret** getrennt für **Sandbox** und **Live**.
3. **Sandbox-Testkonten** (Business + Personal) werden automatisch erzeugt —
   damit testest du Käufe mit Spielgeld.
4. Für Pay Later im Live-Betrieb muss die Funktion im Konto aktiv sein
   (siehe Punkt 1).

---

## 3. Dateien einbauen

Kopier die Dateien an diese Stellen in dein Next.js-Projekt:

```
lib/paypal.ts                                  → Server-Helper (Token, Order, Capture)
app/api/orders/route.ts                        → POST: Order erstellen
app/api/orders/[orderID]/capture/route.ts      → POST: Order capturen
components/PayPalCheckout.tsx                   → Client: Buttons + Ratenbanner
.env.example                                    → Vorlage für deine Env-Variablen
```

Dann:

```bash
npm install @paypal/react-paypal-js server-only
```

`.env.local` aus `.env.example` befüllen (Sandbox-Werte zum Start).
In **Vercel** die vier Variablen unter *Project → Settings → Environment
Variables* anlegen. `PAYPAL_CLIENT_SECRET` **niemals** ins Repo.

---

## 4. Der sichere Flow

```
[Browser]                    [Dein Next.js Server]            [PayPal]
   │
   │ Klick auf PayPal-Button
   │ createOrder()
   ├──── POST /api/orders ───────►│
   │                              │ validateAmount(99–5000)
   │                              ├──── Orders v2: create ──────►│
   │                              │◄──── orderID ────────────────┤
   │◄──── { id } ─────────────────┤
   │
   │ Kunde bezahlt im PayPal-Popup
   │ (hier wählt er ggf. Ratenzahlung)
   │ onApprove(orderID)
   ├──── POST /api/orders/:id/capture ─►│
   │                              ├──── Orders v2: capture ─────►│
   │                              │◄──── COMPLETED / PENDING ────┤
   │                              │ → E-Mail/DB (Andock-Punkt)
   │◄──── { status } ─────────────┤
```

**Warum serverseitig?** Würdest du `actions.order.create({ amount })` direkt im
Client machen (so steht's in 90 % der Tutorials), kann jeder per DevTools den
Betrag auf 1 € setzen, bevor er an PayPal geht. Der Server ist die einzige
Stelle, die den Betrag verbindlich festlegt.

---

## 5. So bindest du die Komponente ein

In deiner Checkout-Seite, sobald Betrag + Kundendaten feststehen:

```tsx
"use client";
import PayPalCheckout from "@/components/PayPalCheckout";

// amount kommt aus deinem Wunschbetrag-State (bereits auf 99–5000 begrenzt)
<PayPalCheckout
  amount={amount}
  onSuccess={({ orderID }) => {
    // Zahlung durch → Danke-Step zeigen, Bestelldaten sind serverseitig schon raus
    router.push(`/danke?o=${orderID}`);
  }}
  onPending={(orderID) => {
    // Pay Later noch in Prüfung → "Wir bestätigen per Mail" anzeigen
  }}
  onErrorMsg={(msg) => setError(msg)}
/>
```

Das `<PayPalMessages />`-Banner in der Komponente zeigt das **echte**
Ratenangebot von PayPal zum jeweiligen Betrag — damit kannst du deine
selbstgebaute Beispiel-Ratenvorschau aus der Demo rauswerfen (ehrlicher und
rechtlich sauberer, weil PayPal die echten Konditionen nennt).

---

## 6. Testen (Sandbox)

1. `PAYPAL_ENV=sandbox`, Sandbox-Credentials in `.env.local`.
2. `npm run dev`, Checkout durchklicken.
3. Im PayPal-Popup mit dem **Sandbox-Personal-Account** einloggen
   (Login findest du unter developer.paypal.com → Testing Tools → Sandbox Accounts).
4. Prüfen: Erscheint der „Später Bezahlen"-Button? (In der Sandbox je nach
   Konto-Land/Setup nicht immer — Live ist hier maßgeblich.)
5. Kauf abschließen → in deinem Sandbox-Business-Account sollte die Transaktion
   auftauchen.

**Häufige Stolpersteine:**
- Ratenbutton fehlt → Betrag < 99 €, `enable-funding=paylater` nicht gesetzt,
  oder Konto/Region unterstützt es (in Sandbox) nicht.
- `clientId` vs. `client-id` → ab Library-v8 camelCase, davor kebab-case.
- 401 beim Token → Secret/ID vertauscht oder Live-Creds mit Sandbox-URL gemischt.

---

## 7. Webhooks (für den sauberen Endzustand — empfohlen)

Bei Pay Later kann `capture` zunächst **PENDING** liefern (asynchrone Prüfung).
Verlass dich für die **finale** Bestätigung nicht nur auf die Antwort im
Browser, sondern auf einen Webhook:

1. developer.paypal.com → App → **Webhooks** → URL anlegen:
   `https://deine-domain.de/api/paypal/webhook`
2. Events abonnieren: `PAYMENT.CAPTURE.COMPLETED`, `PAYMENT.CAPTURE.DENIED`.
3. In der Webhook-Route die **Signatur verifizieren** (PayPal
   `verify-webhook-signature`), dann Bestellung final auf „bezahlt" setzen.
4. **Idempotent** bleiben: Capture-Route UND Webhook können dieselbe Order
   melden — verarbeite jede orderID nur einmal (z. B. Flag in der DB).

---

## 8. DSGVO / Recht (kurz, du kennst das)

- Du erhebst Kontakt-, Rechnungs- und Motiv-Daten → Datenschutzerklärung,
  Einwilligung beim Absenden, AVV mit deinem Hosting (Vercel).
- Ratenkauf = Kredit → der Schuldenfallen-Disclaimer bleibt drin (steht in der Demo).
- Impressum/AGB des Studios verlinken.

---

## 9. Go-Live-Checkliste

- [ ] Studio-Geschäftskonto erfüllt Pay-Later-Voraussetzungen (Punkt 1)
- [ ] Live-Credentials in Vercel, `PAYPAL_ENV=live`
- [ ] `PAYPAL_CLIENT_SECRET` nicht im Repo (nur Vercel Env)
- [ ] Betrag wird ausschließlich serverseitig gesetzt/validiert
- [ ] Webhook live + Signaturprüfung aktiv
- [ ] Capture- und Webhook-Verarbeitung idempotent
- [ ] Bestätigungs-E-Mail ans Studio + an den Kunden
- [ ] Datenschutz/AGB/Impressum verlinkt, Disclaimer sichtbar
- [ ] Einmal echten Kleinbetrag live durchtesten und im Studio-Konto prüfen

---

## 10. Noch offen (sag mir, wie du's willst)

Der Andock-Punkt in `capture/route.ts` ist bewusst leer. Was soll passieren,
wenn die Zahlung durch ist?

- **Nur E-Mail ans Studio** → eine Funktion `sendStudioEmail()`, fertig.
- **E-Mail + Datenbank** → z. B. Vercel Postgres / Supabase, dann Bestellliste.
- **PDF-Zusammenfassung** → Briefing als PDF an Studio + Kunde.

Sag Bescheid, dann bau ich den Teil dazu.
