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
            <NavigationMenuTrigger className='menu-trigger hover:font-semibold text-base border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-transparent font-andika'>Rings</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 text-base gap-5">

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Style</h2>
                  <ul className="px-5 text-accent font-andika text-base">

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/engagement-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/engagement.jpg' alt='' width={50} height={50} />
                        <span>Engagement</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/solitaire-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/solitaire.jpg' alt='' width={50} height={50} />
                        <span>Solitaire</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/casual-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/casual.jpg' alt='' width={50} height={50} />
                        <span>Casual</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/mens-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/mens.jpg' alt='' width={50} height={50} />
                        <span>Mens Rings</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/navratna-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/navratna.jpg' alt='' width={50} height={50} />
                        <span>Navratna</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/mangalsutra-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/mangalsutra.jpg' alt='' width={50} height={50} />
                        <span className="whitespace-nowrap">Mangalsutra Rings</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/couple-bands' className="flex items-center">
                        <Image src='/uploads/images/category-images/couple.jpg' alt='' width={50} height={50} />
                        <span>Couple Bands</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Metal</h2>
                  <ul className="px-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/platinum.jpg' alt='' width={50} height={50} />
                        <span>Platinum</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/yellow-gold.jpg' alt='' width={50} height={50} />
                        <span>Yellow Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/rose-gold.jpg' alt='' width={50} height={50} />
                        <span>Rose Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/silver' className="flex items-center">
                        <Image src='/uploads/images/category-images/silver.jpg' alt='' width={50} height={50} />
                        <span>Silver</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-4">
                  <div className="category-image-wrapper py-5 h-full flex items-center justify-center">
                    <div className="image flex justify-center items-center">
                      <Image src='/uploads/images/all/rings.jpg' alt="Earrings" width={200} height={200} />
                    </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Occasion</h2>
                  <ul className="px-5 text-accent font-andika text-base">

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/daily-wear' className="flex items-center">
                        <Image src='/uploads/images/category-images/daily-wear.jpg' alt='' width={50} height={50} />
                        <span>Daily Wear</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/casual-outings.jpg' alt='' width={50} height={50} />
                        <span>Casual Outings</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/festive.jpg' alt='' width={50} height={50} />
                        <span>Festive</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/anniversary.jpg' alt='' width={50} height={50} />
                        <span>Anniversary</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/wedding.jpg' alt='' width={50} height={50} />
                        <span>Wedding</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Price</h2>
                  <ul className="px-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>Under 10K</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>10K - 20K</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>20K - 30K</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>30K - 60K</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>60K - 90K</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>90K - 1.5L</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>Above 1.5L</Link></li>
                  </ul>
                </div>

              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger text-base  hover:font-semibold  border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-transparent font-andika'>Earrings</NavigationMenuTrigger>
            <NavigationMenuContent className='w-full'>
              <div className="section-one grid grid-cols-12 gap-5">
                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Style</h2>
                  <ul className="px-5 text-accent font-andika text-base">

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/engagement-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/all-earrings.jpg' alt='' width={50} height={50} />
                        <span>All Earrings</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/solitaire-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-drop-dangler.jpg' alt='' width={50} height={50} />
                        <span>Drop n Dangler</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/casual-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-solitaire.jpg' alt='' width={50} height={50} />
                        <span>Solitaire</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/mens-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-sui-dhaga.jpg' alt='' width={50} height={50} />
                        <span>Sui Dhaga</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/navratna-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-huggie.jpg' alt='' width={50} height={50} />
                        <span>Huggie</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/mangalsutra-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-hoop.jpg' alt='' width={50} height={50} />
                        <span className="whitespace-nowrap">Hoop</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/couple-bands' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-jhomka.jpg' alt='' width={50} height={50} />
                        <span>Jhomkas</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/couple-bands' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-tops.jpg' alt='' width={50} height={50} />
                        <span>Tops</span>
                      </Link>
                    </li>

                  </ul>
                </div>
                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Metal</h2>
                  <ul className="px-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-platinum.jpg' alt='' width={50} height={50} />
                        <span>Platinum</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-yg.jpg' alt='' width={50} height={50} />
                        <span>Yellow Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-rg.jpg' alt='' width={50} height={50} />
                        <span>Rose Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/silver' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-silver.jpg' alt='' width={50} height={50} />
                        <span>Silver</span>
                      </Link>
                    </li>

                  </ul>

                </div>

                <div className="col-span-4">
                  <div className="category-wrapper py-5 flex justify-center">
                    <Image src='/uploads/images/all/earrings.jpg' alt="Earrings" width={200} height={200} />
                  </div>
                </div>

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Occasion</h2>
                  <ul className="px-5 text-accent font-andika text-base">

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/daily-wear' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-silver.jpg' alt='' width={50} height={50} />
                        <span>Casual Wear</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/casual-outings.jpg' alt='' width={50} height={50} />
                        <span>Modern</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/festive.jpg' alt='' width={50} height={50} />
                        <span>Traditional</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-wedding-occasion.jpg' alt='' width={50} height={50} />
                        <span>Wedding</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-work-wear.jpg' alt='' width={50} height={50} />
                        <span>Work Wear</span>
                      </Link>
                    </li>
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
