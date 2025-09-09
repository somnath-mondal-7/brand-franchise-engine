import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How soon can I expect to see results?",
      answer: "Typically, you can expect to see initial results within 2-4 weeks of starting our services. However, the best results usually come after 1-3 months as we optimize and refine our approach based on initial performance data."
    },
    {
      question: "What makes you different from other marketing agencies?",
      answer: "We specialize exclusively in the franchise industry, which means we understand the unique challenges and opportunities that franchise consultants and franchisors face. Our strategies are purpose-built for franchise businesses, not adapted from generic marketing approaches."
    },
    {
      question: "What is the refund policy?",
      answer: "We offer a 1-month satisfaction guarantee with a 7-day refund policy. If you're not completely satisfied with our services within the first 7 days, we'll provide a full refund. We're confident in our ability to deliver results."
    },
    {
      question: "How do you offer support if I get stuck somewhere?",
      answer: "We provide comprehensive support through multiple channels including dedicated account management, regular check-ins, email support, and phone consultations. Our team is always available to help you maximize the value of our services."
    },
    {
      question: "What kind of leads do you provide? Are they qualified?",
      answer: "We provide highly qualified leads that have been pre-screened through our multi-point vetting system. These are real prospects actively looking for franchise opportunities, not just general inquiries. We focus on quality over quantity."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Questions, Answered</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Answers to your most common questions about our AI services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;