import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Calendar, Clock, User, Search, TrendingUp } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Digital Assets in African Financial Systems",
    excerpt:
      "Exploring how digital assets are reshaping financial inclusion and economic growth across the African continent.",
    author: "Dr. Sarah Kimani",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Market Analysis",
    image: "/placeholder.svg?height=400&width=600",
  }

  const blogPosts = [
    {
      title: "Understanding Central Bank Digital Currencies: A Beginner's Guide",
      excerpt: "Breaking down the fundamentals of CBDCs and their potential impact on traditional banking systems.",
      author: "Michael Ochieng",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Education",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "DeFi Regulation: Balancing Innovation and Consumer Protection",
      excerpt: "Analyzing the regulatory challenges and opportunities in the decentralized finance ecosystem.",
      author: "Grace Wanjiku",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Regulation",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Bitcoin Mining in Africa: Environmental and Economic Considerations",
      excerpt: "Examining the growth of Bitcoin mining operations across Africa and their sustainability implications.",
      author: "Dr. Sarah Kimani",
      date: "December 8, 2024",
      readTime: "9 min read",
      category: "Technology",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Stablecoin Adoption in Emerging Markets: Case Studies from East Africa",
      excerpt: "Real-world examples of how stablecoins are being used for remittances and commerce in East Africa.",
      author: "Michael Ochieng",
      date: "December 5, 2024",
      readTime: "5 min read",
      category: "Case Study",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "NFTs Beyond Art: Utility Applications in African Markets",
      excerpt:
        "Exploring practical use cases for NFTs in identity verification, land rights, and supply chain management.",
      author: "Grace Wanjiku",
      date: "December 3, 2024",
      readTime: "6 min read",
      category: "Innovation",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Cryptocurrency Tax Implications: A Guide for African Investors",
      excerpt: "Understanding the tax landscape for digital asset investments across different African jurisdictions.",
      author: "Dr. Sarah Kimani",
      date: "December 1, 2024",
      readTime: "8 min read",
      category: "Finance",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = [
    { name: "Market Analysis", count: 24 },
    { name: "Education", count: 18 },
    { name: "Regulation", count: 15 },
    { name: "Technology", count: 12 },
    { name: "Case Study", count: 10 },
    { name: "Innovation", count: 8 },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto">
                Research Blog
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                Insights & Analysis from <span className="text-primary">KIDAR Experts</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Stay informed with our latest thoughts on digital asset markets, regulatory developments, and blockchain
                innovation across Africa and emerging markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search blog posts..." className="pl-10" />
              </div>
            </div>
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="market">Market Analysis</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="regulation">Regulation</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Featured Article</h2>
          </div>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto relative">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-balance">{featuredPost.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/blog/featured-post">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Latest Articles</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Expert analysis and insights on the latest developments in digital assets and blockchain technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/post-${index + 1}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Sidebar */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">Trending Topics</h2>
                <p className="text-xl text-muted-foreground text-pretty">Explore our most popular content categories</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Market Trends</h3>
                      <p className="text-sm text-muted-foreground">Latest market analysis and predictions</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Expert Interviews</h3>
                      <p className="text-sm text-muted-foreground">Insights from industry leaders</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <Link
                        href={`/blog/category/${category.name.toLowerCase().replace(" ", "-")}`}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {category.name}
                      </Link>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Never Miss an Update</h2>
            <p className="text-xl opacity-90 text-pretty">
              Subscribe to our newsletter and get the latest insights delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground text-primary placeholder:text-primary/60"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
