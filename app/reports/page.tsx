import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Download,
  Calendar,
  FileText,
  Search,
  TrendingUp,
  Shield,
  Globe,
  BarChart3,
  Star,
} from "lucide-react"

export default function ReportsPage() {
  const featuredReport = {
    title: "Digital Assets in Africa: 2024 Annual Report",
    description:
      "Comprehensive analysis of digital asset adoption, regulatory developments, and market trends across African markets.",
    category: "Annual Report",
    date: "December 2024",
    pages: 120,
    downloads: "5.2K",
    rating: 4.9,
    price: "Free",
    image: "/placeholder.svg?height=400&width=600",
  }

  const quarterlyReports = [
    {
      title: "Q4 2024 Market Outlook",
      description: "Quarterly analysis covering Bitcoin, Ethereum, and top altcoins performance",
      category: "Quarterly",
      date: "December 2024",
      pages: 45,
      downloads: "2.3K",
      price: "$49",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Q3 2024 DeFi Sector Report",
      description: "Deep dive into decentralized finance protocols and yield farming trends",
      category: "Quarterly",
      date: "September 2024",
      pages: 38,
      downloads: "1.8K",
      price: "$49",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Q2 2024 Regulatory Update",
      description: "Policy developments and regulatory changes across African jurisdictions",
      category: "Quarterly",
      date: "June 2024",
      pages: 42,
      downloads: "2.1K",
      price: "$49",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const sectorReports = [
    {
      title: "Central Bank Digital Currencies: African Perspectives",
      description: "Policy implications and implementation strategies for CBDCs in emerging economies",
      category: "Sector Analysis",
      date: "November 2024",
      pages: 65,
      downloads: "1.5K",
      price: "$79",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Stablecoin Ecosystem Analysis",
      description: "Comprehensive review of stablecoin adoption and regulatory considerations",
      category: "Sector Analysis",
      date: "October 2024",
      pages: 52,
      downloads: "1.2K",
      price: "$69",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "NFT Market Dynamics in Emerging Markets",
      description: "Analysis of non-fungible token trends and use cases beyond digital art",
      category: "Sector Analysis",
      date: "September 2024",
      pages: 48,
      downloads: "980",
      price: "$59",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const countryReports = [
    {
      title: "Kenya Digital Asset Landscape 2024",
      description: "In-depth analysis of Kenya's digital asset market, regulation, and adoption",
      category: "Country Study",
      date: "November 2024",
      pages: 78,
      downloads: "2.5K",
      price: "$89",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Nigeria Cryptocurrency Market Report",
      description: "Comprehensive study of Nigeria's crypto ecosystem and regulatory environment",
      category: "Country Study",
      date: "October 2024",
      pages: 85,
      downloads: "3.1K",
      price: "$89",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "South Africa Blockchain Adoption Study",
      description: "Analysis of blockchain implementation across various sectors in South Africa",
      category: "Country Study",
      date: "September 2024",
      pages: 72,
      downloads: "1.8K",
      price: "$89",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto">
                Research Reports
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                Comprehensive <span className="text-primary">Market Intelligence</span> Reports
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Access our extensive library of research reports covering digital asset markets, regulatory
                developments, and emerging trends. Our reports provide actionable insights for investors, institutions,
                and policymakers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#featured-report">
                  Download Latest Report <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#all-reports">Browse All Reports</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>50+ Reports</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>25K+ Downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>15+ Countries</span>
              </div>
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
                <Input placeholder="Search reports..." className="pl-10" />
              </div>
            </div>
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="quarterly">Quarterly Reports</SelectItem>
                  <SelectItem value="sector">Sector Analysis</SelectItem>
                  <SelectItem value="country">Country Studies</SelectItem>
                  <SelectItem value="annual">Annual Reports</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="popular">Most Downloaded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Report */}
      <section id="featured-report" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Featured Report</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our most comprehensive annual analysis of digital asset markets across Africa
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto relative">
                <Image
                  src={featuredReport.image || "/placeholder.svg"}
                  alt={featuredReport.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Badge variant="secondary">{featuredReport.category}</Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-balance">{featuredReport.title}</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{featuredReport.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{featuredReport.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span>{featuredReport.pages} pages</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="h-4 w-4 text-primary" />
                      <span>{featuredReport.downloads} downloads</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span>{featuredReport.rating}/5.0</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">{featuredReport.price}</div>
                    <Button size="lg" asChild>
                      <Link href="/reports/annual-2024">
                        Download Report <Download className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Report Categories */}
      <section id="all-reports" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Research Report Categories</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Explore our comprehensive collection of research across different market segments and regions
            </p>
          </div>

          <Tabs defaultValue="quarterly" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="quarterly">Quarterly Reports</TabsTrigger>
              <TabsTrigger value="sector">Sector Reports</TabsTrigger>
              <TabsTrigger value="country">Country Studies</TabsTrigger>
            </TabsList>

            <TabsContent value="quarterly" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Quarterly Market Outlooks</h3>
                <p className="text-muted-foreground">
                  Regular analysis covering Bitcoin, Ethereum, and top altcoins performance
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {quarterlyReports.map((report, index) => (
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
                          {report.downloads}
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {report.title}
                      </CardTitle>
                      <CardDescription>{report.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{report.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FileText className="h-4 w-4" />
                            <span>{report.pages} pages</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-bold text-primary">{report.price}</div>
                          <Button size="sm" asChild>
                            <Link href={`/reports/quarterly-${index + 1}`}>
                              Download <Download className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sector" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Sector Analysis Reports</h3>
                <p className="text-muted-foreground">
                  Deep dives into specific sectors like DeFi, stablecoins, NFTs, and tokenized assets
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sectorReports.map((report, index) => (
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
                          {report.downloads}
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {report.title}
                      </CardTitle>
                      <CardDescription>{report.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{report.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FileText className="h-4 w-4" />
                            <span>{report.pages} pages</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-bold text-primary">{report.price}</div>
                          <Button size="sm" asChild>
                            <Link href={`/reports/sector-${index + 1}`}>
                              Download <Download className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="country" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Country-Specific Studies</h3>
                <p className="text-muted-foreground">
                  Comprehensive analysis of digital asset markets in specific African countries
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {countryReports.map((report, index) => (
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
                          {report.downloads}
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {report.title}
                      </CardTitle>
                      <CardDescription>{report.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{report.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FileText className="h-4 w-4" />
                            <span>{report.pages} pages</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-bold text-primary">{report.price}</div>
                          <Button size="sm" asChild>
                            <Link href={`/reports/country-${index + 1}`}>
                              Download <Download className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Report Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Why Choose KIDAR Reports?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our research reports are trusted by investors, institutions, and policymakers across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Data-Driven Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive analysis based on real market data and on-chain metrics.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Independent Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Unbiased analysis free from commercial interests and conflicts.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Africa-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep understanding of African markets and regulatory environments.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Actionable Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Practical recommendations and strategic guidance for decision-makers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Stay Informed with KIDAR Research</h2>
            <p className="text-xl opacity-90 text-pretty">
              Subscribe to our research updates and get the latest reports delivered to your inbox
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
