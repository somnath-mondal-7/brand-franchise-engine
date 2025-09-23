import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can I start generating franchise leads?",
      answer: "Most clients see qualified leads within 30 days of launching their campaign. Our proven system includes immediate setup of targeted advertising, lead magnets, and follow-up sequences to accelerate results."
    },
    {
      question: "What makes your franchise lead generation different?",
      answer: "We specialize exclusively in franchise marketing with a proven system that has generated 50,000+ leads. Our approach combines targeted advertising, brand building, and conversion optimization specifically for franchise consultants and franchisors."
    },
    {
      question: "Do you work with franchise consultants or franchisors?",
      answer: "We work with both! Our lead generation strategies are tailored for franchise consultants seeking qualified prospects and franchisors looking to expand their franchise network with the right partners."
    },
    {
      question: "What's included in your franchise lead generation service?",
      answer: "Our comprehensive service includes targeted digital advertising, landing page optimization, lead nurturing sequences, CRM setup, conversion tracking, and ongoing optimization to maximize your ROI."
    },
    {
      question: "How do you ensure lead quality for franchise opportunities?",
      answer: "We use advanced targeting criteria including financial qualifications, business experience, location preferences, and industry interest. Our lead scoring system prioritizes the most qualified prospects for your franchise opportunities."
    },
    {
      question: "What kind of ROI can I expect from franchise lead generation?",
      answer: "Our clients typically see 3-5x ROI within 90 days. With an average franchise fee of $45,000 and our cost-effective lead generation, even one conversion per month delivers significant returns."
    },
    {
      question: "Do you provide ongoing support and optimization?",
      answer: "Yes! We provide continuous campaign optimization, monthly performance reports, A/B testing of creatives, and strategic consulting to improve results over time. Your success is our priority."
    },
    {
      question: "How do you handle lead nurturing for franchise prospects?",
      answer: "Our multi-touch nurturing system includes automated email sequences, retargeting campaigns, educational content delivery, and timely follow-up to keep prospects engaged throughout their decision-making process."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-muted/30">
      {/* FAQ Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about franchise lead generation and our proven marketing strategies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                  aria-expanded={openFAQ === index}
                >
                  <span className="text-lg font-semibold text-card-foreground">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
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