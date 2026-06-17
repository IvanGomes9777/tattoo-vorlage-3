# Start hier — PayPal lokal testen

Nur diese 4 Handgriffe. Webhook, E-Mail und Live kommen spaeter, wenn der
erste Button bei dir auftaucht.

---

## 1. Dateien ins Projekt legen

```
lib/paypal.ts
app/api/orders/route.ts
app/api/orders/[orderID]/capture/route.ts
app/checkout-test/page.tsx        <- die Test-Seite
components/PayPalCheckout.tsx
.env.local                        <- in den Projekt-Root (neben package.json)
```

## 2. Pakete installieren

```bash
npm install @paypal/react-paypal-js server-only
```

## 3. .env.local befuellen

In der `.env.local` an zwei Stellen deine **Sandbox**-Werte eintragen.
Holen: developer.paypal.com -> **Apps & Credentials** -> oben auf **Sandbox** ->
App auswaehlen -> **Client ID** + **Secret** kopieren.

`PAYPAL_ENV` bleibt auf `sandbox`.

## 4. Starten & gucken

```bash
npm run dev
```

Dann im Browser:

```
http://localhost:3000/checkout-test
```

Auf den PayPal-Button klicken -> im Popup mit dem **Sandbox-Personal-Account**
einloggen (developer.paypal.com -> Testing Tools -> Sandbox Accounts) -> "bezahlen".

**Kommt "Bezahlt" mit Haken -> laeuft.**

---

### Wenn was klemmt

- **Button kommt gar nicht** -> `.env.local` im Root? Dev-Server nach dem
  Eintragen neu gestartet? `NEXT_PUBLIC_PAYPAL_CLIENT_ID` gesetzt?
- **"Spaeter bezahlen"-Button fehlt** -> in der Sandbox normal. Den siehst du
  zuverlaessig erst live mit dem qualifizierten Konto. Egal fuers Erste.
- **401 / Auth-Fehler** -> Client ID & Secret vertauscht, oder Live-Werte mit
  `PAYPAL_ENV=sandbox` gemischt.
