import Sidemenu from "./_components/side-menu";
import './layout-style.css'
export default function Myaccount({ children }) {
  return (
    <div className="my-account-page">
      <div className="container">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3">
            <div className="component-wrapper side-menu">
              <Sidemenu />
            </div>
          </div>
          <div className="col-span-9">
            <div className="component-wrapper">
              <div className="child-wrapper"></div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}