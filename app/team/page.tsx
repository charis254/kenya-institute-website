import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Linkedin, Twitter, Mail, Award, BookOpen, Users } from "lucide-react"

export default function TeamPage() {
  const leadership = [
    {
      name: "Newton M. Kariuki",
      role: "Executive Director & Chief Researcher",
      bio: "BSc in Business Information Technology, author and researcher with hedge fund experience in digital assets and financial markets. Newton brings extensive expertise in cryptocurrency markets, blockchain technology, and strategic investment analysis.",
      expertise: ["Digital Asset Research", "Hedge Fund Strategies", "Market Analysis"],
      education: "BSc Business Information Technology",
      image: "/images/team-member-male.jpeg",
      linkedin: "#",
      twitter: "#",
      email: "newton.kariuki@kidar.org",
    },
    {
      name: "Roseline Gitau",
      role: "Head of Training & Education",
      bio: "Experienced blockchain consultant specializing in curriculum design and professional training for institutions and emerging markets. Roseline has led digital transformation initiatives across major African financial institutions.",
      expertise: ["Blockchain Education", "Curriculum Development", "Corporate Training"],
      education: "MSc Digital Finance",
      image: "/images/team-member-female.jpeg",
      linkedin: "#",
      twitter: "#",
      email: "roseline.gitau@kidar.org",
    },
    {
      name: "Kelvin Bundi",
      role: "Director of Strategic Partnerships",
      bio: "MBA in Strategic Management with expertise in public-private partnerships, regulatory affairs, and ecosystem development. Kelvin has extensive experience in stakeholder engagement and business development across Africa.",
      expertise: ["Strategic Partnerships", "Stakeholder Engagement", "Business Development"],
      education: "MBA Strategic Management",
      image: "/images/kelvin-bundi.jpeg",
      linkedin: "#",
      twitter: "#",
      email: "kelvin.bundi@kidar.org",
    },
  ]

  const researchers = [
    {
      name: "Dr. James Mwangi",
      role: "Senior Research Analyst",
      specialization: "DeFi & Stablecoin Research",
      image: "/images/team-member-male.jpeg",
    },
    {
      name: "Amina Hassan",
      role: "Policy Research Specialist",
      specialization: "Regulatory Analysis",
      image: "/images/team-member-female.jpeg",
    },
    {
      name: "David Kiprop",
      role: "Market Research Analyst",
      specialization: "Cryptocurrency Markets",
      image: "/images/team-member-male.jpeg",
    },
    {
      name: "Dr. Fatima Al-Rashid",
      role: "Blockchain Technology Researcher",
      specialization: "Technical Analysis",
      image: "/images/team-member-female.jpeg",
    },
  ]

  const advisors = [
    {
      name: "Prof. Robert Kiprotich",
      role: "Academic Advisor",
      affiliation: "University of Nairobi",
      expertise: "Economics & Finance",
    },
    {
      name: "Catherine Muriuki",
      role: "Industry Advisor",
      affiliation: "Former CBK Deputy Governor",
      expertise: "Central Banking & Policy",
    },
    {
      name: "Dr. Ahmed Osman",
      role: "Technology Advisor",
      affiliation: "Blockchain Consultant",
      expertise: "Distributed Systems",
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
                Our Team
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                Meet the <span className="text-primary">KIDAR</span> Team
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Our team combines deep academic expertise with practical industry experience to deliver world-class
                research, education, and advisory services in digital assets and blockchain technology.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>15+ Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>PhD Researchers</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>Industry Veterans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Leadership Team</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in finance, technology, and education
            </p>
          </div>

          <div className="space-y-16">
            {leadership.map((leader, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-square relative max-w-sm mx-auto">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      fill
                      className="object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-2 space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold">{leader.name}</h3>
                      <p className="text-lg text-primary font-semibold">{leader.role}</p>
                    </div>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{leader.bio}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Education:</h4>
                      <p className="text-muted-foreground">{leader.education}</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button size="sm" variant="outline" asChild>
                      <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={leader.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4 mr-2" />
                        Twitter
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={`mailto:${leader.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Research Team</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our research team consists of specialists in various aspects of digital assets and blockchain technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchers.map((researcher, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image
                      src={researcher.image || "/placeholder.svg"}
                      alt={researcher.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <CardTitle className="text-lg">{researcher.name}</CardTitle>
                  <CardDescription>{researcher.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-xs">
                    {researcher.specialization}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Advisory Board</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Distinguished advisors who provide strategic guidance and industry insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{advisor.name}</CardTitle>
                  <CardDescription>{advisor.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">{advisor.affiliation}</p>
                  <Badge variant="secondary" className="text-xs">
                    {advisor.expertise}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Join Our Team</h2>
            <p className="text-xl opacity-90 text-pretty">
              We're always looking for talented researchers, educators, and industry experts to join our mission of
              advancing digital asset education in Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/careers">
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/contact">Contact HR Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
