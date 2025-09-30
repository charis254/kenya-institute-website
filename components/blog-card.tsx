import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  href: string
  featured?: boolean
}

export function BlogCard({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  image,
  href,
  featured = false,
}: BlogCardProps) {
  if (featured) {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-video lg:aspect-auto relative">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="space-y-4">
              <Badge variant="secondary">{category}</Badge>
              <h3 className="text-2xl lg:text-3xl font-bold text-balance">{title}</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">{excerpt}</p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{readTime}</span>
                </div>
              </div>
              <Button asChild>
                <Link href={href}>
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <Badge variant="secondary" className="w-fit">
          {category}
        </Badge>
        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href={href}>
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
