import Link from "next/link"
import './style.css'
export default function Sidemenu() {
  return (
    <div className="side-menu-component">
      <div className="menu-wrapper">
        <div className="menu pt-5">
          <ul>
            <li><Link href='/my-account'>Edit Profile</Link></li>
            <li><Link href='/my-account/previous-orders'>Order History</Link></li>
            <li><Link href='/my-account/your-wishlist'>My Wishlist</Link></li>
            <li><Link href='/my-account/your-cart'>Shopping Bag</Link></li>
            <li><Link href='/my-account/change-password'>Change Password</Link></li>
            {/* <li><Link href='/'>Manage Addresses</Link></li> */}
            <li><Link href='/'>Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}