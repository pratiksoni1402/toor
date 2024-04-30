import Link from "next/link"
import LogoutUser from "../logout"
import './style.css'
export default function Mobilemenu() {
  return (
    <div className="mobile-menu-component">
      <div className="menu-wrapper">
        <div className="menu ">
          <ul>
            <li><Link href='/my-account'>Edit Profile</Link></li>
            <li><Link href='/my-account/previous-orders'>Order History</Link></li>
            <li><Link href='/my-account/update-password'>Update Password</Link></li>
            <li><LogoutUser /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}