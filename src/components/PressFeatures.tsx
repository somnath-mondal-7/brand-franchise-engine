import { ArrowUpRight, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    publication: "The Entrepreneur Stories",
    headline:
      "Somnath Mondal: Building a New Era of Franchise Growth Through Marketing, Technology and Human Connections",
    url: "https://theentrepreneurstories.com/somnath-mondal-building-a-new-era-of-franchise-growth-through-marketing-technology-and-human-connections/",
  },
  {
    publication: "The Business Stories",
    headline:
      "Somnath Mondal: Building a New Era of Franchise Growth Through Marketing, Technology and Human Connections",
    url: "https://thebusinessstories.com/somnath-mondal-building-a-new-era-of-franchise-growth-through-marketing-technology-and-human-connections/",
  },
  {
    publication: "The Hindustan Wires",
    headline:
      "Building a New Era of Franchise Growth Through Marketing, Technology and Human Connections",
    url: "https://thehindustanwires.com/somnath-mondal-building-a-new-era-of-franchise-growth-through-marketing-technology-and-human-connections/",
  },
  {
    publication: "DailyHunt",
    headline:
      "Featured: The Founder Story Behind FranchiseLeadsPro's Premium Approach to Franchise Marketing",
    url: "https://dhunt.in/14IvL0",
  },
];

interface PressFeaturesProps {
  variant?: "section" | "strip";
  limit?: number;
  showViewAll?: boolean;
}

const PressFeatures = ({ variant = "section", limit, showViewAll = false }: PressFeaturesProps) => {
  if (variant === "strip") {
    return (
      <div className="border-y border-border bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent/70">
              As Featured In
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {features.map((f) => (
                <a
                  key={f.url}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accent hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {f.publication}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Press & Media
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-accent mt-3">
            As Featured In Leading Business Publications
          </h2>
          <p className="mt-4 text-accent/70 leading-relaxed">
            Our founder and FranchiseLeadsPro have been recognised in respected
            business media for our work in franchise growth, marketing and
            technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {(limit ? features.slice(0, limit) : features).map((f) => (
            <a
              key={f.url}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Newspaper className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent/80">
                      Featured In
                    </p>
                    <p className="font-display text-lg font-bold text-accent">
                      {f.publication}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-accent/50 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="text-accent/80 leading-relaxed">
                "{f.headline}"
              </p>
              <p className="mt-5 text-sm font-semibold text-primary">
                Read the feature →
              </p>
            </a>
          ))}
        </div>

        {showViewAll && (
          <div className="mt-10 text-center">
            <Link
              to="/press"
              className="text-sm font-semibold text-accent hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              View all press <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PressFeatures;
