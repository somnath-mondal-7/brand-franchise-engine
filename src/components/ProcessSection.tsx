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
    <section id="process" className="py-24 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-6">Our Proven Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to execution, see how we bring life in your business
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-12 h-px bg-gradient-to-r from-primary/30 to-primary/10 z-0" />
                )}
                
                {/* Step Card */}
                <div className="relative bg-card rounded-3xl p-10 shadow-card hover:shadow-hover transition-all duration-500 transform hover:-translate-y-2 border border-border/50">
                  {/* Step Number */}
                  <div className="relative mb-8">
                    <div className="text-8xl font-black text-primary/10 leading-none">
                      {step.number}
                    </div>
                    <div className="absolute top-4 left-2 text-3xl font-bold text-primary">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;