'use client'
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
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

        <Link href='/cart' className=' flex flex-col justify-center items-center '>
          <ShoppingCart />
        <span className='text-sm font-roboto hover:font-semibold make-bold-props text-center hover:underline ' title={`Cart ({count})`}>Cart ({count})</span>
        </Link>

      </div>
    </div>
  )
}