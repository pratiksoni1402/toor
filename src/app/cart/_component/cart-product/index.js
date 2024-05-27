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
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import CartProductSkeleton from "../product-skeleton";
import './syle.css';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Cartproduct() {
  const queryClient = useQueryClient();
  const [quantityIncrease, setQuantityIncrease] = useState(1);
  const calculatedPrice = 0;

  // Get Product From Cart Table
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
  // End

  // Delete Product From Cart
  const handleProductDelete = (sku) => {
    axios.post('/cart/api/delete-from-cart', {
      sku,
    })
      .then((response) => {
        queryClient.invalidateQueries('cart')
      })
      .catch((error) => {
        console.log("Error while deleting product", error)
      })
  }
  // End

  // Increase Product Quantity
  const increaseQuantity = (id, quantity) => {
    const updateQuantity = quantity + 1;
    axios.post('/cart/api/update-quantity', {
      id,
      quantity: updateQuantity,
    })
      .then((response) => {
        // return response.data.getUpdatedQuantity
        queryClient.invalidateQueries('cart')
      })
      .catch((error) => {
        console.log("Error occured while updating quantity", error)
      })
  }
  // End

  // Decrease Product Quantity
  const decreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      const decreaseVolume = quantity - 1;
      axios.post('/cart/api/update-quantity', {
        id,
        quantity: decreaseVolume,
      })
        .then((response) => {
          queryClient.invalidateQueries('cart')
        })
        .catch((error) => {
          console.log("Error while updating Quantity", error)
        })
    }
  }
  // End

  // Move Product From Cart To Wishlist
  const moveToWishlist = (productId, quantity, sku, ringSize, engravingText) => {
    axios.post('/cart/api/move-to-wishlist', {
      productId,
      sku,
      ringSize,
      engravingText,
      quantity,
    })
      .then((response) => {
        handleProductDelete(sku)
        queryClient.invalidateQueries('cart')
        // return response.data.moveProduct
      })
      .catch((error) => {
        console.log("Error will moving product", error)
      })
  }
  // End


  // Skeleton will show untill data gets completely fetched
  if (!cartData) {
    return (
      <div>
        <CartProductSkeleton />
      </div>
    )
  }
  // End

  const metalColorType = cartData?.product?.metalColor?.split('-')
  const formattedColor = metalColorType?.map(metalColorType => metalColorType.charAt(0).toUpperCase() + metalColorType.slice(1)).join(' ');


  return (
    <div className="cart-product-component border border-secondary mb-10">
      <div className="cart-items px-5">
        {
          cartData?.map((items) => (

            <div className="product-wrapper" key={items?.sku}>
              <div className="grid grid-cols-12 gap-5">

                <div className="sm:col-span-3 col-span-12">
                  <div className="image-wrapper">
                    <Image src={`${PRODUCT_MEDIA}/${items?.product?.image}`} alt={items?.product?.name} width={300} height={300} />
                  </div>
                </div>

                <div className="sm:col-span-7 col-span-12">
                  <div className="detail sm:pt-0 pt-12">
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
                    {/* <div className="attribute">
                      <span className="caption">Metal Color:</span>
                      <span className="variation">{formattedColor}</span>
                    </div> */}
                    <div className="attribute">
                      <span className="caption">Metal Purity:</span>
                      <span className="variation">{items.product.metalType}</span>
                    </div>
                    <div className="attribute">
                      <span className="caption">Ring Size:</span>
                      <span className="variation">{items.ringSize}</span>
                    </div>
                    <div className="attribute">
                      <span className="caption">Engraving Text:</span>
                      <span className="variation">{items.engravingText}</span>
                    </div>
                    <div className="attribute">
                      <span className="caption">Weight:</span>
                      <span className="variation">{items.product.totalWeight} grams</span>
                    </div>
                  </div>
                  <div className='quantity-wrapper'>
                    <span className="caption font-semibold text-accent font-roboto text-base">Quantity</span>
                    <div className="quantity-variation">
                      <Button onClick={() => increaseQuantity(items?.id, items?.quantity)}>
                        +
                      </Button>
                      <span className="">{items.quantity}</span>
                      <Button onClick={() => decreaseQuantity(items?.id, items?.quantity)}>
                        -
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2 col-span-12">
                  <div className="pricing-and-actions">
                    <div className="pricing">
                      <span><IndianRupee size={14} /></span>
                      <span>{items.product.price * items?.quantity}</span>
                    </div>
                    <div className="user-actions">
                      <Link href={`${'/product-detail'}/${items?.sku}`} className="text-base font-roboto text-accent mb-[-4px] hover:underline hover:text-primary hover:font-semibold">View</Link>
                      <Button className='mb-[-4px] px-0' onClick={() => moveToWishlist(items?.productId, items?.quantity, items?.sku, items?.ringSize, items?.engravingText)}>Move to Wishlist</Button>
                      <AlertDialog>
                        <AlertDialogTrigger className="whitespace-nowrap">
                          Delete from Cart
                        </AlertDialogTrigger>
                        <AlertDialogContent className='bg-white rounded-none w-72'>
                          <AlertDialogHeader>
                            <AlertDialogTitle className='font-roboto text-center text-base text-accent'>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                          </AlertDialogHeader>
                          <AlertDialogFooter className='flex sm:justify-start justify-start flex-col space-x-0 sm:flex-col sm:space-x-0'>
                            <AlertDialogAction className='rounded-none sm:mb-3 mb-2 hover:font-semibold inline bg-white font-roboto justify-end font-normal text-base text-accent bg-primary hover:bg-secondary text-white py-0' onClick={() => handleProductDelete(items?.sku)}>
                              Remove
                            </AlertDialogAction>
                            <AlertDialogCancel className='rounded-none inline font-roboto hover:font-semibold  justify-end font-normal text-base text-accent bg-white border border-secondary hover:bg-secondary hover:text-white py-0'>
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