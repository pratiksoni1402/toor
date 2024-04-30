import Sidemenu from "./_components/side-menu";
import Mobilemenu from "./_components/mobile-menu";
import './layout-style.css'
export default function Myaccount({ children }) {
  return (
    <div className="my-account-page">
      <div className="container">
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-3 md:col-span-3 sm:col-span-12 col-span-12">
            <div className="component-wrapper side-menu lg:block md:block sm:hidden hidden">
              <Sidemenu />
            </div>
          </div>

          <div className="col-span-12  lg:hidden md:hidden sm:block block sticky top-0">
            <div className="mobile-menu">
              <Mobilemenu/>
            </div>
          </div>
          <div className="lg:col-span-9 md:col-span-9 sm:col-span-12 col-span-12">
            <div className="component-wrapper">
              <div className="child-wrapper">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}