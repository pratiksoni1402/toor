import Cartproduct from "./_component/cart-product";
import Bill from "./_component/bill";
export default function Cart() {
  return (
    <div className="cart-page ">
      <div className="container">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12">
            <div className="page-heading border-b">
              <h1 className="font-crimson text-3xl text-center text-accent">Your Cart</h1>
            </div>
          </div>
          <div className="col-span-9">
            <div className="component-wrapper">
              <Cartproduct />
            </div>
          </div>
          <div className="col-span-3">
            <div className="component-wrapper sticky top-5">
              <Bill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}