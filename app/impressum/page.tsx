import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum des Clitze Cleine Tattoo Ateliers in Münster gemäß § 5 TMG.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum" updated="Juni 2026">
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        {studio.legalName}
        <br />
        {studio.owner}
        <br />
        {studio.street}
        <br />
        {studio.zip} {studio.city}
        <br />
        {studio.country}
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: {studio.phoneDisplay}
        <br />
        E-Mail: {studio.email}
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        {studio.owner}
        <br />
        {studio.street}, {studio.zip} {studio.city}
      </p>

      <h2>Aufsicht & Hygiene</h2>
      <p>
        Das Tätowieren wird als anzeigepflichtiges Gewerbe beim zuständigen
        Gesundheitsamt der Stadt Münster nach § 36 Infektionsschutzgesetz (IfSG)
        geführt. Es werden ausschließlich sterile Einweg-Materialien sowie
        EU-konforme, vegane Farben gemäß REACH-Verordnung verwendet.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine
        Gewähr übernommen werden. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG
        für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
        verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
        nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen. Eine Entfernung oder Sperrung dieser Inhalte erfolgt umgehend ab
        dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
        wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
        keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
        jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
        des Urheberrechts bedürfen der schriftlichen Zustimmung der jeweiligen
        Urheberin. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
        kommerziellen Gebrauch gestattet.
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalPage>
  );
}
