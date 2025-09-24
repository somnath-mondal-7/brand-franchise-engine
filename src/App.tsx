import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import DigitalMarketing from "./pages/DigitalMarketing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import FranchiseLeadsUSA from "./pages/FranchiseLeadsUSA";
import FranchiseLeadsUK from "./pages/FranchiseLeadsUK";
import FranchiseLeadsCanada from "./pages/FranchiseLeadsCanada";
import FranchiseLeadsAustralia from "./pages/FranchiseLeadsAustralia";
import FranchiseLeadsDubai from "./pages/FranchiseLeadsDubai";
import FranchiseLeadsIndia from "./pages/FranchiseLeadsIndia";
import FranchiseLeadsKuwait from "./pages/FranchiseLeadsKuwait";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/franchise-leads-usa" element={<FranchiseLeadsUSA />} />
          <Route path="/franchise-leads-uk" element={<FranchiseLeadsUK />} />
          <Route path="/franchise-leads-canada" element={<FranchiseLeadsCanada />} />
          <Route path="/franchise-leads-australia" element={<FranchiseLeadsAustralia />} />
          <Route path="/franchise-leads-dubai" element={<FranchiseLeadsDubai />} />
          <Route path="/franchise-leads-india" element={<FranchiseLeadsIndia />} />
          <Route path="/franchise-leads-kuwait" element={<FranchiseLeadsKuwait />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal-terms/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal-terms/refund-satisfaction-guarantee-policy" element={<RefundPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;