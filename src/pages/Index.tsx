import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import IndiaNav from "@/components/india/IndiaNav";
import TestimonialsSection from "@/components/TestimonialsSection";
import PressFeatures from "@/components/PressFeatures";
import FinalCTASection from "@/components/FinalCTASection";
import PhilosophyBlock from "@/components/PhilosophyBlock";
import IndiaFooter from "@/components/india/IndiaFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Franchise Lead Generation Agency | FranchiseLeadsPro</title>
        <meta name="description" content="FranchiseLeadsPro helps franchisors, franchise consultants & brokers generate qualified buyer leads through LinkedIn marketing, social media & web development. USA, India, UK & worldwide." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/" />
        <meta property="og:title" content="Franchise Lead Generation Agency | FranchiseLeadsPro" />
        <meta property="og:description" content="FranchiseLeadsPro helps franchisors, franchise consultants & brokers generate qualified buyer leads through LinkedIn marketing, social media & web development. USA, India, UK & worldwide." />
        <meta property="og:url" content="https://www.franchiseleadspro.com/" />
        <meta property="og:type" content="website" />
        {/* WebSite schema with Sitelinks Searchbox */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "FranchiseLeadsPro",
            "url": "https://www.franchiseleadspro.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.franchiseleadspro.com/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
        {/* ProfessionalService schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "FranchiseLeadsPro",
            "url": "https://www.franchiseleadspro.com",
            "telephone": "+14244455334",
            "description": "World-leading franchise-focused marketing and IT solutions agency. We help franchisors, franchise consultants, and franchise brands connect with qualified investors.",
            "priceRange": "$$",
            "openingHours": "Mo-Fr 09:00-18:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Franchise Marketing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LinkedIn Marketing for Franchise Lead Generation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing for Franchises" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Franchise Website Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO & Digital Marketing for Franchises" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Franchise Lead Generation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IT Services & App Development for Franchises" } },
              ],
            },
          })}
        </script>
        {/* Homepage FAQPage schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is franchise lead generation?",
                "acceptedAnswer": { "@type": "Answer", "text": "Franchise lead generation is the process of attracting and qualifying potential franchise investors or buyers who are interested in purchasing a franchise. It involves targeted marketing strategies including LinkedIn outreach, social media advertising, SEO, and content marketing to connect franchisors with qualified prospects." },
              },
              {
                "@type": "Question",
                "name": "How does FranchiseLeadsPro generate franchise leads?",
                "acceptedAnswer": { "@type": "Answer", "text": "FranchiseLeadsPro uses a multi-channel approach including LinkedIn targeted outreach, Facebook and Instagram ad campaigns, Google PPC, SEO, and franchise website development to generate pre-qualified franchise buyer leads for franchisors, franchise consultants, and franchise brokers worldwide." },
              },
              {
                "@type": "Question",
                "name": "How quickly can I expect franchise leads after starting a campaign?",
                "acceptedAnswer": { "@type": "Answer", "text": "FranchiseLeadsPro clients typically receive their first qualified franchise leads within 30 days of campaign launch. Results vary based on target market, budget, and franchise opportunity." },
              },
              {
                "@type": "Question",
                "name": "Which countries does FranchiseLeadsPro serve?",
                "acceptedAnswer": { "@type": "Answer", "text": "FranchiseLeadsPro provides franchise lead generation services in the USA (all 50 states), India, UK, Canada, Australia, Dubai & UAE, Kuwait, and other markets worldwide." },
              },
            ],
          })}
        </script>
      </Helmet>

      <IndiaNav />
      <main>
        <Hero />
        <PressFeatures variant="strip" />
        <TestimonialsSection />
        <PressFeatures limit={2} showViewAll />
        <PhilosophyBlock />
        <FinalCTASection />
      </main>
      <IndiaFooter />
    </div>
  );
};

export default Index;
