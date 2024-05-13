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
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useState } from "react";
import { CATEGORY_MEDIA } from "@/lib/constants/images";
import './style.css';
export default function Megamenu() {
  const [ringhovered, setRingHovered] = useState();
  const [earringHovered, setEarringHovered] = useState();
  const [necklaceHovered, setNecklaceHovered] = useState();
  const [braceletHovered, setBraceletHovered] = useState();
  return (
    <div className="mega-menu">
      <NavigationMenu>
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger' title='Rings'>
              <span title="Rings" className="make-bold-props">Rings</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className='menu-content'>
              <div className=" grid grid-cols-12 gap-5">
                <div className="col-span-2">
                  <h2 className="inner-heading">Shop By Style</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-engagement.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/products?style=engagement-rings' className="flex items-center">
                        <span>Engagement</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-couple.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/products?style=couple-rings' className="flex items-center">
                        <span>Couple Rings</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-casual.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/products?style=casual-rings' className="flex items-center">
                        <span>Casual</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-navratna.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/products?style=navratna-rings' className="flex items-center">
                        <span>Navratna</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-mangalsutra.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/products?style=mangalsutra-rings' className="flex items-center">
                        <span className="whitespace-nowrap">Mangalsutra Rings</span>
                      </Link>
                    </li>

                  </ul>
                </div>

                <div className="col-span-2">
                  <h2 className="inner-heading">Shop By Metal</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-platinum.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/platinum' className="flex items-center">
                        <span>Platinum</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-yellow-gold.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/yellow-gold' className="flex items-center">
                        <span>Yellow Gold</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-rose-gold.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/rose-gold' className="flex items-center">
                        <span>Rose Gold</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-silver.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
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

              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className=' menu-trigger'>
              <span title="Earrings" className="make-bold-props ">Earrings</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className='w-full menu-content'>
              <div className="section-one grid grid-cols-12 gap-5">

                <div className="col-span-2">
                  <h2 className="inner-heading">Shop By Style</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list">
                      <Link href='/engagement-rings' className="flex items-center" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/all-earring.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                        <span>All Earrings</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-drop.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/solitaire-rings' className="flex items-center">
                        <span>Drop n Dangler</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-solitaire.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/casual-rings' className="flex items-center">
                        <span>Solitaire</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-sui-dhaga.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/mens-rings' className="flex items-center">
                        <span>Sui Dhaga</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-huggie.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/navratna-rings' className="flex items-center">
                        <span>Huggie</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-hoop.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/mangalsutra-rings' className="flex items-center">
                        <span className="whitespace-nowrap">Hoop</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-jhomka.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/couple-bands' className="flex items-center">
                        <span>Jhomkas</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-tops.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/couple-bands' className="flex items-center">
                        <span>Tops</span>
                      </Link>
                    </li>

                  </ul>
                </div>

                <div className="col-span-2">
                  <h2 className="inner-heading">Shop By Metal</h2>
                  <ul className="product-list-wrapper">
                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-platinum.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/' className="flex items-center">
                        <span>Platinum</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-yellow-gold.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/' className="flex items-center">
                        <span>Yellow Gold</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-rose-gold.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/' className="flex items-center">
                        <span>Rose Gold</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-silver.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
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

              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger'>
              <span title="Necklaces" className="make-bold-props ">Necklaces</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className=' menu-content'>
              <div className="section-two grid grid-cols-12 gap-5">

                <div className="col-span-2">
                  <h2 className="inner-heading">Shop By Style</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-collar.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Collar</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-layered.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Layered</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-locket.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Locket</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-delicate.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Delicate</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2">
                  <h2 className="inner-heading">Shop By Metal</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list pt-3" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-platinum.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Platinum</span>
                      </Link>
                    </li>

                    <li className="product-list pt-3" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-yellow-gold.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Yellow Gold</span>
                      </Link>
                    </li>

                    <li className="product-list pt-3" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-rose-gold.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Rose Gold</span>
                      </Link>
                    </li>

                    <li className="product-list pt-3" onMouseEnter={() => setNecklaceHovered(`${CATEGORY_MEDIA}/necklace-silver.jpg`)} onMouseLeave={() => setNecklaceHovered('/uploads/images/mega-menu/necklace.jpg')}>
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

              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger'>
              <span title="Bracelets" className="make-bold-props ">Bracelets</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className='menu-content'>
              <div className="section-two grid grid-cols-12 gap-5">

                <div className="col-span-2">
                  <h2 className="inner-heading">Shop By Style</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-chain.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Chain</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/cuff-bracelet.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Cuff</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-gemstone.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Gemstone</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-cable.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Cable</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-hinged.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Hinged</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-open-bangle.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Open Bangle</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-bangle.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Bangle</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2">
                  <h2 className="inner-heading">Shop By Metal</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list pt-3" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-platinum.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Platinum</span>
                      </Link>
                    </li>

                    <li className="product-list pt-3" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-yellow-gold.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Yellow Gold</span>
                      </Link>
                    </li>

                    <li className="product-list pt-3" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-rose-gold.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Rose Gold</span>
                      </Link>
                    </li>

                    <li className="product-list pt-3" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-silver.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
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

              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger'>
              <span title="Bracelets" className="make-bold-props ">Pure Metals</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className='menu-content'>
              <div className="section-two grid grid-cols-12 gap-5">

                <div className="col-span-2">
                  <h2 className="inner-heading">Gold Bars</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/1gm-fine-gold-bar.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/main-gold-bar.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>1gm Fine Gold</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/2gm-fine-gold-bar.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/main-gold-bar.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>2gm Fine Gold</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/5gm-fine-gold-bar.png`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/main-gold-bar.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>5gm Fine Gold</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/10gm-fine-gold-bar.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/main-gold-bar.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>10gm Fine Gold</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/20gm-fine-gold-bar.png`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/main-gold-bar.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>20gm Fine Gold</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/50gm-fine-gold-bar.png`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/main-gold-bar.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>50gm Fine Gold</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/100gm-fine-gold-bar.png`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/main-gold-bar.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>100gm Fine Gold</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2">
                  <h2 className="inner-heading">Silver Bars</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list pt-3" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-platinum.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>500gm Fine Silver</span>
                      </Link>
                    </li>

                    <li className="product-list pt-3" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-yellow-gold.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>1kg Fine Silver</span>
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
                  <h2 className="inner-heading">Gold Coins</h2>
                  <ul className="product-list-wrapper">
                    <li className="product-list pt-3"><Link href='/'>0.5gm Fine Gold Coin</Link></li>
                    <li className="product-list pt-3"><Link href='/'>1gm Fine Gold Coin</Link></li>
                    <li className="product-list pt-3"><Link href='/'>2gm Fine Gold Coin</Link></li>
                    <li className="product-list pt-3"><Link href='/'>5gm Fine Gold Coin</Link></li>
                    <li className="product-list pt-3"><Link href='/'>10gm Fine Gold Coin</Link></li>
                  </ul>
                </div>

                <div className="col-span-2">
                  <h2 className="inner-heading">Silver Coins</h2>
                  <ul className="product-list-wrapper">
                    <li className="product-list pt-3"><Link href='/'>5gm Fine Silver Coin</Link></li>
                    <li className="product-list pt-3"><Link href='/'>10gm Fine Silver Coin</Link></li>
                    <li className="product-list pt-3"><Link href='/'>20gm Fine Silver Coin</Link></li>
                    <li className="product-list pt-3"><Link href='/'>50gm Fine Silver Coin</Link></li>
                    <li className="product-list pt-3"><Link href='/'>10gm Fine Silver Coin</Link></li>
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

