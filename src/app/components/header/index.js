import Cartcount from "./cart-count";
import Megamenu from "./mega-menu";
import Wishlistcount from "./wishlist-count";
import { Mobilemenu } from "./mobile-menu";
import Useraccount from "./user-account";
import Link from "next/link";
import './style.css'

export default function Header() {
  return (
    <div className="app-header ">
      <div className="container">
        <div className="header-wrapper pt-3">
          <section>
            <div className="top-bar bg-transparent grid grid-cols-3  justify-between items-center">
              <div className="col-span-1">
                <div className='mobile-menu '>
                  <Mobilemenu />
                </div>
              </div>
              <div className=" col-span-1">
                <Link href='/'>
                  <h1 className="font-crimson sm:text-4xl text-center text-2xl sm:text-center text-primary">SS Jewels</h1>
                </Link>
              </div>
              <div className="col-span-1">
                <div className=" user-actions flex justify-end items-center">
                  <div className='text-primary p-1'><Wishlistcount /></div>
                  <div className='p-1 text-primary'><Cartcount /></div>
                  <div className='p-1 text-primary'><Useraccount /></div>
                </div>
              </div>
            </div>
          </section>
          <section className="lg:block md:hidden hidden">
            <Megamenu />
          </section>
        </div>
      </div>
    </div>
  )
}