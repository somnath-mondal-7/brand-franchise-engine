import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedServices = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Lead Generation",
      description: "High-quality, pre-qualified leads that convert into real franchise opportunities.",
      features: ["Target Market Analysis", "Multi-Channel Outreach", "Lead Qualification", "CRM Integration"],
      link: "/services"
    },
    {
      icon: <Megaphone className="w-12 h-12 text-primary" />,
      title: "Brand Building",
      description: "Strategic brand positioning that makes your franchise stand out in the market.",
      features: ["Brand Strategy", "Content Creation", "Digital Presence", "Market Positioning"],
      link: "/services"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            What We Do Best
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            We specialize in two core areas that transform franchise businesses into market leaders.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-brand-navy group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-brand-gray leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-brand-gray">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to={service.link}>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-gradient-primary hover:shadow-elegant px-8 py-6 text-lg">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;