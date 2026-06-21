import { Helmet } from "react-helmet-async";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import { Play, FileText, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    icon: Play,
    label: "Client Video Reviews",
    desc: "Watch real franchise leaders share their experience working with us.",
    href: "/testimonials",
  },
  {
    icon: FileText,
    label: "Case Studies",
    desc: "Read in-depth stories of franchise brands we have helped scale.",
    href: "/case-studies",
  },
  {
    icon: ImageIcon,
    label: "Brand & Press Kit",
    desc: "Logos, founder bios and press-ready materials for media use.",
    href: "/press",
  },
];

const MediaLibrary = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Media Library | FranchiseLeadsPro</title>
      <meta
        name="description"
        content="Explore the FranchiseLeadsPro media library — client video reviews, case studies and brand assets."
      />
    </Helmet>
    <IndiaNav />
    <main className="pt-28 pb-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Media Library
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-accent mt-3">
            Explore our work and assets
          </h1>
          <p className="mt-4 text-accent/70 leading-relaxed max-w-2xl mx-auto">
            A curated library of client stories, case studies and brand
            materials — everything you need to get to know FranchiseLeadsPro.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <Link
              key={it.href}
              to={it.href}
              className="group bg-card border border-border rounded-2xl p-7 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-accent">
                {it.label}
              </h3>
              <p className="mt-2 text-accent/70 leading-relaxed">{it.desc}</p>
              <p className="mt-5 text-sm font-semibold text-primary">
                Explore →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
    <IndiaFooter />
  </div>
);

export default MediaLibrary;
