import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Calendar, User, TrendingUp, FileText, Download } from "lucide-react"

export default function ResearchPage() {
  const articles = [
    {
      id: 1,
      title: "Cross-Border Cryptocurrency Payments: Transforming Remittances in Africa",
      excerpt:
        "An in-depth analysis of how cryptocurrency and blockchain technology are revolutionizing cross-border payments and remittances across African markets, reducing costs and increasing financial accessibility for millions.",
      author: "Newton M. Kariuki",
      date: "March 15, 2025",
      category: "Market Analysis",
      readTime: "12 min read",
      image: "/images/research-remittances.jpeg",
    },
    {
      id: 2,
      title: "Financial Inclusion Through Blockchain: Bridging the Banking Gap",
      excerpt:
        "Exploring how blockchain technology and decentralized finance are providing financial services to underserved communities across Africa, enabling low-cost remittances and access to global financial markets.",
      author: "Roseline Gitau",
      date: "March 10, 2025",
      category: "DeFi Research",
      readTime: "15 min read",
      image: "/images/research-financial-inclusion.jpeg",
    },
    {
      id: 3,
      title: "DeFi Adoption in Emerging Markets: Africa Leading the Revolution",
      excerpt:
        "A comprehensive study of decentralized finance adoption patterns in emerging markets, with focus on how African nations are pioneering DeFi integration for everyday financial transactions and economic empowerment.",
      author: "Kelvin Bundi",
      date: "March 5, 2025",
      category: "Regulation",
      readTime: "18 min read",
      image: "/images/research-defi-markets.jpeg",
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
                Research & Insights
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                Independent <span className="text-primary">Digital Asset Research</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                KIDAR provides rigorous, data-driven research on digital assets, blockchain technology, and the evolving
                digital economy. Our insights empower investors, institutions, and policymakers to make informed
                decisions in this rapidly changing landscape.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#latest-research">
                  Read Latest Research <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Request Custom Research</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Research Focus</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              We cover the full spectrum of digital asset markets with particular emphasis on emerging economies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Market Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bitcoin, Ethereum, and altcoin market dynamics, price trends, and on-chain analytics
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>DeFi & NFTs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Decentralized finance protocols, yield farming strategies, and non-fungible token markets
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Regulation & Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regulatory developments, compliance frameworks, and policy recommendations for African markets
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Research Articles */}
      <section id="latest-research" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Latest Research</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              In-depth analysis and insights from our research team
            </p>
          </div>

          <div className="space-y-12">
            {articles.map((article, index) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto relative">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <Badge variant="secondary">{article.category}</Badge>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{article.date}</span>
                          </div>
                          <span>{article.readTime}</span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-balance hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-pretty leading-relaxed">{article.excerpt}</p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <User className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{article.author}</span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Button asChild>
                          <Link href={`/services/research/${article.id}`}>
                            Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Custom Research Services</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Tailored research solutions for institutions, investors, and policymakers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardHeader>
                <CardTitle>Quarterly Market Outlooks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Comprehensive quarterly reports covering major digital asset markets, trends, and forecasts
                </p>
                <Separator />
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Market performance analysis</li>
                  <li>• Trend identification</li>
                  <li>• Price forecasts</li>
                  <li>• Risk assessment</li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/contact">Subscribe</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle>Sector Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Deep-dive analysis of specific sectors like DeFi, NFTs, Layer 2 solutions, and more
                </p>
                <Separator />
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sector-specific insights</li>
                  <li>• Competitive landscape</li>
                  <li>• Growth opportunities</li>
                  <li>• Risk factors</li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/contact">Request Report</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle>Country-Specific Studies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Detailed analysis of digital asset adoption, regulation, and market dynamics in African countries
                </p>
                <Separator />
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Regulatory environment</li>
                  <li>• Market size & growth</li>
                  <li>• Adoption patterns</li>
                  <li>• Investment opportunities</li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/contact">Commission Study</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Need Custom Research?</h2>
            <p className="text-xl opacity-90 text-pretty">
              Our research team can provide tailored analysis and insights for your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Contact Research Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/consultation">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
