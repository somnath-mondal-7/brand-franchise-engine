import { Link } from "react-router-dom";

// Hub-and-spoke internal links. Rendered on every money page and the homepage
// so authority flows from the hubs (homepage, services, money pages) out to
// the location and service spokes — and back.

const CORE_SERVICES = [
  { href: "/franchise-leads-usa", label: "Franchise Lead Generation USA" },
  { href: "/franchise-broker-lead-generation-usa", label: "Franchise Broker Lead Generation" },
  { href: "/buy-franchise-leads", label: "Buy Franchise Leads" },
  { href: "/best-franchise-leads-agency", label: "Best Franchise Leads Agency" },
  { href: "/top-franchise-leads-agencies", label: "Top Franchise Leads Agencies" },
  { href: "/franchise-leads-agency-near-me", label: "Franchise Leads Agency Near Me" },
  { href: "/franchise-marketing-agency", label: "Franchise Marketing Agency" },
  { href: "/linkedin-lead-generation-brokers", label: "LinkedIn Lead Generation" },
];

const REGIONS = [
  { href: "/franchise-broker-leads-northeast", label: "Northeast" },
  { href: "/franchise-broker-leads-southeast", label: "Southeast" },
  { href: "/franchise-broker-leads-midwest", label: "Midwest" },
  { href: "/franchise-broker-leads-west", label: "West" },
];

const TOP_STATES = [
  { slug: "california", label: "California" },
  { slug: "texas", label: "Texas" },
  { slug: "florida", label: "Florida" },
  { slug: "new-york", label: "New York" },
  { slug: "illinois", label: "Illinois" },
  { slug: "georgia", label: "Georgia" },
  { slug: "north-carolina", label: "North Carolina" },
  { slug: "pennsylvania", label: "Pennsylvania" },
  { slug: "ohio", label: "Ohio" },
  { slug: "arizona", label: "Arizona" },
];

const TOP_METROS = [
  { href: "/franchise-lead-generation/usa/california/los-angeles", label: "Los Angeles" },
  { href: "/franchise-lead-generation/usa/texas/houston", label: "Houston" },
  { href: "/franchise-lead-generation/usa/new-york/new-york-city", label: "New York City" },
  { href: "/franchise-lead-generation/usa/illinois/chicago", label: "Chicago" },
  { href: "/franchise-lead-generation/usa/arizona/phoenix", label: "Phoenix" },
  { href: "/franchise-lead-generation/usa/pennsylvania/philadelphia", label: "Philadelphia" },
  { href: "/franchise-lead-generation/usa/texas/dallas", label: "Dallas" },
  { href: "/franchise-lead-generation/usa/florida/miami", label: "Miami" },
];

const LocationHubLinks = () => {
  return (
    <section className="py-14 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-2 text-center">
          Explore franchise lead generation across the US
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 text-sm">
          Pick your service, region, state, or metro — every page is built for
          the way US franchise candidates research and award.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Core services</h3>
            <ul className="space-y-2 text-sm">
              {CORE_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">By US region</h3>
            <ul className="space-y-2 text-sm">
              {REGIONS.map((r) => (
                <li key={r.href}>
                  <Link to={r.href} className="text-muted-foreground hover:text-primary transition-colors">
                    Franchise Broker Leads — {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Top states</h3>
            <ul className="space-y-2 text-sm">
              {TOP_STATES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/franchise-lead-generation/usa/${s.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Top metros</h3>
            <ul className="space-y-2 text-sm">
              {TOP_METROS.map((m) => (
                <li key={m.href}>
                  <Link to={m.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHubLinks;
