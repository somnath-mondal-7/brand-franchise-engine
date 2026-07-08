import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import shawnGurnVideo from "@/assets/videos/shawn-gurn-review.mp4.asset.json";

import johnThompsonVideo from "@/assets/videos/john-thompson-review.mp4.asset.json";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "Franchise Consultant",
      company: "Mitchell Franchise Group • Dallas, TX",
      rating: 5,
      text: "Solid, steady pipeline. I usually get somewhere between 12 and 20 qualified appointments a month — not all of them close, but the ones that do are worth the work. Honest team, honest reporting.",
      results: "Qualified appointments",
      industry: "Multi-Unit Development"
    },
    {
      name: "Michael Rodriguez",
      title: "CEO & Franchisor",
      company: "GrowthMax Franchising • Austin, TX",
      rating: 5,
      text: "The brand positioning work made a real difference in how candidates perceive us before the first call. Can't put a magic number on it, but our discovery conversations feel sharper now.",
      results: "Stronger brand presence",
      industry: "Food & Beverage"
    },
    {
      name: "Jennifer Chen",
      title: "Franchise Development Director",
      company: "Elite Franchise Solutions • San Jose, CA",
      rating: 4,
      text: "Good experience overall. Some months the lead flow is great, other months it's quieter — that's just the nature of this business. What matters is the qualification work is consistent.",
      results: "Consistent qualification",
      industry: "Business Services"
    },
    {
      name: "David Thompson",
      title: "Franchise Consultant",
      company: "Thompson Franchise Partners • Columbus, OH",
      rating: 5,
      text: "I was skeptical going in — I've been doing this 30+ years and I've heard every pitch. They didn't oversell. They quietly delivered a handful of serious candidates each month, and a few have already signed.",
      results: "Serious candidates",
      industry: "Retail & Services"
    },
    {
      name: "Lisa Anderson",
      title: "VP of Franchise Development",
      company: "NextGen Franchises • Minneapolis, MN",
      rating: 4,
      text: "The brand work helped us look more polished against bigger competitors. Lead quality has been good — not every appointment is a perfect fit, but the average is well above what we used to see from portals.",
      results: "Better positioning",
      industry: "Health & Fitness"
    },
    {
      name: "Robert Johnson",
      title: "Franchise Broker",
      company: "Johnson Business Brokers • St. Louis, MO",
      rating: 5,
      text: "Pipeline stays warm. I'm not getting flooded — and I don't want to be. I want 10 to 15 real conversations a month with funded buyers, and that's roughly what shows up.",
      results: "Funded buyers",
      industry: "Business Brokerage"
    },
    {
      name: "Amanda Reyes",
      title: "Independent Franchise Consultant",
      company: "Reyes Franchise Advisory • Phoenix, AZ",
      rating: 5,
      text: "As a one-person shop, I needed support without the chaos of a big agency. They book me a manageable number of vetted calls each week and stay out of the way. Exactly what I was looking for.",
      results: "Vetted calls",
      industry: "Independent Consulting"
    },
    {
      name: "Daniel Brooks",
      title: "Franchise Development Director",
      company: "Brooks Brands USA • Atlanta, GA",
      rating: 4,
      text: "Mixed results in the first 60 days, but it picked up once they understood our brand voice. Now the candidates they bring genuinely fit our culture — that's harder to find than people think.",
      results: "Culture-fit leads",
      industry: "Multi-Brand Franchisor"
    },
    {
      name: "Priya Natarajan",
      title: "VP Franchise Growth",
      company: "Sunrise QSR Group • Chicago, IL",
      rating: 5,
      text: "Prospects show up to discovery calls already familiar with our concept. That alone has changed how my team works. Volume is modest but quality is consistently strong.",
      results: "Warm discovery calls",
      industry: "Quick Service Restaurants"
    },
    {
      name: "Marcus Hill",
      title: "Independent Franchise Broker, IFPG",
      company: "Hill Franchise Group • Charlotte, NC",
      rating: 5,
      text: "Straightforward team. They told me upfront to expect maybe 10 to 20 qualified intros a month, not a fire hose, and that's what I've gotten. Refreshing in an industry full of inflated promises.",
      results: "Honest expectations",
      industry: "Independent Brokerage"
    },
    {
      name: "Elena Vasquez",
      title: "Franchise Consultant",
      company: "FranBridge Partners • Miami, FL",
      rating: 4,
      text: "Communication is where they really stand out. Weekly check-ins, clear notes on each candidate, and someone always picks up the phone. The leads themselves are a mix — some excellent, some average — but the support makes up for it.",
      results: "Strong communication",
      industry: "Franchise Consulting"
    },
    {
      name: "Gregory Patel",
      title: "Founder & CEO",
      company: "Patel Fitness Concepts • Houston, TX",
      rating: 5,
      text: "We're an emerging US franchisor and they treated our brand seriously from day one. Not every introduction has converted, but a few have moved into signed agreements — which is all I really needed at this stage.",
      results: "Quality introductions",
      industry: "Health & Fitness Franchisor"
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Client Testimonials | FranchiseLeadsPro Results & Reviews</title>
        <meta name="description" content="See what franchisors, consultants, and franchise brands say about working with FranchiseLeadsPro. Real results, real leads." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/testimonials" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <IndiaNav />
      
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

      {/* Video Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-4">
                Video Reviews
              </Badge>
              <h2 className="text-4xl font-bold text-brand-navy mb-6">Video Testimonials</h2>
              <p className="text-xl text-brand-gray">
                Hear directly from our clients about their experience working with us.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto justify-items-center">
              {[
                { name: "Shawn Gurn", title: "HOF Franchise Consulting Company • IFPG Member", videoSrc: shawnGurnVideo.url, fit: "contain" as const },
                { name: "Mike Thompson", title: "Franchise Development Leader", videoSrc: johnThompsonVideo.url, fit: "cover" as const },
              ].map((video, index) => (
                <Card key={index} className="w-full max-w-sm overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[3/4] sm:aspect-[4/5] bg-black relative overflow-hidden">
                    <video
                      className={`w-full h-full bg-black ${video.fit === "cover" ? "object-cover" : "object-contain"}`}
                      controls
                      playsInline
                      preload="metadata"
                      crossOrigin="anonymous"
                    >
                      <source src={video.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-base font-bold text-foreground">{video.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{video.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Text Testimonials Grid */}
      <section className="py-20 bg-muted/20">
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
                    <div className="flex items-start justify-between">
                      <Quote className="w-8 h-8 text-primary/30" />
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {testimonial.results}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-brand-gray leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-border pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-brand-navy group-hover:text-primary transition-colors">
                            {testimonial.name}
                          </h3>
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
              Join franchise professionals who have transformed their businesses with our services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="p-8 text-center hover:shadow-elegant transition-all">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Lead Generation</h3>
                <p className="text-brand-gray mb-6">
                  Get 50-100+ qualified franchise leads per month with our proven system.
                </p>
                <Link to="/services">
                  <Button variant="outline" className="hover:bg-primary hover:text-white">
                    View Lead Generation Services <ArrowRight className="ml-2 h-4 w-4" />
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
                    View Brand Building Services <ArrowRight className="ml-2 h-4 w-4" />
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

      <IndiaFooter />
    </div>
  );
};

export default Testimonials;