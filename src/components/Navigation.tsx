import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-brand-navy">
              FranchiseLeadsHQ
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-foreground hover:text-brand-blue transition-colors duration-200">
                Services
              </a>
              <a href="#process" className="text-foreground hover:text-brand-blue transition-colors duration-200">
                Process
              </a>
              <a href="#about" className="text-foreground hover:text-brand-blue transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-brand-blue transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default"
              className="bg-gradient-primary hover:bg-gradient-to-r hover:from-brand-blue-dark hover:to-brand-blue text-primary-foreground shadow-elegant"
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a
                href="#services"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-brand-blue transition-colors duration-200"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#process"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-brand-blue transition-colors duration-200"
                onClick={toggleMenu}
              >
                Process
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-brand-blue transition-colors duration-200"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-brand-blue transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Button 
                  variant="default"
                  className="w-full bg-gradient-primary text-primary-foreground"
                >
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;