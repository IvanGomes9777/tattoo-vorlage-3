import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung des Clitze Cleine Tattoo Ateliers in Münster nach DSGVO.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" updated="Juni 2026">
      <p>
        Der Schutz deiner persönlichen Daten ist uns wichtig. Nachfolgend informieren
        wir dich gemäß Datenschutz-Grundverordnung (DSGVO) und Bundesdatenschutzgesetz
        (BDSG) über die Verarbeitung personenbezogener Daten auf dieser Website.
      </p>

      <h2>1. Verantwortliche Stelle</h2>
      <p>
        {studio.legalName}
        <br />
        {studio.owner}
        <br />
        {studio.street}, {studio.zip} {studio.city}
        <br />
        Telefon: {studio.phoneDisplay} · E-Mail: {studio.email}
      </p>

      <h2>2. Hosting</h2>
      <p>
        Diese Website wird bei einem Dienstleister gehostet, der die Daten in unserem
        Auftrag verarbeitet (Auftragsverarbeitung nach Art. 28 DSGVO). Beim Aufruf der
        Seite werden technisch notwendige Server-Logfiles (z. B. IP-Adresse,
        Zeitpunkt, abgerufene Seite, Browsertyp) verarbeitet. Rechtsgrundlage ist das
        berechtigte Interesse an einem sicheren, stabilen Betrieb (Art. 6 Abs. 1 lit. f
        DSGVO). Diese Logs werden nach kurzer Zeit gelöscht.
      </p>

      <h2>3. Kontaktformular & Anfragen</h2>
      <p>
        Wenn du uns über das Kontaktformular, per Telefon oder E-Mail kontaktierst,
        verarbeiten wir die von dir angegebenen Daten (Name, E-Mail, Telefon,
        Nachricht), um deine Anfrage zu bearbeiten.
      </p>
      <ul>
        <li><strong>Zweck:</strong> Bearbeitung deiner Anfrage und Terminvereinbarung.</li>
        <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f (berechtigtes Interesse an der Kommunikation).</li>
        <li><strong>Speicherdauer:</strong> bis zur abschließenden Bearbeitung, danach Löschung, soweit keine gesetzlichen Aufbewahrungsfristen entgegenstehen.</li>
      </ul>
      <p>
        Zum Schutz vor Spam setzen wir ein verstecktes Formularfeld (Honeypot) sowie
        eine technische Begrenzung der Anfragen pro Zeitraum (Rate Limiting) ein.
      </p>

      <h2>4. Gesundheitsdaten vor dem Tätowieren</h2>
      <p>
        Vor jeder Tätowierung führen wir ein Aufklärungsgespräch und erheben über
        einen Einwilligungsbogen besondere Kategorien personenbezogener Daten
        (z. B. Allergien, Vorerkrankungen, Medikamente) nach Art. 9 Abs. 2 lit. a
        DSGVO. Diese Daten werden ausschließlich offline, vertraulich und sicher
        aufbewahrt und nicht über diese Website verarbeitet.
      </p>

      <h2>5. Kartendarstellung (OpenStreetMap)</h2>
      <p>
        Auf der Kontaktseite betten wir eine Karte von OpenStreetMap ein. Beim Laden
        der Karte kann deine IP-Adresse an die OpenStreetMap Foundation übertragen
        werden. Rechtsgrundlage ist unser berechtigtes Interesse an einer leichten
        Auffindbarkeit (Art. 6 Abs. 1 lit. f DSGVO).
      </p>

      <h2>6. Ratenzahlung über PayPal</h2>
      <p>
        Für die Ratenzahlung nutzt du den Dienst PayPal. Die Zahlungsabwicklung
        erfolgt direkt zwischen dir und PayPal (PayPal (Europe) S.à r.l. et Cie,
        S.C.A.). Es gelten die Datenschutzbestimmungen von PayPal. Über diese Website
        werden hierfür keine Zahlungsdaten erhoben.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Diese Website verwendet ausschließlich technisch notwendige Cookies bzw.
        lokalen Speicher, etwa um deine Cookie-Entscheidung zu speichern. Es findet
        kein Tracking und keine werbliche Analyse statt. Eine Einwilligung nach § 25
        Abs. 2 TTDSG ist für diese notwendigen Funktionen nicht erforderlich.
      </p>

      <h2>8. Deine Rechte</h2>
      <p>Dir stehen nach der DSGVO folgende Rechte zu:</p>
      <ul>
        <li>Auskunft über deine gespeicherten Daten (Art. 15)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16)</li>
        <li>Löschung (Art. 17) und Einschränkung der Verarbeitung (Art. 18)</li>
        <li>Datenübertragbarkeit (Art. 20)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21)</li>
        <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3)</li>
      </ul>
      <p>
        Zur Ausübung deiner Rechte genügt eine formlose Nachricht an {studio.email}.
        Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu
        beschweren – zuständig ist die Landesbeauftragte für Datenschutz und
        Informationsfreiheit Nordrhein-Westfalen.
      </p>

      <h2>9. Datensicherheit</h2>
      <p>
        Diese Website wird ausschließlich über eine verschlüsselte HTTPS-Verbindung
        ausgeliefert. Zusätzlich setzen wir moderne Sicherheits-Header und
        Schutzmaßnahmen gegen Missbrauch von Formularen ein.
      </p>
    </LegalPage>
  );
}
