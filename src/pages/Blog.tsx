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
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 5;
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const pagePosts = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

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

  return (
    <div className="min-h-screen bg-white text-neutral-900">
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
      <section className="relative pt-32 pb-20 overflow-hidden bg-neutral-50 border-b border-neutral-200">
        <div
          aria-hidden
          className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #F15A29 0%, transparent 60%)" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1
            className="text-5xl md:text-7xl font-bold mb-8 text-neutral-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Latest Blogs
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm">
            <Link
              to="/"
              className="px-5 py-2 rounded-full border border-neutral-300 text-neutral-700 hover:text-[#F15A29]"
            >
              FranchiseLeadsPro
            </Link>
            <span className="text-neutral-400">›</span>
            <span className="px-5 py-2 rounded-full border border-[#F15A29] bg-[#F15A29]/10 text-[#c2410c]">
              Our Latest Blogs
            </span>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            {isLoading ? (
              <p className="text-neutral-500">Loading posts…</p>
            ) : posts.length === 0 ? (
              <p className="text-neutral-500">No posts yet.</p>
            ) : (
              pagePosts.map((post) => (
                <article
                  key={post.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 group"
                >
                  <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-lg">
                    <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                      {post.featured_image_url ? (
                        <img
                          src={post.featured_image_url}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-400 text-sm">
                          FranchiseLeadsPro
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="flex flex-col justify-center">
                    <Link to={`/blog/${post.slug}`}>
                      <h2
                        className="text-2xl md:text-3xl font-bold text-neutral-900 group-hover:text-[#F15A29] transition-colors leading-tight mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-neutral-600 leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-neutral-500 mb-5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {formatDate(post.published_at)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {post.read_time_minutes} min read
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-neutral-900 hover:text-[#F15A29] font-medium w-fit"
                    >
                      Read More
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#F15A29] text-white">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-2 flex-wrap">
              <button
                onClick={() => {
                  setPage((p) => Math.max(1, p - 1));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                disabled={page === 1}
                className="px-4 py-2 rounded-md border border-neutral-300 text-sm text-neutral-700 hover:border-[#F15A29] hover:text-[#F15A29] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ← Prev
              </button>
              {(() => {
                // Windowed pagination: show at most 5 page numbers around the current page,
                // plus first/last with ellipses.
                const WINDOW = 5;
                let start = Math.max(1, page - Math.floor(WINDOW / 2));
                let end = Math.min(totalPages, start + WINDOW - 1);
                if (end - start + 1 < WINDOW) {
                  start = Math.max(1, end - WINDOW + 1);
                }
                const pages: number[] = [];
                for (let i = start; i <= end; i++) pages.push(i);
                const go = (n: number) => {
                  setPage(n);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                };
                const pageBtn = (n: number) => {
                  const active = n === page;
                  return (
                    <button
                      key={n}
                      onClick={() => go(n)}
                      className={`w-10 h-10 rounded-md text-sm font-medium border transition-colors ${
                        active
                          ? "bg-[#F15A29] text-white border-[#F15A29]"
                          : "bg-white text-neutral-700 border-neutral-300 hover:border-[#F15A29] hover:text-[#F15A29]"
                      }`}
                    >
                      {n}
                    </button>
                  );
                };
                const ellipsis = (key: string) => (
                  <span key={key} className="px-2 text-neutral-400 select-none">…</span>
                );
                return (
                  <>
                    {start > 1 && pageBtn(1)}
                    {start > 2 && ellipsis("l")}
                    {pages.map(pageBtn)}
                    {end < totalPages - 1 && ellipsis("r")}
                    {end < totalPages && pageBtn(totalPages)}
                  </>
                );
              })()}
              <button
                onClick={() => {
                  setPage((p) => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-md border border-neutral-300 text-sm text-neutral-700 hover:border-[#F15A29] hover:text-[#F15A29] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>

      <IndiaFooter />
    </div>
  );
};

export default Blog;
