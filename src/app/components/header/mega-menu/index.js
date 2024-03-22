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
import { useState } from "react";
import { CATEGORY_MEDIA } from "@/lib/constants/images";
export default function Megamenu() {
  const [ringhovered, setRingHovered] = useState();
  const [earringHovered, setEarringHovered] = useState();
  const [necklaceHovered, setNecklaceHovered] = useState();
  const [braceletHovered, setBraceletHovered] = useState();
  return (
    <div className="mega-menu flex justify-center border-b border-background">
      <NavigationMenu>
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuTrigger className=' menu-trigger text-base  hover:font-semibold  border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-transparent font-roboto text-accent' title='Rings'>
              <span title="Rings" className="make-bold-props ">Rings</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 text-base gap-5">

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-roboto text-base">Shop By Style</h2>
                  <ul className="px-5 text-accent font-roboto text-base">

                    <li className=" hover:font-semibold hover:text-primary py-1" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-engagement.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/engagement-rings' className="flex items-center">
                        <span>Engagement</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-solitaire.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/solitaire-rings' className="flex items-center">
                        <span>Solitaire</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-casual.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/casual-rings' className="flex items-center">
                        <span>Casual</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-men.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/mens-rings' className="flex items-center">
                        <span>Mens Rings</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-navratna.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/navratna-rings' className="flex items-center">
                        <span>Navratna</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-mangalsutra.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/mangalsutra-rings' className="flex items-center">
                        <span className="whitespace-nowrap">Mangalsutra Rings</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-couple.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/couple-bands' className="flex items-center">
                        <span>Couple Rings</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-roboto text-base">Shop By Metal</h2>
                  <ul className="px-5 text-accent font-roboto text-base">

                    <li className=" hover:font-semibold hover:text-primary py-1" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-platinum.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/platinum' className="flex items-center">
                        <span>Platinum</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-yellow-gold.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/yellow-gold' className="flex items-center">
                        <span>Yellow Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-rose-gold.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/rose-gold' className="flex items-center">
                        <span>Rose Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary py-1" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-silver.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>Silver</span>
                      </Link>
                    </li>

                  </ul>
                </div>

                <div className="col-span-4">
                  {
                    ringhovered ? (

                      <div className="category-image-wrapper py-5 h-full flex items-center justify-center" onL>
                        <div className="image flex justify-center items-center">
                          <Image src={ringhovered} alt="Rings" width={400} height={400} />
                        </div>
                      </div>
                    ) : (
                      <div className="category-image-wrapper py-5 h-full flex items-center justify-center" onL>
                        <div className="image flex justify-center items-center">
                          <Image src='/uploads/images/category-images/silver.png' alt="Earrings" width={400} height={400} />
                        </div>
                      </div>
                    )
                  }
                </div>
                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-roboto text-base">Shop By Price</h2>
                  <ul className="px-5 text-accent font-roboto text-base">
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
            <NavigationMenuTrigger className=' menu-trigger text-base  hover:font-semibold  border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-transparent font-roboto text-accent'>
              <span title="Earrings" className="make-bold-props ">Earrings</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className='w-full'>
              <div className="section-one grid grid-cols-12 gap-5">

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-roboto text-base">Shop By Style</h2>
                  <ul className="px-5 text-accent font-roboto text-base">

                    <li className=" hover:font-semibold hover:text-primary">
                      <Link href='/engagement-rings' className="flex items-center" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/all-earring.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                        <span>All Earrings</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-drop.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/solitaire-rings' className="flex items-center">
                        <span>Drop n Dangler</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-solitaire.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/casual-rings' className="flex items-center">
                        <span>Solitaire</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-sui-dhaga.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/mens-rings' className="flex items-center">
                        <span>Sui Dhaga</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-huggie.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/navratna-rings' className="flex items-center">
                        <span>Huggie</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-hoop.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/mangalsutra-rings' className="flex items-center">
                        <span className="whitespace-nowrap">Hoop</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-jhomka.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/couple-bands' className="flex items-center">
                        <span>Jhomkas</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-tops.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/couple-bands' className="flex items-center">
                        <span>Tops</span>
                      </Link>
                    </li>

                  </ul>
                </div>

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-roboto text-base">Shop By Metal</h2>
                  <ul className="px-5 text-accent font-roboto text-base">
                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-platinum.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/' className="flex items-center">
                        <span>Platinum</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-yellow-gold.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/' className="flex items-center">
                        <span>Yellow Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-rose-gold.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/' className="flex items-center">
                        <span>Rose Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-silver.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/silver' className="flex items-center">
                        <span>Silver</span>
                      </Link>
                    </li>

                  </ul>
                </div>

                <div className="col-span-4">
                  {
                    earringHovered ? (
                      <div className="category-image-wrapper py-5 h-full flex items-center justify-center" onL>
                        <div className="image flex justify-center items-center">
                          <Image src={earringHovered} alt="Earrings" width={400} height={400} />
                        </div>
                      </div>
                    ) : (
                      <div className="category-image-wrapper py-5 h-full flex items-center justify-center" onL>
                        <div className="image flex justify-center items-center">
                          <Image src='/uploads/images/mega-menu/earring.jpg' alt="Earrings" width={400} height={400} />
                        </div>
                      </div>
                    )
                  }
                </div>

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-roboto text-base">Shop By Price</h2>
                  <ul className="px-5 text-accent font-roboto text-base">
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
            <NavigationMenuTrigger className='menu-trigger text-base  hover:font-semibold  border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-transparent font-roboto text-accent'>
              <span title="Necklaces" className="make-bold-props ">Necklaces</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 gap-5">

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-roboto text-base">Shop By Style</h2>
                  <ul className="px-5 text-accent font-roboto text-base">

                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-collar.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Collar</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-layered.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Layered</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-locket.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Locket</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-delicate.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Delicate</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-roboto text-base">Shop By Metal</h2>
                  <ul className="px-5 text-accent font-roboto text-base">

                    <li className=" hover:font-semibold hover:text-primary pt-3" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-platinum.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Platinum</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary pt-3" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-yellow-gold.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Yellow Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary pt-3" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-rose-gold.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Rose Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary pt-3" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-silver.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Silver</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-4">
                  {
                    necklaceHovered ? (

                      <div className="category-wrapper py-5 flex justify-center h-full items-center">
                        <div className="image">
                          <Image src={necklaceHovered} alt="Necklace" width={400} height={400} />
                        </div>
                      </div>
                    ) : (
                      <div className="category-wrapper py-5 flex justify-center h-full items-center">
                        <div className="image">
                          <Image src='/uploads/images/mega-menu/necklace.jpg' alt="Necklace" width={400} height={400} />
                        </div>
                      </div>
                    )
                  }
                </div>

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-roboto text-base">Shop By Price</h2>
                  <ul className="px-5 text-accent font-roboto text-base">
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
            <NavigationMenuTrigger className='menu-trigger text-base hover:font-semibold border-b-2 border-transparent hover:bg-white rounded-none hover:border-b-2 hover:border-primary bg-transparent font-roboto text-accent '>
              <span title="Bracelets" className="make-bold-props ">Bracelets</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="section-two grid grid-cols-12 gap-5">

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-roboto text-base">Shop By Style</h2>
                  <ul className="px-5 text-accent font-roboto text-base">

                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-chain.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Chain</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/cuff-bracelet.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Cuff</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-gemstone.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Gemstone</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-cable.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Cable</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-hinged.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Hinged</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-open-bangle.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Open Bangle</span>
                      </Link>
                    </li>
                    <li className=" hover:font-semibold hover:text-primary" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-bangle.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Bangle</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-roboto text-base">Shop By Metal</h2>
                  <ul className="px-5 text-accent font-roboto text-base">

                    <li className=" hover:font-semibold hover:text-primary pt-3" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-platinum.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Platinum</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary pt-3" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-yellow-gold.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Yellow Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary pt-3" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-rose-gold.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Rose Gold</span>
                      </Link>
                    </li>

                    <li className=" hover:font-semibold hover:text-primary pt-3" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-silver.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Silver</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-4">
                  {
                    braceletHovered ? (

                      <div className="category-wrapper py-5 flex justify-center h-full items-center">
                        <div className="image">
                          <Image src={braceletHovered} alt="Earrings" width={400} height={400} />
                        </div>
                      </div>
                    ) : (
                      <div className="category-wrapper py-5 flex justify-center h-full items-center">
                        <div className="image">
                          <Image src='/uploads/images/mega-menu/bracelet.jpg' alt="Bracelets" width={400} height={400} />
                        </div>
                      </div>
                    )
                  }
                </div>

                <div className="col-span-2">
                  <h2 className="pt-5 px-5 text-accent font-semibold font-roboto text-base">Shop By Price</h2>
                  <ul className="px-5 text-accent font-roboto text-base">
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

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef(function ({ className, title, children, ...props }, ref) {
  return (
    React.createElement('li', null,
      React.createElement(NavigationMenuLink, { asChild: true },
        React.createElement('a', Object.assign({
          ref: ref,
          className: cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )
        }, props),
          React.createElement('div', { className: "text-sm font-medium leading-none" }, title),
          React.createElement('p', { className: "line-clamp-2 text-sm leading-snug text-muted-foreground" }, children)
        )
      )
    )
  );
});
ListItem.displayName = "ListItem";

