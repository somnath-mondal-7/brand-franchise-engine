import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90">
            Schedule a call with our marketing experts
          </p>
          <div className="pt-4">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-lg font-semibold"
              onClick={() => window.open('https://calendly.com/som832707/book-an-1-1consualtation', '_blank')}
            >
              Book a 15-min call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;