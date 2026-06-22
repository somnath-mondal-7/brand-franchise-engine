import MoneyPageTemplate, { type MoneyPageConfig } from "@/components/MoneyPageTemplate";
import { Target, Search, MessageSquare, Calendar, Users, ShieldCheck } from "lucide-react";

const config: MoneyPageConfig = {
  canonical: "https://www.franchiseleadspro.com/linkedin-lead-generation-brokers",
  metaTitle: "LinkedIn Lead Generation Agency for Brokers & Consultants",
  metaDescription: "Done-for-you LinkedIn lead generation for franchise, real estate, and mortgage brokers. Organic outreach + content + ads — booked discovery calls without spam.",
  ogTitle: "LinkedIn Lead Generation for Brokers",
  ogDescription: "Organic LinkedIn outreach, content, and ads that produce booked discovery calls — not spam connection requests.",
  badge: "Our Specialty Channel",
  h1Line1: "LinkedIn Lead",
  h1Line2: "Generation for Brokers",
  heroSubtitle: "Done-for-you LinkedIn outreach, content, and paid acquisition for franchise, real estate, and mortgage brokers. Booked discovery calls — without spammy automation, banned accounts, or 'circle back' templates.",
  problemHeading: "Why most LinkedIn outreach is dead on arrival",
  problemParagraphs: [
    "Almost every broker who tries LinkedIn does the same three things. They buy a Sales Navigator seat. They install a sketchy automation tool. They send 200 connection requests a week with the same 'love to connect' message. Two months later, their account is restricted, their reply rate is under 1%, and they conclude LinkedIn does not work for their business.",
    "Meanwhile, the brokers who win on LinkedIn are doing the exact opposite. They post genuinely useful content twice a week. They send personalized, low-volume, high-relevance outreach. They run targeted lead-gen ads to a warm audience that already follows them. They book 8-15 qualified discovery calls per month from LinkedIn alone — without ever spamming a connection request.",
    "That is the engine we build. LinkedIn is our flagship channel for franchise brokers, real estate brokers, mortgage brokers, and B2B consultants — because it is where their actual buyers live.",
  ],
  whatYouGetHeading: "What we run on LinkedIn for a broker or consultant",
  whatYouGetSubtitle: "Organic + outbound + paid, layered into one engine. Not a single-tool gimmick.",
  whatYouGet: [
    { icon: <Target className="h-6 w-6" />, title: "Strategic content publishing", body: "Two to four expert-positioning posts per week, written in your voice on the topics your buyers actually search. Built to compound profile views, follower growth, and inbound DMs — not vanity engagement." },
    { icon: <Search className="h-6 w-6" />, title: "Personalized outbound outreach", body: "Manual-grade, low-volume outreach to your exact ICP — by title, industry, geography, and intent signal. No automation tools that risk account restriction. Reply rates typically 12-25%." },
    { icon: <MessageSquare className="h-6 w-6" />, title: "DM-to-call qualification flow", body: "Conversational DM scripts that move warm prospects from reply, to discovery question, to booked call — without the awkward 'jump on a quick call?' that kills conversations." },
    { icon: <Calendar className="h-6 w-6" />, title: "Booked discovery calls", body: "Qualified prospects self-book into your Calendly with their qualification context attached. You show up to a call already warm." },
    { icon: <Users className="h-6 w-6" />, title: "LinkedIn Ads layer (optional)", body: "Lead-gen form ads, conversation ads, and document ads targeted at your warm audience and lookalikes. Built only after organic and outbound are producing — never as a standalone bet." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Profile and positioning rebuild", body: "Your headline, banner, featured section, and About are rebuilt to convert. Profile views become inbound DMs become booked calls — the funnel starts on your profile, not your DMs." },
  ],
  whoItsForHeading: "Who we run LinkedIn for",
  whoItsFor: [
    { title: "Franchise brokers and consultants", body: "Independent brokers and consultants who need a personal-brand channel that produces candidate-investor calls without paying portal fees per submission." },
    { title: "Real estate brokers and team leads", body: "Listing brokers and team leads targeting high-net-worth sellers, relocation buyers, and investor clients who live on LinkedIn — not on Zillow." },
    { title: "Mortgage brokers and LOs", body: "Loan officers building referral relationships with realtors, CPAs, financial advisors, and high-income borrowers — all native LinkedIn audiences." },
    { title: "B2B consultants and coaches", body: "Business, executive, and career coaches whose buyers are on LinkedIn by definition. High-ticket coaching practices that need application-style inbound." },
    { title: "Founders selling to franchisors or brokerages", body: "Vendors, SaaS founders, and professional service firms whose ICP is franchise development directors, brokerage owners, or branch managers." },
    { title: "Wealth and insurance advisors", body: "RIAs, P&C and life insurance specialists, and benefits brokers who need a credibility-first channel to reach business-owner and executive clients." },
  ],
  processHeading: "How a LinkedIn engagement unfolds",
  processSubtitle: "Built carefully — LinkedIn punishes shortcuts, so we do not take any.",
  process: [
    { step: "Week 1", title: "Profile and positioning rebuild", body: "Your profile is rebuilt as a conversion asset. Headline, About, featured section, and banner positioned to your ICP. ICP defined down to title, industry, geography, and intent." },
    { step: "Week 2", title: "Content engine launch", body: "First posts publish. Outbound outreach begins at safe, manual-grade volume. Tracking and reply workflows wired into your CRM or scheduler." },
    { step: "Week 3-4", title: "First booked calls", body: "First qualified discovery calls begin landing on your calendar. Reply rates stabilize. Content engagement begins compounding." },
    { step: "Month 2+", title: "Scale and ads layer", body: "Outreach volume increases as account health proves out. Paid LinkedIn ads layer onto your warm audience. Monthly booked-call volume typically 8-15+ depending on offer and ICP." },
  ],
  whyHeading: "Why brokers pick us for LinkedIn",
  whyPoints: [
    "We are LinkedIn-native for broker and consultant categories — not a generic agency adding LinkedIn as an upsell.",
    "No automation tools that risk your account. Everything is manual-grade or fully compliant with LinkedIn's terms.",
    "Content is written in your voice — not posted by a virtual assistant in Bali using a generic template library.",
    "Outbound is low-volume, high-relevance. Reply rates of 12-25% beat industry-standard 1-3% spray-and-pray.",
    "You own the LinkedIn account, the content, and the relationships. We work inside your account — we do not lock you into our infrastructure.",
    "Direct access to the strategist running your outreach. You will not be passed to an offshore team you never meet.",
  ],
  faqHeading: "Questions brokers ask about LinkedIn lead gen",
  faqs: [
    { q: "Will my LinkedIn account get restricted or banned?", a: "Not when it is done correctly. The bans come from people running aggressive third-party automation tools (Dux-Soup, Phantombuster, etc.) at unsafe volumes. We work inside LinkedIn's terms with manual-grade outreach pacing and approved tooling. We have run this for hundreds of broker accounts without restriction issues." },
    { q: "How many booked calls per month should I expect?", a: "A typical broker engagement produces 8-15 qualified discovery calls per month by month 3, depending on offer strength, ICP size, and price point. Higher-ticket coaching or franchisor engagements run lower volume but higher deal value." },
    { q: "Do I need to post content myself, or do you write everything?", a: "We write everything in your voice — based on a positioning interview and ongoing input from you. You approve every post before it goes live. The goal is your voice, not generic ghostwriter filler." },
    { q: "Do I need Sales Navigator or LinkedIn Premium?", a: "Yes for outbound outreach — Sales Navigator unlocks the targeting filters we need to identify your ICP precisely. The seat cost is on you (typically $99/month); we do not mark it up." },
    { q: "How is this different from a typical LinkedIn outreach service?", a: "Most LinkedIn outreach services run a single tactic — connection requests at high volume with a generic template. We run organic content, qualified outbound, and (optionally) paid ads as one integrated engine. The compounding effect is why our reply rates are 5-10x higher than template-spray services." },
    { q: "What does it cost?", a: "LinkedIn engagements start in the mid-four figures per month for solo brokers and scale with outreach volume, content cadence, and whether paid ads are layered in. Book a call for a same-day quote." },
  ],
  ctaHeading: "Ready to make LinkedIn your #1 channel?",
  ctaBody: "Book a 30-minute call. We will audit your current LinkedIn presence, define your ICP, and show you exactly what 90 days of done-right LinkedIn looks like for your business.",
  serviceSchemaName: "LinkedIn Lead Generation for Brokers and Consultants",
  serviceSchemaType: "Organic and Paid LinkedIn Lead Generation",
  serviceSchemaDescription: "Done-for-you LinkedIn content, outbound outreach, and paid ads for franchise, real estate, mortgage brokers, and B2B consultants.",
};

export default function LinkedInLeadGenerationBrokers() {
  return <MoneyPageTemplate config={config} />;
}
