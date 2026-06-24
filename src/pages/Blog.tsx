import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author_name: string;
  published_at: string;
  category_id: string;
  read_time_minutes: number;
  tags: string[];
  is_featured: boolean;
  featured_image_url: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("is_published", true)
          .order("published_at", { ascending: false });
        if (data) setPosts(data as any);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  const recent = posts.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Helmet>
        <title>Our Latest Blogs | FranchiseLeadsPro — US Franchise News & Insights</title>
        <meta
          name="description"
          content="USA franchise news, FTC and state policy changes, brand launches, and factual reporting from the FranchiseLeadsPro editorial team."
        />
        <link rel="canonical" href="https://www.franchiseleadspro.com/blog" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800;900&display=swap"
        />
      </Helmet>

      <IndiaNav />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0a0a0a]">
        <div
          aria-hidden
          className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #FACC15 0%, transparent 60%)" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Latest Blogs
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm">
            <Link
              to="/"
              className="px-5 py-2 rounded-full border border-white/20 text-white/80 hover:text-[#FACC15]"
            >
              FranchiseLeadsPro
            </Link>
            <span className="text-white/40">›</span>
            <span className="px-5 py-2 rounded-full border border-[#FACC15] text-[#FACC15]">
              Our Latest Blogs
            </span>
          </div>
        </div>
      </section>

      {/* Posts + Sidebar */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-12">
              {isLoading ? (
                <p className="text-white/60">Loading posts…</p>
              ) : posts.length === 0 ? (
                <p className="text-white/60">No posts yet.</p>
              ) : (
                posts.map((post) => (
                  <article
                    key={post.id}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 group"
                  >
                    <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-lg">
                      <div className="aspect-[4/3] bg-[#111] overflow-hidden">
                        {post.featured_image_url ? (
                          <img
                            src={post.featured_image_url}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#FACC15]/30 text-sm">
                            FranchiseLeadsPro
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="flex flex-col justify-center">
                      <Link to={`/blog/${post.slug}`}>
                        <h2
                          className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#FACC15] transition-colors leading-tight mb-4"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-white/70 leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-white/50 mb-5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {formatDate(post.published_at)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {post.read_time_minutes} min read
                        </span>
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-white hover:text-[#FACC15] font-medium w-fit"
                      >
                        Read More
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FACC15] text-black">
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                  </article>
                ))
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-lg border border-white/10 bg-[#111] p-6">
                <h3
                  className="text-2xl font-bold text-white mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Recent Posts
                </h3>
                <div className="space-y-5">
                  {recent.map((p) => (
                    <Link
                      key={p.id}
                      to={`/blog/${p.slug}`}
                      className="flex gap-3 group"
                    >
                      <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden bg-[#0a0a0a]">
                        {p.featured_image_url && (
                          <img
                            src={p.featured_image_url}
                            alt={p.title}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-white group-hover:text-[#FACC15] font-medium line-clamp-3 leading-snug">
                          {p.title}
                        </p>
                        <p className="text-xs text-white/40 mt-1">{formatDate(p.published_at)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <IndiaFooter />
    </div>
  );
};

export default Blog;
