import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "Franchise Consultant",
      company: "Mitchell Franchise Group",
      rating: 5,
      text: "FranchiseLeads HQ transformed our lead generation completely. We went from 15 leads per month to over 100 qualified prospects. The quality is exceptional and our conversion rate doubled.",
      results: "100+ leads/month",
      industry: "Multi-Unit Development"
    },
    {
      name: "Michael Rodriguez",
      title: "CEO & Franchisor", 
      company: "GrowthMax Franchising",
      rating: 5,
      text: "The brand building work they did for us was game-changing. Our brand recognition improved dramatically, and we're now the go-to choice in our market. ROI was 400% in the first year.",
      results: "400% ROI",
      industry: "Food & Beverage"
    },
    {
      name: "Jennifer Chen",
      title: "Franchise Development Director",
      company: "Elite Franchise Solutions",
      rating: 5,
      text: "Working with FranchiseLeads HQ has been the best business decision we made. Their systematic approach to lead qualification saves us hours each week, and we close more deals than ever.",
      results: "3x more closures",
      industry: "Business Services"
    },
    {
      name: "David Thompson",
      title: "Franchise Consultant",
      company: "Thompson Franchise Partners", 
      rating: 5,
      text: "I was skeptical at first, but the results speak for themselves. In 6 months, we generated over $2M in franchise fees. Their lead quality is unmatched in the industry.",
      results: "$2M+ in fees",
      industry: "Retail & Services"
    },
    {
      name: "Lisa Anderson",
      title: "VP of Franchise Development",
      company: "NextGen Franchises",
      rating: 5,
      text: "The brand positioning strategy they developed helped us stand out in a crowded market. We're now seen as the premium choice, and our average franchise investment increased by 40%.",
      results: "40% higher investment",
      industry: "Health & Fitness"
    },
    {
      name: "Robert Johnson",
      title: "Franchise Broker",
      company: "Johnson Business Brokers",
      rating: 5,
      text: "FranchiseLeads HQ doesn't just deliver leads - they deliver results. Our pipeline is consistently full of qualified prospects, and our team can focus on what we do best: closing deals.",
      results: "Consistent pipeline",
      industry: "Business Brokerage"
    }
  ];

  const stats = [
    { number: "640+", label: "Happy Clients" },
    { number: "297K+", label: "Leads Generated" },
    { number: "95%", label: "Success Rate" },
    { number: "3x", label: "Average ROI" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-accent/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-navy leading-tight">
              Success Stories
            </h1>
            <p className="text-xl text-brand-gray leading-relaxed">
              See how franchise consultants and franchisors are achieving extraordinary growth 
              with our lead generation and brand building services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:text-brand-navy transition-colors">
                  {stat.number}
                </div>
                <div className="text-brand-gray font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-6">What Our Clients Say</h2>
              <p className="text-xl text-brand-gray">
                Real results from real franchise professionals who trust us with their growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 relative overflow-hidden"
                >
                  <CardContent className="p-8 space-y-6">
                    {/* Quote Icon */}
                    <div className="flex items-start justify-between">
                      <Quote className="w-8 h-8 text-primary/30" />
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {testimonial.results}
                      </Badge>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-brand-gray leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="border-t border-border pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-brand-navy group-hover:text-primary transition-colors">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-brand-gray">{testimonial.title}</p>
                          <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.industry}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-brand-navy">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-brand-gray">
              Join 640+ franchise professionals who have transformed their businesses with our services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="p-8 text-center hover:shadow-elegant transition-all">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Lead Generation</h3>
                <p className="text-brand-gray mb-6">
                  Get 50-100+ qualified franchise leads per month with our proven system.
                </p>
                <Link to="/services">
                  <Button variant="outline" className="hover:bg-primary hover:text-white">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-elegant transition-all">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Brand Building</h3>
                <p className="text-brand-gray mb-6">
                  Position your franchise as the market leader with strategic brand development.
                </p>
                <Link to="/services">
                  <Button variant="outline" className="hover:bg-primary hover:text-white">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <h2 className="text-4xl font-bold">Start Your Success Story Today</h2>
            <p className="text-xl opacity-90">
              Book a strategy call to discuss how we can help you achieve similar results.
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary px-8 py-6 text-lg backdrop-blur-sm"
              >
                Book Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;