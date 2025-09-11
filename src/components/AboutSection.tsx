import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            We are FranchiseleadsHQ, a passionate team helping brands grow with trust and vision. 
            We believe in building strong relationships and creating real impact with trust. 
            Our goal is simple — to grow your business toward meaningful, lasting growth.
          </p>

          <div className="pt-6">
            <Link to="/about">
              <Button 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;