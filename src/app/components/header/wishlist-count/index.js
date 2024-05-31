'use client'
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
export default function Wishlistcount() {
  const [wishlistCount, setWishlistCount] = useState();
  const { data: count } = useQuery({
    queryKey: ['wishlistCount'],
    queryFn: () =>
      axios.get('/components/header/wishlist-count/api/get-wishlist-count')
        .then((response) => {
          setWishlistCount(response.data.getWishlistCount)
          return response.data.getWishlistCount
        })
        .catch((error) => console.log("Error while fetching count", error))
  })
  return (
    <div className="wishlist-count">
      <div className="wrapper md:mr-[-10px] sm:mr-2 mr-[6px]">

        <Link href='/wishlist' className=' flex flex-col justify-center items-center'>
          <Heart />
          <span className='md:block sm:hidden hidden text-sm font-roboto hover:underline hover:font-semibold make-bold-props text-center' title={`Wishlist ({count})`}>Wishlist ({count})</span>
        </Link>

      </div>
    </div>
  )
}