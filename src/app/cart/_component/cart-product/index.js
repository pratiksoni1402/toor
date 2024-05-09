'use client'
import { Button } from "@/components/ui/button";
import LazyImage from "@/app/components/lazy-loading/lazy-image";
import Image from "next/image";
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
import { PRODUCT_MEDIA } from "@/lib/constants/images";
import './syle.css';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Cartproduct() {
  const { data: cartData } = useQuery({
    queryKey: ['cart'],
    queryFn: () =>
      axios.get('/cart/api/get-data')
        .then((response) => {
         return response.data.getCartProduct
        })
        .catch((error) => {
          console.log("Error in Fetching Products", error)
        })
  })

  return (
    <div className="cart-product-component">
      <div className="cart-items ">
        {
          cartData?.map((items) => (
            <div className="product-wrapper" key={items?.sku}>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3">
                  <div className="image-wrapper">
                    <Image src={`${PRODUCT_MEDIA}/${items?.product?.image}`} alt={items?.product?.name} width={300} height={300} />
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="detail">
                    <div className="name">
                      <h2 className="">{items.product.name}</h2>
                    </div>
                    <div className="description">
                      <p className="">{items.product.description}</p>
                    </div>
                    <div className="attribute">
                      <span className="caption">SKU:</span>
                      <span className="variation">{items.sku}</span>
                    </div>
                    <div className="attribute">
                      <span className="caption">Metal Color:</span>
                      <span className="variation">{items.product.metalColor}</span>
                    </div>
                    <div className="attribute">
                      <span className="caption">Metal Type:</span>
                      <span className="variation">{items.product.metalType}</span>
                    </div>
                    <div className="attribute">
                      <span className="caption">Weight:</span>
                      <span className="variation">{items.product.totalWeight} grams</span>
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
                      <span>{items.product.price}</span>
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
          ))
        }
      </div>
    </div>
  )
}