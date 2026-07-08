import shawnGurnVideo from "@/assets/videos/shawn-gurn-review.mp4.asset.json";
import johnThompsonVideo from "@/assets/videos/john-thompson-review.mp4.asset.json";

const TestimonialsSection = () => {
  const videoTestimonials = [
    {
      name: "Shawn Gurn",
      title: "HOF Franchise Consulting Company • IFPG Member",
      videoSrc: shawnGurnVideo.url,
    },
    {
      name: "Mike Thompson",
      title: "Franchise Development Leader",
      videoSrc: johnThompsonVideo.url,
    },
  ];

  const textTestimonials = [
    {
      name: "Robert Williams",
      title: "Sr. Franchise Consultant, GrowthPath Advisory • Dallas, TX",
      quote:
        "Steady, qualified appointments on the calendar each month — usually somewhere between 12 and 20 conversations worth taking. Not every one closes, but they're real people with real capital.",
    },
    {
      name: "Amanda Reyes",
      title: "Independent Franchise Consultant • Phoenix, AZ",
      quote:
        "As a solo consultant my time matters. Their team handles the front-end work and books me a handful of vetted calls each week. It's been a solid addition to what I already do.",
    },
    {
      name: "Daniel Brooks",
      title: "Franchise Development Director, Brooks Brands USA • Atlanta, GA",
      quote:
        "Honest take — some months are stronger than others, but the candidates generally fit our brand. That's more than I can say about most lead vendors I've worked with over the years.",
    },
    {
      name: "Priya Natarajan",
      title: "VP Franchise Growth, Sunrise QSR Group • Chicago, IL",
      quote:
        "Discovery calls feel different. Prospects show up having read about us, which makes my job easier. The volume isn't huge but the conversations are the right ones.",
    },
    {
      name: "Marcus Hill",
      title: "Independent Franchise Broker, IFPG • Charlotte, NC",
      quote:
        "Straightforward team. They told me what to expect — a handful of qualified intros a month, not a flood — and that's what I've gotten. No over-promising.",
    },
    {
      name: "Elena Vasquez",
      title: "Franchise Consultant, FranBridge Partners • Miami, FL",
      quote:
        "What I appreciate most is the communication. Weekly check-ins, clear notes on each candidate, and they actually pick up the phone. The appointments themselves have been a mixed bag in quality, but the good ones are very good.",
    },
    {
      name: "Kevin O'Sullivan",
      title: "Franchise Broker, FBA Member • Boston, MA",
      quote:
        "I've referred several candidates from their pipeline. Close rate has been better than most sources I use. Not every intro is a fit, but the qualification work up front saves me time.",
    },
    {
      name: "Rachel Kim",
      title: "Managing Broker, Summit Commercial Realty • Seattle, WA",
      quote:
        "We partner with them on tenant-rep deals for franchise concepts. Their candidates are funded and serious about timelines — that's what landlords want to see.",
    },
    {
      name: "Tom Hargrove",
      title: "Principal Broker, Hargrove Business Brokers • Nashville, TN",
      quote:
        "After 40+ years in this business, I'm hard to impress. They're not magic, but they consistently put buyers with verified capital in front of me. That alone is rare.",
    },
    {
      name: "Nicole Carter",
      title: "Commercial Real Estate Broker, Carter Retail Group • Denver, CO",
      quote:
        "Their franchise candidates show up to site tours informed. Some weeks are quieter than others, but when they deliver, the leads are sharp and ready to move.",
    },
    {
      name: "James Whitaker",
      title: "Senior Franchise Broker, IFPG • Tampa, FL",
      quote:
        "Reasonable volume, honest reporting, and the team doesn't disappear after onboarding. That's about all you can ask for in this space.",
    },
  ];

  // Duplicate for seamless loop
  const loopTestimonials = [...textTestimonials, ...textTestimonials];

  return (
    <section className="py-20 sm:py-28 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            Client Results
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3">
            They Said It, Not Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Real franchise professionals. Real results.
          </p>
        </div>

        {/* Video testimonials grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {videoTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border/50 bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[3/4] sm:aspect-[4/5] bg-black relative overflow-hidden">
                <video
                  className="w-full h-full object-cover bg-black"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={testimonial.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="text-base font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal auto-scrolling text testimonials */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex gap-5 w-max animate-marquee">
            {loopTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[340px] sm:w-[400px] flex-shrink-0 rounded-2xl border border-border/50 bg-card p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground/80 leading-relaxed italic mb-3">
                      "{testimonial.quote}"
                    </p>
                    <h4 className="text-sm font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
