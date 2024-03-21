'use client'
import { Button } from "@/components/ui/button";
import LazyImage from "@/app/components/lazy-loading/lazy-image";
import Image from "next/image";
import { IndianRupee } from "lucide-react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
export default function Cartproduct() {
  return (
    <div className="cart-product-component">
      <div className="cart-items ">
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
              <div className='quantity-wrapper text-accent font-roboto text-base'>
                <span className="font-semibold ">Quantity</span>
                <div className="">
                  <Button className='rounded-none w-[33px] h-[33px] items-center text-2xl'>
                    {/* <Plus size={33} color="white"/> */}
                    +
                  </Button>
                  <span className="w-5 mx-5 font-semibold">5</span>
                  <Button className='rounded-none w-[33px] h-[33px] items-center text-2xl'>
                    {/* <Minus size={20} /> */}
                    -
                  </Button>
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
              <div className='quantity-wrapper text-accent font-roboto text-base'>
                <span className="font-semibold ">Quantity</span>
                <div className="">
                  <Button className='rounded-none w-[33px] h-[33px] items-center text-2xl'>
                    {/* <Plus size={33} color="white"/> */}
                    +
                  </Button>
                  <span className="w-5 mx-5 font-semibold">5</span>
                  <Button className='rounded-none w-[33px] h-[33px] items-center text-2xl'>
                    {/* <Minus size={20} /> */}
                    -
                  </Button>
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
              <div className='quantity-wrapper text-accent font-roboto text-base'>
                <span className="font-semibold ">Quantity</span>
                <div className="">
                  <Button className='rounded-none w-[33px] h-[33px] items-center text-2xl'>
                    {/* <Plus size={33} color="white"/> */}
                    +
                  </Button>
                  <span className="w-5 mx-5 font-semibold">5</span>
                  <Button className='rounded-none w-[33px] h-[33px] items-center text-2xl'>
                    {/* <Minus size={20} /> */}
                    -
                  </Button>
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
  )
}