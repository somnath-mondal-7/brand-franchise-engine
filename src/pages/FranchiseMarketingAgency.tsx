import MoneyPageTemplate, { type MoneyPageConfig } from "@/components/MoneyPageTemplate";
import { Target, Megaphone, Users, BarChart3, ShieldCheck, Sparkles } from "lucide-react";

const config: MoneyPageConfig = {
  canonical: "https://www.franchiseleadspro.com/franchise-marketing-agency",
  metaTitle: "Franchise Marketing Agency | Award-Tied Growth for Franchisors",
  metaDescription: "Specialist franchise marketing agency for emerging and established franchisors. Exclusive candidate pipelines, registration-state compliance, and award-tied reporting.",
  ogTitle: "Franchise Marketing Agency — FranchiseLeads Pro",
  ogDescription: "Specialist franchise marketing agency built for franchisors who want award-tied growth, not vanity metrics.",
  badge: "Specialist Franchise Marketing Agency",
  h1Line1: "Franchise Marketing",
  h1Line2: "Agency",
  heroSubtitle: "A franchise marketing agency for franchisors who want awarded territories, not impressions. Built exclusively for franchise development — FDDs, registration states, capital bands, the whole reality.",
  problemHeading: "Why generalist agencies fail at franchise marketing",
  problemParagraphs: [
    "Most agencies positioned as a franchise marketing agency are generalists with a franchise vertical. They run the same Meta-and-Google playbook they use for e-commerce, B2B SaaS, and local services — then bolt a franchise landing page on top. The funnel produces clicks. It does not produce awarded territories.",
    "Franchise candidate-investors are not impulse buyers. They evaluate concepts over 6–18 weeks, navigate FDDs and Item 7 capital disclosures, qualify against registration-state rules, and frequently engage 3-5 brands in parallel. A franchise marketing agency that doesn't understand that arc cannot build a funnel that converts.",
    "We work exclusively in franchise and high-ticket professional services. Every system we build — landing pages, qualification logic, CRM workflow, calendar booking, follow-up sequences — is engineered for the way franchise candidates actually buy.",
  ],
  whatYouGetHeading: "What a real franchise marketing agency delivers",
  whatYouGetSubtitle: "Specialist execution across the full franchise candidate journey.",
  whatYouGet: [
    { icon: <Target className="h-6 w-6" />, title: "Candidate-acquisition campaigns", body: "Meta, Google, LinkedIn, and YouTube campaigns engineered for franchise candidate behavior — long evaluation cycles, multi-touch journeys, qualification-first messaging." },
    { icon: <Megaphone className="h-6 w-6" />, title: "Brand and positioning work", body: "FDD-aligned messaging, candidate-facing brand identity, founder-led narrative, and competitive positioning against other brands in your category." },
    { icon: <Users className="h-6 w-6" />, title: "Capital-band qualification funnels", body: "Landing pages and qualification logic that screen against your Item 7 capital ranges, net worth requirements, liquidity, and timing before a discovery call is booked." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Registration-state compliance", body: "Creative, disclosures, and exclusions handled correctly across all 13 US franchise registration states. No regulatory surprises on your candidate site." },
    { icon: <BarChart3 className="h-6 w-6" />, title: "Award-tied reporting", body: "Cost per qualified appointment, pipeline value, and cost per awarded territory tracked weekly. No vanity impressions or 'engagement' filler." },
    { icon: <Sparkles className="h-6 w-6" />, title: "Full-funnel ownership", body: "Landing pages, ad creative, qualification logic, CRM workflow, calendar booking, and follow-up sequences all built and operated by us — not patched together by your team." },
  ],
  whoItsForHeading: "Who we work with as their franchise marketing agency",
  whoItsFor: [
    { title: "Emerging franchisors (1–50 units)", body: "Brands awarding their first territories who need a national-grade marketing engine without the cost of a full in-house development team." },
    { title: "Established franchisors (50+ units)", body: "Systems maintaining award pace, expanding into new registration states, or replacing an underperforming generalist agency." },
    { title: "Private-equity-backed franchise platforms", body: "PE-backed franchise systems with aggressive unit-growth targets who need accountable, scalable, audit-ready marketing." },
    { title: "Multi-brand franchise groups", body: "Holding companies operating multiple franchise brands who want consolidated reporting and shared infrastructure across portfolio brands." },
    { title: "International brands entering the US", body: "Non-US franchise systems launching in the US who need a US-native marketing partner that understands FDDs and registration states." },
    { title: "Refranchising and territory-rebuild engagements", body: "Brands rebalancing corporate vs franchised units, or recovering after a development pause, who need disciplined demand generation." },
  ],
  processHeading: "How a franchise marketing agency engagement should unfold",
  processSubtitle: "Tight, accountable, and built around the way franchise candidates actually buy.",
  process: [
    { step: "Week 1", title: "Discovery and positioning audit", body: "FDD review, capital-band audit, registration footprint, current acquisition channels, and competitive positioning. Strategy locked before any spend goes live." },
    { step: "Week 2", title: "Funnel and brand build", body: "Landing pages, qualification logic, CRM workflow, ad creative, and follow-up sequences built. Registration-state disclosures wired in." },
    { step: "Week 3", title: "Launch", body: "Campaigns go live. First qualified discovery calls reach your calendar within 10–21 days." },
    { step: "Month 2+", title: "Scale and optimize", body: "Winning audiences, capital bands, and geographies scale. Underperforming segments cut. Monthly reviews tie spend to awarded territories." },
  ],
  whyHeading: "Why franchisors pick us as their franchise marketing agency",
  whyPoints: [
    "Franchise and high-ticket professional services only — no e-commerce or SaaS clients diluting our team's focus.",
    "Every lead is exclusive to you. We do not run shared portals or resell candidates.",
    "Capital, net worth, and timing qualification built into the funnel — not after the discovery call.",
    "Registration-state compliance handled by default for all 13 US franchise registration states.",
    "Senior franchise-native strategists own each account end-to-end. No offshore handoff.",
    "Reporting tied to qualified appointments, pipeline value, and awarded territories — not impressions or clicks.",
  ],
  faqHeading: "Common questions about hiring a franchise marketing agency",
  faqs: [
    { q: "What does a franchise marketing agency actually do?", a: "A specialist franchise marketing agency runs the full candidate-acquisition stack for franchisors — paid acquisition, landing pages, capital-band qualification, CRM workflow, calendar booking, and follow-up — all engineered around the way franchise candidates evaluate and award. The output is qualified discovery calls and awarded territories, not impressions or generic leads." },
    { q: "How is a franchise marketing agency different from a generalist agency?", a: "Generalist agencies treat franchise like another vertical. A specialist franchise marketing agency understands FDDs, Item 7 capital ranges, the 13 US franchise registration states, broker-group dynamics (FBA, IFPG, FranNet, FranChoice), and the multi-week evaluation arc franchise candidates actually move through. That depth changes how every step of the funnel is built." },
    { q: "Do you handle franchise development for emerging franchisors?", a: "Yes. Emerging franchisors awarding their first 5–50 territories are a core engagement profile. We provide the candidate-acquisition engine and reporting infrastructure that would otherwise require a full in-house development team." },
    { q: "How do you handle registration-state compliance?", a: "Campaigns running into California, New York, Illinois, Maryland, Michigan, Minnesota, North Dakota, Rhode Island, South Dakota, Virginia, Washington, Wisconsin, and Hawaii are built with state-appropriate disclosures and exclusions baked into creative and landing pages." },
    { q: "How quickly will I see qualified candidates?", a: "Most franchisor engagements produce the first qualified discovery call within 10–21 days of launch. Award compounding typically begins from month two onward as audiences and creative mature." },
    { q: "What does a franchise marketing agency cost?", a: "Specialist franchise marketing engagements typically start in the low-to-mid four figures per month plus ad spend, scaled by appointment-volume targets and geographic footprint. Book a strategy call for a same-day quote tied to your goals." },
  ],
  ctaHeading: "Ready to work with a real franchise marketing agency?",
  ctaBody: "Book a 30-minute strategy call. We will audit your current acquisition, map the segments worth targeting, and quote you the same day.",
  serviceSchemaName: "Franchise Marketing Agency",
  serviceSchemaType: "Franchise Marketing Agency",
  serviceSchemaDescription: "Specialist franchise marketing agency delivering exclusive candidate pipelines, registration-state compliance, and award-tied reporting for emerging and established franchisors.",
};

export default function FranchiseMarketingAgency() {
  return <MoneyPageTemplate config={config} />;
}
