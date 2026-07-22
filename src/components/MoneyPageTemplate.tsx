import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Phone } from "lucide-react";
import type { ReactNode } from "react";
import LocationHubLinks from "@/components/LocationHubLinks";
import { localBusinessSchema, reviewsSchema, breadcrumbSchema } from "@/components/SEOSchemas";

const openCal = () => window.open("https://calendly.com/lets-build-your-brand", "_blank");


export interface MoneyPageConfig {
  canonical: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  badge: string;
  h1Line1: string;
  h1Line2: string;
  heroSubtitle: string;
  problemHeading: string;
  problemParagraphs: string[];
  whatYouGetHeading: string;
  whatYouGetSubtitle: string;
  whatYouGet: { icon: ReactNode; title: string; body: string }[];
  whoItsForHeading: string;
  whoItsFor: { title: string; body: string }[];
  processHeading: string;
  processSubtitle: string;
  process: { step: string; title: string; body: string }[];
  whyHeading: string;
  whyPoints: string[];
  faqHeading: string;
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaBody: string;
  serviceSchemaName: string;
  serviceSchemaType: string;
  serviceSchemaDescription: string;
}

const MoneyPageTemplate = ({ config }: { config: MoneyPageConfig }) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.serviceSchemaName,
    serviceType: config.serviceSchemaType,
    provider: {
      "@type": "Organization",
      name: "FranchiseLeads Pro",
      url: "https://www.franchiseleadspro.com",
      telephone: "+1-424-445-5334",
    },
    areaServed: ["United States", "Canada", "United Kingdom", "Australia", "UAE", "India"],
    description: config.serviceSchemaDescription,
  };

  return (
    <>
      <Helmet>
        <title>{config.metaTitle}</title>
        <meta name="description" content={config.metaDescription} />
        <link rel="canonical" href={config.canonical} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:title" content={config.ogTitle} />
        <meta property="og:description" content={config.ogDescription} />
        <meta property="og:url" content={config.canonical} />
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
              {config.badge}
            </span>
          </div>

          <h1 className="text-center font-extrabold tracking-tight text-accent leading-[0.95] text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl mx-auto">
            {config.h1Line1}
            <br />
            <span className="text-primary">{config.h1Line2}</span>
          </h1>

          <p className="mt-7 text-center text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {config.heroSubtitle}
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
          <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-6">{config.problemHeading}</h2>
          {config.problemParagraphs.map((p, i) => (
            <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-4 text-center">{config.whatYouGetHeading}</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">{config.whatYouGetSubtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {config.whatYouGet.map((item, i) => (
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
          <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-10 text-center">{config.whoItsForHeading}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {config.whoItsFor.map((b, i) => (
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
          <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-4 text-center">{config.processHeading}</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">{config.processSubtitle}</p>

          <div className="space-y-6">
            {config.process.map((s, i) => (
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
          <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-10">{config.whyHeading}</h2>
          <div className="grid gap-5">
            {config.whyPoints.map((point, i) => (
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
          <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-12 text-center">{config.faqHeading}</h2>
          <div className="space-y-8">
            {config.faqs.map((f, i) => (
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">{config.ctaHeading}</h2>
          <p className="text-lg opacity-90 mb-9 leading-relaxed">{config.ctaBody}</p>
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

export default MoneyPageTemplate;
