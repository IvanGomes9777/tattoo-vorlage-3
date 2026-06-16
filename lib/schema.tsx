import { studio } from "./studio";

const ORG_ID = `${studio.url}/#organization`;
const SITE_ID = `${studio.url}/#website`;
const LOCAL_ID = `${studio.url}/#localbusiness`;

/** Base @graph for the whole site (Organization + WebSite + LocalBusiness). */
export function baseGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: studio.name,
        url: studio.url,
        logo: { "@type": "ImageObject", url: `${studio.url}/clintzecleintattoo.png` },
        sameAs: [studio.instagram, studio.facebook, studio.maps],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: studio.phoneRaw,
          contactType: "customer service",
          areaServed: "DE",
          availableLanguage: ["de"],
        },
      },
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: studio.url,
        name: studio.name,
        publisher: { "@id": ORG_ID },
        inLanguage: "de",
      },
      {
        "@type": ["LocalBusiness", "TattooParlor"],
        "@id": LOCAL_ID,
        name: studio.name,
        image: `${studio.url}/galerie-clitzeclein.jpg`,
        url: studio.url,
        telephone: studio.phoneRaw,
        priceRange: "€€",
        founder: { "@type": "Person", name: studio.owner },
        address: {
          "@type": "PostalAddress",
          streetAddress: studio.street,
          addressLocality: studio.city,
          postalCode: studio.zip,
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: studio.geo.lat,
          longitude: studio.geo.lng,
        },
        sameAs: [studio.instagram, studio.facebook, studio.maps],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: studio.ratingValue,
          reviewCount: studio.reviewCount,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "16:00",
          },
        ],
      },
    ],
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${studio.url}${it.path}`,
    })),
  };
}

/** Render JSON-LD as a script tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
