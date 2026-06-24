import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NotFound from './NotFound';
import { locationData } from '@/data/locations';
import { hasCuratedInsight } from '@/utils/locationContent';
import { getCountryHubContent } from '@/data/countryHubContent';

const usaStateHighlights: Record<string, string> = {
  california: 'West Coast franchise demand, premium metro markets, and brand-led expansion opportunities.',
  texas: 'Fast-moving regional expansion markets with strong demand across major business corridors.',
  'new-york': 'Dense urban and suburban franchise markets with strong buyer intent and premium positioning.',
  florida: 'High-intent coastal and suburban markets suited to service, retail, and lifestyle franchises.',
  illinois: 'Midwest franchise visibility anchored by Chicago-area demand and established business markets.',
  georgia: 'Southeast expansion territory with strong regional reach and growing suburban demand.',
};

const CountryLocationPage: React.FC = () => {
  const { country } = useParams();
  if (!country) return <NotFound />;

  const normalizeCountry = (value: string) => {
    const slug = value.toLowerCase();
    if (slug === 'us' || slug === 'united-states' || slug === 'united-states-of-america') return 'usa';
    return slug;
  };
  const normalized = normalizeCountry(country);

  const countryData = locationData.find(
    (entry) =>
      entry.countryCode.toLowerCase() === normalized ||
      entry.country.toLowerCase().replace(/\s+/g, '-') === normalized,
  );
  if (!countryData) return <NotFound />;

  const canonicalCountryCode = countryData.countryCode.toLowerCase();
  if (country.toLowerCase() !== canonicalCountryCode) {
    return <Navigate to={`/locations/${canonicalCountryCode}`} replace />;
  }

  const curatedStates = countryData.states.filter((state) =>
    hasCuratedInsight(countryData.countryCode, state.slug),
  );
  const isUSA = canonicalCountryCode === 'usa';
  const deep = getCountryHubContent(canonicalCountryCode);

  const pageTitle =
    deep?.metaTitle || `Franchise Leads in ${countryData.country} | FranchiseLeadsPro`;
  const pageDescription =
    deep?.metaDescription ||
    (isUSA
      ? 'Explore curated United States franchise lead generation pages by state, with regional context and direct paths to the strongest markets.'
      : `Explore curated franchise lead generation pages across ${countryData.country}, including regional markets and local expansion pages.`);
  const canonicalUrl = `https://www.franchiseleadspro.com/locations/${canonicalCountryCode}`;

  const faqSchema = deep
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: deep.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: pageTitle,
            description: pageDescription,
            url: canonicalUrl,
            hasPart: curatedStates.map((state) => ({
              '@type': 'WebPage',
              name: `${state.name} Franchise Leads`,
              url: `https://www.franchiseleadspro.com/locations/${canonicalCountryCode}/${state.slug}`,
            })),
          })}
        </script>
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      <Navigation />

      <main className="bg-background text-foreground">
        {/* Hero */}
        <section className="border-b border-border bg-secondary/30 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-6">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {deep?.heroEyebrow || 'Location hub'}
              </p>
              <h1 className="text-4xl font-bold sm:text-5xl">
                {deep?.heroHeadline || `Franchise Leads in ${countryData.country}`}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {deep?.heroIntro ||
                  (isUSA
                    ? 'Use this United States hub to review the strongest curated state pages, compare regional markets, and move into the location that best matches your franchise growth plan.'
                    : `Use this ${countryData.country} hub to explore curated regional pages and find the market that best matches your franchise growth plan.`)}
              </p>
            </div>
          </div>
        </section>

        {/* Market snapshot */}
        {deep && (
          <section className="py-14 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {deep.marketSnapshot.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border border-border bg-card p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                      {s.label}
                    </p>
                    <p className="text-sm leading-relaxed text-foreground">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Long-form sections */}
        {deep && (
          <section className="py-14 sm:py-20 border-t border-border bg-secondary/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto space-y-12">
                {deep.sections.map((s, i) => (
                  <article key={i}>
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{s.h2}</h2>
                    <div className="space-y-4 text-foreground/90 leading-relaxed">
                      {s.paragraphs.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Franchisee profile + top categories */}
        {deep && (
          <section className="py-14 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
                    Franchisee profile in {countryData.country}
                  </h2>
                  <ul className="space-y-3 text-foreground/90 leading-relaxed">
                    {deep.franchiseeProfile.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
                    Categories with the strongest demand
                  </h2>
                  <div className="space-y-4">
                    {deep.topCategories.map((c) => (
                      <div
                        key={c.title}
                        className="rounded-lg border border-border bg-card p-5"
                      >
                        <h3 className="font-semibold text-foreground mb-1.5">{c.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Regulatory */}
        {deep && (
          <section className="py-14 sm:py-20 border-y border-border bg-secondary/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
                Regulatory context to plan around
              </h2>
              <div className="grid gap-5 md:grid-cols-3">
                {deep.regulatory.map((r) => (
                  <div key={r.title} className="rounded-lg border border-border bg-card p-5">
                    <h3 className="font-semibold mb-2 text-foreground">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Curated states */}
        {curatedStates.length > 0 && (
          <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl space-y-4">
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  {isUSA ? 'Browse curated states' : 'Browse curated regional markets'}
                </h2>
                <p className="text-muted-foreground">
                  {isUSA
                    ? 'Each state page is written for the local franchise demand story and the service mix that actually performs in that market.'
                    : `Each regional page is written for the local market in ${countryData.country}, with context for franchisor planning.`}
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {curatedStates.map((state) => (
                  <Link
                    key={state.slug}
                    to={`/locations/${canonicalCountryCode}/${state.slug}`}
                    className="block rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-card"
                  >
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{state.name}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {usaStateHighlights[state.slug] ||
                          `Curated franchise lead generation context for ${state.name}.`}
                      </p>
                      <span className="inline-flex text-sm font-medium text-primary">
                        Open page
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {deep && (
          <section className="py-14 sm:py-20 border-t border-border bg-secondary/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
                  Frequently asked questions
                </h2>
                <div className="space-y-4">
                  {deep.faqs.map((f) => (
                    <div key={f.q} className="rounded-lg border border-border bg-card p-5">
                      <h3 className="font-semibold mb-2 text-foreground">{f.q}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Internal next steps */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <Link
                to="/services"
                className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-card"
              >
                <h2 className="text-xl font-semibold">Explore services</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Review the franchise consulting, marketing and lead generation services behind every market page.
                </p>
              </Link>

              <Link
                to={isUSA ? '/franchise-leads-usa' : `/franchise-leads-${canonicalCountryCode === 'in' ? 'india' : canonicalCountryCode}`}
                className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-card"
              >
                <h2 className="text-xl font-semibold">Open the {countryData.country} service page</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  See the {countryData.country}-specific franchise lead generation service overview.
                </p>
              </Link>

              <Link
                to="/contact"
                className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-card"
              >
                <h2 className="text-xl font-semibold">Talk about your target market</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Tell us where you want to grow and we’ll point you to the best matching market path.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CountryLocationPage;
