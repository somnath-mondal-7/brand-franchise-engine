import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const IndiaFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="font-display text-2xl font-bold">
                Franchise<span className="text-accent">Leads</span>Pro
              </span>
            </div>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              A premium franchise growth partner — quietly engineering qualified investor conversations for consultants and franchisors through marketing, technology and human connection.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/franchiseleadspro/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FranchiseLeadsPro on LinkedIn"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/franchiseleadspro_company/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FranchiseLeadsPro on Instagram"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579709174263"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FranchiseLeadsPro on Facebook"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            {/* Ask AI about FranchiseLeadsPro */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-accent">Ask AI about FranchiseLeadsPro</h4>
              {(() => {
                // Each tool gets its OWN short prompt + URL pattern that actually works
                const enc = (s: string) => encodeURIComponent(s);
                const links = [
                  // ChatGPT: short prompt, ?q= works but must stay brief
                  {
                    name: "ChatGPT",
                    url: `https://chatgpt.com/?q=${enc("What is FranchiseLeadsPro (franchiseleadspro.com)? Services, markets and founder.")}`,
                    bg: "bg-black",
                    icon: "https://cdn.jsdelivr.net/gh/lobehub/lobe-icons/packages/static-png/dark/openai.png",
                  },
                  // Claude: ?q= on /new — keep it short
                  {
                    name: "Claude",
                    url: `https://claude.ai/new?q=${enc("Tell me about FranchiseLeadsPro at franchiseleadspro.com — services and markets.")}`,
                    bg: "bg-[#cc9b7a]",
                    icon: "https://cdn.jsdelivr.net/gh/lobehub/lobe-icons/packages/static-png/light/claude.png",
                  },
                  // Perplexity (confirmed working) — short query
                  {
                    name: "Perplexity",
                    url: `https://www.perplexity.ai/search?q=${enc("FranchiseLeadsPro franchiseleadspro.com — agency overview, services, markets, founder")}`,
                    bg: "bg-[#1f6f6f]",
                    icon: "https://cdn.jsdelivr.net/gh/lobehub/lobe-icons/packages/static-png/light/perplexity.png",
                  },
                  // Gemini: use Google AI Mode with udm=50 + aep=11 (auto-submits into Gemini-powered AI Mode, the same trick SalesBlink uses)
                  {
                    name: "Gemini",
                    url: `https://www.google.com/search?udm=50&aep=11&q=${enc("Tell me about FranchiseLeadsPro (franchiseleadspro.com) — a franchise lead generation and marketing agency. Cover their services, markets (USA, UK, Canada, Australia, UAE, India), and founder.")}`,
                    bg: "bg-[#1a73e8]",
                    icon: "https://cdn.jsdelivr.net/gh/lobehub/lobe-icons/packages/static-png/light/gemini-color.png",
                  },
                  // Grok (confirmed working)
                  {
                    name: "Grok",
                    url: `https://grok.com/?q=${enc("Tell me about FranchiseLeadsPro (franchiseleadspro.com) — services, markets, founder.")}`,
                    bg: "bg-black",
                    icon: "https://cdn.jsdelivr.net/gh/lobehub/lobe-icons/packages/static-png/light/grok.png",
                  },
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
                        className={`${l.bg} w-10 h-10 rounded-lg flex items-center justify-center hover:scale-110 transition-transform ring-1 ring-white/15`}
                      >
                        <img src={l.icon} alt={`${l.name} logo`} width="20" height="20" className="w-5 h-5 object-contain" loading="lazy" />
                      </a>
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-accent">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/#solutions" className="hover:text-accent">Solutions</Link></li>
              <li><Link to="/#pricing" className="hover:text-accent">Pricing</Link></li>
              <li><Link to="/case-studies" className="hover:text-accent">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
              <li>
                <a
                  href="https://thehindustanwires.com/somnath-mondal-building-a-new-era-of-franchise-growth-through-marketing-technology-and-human-connections/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  Press: The Hindustan Wires
                </a>
              </li>
              <li>
                <a
                  href="https://dhunt.in/14IvL0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  Press: DailyHunt
                </a>
              </li>
              <li><Link to="/" className="hover:text-accent">USA Operations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-accent" /><a href="tel:+14244455334">USA: +1 (424) 445-5334</a></li>
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-accent" /><a href="tel:+918327078841">India: +91 8327078841</a></li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-accent" /><a href="mailto:support@franchiseleadspro.com">support@franchiseleadspro.com</a></li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span>
                  <strong className="block text-primary-foreground">USA Office</strong>
                  111 Town Square Place<br />
                  Jersey City, NJ 07310<br />
                  United States
                </span>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span>
                  <strong className="block text-primary-foreground">India Office</strong>
                  Salt Lake Sector Five<br />
                  Kolkata, West Bengal 700091<br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Franchiseleadspro. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/legal-terms/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
            <Link to="/legal-terms/terms-of-service" className="hover:text-accent">Terms of Service</Link>
            <Link to="/legal-terms/refund-cancellation-policy" className="hover:text-accent">Refund & Cancellation</Link>
            <Link to="/sitemap" className="hover:text-accent">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default IndiaFooter;
