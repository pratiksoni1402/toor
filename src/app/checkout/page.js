export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import Userdetails from "./_components/user-details";
import Orderbag from "./_components/order-bag";
export default function Checkout() {
  return (
    <div className="checkout-page">
      <div className="container">
        <div className="grid grid-cols-12 md:gap-5 sm:gap-0 gap-0">
          <div className="md:col-span-5 sm:col-span-12 col-span-12 md:order-1 sm:order-2 order-2">
            <div className="component-wrapper">
              <Userdetails />
            </div>
          </div>
          <div className="md:col-span-7 sm:col-span-12 col-span-12 md:order-2 sm:order-1 order-1">
            <div className="component-wrapper">
              <Orderbag />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}