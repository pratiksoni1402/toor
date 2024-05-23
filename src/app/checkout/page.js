export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import Userdetails from "./_components/user-details";
import Orderbag from "./_components/order-bag";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
export default async function Checkout() {
  const session = await getSession();
  if (!session.user) {
    redirect('/auth')
  }
  return (
    <div className="checkout-page bg-[#fafafa]">
      <div className="container">
        <div className="grid grid-cols-12 md:gap-5 sm:gap-0 gap-0">
          <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 lg:order-1 md:order-2 sm:order-2 order-2">
            <div className="component-wrapper border border-secondary bg-white my-5">
              <Userdetails />
            </div>
          </div>
          <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 lg:order-2 md:order-1 sm:order-1 order-1">
            <div className="component-wrapper sticky top-1 my-5">
              <Orderbag />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}