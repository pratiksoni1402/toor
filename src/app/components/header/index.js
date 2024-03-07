import Cartcount from "./cart-count";
import Megamenu from "./mega-menu";
import Wishlistcount from "./wishlist-count";
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
                <h1 className="font-tangerine text-5xl text-center text-primary">SS Jewels</h1>
              </div>
              <div className="user-actions flex space-x-5">
                <div className=' hover:text-primary text-accent'><Wishlistcount /></div>
                <div className=' hover:text-primary text-accent'><Cartcount /></div>
                <div className=' hover:text-primary text-accent'><Useraccount /></div>
              </div>
            </div>
          </section>
          <section className="mega-menu">
            <Megamenu />
          </section>
        </div>
      </div>
    </div>
  )
}