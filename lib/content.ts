/**
 * Prototype media uses licence-free Unsplash images that fit the niche.
 * → Replace the `src` values marked REAL-PHOTO with Chiara's own photos
 *   (portrait, studio interior, real tattoo work) before go-live.
 */

export type Galleryitem = {
  src: string;
  alt: string;
  category: "tattoo" | "kunst" | "studio";
  caption: string;
};

const U = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const gallery: Galleryitem[] = [
  { src: U("photo-1611501275019-9b5cda994e8d"), alt: "Feines Fine-Line Tattoo am Unterarm", category: "tattoo", caption: "Fine-Line · Unterarm" },
  { src: U("photo-1565058379802-bbe93b2f703a"), alt: "Florales Tattoo am Arm", category: "tattoo", caption: "Floral · Oberarm" },
  { src: U("photo-1598371839696-5c5bb00bdc28"), alt: "Schwarz-graues Tattoo im Detail", category: "tattoo", caption: "Black & Grey · Wade" },
  { src: U("photo-1607779097040-26e80aa78e66"), alt: "Detailaufnahme eines Linework-Tattoos", category: "tattoo", caption: "Linework · Hand" },
  { src: U("photo-1612459284970-e8f027596582"), alt: "Tätowiererin bei der Arbeit", category: "tattoo", caption: "Session im Atelier" },
  { src: U("photo-1542856391-010fb87dcfed"), alt: "Aquarell-Gemälde in warmen Farben", category: "kunst", caption: "Acryl auf Leinwand" },
  { src: U("photo-1499781350541-7783f6c6a0c8"), alt: "Abstraktes Gemälde mit Pinselstrichen", category: "kunst", caption: "Original · handgemalt" },
  { src: U("photo-1513364776144-60967b0f800f"), alt: "Buntes Kunstwerk an der Wand", category: "kunst", caption: "Studio-Kunst" },
  { src: "/galerie-clitzeclein.jpg", alt: "Innenansicht des Clitze Cleine Tattoo Ateliers in Münster", category: "studio", caption: "Unser Atelier in Münster" },
  { src: U("photo-1521590832167-7bcbfaa6381f"), alt: "Gemütliche Studio-Ecke mit Sessel", category: "studio", caption: "Dein Safespace" },
  { src: U("photo-1556760544-74068565f05c"), alt: "Tattoo-Equipment ordentlich vorbereitet", category: "studio", caption: "Steril vorbereitet" },
  { src: U("photo-1503342217505-b0a15ec3261c"), alt: "Minimalistisches Tattoo am Handgelenk", category: "tattoo", caption: "Minimal · Handgelenk" },
];

export const reviews = [
  {
    name: "Kitty P.",
    text: "Ich bin absolut begeistert von Chiaras Arbeit! Sie hat meine Vorstellungen perfekt umgesetzt und mir die Angst genommen. Komme definitiv wieder.",
    source: "Google",
  },
  {
    name: "Dalton",
    text: "Ganz süßes, kleines, muckeliges Studio an der Hammer Str. Ruhig mal hingehen – man bereut es nicht. Chiara absolut mit Herz und Können.",
    source: "Google",
  },
  {
    name: "Jörg Kr.",
    text: "Sehr gute Arbeit. Sehr netter, freundschaftlicher Kontakt und immer eigene Ideen, die mit eingebracht werden. Nicht warten – Termin buchen!",
    source: "Google",
  },
];

export const faqs = [
  {
    q: "Ist bei Clitze Clein wirklich alles vegan?",
    a: "Ja. Von den Tattoo-Farben über Blaupapier und Stifte bis zu Snacks, Getränken, Tampons und dem Deo auf der Toilette ist im Clitze Clein alles vegan. Zusätzlich sind fast alle Einweg-Artikel plastikfrei – die Verpackung des Equipments besteht größtenteils aus Zuckerrohr.",
  },
  {
    q: "Ich bin nervös – ist das mein erstes Tattoo. Schaffe ich das?",
    a: "Auf jeden Fall. Chiara tätowiert seit 2019 und nimmt mit ihrer lockeren Art jedem die Anspannung. Wir machen Pausen, wann immer du willst, und du darfst bei guter Laune sogar die Musik aussuchen. Hier ist dein clitze cleiner Safespace – everybody's welcome.",
  },
  {
    q: "Was kostet ein Tattoo und kann ich in Raten zahlen?",
    a: "Den genauen Preis nennen wir nach einer kurzen Beratung – ehrlich und ohne Überraschungen. Größere Projekte kannst du bequem über PayPal-Ratenzahlung finanzieren: Du buchst deinen Wunschbetrag und zahlst ihn in Raten ab. Lass dich dabei nur nicht in die Schuldenfalle ziehen.",
  },
  {
    q: "Muss ich volljährig sein?",
    a: "Ja. Wir tätowieren ausschließlich Personen ab 18 Jahren mit gültigem Ausweis. Aus rechtlichen Gründen gibt es davon keine Ausnahmen – auch nicht mit Einverständnis der Eltern.",
  },
  {
    q: "Wie bekomme ich einen Termin?",
    a: "Am schnellsten per Telefon oder WhatsApp unter 0176 431 52 785 oder über das Kontaktformular auf dieser Seite. Telefonisch erreichbar sind wir Dienstag bis Freitag von 10:00 bis 16:00 Uhr. Schick uns gern direkt deine Idee, Referenzbilder und die gewünschte Körperstelle mit.",
  },
  {
    q: "Wo finde ich das Atelier?",
    a: "Das Clitze Cleine Tattoo Atelier liegt in der Hammer Str. 174 in 48153 Münster, schräg gegenüber von Mr. Wash. Auf 22 m² erwartet dich ein helles, gemütliches Studio – klein, fein und ganz persönlich.",
  },
];

export const values = [
  {
    title: "100 % Vegan",
    text: "Farben, Pflege, Snacks, sogar das Deo auf der Toilette – im Clitze Clein ist ausnahmslos alles vegan.",
    icon: "leaf",
  },
  {
    title: "Nachhaltig",
    text: "Fast alle Einwegartikel sind plastikfrei. Die Equipment-Verpackung besteht größtenteils aus Zuckerrohr.",
    icon: "recycle",
  },
  {
    title: "Dein Safespace",
    text: "Lockere Atmosphäre, keine Berührungsängste, kein Urteil. Hier bist du willkommen – everybody's welcome.",
    icon: "heart",
  },
];
