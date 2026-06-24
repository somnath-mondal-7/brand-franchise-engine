import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import IndiaNav from "@/components/india/IndiaNav";
import IndiaFooter from "@/components/india/IndiaFooter";
import TableOfContents from "@/components/blog/TableOfContents";
import ReadingProgress from "@/components/blog/ReadingProgress";
import BlogComments from "@/components/blog/BlogComments";
import FaqSchema from "@/components/blog/FaqSchema";
import AuthorBio from "@/components/blog/AuthorBio";
import BlogLeadForm from "@/components/blog/BlogLeadForm";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Share2, Check, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import { toast } from "@/hooks/use-toast";

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author_name: string;
  published_at: string;
  category_id: string | null;
  read_time_minutes: number;
  tags: string[];
  seo_title: string;
  seo_description: string;
  featured_image_url: string;
}

interface RecentPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image_url: string;
  published_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [recent, setRecent] = useState<RecentPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = post?.title || "FranchiseLeadsPro Blog";
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setShared(true);
      toast({ title: "Link copied!", description: "Share it anywhere you like." });
      setTimeout(() => setShared(false), 2000);
    } catch {}
  };

  useEffect(() => {
    (async () => {
      if (!slug) return;
      try {
        const { data: postData } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("slug", slug)
          .eq("is_published", true)
          .single();
        if (postData) setPost(postData as any);

        const { data: recentData } = await supabase
          .from("blog_posts")
          .select("id,title,slug,excerpt,featured_image_url,published_at")
          .eq("is_published", true)
          .neq("slug", slug)
          .order("published_at", { ascending: false });
        if (recentData) setRecent(recentData as any);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [slug]);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white text-neutral-900">
        <IndiaNav />
        <div className="container mx-auto px-4 py-32 text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#F15A29] mx-auto" />
        </div>
        <IndiaFooter />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-neutral-900">
        <IndiaNav />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Post Not Found
          </h1>
          <Link to="/blog">
            <Button className="bg-[#F15A29] text-white hover:bg-[#F15A29]/90">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>
        </div>
        <IndiaFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <ReadingProgress />
      <Helmet>
        <title>{post.seo_title || post.title} | FranchiseLeadsPro</title>
        <meta name="description" content={post.seo_description || post.excerpt} />
        <link rel="canonical" href={`https://www.franchiseleadspro.com/blog/${post.slug}`} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800;900&display=swap"
        />
        <meta property="og:title" content={post.seo_title || post.title} />
        <meta property="og:description" content={post.seo_description || post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.franchiseleadspro.com/blog/${post.slug}`} />
        {post.featured_image_url && <meta property="og:image" content={post.featured_image_url} />}
        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:author" content={post.author_name} />
        <meta name="twitter:card" content="summary_large_image" />
        {post.featured_image_url && <meta name="twitter:image" content={post.featured_image_url} />}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.seo_description || post.excerpt,
            image: post.featured_image_url,
            author: { "@type": "Organization", name: post.author_name },
            publisher: {
              "@type": "Organization",
              name: "FranchiseLeadsPro",
              logo: {
                "@type": "ImageObject",
                url: "https://www.franchiseleadspro.com/logo-hq.png",
              },
            },
            datePublished: post.published_at,
            dateModified: post.published_at,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.franchiseleadspro.com/blog/${post.slug}`,
            },
            keywords: post.tags?.join(", "),
          })}
        </script>
      </Helmet>

      <IndiaNav />

      {/* Hero with overlay title */}
      <header className="relative pt-20">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          {post.featured_image_url ? (
            <img
              src={post.featured_image_url}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
          )}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {post.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <article className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#F15A29] mb-8">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {formatDate(post.published_at)}
                </span>
                <span className="inline-flex items-center gap-2 text-neutral-500">
                  <Clock className="w-4 h-4" /> {post.read_time_minutes} min read
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="ml-auto border-neutral-300 bg-white text-neutral-900 hover:bg-[#F15A29] hover:text-white hover:border-[#F15A29]"
                >
                  {shared ? <Check className="w-4 h-4 mr-2" /> : <Share2 className="w-4 h-4 mr-2" />}
                  {shared ? "Copied" : "Share"}
                </Button>
              </div>

              {post.excerpt && (
                <p className="text-xl text-neutral-700 leading-relaxed mb-10 border-l-2 border-[#F15A29] pl-6">
                  {post.excerpt}
                </p>
              )}

              {(() => {
                const stripped = post.content.replace(
                  /\n##\s+want to dig deeper\??[\s\S]*?(?=\n##\s+|$)/i,
                  "",
                );
                const lines = stripped.split("\n");
                const h2Indices: number[] = [];
                lines.forEach((line, i) => {
                  if (/^##\s+/.test(line) && !/faq|frequently asked/i.test(line)) {
                    h2Indices.push(i);
                  }
                });
                const splitIdx = h2Indices[0] ?? -1;
                const firstHalf = splitIdx > 0 ? lines.slice(0, splitIdx).join("\n") : stripped;
                const secondHalf = splitIdx > 0 ? lines.slice(splitIdx).join("\n") : "";

                const mdProps = {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeRaw,
                    rehypeSlug,
                    [
                      rehypeAutolinkHeadings,
                      {
                        behavior: "wrap" as const,
                        properties: { className: "no-underline" },
                      },
                    ],
                  ] as any,
                };

                return (
                  <div className="blog-content blog-content-dark prose prose-lg max-w-none scroll-smooth">
                    <ReactMarkdown {...mdProps}>{firstHalf}</ReactMarkdown>
                    {secondHalf && <TableOfContents content={stripped} />}
                    {secondHalf && <ReactMarkdown {...mdProps}>{secondHalf}</ReactMarkdown>}
                  </div>
                );
              })()}

              <FaqSchema content={post.content} />

              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-neutral-100 text-xs rounded-full text-neutral-700 border border-neutral-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-12">
                <BlogLeadForm />
              </div>

              <AuthorBio />

              <div className="mt-12">
                <Link to="/blog">
                  <Button
                    variant="outline"
                    className="border-neutral-300 bg-white text-neutral-900 hover:bg-[#F15A29] hover:text-white hover:border-[#F15A29]"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Posts
                  </Button>
                </Link>
              </div>

              <BlogComments postId={post.id} postTitle={post.title} postSlug={post.slug} />
            </article>

            {/* Sidebar — scrollable recent posts */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
                  <h3
                    className="text-2xl font-bold text-neutral-900 mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Recent Posts
                  </h3>
                  <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
                    {recent.map((p) => (
                      <Link key={p.id} to={`/blog/${p.slug}`} className="block group">
                        {p.featured_image_url && (
                          <div className="aspect-video rounded-md overflow-hidden mb-3 bg-neutral-200">
                            <img
                              src={p.featured_image_url}
                              alt={p.title}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        <h4 className="text-base font-semibold text-neutral-900 group-hover:text-[#F15A29] leading-snug mb-2">
                          {p.title}
                        </h4>
                        <p className="text-sm text-neutral-600 line-clamp-2 mb-2">{p.excerpt}</p>
                        <span className="inline-block text-xs text-[#F15A29] font-medium">
                          Learn more →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <BlogLeadForm compact />

              </div>
            </aside>
          </div>
        </div>
      </section>

      <IndiaFooter />
    </div>
  );
};

export default BlogPost;
