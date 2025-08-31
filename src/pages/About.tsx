import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Results-Driven",
      description: "Every strategy we implement is designed to deliver measurable results for your franchise business."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Client-Focused",
      description: "Your success is our success. We work closely with each client to understand their unique needs."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Industry Expertise",
      description: "Deep knowledge of the franchise industry helps us create strategies that actually work."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Continuous Growth",
      description: "We constantly evolve our methods to stay ahead of market trends and deliver better results."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-accent/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-navy leading-tight">
              About FranchiseLeads HQ
            </h1>
            <p className="text-xl text-brand-gray leading-relaxed">
              We're the franchise industry's most trusted partner for lead generation and brand building, 
              helping consultants and franchisors achieve extraordinary growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-brand-navy">Our Mission</h2>
                <p className="text-lg text-brand-gray leading-relaxed">
                  We believe every franchise professional deserves access to high-quality leads and powerful 
                  brand positioning. Our mission is to eliminate the guesswork from franchise marketing 
                  and deliver predictable, scalable growth.
                </p>
                <p className="text-lg text-brand-gray leading-relaxed">
                  Since our founding, we've helped over 640 franchise professionals generate 297,000+ 
                  qualified leads while building brands that command attention in their markets.
                </p>
              </div>
              <div className="bg-gradient-secondary p-8 rounded-3xl shadow-card">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">640+</div>
                    <div className="text-sm text-brand-gray">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">297K+</div>
                    <div className="text-sm text-brand-gray">Leads Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-brand-gray">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-brand-gray">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">Our Core Values</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              These principles guide everything we do and ensure we deliver exceptional results for every client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl text-brand-navy">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">Why Choose Us?</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Our team combines deep franchise industry knowledge with cutting-edge marketing strategies 
              to deliver results that matter.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Franchise Industry Expertise</h3>
              <p className="text-brand-gray leading-relaxed">
                We understand the unique challenges franchise consultants and franchisors face. 
                Our strategies are built specifically for the franchise industry, not adapted from generic marketing playbooks.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Proven Track Record</h3>
              <p className="text-brand-gray leading-relaxed">
                With 640+ satisfied clients and 297,000+ qualified leads generated, our results speak for themselves. 
                We don't just promise growth—we deliver it consistently.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Comprehensive Approach</h3>
              <p className="text-brand-gray leading-relaxed">
                We don't just generate leads—we build brands. Our holistic approach ensures your franchise 
                business grows sustainably with a strong market presence that attracts quality prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;