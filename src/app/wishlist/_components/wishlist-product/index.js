'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LazyImage from "@/app/components/lazy-loading/lazy-image";
import { IndianRupee } from "lucide-react";
export default function Wishlistproduct() {
  return (
    <div className="wishlist-product-component">
      <div className="content-wrapper">
        <div className="page-heading border-b text-center font-crimson text-accent text-3xl">
          <h1>Your Wishlist</h1>
        </div>
        <div className="wishlist-items ">
          <div className="product-wrapper py-10 border-b">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-3">
                <div className="image relative h-60 ">
                  <LazyImage src='/uploads/images/products/SOL-RG-003.jpg' width={160} height={160} alt='Image' />
                </div>
              </div>
              <div className="col-span-7">
                <div className="detail text-accent text-base">
                  <div className="name">
                    <h2 className="font-crimson text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                  </div>
                  <div className="description">
                    <p className="leading-5 mr-5 font-roboto py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vel molestias distinctio nisi cumque voluptatum cum error ratione natus non.</p>
                  </div>
                  <div className="sku font-roboto text-base">
                    <span className="font-semibold pr-1">SKU:</span>
                    <span>RG-001</span>
                  </div>
                  <div className="metal-color font-roboto text-base">
                    <span className="font-semibold pr-1">Metal Color:</span>
                    <span>Rose Gold</span>
                  </div>
                  <div className="metal-type font-roboto text-base">
                    <span className="font-semibold pr-1">Metal Type:</span>
                    <span>22K</span>
                  </div>
                  <div className="weight font-roboto text-base">
                    <span className="font-semibold pr-1">Weight:</span>
                    <span>4.150gm</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div>
                  <div className="pricing flex items-center font-semibold text-base justify-end font-roboto text-accent">
                    <span><IndianRupee size={14} /></span>
                    <span>56,250</span>
                  </div>
                  <div className="user-actions mt-20 text-right flex flex-col">
                    <Button className='rounded-none inline bg-white pr-0 font-roboto justify-end font-normal text-base text-accent text-right hover:underline hover:text-primary'>View</Button>
                    <Button className='mt-[-10px] rounded-none inline bg-white pr-0 font-roboto justify-end font-normal text-base text-accent text-right hover:underline hover:text-primary'>Move to cart</Button>
                    <Button className='mt-[-10px] rounded-none inline bg-white pr-0 font-roboto justify-end font-normal text-base text-accent text-right hover:underline hover:text-primary'>Delete from wishlist</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-wrapper py-10 border-b">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-3">
                <div className="image relative h-60 ">
                  <LazyImage src='/uploads/images/products/SOL-RG-003.jpg' width={160} height={160} alt='Image' />
                </div>
              </div>
              <div className="col-span-7">
                <div className="detail text-accent text-base">
                  <div className="name">
                    <h2 className="font-crimson text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                  </div>
                  <div className="description">
                    <p className="leading-5 mr-5 font-roboto py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vel molestias distinctio nisi cumque voluptatum cum error ratione natus non.</p>
                  </div>
                  <div className="sku font-roboto text-base">
                    <span className="font-semibold pr-1">SKU:</span>
                    <span>RG-001</span>
                  </div>
                  <div className="metal-color font-roboto text-base">
                    <span className="font-semibold pr-1">Metal Color:</span>
                    <span>Rose Gold</span>
                  </div>
                  <div className="metal-type font-roboto text-base">
                    <span className="font-semibold pr-1">Metal Type:</span>
                    <span>22K</span>
                  </div>
                  <div className="weight font-roboto text-base">
                    <span className="font-semibold pr-1">Weight:</span>
                    <span>4.150gm</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div>
                  <div className="pricing flex items-center font-semibold text-base justify-end font-roboto text-accent">
                    <span><IndianRupee size={14} /></span>
                    <span>56,250</span>
                  </div>
                  <div className="user-actions mt-20 text-right flex flex-col">
                    <Button className='rounded-none inline bg-white pr-0 font-roboto justify-end font-normal text-base text-accent text-right hover:underline hover:text-primary'>View</Button>
                    <Button className='mt-[-10px] rounded-none inline bg-white pr-0 font-roboto justify-end font-normal text-base text-accent text-right hover:underline hover:text-primary'>Move to cart</Button>
                    <Button className='mt-[-10px] rounded-none inline bg-white pr-0 font-roboto justify-end font-normal text-base text-accent text-right hover:underline hover:text-primary'>Delete from wishlist</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-wrapper py-10 border-b">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-3">
                <div className="image relative h-60 ">
                  <LazyImage src='/uploads/images/products/SOL-RG-003.jpg' width={160} height={160} alt='Image' />
                </div>
              </div>
              <div className="col-span-7">
                <div className="detail text-accent text-base">
                  <div className="name">
                    <h2 className="font-crimson text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                  </div>
                  <div className="description">
                    <p className="leading-5 mr-5 font-roboto py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vel molestias distinctio nisi cumque voluptatum cum error ratione natus non.</p>
                  </div>
                  <div className="sku font-roboto text-base">
                    <span className="font-semibold pr-1">SKU:</span>
                    <span>RG-001</span>
                  </div>
                  <div className="metal-color font-roboto text-base">
                    <span className="font-semibold pr-1">Metal Color:</span>
                    <span>Rose Gold</span>
                  </div>
                  <div className="metal-type font-roboto text-base">
                    <span className="font-semibold pr-1">Metal Type:</span>
                    <span>22K</span>
                  </div>
                  <div className="weight font-roboto text-base">
                    <span className="font-semibold pr-1">Weight:</span>
                    <span>4.150gm</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div>
                  <div className="pricing flex items-center font-semibold text-base justify-end font-roboto text-accent">
                    <span><IndianRupee size={14} /></span>
                    <span>56,250</span>
                  </div>
                  <div className="user-actions mt-20 text-right flex flex-col">
                    <Button className='rounded-none inline bg-white pr-0 font-roboto justify-end font-normal text-base text-accent text-right hover:underline hover:text-primary'>View</Button>
                    <Button className='mt-[-10px] rounded-none inline bg-white pr-0 font-roboto justify-end font-normal text-base text-accent text-right hover:underline hover:text-primary'>Move to cart</Button>
                    <Button className='mt-[-10px] rounded-none inline bg-white pr-0 font-roboto justify-end font-normal text-base text-accent text-right hover:underline hover:text-primary'>Delete from wishlist</Button>
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