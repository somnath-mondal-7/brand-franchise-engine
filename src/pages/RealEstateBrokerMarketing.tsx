import MoneyPageTemplate, { type MoneyPageConfig } from "@/components/MoneyPageTemplate";
import { Target, Search, MessageSquare, Calendar, Users, ShieldCheck } from "lucide-react";

const config: MoneyPageConfig = {
  canonical: "https://www.franchiseleadspro.com/real-estate-broker-marketing",
  metaTitle: "Real Estate Broker Marketing Agency | Listing & Buyer Lead Generation",
  metaDescription: "Marketing for real estate brokers, teams, and brokerages. Exclusive seller appointments and qualified buyer consults — not Zillow flares or shared lead lists.",
  ogTitle: "Real Estate Broker Marketing Agency",
  ogDescription: "Exclusive seller and buyer appointments for real estate brokers and teams.",
  badge: "For Real Estate Brokers & Teams",
  h1Line1: "Real Estate Broker",
  h1Line2: "Marketing Agency",
  heroSubtitle: "Exclusive seller appointments and qualified buyer consults booked directly to your calendar. No Zillow shared leads. No portal flares. No prospect who already filled out twenty other forms.",
  problemHeading: "Why most real estate brokers are stuck renting their pipeline",
  problemParagraphs: [
    "Zillow Premier, Realtor.com Connections, Opcity — they all sell the same model. You pay a premium for a lead that was sent to four other agents the same minute. You burn an hour chasing someone who never picks up. The few that convert pay a referral fee that eats your commission.",
    "The brokers who break free have done one thing: they built their own brand and their own pipeline. Not a profile on someone else's platform — their own listing-acquisition engine and their own buyer-consult funnel, branded to them, owned by them, exclusive to them.",
    "That is what we build for real estate brokers, teams, and brokerages — a marketing engine that produces seller meetings and buyer consults on your brand, not a lead-share scheme that turns your business into a rental.",
  ],
  whatYouGetHeading: "What we build for a real estate broker or team",
  whatYouGetSubtitle: "Listing-side and buyer-side acquisition built on assets you actually own.",
  whatYouGet: [
    { icon: <Target className="h-6 w-6" />, title: "Geo-targeted seller acquisition", body: "Meta and Google campaigns targeting homeowners in your farm area with home-value and equity-position hooks that convert into listing appointments — not generic 'thinking of selling?' flyers." },
    { icon: <Search className="h-6 w-6" />, title: "Buyer consult funnels", body: "Conversion-optimized funnels for first-time buyers, move-up buyers, and investor buyers, segmented by price band and timeline. Pre-approval logic baked in." },
    { icon: <MessageSquare className="h-6 w-6" />, title: "ISA-style qualification automation", body: "SMS and email sequences that qualify timeline, financing, and motivation before a lead ever reaches your calendar. You stop wasting Saturdays on tire-kickers." },
    { icon: <Calendar className="h-6 w-6" />, title: "Booked listing and buyer appointments", body: "Qualified prospects self-book into your calendar with their qualification answers attached. You show up to listing presentations and buyer consults already prepared." },
    { icon: <Users className="h-6 w-6" />, title: "Database reactivation campaigns", body: "Your existing sphere and past-client database is a goldmine that most brokers never mine. We build the reactivation campaigns that pull deals out of it every quarter." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Cost-per-appointment reporting", body: "One dashboard. Spend, qualified appointments, listings taken, buyers under contract. Real numbers — not the impression and click reports your last agency hid behind." },
  ],
  whoItsForHeading: "Who we work with in real estate",
  whoItsFor: [
    { title: "Independent listing brokers", body: "Top producers who want consistent seller appointments without depending on referrals, open houses, or door-knocking the same neighborhood twice." },
    { title: "Real estate teams", body: "Team leads building scale through buyer agents and ISA pods. We feed the top of funnel; your team converts." },
    { title: "Boutique brokerages", body: "Independent brokerages running 5-50 agents who need a brokerage-wide lead engine that recruits and retains top producers." },
    { title: "Luxury and high-end specialists", body: "$1M+ price-point specialists who need positioning, listing-pitch assets, and high-trust seller acquisition that does not feel like a discount-broker funnel." },
    { title: "Investor-facing agents", body: "Agents working with rental investors, flippers, and 1031 buyers who need investment-grade deal flow and motivated-seller pipelines." },
    { title: "New construction and developer reps", body: "Builder reps and new-construction specialists who need a steady pipeline of qualified buyers walking models without paying portal premiums." },
  ],
  processHeading: "How a real estate engagement unfolds",
  processSubtitle: "Built around the realities of a transaction-based business — first appointments before month-end, not next quarter.",
  process: [
    { step: "Week 1", title: "Market and offer audit", body: "We map your farm area, your average sale price, your specialization, and your sphere. Positioning gets sharpened before a single ad dollar is spent." },
    { step: "Week 2", title: "Funnel and creative build", body: "Landing pages for sellers and buyers go live. Ad creative, qualification logic, and CRM workflows are built and approved." },
    { step: "Week 3", title: "Launch and first appointments", body: "Campaigns go live. First qualified seller and buyer appointments begin reaching your calendar within 7-14 days." },
    { step: "Week 4+", title: "Optimize and scale", body: "Winning creative, audiences, and price bands scale. Cost-per-appointment drops. Closed-transaction reporting starts compounding from month two." },
  ],
  whyHeading: "Why real estate brokers pick us over a generic agency",
  whyPoints: [
    "We work in real estate, mortgage, and high-trust professional service categories — we are not a B2C agency learning your business on your dime.",
    "Every lead is exclusive. Not shared with three other agents. Not resold to a team across town. Generated on your brand, attached to your calendar.",
    "Qualification happens upfront — financing, timeline, and motivation captured before the appointment hits your day.",
    "You own the ad accounts, landing pages, CRM, and contact data. If we ever part ways, you keep the pipeline.",
    "We report on listings taken and buyers under contract — not click-through rates and impressions.",
    "Direct access to senior strategists. You will not be passed to a junior account coordinator after the sales call.",
  ],
  faqHeading: "Questions real estate brokers ask us",
  faqs: [
    { q: "How is this different from Zillow Premier Agent or Realtor.com Connections?", a: "Zillow leads are shared with multiple agents and sold by the platform. Our leads are generated on your brand, exclusive to you, and pre-qualified before they reach your calendar. You also own the assets — when our engagement ends, you keep the pipeline." },
    { q: "How quickly will I see appointments?", a: "Most real estate broker clients see the first qualified seller or buyer appointment within 7-14 days of launch. Cost-per-appointment typically improves through months 2-3 as we optimize against your closed-transaction data." },
    { q: "Do you work with solo agents or only teams?", a: "Both. Solo top-producers, teams, and full brokerages all benefit from the same playbook — the difference is volume and qualification depth. Solo agents typically need 5-15 appointments per month; teams scale into hundreds." },
    { q: "Will this work in my market?", a: "We have run real estate broker campaigns across major US metros, secondary markets, and luxury submarkets. The playbook adjusts to price band and inventory dynamics — the principles do not change." },
    { q: "What about my existing database — can you reactivate it?", a: "Yes. Sphere and past-client reactivation is one of the highest-ROI campaigns we run. Most brokers have a database worth 6-figures in unrealized commissions sitting in a CRM nobody touches." },
    { q: "What does it cost?", a: "Engagements start in the low four figures per month for solo brokers and scale based on appointment targets, geos, and team size. We do not quote on a public page because the honest answer depends on your market — book a call and we will price it the same day." },
  ],
  ctaHeading: "Ready to own your listing and buyer pipeline?",
  ctaBody: "Book a 30-minute call. We will audit your current lead sources, show you what is possible in your farm area and price band, and quote you the same day.",
  serviceSchemaName: "Real Estate Broker Marketing Agency",
  serviceSchemaType: "Lead Generation for Real Estate Brokers and Teams",
  serviceSchemaDescription: "Exclusive seller appointments and qualified buyer consults for real estate brokers, teams, and boutique brokerages.",
};

export default function RealEstateBrokerMarketing() {
  return <MoneyPageTemplate config={config} />;
}
