import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, BookOpen, Globe, Target, CheckCircle, Handshake, Award, Building } from "lucide-react"

export default function PartnershipsPage() {
  const partnershipTypes = [
    {
      title: "Academic Partnerships",
      description: "Collaborate with universities and educational institutions",
      icon: BookOpen,
      benefits: [
        "Curriculum development support",
        "Faculty training programs",
        "Joint research opportunities",
        "Student exchange programs",
        "Guest lectures and workshops",
      ],
      examples: ["University of Nairobi", "Strathmore University", "USIU-Africa"],
    },
    {
      title: "Corporate Partnerships",
      description: "Work with businesses to integrate digital asset expertise",
      icon: Building,
      benefits: [
        "Executive training programs",
        "Strategic advisory services",
        "Custom research projects",
        "Employee education",
        "Technology implementation support",
      ],
      examples: ["Financial institutions", "Fintech companies", "Consulting firms"],
    },
    {
      title: "Government Partnerships",
      description: "Support policy development and regulatory frameworks",
      icon: Globe,
      benefits: [
        "Policy development support",
        "Regulatory framework design",
        "Public sector training",
        "Economic impact studies",
        "International best practices",
      ],
      examples: ["Central Bank of Kenya", "Ministry of ICT", "Capital Markets Authority"],
    },
  ]

  const partnerBenefits = [
    {
      title: "Research Collaboration",
      description: "Joint research projects and co-authored publications",
      icon: Target,
    },
    {
      title: "Knowledge Sharing",
      description: "Access to our research insights and market intelligence",
      icon: Users,
    },
    {
      title: "Training Programs",
      description: "Customized education and professional development",
      icon: Award,
    },
    {
      title: "Global Network",
      description: "Connect with our international network of experts",
      icon: Globe,
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
                Strategic Partnerships
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                Partner with <span className="text-primary">KIDAR</span> for Digital Asset Excellence
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Join our network of academic institutions, corporations, and government agencies working together to
                advance digital asset education and adoption across Africa.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#partnership-types">
                  Explore Partnerships <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Partnership Team</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>25+ Partners</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>15+ Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <Handshake className="h-4 w-4" />
                <span>Mutual Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-types" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Partnership Opportunities</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              We offer flexible partnership models designed to meet the unique needs of different organizations
            </p>
          </div>

          <div className="space-y-16">
            {partnershipTypes.map((partnership, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <partnership.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold">{partnership.title}</h3>
                    <p className="text-lg text-muted-foreground text-pretty">{partnership.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Partnership Benefits:</h4>
                    <ul className="space-y-2">
                      {partnership.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Current Partners Include:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partnership.examples.map((example, exampleIndex) => (
                        <Badge key={exampleIndex} variant="secondary">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/contact">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt={partnership.title}
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Why Partner with KIDAR?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our partnerships are built on mutual benefit, shared expertise, and a commitment to advancing digital
              asset education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Partnership Success Stories</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Real examples of how our partnerships have created value and driven innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Academic Partnership
                </Badge>
                <CardTitle>University Blockchain Curriculum</CardTitle>
                <CardDescription>
                  Collaborated with leading university to develop comprehensive blockchain curriculum
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Developed a 4-course blockchain specialization program that has been adopted by 3 universities
                    across East Africa, training over 500 students.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Impact: 500+ students</div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/case-studies/university-curriculum">Read More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Corporate Partnership
                </Badge>
                <CardTitle>Financial Institution Training</CardTitle>
                <CardDescription>
                  Executive education program for major African bank's digital transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Designed and delivered comprehensive digital asset training for 200+ executives and staff members,
                    enabling successful CBDC pilot program.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Impact: 200+ executives</div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/case-studies/bank-training">Read More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Government Partnership
                </Badge>
                <CardTitle>National Digital Currency Policy</CardTitle>
                <CardDescription>
                  Policy advisory for central bank's digital currency implementation strategy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Provided research and policy recommendations that informed the national digital currency framework,
                    now being implemented across the region.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Impact: National policy</div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/case-studies/cbdc-policy">Read More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Partnership Process</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our structured approach to building successful, long-term partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold">Initial Consultation</h3>
              <p className="text-sm text-muted-foreground">
                We discuss your objectives, challenges, and explore potential collaboration opportunities.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold">Partnership Design</h3>
              <p className="text-sm text-muted-foreground">
                We develop a customized partnership framework that aligns with both organizations' goals.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                We execute the partnership plan with clear milestones, deliverables, and success metrics.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold">Ongoing Support</h3>
              <p className="text-sm text-muted-foreground">
                We provide continuous support, evaluation, and optimization to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Partner with KIDAR?</h2>
            <p className="text-xl opacity-90 text-pretty">
              Let's explore how we can work together to advance digital asset education and adoption in your
              organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Partnership Discussion <ArrowRight className="ml-2 h-4 w-4" />
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
