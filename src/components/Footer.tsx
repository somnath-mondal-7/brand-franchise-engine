import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-hq.png";
import TrustBadges from "@/components/TrustBadges";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="FranchiseLeadsPro Logo - Franchise Lead Generation Experts" width="56" height="56" className="w-14 h-14 object-contain" />
              <span className="text-xl font-semibold text-white" aria-label="FranchiseLeadsPro">
                franchiseleads<span className="text-primary font-bold">Pro</span>
              </span>
            </div>
            <p className="text-gray-400">
              We don't just generate leads, we build brands that dominate the franchise market.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/franchiseleadspro_company/" target="_blank" rel="noopener noreferrer" className="min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Instagram className="w-5 h-5 hover:text-pink-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.linkedin.com/company/franchiseleadspro/" target="_blank" rel="noopener noreferrer" className="min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Linkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579709174263" target="_blank" rel="noopener noreferrer" className="min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
            </div>

            {/* Ask AI about FranchiseLeadsPro */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold text-white mb-3">Ask AI about FranchiseLeadsPro</h4>
              {(() => {
                const prompt = "Tell me about FranchiseLeadsPro (https://www.franchiseleadspro.com) — a specialized franchise lead generation and marketing agency. Summarize their services (LinkedIn marketing, social media ads, franchise website development, IT/SEO services), the industries and global markets they serve (USA, UK, Canada, Australia, UAE/Dubai, India), and why franchisors choose them.";
                const enc = encodeURIComponent(prompt);
                const links = [
                  { name: "ChatGPT", url: `https://chatgpt.com/?q=${enc}`, bg: "bg-black", icon: "https://cdn.jsdelivr.net/gh/lobehub/lobe-icons/packages/static-png/dark/openai.png" },
                  { name: "Claude", url: `https://claude.ai/new?q=${enc}`, bg: "bg-[#cc9b7a]", icon: "https://cdn.jsdelivr.net/gh/lobehub/lobe-icons/packages/static-png/light/claude.png" },
                  { name: "Perplexity", url: `https://www.perplexity.ai/search/new?q=${enc}`, bg: "bg-[#1f6f6f]", icon: "https://cdn.jsdelivr.net/gh/lobehub/lobe-icons/packages/static-png/light/perplexity.png" },
                  { name: "Gemini", url: `https://gemini.google.com/app?q=${enc}`, bg: "bg-[#1a73e8]", icon: "https://cdn.jsdelivr.net/gh/lobehub/lobe-icons/packages/static-png/light/gemini-color.png" },
                  { name: "Grok", url: `https://grok.com/?q=${enc}`, bg: "bg-black", icon: "https://cdn.jsdelivr.net/gh/lobehub/lobe-icons/packages/static-png/light/grok.png" },
                ];
                return (
                  <div className="flex flex-wrap gap-2">
                    {links.map((l) => (
                      <a
                        key={l.name}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ask ${l.name} about FranchiseLeadsPro`}
                        title={`Ask ${l.name} about FranchiseLeadsPro`}
                        className={`${l.bg} w-10 h-10 rounded-lg flex items-center justify-center hover:scale-110 transition-transform ring-1 ring-white/10`}
                      >
                        <img src={l.icon} alt={`${l.name} logo`} width="20" height="20" className="w-5 h-5 object-contain" loading="lazy" />
                      </a>
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/franchise-broker-lead-generation" className="hover:text-white transition-colors py-1 inline-block">Franchise Broker Lead Generation</a></li>
              <li><a href="/franchise-marketing-agency" className="hover:text-white transition-colors py-1 inline-block">Franchise Marketing Agency</a></li>
              <li><a href="/real-estate-broker-marketing" className="hover:text-white transition-colors py-1 inline-block">Real Estate Broker Marketing</a></li>
              <li><a href="/mortgage-broker-lead-generation" className="hover:text-white transition-colors py-1 inline-block">Mortgage Broker Lead Generation</a></li>
              <li><a href="/linkedin-lead-generation-brokers" className="hover:text-white transition-colors py-1 inline-block">LinkedIn Lead Generation</a></li>
              <li>
                <a href="/digital-marketing" className="group relative hover:text-white transition-colors py-1 inline-block">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                    Digital Marketing ✨
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Franchise Broker Leads by Region */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Locations</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/franchise-broker-leads-usa" className="hover:text-white transition-colors py-1 inline-block">USA (All Regions)</a></li>
              <li><a href="/franchise-broker-leads-northeast" className="hover:text-white transition-colors py-1 inline-block">Northeast</a></li>
              <li><a href="/franchise-broker-leads-southeast" className="hover:text-white transition-colors py-1 inline-block">Southeast</a></li>
              <li><a href="/franchise-broker-leads-midwest" className="hover:text-white transition-colors py-1 inline-block">Midwest</a></li>
              <li><a href="/franchise-broker-leads-west" className="hover:text-white transition-colors py-1 inline-block">West</a></li>
              <li><a href="/franchise-lead-generation/usa/california" className="hover:text-white transition-colors py-1 inline-block">California</a></li>
              <li><a href="/franchise-lead-generation/usa/texas" className="hover:text-white transition-colors py-1 inline-block">Texas</a></li>
              <li><a href="/franchise-lead-generation/usa/florida" className="hover:text-white transition-colors py-1 inline-block">Florida</a></li>
              <li><a href="/franchise-lead-generation/usa/new-york" className="hover:text-white transition-colors py-1 inline-block">New York</a></li>
              <li><a href="/franchise-leads-uk" className="hover:text-white transition-colors py-1 inline-block">UK Franchise Leads</a></li>
              <li><a href="/franchise-leads-canada" className="hover:text-white transition-colors py-1 inline-block">Canada Franchise Leads</a></li>
            </ul>
          </div>


          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors py-1 inline-block">About</a></li>
              <li><a href="/case-studies" className="hover:text-white transition-colors py-1 inline-block">Case Studies</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors py-1 inline-block">Blog</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors py-1 inline-block">Contact Us</a></li>
              <li><a href="/sitemap" className="hover:text-white transition-colors py-1 inline-block">Sitemap</a></li>
            </ul>
          </div>


          {/* Contact */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:support@franchiseleadspro.com" className="hover:text-white transition-colors break-all">support@franchiseleadspro.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+14244455334" className="hover:text-white transition-colors">+1 (424) 445-5334</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-gray-300">USA Office</p>
                    <p>111 Town Square Place</p>
                    <p>Jersey City, NJ 07310</p>
                    <p>United States</p>
                    <a href="tel:+14244455334" className="hover:text-white transition-colors">+1 (424) 445-5334</a>
                  </div>
                  <div>
                    <p className="font-medium text-gray-300">India Office</p>
                    <p>Salt Lake Sector Five</p>
                    <p>Kolkata, West Bengal 700091</p>
                    <p>India</p>
                    <a href="tel:+918327078841" className="hover:text-white transition-colors">+91 8327078841</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <TrustBadges variant="footer" />
        </div>

        <div className="border-t border-gray-800 mt-4 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm sm:text-base">
              <p>© 2026 FranchiseLeadsPro. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="/legal-terms/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Privacy Policy</a>
              <a href="/legal-terms/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Terms of Service</a>
              <a href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
