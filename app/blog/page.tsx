import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Calendar, User, ArrowRight, Search, Tag, Clock, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Legal Technology Blog | Expert Insights & Industry Trends | Vidhaana",
  description:
    "Stay updated with the latest AI legal technology trends, expert insights, case studies, and industry analysis. Discover how artificial intelligence is transforming the legal industry.",
  keywords: [
    "AI legal blog",
    "legal technology trends",
    "artificial intelligence law",
    "legal AI insights",
    "legal tech news",
    "AI legal case studies",
    "legal innovation blog",
    "legal technology articles",
    "AI legal research",
    "legal automation trends",
  ],
  alternates: {
    canonical: "https://vidhaana.com/blog",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Vidhaana AI Legal Technology Blog",
  description: "Expert insights and trends in AI legal technology",
  url: "https://vidhaana.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Vidhaana",
  },
}

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of AI in Legal Practice: 2024 Trends and Predictions",
    excerpt:
      "Explore the latest developments in artificial intelligence and how they're reshaping legal practice, from document analysis to predictive analytics.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI Trends",
    slug: "future-ai-legal-practice-2024",
    featured: true,
  }

  const blogPosts = [
    {
      title: "How AI Document Analysis Reduces Legal Costs by 70%",
      excerpt:
        "A comprehensive analysis of cost savings achieved through AI-powered document review and analysis in legal operations.",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Cost Analysis",
      slug: "ai-document-analysis-cost-reduction",
    },
    {
      title: "Implementing AI Compliance Monitoring in Healthcare Organizations",
      excerpt:
        "Best practices for deploying AI-powered compliance monitoring systems in healthcare to ensure HIPAA and regulatory adherence.",
      author: "Dr. Emily Watson",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Healthcare",
      slug: "ai-compliance-monitoring-healthcare",
    },
    {
      title: "Contract Intelligence: AI-Powered Risk Assessment Strategies",
      excerpt:
        "Learn how artificial intelligence identifies contract risks and provides actionable insights for better legal decision-making.",
      author: "James Thompson",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Contract Management",
      slug: "contract-intelligence-ai-risk-assessment",
    },
    {
      title: "Legal Research Revolution: AI vs Traditional Methods",
      excerpt:
        "Comparing traditional legal research methods with AI-powered alternatives and their impact on legal practice efficiency.",
      author: "Lisa Park",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Legal Research",
      slug: "legal-research-ai-vs-traditional",
    },
    {
      title: "Small Law Firms: Leveraging AI for Competitive Advantage",
      excerpt:
        "How small and medium law firms can use AI technology to compete with larger firms and improve client service delivery.",
      author: "Robert Kim",
      date: "2024-01-03",
      readTime: "5 min read",
      category: "Law Firms",
      slug: "small-law-firms-ai-competitive-advantage",
    },
    {
      title: "Data Privacy in AI Legal Systems: Best Practices and Compliance",
      excerpt:
        "Essential guidelines for maintaining data privacy and security when implementing AI systems in legal practice.",
      author: "Dr. Amanda Foster",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Data Privacy",
      slug: "data-privacy-ai-legal-systems",
    },
  ]

  const categories = [
    "AI Trends",
    "Cost Analysis",
    "Healthcare",
    "Contract Management",
    "Legal Research",
    "Law Firms",
    "Data Privacy",
    "Compliance",
    "Technology",
    "Case Studies",
  ]

  const trendingTopics = [
    "AI Legal Automation",
    "Contract Intelligence",
    "Regulatory Compliance",
    "Legal Analytics",
    "Document Processing",
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Blog" }]} className="mb-8" />

            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Latest Insights
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                AI Legal Technology
                <span className="block text-black">Insights & Trends</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Stay ahead of the curve with expert insights, industry analysis, and practical guidance on artificial
                intelligence in legal practice.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Featured Article</h2>
              <p className="text-lg text-gray-600">Don't miss our most popular and insightful content</p>
            </div>

            <Card className="border-2 border-black max-w-4xl mx-auto shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-black text-white text-sm font-medium rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-black text-sm font-medium rounded-full">Featured</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{featuredPost.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Button asChild className="bg-black text-white hover:bg-gray-800">
                    <Link href={`/blog/${featuredPost.slug}`} className="flex items-center">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-black">Latest Articles</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{blogPosts.length} articles</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Tag className="w-4 h-4 text-gray-600" />
                          <span className="text-sm text-gray-600">{post.category}</span>
                        </div>
                        <CardTitle className="text-xl font-bold text-black hover:text-gray-600 transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>

                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                          >
                            <Link href={`/blog/${post.slug}`} className="flex items-center">
                              Read More
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                    >
                      Previous
                    </Button>
                    <Button className="bg-black text-white hover:bg-gray-800">1</Button>
                    <Button
                      variant="outline"
                      className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                    >
                      2
                    </Button>
                    <Button
                      variant="outline"
                      className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                    >
                      3
                    </Button>
                    <Button
                      variant="outline"
                      className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  {/* Categories */}
                  <Card className="border-2 border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-black">Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {categories.map((category, index) => (
                          <Link
                            key={index}
                            href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block text-gray-600 hover:text-black transition-colors py-1 border-b border-gray-100 last:border-b-0"
                          >
                            {category}
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Trending Topics */}
                  <Card className="border-2 border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-black flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Trending Topics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {trendingTopics.map((topic, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-200 text-black text-sm rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Newsletter Signup */}
                  <Card className="border-2 border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-black">Stay Updated</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Get the latest AI legal technology insights delivered to your inbox.
                      </p>
                      <div className="space-y-3">
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="w-full px-3 py-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <Button className="w-full bg-black text-white hover:bg-gray-800">Subscribe</Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Popular Posts */}
                  <Card className="border-2 border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-black">Popular Posts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {blogPosts.slice(0, 3).map((post, index) => (
                          <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
                            >
                              {post.title}
                            </Link>
                            <p className="text-xs text-gray-600 mt-1">{post.readTime}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Legal Practice?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how AI can revolutionize your legal operations with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
                <Link href="/contact" className="flex items-center">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              >
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
