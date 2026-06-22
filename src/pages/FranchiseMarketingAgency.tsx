import MoneyPageTemplate, { type MoneyPageConfig } from "@/components/MoneyPageTemplate";
import { Target, Search, MessageSquare, Calendar, Users, ShieldCheck } from "lucide-react";

const config: MoneyPageConfig = {
  canonical: "https://www.franchiseleadspro.com/franchise-marketing-agency",
  metaTitle: "Franchise Marketing Agency | Franchisor Candidate Development",
  metaDescription: "The franchise marketing agency franchisors hire when discovery days are empty and territory development has stalled. Candidate pipelines, not vanity metrics.",
  ogTitle: "Franchise Marketing Agency for Franchisors",
  ogDescription: "Candidate-developer pipelines built for emerging and established franchise brands.",
  badge: "For Franchisors & Emerging Brands",
  h1Line1: "Franchise",
  h1Line2: "Marketing Agency",
  heroSubtitle: "We build candidate-developer pipelines for franchisors. FDD-grade qualification, discovery-day attendance, and a real cost-per-awarded-territory — not impression reports.",
  problemHeading: "Why most franchise marketing budgets quietly leak money",
  problemParagraphs: [
    "If you are a franchisor, the math is brutal. You are paying portal fees per submission, IFA show booths in five figures, and a generalist agency that has never read an FDD. The qualified candidates trickle in. Your development team chases ghosts. Discovery days run with two seats filled instead of ten.",
    "The problem is almost never traffic. It is the layer between traffic and a signed franchise agreement — positioning, qualification, nurture, and discovery-day conversion. That layer is rarely built. It is the difference between a brand that awards 4 territories a year and one that awards 40.",
    "We build that layer. End-to-end candidate development for franchisors, calibrated for the capital band, territory model, and unit-economics story you actually sell.",
  ],
  whatYouGetHeading: "What we deploy for a franchisor",
  whatYouGetSubtitle: "Built specifically for franchise development, not generic B2C marketing.",
  whatYouGet: [
    { icon: <Target className="h-6 w-6" />, title: "Candidate-investor paid acquisition", body: "Meta, Google, and LinkedIn campaigns targeted at qualified franchise candidates — net worth, liquid capital, executive transitions, industry experience — not consumer audiences that waste your spend." },
    { icon: <Search className="h-6 w-6" />, title: "Brand-grade discovery website", body: "An FDD-compliant candidate site that tells your unit-economics story, your support model, and your territory map without compromising legal review or feeling like a brochure." },
    { icon: <MessageSquare className="h-6 w-6" />, title: "Qualification and FDD nurture", body: "Capital, timeline, geography, and exclusivity captured upfront. Automated sequences walk the candidate through FDD review, validation calls, and Item 19 conversations." },
    { icon: <Calendar className="h-6 w-6" />, title: "Discovery-day pipeline", body: "Your development director stops chasing — qualified candidates self-book into validation calls and discovery days with their qualification trail already attached." },
    { icon: <Users className="h-6 w-6" />, title: "Broker network activation", body: "If you work with FBA, IFPG, or FranNet networks, we feed and equip your broker channel with creative, decks, and candidate education assets that move deals forward." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Awarded-territory reporting", body: "We report on awarded territories and cost-per-FDD-sent, not clicks. You see what every marketing dollar produced in signed agreements, not page views." },
  ],
  whoItsForHeading: "Who we work with on the franchisor side",
  whoItsFor: [
    { title: "Emerging franchise brands", body: "First 1-25 units sold. You need a pipeline that does not depend on the founder's network and a discovery process that survives scale." },
    { title: "Established franchisors", body: "100+ unit systems looking to defend their award pace, open new territories, or replace an agency that delivers reports instead of candidates." },
    { title: "Private-equity-backed franchise brands", body: "Sponsor-mandated growth targets, board-grade reporting, and a development engine that produces auditable cost-per-awarded-territory." },
    { title: "Multi-brand franchise platforms", body: "Holding companies running multiple concepts who need a unified candidate acquisition layer across brands without losing brand differentiation." },
    { title: "International master franchisors", body: "Master franchise and area-developer sales for brands expanding into the US, UK, Canada, UAE, or India." },
    { title: "Franchise development consultancies", body: "We white-label our acquisition engine for franchise consultancies who want to deliver pipeline to their portfolio brands." },
  ],
  processHeading: "How a franchisor engagement unfolds",
  processSubtitle: "We move at FDD speed — careful, compliant, and accountable.",
  process: [
    { step: "Weeks 1-2", title: "Development audit and offer reframe", body: "We audit your current candidate site, FDD positioning, Item 19 story, and validation process. We identify the breakpoints between traffic and awarded territory." },
    { step: "Weeks 3-4", title: "Funnel and creative build", body: "Discovery site, qualification flow, ad creative, and broker enablement assets are built and approved by your legal team." },
    { step: "Weeks 5-6", title: "Launch and signal gathering", body: "Campaigns go live. First qualified candidates begin reaching your development team within 14-21 days. Optimization is run against booked validation calls." },
    { step: "Month 2+", title: "Scale and award pace", body: "Winning audiences and creatives scale. Discovery-day attendance compounds. Quarterly reviews track award pace and channel ROI for the executive team." },
  ],
  whyHeading: "Why franchisors pick us over a generalist agency",
  whyPoints: [
    "We work only in franchise, brokerage, and high-ticket professional services — we read FDDs and speak Item 19, you do not have to translate.",
    "We report on awarded territories, not click-through rates. Your board gets the number that actually matters.",
    "Your broker network gets equipped, not bypassed. If you work with IFPG, FBA, or FranNet, we feed your channel — we do not compete with it.",
    "FDD-compliant creative and copy reviewed against your legal counsel. No compliance surprises after launch.",
    "Direct access to senior strategists from day one. No junior account managers between you and the people building your campaigns.",
    "No long lock-in contracts. We earn the renewal with awarded territories — not with a one-year commitment you cannot escape.",
  ],
  faqHeading: "Questions franchisors ask before signing",
  faqs: [
    { q: "What size franchise system is this built for?", a: "We work with brands from pre-IFDD launch through 500+ units. The engagement scales with you — emerging brands get founder-led, lean execution; mature systems get multi-channel acquisition with broker enablement and PE-grade reporting." },
    { q: "How does this work alongside our existing broker network?", a: "We feed your broker network with creative, decks, validation tools, and warm candidates. We are not a competing broker — we are the marketing engine that makes your existing FBA, IFPG, or FranNet relationships more productive." },
    { q: "How long before we see qualified candidates reach our development team?", a: "First qualified validation calls typically begin in weeks 3-4. Discovery-day attendance compounds from month two. We do not promise overnight pipelines — anyone making that promise in the franchise space is not credible." },
    { q: "Can you work with our legal counsel on FDD compliance?", a: "Yes. Every piece of creative, ad copy, and discovery site copy is built to be cleared by your franchise counsel before going live. We have run this process with brands ranging from emerging to multi-state PE-backed systems." },
    { q: "What is the typical investment?", a: "Franchisor engagements typically start in the mid-four to low-five figures per month plus paid media. The honest answer depends on your award pace target, territory model, and capital band. Book a call and we will price it the same day." },
    { q: "Do you also help with franchisee local marketing?", a: "Yes. We support franchise systems with national-to-local marketing infrastructure — but our flagship engagement is candidate development for the franchisor. Local marketing for franchisees is a separate program." },
  ],
  ctaHeading: "Ready to fix your candidate pipeline?",
  ctaBody: "Book a 30-minute development audit. We will review your current candidate site, Item 19 story, and award pace — and show you exactly where the leaks are.",
  serviceSchemaName: "Franchise Marketing Agency",
  serviceSchemaType: "Franchise Development Marketing for Franchisors",
  serviceSchemaDescription: "Candidate-developer pipelines, FDD-compliant marketing, and discovery-day attendance for emerging and established franchise brands.",
};

export default function FranchiseMarketingAgency() {
  return <MoneyPageTemplate config={config} />;
}
