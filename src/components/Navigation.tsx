import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Franchiseleads<span className="text-blue-600">HQ</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                  Process
                </a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                  Services
                </a>
                <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                  Benefits
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                  About
                </a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                  FAQ
                </a>
              </>
            ) : (
              <>
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                  Home
                </Link>
                <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                  Services
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                  Who We Are
                </Link>
                <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                  Testimonials
                </Link>
                <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                  Blog
                </Link>
              </>
            )}
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Contact Us
            </Link>
          </div>

          {/* Phone and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              <Phone className="w-4 h-4 mr-2" />
              (+1) 3215159932
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
              onClick={() => window.open('https://calendly.com/som832707/book-an-1-1consualtation', '_blank')}
            >
              Let's talk
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {isHomePage ? (
                <>
                  <a
                    href="#process"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Process
                  </a>
                  <a
                    href="#services"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Services
                  </a>
                  <a
                    href="#benefits"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Benefits
                  </a>
                  <a
                    href="#about"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    About
                  </a>
                  <a
                    href="#faq"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    FAQ
                  </a>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <Link
                    to="/services"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                  <Link
                    to="/about"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Who We Are
                  </Link>
                  <Link
                    to="/testimonials"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Testimonials
                  </Link>
                  <Link
                    to="/blog"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                </>
              )}
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full border-gray-300 text-gray-700">
                  <Phone className="w-4 h-4 mr-2" />
                  (+1) 3215159932
                </Button>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open('https://calendly.com/som832707/book-an-1-1consualtation', '_blank')}
                >
                  Let's talk
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