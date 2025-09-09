const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Analysis & Outreaching",
      description: "We delve deep into your business processes to identify areas for improvements. We start with data-driven Outreaching to find high-intent candidates seeking franchise ownership."
    },
    {
      number: "02", 
      title: "Qualification",
      description: "We filter out the noise. Every candidate is put through our multi-point vetting system, ensuring you only engage with serious, viable prospects ready to move forward."
    },
    {
      number: "03",
      title: "Introduction", 
      description: "The final step is a seamless connection. We facilitate warm introductions between vetted candidates with you. We'll update every leads on your CRM."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to execution, see how we bring life in your business
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="text-6xl font-bold text-blue-100 mb-4">
                  {step.number}
                </div>
                
                {/* Step Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-blue-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;