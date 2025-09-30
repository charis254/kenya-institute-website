import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MapPin, Users, Clock, ExternalLink, Video } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "African Digital Asset Summit 2024",
      type: "Conference",
      date: "December 15-16, 2024",
      time: "9:00 AM - 6:00 PM EAT",
      location: "Nairobi, Kenya",
      venue: "Kenyatta International Conference Centre",
      description: "The premier gathering of digital asset professionals, policymakers, and innovators across Africa.",
      speakers: ["Dr. Sarah Kimani", "Michael Ochieng", "Grace Wanjiku"],
      attendees: "500+",
      price: "Free",
      registrationLink: "#",
      image: "/images/hedge-fund-partnership.png",
      featured: true,
    },
    {
      title: "Blockchain in Banking Webinar",
      type: "Webinar",
      date: "November 28, 2024",
      time: "2:00 PM - 3:30 PM EAT",
      location: "Online",
      venue: "Zoom",
      description: "Exploring blockchain implementation strategies for African financial institutions.",
      speakers: ["Dr. James Mwangi", "Amina Hassan"],
      attendees: "200+",
      price: "Free",
      registrationLink: "#",
      image: "/images/corporate-partnership.png",
      featured: false,
    },
    {
      title: "DeFi Workshop for Professionals",
      type: "Workshop",
      date: "December 5, 2024",
      time: "10:00 AM - 4:00 PM EAT",
      location: "Lagos, Nigeria",
      venue: "Tech Hub Lagos",
      description: "Hands-on workshop covering DeFi protocols, yield farming, and risk management.",
      speakers: ["David Kiprop", "Dr. Fatima Al-Rashid"],
      attendees: "50",
      price: "$150",
      registrationLink: "#",
      image: "/images/academic-partnership.png",
      featured: false,
    },
  ]

  const pastEvents = [
    {
      title: "Central Bank Digital Currency Forum",
      date: "October 20, 2024",
      location: "Accra, Ghana",
      attendees: "300+",
      type: "Forum",
      recordingLink: "#",
    },
    {
      title: "Cryptocurrency Regulation Roundtable",
      date: "September 15, 2024",
      location: "Cape Town, South Africa",
      attendees: "150+",
      type: "Roundtable",
      recordingLink: "#",
    },
    {
      title: "Blockchain for Development Conference",
      date: "August 10, 2024",
      location: "Kigali, Rwanda",
      attendees: "400+",
      type: "Conference",
      recordingLink: "#",
    },
  ]

  const eventTypes = [
    {
      title: "Conferences",
      description: "Large-scale gatherings bringing together industry leaders and experts",
      icon: Users,
      count: "4+ per year",
    },
    {
      title: "Webinars",
      description: "Online educational sessions on specific topics and trends",
      icon: Video,
      count: "Monthly",
    },
    {
      title: "Workshops",
      description: "Hands-on training sessions for practical skill development",
      icon: Clock,
      count: "Quarterly",
    },
    {
      title: "Roundtables",
      description: "Intimate discussions with policymakers and industry leaders",
      icon: MapPin,
      count: "Bi-monthly",
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
                Events & Conferences
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                <span className="text-primary">KIDAR</span> Events
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Join us at conferences, webinars, workshops, and roundtables where we explore the latest developments in
                digital assets and blockchain technology across Africa.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#upcoming-events">
                  View Upcoming Events <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Host an Event</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>20+ Events/Year</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>5000+ Attendees</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>10+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Featured Event</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Don't miss our flagship event of the year
            </p>
          </div>

          {upcomingEvents
            .filter((event) => event.featured)
            .map((event, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {event.type}
                  </Badge>
                </div>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-balance">{event.title}</h3>
                    <p className="text-lg text-muted-foreground text-pretty">{event.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{event.attendees} expected</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Featured Speakers:</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.speakers.map((speaker, speakerIndex) => (
                          <Badge key={speakerIndex} variant="outline">
                            {speaker}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <Link href={event.registrationLink}>Register Now - {event.price}</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="#event-details">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Mark your calendar for these upcoming educational opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents
              .filter((event) => !event.featured)
              .map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4" variant="secondary">
                      {event.type}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">{event.price}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Speakers:</h4>
                      <div className="flex flex-wrap gap-1">
                        {event.speakers.map((speaker, speakerIndex) => (
                          <Badge key={speakerIndex} variant="outline" className="text-xs">
                            {speaker}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" asChild>
                      <Link href={event.registrationLink}>Register Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Types of Events</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              We host various types of events to cater to different learning preferences and professional needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((type, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{type.count}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Past Events</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Catch up on events you may have missed with our recordings and highlights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">
                    {event.type}
                  </Badge>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-transparent" variant="outline" asChild>
                    <Link href={event.recordingLink}>
                      <Video className="h-4 w-4 mr-2" />
                      Watch Recording
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Stay Connected</h2>
            <p className="text-xl opacity-90 text-pretty">
              Subscribe to our event newsletter to be the first to know about upcoming conferences, webinars, and
              workshops
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Subscribe to Events <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/contact">Propose an Event</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
