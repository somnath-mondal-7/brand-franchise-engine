const BenefitsSection = () => {
  const benefits = [
    {
      title: "Qualified Leads",
      description: "We target real prospects actively looking for franchise opportunities to increase conversion chances."
    },
    {
      title: "Online Visibility", 
      description: "We boost your presence on search, social, and niche platforms to attract consistent franchise inquiries."
    },
    {
      title: "Faster Result",
      description: "We execute cold calls, emails, and LinkedIn outreach to connect you quickly with interested leads."
    },
    {
      title: "Brand Trust",
      description: "We build your authority and online reputation to make potential investors trust your brand."
    },
    {
      title: "Sales System",
      description: "We set up CRM and automate follow-ups, so no lead slips through the cracks."
    },
    {
      title: "Risk-Free Start", 
      description: "We offer a 1-month satisfaction guarantee with a 7-day refund policy for full peace of mind."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience the Advantage</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advantages of partnering with our marketing agency
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;