import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, BookOpen, Globe, Shield, Lightbulb } from "lucide-react"

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
                  Welcome to the Kenya Institute of Digital Asset Research (KIDAR), a hub for research, education, and
                  consulting in the world of digital assets and blockchain technology.
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
              <div className="aspect-square relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_qtms1mqtms1mqtms-vvP3OGpMrWMZKEWwYdkIGBRWyltslA.png"
                  alt="KIDAR Research Institute Building - Modern glass and steel architecture with professional staff"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Market Analysis</p>
                    <p className="text-sm text-muted-foreground">Real-time insights</p>
                  </div>
                </div>
              </div>
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
                  <Link href="/research">
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
                <Badge variant="outline">Featured Course</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                  The Future of Money: Digital Assets in Emerging Markets
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Based on our published book, this flagship course blends research insights with practical
                  applications, making it ideal for universities, corporates, and government institutions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <span className="text-sm">Research-backed curriculum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm">Expert-led instruction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-sm">Global perspective with local context</span>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link href="/courses">
                  Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="KIDAR Training Program"
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
