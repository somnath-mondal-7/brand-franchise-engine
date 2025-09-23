import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Generate Quality Franchise Leads in 2024",
      excerpt: "Discover the latest strategies and techniques for generating high-quality franchise leads that convert.",
      category: "Lead Generation",
      author: "Sarah Chen",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      slug: "how-to-generate-quality-franchise-leads-2024"
    },
    {
      id: 2,
      title: "Building a Strong Franchise Brand Identity",
      excerpt: "Learn how to create a compelling brand identity that attracts the right franchise partners and customers.",
      category: "Brand Building",
      author: "Michael Ross",
      date: "March 12, 2024",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      slug: "building-strong-franchise-brand-identity"
    },
    {
      id: 3,
      title: "Digital Marketing Trends for Franchise Success",
      excerpt: "Explore the top digital marketing trends that franchise businesses should leverage for maximum growth.",
      category: "Digital Marketing",
      author: "David Martinez",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      slug: "digital-marketing-trends-franchise-success"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary px-4 py-2">
            Latest Insights
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            From Our Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, strategies, and insights in franchise marketing and lead generation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group bg-card border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-hover overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <CardTitle className="group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-base leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
                
                <Link to={`/blog/${post.slug}`}>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group/btn">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
              View All Posts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;