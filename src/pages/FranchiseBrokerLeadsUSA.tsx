import MoneyPageTemplate, { type MoneyPageConfig } from "@/components/MoneyPageTemplate";
import { Target, Search, MessageSquare, Calendar, Users, ShieldCheck } from "lucide-react";

const config: MoneyPageConfig = {
  canonical: "https://www.franchiseleadspro.com/franchise-broker-lead-generation-usa",
  metaTitle: "Franchise Broker Lead Generation USA | Nationwide Exclusive Pipelines",
  metaDescription: "Nationwide US franchise broker lead generation for independent brokers and consultants. Exclusive, capital-qualified candidates booked to your calendar — every state, every capital band.",
  ogTitle: "Franchise Broker Lead Generation USA",
  ogDescription: "Nationwide exclusive candidate-investor pipelines for US franchise brokers and consultants.",
  badge: "US Broker Lead Generation — Nationwide",
  h1Line1: "Franchise Broker Lead Generation",
  h1Line2: "USA",
  heroSubtitle: "Nationwide lead generation for US franchise brokers and consultants. We build exclusive candidate-investor pipelines across all 50 states — calibrated to the territories, industries, and capital bands you actually want.",
  problemHeading: "The US franchise broker market is enormous — and most brokers cannot reach it",
  problemParagraphs: [
    "The United States hosts roughly 800,000+ operating franchised units across 26,000+ brand concepts, with approximately 350,000+ Americans researching franchise ownership annually. Independent franchise brokers and consultants represent a substantial slice of those awards through groups like FBA, IFPG, FranNet, and FranChoice.",
    "Yet the market gap is the same across virtually every independent US broker — not enough qualified candidates in the pipeline. Personal referrals plateau. Network introductions run out between awards. Shared portal leads (Franchise Direct, BizBuySell, IFPG group leads) arrive already split with three to five other brokers.",
    "We close that gap. Nationwide paid acquisition, exclusive landing pages, capital-band qualification, registration-state-aware compliance, and discovery calls booked straight to your calendar — built specifically for the way US franchise brokers and consultants close deals.",
  ],
  whatYouGetHeading: "What a nationwide US broker engagement includes",
  whatYouGetSubtitle: "Built for the regulatory and geographic reality of US franchise brokerage.",
  whatYouGet: [
    { icon: <Target className="h-6 w-6" />, title: "All-50-state campaign targeting", body: "Geo-targeted campaigns calibrated by state-level franchise activity, candidate density, and the 13 US franchise registration states (CA, NY, IL, MD, MI, MN, ND, RI, SD, VA, WA, WI, HI)." },
    { icon: <Search className="h-6 w-6" />, title: "Industry-vertical filtering", body: "Filter candidate flow by industry preference — food and beverage, fitness, senior care, home services, education, automotive, beauty and wellness — to match the brands you actually represent." },
    { icon: <MessageSquare className="h-6 w-6" />, title: "Capital-band qualification", body: "Pre-qualify candidates against US-specific Item 7 capital bands: $50-150k entry, $150-500k mid-tier, $500k+ multi-unit and area-developer. Net worth verified upfront." },
    { icon: <Calendar className="h-6 w-6" />, title: "Time-zone-aware booking", body: "Discovery calls auto-route into your calendar respecting US time zones. East-coast and west-coast candidates land at sensible hours." },
    { icon: <Users className="h-6 w-6" />, title: "Group-policy compatible", body: "Engagements designed to complement FBA, IFPG, FranNet, and FranChoice affiliations — never violate group policies or compete with group lead distribution." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Registration-state compliance", body: "Campaign creative and disclosures handled correctly for all 13 US franchise registration states. No regulatory surprises across your representation footprint." },
  ],
  whoItsForHeading: "Who we work with across the United States",
  whoItsFor: [
    { title: "Independent US franchise brokers", body: "Solo brokers operating in any US state who want a predictable, exclusive pipeline of qualified candidate-investors." },
    { title: "Franchise broker group members", body: "FBA, IFPG, FranNet, and FranChoice members building personal-brand acquisition channels alongside group affiliations — without violating policies." },
    { title: "Multi-state franchise consultants", body: "Consultants active across multiple US states who need geo-segmented pipelines and territory-aware reporting." },
    { title: "Multi-brand brokerages", body: "Brokers representing 3+ brands who need clean attribution and reporting segmented by brand, capital band, and state." },
    { title: "Master franchise developers", body: "Area developers and master franchisees recruiting unit-level operators across multi-state territories." },
    { title: "Emerging US franchise brands", body: "First 1–50 unit US franchisors who need a national-grade development engine without the cost of a full in-house team." },
  ],
  processHeading: "How a US nationwide broker engagement unfolds",
  processSubtitle: "Built around the 50-state reality of US franchise brokerage.",
  process: [
    { step: "Week 1", title: "National positioning and registration audit", body: "We audit your brand portfolio, registration footprint, capital bands, and current sources. National positioning sharpened before any spend goes live." },
    { step: "Week 2", title: "Nationwide funnel build", body: "Multi-state landing pages, qualification logic, CRM workflow, and calendar booking built. Registration-state disclosures and exclusions wired in." },
    { step: "Week 3", title: "Multi-region launch", body: "Campaigns go live across selected US regions. First qualified discovery calls reach your calendar within 10–21 days." },
    { step: "Month 2+", title: "Scale by state and segment", body: "Winning states, capital bands, and verticals scale. Underperforming geos reallocated. Monthly reviews tie spend to awarded territories." },
  ],
  whyHeading: "Why US franchise brokers pick us",
  whyPoints: [
    "Franchise and high-ticket professional services only — we speak FDD, Item 7, registration state, and group-policy from day one.",
    "Every lead is exclusive to you. Not shared with three other brokers, not resold via a portal.",
    "All-50-state geo-targeting with capital-band and industry-vertical filtering — your pipeline matches your award sweet spot.",
    "Registration-state compliance handled by default for all 13 US registration states.",
    "Time-zone-aware scheduling, US-native creative, US-dollar reporting — built for the US franchise market.",
    "Direct access to senior US-based strategists. No offshore handoff after the sales call.",
  ],
  faqHeading: "Questions US franchise brokers ask us",
  faqs: [
    { q: "Can you target specific US states or regions?", a: "Yes. Targeting can be national, regional (Northeast, Southeast, Midwest, West, South Central), state-specific, or down to metro level depending on your representation rights." },
    { q: "How do you handle US franchise registration-state requirements?", a: "Campaigns running into the 13 US registration states (CA, NY, IL, MD, MI, MN, ND, RI, SD, VA, WA, WI, HI) are built with state-appropriate disclosures and exclusions per brand you represent." },
    { q: "Will this conflict with my FBA, IFPG, FranNet, or FranChoice affiliation?", a: "No. Engagements are designed to complement group affiliations, not replace them. Group-distributed leads continue flowing — we add an exclusive personal-brand pipeline alongside them." },
    { q: "How long before I see US-based qualified candidates?", a: "Most US broker engagements produce the first qualified discovery call within 10–21 days of launch. Award compounding typically begins from month two onward." },
    { q: "Can you support multi-state and multi-brand portfolios?", a: "Yes. Brokers representing multiple brands across multiple US states are our standard engagement profile. Reporting segments by brand, state, and capital band for clean attribution." },
    { q: "What does it cost?", a: "US nationwide broker engagements typically start in the low-to-mid four figures per month plus ad spend, scaled by appointment-volume targets and geographic footprint. Book a strategy call for a same-day quote." },
  ],
  ctaHeading: "Ready to build a nationwide US franchise broker pipeline?",
  ctaBody: "Book a 30-minute strategy call. We will audit your current US acquisition, map the states and capital bands worth targeting, and quote you the same day.",
  serviceSchemaName: "Franchise Broker Lead Generation USA",
  serviceSchemaType: "Nationwide Franchise Broker Lead Generation",
  serviceSchemaDescription: "Nationwide exclusive candidate-investor pipelines for US franchise brokers, consultants, and franchisors across all 50 states and 13 registration jurisdictions.",
};

export default function FranchiseBrokerLeadsUSA() {
  return <MoneyPageTemplate config={config} />;
}
