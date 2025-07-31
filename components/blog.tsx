import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export function Blog() {
  const blogPosts = [
    {
      title: "The Future of Product Management: AI Integration and Human-Centered Design",
      excerpt:
        "Exploring how artificial intelligence is reshaping product management while maintaining focus on user experience and business outcomes.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Product Management",
      image: "/placeholder.svg?height=200&width=400",
      slug: "future-product-management-ai-integration",
    },
    {
      title: "Six Sigma in Tech: Applying DMAIC to Software Development Processes",
      excerpt:
        "How traditional Six Sigma methodologies can be adapted for modern software development to reduce defects and improve delivery times.",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Process Improvement",
      image: "/placeholder.svg?height=200&width=400",
      slug: "six-sigma-tech-dmaic-software",
    },
    {
      title: "Building Scalable Healthcare Tech: Lessons from HIPAA-Compliant Product Development",
      excerpt:
        "Key insights from developing healthcare technology products that meet regulatory requirements while delivering exceptional user experiences.",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Healthcare Tech",
      image: "/placeholder.svg?height=200&width=400",
      slug: "scalable-healthcare-tech-hipaa-compliance",
    },
    {
      title: "Cross-Functional Team Leadership: Aligning Stakeholders for Product Success",
      excerpt:
        "Strategies for managing diverse teams and stakeholders to deliver complex technical products on time and within budget.",
      date: "2024-12-28",
      readTime: "7 min read",
      category: "Leadership",
      image: "/placeholder.svg?height=200&width=400",
      slug: "cross-functional-team-leadership-alignment",
    },
    {
      title: "Data-Driven Product Decisions: KPIs That Actually Matter",
      excerpt:
        "Moving beyond vanity metrics to identify and track the key performance indicators that drive real business value.",
      date: "2024-12-20",
      readTime: "9 min read",
      category: "Analytics",
      image: "/placeholder.svg?height=200&width=400",
      slug: "data-driven-product-decisions-kpis",
    },
    {
      title: "From Idea to Implementation: Managing Technical Product Roadmaps",
      excerpt:
        "A comprehensive guide to creating and maintaining product roadmaps that balance technical debt, feature development, and business priorities.",
      date: "2024-12-15",
      readTime: "12 min read",
      category: "Product Strategy",
      image: "/placeholder.svg?height=200&width=400",
      slug: "idea-implementation-technical-product-roadmaps",
    },
  ]

  const categories = [
    "All",
    "Product Management",
    "Process Improvement",
    "Healthcare Tech",
    "Leadership",
    "Analytics",
    "Product Strategy",
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blog & Insights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sharing insights on product management, technical leadership, and industry trends based on real-world
            experience and continuous learning.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className="mb-4">{blogPosts[0].category}</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Button>
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}
