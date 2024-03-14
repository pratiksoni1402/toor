'use client'
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import React from "react";
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import LazyImage from "../components/lazy-loading/lazy-image";
import { Heart } from 'lucide-react';
import { IndianRupee } from 'lucide-react';
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { PRODUCT_MEDIA } from "@/lib/constants/images";
export default function Listing({ params }) {
  const { isPending, data:products, isError } = useQuery({
    queryKey: ['product'],
    queryFn: () =>
      axios.get('/product-listing/api/get-products')
        .then((response) => {
          console.log("This is all products", response.data.allProduct)
          return response.data.allProduct
        })
  })
  
  return (
    <div className="product-listing-page">
      <div className="container">
        <div className="customization">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <section>
                <div className="customization">
                  <div className="gender">
                    <div className="">
                      <div className="column-heading font-lora text-accent text-lg py-2">
                        Gender
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="male" name="gender" value="male" />
                        <label htmlFor="male" className="font-andika text-sm items-center px-1">
                          Men
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="female" name="gender" value="male" />
                        <label htmlFor="female" className="font-andika text-sm items-center px-1">
                          Women
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="gender">
                    <div className="">
                      <div className="column-heading font-lora text-accent text-lg py-2">
                        Price
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="price-10k" name="gender" value="male" />
                        <label htmlFor="price-10k" className="font-andika text-sm items-center px-1">
                          Under 10K
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="price-20k" name="gender" value="male" />
                        <label htmlFor="price-20k" className="font-andika text-sm items-center px-1">
                          10k - 20k
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="price-30k" name="gender" value="male" />
                        <label htmlFor="price-30k" className="font-andika text-sm items-center px-1">
                          20k - 30k
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="price-40k" name="gender" value="male" />
                        <label htmlFor="price-40k" className="font-andika text-sm items-center px-1">
                          30k - 40k
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="price-50k" name="gender" value="male" />
                        <label htmlFor="price-50k" className="font-andika text-sm items-center px-1">
                          40k -50k
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="metal-color">
                    <div className="">
                      <div className="column-heading font-lora text-accent text-lg py-2">
                        Metal Color
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="price-10k" name="gender" value="male" />
                        <label htmlFor="price-10k" className="font-andika text-sm items-center px-1">
                          Platinum
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="yellow-gold" name="gender" value="male" />
                        <label htmlFor="yellow-gold" className="font-andika text-sm items-center px-1">
                          Yellow Gold
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="rose-gold" name="gender" value="male" />
                        <label htmlFor="rose-gold" className="font-andika text-sm items-center px-1">
                          Rose Gold
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="silver" name="gender" value="male" />
                        <label htmlFor="silver" className="font-andika text-sm items-center px-1">
                          Silver
                        </label>
                      </div>

                    </div>
                  </div>
                  <div className="metal-type">
                    <div className="">
                      <div className="column-heading font-lora text-accent text-lg py-2">
                        Metal Type
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="18k" name="gender" value="male" />
                        <label htmlFor="18k" className="font-andika text-sm items-center px-1">
                          18k
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="22k" name="gender" value="male" />
                        <label htmlFor="22k" className="font-andika text-sm items-center px-1">
                          22k
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="rose-gold" name="gender" value="male" />
                        <label htmlFor="rose-gold" className="font-andika text-sm items-center px-1">
                          Rose Gold
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="silver" name="gender" value="male" />
                        <label htmlFor="silver" className="font-andika text-sm items-center px-1">
                          Silver
                        </label>
                      </div>

                    </div>
                  </div>
                  <div className="ring-size">
                    <div className="">
                      <div className="column-heading font-lora text-accent text-lg py-2">
                        Ring Size
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="ring-4mm" name="gender" value="male" />
                        <label htmlFor="ring-4mm" className="font-andika text-sm items-center px-1">
                          4 (mm)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="ring-45mm" name="gender" value="male" />
                        <label htmlFor="ring-45mm" className="font-andika text-sm items-center px-1">
                          4.5 (mm)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="ring-5mm" name="gender" value="male" />
                        <label htmlFor="ring-5mm" className="font-andika text-sm items-center px-1">
                          5 (mm)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="ring-55mm" name="gender" value="male" />
                        <label htmlFor="ring-55mm" className="font-andika text-sm items-center px-1">
                          5.5 (mm)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="ring-6mm" name="gender" value="male" />
                        <label htmlFor="ring-6mm" className="font-andika text-sm items-center px-1">
                          6 (mm)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="ring-65mm" name="gender" value="male" />
                        <label htmlFor="ring-65mm" className="font-andika text-sm items-center px-1">
                          6.5 (mm)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="ring-7mm" name="gender" value="male" />
                        <label htmlFor="ring-7mm" className="font-andika text-sm items-center px-1">
                          7 (mm)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="ring-75mm" name="gender" value="male" />
                        <label htmlFor="ring-75mm" className="font-andika text-sm items-center px-1">
                          7.5 (mm)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="ring-8mm" name="gender" value="male" />
                        <label htmlFor="ring-8mm" className="font-andika text-sm items-center px-1">
                          8 (mm)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="ring-85mm" name="gender" value="male" />
                        <label htmlFor="ring-85mm" className="font-andika text-sm items-center px-1">
                          8.5 (mm)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="ring-9mm" name="gender" value="male" />
                        <label htmlFor="ring-9mm" className="font-andika text-sm items-center px-1">
                          9 (mm)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="ring-95mm" name="gender" value="male" />
                        <label htmlFor="ring-95mm" className="font-andika text-sm items-center px-1">
                          9.5 (mm)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="ring-100mm" name="gender" value="male" />
                        <label htmlFor="ring-100mm" className="font-andika text-sm items-center px-1">
                          10 (mm)
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="weight-range">
                    <div className="">
                      <div className="column-heading font-lora text-accent text-lg py-2">
                        Weight
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="weight-3gm" name="gender" value="male" />
                        <label htmlFor="weight-3gm" className="font-andika text-sm items-center px-1">
                          1.0 (gm) - 3.0 (gm)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="weight-5gm" name="gender" value="male" />
                        <label htmlFor="weight-5gm" className="font-andika text-sm items-center px-1">
                          3.0 (gm) - 5.0 (gm)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="weight-8gm" name="gender" value="male" />
                        <label htmlFor="weight-8gm" className="font-andika text-sm items-center px-1">
                          5.0 (gm) - 8.0 (gm)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="weight-12gm" name="gender" value="male" />
                        <label htmlFor="12gm" className="font-andika text-sm items-center px-1">
                          8.0 (gm) - 12.0 (gm)
                        </label>
                      </div>

                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-span-9">
              <section>
                <div className="listing my-10">
                  <div className="grid grid-cols-3 gap-5">
                    {
                    
                      products?.map((item) => (
                        <div className="col" key={item.id}>
                          <div className="product-wrapper">
                            <Link href='/ghgfhfgh' >
                              <div className="product">
                                <div className="image relative h-72">
                                  <LazyImage src={`${PRODUCT_MEDIA}/${item.image}`} alt='image' width={288} height={288} />
                                  <span className="absolute right-5 top-5">
                                    <Button className='bg-transparent border-0'>
                                      <Heart size={20} />
                                    </Button>
                                  </span>
                                </div>
                                <div className="name">
                                  <span className="text-accent text-base font-andika block text-center">{item?.name}</span>
                                </div>
                                <div className="price flex items-center justify-center">
                                  <span><IndianRupee size={14} /></span>
                                  <span className="text-accent text-base font-andika font-semibold block text-center">{item?.price}</span>
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
        </div>

      </div>
    </div>
  )
}