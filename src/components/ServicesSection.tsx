import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "LinkedIn marketing",
      description: "We run strategic campaigns to engage qualified professionals and generate serious franchise inquiries. To build your network with valuable candidates.",
      images: [
        "https://framerusercontent.com/images/LsJGvkbYbF1y4ifkFrjeNfRfzYM.jpg",
        "https://framerusercontent.com/images/5P0eN6qtSxQg8Lrk6rw2GR9e7eI.jpg",
        "https://framerusercontent.com/images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg"
      ]
    },
    {
      title: "Personalised cold outreach",
      description: "We send cold emails to upto 297,000 professionals. Our clear messaging moves cold leads into serious investors.",
      stat: "297k+",
      statLabel: "Subject Message"
    },
    {
      title: "Content creation", 
      description: "We craft engaging eye catchy reels, podcasts, graphic designing, articles, blogs for LinkedIn, Twitter, YouTube to build brand and authority."
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
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Top Marketing Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions tailored to meet your unique business needs
          </p>
          <p className="text-gray-600 mt-4">
            Sure, we offer a range of digital marketing services including SEO, social media management, and PPC advertising. Which service are you interested in?
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="text-3xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                {service.stat && (
                  <div className="inline-block">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {service.stat}
                    </div>
                    <div className="text-gray-600">{service.statLabel}</div>
                  </div>
                )}
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {service.images && (
                  <div className="grid grid-cols-2 gap-4">
                    {service.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}

                {service.stat && !service.images && (
                  <div className="bg-gray-50 rounded-2xl p-8 text-center">
                    <div className="text-6xl font-bold text-blue-600 mb-4">
                      {service.stat}
                    </div>
                    <div className="text-gray-600 text-lg">{service.statLabel}</div>
                    <div className="mt-6 space-y-2">
                      <div className="bg-white rounded p-3 text-gray-700">Subject</div>
                      <div className="bg-white rounded p-3 text-gray-700">Message</div>
                    </div>
                  </div>
                )}

                {service.platforms && (
                  <div className="grid grid-cols-4 gap-4">
                    {service.platforms.map((platform, pIndex) => (
                      <div key={pIndex} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        <img 
                          src={`https://logo.clearbit.com/${platform.icon}?size=500`} 
                          alt={platform.name}
                          className="w-8 h-8"
                          onError={(e) => {
                            e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" fill="%23e5e7eb"/><text x="16" y="20" text-anchor="middle" fill="%236b7280" font-size="8">${platform.name.charAt(0)}</text></svg>`;
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {!service.images && !service.stat && !service.platforms && (
                  <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                      <p>Content Creation Visual</p>
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