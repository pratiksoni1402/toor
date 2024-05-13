export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import Cartproduct from "./_component/cart-product";
import Bill from "./_component/bill";
export default function Cart() {
  return (
    <div className="cart-page ">
      <div className="container">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12">
            <div className="page-heading ">
              <h1 className="font-crimson text-4xl text-start pt-3 text-accent">Your Cart</h1>
            </div>
          </div>
          <div className="lg:col-span-9 md:col-span-12 sm:col-span-12 col-span-12">
            <div className="component-wrapper">
              <Cartproduct />
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-12 sm:col-span-12 col-span-12">
            <div className="component-wrapper sticky top-5 pl-5">
              <Bill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}