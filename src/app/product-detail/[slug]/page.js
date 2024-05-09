'use client'
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PRODUCT_MEDIA } from "@/lib/constants/images";
import Image from "next/image";
import ProductSkeleton from "../_component/skeleton";
import { Loader2Icon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IndianRupee } from 'lucide-react';
import './style.css';
import { useState } from "react";

export default function ProductDetail({ params }) {
  const router = useRouter();
  const [isEngraving, setEngraving] = useState(false);
  const [addTocart, setAddToCart] = useState(false);
  const { data: product } = useQuery({
    queryKey: ['productDetail'],
    queryFn: () =>
      axios.get(`/product-detail/api/get-product-detail/${params['slug']}`)
        .then((response) => {
          return response.data.productData
        })
        .catch((error) => {
          console.log("Error", error)
        })
  })
  const ringSizeArray = product?.ringSize?.split(',')

  const metalColorType = product?.metalColor?.split('-')
  const formattedColor = metalColorType?.map(metalColorType => metalColorType.charAt(0).toUpperCase() + metalColorType.slice(1)).join(' ');

  const handleForm = () => {
    setEngraving(!isEngraving)
  }

  // Add To Wishlist
  const handleAddtoWishlist = (id, sku) => {
    axios.post('/product-detail/api/add-to-wishlist', {
      id,
      sku,
    })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log("Error", error)
      })
  }
  // End

  // Add To Cart
  const handleAddtoCart = (id, sku) => {
    setAddToCart(true);
    axios.post('/product-detail/api/add-to-cart', {
      id,
      sku
    })
      .then((response) => {
        router.push('/cart')
      })
      .catch((error) => {
        console.log("Error while adding product to cart ", error)
      })
      .finally(() => {
        setAddToCart(false)
      })
  }
  // End

  // Show Skeleton Till Product Detail Fetching 
  if (!product) {
    return (
      <div>
        <ProductSkeleton />
      </div>
    )
  }
  // End

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="col">
            <div className="main-image sticky top-5">
              <Image src={`${PRODUCT_MEDIA}/${product?.image}`} alt={product?.name} width={564} height={564} />
            </div>
          </div>
          <div className="col">
            <div className="description">
              <div className="details">
                <span className="caption">SKU:</span>
                <span className="value"> {product?.sku}</span>
              </div>

              <div className="details">
                <span className="font-crimson font-medium text-3xl">{product?.name}</span>
              </div>

              <div className="details">
                <div className="leading-5 pb-2 font-roboto text-base">{product?.description}</div>
              </div>

              <div className="details flex items-center ">
                <span><IndianRupee size={16} /></span>
                <span className="text-lg font-roboto font-semibold">{product?.price}</span>
              </div>

              <div className="details">
                <span className="caption">Making Charges:</span>
                <span className="value"> {product?.makingChargesPerGram}/- per gram</span>
              </div>

              <div className="details">
                <span className="caption">Weight:</span>
                <span className="value"> {product?.totalWeight} gram</span>
              </div>

              <div className="details">
                <span className="caption">Metal Type:</span>
                <span className="value"> {product?.metalType}</span>
              </div>

              <div className="details">
                <span className="caption">Metal Color:</span>
                <span className="value"> {formattedColor}</span>
              </div>

              <div className="details flex items-center">
                <span className="caption">Hallmark:</span>
                <span className="value pl-1"> BIS Hallmarked</span>
                <span className="pl-2">
                  <Image src='/uploads/images/logo/bis-hallmark.svg' alt="BIS Hallmark" width={30} height={30} />
                </span>
              </div>

              <div className="details ring-size">
                <span className="caption pt-2">Ring Size:</span>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Ring Size" />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      ringSizeArray?.map((size, index) => (
                        <SelectItem value={size} key={size} className='hover:text-white text-accent'>{size}</SelectItem>

                      ))
                    }
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="engraving-section pb-3 pt-4">
              {
                product?.isEngraveable == 0 ? (
                  <div>
                    <div>
                      <input type="checkbox" checked={isEngraving} className="engraving-checkbox" onClick={handleForm} id="engraving" name="gender" value="yellow-gold" />
                      <label htmlFor="engraving" className="engraving-label font-roboto hover:cursor-pointer text-base font-semibold text-accent pl-2">
                        Add Engraving (Free)
                      </label>
                    </div>
                    <div>
                      {
                        isEngraving && (
                          <div className="flex items-center gap-5">
                            <div>
                              <Select>
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Select Engraving Style" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="serif-style">Serif Style</SelectItem>
                                  <SelectItem value="block-style">Block Style</SelectItem>
                                  <SelectItem value="script-style">Script Style</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <input type="text" placeholder="Engraving Text" name="engraving text" className="h-10 pl-2 font-roboto outline-0 border border-primary rounded-md" />
                            </div>
                          </div>
                        )
                      }
                    </div>
                  </div>
                ) : (
                  <div className="hidden">

                  </div>
                )
              }
            </div>
            <div className="actions mt-5">

              {
                addTocart ? (
                  <Button type='submit' className="w-full bg-primary mb-5 hover:bg-primary-foreground text-white hover:text-accent font-roboto text-base" disabled={true}>
                    <Loader2Icon className='animate-spin mr-1' />
                    ADD TO CART</Button>
                ) : (
                  <Button className='w-full bg-primary mb-5 hover:bg-primary-foreground text-white hover:text-accent font-roboto text-base' onClick={() => handleAddtoCart(product.id, product.sku)}>ADD TO CART</Button>
                )
              }


              <Button className='w-full bg-primary-foreground mb-5 hover:bg-primary hover:text-white text-accent font-roboto text-base' onClick={() => handleAddtoWishlist(product?.id, product?.sku)}>ADD TO WISHLIST</Button>
            </div>
            <div className="shipping-wrapper py-5">
              <div className="flex gap-5">
                <div>
                  <div className="transit flex flex-col justify-center items-center">
                    <span className="p-3  border-2 border-[#3c2f27] rounded-full">
                      <Image src='/uploads/images/logo/in-transit.svg' alt='Transit' className="w-8 h-8" width={20} height={32} />
                    </span>
                    <span>
                      <Image src='/uploads/images/logo/shipping.svg' alt='Steps' className=" w-4 h-44" width={20} height={50} />
                    </span>
                  </div>
                </div>
                <div className="information">
                  <div className="heading">
                    <h2 className="font-crimson text-accent text-2xl">FREE 3 DAY SHIPPING</h2>
                    <span className="font-roboto text-accent text-base">on all India Orders</span>
                  </div>
                  <div className="order mt-6">
                    <h2 className="font-crimson text-accent  text-2xl">ORDER BY:</h2>
                    <span className="font-roboto text-accent text-base">5PM EST Monday, February 12</span>
                  </div>
                  <div className="order mt-7">
                    <h2 className="font-crimson text-accent  text-2xl">RECEIVE BY:</h2>
                    <span className="font-roboto text-accent text-base">5PM EST THRUSDAY, February 15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}