import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "LinkedIn marketing",
      description: "We run strategic campaigns to engage qualified professionals and generate serious franchise inquiries. To build your network with valuable candidates.",
      type: "visual"
    },
    {
      title: "Personalised cold outreach",
      description: "We send cold emails to upto 297,000 professionals. Our clear messaging moves cold leads into serious investors.",
      stat: "297k+",
      statLabel: "Subject Message",
      type: "stat"
    },
    {
      title: "Content creation", 
      description: "We craft engaging eye catchy reels, podcasts, graphic designing, articles, blogs for LinkedIn, Twitter, YouTube to build brand and authority.",
      type: "content"
    },
    {
      title: "Social media marketing",
      description: "We bulk message real people on Instagram, Twitter & more—not for likes, but to drive leads and real interest.",
      platforms: [
        { name: "SMS", icon: "sms.com" },
        { name: "Twitter", icon: "x.com" },
        { name: "Instagram", icon: "instragram.com" },
        { name: "Facebook", icon: "facebook.com" },
        { name: "WhatsApp", icon: "whatsapp.com" },
        { name: "Gmail", icon: "Gmail.com" },
        { name: "Make", icon: "make.com" }
      ],
      type: "platforms"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-6">Our Top Marketing Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
            Innovative solutions tailored to meet your unique business needs
          </p>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            Sure, we offer a range of digital marketing services including SEO, social media management, and PPC advertising. Which service are you interested in?
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content Side */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="text-4xl font-bold text-foreground leading-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {service.stat && (
                  <div className="inline-block p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {service.stat}
                    </div>
                    <div className="text-muted-foreground font-medium">{service.statLabel}</div>
                  </div>
                )}
              </div>

              {/* Visual Side */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {/* Stat Display */}
                {service.type === "stat" && (
                  <div className="bg-gradient-to-br from-card to-muted/20 rounded-3xl p-12 text-center shadow-card hover:shadow-hover transition-all duration-500">
                    <div className="text-7xl font-black text-primary mb-6">
                      {service.stat}
                    </div>
                    <div className="text-muted-foreground text-xl font-medium mb-8">{service.statLabel}</div>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 text-foreground font-medium shadow-sm">Subject</div>
                      <div className="bg-white rounded-xl p-4 text-foreground font-medium shadow-sm">Message</div>
                    </div>
                  </div>
                )}

                {/* Platforms Display */}
                {service.type === "platforms" && (
                  <div className="grid grid-cols-4 gap-6">
                    {service.platforms?.map((platform, pIndex) => (
                      <div key={pIndex} className="aspect-square bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl flex items-center justify-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/30">
                        <img 
                          src={`https://logo.clearbit.com/${platform.icon}?size=500`} 
                          alt={platform.name}
                          className="w-10 h-10"
                          onError={(e) => {
                            e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="%23f3f4f6" rx="8"/><text x="20" y="26" text-anchor="middle" fill="%236b7280" font-size="10" font-weight="bold">${platform.name.charAt(0)}</text></svg>`;
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Content Creation Visual */}
                {service.type === "content" && (
                  <div className="bg-gradient-to-br from-card to-muted/20 rounded-3xl p-16 flex items-center justify-center shadow-card">
                    <div className="text-center text-muted-foreground">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </div>
                      <p className="text-lg font-medium">Content Creation Visual</p>
                    </div>
                  </div>
                )}

                {/* Default LinkedIn Visual */}
                {service.type === "visual" && (
                  <div className="bg-gradient-to-br from-card to-muted/20 rounded-3xl p-16 flex items-center justify-center shadow-card">
                    <div className="text-center text-muted-foreground">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <p className="text-lg font-medium">LinkedIn Marketing</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;