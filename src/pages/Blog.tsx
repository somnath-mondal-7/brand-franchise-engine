import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "How to Generate 100+ Qualified Franchise Leads Per Month",
    excerpt: "Discover the proven strategies we use to help franchise consultants and franchisors consistently generate high-quality leads that convert into real opportunities.",
    category: "Lead Generation",
    author: "FranchiseLeads HQ Team",
    date: "March 15, 2024",
    readTime: "8 min read",
    featured: true
  };

  const posts = [
    {
      title: "5 Brand Building Strategies That Dominate the Franchise Market",
      excerpt: "Learn how to position your franchise brand to stand out in competitive markets and attract quality prospects.",
      category: "Brand Building",
      author: "Marketing Team",
      date: "March 10, 2024",
      readTime: "6 min read"
    },
    {
      title: "The Complete Guide to Franchise Lead Qualification",
      excerpt: "Master the art of qualifying leads to focus your time on prospects most likely to become franchisees.",
      category: "Lead Generation",
      author: "Sales Team",
      date: "March 5, 2024",
      readTime: "10 min read"
    },
    {
      title: "Digital Marketing Trends for Franchise Businesses in 2024",
      excerpt: "Stay ahead of the curve with the latest digital marketing strategies specifically for franchise professionals.",
      category: "Digital Marketing",
      author: "Strategy Team",
      date: "February 28, 2024",
      readTime: "7 min read"
    },
    {
      title: "ROI Secrets: Measuring Franchise Marketing Success",
      excerpt: "Learn how to track and optimize your marketing investments for maximum return in franchise lead generation.",
      category: "Analytics",
      author: "Analytics Team", 
      date: "February 25, 2024",
      readTime: "9 min read"
    },
    {
      title: "Building Trust: The Key to Franchise Lead Conversion",
      excerpt: "Discover how to build credibility and trust with prospects to improve your lead-to-sale conversion rates.",
      category: "Sales Strategy",
      author: "Sales Team",
      date: "February 20, 2024",
      readTime: "5 min read"
    },
    {
      title: "Franchise Marketing Automation: Scale Your Lead Generation",
      excerpt: "Automate your marketing processes to generate more leads while maintaining quality and personal touch.",
      category: "Automation",
      author: "Tech Team",
      date: "February 15, 2024",
      readTime: "11 min read"
    }
  ];

  const categories = ["All", "Lead Generation", "Brand Building", "Digital Marketing", "Sales Strategy", "Analytics", "Automation"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-accent/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-navy leading-tight">
              Franchise Growth Blog
            </h1>
            <p className="text-xl text-brand-gray leading-relaxed">
              Expert insights, strategies, and tips to help franchise consultants and franchisors 
              generate more leads and build stronger brands.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Featured Article</h2>
            </div>
            
            <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-secondary p-8 lg:p-12 flex items-center">
                  <div className="space-y-6">
                    <Badge className="bg-primary text-white">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-brand-navy group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-brand-gray leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-brand-gray">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button className="bg-gradient-primary hover:shadow-elegant group-hover:scale-105 transition-all">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-primary p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-white text-center space-y-4">
                    <div className="text-4xl font-bold">100+</div>
                    <div className="text-xl">Qualified Leads</div>
                    <div className="text-lg opacity-90">Per Month Strategy</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Latest Articles</h2>
              <p className="text-brand-gray">
                Stay updated with the latest strategies and insights for franchise success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 cursor-pointer"
                >
                  <CardHeader className="pb-4">
                    <Badge variant="outline" className="w-fit mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-xl text-brand-navy group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-brand-gray text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-brand-gray">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-brand-gray">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:bg-primary hover:text-white transition-all group-hover:scale-105"
                      >
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <h2 className="text-4xl font-bold">Never Miss an Update</h2>
            <p className="text-xl opacity-90">
              Get the latest franchise growth strategies delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg text-brand-navy flex-1 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button 
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary px-6"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;