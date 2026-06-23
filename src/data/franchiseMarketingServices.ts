import { Database, Code, Linkedin, TrendingUp, Globe, Users, type LucideIcon } from "lucide-react";

export type FranchiseMarketingService = {
  slug: string;
  icon: LucideIcon;
  title: string;
  summary: string;
};

export const SERVICES: FranchiseMarketingService[] = [
  {
    slug: "crm-support",
    icon: Database,
    title: "CRM Support",
    summary: "Implementation and ongoing operation of CRM infrastructure for franchise brands and multi-brand brokers.",
  },
  {
    slug: "application-development",
    icon: Code,
    title: "Application Development",
    summary: "Custom web and mobile applications built for franchise brands and brokers — portals, ops apps, dashboards.",
  },
  {
    slug: "linkedin-marketing",
    icon: Linkedin,
    title: "LinkedIn Marketing",
    summary: "LinkedIn-led candidate acquisition for franchise brands and brokers — authority, outreach, conversation.",
  },
  {
    slug: "performance-marketing",
    icon: TrendingUp,
    title: "Performance Marketing",
    summary: "Paid acquisition for franchise candidate inquiries — engineered, measured, and tied to qualified pipeline.",
  },
  {
    slug: "franchise-website",
    icon: Globe,
    title: "Franchise Website",
    summary: "Candidate-facing websites built to convert visitors into qualified franchise inquiries.",
  },
  {
    slug: "franchise-recruitment",
    icon: Users,
    title: "Franchise Recruitment",
    summary: "Qualified inquiries taken from first call to signed franchisee and opened unit.",
  },
];
