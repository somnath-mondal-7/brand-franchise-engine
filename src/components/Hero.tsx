import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-16 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We Don't Just Generate Leads{" "}
              <span className="text-blue-600">We Build Brands.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At FranchiseleadsHQ, we help businesses dominate the market with high-quality leads and powerful brand positioning that makes real noise.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg"
              onClick={() => window.open('https://calendly.com/som832707/book-an-1-1consualtation', '_blank')}
            >
              Book a call
            </Button>
          </div>

          {/* Video Section */}
          <div className="pt-12">
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto cursor-pointer hover:bg-blue-700 transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-gray-600 font-medium">Watch our introduction video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Logos Section */}
          <div className="pt-16">
            <p className="text-gray-600 text-lg mb-8">Loved by 640+ clients</p>
            <div className="flex justify-center">
              <div className="flex space-x-8 items-center overflow-hidden">
                <div className="flex space-x-8 animate-scroll">
                  {/* Sample client logos - you can replace with actual images */}
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <div key={i} className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500 text-sm font-medium">Logo {i}</span>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-8 animate-scroll" aria-hidden="true">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <div key={i} className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500 text-sm font-medium">Logo {i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;