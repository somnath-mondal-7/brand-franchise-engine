import MoneyPageTemplate, { type MoneyPageConfig } from "@/components/MoneyPageTemplate";
import { Target, ShieldCheck, Users, Calendar, Search, LineChart } from "lucide-react";

const config: MoneyPageConfig = {
  canonical: "https://www.franchiseleadspro.com/franchise-leads-usa",
  metaTitle: "Franchise Leads USA — Exclusive, Capital-Qualified | FranchiseLeadsPro",
  metaDescription: "Franchise leads USA — exclusive, capital-qualified franchise buyer leads across all 50 states. Discovery calls booked to your calendar. Not shared portal leads.",
  ogTitle: "Franchise Leads USA — Exclusive & Capital-Qualified",
  ogDescription: "Exclusive US franchise leads for franchisors, brokers, and consultants. All 50 states, all 13 registration jurisdictions.",
  badge: "Franchise Leads — United States",
  h1Line1: "Franchise Leads",
  h1Line2: "USA — Exclusive & Qualified",
  heroSubtitle: "Exclusive, capital-qualified franchise leads across all 50 US states. Discovery calls booked straight to your calendar — every state, every registration jurisdiction, every capital band from $50k entry concepts to $1.5M+ area-developer awards.",

  problemHeading: "Why most US franchise lead generation fails (and what fixes it)",
  problemParagraphs: [
    "US franchisors and brokers do not have a demand problem. The US franchise sector spans roughly 800,000+ operating units across 26,000+ brand concepts, and an estimated 350,000+ Americans research franchise ownership every year. The category produces around $898B in annual economic output. The candidates exist.",
    "What fails is the acquisition infrastructure most franchise organizations rely on. Shared portal leads (Franchise Direct, BizBuySell, IFPG, Franchise Gator) are resold to 3-5 competitors simultaneously, so every conversation starts already crowded. Generic digital marketing agencies don't know what an FDD is, can't navigate registration states, and treat franchise candidates like e-commerce shoppers. In-house teams are expensive, slow, and almost impossible to keep staffed with senior franchise-development talent.",
    "Our US franchise lead generation engagements close that gap. Paid acquisition, exclusive landing pages, capital-band qualification, registration-state compliance, and discovery calls booked straight to your calendar — built specifically for the way US franchise candidates research, qualify, and award.",
  ],
  whatYouGetHeading: "What a US franchise lead generation engagement includes",
  whatYouGetSubtitle: "Engineered for the regulatory and geographic reality of US franchise development.",
  whatYouGet: [
    { icon: <Target className="h-6 w-6" />, title: "All-50-state campaign architecture", body: "Geo-targeted campaigns calibrated by state-level franchise activity, candidate-investor density, and the 13 US franchise registration states (CA, NY, IL, MD, MI, MN, ND, RI, SD, VA, WA, WI, HI)." },
    { icon: <Search className="h-6 w-6" />, title: "Industry-vertical filtering", body: "Candidate flow filtered by industry preference — food and beverage, fitness, senior care, home services, education, automotive, beauty and wellness — to match what your brand portfolio actually awards." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Capital-band qualification", body: "Pre-qualify against US-specific capital bands and Item 7 ranges: $50-150k entry-level, $150-500k mid-tier, $500k-1.5M multi-unit, $1.5M+ area developer. Net worth and liquidity verified upfront." },
    { icon: <Calendar className="h-6 w-6" />, title: "Time-zone-aware booking", body: "Discovery calls auto-route into your calendar respecting US time zones. East-coast and west-coast candidates land at sensible hours without you fighting Calendly logic at 11pm." },
    { icon: <Users className="h-6 w-6" />, title: "Exclusive lead delivery", body: "Every candidate is yours alone. Not resold across three other brokers, not shared into a portal queue. Exclusive from first ad impression to closed award." },
    { icon: <LineChart className="h-6 w-6" />, title: "Award-tied reporting", body: "Performance reporting segmented by state, region, capital band, and industry. Cost per qualified appointment, pipeline value, and cost per awarded territory — not vanity impressions." },
  ],
  whoItsForHeading: "Who we run US franchise lead generation for",
  whoItsFor: [
    { title: "Emerging US franchisors (1–50 units)", body: "Founders awarding their first US territories who need a national pipeline without hiring a full in-house development team." },
    { title: "Established US franchise brands (50+ units)", body: "Systems maintaining award pace, expanding into new registration states, or replacing an underperforming in-house team or agency." },
    { title: "Independent franchise brokers and consultants", body: "Solo brokers and small groups — including members of FBA, IFPG, FranNet, and FranChoice — building exclusive personal-brand pipelines alongside their group affiliations." },
    { title: "Master franchisees and area developers", body: "Multi-unit operators recruiting sub-franchisees and unit operators across a defined US territory." },
    { title: "International brands entering the US", body: "Non-US franchise systems launching in America who need a US-native acquisition partner that understands FDDs and registration states from day one." },
    { title: "PE-backed franchise platforms", body: "Private-equity-backed systems with aggressive unit-growth targets who need accountable, scalable US acquisition." },
  ],
  processHeading: "How a US franchise lead generation engagement unfolds",
  processSubtitle: "Tight, accountable, and built around the way US franchise candidates actually buy.",
  process: [
    { step: "Week 1", title: "Discovery and US positioning audit", body: "We audit your FDD, capital bands, registration footprint, and current acquisition channels. Positioning sharpened for US candidate culture before any spend goes live." },
    { step: "Week 2", title: "Funnel and qualification build", body: "Landing pages, qualification logic, CRM workflow, and calendar integration built. Registration-state disclosures and exclusions wired in." },
    { step: "Week 3", title: "Multi-region launch", body: "Campaigns go live across selected US states and regions. First qualified discovery calls reach your calendar within 10–21 days." },
    { step: "Month 2+", title: "Scale by state and segment", body: "Winning states, capital bands, and industry verticals scale. Underperforming geos get reallocated. Monthly reviews tie spend to awarded territories." },
  ],
  whyHeading: "Why US franchisors and brokers pick us for lead generation",
  whyPoints: [
    "We work exclusively in franchise, brokerage, and high-ticket professional services — we speak FDD, Item 7, registration state, and capital band from day one.",
    "Every lead is exclusive to you. We do not run shared portals or resell candidates to competitors.",
    "All-50-state geo-targeting with capital-band and industry-vertical filtering — your pipeline matches your actual award sweet spot.",
    "Registration-state compliance handled by default for all 13 US franchise registration states. No California, New York, or Maryland regulatory surprises.",
    "Time-zone-aware scheduling, US-native creative, US-dollar reporting — built for the US franchise market, not a copy-paste of a global template.",
    "Direct access to senior US-based strategists. No offshore account management after the sales call.",
  ],
  faqHeading: "Common questions about US franchise lead generation",
  faqs: [
    { q: "What is franchise lead generation, exactly?", a: "Franchise lead generation is the process of attracting, qualifying, and booking candidate-investors who are evaluating buying a franchise — whether for a franchisor awarding territories or a broker representing multiple brands. It combines paid acquisition (Meta, Google, LinkedIn), landing pages, qualification logic, CRM workflow, and calendar booking into a single pipeline." },
    { q: "How is this different from franchise portal leads (Franchise Direct, IFPG, BizBuySell)?", a: "Portal leads are sold to 3–5 brokers and brands simultaneously, so every candidate is already in conversation with your competitors when you reach them. Our engagements produce candidates exclusive to you, qualified against your capital bands, and booked directly to your calendar — not shared, not resold." },
    { q: "Do you handle the 13 US franchise registration states?", a: "Yes. Campaigns running into California, New York, Illinois, Maryland, Michigan, Minnesota, North Dakota, Rhode Island, South Dakota, Virginia, Washington, Wisconsin, and Hawaii are built with state-appropriate disclosures and exclusions. Your candidate site stays compliant without compromising conversion." },
    { q: "Can you target specific US states, regions, or metros?", a: "Yes. Targeting can run nationally, regionally (Northeast, Southeast, Midwest, West, South Central), state-specific, or down to metro-level depending on your FDD registration footprint and award territory rights." },
    { q: "How quickly will US franchise candidates start reaching my calendar?", a: "Most engagements produce the first qualified discovery call within 10–21 days of launch. Capital-band qualified candidates typically begin compounding from month two onward as audiences and creative mature." },
    { q: "Do you work with both franchisors and franchise brokers?", a: "Yes — both. Franchisors awarding their own territories, and independent brokers or consultants representing multiple brands. The funnel architecture is similar; the qualification logic and reporting differ by use case." },
    { q: "How is qualification handled before the appointment?", a: "Qualification is built into the funnel — capital range, net worth band, liquidity, timeline, geography, and industry preference are all captured and screened before a discovery call is booked. You spend time on real prospects, not portal-style tire-kickers." },
    { q: "What does US franchise lead generation cost?", a: "US engagements typically start in the low-to-mid four figures per month plus ad spend, scaled by appointment-volume targets and geographic footprint. Book a strategy call for a same-day quote tied to your goals." },
  ],
  ctaHeading: "Ready to build a US franchise lead generation pipeline?",
  ctaBody: "Book a 30-minute strategy call. We will audit your current US acquisition, map the states and capital bands worth targeting, and quote you the same day.",
  serviceSchemaName: "Franchise Lead Generation USA",
  serviceSchemaType: "Franchise Lead Generation Service",
  serviceSchemaDescription: "Exclusive, capital-qualified franchise lead generation for US franchisors, brokers, and consultants across all 50 states and 13 registration jurisdictions.",
};

export default function FranchiseLeadsUSA() {
  return <MoneyPageTemplate config={config} />;
}
