import MoneyPageTemplate, { type MoneyPageConfig } from "@/components/MoneyPageTemplate";
import { Target, ShieldCheck, Users, Calendar, Search, LineChart } from "lucide-react";

const config: MoneyPageConfig = {
  canonical: "https://www.franchiseleadspro.com/franchise-broker-lead-generation",
  metaTitle: "Franchise Broker Lead Generation | Exclusive Candidate Pipelines",
  metaDescription: "Franchise broker lead generation for independent brokers, FBA / IFPG / FranNet / FranChoice members. Exclusive candidate-investors qualified and booked to your calendar.",
  ogTitle: "Franchise Broker Lead Generation — FranchiseLeads Pro",
  ogDescription: "Exclusive, capital-qualified candidate pipelines for franchise brokers and consultants.",
  badge: "Franchise Broker Lead Generation",
  h1Line1: "Franchise Broker",
  h1Line2: "Lead Generation",
  heroSubtitle: "Exclusive candidate-investor pipelines for franchise brokers and consultants. No shared portal leads, no resold candidates, no group-policy conflicts — just qualified discovery calls on your calendar.",
  problemHeading: "Why most franchise brokers stall after their first year",
  problemParagraphs: [
    "Independent franchise brokers usually launch on the back of three sources — personal referrals, network introductions, and shared portal leads from IFPG, Franchise Direct, BizBuySell, or Franchise Gator. All three sources work in the first 6–12 months. None of them scale.",
    "Referrals dry up between deals. Portal leads are sold to 3–5 other brokers and brands simultaneously, so every candidate is already in conversation with your competition. By month 18, most brokers report the same problem — not enough qualified candidates in the pipeline to hit the award targets they planned around.",
    "Franchise broker lead generation done right closes that gap. Exclusive paid acquisition, registration-state-aware funnels, capital-band qualification, and booked discovery calls — built specifically for the way brokers and consultants close deals.",
  ],
  whatYouGetHeading: "What franchise broker lead generation includes",
  whatYouGetSubtitle: "Built around the way brokers and consultants actually award territories.",
  whatYouGet: [
    { icon: <Target className="h-6 w-6" />, title: "Exclusive candidate delivery", body: "Every candidate is yours alone. Not resold to two other brokers. Not shared into a portal queue. Exclusive from first ad impression to closed award." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Capital-band qualification", body: "Pre-qualify candidates against capital ranges, net worth, liquidity, and timing before a discovery call is booked. Stop wasting hours on portal-style tire-kickers." },
    { icon: <Users className="h-6 w-6" />, title: "Group-policy compatible", body: "Engagements designed to complement FBA, IFPG, FranNet, and FranChoice affiliations — not violate group policies or compete with group lead distribution." },
    { icon: <Calendar className="h-6 w-6" />, title: "Calendar-booked discovery calls", body: "Qualified candidates auto-routed into your calendar in the time zone you actually work. No back-and-forth scheduling, no reminder chasing." },
    { icon: <Search className="h-6 w-6" />, title: "Multi-brand pipeline support", body: "Brokers representing multiple brands get reporting segmented by brand, capital band, and territory. Clean attribution across your portfolio." },
    { icon: <LineChart className="h-6 w-6" />, title: "Award-tied reporting", body: "Cost per qualified appointment, pipeline value, and cost per awarded territory tracked weekly — not impressions or raw lead counts." },
  ],
  whoItsForHeading: "Who we run franchise broker lead generation for",
  whoItsFor: [
    { title: "Independent franchise brokers", body: "Solo brokers operating in any US state who want a predictable, exclusive pipeline of qualified candidate-investors." },
    { title: "Franchise broker group members", body: "Brokers affiliated with FBA, IFPG, FranNet, or FranChoice building personal-brand acquisition channels alongside group affiliations — without violating group policies." },
    { title: "Multi-state franchise consultants", body: "Consultants active across multiple US states who need geo-segmented pipelines and territory-aware reporting." },
    { title: "Multi-brand brokers and consultancies", body: "Brokers representing 3+ brands who need pipeline reporting segmented by brand, capital band, and territory." },
    { title: "Broker groups and consultancies", body: "Small broker groups (2–10 brokers) wanting shared acquisition infrastructure with per-broker attribution." },
    { title: "Franchise consultants moving up-market", body: "Consultants graduating from referral-only pipelines to predictable, scalable lead flow." },
  ],
  processHeading: "How a franchise broker lead generation engagement unfolds",
  processSubtitle: "Built around the way brokers close deals.",
  process: [
    { step: "Week 1", title: "Discovery and positioning", body: "We audit your brand portfolio, territory rights, capital bands, and current lead sources. Positioning sharpened before any spend goes live." },
    { step: "Week 2", title: "Funnel build", body: "Landing pages, qualification logic, CRM workflow, and calendar integration built. Group-policy compatibility verified." },
    { step: "Week 3", title: "Launch", body: "Campaigns go live. First qualified discovery calls reach your calendar within 10–21 days." },
    { step: "Month 2+", title: "Scale", body: "Winning brands, capital bands, and geos scale. Underperforming segments cut. Monthly reviews tie spend to awarded deals." },
  ],
  whyHeading: "Why franchise brokers and consultants pick us",
  whyPoints: [
    "Franchise and high-ticket professional services only — we understand FDDs, Item 7, registration states, and broker-group dynamics from day one.",
    "Every lead is exclusive to you. Not shared with three other brokers, not resold via a portal.",
    "Capital, net worth, and timing qualification built into the funnel before discovery calls are booked.",
    "Engagements designed to complement FBA, IFPG, FranNet, and FranChoice affiliations — not violate them.",
    "Multi-brand reporting segmented by brand, capital band, and territory for clean attribution.",
    "Direct access to senior US-based strategists. No offshore handoff after the sales call.",
  ],
  faqHeading: "Questions franchise brokers ask us",
  faqs: [
    { q: "How is this different from IFPG, Franchise Direct, or BizBuySell shared portal leads?", a: "Portal leads are sold to 3–5 brokers and brands simultaneously, so every candidate is already in conversation with your competitors when you call them. Our engagements produce candidates exclusive to you, capital-band qualified, and booked directly to your calendar — not shared, not resold." },
    { q: "Will this conflict with my broker group affiliation (FBA, IFPG, FranNet, FranChoice)?", a: "No. Engagements are designed to complement group affiliations, not replace them. Group-distributed leads continue flowing as normal — we add an exclusive personal-brand pipeline alongside them. We work with member brokers of every major US group." },
    { q: "Can you support brokers representing multiple brands?", a: "Yes. Multi-brand brokers are a core engagement profile. Reporting segments by brand, capital band, and territory so you can see which brand and segment is producing your best deals." },
    { q: "How quickly will I see candidates?", a: "Most broker engagements produce the first qualified discovery call within 10–21 days of launch. Award compounding typically begins from month two onward as audiences and creative mature." },
    { q: "Do you handle registration-state compliance for the brands I represent?", a: "Yes. Campaigns running into the 13 US franchise registration states (CA, NY, IL, MD, MI, MN, ND, RI, SD, VA, WA, WI, HI) are built with state-appropriate disclosures and exclusions per brand." },
    { q: "What does franchise broker lead generation cost?", a: "Broker engagements typically start in the low four figures per month plus ad spend, scaled by appointment-volume targets and brand count. Book a strategy call for a same-day quote tied to your goals." },
  ],
  ctaHeading: "Ready to build an exclusive broker pipeline?",
  ctaBody: "Book a 30-minute strategy call. We will audit your current sources, map the brands and capital bands worth targeting, and quote you the same day.",
  serviceSchemaName: "Franchise Broker Lead Generation",
  serviceSchemaType: "Franchise Broker Lead Generation",
  serviceSchemaDescription: "Exclusive candidate-investor pipelines for franchise brokers, consultants, and multi-brand brokerages — compatible with FBA, IFPG, FranNet, and FranChoice affiliations.",
};

export default function FranchiseBrokerLeadGeneration() {
  return <MoneyPageTemplate config={config} />;
}
