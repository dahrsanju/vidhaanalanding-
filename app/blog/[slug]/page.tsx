import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Calendar, User, Clock, Tag, ArrowLeft, ArrowRight, Share2, BookOpen } from "lucide-react"
import { notFound } from "next/navigation"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorBio: string
  category: string
  tags: string[]
  publishDate: string
  readTime: string
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    slug: "future-ai-legal-practice-2024",
    title: "The Future of AI in Legal Practice: 2024 Trends and Predictions",
    excerpt:
      "Explore the latest developments in artificial intelligence and how they're reshaping legal practice, from document analysis to predictive analytics.",
    content: `
# The Future of AI in Legal Practice: 2024 Trends and Predictions

The legal industry stands at the precipice of a technological revolution. As we advance through 2024, artificial intelligence is no longer a futuristic concept but a present reality transforming how legal professionals work, think, and serve their clients.

## The Current State of AI in Legal Practice

Today's legal AI landscape is characterized by sophisticated tools that can analyze contracts, conduct legal research, and even predict case outcomes with remarkable accuracy. Law firms and corporate legal departments are increasingly adopting AI solutions to streamline operations, reduce costs, and improve service delivery.

### Key Statistics:
- 73% of law firms now use some form of AI technology
- AI-powered document review is 85% faster than traditional methods
- Legal AI market expected to reach $37 billion by 2026

## Emerging Trends for 2024

### 1. Predictive Analytics Revolution
AI systems are becoming increasingly sophisticated in predicting legal outcomes. By analyzing historical case data, court decisions, and judge preferences, these systems can provide lawyers with valuable insights into case strategy and settlement negotiations.

### 2. Natural Language Processing Advances
The latest NLP models can understand legal language with unprecedented accuracy, enabling more nuanced document analysis and contract review. This technology is particularly transformative for:
- Contract negotiation
- Regulatory compliance
- Legal research

### 3. Automated Legal Writing
AI is now capable of drafting basic legal documents, from simple contracts to court filings. While human oversight remains essential, this technology significantly reduces the time required for routine legal writing tasks.

## Impact on Different Practice Areas

### Corporate Law
AI is revolutionizing corporate legal departments by automating compliance monitoring, contract management, and risk assessment. Companies report up to 70% reduction in legal costs through AI implementation.

### Litigation
Predictive analytics and automated discovery are changing litigation strategy. AI can analyze millions of documents in hours, identify key evidence, and even predict judge behavior patterns.

### Regulatory Compliance
Real-time monitoring of regulatory changes and automated compliance checking are becoming standard practice, reducing the risk of violations and associated penalties.

## Challenges and Considerations

### Ethical Implications
The use of AI in legal practice raises important ethical questions:
- Bias in AI algorithms
- Transparency in AI decision-making
- Professional responsibility and AI oversight

### Data Security and Privacy
Legal AI systems handle sensitive client information, making data security paramount. Firms must ensure robust security measures and compliance with privacy regulations.

### Professional Development
Legal professionals must adapt to working alongside AI systems, requiring new skills and continuous learning.

## Predictions for the Future

### Short-term (2024-2025)
- Widespread adoption of AI-powered legal research tools
- Integration of AI in case management systems
- Increased use of chatbots for client intake and basic legal questions

### Medium-term (2025-2027)
- AI-assisted judicial decision-making
- Automated contract negotiation platforms
- Virtual legal assistants handling routine client interactions

### Long-term (2027-2030)
- AI judges for specific types of cases
- Fully automated legal document generation
- Predictive legal advice based on comprehensive data analysis

## Preparing for the AI-Driven Future

Legal professionals should:

1. **Embrace continuous learning** - Stay updated on AI developments and their applications in law
2. **Develop AI literacy** - Understand how AI systems work and their limitations
3. **Focus on human skills** - Emphasize creativity, empathy, and strategic thinking that AI cannot replicate
4. **Invest in technology** - Adopt AI tools that enhance rather than replace human capabilities

## Conclusion

The future of legal practice is inextricably linked with artificial intelligence. While AI will automate many routine tasks, it will also create new opportunities for legal professionals to focus on higher-value work, strategic thinking, and client relationships.

The key to success in this AI-driven future is not to resist change but to embrace it thoughtfully, ensuring that technology serves to enhance the practice of law while maintaining the profession's core values of justice, integrity, and client service.

As we move forward, the legal professionals who thrive will be those who successfully integrate AI into their practice while maintaining the human touch that remains essential to effective legal representation.
    `,
    author: "Dr. Sarah Chen",
    authorBio:
      "Dr. Sarah Chen is a leading expert in legal technology and AI applications in law. She holds a JD from Harvard Law School and a PhD in Computer Science from MIT.",
    category: "AI Trends",
    tags: ["AI", "Legal Technology", "Future of Law", "Trends", "Innovation"],
    publishDate: "2024-01-15",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "ai-document-analysis-cost-reduction",
    title: "How AI Document Analysis Reduces Legal Costs by 70%",
    excerpt:
      "A comprehensive analysis of cost savings achieved through AI-powered document review and analysis in legal operations.",
    content: `
# How AI Document Analysis Reduces Legal Costs by 70%

In today's competitive legal landscape, cost efficiency is paramount. AI-powered document analysis has emerged as a game-changing technology that not only improves accuracy but also dramatically reduces operational costs.

## The Traditional Document Review Challenge

Traditional document review processes are:
- Time-intensive and labor-heavy
- Prone to human error
- Expensive due to billable hour requirements
- Inconsistent in quality and approach

## AI-Powered Solutions

Modern AI document analysis systems offer:
- Automated contract review and analysis
- Risk identification and scoring
- Compliance verification
- Clause extraction and comparison

## Cost Reduction Breakdown

### Direct Cost Savings
- **Labor costs**: 60-80% reduction in review time
- **Error correction**: 90% fewer mistakes requiring rework
- **Training costs**: Minimal training required for AI systems

### Indirect Benefits
- Faster turnaround times
- Improved client satisfaction
- Enhanced competitive advantage
- Better resource allocation

## Implementation Strategies

Successful AI implementation requires:
1. Proper system selection
2. Staff training and change management
3. Integration with existing workflows
4. Continuous monitoring and optimization

## Conclusion

AI document analysis represents a transformative opportunity for legal organizations to reduce costs while improving service quality. The 70% cost reduction is not just a possibility—it's a reality for organizations that embrace this technology strategically.
    `,
    author: "Michael Rodriguez",
    authorBio:
      "Michael Rodriguez is a legal operations consultant with over 15 years of experience helping law firms optimize their processes and technology adoption.",
    category: "Cost Analysis",
    tags: ["Cost Reduction", "Document Analysis", "ROI", "Efficiency"],
    publishDate: "2024-01-12",
    readTime: "6 min read",
    featured: false,
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Vidhaana Blog",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Vidhaana AI Legal Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      tags: post.tags,
    },
    alternates: {
      canonical: `https://vidhaana.com/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    publisher: {
      "@type": "Organization",
      name: "Vidhaana",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://vidhaana.com/blog/${post.slug}`,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white min-h-screen">
        {/* Header */}
        <section className="pt-28 pb-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} className="mb-8" />

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

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-black text-white text-sm font-medium rounded-full">{post.category}</span>
                {post.featured && (
                  <span className="px-3 py-1 bg-gray-200 text-black text-sm font-medium rounded-full">Featured</span>
                )}
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">{post.title}</h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Article
                </Button>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gray-600" />
                  <div className="flex gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="text-sm text-gray-600 hover:text-black cursor-pointer">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <article className="prose prose-lg max-w-none">
                  <div
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }}
                  />
                </article>

                {/* Author Bio */}
                <Card className="border-2 border-black mt-12">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2">About {post.author}</h3>
                        <p className="text-gray-600 leading-relaxed">{post.authorBio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-6">
                  {/* Table of Contents */}
                  <Card className="border-2 border-gray-200">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-black mb-3 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Table of Contents
                      </h3>
                      <nav className="space-y-2 text-sm">
                        <a href="#introduction" className="block text-gray-600 hover:text-black">
                          Introduction
                        </a>
                        <a href="#current-state" className="block text-gray-600 hover:text-black">
                          Current State
                        </a>
                        <a href="#trends" className="block text-gray-600 hover:text-black">
                          2024 Trends
                        </a>
                        <a href="#impact" className="block text-gray-600 hover:text-black">
                          Impact Areas
                        </a>
                        <a href="#challenges" className="block text-gray-600 hover:text-black">
                          Challenges
                        </a>
                        <a href="#predictions" className="block text-gray-600 hover:text-black">
                          Predictions
                        </a>
                        <a href="#conclusion" className="block text-gray-600 hover:text-black">
                          Conclusion
                        </a>
                      </nav>
                    </CardContent>
                  </Card>

                  {/* Share */}
                  <Card className="border-2 border-gray-200">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-black mb-3">Share This Article</h3>
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          className="w-full justify-start border-gray-300 text-gray-600 hover:border-black hover:text-black bg-transparent"
                        >
                          Share on LinkedIn
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start border-gray-300 text-gray-600 hover:border-black hover:text-black bg-transparent"
                        >
                          Share on Twitter
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start border-gray-300 text-gray-600 hover:border-black hover:text-black bg-transparent"
                        >
                          Copy Link
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black mb-8">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-black transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-600">{relatedPost.category}</span>
                    </div>

                    <h3 className="text-lg font-bold text-black mb-3 hover:text-gray-600 transition-colors">
                      <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{relatedPost.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{relatedPost.readTime}</span>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="text-black hover:text-gray-600 font-medium flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Legal AI Insights</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest articles on AI legal technology delivered to your inbox weekly.
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
    </>
  )
}
