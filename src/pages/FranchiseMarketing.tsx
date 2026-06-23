import MoneyPageTemplate, { type MoneyPageConfig } from "@/components/MoneyPageTemplate";
import { Megaphone, Target, ShieldCheck, Users, BarChart3, Sparkles } from "lucide-react";

const config: MoneyPageConfig = {
  canonical: "https://www.franchiseleadspro.com/franchise-marketing",
  metaTitle: "Franchise Marketing | Award-Tied Demand Generation for Franchisors",
  metaDescription: "Franchise marketing built for franchisors and brokers. Candidate acquisition, brand positioning, registration-state compliance, and award-tied reporting under one roof.",
  ogTitle: "Franchise Marketing — FranchiseLeads Pro",
  ogDescription: "Franchise marketing for franchisors who want awarded territories, not impressions.",
  badge: "Franchise Marketing — Award-Tied",
  h1Line1: "Franchise",
  h1Line2: "Marketing",
  heroSubtitle: "Franchise marketing engineered for the way candidate-investors actually evaluate and award. Brand positioning, paid acquisition, qualification funnels, and reporting — all built around FDDs, registration states, and Item 7 capital bands.",
  problemHeading: "What franchise marketing actually means (and why most agencies miss it)",
  problemParagraphs: [
    "Franchise marketing is not consumer marketing for franchised brands. It is the discipline of attracting and qualifying candidate-investors who are evaluating buying into a franchise system — a completely different audience, completely different journey, completely different qualification logic.",
    "A franchise candidate typically spends 6–18 weeks evaluating concepts, reviews FDDs and Item 7 capital disclosures, qualifies against registration-state requirements, frequently engages 3–5 brands in parallel, and ultimately commits capital in the $50k–$5M range depending on the concept. Generic 'franchise marketing' that runs the same Meta-and-Google playbook used for e-commerce produces clicks, not awarded territories.",
    "Real franchise marketing is built around that arc — brand positioning calibrated for candidate-investors, paid acquisition tuned to long evaluation cycles, qualification funnels that screen for capital and timing, and reporting that ties spend to awarded territories rather than vanity impressions.",
  ],
  whatYouGetHeading: "What franchise marketing should actually cover",
  whatYouGetSubtitle: "Six disciplines that decide whether a franchise system awards territories or just generates clicks.",
  whatYouGet: [
    { icon: <Megaphone className="h-6 w-6" />, title: "Brand and positioning", body: "Candidate-facing brand identity, founder narrative, FDD-aligned messaging, and competitive positioning against other brands in your category." },
    { icon: <Target className="h-6 w-6" />, title: "Candidate-acquisition campaigns", body: "Meta, Google, LinkedIn, and YouTube campaigns engineered for franchise candidate behavior — multi-touch journeys, qualification-first messaging." },
    { icon: <Users className="h-6 w-6" />, title: "Qualification funnels", body: "Landing pages and qualification logic that screen against Item 7 capital ranges, net worth, liquidity, and timing — before a discovery call is booked." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Registration-state compliance", body: "Creative, disclosures, and exclusions handled correctly across all 13 US franchise registration states. Compliant by default." },
    { icon: <BarChart3 className="h-6 w-6" />, title: "Award-tied reporting", body: "Cost per qualified appointment, pipeline value, and cost per awarded territory tracked weekly. No vanity impressions or 'engagement' filler." },
    { icon: <Sparkles className="h-6 w-6" />, title: "CRM and follow-up infrastructure", body: "CRM workflow, calendar booking, and nurture sequences engineered for the multi-week franchise candidate evaluation arc." },
  ],
  whoItsForHeading: "Who we run franchise marketing for",
  whoItsFor: [
    { title: "Emerging franchisors (1–50 units)", body: "Brands awarding their first territories who need a national-grade franchise marketing engine without the cost of a full in-house development team." },
    { title: "Established franchisors (50+ units)", body: "Systems maintaining award pace, expanding into new registration states, or rebuilding after an agency change." },
    { title: "International brands entering the US", body: "Non-US franchise systems launching in America who need a US-native marketing partner that understands FDDs and registration states." },
    { title: "Multi-brand franchise groups", body: "Holding companies operating multiple franchise brands who want consolidated marketing infrastructure across portfolio brands." },
    { title: "Private-equity-backed franchise platforms", body: "PE-backed systems with aggressive unit-growth targets who need audit-ready, scalable franchise marketing." },
    { title: "Refranchising and territory-rebuild engagements", body: "Brands rebalancing corporate vs franchised units, or recovering after a development pause, who need disciplined demand generation." },
  ],
  processHeading: "How a franchise marketing engagement unfolds",
  processSubtitle: "Tight, accountable, and built around the way franchise candidates buy.",
  process: [
    { step: "Week 1", title: "Discovery and positioning audit", body: "FDD review, capital-band audit, registration footprint, current channels, and competitive positioning. Strategy locked before any spend goes live." },
    { step: "Week 2", title: "Funnel and brand build", body: "Landing pages, qualification logic, CRM workflow, ad creative, and follow-up sequences built. Registration-state disclosures wired in." },
    { step: "Week 3", title: "Launch", body: "Campaigns go live. First qualified discovery calls reach your calendar within 10–21 days." },
    { step: "Month 2+", title: "Scale and optimize", body: "Winning audiences, capital bands, and geographies scale. Underperforming segments cut. Monthly reviews tie spend to awarded territories." },
  ],
  whyHeading: "Why franchisors pick us for franchise marketing",
  whyPoints: [
    "Franchise and high-ticket professional services only — no e-commerce or SaaS clients diluting our team's focus.",
    "Brand, paid acquisition, qualification, CRM, and reporting under one roof — no stitched-together vendors.",
    "Capital, net worth, and timing qualification built into the funnel before discovery calls.",
    "Registration-state compliance handled by default for all 13 US registration states.",
    "Senior franchise-native strategists own each account. No offshore handoff.",
    "Reporting tied to qualified appointments, pipeline value, and awarded territories.",
  ],
  faqHeading: "Common questions about franchise marketing",
  faqs: [
    { q: "What is franchise marketing?", a: "Franchise marketing is the discipline of attracting and qualifying candidate-investors who are evaluating buying into a franchise system. It is distinct from consumer marketing for franchised brands — different audience (investors, not customers), different journey (6–18 week evaluation), and different qualification logic (capital, net worth, timing)." },
    { q: "How is franchise marketing different from regular digital marketing?", a: "Franchise candidates are investors making 5–7 figure capital decisions over a multi-week evaluation, not consumers making impulse purchases. The funnel, qualification logic, creative, and reporting all need to be built around that reality. Generic digital marketing playbooks produce traffic but not awarded territories." },
    { q: "What does franchise marketing actually include?", a: "A real franchise marketing engagement covers brand and positioning, candidate-acquisition campaigns (Meta, Google, LinkedIn, YouTube), qualification funnels, registration-state compliance, CRM and follow-up infrastructure, and award-tied reporting — all under one accountable team." },
    { q: "How long until I see results from franchise marketing?", a: "Most engagements produce the first qualified discovery call within 10–21 days of launch. Award compounding typically begins from month two onward as audiences and creative mature." },
    { q: "Do you handle registration-state compliance?", a: "Yes. All 13 US franchise registration states (CA, NY, IL, MD, MI, MN, ND, RI, SD, VA, WA, WI, HI) are handled correctly out of the box, with state-appropriate disclosures and exclusions built into creative and landing pages." },
    { q: "What does franchise marketing cost?", a: "Specialist franchise marketing engagements typically start in the low-to-mid four figures per month plus ad spend, scaled by appointment-volume targets and geographic footprint. Book a strategy call for a same-day quote." },
  ],
  ctaHeading: "Ready to run franchise marketing that awards territories?",
  ctaBody: "Book a 30-minute strategy call. We will audit your current marketing, map the segments worth targeting, and quote you the same day.",
  serviceSchemaName: "Franchise Marketing",
  serviceSchemaType: "Franchise Marketing",
  serviceSchemaDescription: "Specialist franchise marketing covering brand, paid acquisition, qualification funnels, registration-state compliance, and award-tied reporting for franchisors.",
};

export default function FranchiseMarketing() {
  return <MoneyPageTemplate config={config} />;
}
