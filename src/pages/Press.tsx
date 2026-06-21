import { Helmet } from "react-helmet-async";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import PressFeatures from "@/components/PressFeatures";

const Press = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Press & Media | FranchiseLeadsPro</title>
      <meta
        name="description"
        content="FranchiseLeadsPro and our founder featured in leading business publications. Read the press coverage."
      />
    </Helmet>
    <IndiaNav />
    <main className="pt-28">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center pb-4">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Press Room
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-accent mt-3">
          FranchiseLeadsPro in the news
        </h1>
        <p className="mt-4 text-accent/70 leading-relaxed">
          Our work and our founder have been featured in respected business
          media for our approach to franchise growth, marketing and technology.
        </p>
      </section>
      <PressFeatures />
    </main>
    <IndiaFooter />
  </div>
);

export default Press;
