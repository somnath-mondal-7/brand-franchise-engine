import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Testimonials", href: "/testimonials" },
];

const services = [
  { label: "Digital Marketing", href: "/services", desc: "Full-funnel digital growth for franchise brands." },
  { label: "Website & App Development", href: "/services", desc: "High-converting franchise sites and apps built to scale." },
  { label: "Branding", href: "/services", desc: "Positioning and identity that earns investor trust." },
  { label: "Lead Generation", href: "/services", desc: "Qualified franchise buyer leads on tap." },
  { label: "SEO Services", href: "/services", desc: "Rank for the searches your investors actually make." },
  { label: "PPC", href: "/services", desc: "Paid campaigns engineered for franchise ROI." },
  { label: "AI & Automation", href: "/services", desc: "Automate outreach, follow-ups and lead nurturing." },
  { label: "Features", href: "/features", desc: "Everything inside the FranchiseLeadsPro platform." },
];

const resources = [
  {
    label: "Blog",
    href: "/blog",
    desc: "Insights on franchise marketing, growth and lead generation.",
  },
  {
    label: "Media Library",
    href: "/media-library",
    desc: "Client videos, case studies and brand assets in one place.",
  },
  {
    label: "Contact Us",
    href: "/contact",
    desc: "Talk to our team — we'd love to hear about your brand.",
  },
  {
    label: "FAQs",
    href: "/faq",
    desc: "Answers to the questions franchise leaders ask us most.",
  },
  {
    label: "Press",
    href: "/press",
    desc: "FranchiseLeadsPro featured in leading business publications.",
  },
];

const IndiaNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  const [mobileResOpen, setMobileResOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [mobileSvcOpen, setMobileSvcOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const svcCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openRes = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setResOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setResOpen(false), 120);
  };
  const openSvc = () => {
    if (svcCloseTimer.current) clearTimeout(svcCloseTimer.current);
    setSvcOpen(true);
  };
  const scheduleSvcClose = () => {
    if (svcCloseTimer.current) clearTimeout(svcCloseTimer.current);
    svcCloseTimer.current = setTimeout(() => setSvcOpen(false), 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-1 group">
            <span className="text-2xl sm:text-[1.6rem] font-extrabold tracking-tight text-accent leading-none">
              franchise<span className="text-primary">leadspro</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {mainLinks.map((l) => (
              <span key={l.href} className="flex items-center gap-10">
                <Link
                  to={l.href}
                  className="text-sm font-semibold text-accent/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
                {l.label === "About" && (
                  <div
                    className="relative"
                    onMouseEnter={openSvc}
                    onMouseLeave={scheduleSvcClose}
                  >
                    <button
                      onClick={() => setSvcOpen((v) => !v)}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-accent/80 hover:text-primary transition-colors"
                      aria-expanded={svcOpen}
                    >
                      Our Services
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          svcOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {svcOpen && (
                      <div
                        onMouseEnter={openSvc}
                        onMouseLeave={scheduleSvcClose}
                        className="absolute left-0 top-full pt-4 w-[520px]"
                      >
                        <div className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden p-4 grid grid-cols-2 gap-1">
                          {services.map((s) => {
                            const isFeatures = s.label === "Features";
                            return (
                              <Link
                                key={s.label}
                                to={s.href}
                                onClick={() => setSvcOpen(false)}
                                className={`block rounded-lg px-3 py-2.5 transition-colors ${
                                  isFeatures
                                    ? "bg-primary/10 hover:bg-primary/15 ring-1 ring-primary/30"
                                    : "hover:bg-secondary"
                                }`}
                              >
                                <div className={`font-display text-sm font-bold ${isFeatures ? "text-primary" : "text-accent"}`}>
                                  {s.label}
                                </div>
                                <div className="text-xs text-accent/80 mt-0.5">
                                  {s.desc}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </span>
            ))}


            {/* Resources dropdown */}
            <div
              className="relative"
              onMouseEnter={openRes}
              onMouseLeave={scheduleClose}
            >
              <button
                onClick={() => setResOpen((v) => !v)}
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent/80 hover:text-primary transition-colors"
                aria-expanded={resOpen}
              >
                Resources
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    resOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {resOpen && (
                <div
                  onMouseEnter={openRes}
                  onMouseLeave={scheduleClose}
                  className="absolute right-0 top-full pt-4 w-[640px]"
                >
                  <div className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden grid grid-cols-5">
                    <div className="col-span-3 p-4 space-y-1">
                      {resources.map((r) => (
                        <Link
                          key={r.href}
                          to={r.href}
                          onClick={() => setResOpen(false)}
                          className="block rounded-lg px-4 py-3 hover:bg-secondary transition-colors"
                        >
                          <div className="font-display text-base font-bold text-accent group-hover:text-primary">
                            {r.label}
                          </div>
                          <div className="text-xs text-accent/80 mt-0.5">
                            {r.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="col-span-2 bg-secondary/60 p-6 flex flex-col">
                      <div className="rounded-xl bg-gradient-to-br from-primary to-primary/80 p-5 text-primary-foreground">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-90">
                          As Featured In
                        </p>
                        <h4 className="font-display text-lg font-bold mt-2 leading-tight">
                          The Hindustan Wires Profiles Our Founder
                        </h4>
                      </div>
                      <p className="text-sm text-accent/75 mt-4 leading-relaxed">
                        A new era of franchise growth through marketing,
                        technology and human connections.
                      </p>
                      <Link
                        to="/press"
                        onClick={() => setResOpen(false)}
                        className="mt-3 text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read the press <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold h-11 px-6 shadow-orange"
              onClick={() => window.open("https://calendly.com/lets-build-your-brand", "_blank")}
            >
              Book a Call <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-accent"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[80vh]" : "max-h-0"
          }`}
        >
          <div className="py-4 space-y-1 border-t border-border">
            {mainLinks.map((l) => (
              <div key={l.href}>
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-base font-semibold text-accent hover:bg-secondary rounded-md"
                >
                  {l.label}
                </Link>
                {l.label === "About" && (
                  <>
                    <button
                      onClick={() => setMobileSvcOpen((v) => !v)}
                      className="w-full flex items-center justify-between px-3 py-3 text-base font-semibold text-accent hover:bg-secondary rounded-md"
                    >
                      Our Services
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileSvcOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileSvcOpen && (
                      <div className="pl-4 space-y-1">
                        {services.map((s) => (
                          <Link
                            key={s.label}
                            to={s.href}
                            onClick={() => setOpen(false)}
                            className="block px-3 py-2 text-sm font-semibold text-accent/80 hover:text-primary hover:bg-secondary rounded-md"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}


            <button
              onClick={() => setMobileResOpen((v) => !v)}
              className="w-full flex items-center justify-between px-3 py-3 text-base font-semibold text-accent hover:bg-secondary rounded-md"
            >
              Resources
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  mobileResOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileResOpen && (
              <div className="pl-4 space-y-1">
                {resources.map((r) => (
                  <Link
                    key={r.href}
                    to={r.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 text-sm font-semibold text-accent/80 hover:text-primary hover:bg-secondary rounded-md"
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            )}

            <Button
              className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold"
              onClick={() => {
                window.open("https://calendly.com/lets-build-your-brand", "_blank");
                setOpen(false);
              }}
            >
              Book a Call <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default IndiaNav;
