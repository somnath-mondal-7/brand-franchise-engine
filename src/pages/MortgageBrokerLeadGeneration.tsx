import MoneyPageTemplate, { type MoneyPageConfig } from "@/components/MoneyPageTemplate";
import { Target, Search, MessageSquare, Calendar, Users, ShieldCheck } from "lucide-react";

const config: MoneyPageConfig = {
  canonical: "https://www.franchiseleadspro.com/mortgage-broker-lead-generation",
  metaTitle: "Mortgage Broker Lead Generation | Purchase & Refi Pipelines",
  metaDescription: "Exclusive purchase and refinance leads for mortgage brokers and loan officers. Compliance-clean, pre-qualified, and booked to your calendar — not shared with six lenders.",
  ogTitle: "Mortgage Broker Lead Generation Agency",
  ogDescription: "Exclusive, compliance-clean purchase and refi leads for mortgage brokers and LOs.",
  badge: "For Mortgage Brokers & Loan Officers",
  h1Line1: "Mortgage Broker",
  h1Line2: "Lead Generation",
  heroSubtitle: "Exclusive purchase and refinance leads, pre-qualified on credit band and timeline, booked straight to your calendar. No rate-shopper aggregators. No lead resold to six lenders.",
  problemHeading: "Why most mortgage broker pipelines are bleeding money",
  problemParagraphs: [
    "LendingTree, Bankrate, Zillow Home Loans — they all sell the same product. A rate shopper, sold simultaneously to four to six lenders, who has zero loyalty and converts at single-digit rates. You pay $80-$200 per lead and close maybe one in fifty. The math only works because the alternative seems worse.",
    "But there is an alternative — and it is what the top producers in every market are quietly doing. They run their own brand-led acquisition. They build purchase and refi funnels on their own domains. They qualify upfront. They show up to a borrower who is not rate-shopping against five other LOs because the borrower came in through their pipeline, not a marketplace.",
    "That engine is what we build for mortgage brokers and loan officers. Compliance-clean, NMLS-friendly, and producing exclusive leads on your brand — not on someone else's marketplace.",
  ],
  whatYouGetHeading: "What we deploy for a mortgage broker or LO",
  whatYouGetSubtitle: "Built specifically for mortgage origination — TRID-aware, NMLS-compliant, and accountable.",
  whatYouGet: [
    { icon: <Target className="h-6 w-6" />, title: "Intent-based purchase and refi acquisition", body: "Meta and Google campaigns built around real intent signals — rate-environment triggers, life-stage moves, equity positions — not generic 'apply now' creative that attracts tire-kickers." },
    { icon: <Search className="h-6 w-6" />, title: "Compliance-clean landing pages", body: "Owned funnels for purchase, refi, cash-out, HELOC, and DSCR product lines. Built to NMLS and state-licensing disclosure standards from day one — your compliance team will not get blindsided." },
    { icon: <MessageSquare className="h-6 w-6" />, title: "Pre-qualification automation", body: "Credit band, timeline, property type, and loan amount captured upfront. SMS and email sequences warm the borrower and disqualify the rate-shopper before they reach your calendar." },
    { icon: <Calendar className="h-6 w-6" />, title: "Booked discovery calls", body: "Qualified borrowers self-book into your calendar with their qualification trail attached. You stop spending Saturday chasing voicemails." },
    { icon: <Users className="h-6 w-6" />, title: "Realtor and CPA partner channels", body: "Bonus engagement: we build out the partner-referral campaigns that turn realtors and CPAs into recurring purchase-pipeline sources." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Cost-per-locked-loan reporting", body: "Spend, qualified leads, applications, locks, and funded loans tracked in one dashboard. You see actual cost-per-funded-loan, not vanity click metrics." },
  ],
  whoItsForHeading: "Who we work with on the mortgage side",
  whoItsFor: [
    { title: "Independent mortgage brokers", body: "Brokers running an NMLS shop who want to escape Zillow and LendingTree economics and build their own brand-led pipeline." },
    { title: "Top-producing loan officers", body: "Bank and broker-shop LOs hitting personal-brand growth ceilings who need a marketing engine that runs in their name, not their employer's." },
    { title: "Mortgage broker teams", body: "Teams scaling through producing partners and ISA pods who need a steady top of funnel that feeds multiple LOs without cannibalizing each other." },
    { title: "Non-QM and DSCR specialists", body: "Specialty lenders working with investors, self-employed borrowers, and non-traditional credit profiles who cannot rely on consumer-direct portals." },
    { title: "Reverse mortgage specialists", body: "HECM and reverse-mortgage LOs who need compliant, age-appropriate acquisition without violating elder-marketing restrictions." },
    { title: "Commercial mortgage brokers", body: "CRE and commercial mortgage shops working with developers and investors who need deal flow targeted by asset class and loan size." },
  ],
  processHeading: "How a mortgage broker engagement unfolds",
  processSubtitle: "Compliance-first, conversion-focused, and accountable from week one.",
  process: [
    { step: "Week 1", title: "Product mix and compliance audit", body: "We audit your product lines, state licensing footprint, compliance posture, and existing acquisition channels. Positioning gets built around your actual approval box, not a generic 'lowest rate' pitch." },
    { step: "Week 2", title: "Funnel and creative build", body: "Landing pages for each product line go live. Ad creative, disclosures, and qualification logic are built and approved by your compliance team." },
    { step: "Week 3", title: "Launch and first applications", body: "Campaigns go live in your licensed states. First qualified borrowers begin reaching your calendar within 10-14 days." },
    { step: "Week 4+", title: "Scale and refine", body: "Winning creative, audiences, and product mixes scale. Cost-per-locked-loan drops through months 2-3. Realtor and CPA partner channels activate from month two." },
  ],
  whyHeading: "Why mortgage brokers pick us over a generic agency",
  whyPoints: [
    "We work in mortgage, real estate, franchise, and high-trust regulated categories — your compliance officer will not be teaching us NMLS basics.",
    "Every lead is exclusive to you. Not shared with five other lenders. Not resold to a rate marketplace. Generated on your brand.",
    "Qualification happens upfront — credit band, timeline, and product fit captured before the borrower hits your calendar.",
    "You own the ad accounts, landing pages, and CRM data. When our engagement ends, you keep the engine running.",
    "Reporting tracks funded loans, not impressions. Your numbers tie to lock-volume, not click-through rates.",
    "Direct access to senior strategists. No junior account managers between you and the people running your campaigns.",
  ],
  faqHeading: "Questions mortgage brokers ask before signing",
  faqs: [
    { q: "How is this different from buying leads from LendingTree or Zillow?", a: "Marketplace leads are sold to multiple lenders simultaneously. The borrower is rate-shopping by definition. Our leads are generated on your brand, exclusive to you, and qualified on credit band and timeline before they reach your calendar — borrowers come in looking for you, not for the lowest rate among six lenders." },
    { q: "How quickly will I see funded loans?", a: "First qualified applications typically begin in weeks 2-3. Funded loans follow the natural mortgage timeline — 30-60 days for purchase, 21-45 days for refi. Cost-per-funded-loan starts compounding favorably from month 3." },
    { q: "Do you handle NMLS and state-disclosure compliance?", a: "Yes. Every landing page, ad, and SMS sequence is built to NMLS, TRID, and state-licensing disclosure standards. We work alongside your compliance officer or compliance vendor — we do not bypass them." },
    { q: "Can you run campaigns across multiple licensed states?", a: "Yes. Geo-fencing by licensed state is standard. We will only show your offers in states where you are licensed, with the appropriate state-specific disclosures and NMLS ID." },
    { q: "What product lines do you have experience with?", a: "Conventional purchase and refi, FHA, VA, jumbo, non-QM, DSCR, HELOC, reverse (HECM), and commercial mortgage. Specialty product lines (DSCR, non-QM, reverse) require slightly different funnel logic — we build to the product, not a generic template." },
    { q: "What does it cost?", a: "Engagements start in the low four figures per month for single-LO setups and scale based on lock-volume targets, licensed-state footprint, and product mix. Book a call and we will quote it the same day." },
  ],
  ctaHeading: "Ready to escape marketplace economics?",
  ctaBody: "Book a 30-minute call. We will audit your current lead sources, show you what is possible in your licensed states, and quote you the same day.",
  serviceSchemaName: "Mortgage Broker Lead Generation",
  serviceSchemaType: "Lead Generation for Mortgage Brokers and Loan Officers",
  serviceSchemaDescription: "Exclusive, compliance-clean purchase and refinance leads for mortgage brokers, loan officers, and specialty lenders.",
};

export default function MortgageBrokerLeadGeneration() {
  return <MoneyPageTemplate config={config} />;
}
