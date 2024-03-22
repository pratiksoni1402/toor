import Cartcount from "./cart-count";
import Megamenu from "./mega-menu";
import Wishlistcount from "./wishlist-count";
import { Mobilemenu } from "./mobile-menu";
import Useraccount from "./user-account";
import Link from "next/link";
export default function Header() {
  return (
    <div className="app-header">
      <div className="container">
        <div className="header-wrapper py-3">
          <section>
            <div className="top-bar bg-transparent grid sm:grid-cols-3 grid-cols-2 justify-between items-center">
              <div className="col sm:block hidden"></div>
              <div className=" col">
                <Link href='/'>
                  <h1 className="font-lora sm:text-4xl text-2xl sm:text-center text-left text-primary">SS Jewels</h1>
                </Link>
              </div>
              <div className="col">
                <div className=" user-actions flex justify-end items-center">
                  <div className=' hover:text-primary text-accent'>
                      <Wishlistcount size={14} />
                  </div>
                  <div className=' hover:text-primary text-accent mx-3'><Cartcount size={14}/></div>
                  <div className=' hover:text-primary text-accent'><Useraccount size={14} /></div>
                  <div className='mobile-menu lg:hidden md:block block hover:text-primary text-accent'><Mobilemenu /></div>
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