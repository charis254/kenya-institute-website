import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Download, Calendar, TrendingUp, FileText, Search } from "lucide-react"

export default function ResearchPage() {
  const featuredReports = [
    {
      title: "Digital Assets in Africa: Q4 2024 Market Outlook",
      description: "Comprehensive analysis of digital asset adoption trends across African markets",
      category: "Market Analysis",
      date: "December 2024",
      downloadCount: "2.3K",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Central Bank Digital Currencies: African Perspectives",
      description: "Policy implications and implementation strategies for CBDCs in emerging economies",
      category: "Policy Research",
      date: "November 2024",
      downloadCount: "1.8K",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "DeFi Adoption in Emerging Markets: Opportunities and Risks",
      description: "Analysis of decentralized finance growth patterns and regulatory considerations",
      category: "DeFi Analysis",
      date: "October 2024",
      downloadCount: "1.5K",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const researchCategories = [
    { name: "Market Analysis", count: 24 },
    { name: "Policy Research", count: 18 },
    { name: "DeFi Analysis", count: 15 },
    { name: "Regulatory Studies", count: 12 },
    { name: "Technology Reports", count: 10 },
    { name: "Investment Insights", count: 8 },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto">
                Research & Insights
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                Independent <span className="text-primary">Digital Asset</span> Research
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Stay updated with our in-depth research articles, market updates, and expert analysis. Our research
                covers Bitcoin, Ethereum, altcoins, DeFi, NFTs, regulation, and Africa-focused blockchain innovation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#latest-reports">
                  Browse Research <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog">View Blog</Link>
              </Button>
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
                <Input placeholder="Search research reports..." className="pl-10" />
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
                  <SelectItem value="policy">Policy Research</SelectItem>
                  <SelectItem value="defi">DeFi Analysis</SelectItem>
                  <SelectItem value="regulatory">Regulatory Studies</SelectItem>
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

      {/* Featured Reports */}
      <section id="latest-reports" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Featured Research Reports</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our latest comprehensive research covering digital asset markets, policy developments, and emerging trends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReports.map((report, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={report.image || "/placeholder.svg"}
                    alt={report.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{report.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Download className="h-4 w-4 mr-1" />
                      {report.downloadCount}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{report.title}</CardTitle>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {report.date}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/research/report-${index + 1}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Research Categories</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Explore our comprehensive research across different areas of digital asset innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{category.name}</CardTitle>
                  <CardDescription>{category.count} reports available</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Research Methodology</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  KIDAR employs rigorous research methodologies combining quantitative analysis, qualitative insights,
                  and expert consultation to deliver actionable intelligence.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Data-Driven Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      We leverage multiple data sources including on-chain analytics, market data, and regulatory
                      filings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expert Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      Our research is informed by interviews with industry leaders, policymakers, and technical experts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Regular Updates</h3>
                    <p className="text-sm text-muted-foreground">
                      We publish quarterly market outlooks and timely analysis of significant market developments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Research Methodology"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Stay Ahead with KIDAR Research</h2>
            <p className="text-xl opacity-90 text-pretty">
              Subscribe to our research updates and get the latest insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/newsletter">
                  Subscribe to Updates <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Research Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
