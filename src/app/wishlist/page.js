export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import Wishlistproduct from "./_components/wishlist-product"
export default function Wishlist(){
  return(
    <div className="wishlist-page">
      <div className="container">
        <div className="component-wrapper">
          <Wishlistproduct/>
        </div>
      </div>
    </div>
  )
}