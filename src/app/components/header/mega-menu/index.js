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
import Image from "next/image";

export default function Megamenu() {
  return (
    <div className="mega-menu flex justify-center border-b border-background">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger text-base  hover:font-semibold  border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-transparent font-andika'>Earrings</NavigationMenuTrigger>
            <NavigationMenuContent className='w-full'>
              <div className="section-one grid grid-cols-12 gap-5">
                <div className="col-span-2">
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Stud</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Jacket</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Ear Spike</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Plug</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Huggie</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Dangle</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Threader</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Chandelier</Link></li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Drop</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Hoop</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Cluster</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Teardrop</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Bajoran</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Circular Barbell</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>LeverBack</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Mismatched</Link></li>
                  </ul>
                </div>
                <div className="col-span-4">
                  <div className="category-wrapper py-5 flex justify-center">
                    <Image src='/uploads/images/all/earrings.jpg' alt="Earrings" width={200} height={200} />
                  </div>
                </div>
                <div className="col-span-2">
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Stud</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Jacket</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Ear Spike</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Plug</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Huggie</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Dangle</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Threader</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Chandelier</Link></li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Drop</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Hoop</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Cluster</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Teardrop</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Bajoran</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Circular Barbell</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>LeverBack</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Mismatched</Link></li>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger text-base  hover:font-semibold  border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-transparent font-andika'>Necklaces</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 gap-5">
                <div className="col-span-2">
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Chain</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Collar</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Bib</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Torque</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Twisted</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Lariat</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Negligee</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Rosary</Link></li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Tennis</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Pearl</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Initial</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Graduated</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Multi Layer</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Tassel</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Bauble</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Choker</Link></li>
                  </ul>
                </div>
                <div className="col-span-4">
                  <div className="category-wrapper py-5 flex justify-center">
                    <Image src='/uploads/images/all/necklace.jpg' alt="Earrings" width={200} height={200} />
                  </div>
                </div>
                <div className="col-span-2">
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Chain</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Collar</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Bib</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Torque</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Twisted</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Lariat</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Negligee</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Rosary</Link></li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Tennis</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Pearl</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Initial</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Graduated</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Multi Layer</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Tassel</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Bauble</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Choker</Link></li>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger hover:font-semibold text-base border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-transparent font-andika'>Rings</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 text-base gap-5">
                <div className="col-span-2">
                  {/* <h2>Engagement Rings</h2> */}
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Solitaire</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Side Stones</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Hidden Halo</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Three Stone</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Nature Inspired</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Classic</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Vintage</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Modern</Link></li>
                  </ul>
                </div>
                <div className="col-span-2">
                  {/* <h2>Wedding Rings</h2> */}
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Nature Inspired</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Anniversary Rings</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Classic Rings</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Curved Rings</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Modern Rings</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Vintage Rings</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Diamond Rings</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Stackable Rings</Link></li>
                  </ul>
                </div>
                <div className="col-span-4">
                  <div className="category-wrapper py-5 flex justify-center">
                    <Image src='/uploads/images/all/rings.jpg' alt="Earrings" width={200} height={200} />
                  </div>
                </div>
                <div className="col-span-2">
                  {/* <h2>By Metal</h2> */}
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Yellow Gold</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>White Gold</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Rose Gold</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Silver</Link></li>
                  </ul>
                </div>
                <div className="col-span-2">
                  {/* <h2>Cabochon Rings</h2> */}
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Hello</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Hello</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Hello</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Hello</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Hello</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Hello</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Hello</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Hello</Link></li>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger text-base hover:font-semibold border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-transparent font-andika'>Bracelets</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 gap-5">
                <div className="col-span-2">
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Chain</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Cuff</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Gemstone</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Cable</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Hinged</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Open Bangle</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Bangle</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Identification</Link></li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Wrap</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Affirmation</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Slider</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Tennis</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Charm</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Friendship</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Crossover</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Cage Cuff</Link></li>
                  </ul>
                </div>
                <div className="col-span-4">
                  <div className="category-wrapper py-5 flex justify-center">
                    <Image src='/uploads/images/all/bracelets.jpg' alt="Earrings" width={200} height={200} />
                  </div>
                </div>
                <div className="col-span-2">
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Chain</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Cuff</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Gemstone</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Cable</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Hinged</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Open Bangle</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Bangle</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Identification</Link></li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Wrap</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Affirmation</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Slider</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Tennis</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Charm</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Friendship</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Crossover</Link></li>
                    <li className=" hover:font-semibold hover:text-primary"><Link href='/'>Cage Cuff</Link></li>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
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
