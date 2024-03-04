'use client'
import Link from 'next/link';
import { CircleUserRound } from 'lucide-react';
export default function Useraccount() {
  return (
    <div className="user-account">
      <div className='wrapper'>
        <Link href='/'>
          <CircleUserRound />
        </Link>
      </div>
    </div>
  )
}