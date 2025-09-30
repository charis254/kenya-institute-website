"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/design-mode/WhatsApp%20Image%202025-09-18%20at%209.21.21%20PM-modified.png"
              alt="KIDAR Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-primary">KIDAR</span>
              <p className="text-xs text-muted-foreground">Digital Asset Research</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/about" title="About KIDAR">
                      Learn about our mission and vision
                    </ListItem>
                    <ListItem href="/team" title="Our Team">
                      Meet our research experts
                    </ListItem>
                    <ListItem href="/partnerships" title="Partnerships">
                      Institutional collaborations
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/consulting" title="Consulting">
                      Strategic advisory services
                    </ListItem>
                    <ListItem href="/services/research" title="Research">
                      Market insights and analysis
                    </ListItem>
                    <ListItem href="/training" title="Training">
                      Professional development programs
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/courses" title="Courses">
                      Educational programs
                    </ListItem>
                    <ListItem href="/events" title="Events">
                      Webinars and conferences
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button asChild>
              <Link href="/consultation">Get Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">About</p>
                  <div className="ml-4 space-y-2">
                    <Link href="/about" className="block text-sm" onClick={() => setIsOpen(false)}>
                      About KIDAR
                    </Link>
                    <Link href="/team" className="block text-sm" onClick={() => setIsOpen(false)}>
                      Our Team
                    </Link>
                    <Link href="/partnerships" className="block text-sm" onClick={() => setIsOpen(false)}>
                      Partnerships
                    </Link>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Services</p>
                  <div className="ml-4 space-y-2">
                    <Link href="/consulting" className="block text-sm" onClick={() => setIsOpen(false)}>
                      Consulting
                    </Link>
                    <Link href="/services/research" className="block text-sm" onClick={() => setIsOpen(false)}>
                      Research
                    </Link>
                    <Link href="/training" className="block text-sm" onClick={() => setIsOpen(false)}>
                      Training
                    </Link>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Resources</p>
                  <div className="ml-4 space-y-2">
                    <Link href="/courses" className="block text-sm" onClick={() => setIsOpen(false)}>
                      Courses
                    </Link>
                    <Link href="/events" className="block text-sm" onClick={() => setIsOpen(false)}>
                      Events
                    </Link>
                  </div>
                </div>
                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
                <Button asChild className="mt-4">
                  <Link href="/consultation" onClick={() => setIsOpen(false)}>
                    Get Consultation
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default Header
