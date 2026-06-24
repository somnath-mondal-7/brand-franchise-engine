import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { getKeywordContent } from '@/data/keywordPageContent';

interface KeywordPageProps {
  keyword: string;
  service?: string;
  location?: string;
}

export const KeywordPageTemplate: React.FC<KeywordPageProps> = ({ keyword }) => {
  const capitalizeKeyword = keyword
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const keywordSlug = keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const canonicalUrl = `https://www.franchiseleadspro.com/services/${keywordSlug}`;
  const content = getKeywordContent(keywordSlug);

  const pageTitle = `${capitalizeKeyword} | FranchiseLeadsPro`;
  const pageDescription = content
    ? content.heroSubtitle
    : `${capitalizeKeyword} from FranchiseLeadsPro — franchise lead generation, recruitment and growth services for emerging and established franchisors.`;

  // Fallback if content missing (shouldn't happen, but safe)
  if (!content) {
    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <Navigation />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">{capitalizeKeyword}</h1>
            <p className="text-muted-foreground">{pageDescription}</p>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.heroHeadline,
    description: content.heroSubtitle,
    url: canonicalUrl,
    author: { '@type': 'Organization', name: 'FranchiseLeadsPro' },
    publisher: { '@type': 'Organization', name: 'FranchiseLeadsPro' },
    mainEntityOfPage: canonicalUrl,
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/70 mb-5">
              {content.heroEyebrow}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {content.heroHeadline}
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
              {content.heroSubtitle}
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-base font-semibold"
              onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
            >
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {content.intro.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Unique angle cards */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How our approach is different
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {content.uniqueAngle.map((u) => (
                <div key={u.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{u.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{u.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Long-form sections */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-14">
            {content.sections.map((s, i) => (
              <article key={i}>
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">{s.h2}</h2>
                <div className="space-y-4">
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="text-base md:text-lg leading-relaxed text-foreground/90">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Who this is for
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {content.whoFor.map((w) => (
                <div key={w} className="flex items-start gap-3 bg-card border border-border rounded-lg p-5">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground leading-relaxed">{w}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How we work</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {content.process.map((p, i) => (
                <div key={p.step} className="bg-card border border-border rounded-xl p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                    Step {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{p.step}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-5">
              {content.faqs.map((f) => (
                <div key={f.q} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-5 text-foreground">Related reading</h2>
            <div className="flex flex-wrap gap-3">
              {content.internalLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="px-4 py-2 rounded-full border border-border bg-card text-sm text-foreground hover:bg-muted transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want a direct conversation about {capitalizeKeyword.toLowerCase()}?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              We will give you a real opinion in thirty minutes — and tell you if we think this is not the right work for your stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-base font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Book a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-semibold border-white text-white hover:bg-white hover:text-primary"
                onClick={() => (window.location.href = '/contact')}
              >
                Send a Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
