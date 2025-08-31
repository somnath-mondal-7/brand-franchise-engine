import { TrendingUp, Users, Target, Award } from "lucide-react";

const QuickStats = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      number: "640+",
      label: "Franchise Professionals",
      description: "Trust our expertise"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      number: "297K+",
      label: "Qualified Leads",
      description: "Generated successfully"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      number: "95%",
      label: "Success Rate",
      description: "Client satisfaction"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      number: "3x",
      label: "ROI Average",
      description: "Return on investment"
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-brand-navy mb-2 group-hover:text-primary transition-colors">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-brand-navy mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-brand-gray">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;