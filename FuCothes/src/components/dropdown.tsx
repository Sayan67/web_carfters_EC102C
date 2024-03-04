"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navelem = [
  
  {
    title: "Women",
    subitems: [
      {
        title: "Top Wear",
        href: "/",
        description: "A Collection of beautiful tops for your wardrobe to sleek your look",
      },
      {
        title: "Bottom Wear",
        href: "/",
        description: "A Collection of beautiful Pants for your wardrobe to sleek your look",
      },
      {
        title: "Accessories/Jewelry",
        href: "/",
        description: "A Collection of beautiful Jewelry for your wardrobe to sleek your look",
      },
      {
        title: "Shoes",
        href: "/",
        description: "A Collection of beautiful Shoes for your wardrobe to sleek your look",
      },
    ]
  },
  {
    title: "Men",
    subitems: [
      {
        title: "Shirts",
        href: "/",
        description: "A Collection of beautiful shirts for your wardrobe to sleek your look",
      },
      {
        title: "Pants",
        href: "/",
        description: "A Collection of beautiful Pants for your wardrobe to sleek your look",
      },
      {
        title: "Accessories/Jewelry",
        href: "/",
        description: "A Collection of beautiful Jewelry for your wardrobe to sleek your look",
      },
      {
        title: "Shoes",
        href: "/",
        description: "A Collection of beautiful Shoes for your wardrobe to sleek your look",
      },
    ]

  },

]

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="font-rorobot_con text-white hidden lg:block">
      <NavigationMenuList className="">
        <NavigationMenuItem className="">

          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {
          navelem.map((item)=>{
            return(
              <NavigationMenuItem>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background border-slate-700">
                    {item.subitems.map((subitem) => (
                      <ListItem
                        key={subitem.title}
                        title={subitem.title}
                        href={subitem.href}
                        className="bg-slate-800 border-slate-700"
                      >
                        {subitem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          })
        }
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="font-extralight border-slate-700">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium text-white leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
