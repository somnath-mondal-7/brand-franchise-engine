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
              <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://drive.google.com/file/d/1QIqVt5J6OTmNiVFdVDJT6GAg_mQPw54q/preview"
                  title="FranchiseLeadsHQ Introduction"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Client Logos Section */}
          <div className="pt-16">
            <p className="text-gray-600 text-lg mb-8">Loved by 640+ clients</p>
            <div className="flex justify-center overflow-hidden">
              <div className="flex items-center animate-scroll">
                {/* First set of logos */}
                <img src="/src/assets/logo1.svg" alt="Client Logo" className="h-12 w-auto flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity mx-6" />
                <img src="/src/assets/logo2.png" alt="Client Logo" className="h-12 w-auto flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity mx-6" />
                <img src="/src/assets/logo3.png" alt="Client Logo" className="h-12 w-auto flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity mx-6" />
                <img src="/src/assets/logo4.png" alt="Client Logo" className="h-12 w-auto flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity mx-6" />
                <img src="/src/assets/logo5.png" alt="Client Logo" className="h-12 w-auto flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity mx-6" />
                
                {/* Second set of logos for seamless loop */}
                <img src="/src/assets/logo1.svg" alt="Client Logo" className="h-12 w-auto flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity mx-6" />
                <img src="/src/assets/logo2.png" alt="Client Logo" className="h-12 w-auto flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity mx-6" />
                <img src="/src/assets/logo3.png" alt="Client Logo" className="h-12 w-auto flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity mx-6" />
                <img src="/src/assets/logo4.png" alt="Client Logo" className="h-12 w-auto flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity mx-6" />
                <img src="/src/assets/logo5.png" alt="Client Logo" className="h-12 w-auto flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity mx-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;