const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michale Finch",
      title: "Franchise Broker iFranchise LLC",
      videoId: "VIDEO_ID_1", // Replace with actual video ID
      thumbnail: "https://framerusercontent.com/images/testimonial1.jpg"
    },
    {
      name: "Jesica Thompson", 
      title: "Consultant Franchise Solutions Inc.",
      videoId: "VIDEO_ID_2", // Replace with actual video ID
      thumbnail: "https://framerusercontent.com/images/testimonial2.jpg"
    },
    {
      name: "Dion Garnett",
      title: "Franchise Broker, NearfranchisePro Inc.",
      videoId: "VIDEO_ID_3", // Replace with actual video ID
      thumbnail: "https://framerusercontent.com/images/testimonial3.jpg"
    },
    {
      name: "Jonarthan Morgan",
      title: "CEO, Nextfranh Corp",
      videoId: "VIDEO_ID_4", // Replace with actual video ID
      thumbnail: "https://framerusercontent.com/images/testimonial4.jpg"
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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-video bg-gray-900 relative">
                  <iframe
                    className="w-full h-full"
                    src={`https://player.vimeo.com/video/${testimonial.videoId}`}
                    title={`${testimonial.name} Testimonial`}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
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