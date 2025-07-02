import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Calendar, User, ArrowRight, Tag, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

const categories = [
  {
    slug: "ai-trends",
    name: "AI Trends",
    description: "Latest developments in artificial intelligence for legal practice",
  },
  {
    slug: "cost-analysis",
    name: "Cost Analysis",
    description: "Financial impact and ROI of legal technology adoption",
  },
  { slug: "healthcare", name: "Healthcare", description: "Legal AI applications in healthcare and medical compliance" },
  {
    slug: "contract-management",
    name: "Contract Management",
    description: "AI-powered contract analysis and management solutions",
  },
  { slug: "legal-research", name: "Legal Research", description: "Advanced legal research techniques and AI tools" },
  { slug: "law-firms", name: "Law Firms", description: "Technology adoption and innovation in law firm operations" },
  { slug: "data-privacy", name: "Data Privacy", description: "Privacy, security, and compliance in legal AI systems" },
  { slug: "compliance", name: "Compliance", description: "Regulatory compliance and monitoring with AI technology" },
]

const blogPosts = [
  {
    slug: "future-ai-legal-practice-2024",
    title: "The Future of AI in Legal Practice: 2024 Trends and Predictions",
    excerpt: "Explore the latest developments in artificial intelligence and how they're reshaping legal practice.",
    author: "Dr. Sarah Chen",
    category: "ai-trends",
    publishDate: "2024-01-15",
    readTime: "8 min read",
  },
  {
    slug: "ai-document-analysis-cost-reduction",
    title: "How AI Document Analysis Reduces Legal Costs by 70%",
    excerpt: "A comprehensive analysis of cost savings achieved through AI-powered document review.",
    author: "Michael Rodriguez",
    category: "cost-analysis",
    publishDate: "2024-01-12",
    readTime: "6 min read",
  },
  {
    slug: "ai-compliance-monitoring-healthcare",
    title: "Implementing AI Compliance Monitoring in Healthcare Organizations",
    excerpt: "Best practices for deploying AI-powered compliance monitoring systems in healthcare.",
    author: "Dr. Emily Watson",
    category: "healthcare",
    publishDate: "2024-01-10",
    readTime: "10 min read",
  },
  {
    slug: "contract-intelligence-ai-risk-assessment",
    title: "Contract Intelligence: AI-Powered Risk Assessment Strategies",
    excerpt: "Learn how artificial intelligence identifies contract risks and provides actionable insights.",
    author: "James Thompson",
    category: "contract-management",
    publishDate: "2024-01-08",
    readTime: "7 min read",
  },
]

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = categories.find((c) => c.slug === params.category)

  if (!category) {
    return {
      title: "Category Not Found | Vidhaana Blog",
      description: "The requested blog category could not be found.",
    }
  }

  return {
    title: `${category.name} Articles | Vidhaana AI Legal Blog`,
    description: `${category.description}. Read expert insights and analysis on ${category.name.toLowerCase()}.`,
    alternates: {
      canonical: `https://vidhaana.com/blog/category/${category.slug}`,
    },
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categories.find((c) => c.slug === params.category)

  if (!category) {
    notFound()
  }

  const categoryPosts = blogPosts.filter((post) => post.category === category.slug)

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Blog", href: "/blog" }, { label: "Categories", href: "/blog" }, { label: category.name }]}
            className="mb-8"
          />

          <Button
            asChild
            variant="outline"
            className="mb-8 border-black text-black hover:bg-black hover:text-white bg-transparent"
          >
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6">
              <Tag className="w-4 h-4 mr-2" />
              Category
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">{category.name}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">{category.description}</p>
            <div className="text-gray-600">
              {categoryPosts.length} article{categoryPosts.length !== 1 ? "s" : ""} in this category
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryPosts.map((post, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors">
                  <CardHeader>
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
                      <span>{post.readTime}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
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
          ) : (
            <Card className="border-2 border-gray-200">
              <CardContent className="p-12 text-center">
                <h3 className="text-xl font-semibold text-black mb-2">No articles found</h3>
                <p className="text-gray-600 mb-4">There are currently no articles in the {category.name} category.</p>
                <Button asChild className="bg-black text-white hover:bg-gray-800">
                  <Link href="/blog">Browse All Articles</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Explore Other Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories
              .filter((c) => c.slug !== category.slug)
              .map((cat, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-black mb-2">{cat.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{cat.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-gray-300 text-gray-600 hover:border-black hover:text-black bg-transparent"
                    >
                      <Link href={`/blog/category/${cat.slug}`}>View Articles</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with {category.name} Insights</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest articles and insights on {category.name.toLowerCase()} delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
