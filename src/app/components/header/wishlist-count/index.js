'use client'
import Link from 'next/link';
import { Heart } from 'lucide-react';
export default function Wishlistcount() {
  return (
    <div className="wishlist-count">
      <div className="wrapper">
        <Link href='/'>
        <Heart />
        </Link>
      </div>
    </div>
  )
}