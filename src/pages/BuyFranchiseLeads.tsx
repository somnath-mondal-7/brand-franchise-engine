import MoneyPageTemplate, { type MoneyPageConfig } from "@/components/MoneyPageTemplate";
import { ShoppingCart, ShieldCheck, Users, Calendar, Target, LineChart } from "lucide-react";

const config: MoneyPageConfig = {
  canonical: "https://www.franchiseleadspro.com/buy-franchise-leads",
  metaTitle: "Buy Franchise Leads | Pre-Qualified Franchise Buyer Leads for Sale",
  metaDescription: "Buy pre-qualified franchise buyer leads from FranchiseLeadsPro. We deliver verified, intent-based leads of franchise investors actively looking to invest.",
  ogTitle: "Buy Franchise Leads — Exclusive and Qualified",
  ogDescription: "Buy franchise leads the right way — exclusive, capital-qualified, booked to your calendar.",
  badge: "Buy Franchise Leads — The Right Way",
  h1Line1: "Buy Franchise",
  h1Line2: "Leads",
  heroSubtitle: "Most franchise leads sold online are shared 3–5 ways and barely qualified. Ours are exclusive to you, screened against your capital bands, and booked to your calendar as discovery calls — not raw contact records.",
  problemHeading: "What people actually mean when they search 'buy franchise leads'",
  problemParagraphs: [
    "When franchisors and brokers search 'buy franchise leads,' they usually find two things — shared portal aggregators (Franchise Direct, BizBuySell, IFPG, Franchise Gator) selling the same candidate to multiple buyers, or pay-per-lead vendors selling raw contact records with no qualification beyond a form fill.",
    "Both models break at scale. Shared leads start every conversation crowded with competitors. Raw contact-record leads burn your sales hours on tire-kickers who never had the capital or timing to award.",
    "Our model is different. You are not buying lead records — you are buying qualified discovery calls. Exclusive candidate flow, capital-band qualification before booking, and registration-state compliance built in. The unit of delivery is a real conversation, not a CSV row.",
  ],
  whatYouGetHeading: "What you actually get when you buy franchise leads from us",
  whatYouGetSubtitle: "Discovery calls, not contact records.",
  whatYouGet: [
    { icon: <ShoppingCart className="h-6 w-6" />, title: "Exclusive lead delivery", body: "Every candidate is yours alone. Never resold to two other brokers. Never pushed into a shared portal queue. Exclusive from first impression to closed award." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Capital-band screening", body: "Candidates pre-qualified against your capital ranges, net worth, liquidity, and timing before a discovery call is booked. No tire-kickers." },
    { icon: <Calendar className="h-6 w-6" />, title: "Calendar-booked appointments", body: "Qualified candidates auto-routed into your calendar in your time zone. You buy conversations, not contact records." },
    { icon: <Target className="h-6 w-6" />, title: "Industry and geography targeting", body: "Candidate flow filtered by industry preference, capital band, and US state — so you only pay for candidates that match your award sweet spot." },
    { icon: <Users className="h-6 w-6" />, title: "Registration-state compliance", body: "All 13 US franchise registration states handled correctly. Your candidate site stays compliant, your appointments come from compliant traffic." },
    { icon: <LineChart className="h-6 w-6" />, title: "Transparent unit economics", body: "Clear cost per qualified appointment, pipeline value, and cost per awarded territory. No hidden fees, no surprise rate cards." },
  ],
  whoItsForHeading: "Who buys franchise leads from us",
  whoItsFor: [
    { title: "Franchisors awarding territories", body: "Emerging and established brands who need predictable, exclusive candidate flow instead of shared portal traffic." },
    { title: "Independent franchise brokers", body: "Brokers who are done splitting portal leads with competitors and want exclusive candidates booked to their calendar." },
    { title: "Multi-brand consultancies", body: "Consultants representing multiple brands who need clean attribution and exclusive flow per brand." },
    { title: "Master franchisees and area developers", body: "Multi-unit operators recruiting sub-franchisees who need geo-targeted, qualified candidate flow." },
    { title: "Franchise systems testing new markets", body: "Brands testing demand in new states or regions before committing development resources." },
    { title: "PE-backed franchise platforms", body: "Investor-backed systems with aggressive unit-growth targets who need accountable, scalable candidate acquisition." },
  ],
  processHeading: "How buying franchise leads from us works",
  processSubtitle: "Three weeks from first call to first booked appointment.",
  process: [
    { step: "Week 1", title: "Scope and qualification spec", body: "We define your capital bands, target geographies, industry preferences, and appointment-volume targets. Pricing locked." },
    { step: "Week 2", title: "Funnel build", body: "Exclusive landing pages, qualification logic, CRM workflow, and calendar integration built. Registration-state disclosures wired in." },
    { step: "Week 3", title: "First appointments", body: "Campaigns go live. First qualified discovery calls reach your calendar within 10–21 days of launch." },
    { step: "Month 2+", title: "Scale", body: "Winning audiences and geographies scale. Underperforming segments cut. Monthly reviews tie spend to awarded territories." },
  ],
  whyHeading: "Why this is the right way to buy franchise leads",
  whyPoints: [
    "Exclusive — never resold, never shared with competitor brokers or brands.",
    "Capital-band qualified before the appointment, not after — you spend time on real prospects.",
    "Booked discovery calls, not raw contact records — the unit of delivery is a conversation.",
    "Registration-state compliance handled by default for all 13 US registration states.",
    "Industry and geography targeting calibrated to your award sweet spot.",
    "Transparent unit economics — cost per appointment, pipeline value, cost per award.",
  ],
  faqHeading: "Questions buyers ask before they buy franchise leads from us",
  faqs: [
    { q: "How is this different from buying franchise leads from a portal?", a: "Portal leads (Franchise Direct, BizBuySell, IFPG, Franchise Gator) are sold to 3–5 brokers and brands simultaneously, so every candidate is already in conversation with your competitors. Our leads are exclusive to you, capital-band qualified, and delivered as booked discovery calls — not shared, not resold, not raw contact records." },
    { q: "Are these leads exclusive?", a: "Yes — 100% exclusive. Every candidate is yours alone, from first ad impression to closed award. We do not resell, we do not share, we do not run a portal." },
    { q: "Do you charge per lead, per appointment, or monthly?", a: "Engagements are typically structured as a monthly retainer plus ad spend, with appointment-volume targets built into the agreement. This produces better unit economics than pay-per-lead pricing because you are not paying a markup on every contact record." },
    { q: "How qualified are the candidates?", a: "Candidates are pre-screened against your capital range, net worth, liquidity, timing, geography, and industry preference before a discovery call is booked. Tire-kickers do not reach your calendar." },
    { q: "How many appointments will I get per month?", a: "Appointment volume is contracted upfront based on your spend level, capital-band targets, and geographic footprint. Most engagements deliver between 8 and 40+ qualified appointments per month depending on configuration." },
    { q: "How quickly can I start receiving appointments?", a: "Most engagements deliver the first qualified discovery call within 10–21 days of launch. Volume scales from month two as audiences and creative mature." },
  ],
  ctaHeading: "Ready to buy franchise leads the right way?",
  ctaBody: "Book a 30-minute strategy call. We will scope your capital bands, geographies, and appointment targets, and quote you the same day.",
  serviceSchemaName: "Buy Franchise Leads",
  serviceSchemaType: "Franchise Lead Generation",
  serviceSchemaDescription: "Exclusive, capital-qualified franchise candidate-investors delivered as booked discovery calls — not shared portal records.",
};

export default function BuyFranchiseLeads() {
  return <MoneyPageTemplate config={config} />;
}
