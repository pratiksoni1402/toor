export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import Cartproduct from "@/app/cart/_component/cart-product";
export default function Userwishlist() {
  return (
    <div>
      <Cartproduct />
    </div>
  )
}