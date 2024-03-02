import Megamenu from "./mega-menu"
export default function Header() {
  return (
    <div className="app-header">
      <div className="container">
      <section className="top-bar">
      <h1 className="font-italiano text-5xl text-center text-primary">SS Jewels</h1>
      </section>
      <section className="mega-menu">
        <Megamenu/>
      </section>
      </div>
    </div>
  )
}