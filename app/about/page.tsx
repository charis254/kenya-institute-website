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
                  Advancing Knowledge in the <span className="text-primary">Digital Economy</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  The Kenya Institute of Digital Asset Research (KIDAR) is Africa’s hub for digital asset research,
                  education, and skills development. We exist to close the gap between innovation and adoption,
                  empowering individuals and institutions to thrive in the digital economy.
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
                src="/images/about-team-meeting.png"
                alt="KIDAR Research Team in Conference Room"
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
                  To provide independent insights, professional training, and strategic advisory for individuals,
                  institutions, and governments navigating the digital economy, advancing understanding and adoption of
                  digital assets and emerging technologies across Africa and beyond.
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
                  To lead Africa in digital asset research and education, empowering people and institutions to thrive
                  in the digital economy
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
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We work hand in hand with partners across academia, industry, and government to advance research and
                  innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Inclusion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We empower individuals and institutions across diverse communities to participate in the digital
                  economy.
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
                  We translate research and education into real-world outcomes that shape policy, innovation, and
                  inclusive growth.
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
            <Card className="relative overflow-hidden h-[400px] group">
              <div className="absolute inset-0">
                <Image src="/images/team-member-male.jpeg" alt="Newton M. Kariuki" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
              <CardHeader className="relative z-10 h-full flex flex-col justify-end text-white">
                <CardTitle className="text-white">Newton M. Kariuki</CardTitle>
                <CardDescription className="text-gray-200">Executive Director & Chief Researcher</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 text-white pb-6">
                <p className="text-sm text-gray-200">
                  BSc in Business Information Technology, author and researcher with hedge fund experience in digital
                  assets and financial markets.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden h-[400px] group">
              <div className="absolute inset-0">
                <Image src="/images/team-member-female.jpeg" alt="Roseline Gitau" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
              <CardHeader className="relative z-10 h-full flex flex-col justify-end text-white">
                <CardTitle className="text-white">Roseline Gitau</CardTitle>
                <CardDescription className="text-gray-200">Head of Training & Education</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 text-white pb-6">
                <p className="text-sm text-gray-200">
                  Experienced blockchain consultant specializing in curriculum design and professional training for
                  institutions and emerging markets.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden h-[400px] group">
              <div className="absolute inset-0">
                <Image src="/images/kelvin-bundi.jpeg" alt="Kelvin Bundi" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
              <CardHeader className="relative z-10 h-full flex flex-col justify-end text-white">
                <CardTitle className="text-white">Kelvin Bundi</CardTitle>
                <CardDescription className="text-gray-200">Director of Strategic Partnerships</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 text-white pb-6">
                <p className="text-sm text-gray-200">
                  MBA in Strategic Management with expertise in public–private partnerships, regulatory affairs, and
                  ecosystem development.
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
