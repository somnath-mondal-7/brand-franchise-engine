import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const IndiaNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group">
            <span className="text-2xl sm:text-[1.6rem] font-extrabold tracking-tight text-accent leading-none">
              franchise<span className="text-primary">leadspro</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm font-semibold text-accent/80 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold h-11 px-6 shadow-orange"
              onClick={() => window.open("https://calendly.com/lets-build-your-brand", "_blank")}
            >
              Book a Call <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile toggle */}
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
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-base font-semibold text-accent hover:bg-secondary rounded-md"
              >
                {l.label}
              </Link>
            ))}
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
