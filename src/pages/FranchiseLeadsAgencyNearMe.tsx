import MoneyPageTemplate, { type MoneyPageConfig } from "@/components/MoneyPageTemplate";
import { MapPin, Clock, Globe2, Phone, Users, ShieldCheck } from "lucide-react";

const config: MoneyPageConfig = {
  canonical: "https://www.franchiseleadspro.com/franchise-leads-agency-near-me",
  metaTitle: "Franchise Leads Agency Near Me | US Nationwide Coverage",
  metaDescription: "Looking for a franchise leads agency near you? We serve franchisors and brokers across every US state with time-zone-aware delivery and US-native strategists.",
  ogTitle: "Franchise Leads Agency Near Me",
  ogDescription: "A US-native franchise leads agency serving franchisors and brokers in every state.",
  badge: "Franchise Leads Agency — Near You",
  h1Line1: "Franchise Leads",
  h1Line2: "Agency Near Me",
  heroSubtitle: "You don't need an agency on your street — you need one that knows your market. We serve franchisors and brokers in every US state, with time-zone-aware delivery, registration-state compliance, and US-native senior strategists.",
  problemHeading: "Why 'near me' matters less than you think — and what actually does",
  problemParagraphs: [
    "Franchise development is a national game. The candidate considering your concept in Dallas, the franchisor headquartered in Atlanta, and the broker representing the deal in Phoenix rarely live in the same metro. Searching for a 'franchise leads agency near me' is really searching for an agency that <strong>works the way your market works</strong> — same time zones, same regulatory environment, same candidate culture.",
    "What does matter when you search local: US-native strategists who pick up the phone during your business hours, registration-state compliance for the state your FDD is registered in, US-dollar reporting, and creative written for US franchise candidates — not translated from a global template.",
    "FranchiseLeads Pro is built for exactly that. We serve franchisors and brokers in every US state and major metro. You get the depth of a national specialist and the responsiveness of a local team.",
  ],
  whatYouGetHeading: "What 'near you' actually means with us",
  whatYouGetSubtitle: "The local-feel benefits without the local-only limits.",
  whatYouGet: [
    { icon: <Clock className="h-6 w-6" />, title: "Time-zone-aware delivery", body: "East-coast, central, mountain, and Pacific calls land at appropriate hours. Account reviews scheduled in your time zone. Candidate appointments routed to your real working day." },
    { icon: <Phone className="h-6 w-6" />, title: "US-native account team", body: "Senior strategists based in the US. Same business hours, same idioms, same understanding of how US franchise candidates actually buy." },
    { icon: <MapPin className="h-6 w-6" />, title: "State-level market targeting", body: "Geo-targeting calibrated to the state and metro where your FDD is registered and your awarded territories live. Your spend goes where your franchise can legally award." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Registration-state compliance", body: "All 13 US franchise registration states handled correctly out of the box. Local candidates see the right disclosures; you don't get regulatory surprises." },
    { icon: <Globe2 className="h-6 w-6" />, title: "Nationwide coverage", body: "Multi-state franchisors and brokers get a single agency covering every market — not a patchwork of regional vendors with inconsistent reporting." },
    { icon: <Users className="h-6 w-6" />, title: "Direct strategist access", body: "Your senior strategist is reachable by phone and email during US business hours. No ticketing-system handoffs, no offshore account management." },
  ],
  whoItsForHeading: "Who searches 'franchise leads agency near me' and why we fit",
  whoItsFor: [
    { title: "Single-metro franchisors", body: "Brands awarding territories in one metro who want a partner that targets that metro precisely — without paying for nationwide overhead." },
    { title: "Multi-state franchisors", body: "Brands awarding territories across multiple US states who want one accountable partner instead of stitching together regional agencies." },
    { title: "Local franchise brokers", body: "City- or state-licensed brokers who want exclusive pipeline in their territory without the shared-portal compromise." },
    { title: "Master franchisees", body: "Area developers recruiting sub-franchisees and unit operators in a defined regional territory." },
    { title: "Out-of-state franchisors entering a new market", body: "Brands HQ'd in one state launching into another — need US-native, state-aware acquisition without flying in consultants." },
    { title: "First-time franchisors awarding their initial territories", body: "Founders awarding the first 5–20 units who need senior, accessible guidance and a partner that picks up the phone." },
  ],
  processHeading: "How a near-you engagement actually unfolds",
  processSubtitle: "Local-feel responsiveness, national-grade execution.",
  process: [
    { step: "Day 1", title: "Discovery call in your time zone", body: "Scheduled at hours that fit your business day. Audit your offer, your registration footprint, and the metros that matter for awarded territories." },
    { step: "Week 1", title: "Local-market positioning", body: "Geo-targeting calibrated to the states and metros where you can legally award. Creative tuned to local candidate culture." },
    { step: "Week 2–3", title: "Build and launch", body: "Landing pages, qualification logic, CRM, calendar all live. First qualified candidates begin reaching your calendar within 10–21 days." },
    { step: "Month 2+", title: "Local reviews, national scale", body: "Monthly performance reviews in your time zone. Winning metros scale; underperforming geos get reallocated. Reporting segmented by state and metro." },
  ],
  whyHeading: "Why 'near me' searches end with us",
  whyPoints: [
    "US-native senior strategists based in your time zone — not offshore account managers.",
    "Coverage in every US state and major metro — one accountable partner for multi-state operators.",
    "Registration-state compliance handled by default for all 13 US franchise registration states.",
    "State- and metro-level geo-targeting calibrated to where your FDD actually allows you to award.",
    "Direct phone and email access to your strategist during US business hours.",
    "Reporting in US dollars, segmented by state and metro — clean attribution for multi-market operators.",
  ],
  faqHeading: "Questions people ask when searching 'franchise leads agency near me'",
  faqs: [
    { q: "Do I need a franchise leads agency in my city?", a: "No. Franchise development is a national game — candidates, franchisors, and brokers rarely share a metro. What matters is time-zone alignment, US-native strategists, registration-state compliance, and state-level targeting. We deliver all four nationally." },
    { q: "Which US states and metros do you cover?", a: "All 50 states and every major metro. Multi-state engagements are our standard profile — single-metro engagements are equally supported with tighter geo-targeting." },
    { q: "Can you target a specific city, state, or metro?", a: "Yes. Geo-targeting can run at national, regional, state, metro, or DMA level depending on where your FDD allows you to award territories." },
    { q: "Do you handle the 13 US franchise registration states correctly?", a: "Yes. CA, NY, IL, MD, MI, MN, ND, RI, SD, VA, WA, WI, and HI are all handled with appropriate disclosures and exclusions baked into campaign creative and landing pages." },
    { q: "Will I work with a US-based strategist?", a: "Yes. Your account is run by a senior, US-based franchise strategist reachable by phone and email during US business hours. No offshore account handoff." },
    { q: "What does a near-you engagement cost?", a: "Single-metro engagements typically start in the low four figures per month plus ad spend. Multi-state engagements scale from there. Book a strategy call for a same-day quote tied to your states, metros, and award targets." },
  ],
  ctaHeading: "Looking for a franchise leads agency near you?",
  ctaBody: "Book a 30-minute strategy call in your time zone. We will audit your current acquisition, map the states and metros worth targeting, and quote you the same day.",
  serviceSchemaName: "Franchise Leads Agency Near Me",
  serviceSchemaType: "Local and National Franchise Lead Generation",
  serviceSchemaDescription: "US-native franchise leads agency serving franchisors and brokers in every state and major metro with time-zone-aware delivery and registration-state compliance.",
};

export default function FranchiseLeadsAgencyNearMe() {
  return <MoneyPageTemplate config={config} />;
}
