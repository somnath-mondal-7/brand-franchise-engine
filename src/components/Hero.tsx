import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Trusted by 640+ Franchise Professionals</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            We Don't Just Generate
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Leads, We Build Brands
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dominate the franchise market with high-quality leads and powerful brand positioning that makes real noise for franchise consultants and franchisors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-white text-brand-navy hover:bg-blue-50 shadow-elegant px-8 py-4 text-lg font-semibold"
            >
              Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              View Our Process
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-blue-200 mr-2" />
                <span className="text-3xl font-bold text-white">640+</span>
              </div>
              <p className="text-blue-100">Happy Clients</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center justify-center mb-2">
                <Target className="w-6 h-6 text-blue-200 mr-2" />
                <span className="text-3xl font-bold text-white">297K+</span>
              </div>
              <p className="text-blue-100">Qualified Leads</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-blue-200 mr-2" />
                <span className="text-3xl font-bold text-white">95%</span>
              </div>
              <p className="text-blue-100">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;