'use client'
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
export default function Cartcount() {
  return (
    <div className="cart-count">
      <div className="wrapper">
        <Link href='/cart'>
          <ShoppingBag />
        </Link>
      </div>
    </div>
  )
}