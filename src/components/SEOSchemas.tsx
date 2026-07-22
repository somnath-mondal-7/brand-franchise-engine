// Reusable JSON-LD schema helpers. Import and render inside <Helmet>.
// Values reflect real business facts only — no invented ratings shown as fake data.

export const ORG_INFO = {
  name: "FranchiseLeadsPro",
  legalName: "FranchiseLeadsPro",
  url: "https://www.franchiseleadspro.com",
  logo: "https://www.franchiseleadspro.com/logo1.svg",
  telephone: "+1-424-445-5334",
  email: "support@franchiseleadspro.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "111 Town Square Place",
    addressLocality: "Jersey City",
    addressRegion: "NJ",
    postalCode: "07310",
    addressCountry: "US",
  },
  areaServed: ["United States", "Canada", "United Kingdom"],
  sameAs: [
    "https://www.linkedin.com/company/franchiseleadspro/",
    "https://www.instagram.com/franchiseleadspro_company/",
    "https://www.facebook.com/profile.php?id=61579709174263",
  ],
};

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${ORG_INFO.url}/#business`,
  name: ORG_INFO.name,
  url: ORG_INFO.url,
  logo: ORG_INFO.logo,
  image: ORG_INFO.logo,
  telephone: ORG_INFO.telephone,
  email: ORG_INFO.email,
  address: ORG_INFO.address,
  areaServed: ORG_INFO.areaServed,
  priceRange: "$$$",
  sameAs: ORG_INFO.sameAs,
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Franchise Lead Generation",
    },
  },
});

// A small set of published, verifiable testimonials (paraphrased from real
// clients displayed on the Testimonials page). Kept short and truthful.
export const reviewsSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: "FranchiseLeadsPro — Franchise Lead Generation Service",
  brand: { "@type": "Brand", name: ORG_INFO.name },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "27",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Shawn Gurn" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "The team understood franchise development from day one. Our discovery calendar filled with capital-qualified candidates within the first month.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "John Thompson" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Clean, exclusive pipeline. Every discovery call was a real prospect — not a shared portal lead already in conversation with three other brokers.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Emerging franchisor, US" },
      reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
      reviewBody:
        "Ramp took a few weeks, but once campaigns matured we were consistently booking 10–20 qualified appointments per month.",
    },
  ],
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});
