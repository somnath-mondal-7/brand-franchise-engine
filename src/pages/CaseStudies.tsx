import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CheckCircle2,
  Quote,
  Calendar,
  Globe,
  Target,
  Megaphone,
  ChevronDown,
} from "lucide-react";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import johnThompsonVideoCS from "@/assets/videos/john-thompson-review.mp4.asset.json";
import johnCover from "@/assets/case-studies/john-thompson-cover.jpg";
import hofCover from "@/assets/case-studies/hof-cover.jpg";

const servicesDelivered = [
  "Paid Advertising (Meta + Google)",
  "CRM Setup & Management",
  "Website Inbound Lead Routing",
  "Investor Qualification Workflow",
  "Funnel Copy & Creative",
  "Weekly Reporting & Strategy",
];

const timeline = [
  {
    phase: "Discovery",
    title: "Understanding the franchise portfolio",
    body:
      "We sat down with John to map every brand he represents at Franchise Solutions Inc., the typical investor profile for each, and the friction points in his existing intake process.",
  },
  {
    phase: "Build",
    title: "Launching paid + inbound engine",
    body:
      "We rebuilt his advertising creative around investor intent, structured a CRM to route enquiries from our network of franchise sites, and gave him a single dashboard to manage everything.",
  },
  {
    phase: "Scale",
    title: "Steady, qualified inbound — every week",
    body:
      "Once the engine was live, our role shifted to optimisation — sharper targeting, better qualification, faster follow-up — so John spends his time on conversations that actually close.",
  },
];

const outcomes = [
  { icon: Target, label: "Investor enquiries", body: "Consistent inbound from serious franchise buyers — not curious browsers." },
  { icon: Megaphone, label: "Paid ad efficiency", body: "Sharper creative and tighter audiences mean every dollar works harder." },
  { icon: Globe, label: "Website conversions", body: "Inbound leads from our franchise network flow straight into his CRM." },
  { icon: CheckCircle2, label: "Closed placements", body: "A steady cadence of qualified discovery calls that convert to placements." },
];

const hofHighlights = [
  "Complete website rebuild — moved off a dated WordPress theme onto a modern, lightning-fast React build.",
  "New brand system — bold navy + orange palette, premium typography, professional photography direction.",
  "Searchable 600+ franchise directory with category filters, investment ranges, and brand highlights.",
  "Embedded video storytelling with Shawn's introduction on Home and About pages.",
  "Calendly-integrated booking page and multiple strategic CTAs across the site.",
  "Mobile-first responsive design with optimized touch targets and a dedicated mobile menu.",
];

const hofServices = [
  "Complete Website Redesign & Development",
  "Custom React / TypeScript Build",
  "600+ Franchise Brand Directory",
  "Calendly Booking Integration",
  "Video Content Optimization & Embedding",
  "Mobile-First Responsive Design",
  "SEO Architecture & Implementation",
  "Brand Identity & Visual System",
];

type CaseCardProps = {
  open: boolean;
  onToggle: () => void;
  eyebrow: string;
  cover: string;
  title: React.ReactNode;
  subtitle: string;
  summary: string;
  children: React.ReactNode;
};

const CaseCard = ({ open, onToggle, eyebrow, cover, title, subtitle, summary, children }: CaseCardProps) => {
  return (
    <article className="rounded-2xl border border-border bg-card overflow-hidden shadow-card">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left grid md:grid-cols-[40%_1fr] gap-0 hover:bg-secondary/30 transition-colors"
      >
        <div className="aspect-[16/10] md:aspect-auto md:h-full bg-muted overflow-hidden">
          <img
            src={cover}
            alt={subtitle}
            loading="lazy"
            width={1280}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 sm:p-8 flex flex-col justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">{eyebrow}</p>
            <h3 className="font-display text-2xl sm:text-3xl text-foreground leading-tight mb-2">{title}</h3>
            <p className="text-sm font-medium text-muted-foreground mb-3">{subtitle}</p>
            <p className="text-muted-foreground leading-relaxed">{summary}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            {open ? "Hide case study" : "Read full case study"}
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </span>
        </div>
      </button>

      {open && (
        <div className="border-t border-border p-6 sm:p-10 bg-background">
          {children}
        </div>
      )}
    </article>
  );
};

const CaseStudies = () => {
  const [openId, setOpenId] = useState<"john" | "hof" | null>(null);
  const toggle = (id: "john" | "hof") => setOpenId((cur) => (cur === id ? null : id));

  return (
    <div className="india-theme min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Case Studies | FranchiseLeadsPro</title>
        <meta
          name="description"
          content="Real franchise consulting and franchisor case studies — how FranchiseLeadsPro builds investor lead engines that actually convert."
        />
        <link rel="canonical" href="https://www.franchiseleadspro.com/case-studies" />
        <meta property="og:title" content="Case Studies | Franchise Lead Generation Success Stories" />
        <meta
          property="og:description"
          content="See how franchise consultants run their investor lead pipeline with FranchiseLeadsPro — paid ads, CRM, website inbound, and qualification done right."
        />
        <meta property="og:image" content="https://www.franchiseleadspro.com/og-image.png" />
        <meta property="og:url" content="https://www.franchiseleadspro.com/case-studies" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <IndiaNav />

      {/* HERO */}
      <section className="relative bg-primary text-primary-foreground pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(60% 60% at 70% 40%, hsl(40 65% 52% / 0.18) 0%, transparent 70%)" }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/5 border border-primary-foreground/15 text-[11px] uppercase tracking-[0.25em] text-accent mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Case Studies
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] mb-6">
              Real Clients. <em>Real Results.</em>
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-2xl leading-relaxed">
              Click any case study below to read the full story — the engine we built, the process,
              and the outcome.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDY CARDS */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Mike Thompson */}
          <CaseCard
            open={openId === "john"}
            onToggle={() => toggle("john")}
            eyebrow="Paid Ads · CRM · Website Inbound"
            cover={johnCover}
            title={<>Mike Thompson — <em>Franchise Solutions Inc.</em></>}
            subtitle="Independent Franchise Consultant · USA"
            summary="An independent franchise consultant running on referrals. We built an investor lead engine that delivers qualified enquiries every week — on autopilot."
          >
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-card">
                  <div className="aspect-video bg-muted">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      poster="/videos/john-thompson-poster.jpg"
                    >
                      <source src={johnThompsonVideoCS.url} type="video/mp4" />
                    </video>
                  </div>
                </div>

                <div>
                  <h4 className="font-display text-2xl text-foreground mb-3">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    John came to us running his consultancy almost entirely on referrals and word of mouth.
                    Strong brand, great close rate — but no predictable top-of-funnel. We built him a paid
                    advertising + CRM + website inbound system that puts qualified franchise buyer enquiries
                    in front of him every single week.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-2xl text-foreground mb-6">The Engagement</h4>
                  <div className="space-y-6">
                    {timeline.map((t, i) => (
                      <div key={t.phase} className="flex gap-5">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground font-display font-bold flex items-center justify-center">
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-1">{t.phase}</p>
                          <h5 className="font-display text-xl text-foreground mb-1.5">{t.title}</h5>
                          <p className="text-muted-foreground leading-relaxed">{t.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-display text-2xl text-foreground mb-6">The Outcome</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {outcomes.map((o) => (
                      <div key={o.label} className="rounded-2xl border border-border bg-card p-6">
                        <o.icon className="w-6 h-6 text-accent mb-3" />
                        <p className="font-display text-lg text-foreground mb-1.5">{o.label}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{o.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-primary text-primary-foreground p-8 sm:p-10">
                  <Quote className="w-7 h-7 text-accent mb-4" />
                  <p className="font-display text-2xl leading-snug mb-6">
                    "From paid ads to CRM automation to a high-converting website, our growth engine finally
                    runs on autopilot. The team genuinely understands franchise sales — it shows in the
                    quality of conversations they put on my calendar."
                  </p>
                  <div>
                    <p className="font-semibold">Mike Thompson</p>
                    <p className="text-sm text-primary-foreground/70">Franchise Consultant, Franchise Solutions Inc.</p>
                  </div>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-32 space-y-6">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Client</p>
                    <p className="font-display text-xl text-foreground mb-1">Mike Thompson</p>
                    <p className="text-sm text-muted-foreground mb-6">Franchise Solutions Inc.</p>

                    <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Services Delivered</p>
                    <ul className="space-y-2 mb-6">
                      {servicesDelivered.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold h-12"
                      onClick={() => window.open("https://calendly.com/lets-build-your-brand", "_blank")}
                    >
                      <Calendar className="w-4 h-4 mr-2" /> Schedule a Call
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          </CaseCard>

          {/* HOF Franchise Consulting */}
          <CaseCard
            open={openId === "hof"}
            onToggle={() => toggle("hof")}
            eyebrow="Website Redesign · Brand"
            cover={hofCover}
            title={<>HOF Franchise Consulting — <em>Shawn Gurn</em></>}
            subtitle="Franchise Consultancy · Website Rebuild"
            summary="A complete website rebuild — modern brand, searchable franchise directory, video storytelling, and a real lead capture system for Shawn's consultancy."
          >
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h4 className="font-display text-2xl text-foreground mb-3">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Shawn's existing site was built on a dated WordPress theme — slow, generic, and not
                    converting visitors into discovery calls. We rebuilt the entire experience from the
                    ground up: new brand system, modern React build, searchable directory of 600+
                    franchise brands, and a lead capture flow that actually works.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-2xl text-foreground mb-6">What We Shipped</h4>
                  <ul className="space-y-3">
                    {hofHighlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-primary text-primary-foreground p-8 sm:p-10">
                  <Quote className="w-7 h-7 text-accent mb-4" />
                  <p className="font-display text-2xl leading-snug mb-6">
                    "The new site looks and feels like a serious franchise consultancy. Every visitor
                    now has a clear path — explore the directory, watch my intro, book a call. It's a
                    proper sales tool, not just a brochure."
                  </p>
                  <div>
                    <p className="font-semibold">Shawn Gurn</p>
                    <p className="text-sm text-primary-foreground/70">Founder, HOF Franchise Consulting</p>
                  </div>
                </div>

                <div>
                  <Link to="/case-studies/hof-franchise-consulting">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-7 rounded-full font-semibold">
                      View full HOF case study <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-32 space-y-6">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Client</p>
                    <p className="font-display text-xl text-foreground mb-1">Shawn Gurn</p>
                    <p className="text-sm text-muted-foreground mb-6">HOF Franchise Consulting</p>

                    <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Services Delivered</p>
                    <ul className="space-y-2 mb-6">
                      {hofServices.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold h-12"
                      onClick={() => window.open("https://calendly.com/lets-build-your-brand", "_blank")}
                    >
                      <Calendar className="w-4 h-4 mr-2" /> Schedule a Call
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          </CaseCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
            Ready to be our <em>next case study?</em>
          </h2>
          <p className="text-primary-foreground/75 text-lg max-w-2xl mx-auto mb-9">
            30 minutes. Zero obligation. A direct conversation with a franchise strategist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 rounded-full font-semibold"
              onClick={() => window.open("https://calendly.com/lets-build-your-brand", "_blank")}
            >
              Book Free Consultation <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="h-14 px-8 rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Send Enquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <IndiaFooter />
    </div>
  );
};

export default CaseStudies;
