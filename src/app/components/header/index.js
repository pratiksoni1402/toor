import Cartcount from "./cart-count";
import Megamenu from "./mega-menu";
import Wishlistcount from "./wishlist-count";
import { Mobilemenu } from "./mobile-menu";
import Useraccount from "./user-account";
export default function Header() {
  return (
    <div className="app-header">
      <div className="container">
        <div className="header-wrapper border-b">
          <section>
            <div className="top-bar bg-transparent grid grid-cols-3 justify-between items-center">
              <div className="col"></div>
              <div className=" col brand-name">
                <h1 className="font-lora text-4xl text-center text-primary">SS Jewels</h1>
              </div>
              <div className="col user-actions flex justify-end">
                <div className=' hover:text-primary text-accent'><Wishlistcount /></div>
                <div className=' hover:text-primary text-accent mx-3'><Cartcount /></div>
                <div className=' hover:text-primary text-accent'><Useraccount /></div>
                <div className='mobile-menu lg:hidden md:block block hover:text-primary text-accent'><Mobilemenu /></div>
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