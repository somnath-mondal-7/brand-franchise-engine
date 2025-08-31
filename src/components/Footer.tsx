import { Linkedin, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">FranchiseLeadsHQ</h3>
            <p className="text-blue-100 mb-6 max-w-md">
              We don't just generate leads, we build brands. Helping franchise consultants and franchisors dominate their markets with high-quality leads and powerful brand positioning.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hello@franchiseleadshq.com" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-blue-100">
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Lead Generation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Brand Building</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">LinkedIn Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Cold Outreach</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Content Creation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@franchiseleadshq.com" className="hover:text-white transition-colors duration-200">
                  hello@franchiseleadshq.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <a href="tel:+1-555-123-4567" className="hover:text-white transition-colors duration-200">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-blue-100 text-sm">
              © 2024 FranchiseLeadsHQ. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-blue-100 md:justify-end">
              <a href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;