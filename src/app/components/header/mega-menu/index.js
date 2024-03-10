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
            <NavigationMenuTrigger className='menu-trigger hover:font-semibold text-base border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-transparent font-andika' title='Rings'>
              <span title="Rings" className="make-bold-props ">Rings</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 text-base gap-5">

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Style</h2>
                  <ul className="px-5 text-accent font-andika text-base">

                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/engagement-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/engagement.png' alt='' width={50} height={50} />
                        <span>Engagement</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/solitaire-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/solitaire.png' alt='' width={50} height={50} />
                        <span>Solitaire</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/casual-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/casual.png' alt='' width={50} height={50} />
                        <span>Casual</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/mens-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/mens.png' alt='' width={50} height={50} />
                        <span>Mens Rings</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/navratna-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/navratna.png' alt='' width={50} height={50} />
                        <span>Navratna</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/mangalsutra-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/mangalsutra.png' alt='' width={50} height={50} />
                        <span className="whitespace-nowrap">Mangalsutra Rings</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/couple-bands' className="flex items-center">
                        <Image src='/uploads/images/category-images/couple.png' alt='' width={50} height={50} />
                        <span>Couple Bands</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Metal</h2>
                  <ul className="px-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/platinum.png' alt='' width={50} height={50} />
                        <span>Platinum</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/yellow-gold.png' alt='' width={50} height={50} />
                        <span>Yellow Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/rose-gold.png' alt='' width={50} height={50} />
                        <span>Rose Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/silver' className="flex items-center">
                        <Image src='/uploads/images/category-images/silver.png' alt='' width={50} height={50} />
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

                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/daily-wear' className="flex items-center">
                        <Image src='/uploads/images/category-images/daily-wear.png' alt='' width={50} height={50} />
                        <span>Daily Wear</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/casual-outings.png' alt='' width={50} height={50} />
                        <span>Casual Outings</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/festive.png' alt='' width={50} height={50} />
                        <span>Festive</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/anniversary.png' alt='' width={50} height={50} />
                        <span>Anniversary</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/wedding.png' alt='' width={50} height={50} />
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
            <NavigationMenuTrigger className=' menu-trigger text-base  hover:font-semibold  border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-transparent font-andika'>
              <span title="Earrings" className="make-bold-props ">Earrings</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className='w-full'>
              <div className="section-one grid grid-cols-12 gap-5">

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Style</h2>
                  <ul className="px-5 text-accent font-andika text-base">

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/engagement-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/all-earrings.png' alt='' width={50} height={50} />
                        <span>All Earrings</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/solitaire-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-drop-dangler.png' alt='' width={50} height={50} />
                        <span>Drop n Dangler</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/casual-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-solitaire.png' alt='' width={50} height={50} />
                        <span>Solitaire</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/mens-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-sui-dhaga.png' alt='' width={50} height={50} />
                        <span>Sui Dhaga</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/navratna-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-huggie.png' alt='' width={50} height={50} />
                        <span>Huggie</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/mangalsutra-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-hoop.png' alt='' width={50} height={50} />
                        <span className="whitespace-nowrap">Hoop</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/couple-bands' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-jhomka.png' alt='' width={50} height={50} />
                        <span>Jhomkas</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/couple-bands' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-tops.png' alt='' width={50} height={50} />
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
                        <Image src='/uploads/images/category-images/earring-platinum.png' alt='' width={50} height={50} />
                        <span>Platinum</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-yg.png' alt='' width={50} height={50} />
                        <span>Yellow Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-rg.png' alt='' width={50} height={50} />
                        <span>Rose Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/silver' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-silver.png' alt='' width={50} height={50} />
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
                        <Image src='/uploads/images/category-images/earring-silver.png' alt='' width={50} height={50} />
                        <span>Casual Wear</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/casual-outings.png' alt='' width={50} height={50} />
                        <span>Modern</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/festive.png' alt='' width={50} height={50} />
                        <span>Traditional</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-wedding-occasion.png' alt='' width={50} height={50} />
                        <span>Wedding</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/earring-work-wear.png' alt='' width={50} height={50} />
                        <span>Work Wear</span>
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
            <NavigationMenuTrigger className='menu-trigger text-base  hover:font-semibold  border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-transparent font-andika'>
              <span title="Necklaces" className="make-bold-props ">Necklaces</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 gap-5">
                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Style</h2>
                  <ul className="px-5 text-accent font-andika text-base">

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/engagement-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/necklace-collar.png' alt='' width={50} height={50} />
                        <span>Collar</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/solitaire-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/necklace-layered.png' alt='' width={50} height={50} />
                        <span>Layered</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/casual-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/necklace-locket.png' alt='' width={50} height={50} />
                        <span>Locket</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/mens-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/necklace-delicate.png' alt='' width={50} height={50} />
                        <span>Delicate</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/navratna-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/necklace-rani-haar.png' alt='' width={50} height={50} />
                        <span>Rani Haar</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/mangalsutra-rings' className="flex items-center">
                        <Image src='/uploads/images/category-images/necklace-polki.png' alt='' width={50} height={50} />
                        <span className="whitespace-nowrap">Polki</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/couple-bands' className="flex items-center">
                        <Image src='/uploads/images/category-images/necklace-meenakari.png' alt='' width={50} height={50} />
                        <span>Meenakari</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Metal</h2>
                  <ul className="px-5 text-accent font-andika text-base">

                    <li className=" hover:font-semibold hover:text-primary pt-3">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/necklace-platinum.png' alt='' width={50} height={50} />
                        <span>Platinum</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary pt-3">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/necklace-yellow-gold.png' alt='' width={50} height={50} />
                        <span>Yellow Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary pt-3">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/necklace-rose-gold.png' alt='' width={50} height={50} />
                        <span>Rose Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary pt-3">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/necklace-silver.png' alt='' width={50} height={50} />
                        <span>Silver</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-4">
                  <div className="category-wrapper py-5 flex justify-center">
                    <Image src='/uploads/images/categories/necklace.jpg' alt="Earrings" width={200} height={200} />
                  </div>
                </div>
                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Price</h2>
                  <ul className="px-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>Under 50K</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>50K - 60K</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>60K - 70K</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>70K - 90K</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>90K - 1.5L</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>1.5L - 2.0L</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>Above 2.0L</Link></li>
                  </ul>
                </div>

              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger text-base hover:font-semibold border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-transparent font-andika'>
              <span title="Bracelets" className="make-bold-props ">Bracelets</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 gap-5">
                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Style</h2>
                  <ul className="px-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/bracelet-chain.png' alt='' width={50} height={50} />
                        <span>Chain</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center" >
                        <Image src='/uploads/images/category-images/bracelet-cuff.png' alt='' width={50} height={50} />
                        <span>Cuff</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center" >
                        <Image src='/uploads/images/category-images/bracelet-gemstone.png' alt='' width={50} height={50} />
                        <span>Gemstone</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center" >
                        <Image src='/uploads/images/category-images/bracelet-cable.png' alt='' width={50} height={50} />
                        <span>Cable</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center" >
                        <Image src='/uploads/images/category-images/bracelet-hinged.png' alt='' width={50} height={50} />
                        <span>Hinged</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center" >
                        <Image src='/uploads/images/category-images/bracelet-open-bangle.png' alt='' width={50} height={50} />
                        <span>Open Bangle</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className="flex items-center" >
                        <Image src='/uploads/images/category-images/bracelet-bangle.png' alt='' width={50} height={50} />
                        <span>Bangle</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-2">
                <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Metal</h2>
                  <ul className="px-5 text-accent font-andika text-base">

                    <li className=" hover:font-semibold hover:text-primary pt-3">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/bracelet-platinum.png' alt='' width={50} height={50} />
                        <span>Platinum</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary pt-3">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/bracelet-yellow-gold.png' alt='' width={50} height={50} />
                        <span>Yellow Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary pt-3">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/bracelet-rose-gold.png' alt='' width={50} height={50} />
                        <span>Rose Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary pt-3">
                      <Link href='/' className="flex items-center">
                        <Image src='/uploads/images/category-images/bracelet-silver.png' alt='' width={50} height={50} />
                        <span>Silver</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-4">
                  <div className="category-wrapper py-5 flex justify-center">
                    <Image src='/uploads/images/categories/bracelets.jpg' alt="Earrings" width={200} height={200} />
                  </div>
                </div>
                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-andika text-base">Shop By Price</h2>
                  <ul className="px-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>Under 50K</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>50K - 60K</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>60K - 70K</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>70K - 90K</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>90K - 1.5L</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>1.5L - 2.0L</Link></li>
                    <li className=" hover:font-semibold hover:text-primary pt-3"><Link href='/'>Above 2.0L</Link></li>
                  </ul>
                </div>
                
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger text-base hover:font-semibold border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-transparent font-andika'>
              <span title="Cultural Heritage" className="make-bold-props ">Cultural Heritage</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 gap-5">
                <div className="col-span-2">
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/' className=" flex items-center">
                        <Image src='/uploads/images/category-images/kanngan.png' alt='' width={50} height={50} />
                        <span className="px-1">Kangan</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/' className=" flex items-center">
                        <Image src='/uploads/images/category-images/bajubandh.png' alt='' width={50} height={50} />
                        <span className="px-1">Bajubandh</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/' className=" flex items-center">
                        <Image src='/uploads/images/category-images/kanthi.png' alt='' width={50} height={50} />
                        <span className="px-1">Kanthi</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/' className=" flex items-center">
                        <Image src='/uploads/images/category-images/meenakari.png' alt='' width={50} height={50} />
                        <span className="px-1">Meenakari</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/' className=" flex items-center">
                        <Image src='/uploads/images/category-images/jali.jpg' alt='' width={50} height={50} />
                        <span className="px-1">Jali</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/' className=" flex items-center">
                        <Image src='/uploads/images/category-images/jadau.png' alt='' width={50} height={50} />
                        <span className="px-1">Jadau</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary py-1">
                      <Link href='/' className=" flex items-center">
                        <Image src='/uploads/images/category-images/mango-mala.png' alt='' width={50} height={50} />
                        <span className="px-1">Mango Mala</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <ul className="p-5 text-accent font-andika text-base">
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className=" flex items-center">
                        <Image src='/uploads/images/category-images/maang-tika.png' alt='' width={50} height={50} />
                        <span>Maang Tika</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className=" flex items-center">
                        <Image src='/uploads/images/category-images/palakka-mala.png' alt='' width={50} height={50} />
                        <span>Palakka Mala</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className=" flex items-center">
                        <Image src='/uploads/images/category-images/nath.png' alt='' width={50} height={50} />
                        <span>Nath</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className=" flex items-center">
                        <Image src='/uploads/images/category-images/jodha-nath.png' alt='' width={50} height={50} />
                        <span>Jodha Nath</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/' className=" flex items-center">
                        <Image src='/uploads/images/category-images/anklets.png' alt='' width={50} height={50} />
                        <span>Anklets</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-4">
                  <div className="category-wrapper py-5 flex justify-center">
                    <Image src='/uploads/images/categories/cultural-heritage.png' alt="Earrings" width={200} height={200} />
                  </div>
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
