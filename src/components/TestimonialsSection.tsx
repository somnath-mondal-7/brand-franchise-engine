const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dion Garnett",
      title: "Franchise Broker, NearfranchisePro Inc.",
      videoSrc: "/videos/dion-garnett-review.mp4"
    },
    {
      name: "Jesica Thompson", 
      title: "Consultant Franchise Solutions Inc.",
      videoSrc: "/videos/jesica-thompson-review.mp4"
    },
    {
      name: "Jonarthan Morgan",
      title: "CEO, Nextfranh Corp",
      videoSrc: "/videos/jonathan-morgan-review.mp4"
    },
    {
      name: "Bob Vearling",
      title: "Franchise Broker, iFranchise LLC",
      videoSrc: "https://drive.google.com/uc?export=download&id=1R9aNfy9Hl2nkFu8WMey-bRUii2ttOBnS"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">They said it, not us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our clients have transformed their businesses with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group max-w-sm mx-auto"
              >
                <div className="aspect-square bg-gray-900 relative">
                  {testimonial.videoSrc.includes('drive.google.com') ? (
                    <iframe
                      className="w-full h-full"
                      src={(() => {
                        const url = testimonial.videoSrc;
                        let id: string | null = null;
                        const viewMatch = url.match(/\/d\/([^/]+)\//);
                        if (viewMatch) id = viewMatch[1];
                        const idParamMatch = url.match(/[?&]id=([^&]+)/);
                        if (!id && idParamMatch) id = idParamMatch[1];
                        return id ? `https://drive.google.com/file/d/${id}/preview` : url;
                      })()}
                      title={`${testimonial.name} testimonial video`}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                    >
                      <source src={testimonial.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{testimonial.name}</h4>
                  <p className="text-blue-600 font-medium text-sm">{testimonial.title}</p>
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