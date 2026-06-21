import { Helmet } from "react-helmet-async";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What does FranchiseLeadsPro actually do for franchise brands?",
    a: "We act as a done-for-you growth partner — building qualified franchise development pipelines through LinkedIn outreach, premium messaging, paid campaigns and a USA-based virtual assistant team that handles conversations on your behalf.",
  },
  {
    q: "Are your virtual assistants really based in the USA?",
    a: "Yes. Every conversation-facing VA assigned to your account is based in the United States, fluent in American business culture, and trained specifically on franchise development workflows before they ever touch your inbox.",
  },
  {
    q: "What types of franchise brands do you work with?",
    a: "We focus on emerging and established franchisors across food, service, fitness, home services and B2B categories. Most of our clients are franchise CEOs, presidents and heads of franchise development.",
  },
  {
    q: "How long until I see qualified conversations?",
    a: "Onboarding takes about a week. After that, most clients begin seeing booked discovery calls with qualified prospects within the first 30 days of active outreach.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No multi-year lock-ins. We operate on simple month-to-month engagements because we believe results — not paperwork — should keep clients on board.",
  },
  {
    q: "How do I get started?",
    a: "Book a discovery call from the Contact page. We'll review your current franchise development process, your ideal candidate profile, and whether we're the right fit before any commitment.",
  },
];

const Faq = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>FAQs | FranchiseLeadsPro</title>
      <meta
        name="description"
        content="Answers to the most common questions about FranchiseLeadsPro's franchise development, USA-based VA team and lead generation services."
      />
    </Helmet>
    <IndiaNav />
    <main className="pt-28 pb-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Frequently Asked Questions
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-accent mt-3">
            Everything you wanted to know
          </h1>
          <p className="mt-4 text-accent/70 leading-relaxed">
            Clear answers about how we work, who we work with, and what to
            expect when you partner with FranchiseLeadsPro.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-xl px-5"
            >
              <AccordionTrigger className="text-left font-display text-lg font-semibold text-accent hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-accent/75 leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
    <IndiaFooter />
  </div>
);

export default Faq;
