'use client'
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

export default function Cartcount() {
  const [isEmptyCount, setEmptyCount] = useState();
  const { data: count } = useQuery({
    queryKey: ['cartCount'],
    queryFn: () =>
      axios.get('/components/header/cart-count/api/get-cart-count')
        .then((response) => {
          setEmptyCount(response.data.getCartCount) 
          return response.data.getCartCount 
        })
        .catch((error) => console.log("Error while fetching count", error))
  })

  return (
    <div className="cart-count">
      <div className="wrapper">
        {
          isEmptyCount == '' ? (
            <Link href='/cart'>
              <ShoppingBag />
            </Link>
          ) : (
            <Link href='/cart'>
              <div className='relative'>
                <ShoppingBag fill='#754b2f' />
                <div className='absolute top-[1px] text-white left-[8px] text-sm'>{count}</div>
              </div>
            </Link>
          )
        }

      </div>
    </div>
  )
}