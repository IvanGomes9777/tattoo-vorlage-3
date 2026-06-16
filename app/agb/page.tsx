import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen des Clitze Cleine Tattoo Ateliers in Münster.",
  alternates: { canonical: "/agb" },
  robots: { index: false, follow: true },
};

export default function AgbPage() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen" updated="Juni 2026">
      <h2>1. Geltungsbereich</h2>
      <p>
        Diese Bedingungen gelten für alle Tätowier-Leistungen des Clitze Cleine
        Tattoo Ateliers (by C. Chiara). Mit der Terminbuchung erkennst du sie an.
      </p>

      <h2>2. Mindestalter & Aufklärung</h2>
      <p>
        Tätowiert werden ausschließlich volljährige Personen ab 18 Jahren gegen
        Vorlage eines gültigen Lichtbildausweises. Vor jedem Tattoo erfolgt ein
        Aufklärungs- und Einwilligungsgespräch. Keine Tätowierung erfolgt unter
        Einfluss von Alkohol oder Drogen, bei akuten Erkrankungen oder bei fehlender
        Einwilligungsfähigkeit. Auch bei Schwangerschaft und bestimmten Erkrankungen
        kann eine Tätowierung abgelehnt werden.
      </p>

      <h2>3. Terminvereinbarung & Anzahlung</h2>
      <p>
        Termine werden individuell vereinbart. Zur verbindlichen Reservierung kann
        eine Anzahlung vereinbart werden, die mit dem Endpreis verrechnet wird. Die
        Anzahlung sichert deinen Termin und die Designvorbereitung.
      </p>

      <h2>4. Stornierung & Verschiebung</h2>
      <p>
        Bitte sage Termine mindestens 48 Stunden vorher ab oder verschiebe sie.
        Bei kurzfristiger Absage oder Nichterscheinen kann eine geleistete Anzahlung
        einbehalten werden, da Zeit und Vorbereitung reserviert wurden.
      </p>

      <h2>5. Preise & Zahlung</h2>
      <p>
        Der Preis richtet sich nach Größe, Aufwand und Dauer des Motivs und wird vor
        Beginn transparent besprochen. Die Zahlung erfolgt nach Abschluss der Arbeit.
        Auf Wunsch ist eine Ratenzahlung über PayPal möglich; hierfür gelten die
        Bedingungen von PayPal.
      </p>

      <h2>6. Mitwirkung & Pflege</h2>
      <p>
        Für ein gutes Ergebnis ist die richtige Nachsorge entscheidend. Du erhältst
        nach dem Termin eine ausführliche Pflegeanleitung. Für Schäden durch
        unsachgemäße Pflege oder Nichtbeachtung der Hinweise wird keine Haftung
        übernommen.
      </p>

      <h2>7. Gewährleistung & Nacharbeiten</h2>
      <p>
        Kleinere Nacharbeiten innerhalb eines vereinbarten Zeitraums nach Abheilung
        sind, sofern erforderlich und nicht auf mangelnde Pflege zurückzuführen, nach
        Absprache möglich.
      </p>

      <h2>8. Widerruf</h2>
      <p>
        Da es sich um eine individuell auf dich zugeschnittene, persönliche
        Dienstleistung handelt, ist ein Widerruf nach § 312g Abs. 2 BGB
        ausgeschlossen, sobald mit der Leistung mit deiner Zustimmung begonnen wurde.
      </p>

      <h2>9. Schlussbestimmungen</h2>
      <p>
        Es gilt deutsches Recht. Sollte eine Bestimmung unwirksam sein, bleibt die
        Wirksamkeit der übrigen Bestimmungen unberührt.
      </p>
    </LegalPage>
  );
}
