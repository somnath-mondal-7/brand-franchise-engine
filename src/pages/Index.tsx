import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedServices from "@/components/FeaturedServices";
import QuickStats from "@/components/QuickStats";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <QuickStats />
      <FeaturedServices />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;