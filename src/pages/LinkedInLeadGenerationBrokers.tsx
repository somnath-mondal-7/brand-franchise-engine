import MoneyPageTemplate, { type MoneyPageConfig } from "@/components/MoneyPageTemplate";
import { Linkedin, Target, Users, Calendar, ShieldCheck, LineChart } from "lucide-react";

const config: MoneyPageConfig = {
  canonical: "https://www.franchiseleadspro.com/linkedin-lead-generation-brokers",
  metaTitle: "LinkedIn Lead Generation for Franchise Brokers | Exclusive Pipeline",
  metaDescription: "LinkedIn lead generation built for franchise brokers and consultants. Exclusive candidate-investors sourced from LinkedIn and booked to your calendar.",
  ogTitle: "LinkedIn Lead Generation for Franchise Brokers",
  ogDescription: "Exclusive LinkedIn-sourced candidate pipelines for franchise brokers and consultants.",
  badge: "LinkedIn — Built for Franchise Brokers",
  h1Line1: "LinkedIn Lead Generation",
  h1Line2: "for Franchise Brokers",
  heroSubtitle: "LinkedIn is where executives, corporate-refugees, and high-net-worth candidates research franchise ownership. We turn that into exclusive, capital-qualified discovery calls on your calendar — no shared portal leads, no cold-spam outreach.",
  problemHeading: "Why LinkedIn beats portal leads for franchise brokers (and why most brokers run it wrong)",
  problemParagraphs: [
    "LinkedIn is the highest-quality candidate source for franchise brokers and consultants. The platform is built around verified professional identity, income signals, and career-transition behavior — exactly the data points that predict whether someone has the capital and timing to award a franchise.",
    "But most brokers either ignore LinkedIn entirely or run it badly — generic Sales Navigator spam, copy-paste connection requests, and pitch-in-the-first-message outreach that gets ignored, reported, or restricted. The platform punishes that approach and rewards the opposite.",
    "Done right, LinkedIn lead generation for franchise brokers combines targeted paid acquisition (LinkedIn Ads, Conversation Ads, Lead Gen Forms), credibility content from the broker's profile, qualification-first messaging, and direct calendar booking — producing exclusive candidates that portal leads cannot match on quality.",
  ],
  whatYouGetHeading: "What a LinkedIn lead generation engagement includes",
  whatYouGetSubtitle: "Built specifically for the LinkedIn-to-franchise-broker funnel.",
  whatYouGet: [
    { icon: <Linkedin className="h-6 w-6" />, title: "LinkedIn-native ad campaigns", body: "Targeted LinkedIn Ads, Conversation Ads, and Lead Gen Forms tuned for franchise candidate behavior — not generic B2B SaaS playbooks." },
    { icon: <Target className="h-6 w-6" />, title: "Audience targeting by income and role", body: "Audiences built around senior-IC and management roles, income signals, industry transitions, and career-change behavior that predicts franchise readiness." },
    { icon: <Users className="h-6 w-6" />, title: "Profile and credibility setup", body: "Your LinkedIn profile, banner, About section, and Featured posts positioned as a credible franchise consultant — not a generic broker pitch." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Capital and timing qualification", body: "Lead Gen Form logic and follow-up scripts qualify against capital bands, net worth, liquidity, and timeline before a discovery call is booked." },
    { icon: <Calendar className="h-6 w-6" />, title: "Calendar-booked appointments", body: "Qualified LinkedIn-sourced candidates auto-routed into your calendar in your time zone. No back-and-forth, no missed follow-ups." },
    { icon: <LineChart className="h-6 w-6" />, title: "LinkedIn-specific reporting", body: "Cost per qualified appointment from LinkedIn, role-and-industry breakdowns, and pipeline value tracked weekly — not impressions or 'engagement.'" },
  ],
  whoItsForHeading: "Who we run LinkedIn lead generation for",
  whoItsFor: [
    { title: "Independent franchise brokers", body: "Solo brokers building a LinkedIn-led personal-brand pipeline of exclusive candidate-investors." },
    { title: "Franchise broker group members", body: "Brokers affiliated with FBA, IFPG, FranNet, or FranChoice using LinkedIn as their exclusive personal-brand channel alongside group affiliations." },
    { title: "Multi-brand consultancies", body: "Consultants representing multiple brands who need clean LinkedIn-sourced flow segmented by brand." },
    { title: "Franchise consultants moving up-market", body: "Consultants targeting higher-net-worth, executive-background candidates for premium concepts." },
    { title: "Master franchisees and area developers", body: "Multi-unit operators recruiting sub-franchisees and unit operators with executive backgrounds." },
    { title: "Franchisors recruiting at the upper capital bands", body: "Brands awarding $500k+ territories who need access to executive and high-net-worth candidate pools concentrated on LinkedIn." },
  ],
  processHeading: "How a LinkedIn lead generation engagement unfolds",
  processSubtitle: "Designed for the way LinkedIn rewards (and punishes) outreach.",
  process: [
    { step: "Week 1", title: "Profile and audience build", body: "LinkedIn profile, banner, About, and Featured assets built. Target audiences defined by role, industry, income signals, and geography." },
    { step: "Week 2", title: "Campaign and funnel build", body: "Lead Gen Forms, Conversation Ads, and landing pages built. Qualification logic, CRM workflow, and calendar integration wired in." },
    { step: "Week 3", title: "Launch", body: "LinkedIn campaigns go live. First qualified discovery calls reach your calendar within 10–21 days." },
    { step: "Month 2+", title: "Scale", body: "Winning audiences (role, industry, geography) scale. Underperforming segments cut. Monthly reviews tie LinkedIn spend to awarded deals." },
  ],
  whyHeading: "Why franchise brokers pick us for LinkedIn",
  whyPoints: [
    "Franchise and high-ticket professional services only — we know which LinkedIn audiences actually award franchises.",
    "Paid LinkedIn campaigns, not cold connection spam — we don't get your account restricted.",
    "Every LinkedIn-sourced candidate is exclusive to you. Never resold to other brokers.",
    "Capital, net worth, and timing qualification built into Lead Gen Form logic before booking.",
    "LinkedIn-specific reporting — cost per qualified appointment, role-and-industry breakdowns.",
    "Direct access to senior US-based strategists. No offshore handoff after the sales call.",
  ],
  faqHeading: "Questions brokers ask about LinkedIn lead generation",
  faqs: [
    { q: "Is LinkedIn really better than portal leads for franchise brokers?", a: "For quality, yes — substantially. LinkedIn audiences carry verified income, role, and career-transition signals that portal-form candidates do not. The candidates cost more per appointment but convert at significantly higher rates, especially at the $250k+ capital bands." },
    { q: "Do you do cold outreach or paid LinkedIn ads?", a: "Primarily paid — LinkedIn Ads, Conversation Ads, and Lead Gen Forms. Cold outreach is layered selectively and within LinkedIn's automation limits to avoid account restrictions. We do not run mass connection-spam campaigns that get accounts flagged." },
    { q: "Will this conflict with my broker group affiliation?", a: "No. LinkedIn engagements are designed to complement FBA, IFPG, FranNet, and FranChoice affiliations. Group-distributed leads continue flowing — we add an exclusive LinkedIn-sourced pipeline alongside them." },
    { q: "How quickly will I see LinkedIn-sourced appointments?", a: "Most engagements produce the first qualified LinkedIn discovery call within 10–21 days of launch. Volume scales from month two as audiences and creative mature." },
    { q: "Do you set up my LinkedIn profile too?", a: "Yes — profile, banner, About section, and Featured posts are part of the build. LinkedIn audiences research the broker's profile before booking, so credibility setup is non-optional." },
    { q: "What does LinkedIn lead generation cost?", a: "Broker engagements typically start in the low four figures per month plus LinkedIn ad spend, scaled by appointment-volume targets. Book a strategy call for a same-day quote." },
  ],
  ctaHeading: "Ready to turn LinkedIn into your best candidate source?",
  ctaBody: "Book a 30-minute strategy call. We will audit your LinkedIn presence, map the audiences worth targeting, and quote you the same day.",
  serviceSchemaName: "LinkedIn Lead Generation for Franchise Brokers",
  serviceSchemaType: "LinkedIn Lead Generation",
  serviceSchemaDescription: "Exclusive LinkedIn-sourced candidate-investor pipelines for franchise brokers and consultants — paid campaigns, qualification, and booked discovery calls.",
};

export default function LinkedInLeadGenerationBrokers() {
  return <MoneyPageTemplate config={config} />;
}
