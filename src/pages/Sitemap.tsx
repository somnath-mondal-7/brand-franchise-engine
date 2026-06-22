import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Briefcase, Globe, Map } from 'lucide-react';

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap | FranchiseLeadsPro - All Pages</title>
        <meta name="description" content="Complete sitemap of FranchiseLeadsPro: services, money pages, regional broker lead pages, and locations." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.franchiseleadspro.com/sitemap" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Site Map</h1>
              <p className="text-xl opacity-90">
                Browse every live page on FranchiseLeadsPro
              </p>
            </div>
          </div>
        </section>

        {/* Main Pages */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Main Pages</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="/" className="text-primary hover:underline">Home</a>
                <a href="/about" className="text-primary hover:underline">About Us</a>
                <a href="/services" className="text-primary hover:underline">Services</a>
                <a href="/case-studies" className="text-primary hover:underline">Case Studies</a>
                <a href="/testimonials" className="text-primary hover:underline">Video Testimonials</a>
                <a href="/blog" className="text-primary hover:underline">Blog</a>
                <a href="/contact" className="text-primary hover:underline">Contact</a>
                <a href="/faq" className="text-primary hover:underline">FAQ</a>
                <a href="/press" className="text-primary hover:underline">Press</a>
                <a href="/digital-marketing" className="text-primary hover:underline">Digital Marketing</a>
                <a href="/buy-franchise-leads" className="text-primary hover:underline">Buy Franchise Leads</a>
                <a href="/legal-terms/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
                <a href="/legal-terms/refund-satisfaction-guarantee-policy" className="text-primary hover:underline">Refund Policy</a>
                <a href="/legal-terms/terms-of-service" className="text-primary hover:underline">Terms of Service</a>
              </div>
            </div>
          </div>
        </section>

        {/* Money / Service Pages */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Specialist Service Pages</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/franchise-broker-lead-generation" className="text-primary hover:underline">Franchise Broker Lead Generation</a>
                <a href="/franchise-marketing-agency" className="text-primary hover:underline">Franchise Marketing Agency</a>
                <a href="/real-estate-broker-marketing" className="text-primary hover:underline">Real Estate Broker Marketing</a>
                <a href="/mortgage-broker-lead-generation" className="text-primary hover:underline">Mortgage Broker Lead Generation</a>
                <a href="/linkedin-lead-generation-brokers" className="text-primary hover:underline">LinkedIn Lead Generation for Brokers</a>
                <a href="/franchise-marketing" className="text-primary hover:underline">Franchise Marketing</a>
                <a href="/franchise-flow" className="text-primary hover:underline">FranchiseFlow Method</a>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Broker Pages */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Map className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">USA Broker Leads by Region</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="/franchise-broker-leads-usa" className="text-primary hover:underline">USA (All Regions)</a>
                <a href="/franchise-broker-leads-northeast" className="text-primary hover:underline">Northeast</a>
                <a href="/franchise-broker-leads-southeast" className="text-primary hover:underline">Southeast</a>
                <a href="/franchise-broker-leads-midwest" className="text-primary hover:underline">Midwest</a>
                <a href="/franchise-broker-leads-west" className="text-primary hover:underline">West</a>
              </div>
            </div>
          </div>
        </section>

        {/* Country Pages */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Franchise Leads by Country</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="/franchise-leads-usa" className="text-primary hover:underline">Franchise Leads USA</a>
                <a href="/franchise-leads-uk" className="text-primary hover:underline">Franchise Leads UK</a>
                <a href="/franchise-leads-canada" className="text-primary hover:underline">Franchise Leads Canada</a>
                <a href="/franchise-leads-australia" className="text-primary hover:underline">Franchise Leads Australia</a>
                <a href="/franchise-leads-dubai" className="text-primary hover:underline">Franchise Leads Dubai</a>
                <a href="/franchise-leads-india" className="text-primary hover:underline">Franchise Leads India</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Sitemap;

