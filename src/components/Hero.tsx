import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroHandshake from "@/assets/hero-handshake.webp";

const Hero = () => {
  const openCal = () => window.open("https://calendly.com/lets-build-your-brand", "_blank");

  return (
    <section className="relative bg-background pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Subtle navy corner accent */}
      <div className="absolute -top-32 -right-32 w-[460px] h-[460px] rounded-full bg-accent/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[460px] h-[460px] rounded-full bg-primary/[0.05] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-semibold tracking-[0.18em] uppercase text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            USA Franchise Lead Generation Agency
          </span>
        </div>

        {/* Headline — bold editorial, navy + orange */}
        <h1 className="text-center font-extrabold tracking-tight text-accent leading-[0.95] text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-5xl mx-auto">
          Franchise Leads in the USA.
          <br />
          <span className="text-primary">Qualified Buyers, Delivered.</span>
        </h1>

        {/* Sub */}
        <p className="mt-7 text-center text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The franchise lead generation agency built for U.S. franchisors, brokers, and consultants — connecting your brand with serious franchise buyers across all 50 states.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            size="lg"
            onClick={openCal}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-13 py-4 text-base font-semibold shadow-orange transition-all group"
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

        {/* Hero image */}
        <div className="mt-14 sm:mt-20 max-w-3xl mx-auto">
          <div className="relative">
            <img
              src={heroHandshake}
              alt="USA franchise lead generation agency — connecting franchisors and brokers with qualified franchise buyers nationwide"
              width="1024"
              height="1024"
              loading="eager"
              decoding="async"
              // @ts-ignore - valid HTML attribute
              fetchpriority="high"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
