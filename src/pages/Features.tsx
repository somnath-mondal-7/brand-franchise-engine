import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Users, Workflow, Shield, Target, MessageSquare } from "lucide-react";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Users,
    eyebrow: "Done-For-You",
    title: "We send leads. You close deals.",
    body:
      "You're a franchise sales and development expert — not an automation specialist. Our dedicated team designs, writes and manages every LinkedIn campaign for you, so qualified franchise conversations land in your inbox while you focus on closing.",
    bullets: [
      "Dedicated campaign manager + US-trained VA",
      "Positioning, messaging and outreach handled end-to-end",
      "Daily qualified replies routed straight to you",
    ],
  },
  {
    icon: Shield,
    eyebrow: "100% USA-Based Virtual Assistant",
    title: "A real US-based VA on your account — not a chatbot, not offshore.",
    body:
      "Every client gets a USA-based Virtual Assistant who lives inside your LinkedIn inbox. Native English, franchise-trained, and built to sound exactly like you in front of executives, multi-unit operators and high-ticket investors.",
    bullets: [
      "USA-based, native-English Virtual Assistant",
      "Trained specifically on franchise sales conversations",
      "Replies, qualifies and books calls in your voice",
    ],
    highlight: true,
  },
  {
    icon: Target,
    eyebrow: "Built for Franchise",
    title: "Targeting that actually reaches franchise buyers.",
    body:
      "We don't blast generic lists. We build precision LinkedIn audiences of qualified candidates — multi-unit operators, area developers, executives in career transition and capitalized investors who match your franchise profile.",
    bullets: [
      "Investor, executive and multi-unit operator targeting",
      "Industry, geography and net-worth qualification layers",
      "Custom audiences tuned to your ideal franchisee",
    ],
  },
  {
    icon: MessageSquare,
    eyebrow: "Premium Messaging",
    title: "Executive-grade messaging written for franchisors.",
    body:
      "Forget templated spam. Our copywriters craft outreach in the voice of a founder talking to a peer — calm, consultative and respectful of the reader's time. The result: replies from serious people, not tire-kickers.",
    bullets: [
      "Founder-voice copy, written by humans",
      "A/B tested sequences refined every week",
      "Conversation-first — never pushy, never salesy",
    ],
  },
  {
    icon: Workflow,
    eyebrow: "CRM & Workflow",
    title: "Plugs into the tools you already run.",
    body:
      "New conversation? It flows straight into your CRM. Notify your sales team in Slack, sync to HubSpot, Pipedrive, Salesforce or anywhere Zapier reaches — so no qualified franchise lead ever slips through.",
    bullets: [
      "Direct CRM + Zapier integrations",
      "Real-time Slack and email notifications",
      "Clean handoff to your sales team",
    ],
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Features | FranchiseLeadsPro — USA-Based Franchise Lead Generation</title>
        <meta
          name="description"
          content="A premium done-for-you franchise lead generation system: USA-based Virtual Assistant, executive-grade messaging, precision targeting and CRM integrations."
        />
        <link rel="canonical" href="https://www.franchiseleadspro.com/features" />
      </Helmet>

      <IndiaNav />

      <main className="pt-28">
        {/* Hero */}
        <section className="container mx-auto px-6 lg:px-8 pb-16 lg:pb-24 text-center max-w-4xl">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5">
            Features
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-accent leading-[1.1]">
            A premium franchise lead system,
            <br className="hidden md:block" />
            run by a <span className="text-primary">USA-based</span> team.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
            Done-for-you LinkedIn lead generation built specifically for franchisors and franchise consultants — managed by a dedicated USA-based Virtual Assistant who sounds like you, qualifies like you, and books calls for you.
          </p>
        </section>

        {/* Feature blocks */}
        <section className="border-t border-border bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-24 space-y-20 max-w-6xl">
            {features.map((f, i) => {
              const Icon = f.icon;
              const reverse = i % 2 === 1;
              return (
                <article
                  key={f.title}
                  className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    f.highlight ? "scroll-mt-24" : ""
                  }`}
                >
                  <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4">
                      <span className="h-px w-6 bg-primary" />
                      {f.eyebrow}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-accent leading-tight">
                      {f.title}
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-foreground/70 leading-relaxed">
                      {f.body}
                    </p>
                    <ul className="mt-7 space-y-3">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-foreground/85">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                    <div
                      className={`relative rounded-2xl p-10 lg:p-12 border ${
                        f.highlight
                          ? "bg-accent text-white border-accent shadow-blue"
                          : "bg-background border-border shadow-sm"
                      }`}
                    >
                      <div
                        className={`inline-flex items-center justify-center h-14 w-14 rounded-xl mb-6 ${
                          f.highlight ? "bg-primary text-white" : "bg-primary/10 text-primary"
                        }`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <p
                        className={`text-sm font-semibold tracking-[0.18em] uppercase mb-2 ${
                          f.highlight ? "text-primary" : "text-primary"
                        }`}
                      >
                        {f.eyebrow}
                      </p>
                      <p
                        className={`text-xl font-bold leading-snug ${
                          f.highlight ? "text-white" : "text-accent"
                        }`}
                      >
                        {f.title}
                      </p>
                      {f.highlight && (
                        <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                          USA-Based · Native English · Franchise-Trained
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="container mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-accent leading-tight">
            Built for franchisors and consultants who want serious conversations — not noise.
          </h2>
          <p className="mt-5 text-lg text-foreground/70">
            See how our USA-based team can run your franchise lead generation end-to-end.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 px-7 font-semibold shadow-orange"
              onClick={() => window.open("https://calendly.com/lets-build-your-brand", "_blank")}
            >
              Book a Call <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </Button>
            <Link to="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-7 font-semibold border-accent/20 text-accent hover:bg-accent hover:text-white"
              >
                See Case Studies
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <IndiaFooter />
    </div>
  );
};

export default Features;
