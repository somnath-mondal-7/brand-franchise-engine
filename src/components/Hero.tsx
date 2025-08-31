import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/30 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Trusted by 640+ Franchise Professionals</span>
              </div>

              {/* Headlines */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-brand-navy leading-tight">
                  We Don't Just
                  <span className="block text-transparent bg-clip-text bg-gradient-primary">
                    Generate Leads
                  </span>
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy">
                  We Build Brands
                </h2>
              </div>

              {/* Subheadline */}
              <p className="text-xl text-brand-gray leading-relaxed max-w-lg">
                Transform your franchise business with high-quality leads and powerful brand positioning that dominates the market.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary hover:shadow-elegant text-lg px-8 py-6">
                    Start Your Growth <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6 hover:bg-accent group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Interactive Visual */}
            <div className="relative animate-slide-up">
              <div className="relative bg-gradient-secondary rounded-3xl p-8 shadow-elegant">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all hover:-translate-y-2 group cursor-pointer">
                    <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">640+</div>
                    <div className="text-sm text-brand-gray">Clients Served</div>
                  </div>
                  <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all hover:-translate-y-2 group cursor-pointer">
                    <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">297K+</div>
                    <div className="text-sm text-brand-gray">Leads Generated</div>
                  </div>
                </div>
                
                {/* Process Flow */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-4 bg-card rounded-xl shadow-card hover:shadow-elegant transition-all group">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">1</div>
                    <span className="text-brand-gray group-hover:text-brand-navy transition-colors">Analyze & Target</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-card rounded-xl shadow-card hover:shadow-elegant transition-all group">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">2</div>
                    <span className="text-brand-gray group-hover:text-brand-navy transition-colors">Qualify Prospects</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-card rounded-xl shadow-card hover:shadow-elegant transition-all group">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">3</div>
                    <span className="text-brand-gray group-hover:text-brand-navy transition-colors">Deliver Results</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/30 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;