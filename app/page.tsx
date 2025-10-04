import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, BookOpen, Globe, Shield, Lightbulb, Clock, Target } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Est. 2025 • Leading Digital Asset Research
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Pioneering Digital Asset Research in <span className="text-primary">Africa</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Welcome to the Kenya Institute of Digital Asset Research (KIDAR) — a leading hub for research,
                  education, and advisory in digital assets, blockchain, and the wider digital economy. We empower
                  individuals, institutions, and governments with the knowledge, skills, and insights needed to navigate
                  and harness emerging technologies for inclusive growth and innovation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/consultation">
                    Get Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>500+ Professionals Trained</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>Pan-African Reach</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="grid grid-cols-3 gap-0">
                  {/* Left - Roseline Gitau */}
                  <div className="relative group overflow-hidden h-96">
                    <Image
                      src="/images/team-member-male.jpeg"
                      alt="Roseline Gitau"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-sm font-semibold text-center">Executive Director</p>
                    </div>
                  </div>

                  {/* Middle - Newton M. Kariuki */}
                  <div className="relative group overflow-hidden h-96">
                    <Image
                      src="/images/team-member-female.jpeg"
                      alt="Newton M. Kariuki"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-sm font-semibold text-center">Head of Training</p>
                    </div>
                  </div>

                  {/* Right - Kelvin Bundi */}
                  <div className="relative group overflow-hidden h-96">
                    <Image
                      src="/images/kelvin-bundi.jpeg"
                      alt="Kelvin Bundi"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-sm font-semibold text-center">Director of Strategic Partnerships</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Comprehensive Digital Asset Services</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our mission is to provide independent insights, professional training, and strategic advisory to
              individuals, institutions, and governments navigating the fast-evolving digital finance landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Market Research & Insights</CardTitle>
                <CardDescription>
                  Comprehensive analysis of digital asset markets with focus on emerging economies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Quarterly market outlooks</li>
                  <li>• Sector-specific reports</li>
                  <li>• Africa-focused analysis</li>
                </ul>
                <Button variant="ghost" className="mt-4 p-0 h-auto" asChild>
                  <Link href="/services/research">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Policy & Regulation Guidance</CardTitle>
                <CardDescription>Strategic advisory for regulatory compliance and policy development</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Regulatory compliance</li>
                  <li>• Policy development</li>
                  <li>• Government advisory</li>
                </ul>
                <Button variant="ghost" className="mt-4 p-0 h-auto" asChild>
                  <Link href="/consulting">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Professional Training</CardTitle>
                <CardDescription>Comprehensive educational programs for individuals and institutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Digital asset fundamentals</li>
                  <li>• Trading & risk management</li>
                  <li>• Blockchain for business</li>
                </ul>
                <Button variant="ghost" className="mt-4 p-0 h-auto" asChild>
                  <Link href="/training">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline">Featured Publication</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                  Decrypting Crypto: Redefining Money, Realizing Wealth
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  A comprehensive guide to understanding digital assets and their transformative potential in the global
                  financial system. This groundbreaking book demystifies cryptocurrency, blockchain technology, and the
                  future of money, providing practical insights for investors, businesses, and policymakers in emerging
                  markets.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <span className="text-sm">Expert analysis of Bitcoin, Ethereum, and digital finance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm">Written by leading African blockchain researchers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-sm">Practical strategies for wealth creation in the digital age</span>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link href="https://wa.me/254729433191" target="_blank" rel="noopener noreferrer">
                  Get It Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/decrypting-crypto-book.png"
                alt="Decrypting Crypto book cover - Redefining Money, Realizing Wealth by Birgen Godwin & Newton M Charis"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Featured Courses</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Master digital assets with our comprehensive educational programs designed for professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/course-tokenomics.jpeg"
                  alt="Cryptocurrency Fundamentals & Tokenomics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  Cryptocurrency Fundamentals & Tokenomics
                </CardTitle>
                <CardDescription>
                  Master tokenomics, value flow, and supply-demand dynamics in digital asset markets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>6 weeks</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="h-3 w-3" />
                      <span>Intermediate</span>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/courses">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/course-evolution-money.jpeg"
                  alt="The Evolution of Money: From Cash to Crypto"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  The Evolution of Money: From Cash to Crypto
                </CardTitle>
                <CardDescription>
                  Understand the transformation of money and the rise of digital currencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>4 weeks</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="h-3 w-3" />
                      <span>Beginner</span>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/courses">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/course-digital-assets.jpeg"
                  alt="Introduction to Digital Assets & Blockchain"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  Introduction to Digital Assets & Blockchain
                </CardTitle>
                <CardDescription>
                  The bridge between technology and finance - comprehensive blockchain fundamentals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>5 weeks</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="h-3 w-3" />
                      <span>Beginner</span>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/courses">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Ready to Navigate the Digital Asset Landscape?
            </h2>
            <p className="text-xl opacity-90 text-pretty">
              Contact us to schedule a consultation and learn how digital assets can create opportunities for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/consultation">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
