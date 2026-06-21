import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import IndiaNav from "@/components/india/IndiaNav";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import IndiaFooter from "@/components/india/IndiaFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Franchise Lead Generation Agency | FranchiseLeadsPro</title>
        <meta name="description" content="Premium franchise marketing agency for US consultants and franchisors. Qualified investor conversations through LinkedIn, social, and high-converting websites." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "FranchiseLeadsPro",
            "url": "https://www.franchiseleadspro.com",
            "description": "Premium franchise marketing agency helping consultants and franchisors generate qualified investor conversations."
          })}
        </script>
      </Helmet>

      <IndiaNav />
      <main>
        <Hero />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <IndiaFooter />
    </div>
  );
};

export default Index;
