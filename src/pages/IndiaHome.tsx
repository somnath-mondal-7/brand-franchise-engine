import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import IndiaNav from "@/components/india/IndiaNav";
import TestimonialsSection from "@/components/TestimonialsSection";
import PressFeatures from "@/components/PressFeatures";
import FinalCTASection from "@/components/FinalCTASection";
import PhilosophyBlock from "@/components/PhilosophyBlock";
import IndiaFooter from "@/components/india/IndiaFooter";

const IndiaHome = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Franchise Lead Generation Agency USA | FranchiseLeadsPro</title>
        <meta
          name="description"
          content="Premium franchise marketing agency for US consultants and franchisors. Qualified investor conversations through sharp positioning, LinkedIn, and high-converting websites."
        />
        <link rel="canonical" href="https://www.franchiseleadspro.com/" />
        <meta property="og:title" content="Franchise Lead Generation Agency USA | FranchiseLeadsPro" />
        <meta
          property="og:description"
          content="Premium franchise marketing partner — turning sharp positioning into qualified investor conversations."
        />
        <meta property="og:url" content="https://www.franchiseleadspro.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "FranchiseLeadsPro",
            "areaServed": "US",
            "url": "https://www.franchiseleadspro.com/",
            "slogan": "Attention First. Growth Next.",
          })}
        </script>
      </Helmet>

      <IndiaNav />

      <main>
        <Hero />
        <PressFeatures variant="strip" />
        <TestimonialsSection />
        <PressFeatures />
        <PhilosophyBlock />
        <FinalCTASection />
      </main>

      <IndiaFooter />
    </div>
  );
};

export default IndiaHome;
