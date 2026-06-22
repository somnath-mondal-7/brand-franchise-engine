import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Phone, Target, Users, Search, MessageSquare, Calendar, ShieldCheck } from "lucide-react";

const openCal = () => window.open("https://calendly.com/lets-build-your-brand", "_blank");

const CANONICAL = "https://www.franchiseleadspro.com/franchise-broker-lead-generation";

const FranchiseBrokerLeadGeneration = () => {
  const faqs = [
    {
      q: "What does a franchise broker lead generation agency actually do?",
      a: "We build the marketing engine that puts qualified candidate-investors in front of franchise brokers and consultants — without you cold-calling, buying recycled portal lists, or babysitting ad accounts. That means search-ready positioning, paid acquisition on Meta, Google and LinkedIn, conversion-optimized landing pages, qualification automation, and a CRM workflow that hands you booked appointments instead of raw form fills.",
    },
    {
      q: "How is this different from buying franchise leads from a portal?",
      a: "Portal leads are shared, recycled, and incentive-driven — the prospect filled out one form and twenty brokers got the same name. Our leads are exclusive to you, generated from intent-based campaigns we run on your brand, and pre-qualified against liquid capital, net worth, timeline, and territory before they reach your calendar.",
    },
    {
      q: "How long before I see booked calls?",
      a: "Most franchise broker clients see the first qualified discovery call within 10–21 days of launch. The first 30 days are about creative testing and audience signal; from month two we scale the winners. We do not promise overnight pipelines — anyone who does is lying.",
    },
    {
      q: "Do you work with new brokers or only established ones?",
      a: "Both. New brokers need positioning, a real website, and a steady top-of-funnel before they can compete with FranNet or FranChoice. Established brokers usually come to us to replace expensive referral dependencies or to launch a personal-brand channel alongside their group.",
    },
    {
      q: "Will this work for real estate, mortgage, or business coach lead generation?",
      a: "Yes. The same playbook — intent-led targeting, owned landing pages, qualification automation, and accountable reporting — is what we deploy for real estate brokers, mortgage brokers, and business/career coaches. Franchise broker lead generation is our flagship; the others are direct adjacencies.",
    },
    {
      q: "What does it cost?",
      a: "Engagements start in the low four figures per month for a focused single-channel build and scale from there based on ad spend, geos, and how aggressive your appointment target is. We will not quote a number on a public page because the honest answer depends on your offer, market, and capacity — book a call and we will price it the same day.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Franchise Broker Lead Generation",
    serviceType: "Lead Generation for Franchise Brokers and Consultants",
    provider: {
      "@type": "Organization",
      name: "FranchiseLeads Pro",
      url: "https://www.franchiseleadspro.com",
      telephone: "+1-424-445-5334",
    },
    areaServed: ["United States", "Canada", "United Kingdom", "Australia", "UAE", "India"],
    description:
      "Done-for-you lead generation for franchise brokers and consultants: paid acquisition, landing pages, qualification automation, and booked discovery calls.",
  };

  return (
    <>
      <Helmet>
        <title>Franchise Broker Lead Generation Agency | Booked Calls, Not Form Fills</title>
        <meta
          name="description"
          content="The lead generation partner franchise brokers and consultants hire when they're done with shared portal leads. Exclusive, pre-qualified, booked-to-calendar prospects."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:title" content="Franchise Broker Lead Generation Agency" />
        <meta property="og:description" content="Exclusive, pre-qualified franchise broker leads — booked straight to your calendar." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navigation />

      {/* HERO */}
      <section className="relative bg-background pt-28 sm:pt-32 pb-16 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[460px] h-[460px] rounded-full bg-accent/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[460px] h-[460px] rounded-full bg-primary/[0.05] blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-semibold tracking-[0.18em] uppercase text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              For Franchise Brokers &amp; Consultants
            </span>
          </div>

          <h1 className="text-center font-extrabold tracking-tight text-accent leading-[0.95] text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl mx-auto">
            Franchise Broker
            <br />
            <span className="text-primary">Lead Generation</span>
          </h1>

          <p className="mt-7 text-center text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Exclusive, pre-qualified candidate-investors booked straight to your calendar. No shared portal lists. No recycled forms. No babysitting ad accounts.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              onClick={openCal}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-13 py-4 text-base font-semibold shadow-orange group"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="tel:+14244455334"
              className="inline-flex items-center gap-2 h-13 px-6 py-4 rounded-full border border-border text-accent font-semibold hover:border-accent/40 hover:bg-secondary transition-all"
            >
              <Phone className="w-4 h-4" />
              (424) 445-5334
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-6">
            Why most franchise brokers stay stuck at the same revenue ceiling
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            Almost every broker we talk to is running on the same three sources: their network, referrals from existing placements, and the occasional portal lead. It works — until it doesn't. Referrals plateau. Network warm intros dry up. And portal leads turn into a tax: you pay, you call, you get ghosted by someone who filled out forty other forms the same afternoon.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            The brokers who break out of that ceiling have one thing in common — they own their top of funnel. They don't rent it from a portal, and they don't depend on a referral pipeline they can't predict. They have a marketing engine that produces candidates on demand, in the territory and capital band they want, branded to <em>them</em>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            That engine is what we build. That's the entire service.
          </p>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-4 text-center">What's actually in the engagement</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">
            No vague "marketing services." Here is the exact stack we deploy for a franchise broker or consulting practice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Target className="h-6 w-6" />,
                title: "Intent-based paid acquisition",
                body: "Meta, Google, and LinkedIn campaigns built around real franchise-investor intent signals — liquid capital ranges, industry interest, executive role transitions — not the spray-and-pray retargeting you see from generic agencies.",
              },
              {
                icon: <Search className="h-6 w-6" />,
                title: "Conversion-first landing pages",
                body: "Owned landing pages branded to you, optimized for the one decision that matters: book a call. Every page is split-tested against headline, lead-magnet, and form-friction variants.",
              },
              {
                icon: <MessageSquare className="h-6 w-6" />,
                title: "Pre-qualification automation",
                body: "Liquid capital, net worth, timeline, and territory captured upfront. SMS + email sequences warm the candidate and disqualify tire-kickers before they ever touch your calendar.",
              },
              {
                icon: <Calendar className="h-6 w-6" />,
                title: "Booked discovery calls",
                body: "You don't chase. The qualified candidate self-books into your Calendly or HubSpot scheduler with their qualification answers attached. You show up to a call already armed.",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "CRM and pipeline setup",
                body: "We wire up HubSpot, GoHighLevel, or your existing CRM so leads, statuses, and follow-ups don't fall through the cracks. You see your real cost-per-booked-call, not vanity click metrics.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                title: "Accountable weekly reporting",
                body: "One dashboard, one weekly walkthrough. Spend, qualified leads, booked calls, and pipeline value. If something isn't working, you'll hear it from us before you have to ask.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-2xl p-7 hover:border-primary/40 transition-colors bg-card">
                <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-accent mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-10 text-center">Who we work with</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Independent franchise brokers and consultants",
                body: "Solo operators and small groups who want a predictable pipeline of qualified candidates without paying a portal a finder's fee on every deal.",
              },
              {
                title: "Franchise broker networks and groups",
                body: "FBA-style organizations rolling out a unified lead engine for their broker community, or top performers building a personal-brand channel alongside the group.",
              },
              {
                title: "Real estate brokers and brokerages",
                body: "Listing brokers, buyer's agents, and team leads who want seller appointments and qualified buyer consults instead of Zillow flares.",
              },
              {
                title: "Mortgage brokers and loan officers",
                body: "Purchase and refi pipelines built on your brand — not on rate-shopper aggregators that hand the same lead to six lenders.",
              },
              {
                title: "Business and career coaches",
                body: "High-ticket coaching practices that need application-style lead flow with qualification baked into the funnel.",
              },
              {
                title: "Franchisors and emerging brands",
                body: "When franchisors come to us, the goal is candidate-developer pipeline — the same engine, calibrated for FDD-grade qualification and discovery-day attendance.",
              },
            ].map((b, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-accent mb-2">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-4 text-center">How a typical engagement unfolds</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">
            Honest timeline. No "leads in 48 hours" theater.
          </p>

          <div className="space-y-6">
            {[
              {
                step: "Week 1",
                title: "Positioning and offer audit",
                body: "We strip your offer down to the one thing a candidate-investor actually cares about — what they get, who it's for, and why you. Most brokers have never had this conversation. It changes everything downstream.",
              },
              {
                step: "Week 2",
                title: "Funnel and creative build",
                body: "Landing page goes live on your domain. Ad creative, headlines, and qualification logic are built and approved. CRM and scheduler wired up end-to-end.",
              },
              {
                step: "Week 3",
                title: "Launch and signal gathering",
                body: "Campaigns go live across the channels that fit your offer. First leads arrive within days. We optimize against booked-call quality, not vanity clicks.",
              },
              {
                step: "Week 4+",
                title: "Scale what's working",
                body: "Winning creatives, audiences, and offers get scaled. Losers get killed. Reporting becomes weekly. The pipeline compounds month over month.",
              },
            ].map((s, i) => (
              <div key={i} className="flex gap-5 sm:gap-7 items-start">
                <div className="flex-shrink-0 w-20 sm:w-24 text-primary font-bold text-sm uppercase tracking-wider pt-1">
                  {s.step}
                </div>
                <div className="flex-1 border-l-2 border-border pl-5 sm:pl-7 pb-2">
                  <h3 className="text-xl font-semibold text-accent mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-10">Why brokers pick us over a generic agency</h2>
          <div className="grid gap-5">
            {[
              "We only work in franchise, brokerage, and high-ticket professional service categories — we are not a generic agency learning your industry on your dime.",
              "Leads are exclusive to you. Not shared, not resold, not recycled — generated directly from campaigns we run on your brand.",
              "Qualification happens upfront. You stop wasting hours on candidates who don't have the capital or the timeline.",
              "You own the assets. Your landing pages, your ad accounts, your CRM, your data. If we ever part ways, you keep the engine.",
              "No long lock-ins. We earn the renewal every month with booked calls — not with a one-year contract you can't escape.",
              "Direct access to the people doing the work. You won't be handed to a junior account manager after the sales call.",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-12 text-center">Questions brokers actually ask us</h2>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-accent mb-2">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">Ready to own your pipeline?</h2>
          <p className="text-lg opacity-90 mb-9 leading-relaxed">
            Book a 30-minute strategy call. We'll audit your current acquisition, show you what's possible in your territory and capital band, and quote you the same day. No deck, no fluff.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              onClick={openCal}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-13 py-4 text-base font-semibold"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a
              href="tel:+14244455334"
              className="inline-flex items-center gap-2 h-13 px-6 py-4 rounded-full border border-white/30 font-semibold hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              (424) 445-5334
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FranchiseBrokerLeadGeneration;
