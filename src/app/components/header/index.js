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
            <div className="top-bar bg-transparent flex justify-between items-center">
              <div></div>
              <div className="brand-name">
                <h1 className="font-lora text-5xl text-center text-primary">Brand Name</h1>
              </div>
              <div className="user-actions flex items-center">
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