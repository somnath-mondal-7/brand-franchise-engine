import { Link } from "react-router-dom";
import { ChevronRight, MapPin } from "lucide-react";

const InternalLinkingSection = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            USA Franchise Lead Generation Services by Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide targeted franchise lead generation services across all major US markets. 
            Choose your location to learn more about our localized approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link 
            to="/franchise-leads-usa" 
            className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-card-foreground">USA Franchise Leads</h3>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground">
              Comprehensive franchise lead generation across all 50 US states with proven results.
            </p>
          </Link>

          <Link 
            to="/franchise-leads-uk" 
            className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-card-foreground">UK Franchise Leads</h3>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground">
              Expert franchise lead generation tailored for the UK market and regulations.
            </p>
          </Link>

          <Link 
            to="/franchise-leads-canada" 
            className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-card-foreground">Canada Franchise Leads</h3>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground">
              Targeted Canadian franchise lead generation with local market expertise.
            </p>
          </Link>

          <Link 
            to="/franchise-leads-australia" 
            className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-card-foreground">Australia Franchise Leads</h3>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground">
              Australian franchise lead generation with deep understanding of local markets.
            </p>
          </Link>

          <Link 
            to="/franchise-leads-dubai" 
            className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-card-foreground">Dubai Franchise Leads</h3>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground">
              Middle East franchise lead generation focused on Dubai's growing market.
            </p>
          </Link>

          <Link 
            to="/franchise-leads-india" 
            className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-card-foreground">India Franchise Leads</h3>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground">
              Indian franchise lead generation with expertise in diverse regional markets.
            </p>
          </Link>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Looking for franchise leads in a specific location? We serve franchise consultants and franchisors worldwide.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
          >
            Contact us for custom location targeting
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InternalLinkingSection;