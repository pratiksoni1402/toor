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
      <div className="wrapper">
        {
          wishlistCount == '' ? (
            <Link href='/wishlist'>
              <Heart />
            </Link>
          ) : (
            <Link href='/wishlist'>
              <div className='relative'>
                <Heart fill='#754b2f' size={26}/>
                <div className='absolute top-[1px] text-white left-[9px] text-sm'>{count}</div>
              </div>
            </Link>
          )
        }

      </div>
    </div>
  )
}