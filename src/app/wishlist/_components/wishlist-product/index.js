'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LazyImage from "@/app/components/lazy-loading/lazy-image";
import { IndianRupee } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import './style.css'
export default function Wishlistproduct() {
  return (
    <div className="wishlist-product-component">
      <div className="content-wrapper">
        <div className="page-heading">
          <h1>Your Wishlist</h1>
        </div>
        <div className="wishlist-items ">
          <div className="product-wrapper">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-3">
                <div className="image-wrapper ">
                  <LazyImage src='/uploads/images/products/SOL-RG-003.jpg' width={160} height={160} alt='Image' />
                </div>
              </div>
              <div className="col-span-7">
                <div className="detail">
                  <div className="name">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                  </div>
                  <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vel molestias distinctio nisi cumque voluptatum cum error ratione natus non.</p>
                  </div>
                  <div className="attribute">
                    <span className="caption">SKU:</span>
                    <span className="value">RG-001</span>
                  </div>
                  <div className="attribute">
                    <span className="caption">Metal Color:</span>
                    <span className="value">Rose Gold</span>
                  </div>
                  <div className="attribute">
                    <span className="caption">Metal Type:</span>
                    <span className="value">22K</span>
                  </div>
                  <div className="attribute">
                    <span className="caption">Weight:</span>
                    <span className="value">4.150gm</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div>
                  <div className="pricing">
                    <span><IndianRupee size={14} /></span>
                    <span>56,250</span>
                  </div>
                  <div className="user-actions">
                    <Button>View</Button>
                    <Button>Move to cart</Button>
                    <AlertDialog >
                      <AlertDialogTrigger>
                        Delete from Wishlist
                      </AlertDialogTrigger>
                      <AlertDialogContent className=' bg-white rounded-none w-72'>
                        <AlertDialogHeader>
                          <AlertDialogTitle className='font-roboto text-center text-base text-accent'>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                        </AlertDialogHeader>
                        <AlertDialogFooter className=' flex sm:justify-start justify-start flex-col space-x-0 sm:flex-col sm:space-x-0'>
                          <AlertDialogAction className='rounded-none sm:mb-3 mb-2 hover:font-semibold inline bg-white font-roboto justify-end font-normal text-base text-accent bg-primary hover:text-accent hover:bg-primary-foreground text-white py-0'>
                            Remove
                          </AlertDialogAction>
                          <AlertDialogCancel className='rounded-none inline bg-white font-roboto hover:font-semibold  justify-end font-normal text-base text-accent bg-primary-foreground border-0 hover:bg-primary hover:text-white py-0'>
                            Cancel
                          </AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
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