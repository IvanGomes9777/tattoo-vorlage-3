# Schnellstart — PayPal lokal testen

Ziel: den PayPal-Button bei dir lokal sehen und einmal mit Spielgeld
durchklicken. Mehr nicht. Nur diese 4 Schritte.

---

## 1. Dateien ins Projekt legen

Kopier diese Dateien an genau die Stelle, die der Pfad sagt:

```
lib/paypal.ts
app/api/orders/route.ts
app/api/orders/[orderID]/capture/route.ts
components/PayPalCheckout.tsx
app/checkout-test/page.tsx      <- die Test-Seite
```

## 2. Pakete installieren

```bash
npm install @paypal/react-paypal-js server-only
```

## 3. .env.local befuellen

Die Datei `.env.local` in den Projekt-Root (neben `package.json`).
Dann zwei Werte eintragen — beide aus:
developer.paypal.com -> **Apps & Credentials** -> oben auf **Sandbox** ->
App auswaehlen -> **Client ID** und **Secret** kopieren.

```
PAYPAL_ENV=sandbox
PAYPAL_CLIENT_ID=deine_sandbox_client_id
PAYPAL_CLIENT_SECRET=dein_sandbox_secret
NEXT_PUBLIC_PAYPAL_CLIENT_ID=deine_sandbox_client_id
```

(Client ID kommt zweimal rein — einmal Server, einmal `NEXT_PUBLIC_`.
Das Secret nur einmal und niemals woanders hin.)

## 4. Starten & gucken

```bash
npm run dev
```

Dann im Browser:

```
http://localhost:3000/checkout-test
```

Du siehst den PayPal-Button bei 450 €. Drauf klicken -> im Popup mit dem
**Sandbox-Kaeufer** einloggen (developer.paypal.com -> Testing Tools ->
Sandbox Accounts, der Personal-Account mit Spielgeld). Wenn oben gruen
„Laeuft!" erscheint, funktioniert alles.

---

### Wenn was klemmt

- **Button kommt gar nicht** -> `.env.local` nicht im Root, oder `NEXT_PUBLIC_PAYPAL_CLIENT_ID` leer. Nach Env-Aenderung `npm run dev` neu starten.
- **401 / Auth-Fehler** -> Client ID und Secret vertauscht, oder Live-Werte mit `PAYPAL_ENV=sandbox` gemischt.
- **„Spaeter bezahlen"-Button fehlt** -> in der Sandbox normal, nicht dein Fehler. Sieht man verlaesslich erst live.

Wenn der gruene Haken da ist: sag Bescheid, dann machen wir den naechsten
kleinen Schritt.
