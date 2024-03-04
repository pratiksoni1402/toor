import Megamenu from "./mega-menu"
export default function Header() {
  return (
    <div className="app-header">
      <div className="container">
        <div className="header-wrapper border-b">
          <section>
            <div className="top-bar bg-transparent">
              <div className="brand-name">
                <h1 className="font-italiano text-5xl text-center text-primary">SS Jewels</h1>
              </div>
              <div className="user-actions">
                
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