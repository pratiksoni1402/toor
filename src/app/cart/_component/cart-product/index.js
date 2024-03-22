'use client'
import { Button } from "@/components/ui/button";
import LazyImage from "@/app/components/lazy-loading/lazy-image";
import Image from "next/image";
import { IndianRupee } from "lucide-react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
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
import './syle.css';
export default function Cartproduct() {
  return (
    <div className="cart-product-component">
      <div className="cart-items ">
        <div className="product-wrapper">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-3">
              <div className="image-wrapper">
                <LazyImage src='/uploads/images/products/SOL-RG-003.jpg' width={160} height={160} alt='Image' />
              </div>
            </div>
            <div className="col-span-7">
              <div className="detail">
                <div className="name">
                  <h2 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                </div>
                <div className="description">
                  <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vel molestias distinctio nisi cumque voluptatum cum error ratione natus non.</p>
                </div>
                <div className="attribute">
                  <span className="caption">SKU:</span>
                  <span className="variation">RG-001</span>
                </div>
                <div className="attribute">
                  <span className="caption">Metal Color:</span>
                  <span className="variation">Rose Gold</span>
                </div>
                <div className="attribute">
                  <span className="caption">Metal Type:</span>
                  <span className="variation">22K</span>
                </div>
                <div className="attribute">
                  <span className="caption">Weight:</span>
                  <span className="variation">4.150gm</span>
                </div>
              </div>
              <div className='quantity-wrapper'>
                <span className="caption font-semibold text-accent font-roboto text-base">Quantity</span>
                <div className="quantity-variation">
                  <Button>
                    +
                  </Button>
                  <span className="">5</span>
                  <Button>
                    -
                  </Button>
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
                  <Button>Move to Wishlist</Button>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      Delete from Cart
                    </AlertDialogTrigger>
                    <AlertDialogContent className='bg-white rounded-none w-72'>
                      <AlertDialogHeader>
                        <AlertDialogTitle className='font-roboto text-center text-base text-accent'>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                      </AlertDialogHeader>
                      <AlertDialogFooter className='flex sm:justify-start justify-start flex-col space-x-0 sm:flex-col sm:space-x-0'>
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
  )
}