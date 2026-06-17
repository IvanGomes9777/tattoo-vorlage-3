/**
 * Single source of truth for the studio's NAP data (Name, Address, Phone).
 * Keep this identical to the Google Business Profile and every directory.
 */
export const studio = {
  name: "Clitze Clein – Tattoo Atelier",
  legalName: "Clitze Clein – Tattoo Atelier | by C. Chiara",
  owner: "C. Chiara Hartmann",
  artist: "Chiara",
  tagline: "Dein clitze cleines Tattoo Atelier in Münster",
  street: "Hammer Str. 174",
  zip: "48153",
  city: "Münster",
  country: "Deutschland",
  phone: "0176 43152785",
  phoneRaw: "+4917643152785",
  phoneDisplay: "0176 - 431 52 785",
  email: "hallo@clitze-clein.de",
  instagram: "https://www.instagram.com/clitze.clein",
  instagramHandle: "@clitze.clein",
  facebook: "https://www.facebook.com/clitze.clein",
  maps: "https://www.google.com/maps/place/Hammer+Str.+174,+48153+M%C3%BCnster",
  googleReview: "https://maps.app.goo.gl/M8WpoFcFbBJbD4zg9",
  url: "https://clitze-clein.de",
  geo: { lat: 51.94, lng: 7.62 },
  ratingValue: "5.0",
  reviewCount: "31",
  founded: "2019",
  hours: [
    { day: "Dienstag", time: "10:00 – 16:00" },
    { day: "Mittwoch", time: "10:00 – 16:00" },
    { day: "Donnerstag", time: "10:00 – 16:00" },
    { day: "Freitag", time: "10:00 – 16:00" },
    { day: "Samstag", time: "Geschlossen" },
    { day: "Sonntag", time: "Geschlossen" },
    { day: "Montag", time: "Geschlossen" },
  ],
} as const;
