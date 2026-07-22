import MoneyPageTemplate, { type MoneyPageConfig } from "@/components/MoneyPageTemplate";
import { Award, Target, ShieldCheck, Users, BarChart3, Sparkles } from "lucide-react";

const config: MoneyPageConfig = {
  canonical: "https://www.franchiseleadspro.com/best-franchise-leads-agency",
  metaTitle: "Best Franchise Leads Agency in the USA (2026) | FranchiseLeadsPro",
  metaDescription: "Best franchise leads agency in the USA — exclusive, capital-qualified candidate-investors booked to your calendar. No shared portal leads. Franchisors, brokers, consultants.",
  ogTitle: "Best Franchise Leads Agency in the USA",
  ogDescription: "The best franchise leads agency for US franchisors and brokers who want exclusive, qualified pipeline.",
  badge: "Best Franchise Leads Agency — USA",
  h1Line1: "The Best Franchise Leads Agency",
  h1Line2: "in the USA",
  heroSubtitle: "Franchisors and brokers don't need more shared portal leads. They need exclusive, capital-qualified candidate-investors booked straight to their calendar — from an agency that only works in franchise. That's what we build.",

  problemHeading: "What actually separates the best franchise leads agency from the rest",
  problemParagraphs: [
    "Most franchise lead vendors fall into one of three buckets. Portal aggregators (Franchise Direct, BizBuySell, IFPG shared leads) sell the same candidate to 3-5 brokers simultaneously. General digital marketing agencies treat franchise like SaaS or e-commerce — they have no idea what an FDD is, what a registration state requires, or why capital qualification matters.",
    "The third bucket is in-house teams: expensive to staff, slow to scale, and almost impossible to keep loaded with senior franchise-development talent. Even when a franchisor gets it right, attrition and ad-platform changes break the engine inside 18 months.",
    "The best franchise leads agency does three things differently — works <strong>only</strong> in franchise and high-ticket professional services, builds <strong>exclusive</strong> pipelines (never shared), and runs the qualification and booking infrastructure themselves so franchisors and brokers spend their time on discovery calls, not chasing cold leads.",
  ],
  whatYouGetHeading: "What you get when you hire the best",
  whatYouGetSubtitle: "Built for franchise development, not generic lead-gen.",
  whatYouGet: [
    { icon: <Target className="h-6 w-6" />, title: "Exclusive lead delivery", body: "Every candidate is yours alone. Not resold to two other brokers. Not pushed into a shared portal queue. Exclusive from first impression to closed award." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Capital and net-worth qualification", body: "Candidates are pre-screened against your capital bands and liquidity requirements before they ever reach your calendar. Discovery calls are with real prospects, not tire-kickers." },
    { icon: <Users className="h-6 w-6" />, title: "Senior franchise-native strategists", body: "Your account is run by people who have built franchise pipelines for emerging and established brands — not a generic account manager learning your industry on your dime." },
    { icon: <Award className="h-6 w-6" />, title: "Registration-state compliance", body: "Creative and disclosures handled correctly for all 13 US franchise registration states. Your candidate site stays compliant from day one." },
    { icon: <BarChart3 className="h-6 w-6" />, title: "Transparent ROI reporting", body: "Cost per qualified appointment, cost per awarded territory, and pipeline value tracked weekly. No vanity metrics, no agency-speak." },
    { icon: <Sparkles className="h-6 w-6" />, title: "End-to-end pipeline ownership", body: "Landing page, ad creative, qualification logic, CRM workflow, calendar booking, and follow-up sequences — all built and operated by us." },
  ],
  whoItsForHeading: "Who hires the best franchise leads agency",
  whoItsFor: [
    { title: "Emerging franchisors (1–50 units)", body: "Founders awarding their first territories who need a national pipeline without hiring a full development team." },
    { title: "Established franchise brands (50+ units)", body: "Systems maintaining award pace, opening new registration states, or replacing an underperforming in-house team." },
    { title: "Independent franchise brokers and consultants", body: "Solo brokers and small groups (FBA, IFPG, FranNet, FranChoice members) building their own exclusive acquisition channel." },
    { title: "Master franchisees and area developers", body: "Multi-unit operators recruiting sub-franchisees and unit operators across a defined territory." },
    { title: "Franchise consultants moving up-market", body: "Consultants ready to graduate from referral-only pipelines to predictable, scalable lead flow." },
    { title: "International brands entering the US", body: "Non-US franchise systems launching in the United States who need a US-native acquisition partner." },
  ],
  processHeading: "How we work — the best-agency playbook",
  processSubtitle: "Tight, accountable, and built to award territories.",
  process: [
    { step: "Week 1", title: "Discovery and offer audit", body: "We audit your FDD, capital bands, registration footprint, and current acquisition channels. Positioning sharpened before any campaign goes live." },
    { step: "Week 2", title: "Funnel and qualification build", body: "Landing pages, qualification logic, CRM workflow, and calendar integration built and tested. Compliance disclosures wired in." },
    { step: "Week 3", title: "Launch and first appointments", body: "Campaigns go live. First qualified discovery calls reach your calendar within 10–21 days." },
    { step: "Month 2+", title: "Scale and optimize", body: "Winning audiences, capital bands, and geographies scale. Underperforming segments cut. Monthly reviews tie spend to awarded territories." },
  ],
  whyHeading: "Why we are the best franchise leads agency for your stage",
  whyPoints: [
    "We work exclusively in franchise, brokerage, and high-ticket professional services — no e-commerce, no SaaS distraction.",
    "Every lead is exclusive to you. We do not run shared portals or resell candidates.",
    "Capital, net worth, and timing qualification built into the funnel — not after the discovery call.",
    "Registration-state compliance handled by default for all 13 US registration states.",
    "Senior franchise-native strategists own your account end-to-end. No offshore handoff.",
    "Performance reporting tied to awarded territories and pipeline value — not impressions or clicks.",
  ],
  faqHeading: "Common questions about hiring the best franchise leads agency",
  faqs: [
    { q: "What makes one franchise leads agency better than another?", a: "Three things — exclusivity (leads are yours alone, not shared), franchise-native expertise (the team understands FDDs, registration states, and capital bands), and pipeline ownership end-to-end (landing pages, qualification, booking, follow-up all run by the agency, not patched together by the client)." },
    { q: "How is this different from buying franchise leads from a portal?", a: "Portal leads (Franchise Direct, BizBuySell, IFPG shared) are sold to multiple brokers and brands simultaneously, so every candidate is already in conversation with your competitors. Our engagements produce candidates exclusive to you, qualified against your capital bands, and booked directly to your calendar." },
    { q: "Do you work with both franchisors and franchise brokers?", a: "Yes — both. Franchisors awarding their own territories, and independent brokers or consultants representing multiple brands. The funnel architecture is similar; the qualification logic and reporting differ by use case." },
    { q: "How quickly will I see results?", a: "Most clients see the first qualified discovery call within 10–21 days of launch. Awarded territories typically begin compounding from month two onward, as the funnel optimizes and audiences mature." },
    { q: "What does the best franchise leads agency cost?", a: "Engagements typically start in the low-to-mid four figures per month plus ad spend, scaled by appointment-volume targets and geographic footprint. Book a strategy call for a same-day quote tied to your goals." },
    { q: "Do you guarantee a number of appointments?", a: "We commit to qualified-appointment volume targets in writing, tied to the spend level and geographic footprint of the engagement. We do not guarantee awarded territories — that depends on your discovery and FDD process — but we are accountable for the appointments that feed it." },
  ],
  ctaHeading: "Ready to work with the best franchise leads agency?",
  ctaBody: "Book a 30-minute strategy call. We will audit your current acquisition, map the segments worth targeting, and quote you the same day.",
  serviceSchemaName: "Best Franchise Leads Agency",
  serviceSchemaType: "Franchise Lead Generation Agency",
  serviceSchemaDescription: "Exclusive, capital-qualified franchise candidate-investor pipelines for franchisors, brokers, and consultants.",
};

export default function BestFranchiseLeadsAgency() {
  return <MoneyPageTemplate config={config} />;
}
