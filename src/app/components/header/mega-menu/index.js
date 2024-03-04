"use client"
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Megamenu() {
  return (
    <div className="mega-menu flex justify-center border-b border-background">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger  className='menu-trigger text-base  hover:font-semibold  border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-white font-andika'>Earrings</NavigationMenuTrigger>
            <NavigationMenuContent className='w-full'>
              <div className="section-one grid grid-cols-12 gap-5">
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger  className='menu-trigger text-base  hover:font-semibold  border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-white font-andika'>Necklaces</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 gap-5">
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger  className='menu-trigger hover:font-semibold text-base border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-white font-andika'>Pendants</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 text-base  gap-5">
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger text-base hover:font-semibold border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-white font-andika'>Bracelets</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 gap-5">
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col-span-3">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger bg-white'>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 gap-5">
                <div className="col">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger bg-white'>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 gap-5">
                <div className="col">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="">
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                    <li className=""><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem> */}

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef <
  React.ElementRef < "a" >
  React.ComponentPropsWithoutRef < "a" >> (({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
// ListItem.displayName = "ListItem";
