import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Eye, Award, Users, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  About KIDAR
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                  Bridging Innovation and <span className="text-primary">Practical Adoption</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  The Kenya Institute of Digital Asset Research (KIDAR) is a premier research and training hub for
                  digital finance in Africa. Founded to bridge the gap between blockchain innovation and practical
                  adoption, KIDAR serves as a trusted source of education and insights.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="KIDAR Research Team"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Card className="p-8 border-2 border-primary/20">
              <CardHeader className="p-0 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground leading-relaxed">
                  To provide independent insights, professional training, and strategic advisory to individuals,
                  institutions, and governments navigating the fast-evolving digital finance landscape. We are committed
                  to advancing understanding and adoption of digital assets across Africa and emerging markets.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-secondary/20">
              <CardHeader className="p-0 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading authority on digital asset research and education in Africa, empowering individuals
                  and institutions to harness the transformative potential of blockchain technology for economic growth
                  and financial inclusion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Core Values</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              The principles that guide our research, education, and advisory services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain the highest standards in research methodology, analysis, and educational delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We foster partnerships with institutions, governments, and industry leaders to drive innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We focus on creating meaningful change in how digital assets are understood and adopted in Africa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Impact in Numbers</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Since our establishment, we've been making a significant impact across Africa
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-primary">500+</div>
              <p className="text-muted-foreground">Professionals Trained</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-primary">50+</div>
              <p className="text-muted-foreground">Research Reports</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-primary">25+</div>
              <p className="text-muted-foreground">Institutional Partners</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-primary">15+</div>
              <p className="text-muted-foreground">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our team combines deep academic expertise with practical industry experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Team Member"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <CardTitle>Dr. Sarah Kimani</CardTitle>
                <CardDescription>Executive Director & Chief Researcher</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  PhD in Financial Economics, 15+ years in digital asset research and policy development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Team Member"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <CardTitle>Michael Ochieng</CardTitle>
                <CardDescription>Head of Training & Education</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Former blockchain consultant with expertise in institutional training and curriculum development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Team Member"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <CardTitle>Grace Wanjiku</CardTitle>
                <CardDescription>Director of Strategic Partnerships</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  MBA in International Business, specializing in public-private partnerships and regulatory affairs.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/team">
                View Full Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Join Our Mission</h2>
            <p className="text-xl opacity-90 text-pretty">
              Partner with us to advance digital asset adoption and education across Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/partnerships">
                  Explore Partnerships <ArrowRight className="ml-2 h-4 w-4" />
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
