import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import logo1 from "@/assets/clients/logo1.svg";
import logo2 from "@/assets/clients/logo2.png";
import logo3 from "@/assets/clients/logo3.png";
import logo4 from "@/assets/clients/logo4.png";
import logo5 from "@/assets/clients/logo5.png";
import LogoProcessor from "@/components/LogoProcessor";
import avatar1 from "@/assets/clients/avatars/avatar1.jpg";
import avatar2 from "@/assets/clients/avatars/avatar2.jpg";
import avatar3 from "@/assets/clients/avatars/avatar3.jpg";
import avatar4 from "@/assets/clients/avatars/avatar4.jpg";

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

          {/* Client Photos, Rating and Logos */}
          <div className="pt-16">
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-center -space-x-2">
                <img src={avatar1} alt="Happy client 1" loading="lazy" className="h-10 w-10 rounded-full ring-2 ring-white object-cover" />
                <img src={avatar2} alt="Happy client 2" loading="lazy" className="h-10 w-10 rounded-full ring-2 ring-white object-cover" />
                <img src={avatar3} alt="Happy client 3" loading="lazy" className="h-10 w-10 rounded-full ring-2 ring-white object-cover" />
                <img src={avatar4} alt="Happy client 4" loading="lazy" className="h-10 w-10 rounded-full ring-2 ring-white object-cover" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-blue-500 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 text-lg font-medium">Loved by 640+ clients</span>
              </div>
            </div>
            {/* Company Logos - Infinite Marquee */}
            <div className="relative overflow-hidden">
              <div className="flex w-[200%] animate-marquee">
                <div className="flex items-center justify-center gap-12 flex-none w-1/2 px-8">
                  <img src={logo1} alt="Client logo 1" loading="lazy" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 mix-blend-multiply" />
                  <img src={logo2} alt="Client logo 2" loading="lazy" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 mix-blend-multiply" />
                  <img src={logo3} alt="Client logo 3" loading="lazy" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 mix-blend-multiply" />
                  <img src={logo4} alt="Client logo 4" loading="lazy" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 mix-blend-multiply" />
                  <img src={logo5} alt="Client logo 5" loading="lazy" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 mix-blend-multiply" />
                </div>
                <div className="flex items-center justify-center gap-12 flex-none w-1/2 px-8" aria-hidden="true">
                  <img src={logo1} alt="" loading="lazy" className="h-10 w-auto opacity-80 transition-opacity grayscale mix-blend-multiply" />
                  <img src={logo2} alt="" loading="lazy" className="h-10 w-auto opacity-80 transition-opacity grayscale mix-blend-multiply" />
                  <img src={logo3} alt="" loading="lazy" className="h-10 w-auto opacity-80 transition-opacity grayscale mix-blend-multiply" />
                  <img src={logo4} alt="" loading="lazy" className="h-10 w-auto opacity-80 transition-opacity grayscale mix-blend-multiply" />
                  <img src={logo5} alt="" loading="lazy" className="h-10 w-auto opacity-80 transition-opacity grayscale mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoProcessor />
    </section>
  );
};

export default Hero;