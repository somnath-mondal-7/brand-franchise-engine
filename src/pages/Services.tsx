import { Helmet } from "react-helmet-async";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import { Button } from "@/components/ui/button";
import {
  Megaphone,
  Code2,
  Sparkles,
  Magnet,
  Search,
  MousePointerClick,
  Bot,
  LayoutGrid,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    tagline: "Full-funnel digital growth for franchise brands.",
    description:
      "End-to-end campaigns across Meta, LinkedIn, Google and email — engineered to move franchise buyers from first click to signed agreement.",
    points: [
      "Multi-channel paid media",
      "Funnel & creative strategy",
      "Conversion tracking setup",
      "Monthly performance reviews",
    ],
    href: "/services",
  },
  {
    icon: Code2,
    title: "Website & App Development",
    tagline: "High-converting franchise sites and apps built to scale.",
    description:
      "Custom franchise portals, investor microsites and mobile apps designed for trust, speed and lead capture from the first scroll.",
    points: [
      "Custom franchise portals",
      "Investor lead capture",
      "Mobile-first architecture",
      "CMS & CRM integrations",
    ],
    href: "/services",
  },
  {
    icon: Sparkles,
    title: "Branding",
    tagline: "Positioning and identity that earns investor trust.",
    description:
      "From positioning to visual identity — we craft franchise brands that command premium fees and attract serious investors.",
    points: [
      "Brand positioning & story",
      "Visual identity systems",
      "Pitch & FDD design",
      "Brand guidelines",
    ],
    href: "/services",
  },
  {
    icon: Magnet,
    title: "Lead Generation",
    tagline: "Qualified franchise buyer leads on tap.",
    description:
      "We build predictable lead pipelines using LinkedIn outreach, paid social and intent-based targeting — only serious investors.",
    points: [
      "LinkedIn investor outreach",
      "Intent-based targeting",
      "Lead qualification",
      "CRM-ready delivery",
    ],
    href: "/services",
  },
  {
    icon: Search,
    title: "SEO Services",
    tagline: "Rank for the searches your investors actually make.",
    description:
      "Technical SEO, programmatic pages and authority content that put your franchise opportunity in front of buyers ready to invest.",
    points: [
      "Technical & on-page SEO",
      "Programmatic SEO at scale",
      "Authority content & PR",
      "Local & franchise SERPs",
    ],
    href: "/services",
  },
  {
    icon: MousePointerClick,
    title: "PPC",
    tagline: "Paid campaigns engineered for franchise ROI.",
    description:
      "Google, Meta and LinkedIn ad campaigns tuned to your unit economics — not vanity metrics. Built to lower cost per qualified lead.",
    points: [
      "Google & Bing search ads",
      "Meta & LinkedIn campaigns",
      "Landing page optimization",
      "ROI-first reporting",
    ],
    href: "/services",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    tagline: "Automate outreach, follow-ups and lead nurturing.",
    description:
      "AI-powered workflows that qualify leads, schedule calls and nurture investors 24/7 — so your team only talks to ready buyers.",
    points: [
      "AI chat & qualification",
      "Automated nurture sequences",
      "CRM & calendar workflows",
      "Custom AI agents",
    ],
    href: "/services",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Franchise Marketing Services | FranchiseLeadsPro</title>
        <meta
          name="description"
          content="Digital marketing, website & app development, branding, lead generation, SEO, PPC and AI automation — built for franchise consultants and franchisors."
        />
        <link rel="canonical" href="https://www.franchiseleadspro.com/services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Franchise Marketing Services | FranchiseLeadsPro" />
        <meta
          property="og:description"
          content="A premium franchise marketing agency — digital, web, branding, SEO, PPC and AI automation under one roof."
        />
        <meta property="og:url" content="https://www.franchiseleadspro.com/services" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <IndiaNav />

        {/* Hero */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" /> Our Services
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
                A premium growth partner for{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  franchise brands
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Eight specialised services. One franchise-obsessed team. From brand
                positioning to AI-powered lead pipelines — everything you need to
                attract serious investors, in one place.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
                  onClick={() =>
                    window.open("https://calendly.com/lets-build-your-brand", "_blank")
                  }
                >
                  Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                What we do
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Services built for the franchise economy.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-hover hover:border-primary/40 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-4">
                        {service.tagline}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-2.5 mb-6">
                        {service.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/80">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className="inline-flex items-center text-sm font-semibold text-primary group/link"
                      >
                        Discuss this service
                        <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why us strip */}
        <section className="py-20 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {[
                { title: "Franchise-only focus", desc: "We work exclusively with franchisors and franchise consultants." },
                { title: "Senior team, no juniors", desc: "Strategy and execution led by people who've scaled franchise brands." },
                { title: "Built for trust", desc: "Transparent reporting, clear scopes, no smoke and mirrors." },
              ].map((b) => (
                <div key={b.title} className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to grow your franchise?
              </h2>
              <p className="text-lg opacity-90">
                Book a free strategy call. We'll map your funnel, identify the gaps,
                and show you exactly how to fill your pipeline with qualified investors.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/10 border-background/30 text-primary-foreground hover:bg-background hover:text-primary px-8 py-6 text-lg backdrop-blur-sm"
                onClick={() =>
                  window.open("https://calendly.com/lets-build-your-brand", "_blank")
                }
              >
                Book Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <IndiaFooter />
      </div>
    </>
  );
};

export default Services;
