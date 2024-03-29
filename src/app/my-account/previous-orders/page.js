export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import Orderhistory from "../_components/order-history";
export default function Previousorders() {
  return (
    <div>
      <Orderhistory/>
    </div>
  )
}