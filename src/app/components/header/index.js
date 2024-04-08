'use client'
import Cartcount from "./cart-count";
import Megamenu from "./mega-menu";
import Wishlistcount from "./wishlist-count";
import { Mobilemenu } from "./mobile-menu";
import Useraccount from "./user-account";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import './style.css'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}
export default function Header() {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="app-header bg-background">
      <div className="container">
        <div className="header-wrapper pt-3">
          <section>
            <div className="top-bar bg-transparent grid grid-cols-3  justify-between items-center">
              <div className="col-span-1">
                <div className='mobile-menu'>
                  <motion.nav
                    animate={isOpen ? "open" : "closed"}
                    variants={variants}
                  >
                    <Mobilemenu />
                    <Toggle onClick={() => setIsOpen(isOpen => !isOpen)} />
                  </motion.nav>
                </div>
              </div>
              <div className=" col-span-1">
                <Link href='/'>
                  <h1 className="font-crimson sm:text-4xl text-center text-2xl sm:text-center text-primary">SS Jewels</h1>
                </Link>
              </div>
              <div className="col-span-1">
                <div className=" user-actions flex justify-end items-center">
                  <div className='text-primary hover:border hover:border-primary rounded-full p-1 hover:bg-primary-foreground border border-transparent'>
                    <Wishlistcount size={14} />
                  </div>
                  <div className=' hover:border hover:border-primary rounded-full p-1 hover:bg-primary-foreground border border-transparent text-primary mx-3'><Cartcount size={14} /></div>
                  <div className=' hover:border hover:border-primary rounded-full p-1 hover:bg-primary-foreground border border-transparent text-primary'><Useraccount size={14} /></div>

                </div>
              </div>
            </div>
          </section>
          <section className="mega-menu lg:block md:hidden hidden">
            <Megamenu />
          </section>
        </div>
      </div>
    </div>
  )
}