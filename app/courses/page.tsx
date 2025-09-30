import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users, Award, Target, CheckCircle, BookOpen, Globe } from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      title: "Cryptocurrency Fundamentals & Tokenomics",
      description:
        "Master the fundamentals of cryptocurrency markets, tokenomics, and value flow dynamics. Learn about supply-demand economics, token distribution models, and how different cryptocurrencies create and maintain value.",
      duration: "6 weeks",
      level: "Intermediate",
      students: "800+",
      rating: 4.8,
      price: "$249",
      image: "/images/course-tokenomics.jpeg",
      category: "Fundamentals",
      modules: [
        "Introduction to Cryptocurrency",
        "Tokenomics Fundamentals",
        "Supply & Demand Dynamics",
        "Token Distribution Models",
        "Value Flow Analysis",
        "Market Cycles & Trends",
      ],
    },
    {
      title: "The Evolution of Money: From Cash to Crypto",
      description:
        "Explore the transformation of money from traditional fiat currencies to digital assets. Understand the historical context, technological innovations, and economic principles driving the shift to cryptocurrency.",
      duration: "4 weeks",
      level: "Beginner",
      students: "1,200+",
      rating: 4.9,
      price: "$149",
      image: "/images/course-evolution-money.jpeg",
      category: "History",
      modules: [
        "History of Money",
        "Fiat Currency Systems",
        "Digital Payment Evolution",
        "Bitcoin & Cryptocurrency Emergence",
        "Future of Money",
        "Economic Implications",
      ],
    },
    {
      title: "Introduction to Digital Assets & Blockchain",
      description:
        "The bridge between technology and finance. Comprehensive introduction to blockchain technology, digital assets, and their applications in modern finance. Perfect for professionals seeking to understand the technical foundations.",
      duration: "5 weeks",
      level: "Beginner",
      students: "950+",
      rating: 4.7,
      price: "$199",
      image: "/images/course-digital-assets.jpeg",
      category: "Technology",
      modules: [
        "Blockchain Fundamentals",
        "Digital Asset Types",
        "Smart Contracts",
        "Decentralized Applications",
        "Enterprise Blockchain",
        "Real-World Use Cases",
      ],
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
                Professional Education
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                Master <span className="text-primary">Digital Assets</span> with Expert-Led Courses
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Comprehensive educational programs designed by industry experts and backed by rigorous research. From
                fundamentals to advanced strategies, our courses empower you to navigate the digital asset landscape
                with confidence.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#courses">
                  Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Education Team</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>3,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>Industry Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Global Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Courses</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Expertly designed programs to build your digital asset expertise from the ground up
            </p>
          </div>

          <div className="space-y-16">
            {courses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-square lg:aspect-auto relative order-2 lg:order-1">
                    <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <Badge variant="secondary">{course.category}</Badge>
                        <h3 className="text-2xl lg:text-3xl font-bold text-balance">{course.title}</h3>
                        <p className="text-muted-foreground text-pretty leading-relaxed">{course.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="h-4 w-4 text-primary" />
                          <span>{course.level}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{course.students} enrolled</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span>Certificate included</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Course Modules:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          {course.modules.map((module, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{module}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <div className="text-2xl font-bold text-primary">{course.price}</div>
                        <Button size="lg" asChild>
                          <Link href="/contact">
                            Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
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

      {/* Learning Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Why Choose KIDAR Education?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our courses combine academic rigor with practical application, taught by industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Research-Backed Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All courses are based on our latest research and real-world case studies from African markets.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Expert Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn from KIDAR researchers and industry practitioners with years of hands-on experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Industry Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive recognized certificates that validate your expertise in digital asset markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Institutional Partnerships */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Institutional Partnerships</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              We partner with universities, corporations, and government institutions to deliver customized education
              programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Curriculum Development</h3>
                <p className="text-muted-foreground">
                  We help universities integrate digital asset education into their existing programs.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Custom course design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Faculty training</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Assessment frameworks</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="text-center p-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Guest Lectures & Workshops</h3>
                <p className="text-muted-foreground">
                  Our experts deliver specialized sessions on current digital asset trends and developments.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Expert speakers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Interactive workshops</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Q&A sessions</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="text-center p-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Joint Research</h3>
                <p className="text-muted-foreground">
                  Collaborate with us on cutting-edge research projects in digital asset markets.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Research partnerships</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Co-authored publications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Grant applications</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/partnerships">
                Explore Partnerships <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Start Your Digital Asset Journey Today</h2>
            <p className="text-xl opacity-90 text-pretty">
              Join thousands of professionals who have advanced their careers with KIDAR education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
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
