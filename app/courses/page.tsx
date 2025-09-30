import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Clock, Users, Award, Play, Star, CheckCircle, Globe, Target } from "lucide-react"

export default function CoursesPage() {
  const flagshipCourse = {
    title: "The Future of Money: Digital Assets in Emerging Markets",
    description:
      "Based on our published book, this flagship course blends research insights with practical applications, making it ideal for universities, corporates, and government institutions.",
    duration: "8 weeks",
    level: "Intermediate",
    students: "500+",
    rating: 4.9,
    price: "$299",
    image: "/placeholder.svg?height=400&width=600",
    modules: 12,
    certificates: true,
  }

  const courses = [
    {
      title: "Introduction to Digital Assets",
      description: "Fundamentals of Bitcoin, Ethereum, and blockchain technology for beginners",
      duration: "4 weeks",
      level: "Beginner",
      students: "1,200+",
      rating: 4.8,
      price: "$149",
      image: "/placeholder.svg?height=200&width=300",
      category: "Fundamentals",
    },
    {
      title: "Crypto Markets & Trading",
      description: "Market structure, on-chain data analysis, and risk management strategies",
      duration: "6 weeks",
      level: "Intermediate",
      students: "800+",
      rating: 4.7,
      price: "$249",
      image: "/placeholder.svg?height=200&width=300",
      category: "Trading",
    },
    {
      title: "Blockchain for Business & Policy",
      description: "Regulation, compliance, and enterprise blockchain use cases",
      duration: "5 weeks",
      level: "Advanced",
      students: "600+",
      rating: 4.9,
      price: "$199",
      image: "/placeholder.svg?height=200&width=300",
      category: "Business",
    },
    {
      title: "DeFi Fundamentals",
      description: "Understanding decentralized finance protocols and yield farming strategies",
      duration: "4 weeks",
      level: "Intermediate",
      students: "450+",
      rating: 4.6,
      price: "$179",
      image: "/placeholder.svg?height=200&width=300",
      category: "DeFi",
    },
    {
      title: "Digital Asset Regulation in Africa",
      description: "Comprehensive overview of regulatory frameworks across African markets",
      duration: "3 weeks",
      level: "Advanced",
      students: "300+",
      rating: 4.8,
      price: "$129",
      image: "/placeholder.svg?height=200&width=300",
      category: "Regulation",
    },
    {
      title: "NFTs and Digital Ownership",
      description: "Exploring non-fungible tokens, digital art, and intellectual property rights",
      duration: "3 weeks",
      level: "Beginner",
      students: "350+",
      rating: 4.5,
      price: "$99",
      image: "/placeholder.svg?height=200&width=300",
      category: "NFTs",
    },
  ]

  const corporatePrograms = [
    {
      title: "Executive Digital Asset Strategy",
      description: "Strategic planning and implementation for C-suite executives",
      duration: "2 days",
      format: "In-person/Virtual",
      participants: "15-25",
      price: "Custom pricing",
    },
    {
      title: "Government Policy Workshop",
      description: "Regulatory framework development for government officials",
      duration: "3 days",
      format: "In-person",
      participants: "20-30",
      price: "Custom pricing",
    },
    {
      title: "Financial Institution Training",
      description: "Digital asset integration for banks and financial services",
      duration: "5 days",
      format: "Hybrid",
      participants: "10-20",
      price: "Custom pricing",
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
                Comprehensive educational programs for individuals and institutions. From fundamentals to advanced
                strategies, our courses are designed by industry experts and backed by rigorous research.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#flagship-course">
                  Explore Flagship Course <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#all-courses">Browse All Courses</Link>
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

      {/* Flagship Course */}
      <section id="flagship-course" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Flagship Course</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our most comprehensive program, designed for professionals seeking deep expertise in digital assets
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto relative">
                <Image
                  src={flagshipCourse.image || "/placeholder.svg"}
                  alt={flagshipCourse.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button size="lg" variant="secondary" className="rounded-full">
                    <Play className="h-6 w-6 mr-2" />
                    Watch Preview
                  </Button>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Badge variant="secondary">Flagship Course</Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-balance">{flagshipCourse.title}</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{flagshipCourse.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{flagshipCourse.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span>{flagshipCourse.level}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{flagshipCourse.students} enrolled</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span>{flagshipCourse.rating}/5.0</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Course Progress</span>
                      <span className="text-sm text-muted-foreground">{flagshipCourse.modules} modules</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">{flagshipCourse.price}</div>
                    <Button size="lg" asChild>
                      <Link href="/courses/flagship">
                        Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Course Categories */}
      <section id="all-courses" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">All Courses</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Choose from our comprehensive catalog of digital asset education programs
            </p>
          </div>

          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="individual">Individual Courses</TabsTrigger>
              <TabsTrigger value="corporate">Corporate Programs</TabsTrigger>
            </TabsList>

            <TabsContent value="individual" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{course.category}</Badge>
                        <div className="flex items-center space-x-1 text-sm">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {course.title}
                      </CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Target className="h-3 w-3" />
                            <span>{course.level}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{course.students}</span>
                          </div>
                          <div className="text-lg font-bold text-primary">{course.price}</div>
                        </div>
                        <Button className="w-full" asChild>
                          <Link href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}>
                            Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="corporate" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {corporatePrograms.map((program, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit">
                        Corporate Program
                      </Badge>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {program.title}
                      </CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Duration:</span>
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Format:</span>
                            <span>{program.format}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Participants:</span>
                            <span>{program.participants}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Pricing:</span>
                            <span className="font-semibold text-primary">{program.price}</span>
                          </div>
                        </div>
                        <Button className="w-full bg-transparent" variant="outline" asChild>
                          <Link href="/contact">
                            Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Learning Features */}
      <section className="py-20">
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
      <section className="py-20 bg-muted/30">
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
                <Link href="/courses/flagship">
                  Enroll in Flagship Course <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Education Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
