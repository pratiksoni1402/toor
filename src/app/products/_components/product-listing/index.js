'use client'
import React from "react";
import LazyImage from '../../../components/lazy-loading/lazy-image';
import { Heart } from 'lucide-react';
import { IndianRupee } from 'lucide-react';
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { PRODUCT_MEDIA } from "@/lib/constants/images";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FadeLoader } from "react-spinners";

export default function ProductListing() {
  const searchParams = useSearchParams()

  const { isPending, data: products, isError } = useQuery({
    queryKey: ['products', {
      'style': searchParams.get('style'),
      'gender': searchParams.get('gender'),
      'metal-type': searchParams.get('metal-type'),
      'metal-color': searchParams.get('metal-color'),
      'price': searchParams.get('price'),
      'weight': searchParams.get('weight')
    }],
    queryFn: ({ queryKey }) =>
      axios.post('/products/api/get-products', {
        filters: queryKey[1]
      })
        .then((response) => {
          return response.data.allProduct
        })
  })
  if (!products) {
    return (
        <div className='loading h-screen w-full flex justify-center items-center'><FadeLoader color="#754b2f" />
        </div>
    )
  }

  return (
    <div className="product-listing-component">
      <div className="listing">
        <section>
          <div className="listing my-10">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
              {
                products?.map((item) => (
                  <div className="col" key={item.id}>
                    <div className="product-wrapper">
                      <Link href='/' className="group transition duration-300 ease-in-out hover:outline-blue-500/50" >
                        <div className="product">
                          <div className="image relative sm:h-72 h-32">
                            <LazyImage src={`${PRODUCT_MEDIA}/${item.image}`} alt='image' width={288} height={288} className="hover:scale-110 hover:ease-in-out hover:transition-all sm:w-[288px] sm:h-[288px] h-[300px]" />
                            <span className="absolute right-2 top-4">
                              <Button className='bg-transparent border-0 text-primary' type='button'>
                                <Heart size={20} />
                              </Button>
                            </span>
                          </div>
                          <div className="detail">
                            <div className="name">
                              <span className="group-hover:text-primary group-hover:font-semibold text-accent leading-[21px] text-base font-roboto block text-center">{item?.name}</span>
                            </div>
                            <div className="price flex items-center justify-center">
                              <span className="group-hover:text-primary group-hover:font-semibold "><IndianRupee size={14} /></span>
                              <span className="group-hover:text-primary group-hover:font-semibold text-accent text-base font-roboto font-semibold block text-center">{item?.price}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}