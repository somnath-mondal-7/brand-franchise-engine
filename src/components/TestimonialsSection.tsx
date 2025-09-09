const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michale Finch",
      title: "Franchise Broker iFranchise LLC",
      content: "FranchiseLeadsHQ has transformed our lead generation process. The quality of leads we receive is exceptional."
    },
    {
      name: "Jesica Thompson", 
      title: "Consultant Franchise Solutions Inc.",
      content: "Working with FranchiseLeadsHQ has been a game-changer for our business. Their approach is professional and results-driven."
    },
    {
      name: "Dion Garnett",
      title: "Franchise Broker, NearfranchisePro Inc.",
      content: "The team at FranchiseLeadsHQ understands the franchise industry like no other. Highly recommended."
    },
    {
      name: "Jonarthan Morgan",
      title: "CEO, Nextfranh Corp",
      content: "Their brand building services have helped us establish a strong presence in the market. Excellent work."
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
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600 font-medium">{testimonial.title}</p>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;