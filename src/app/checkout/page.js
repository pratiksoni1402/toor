export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import Userdetails from "./_components/user-details";
import Orderbag from "./_components/order-bag";
export default function Checkout() {
  return (
    <div className="checkout-page">
      <div className="container">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-5">
            <div className="component-wrapper">
              <Userdetails />
            </div>
          </div>
          <div className="col-span-7">
            <div className="component-wrapper">
              <Orderbag />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}