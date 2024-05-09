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
import { PRODUCT_MEDIA } from "@/lib/constants/images";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import './style.css'

export default function Wishlistproduct() {
  const queryClient = useQueryClient();
  const {data:wishlistData} = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      axios.get('/wishlist/api/get-data')
      .then((response) => {
        console.log("Wishlistt",response.data.wishlistItems)
        return response.data.wishlistItems
      })
      .catch((error) => {
        console.log("Error Occured", error)
      })
  })

  const deleteProduct = (sku) => {
    axios.post('/wishlist/api/delete-from-wishlist', {
      sku
    })
    .then((response) => {
      // return response.data.receivedData
      queryClient.invalidateQueries('products');
    })
    .catch((error) => {
      console.log("Error occured while deleting product", error)
    })
  }
  return (
    <div className="wishlist-product-component">
      <div className="content-wrapper">
        <div className="page-heading">
          <h1>Your Wishlist</h1>
        </div>
        <div className="wishlist-items ">
          {
            wishlistData?.map((items) => (

          <div className="product-wrapper" key={items?.sku}>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-3">
                <div className="image-wrapper ">
                  <Image src={`${PRODUCT_MEDIA}/${items?.product?.image}`} alt={wishlistData?.product?.name} width={300} height={300} />
                </div>
              </div>
              <div className="col-span-7">
                <div className="detail">
                  <div className="name">
                    <h2>{items?.product?.name}</h2>
                  </div>
                  <div className="description">
                    <p>{items.product.description}</p>
                  </div>
                  <div className="attribute">
                    <span className="caption">SKU:</span>
                    <span className="value">{items.sku}</span>
                  </div>
                  <div className="attribute">
                    <span className="caption">Metal Color:</span>
                    <span className="value">{items.product.metalColor}</span>
                  </div>
                  <div className="attribute">
                    <span className="caption">Metal Type:</span>
                    <span className="value">{items.product.metalType}</span>
                  </div>
                  <div className="attribute">
                    <span className="caption">Weight:</span>
                    <span className="value">{items.product.totalWeight} grams</span>
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
                    <Link href={`${'/product-detail'}/${items.sku}`} className="font-roboto text-base text-accent mb-[-5px] hover:underline hover:font-semibold hover:text-primary">View</Link>
                    <Button className=''>Move to cart</Button>
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
                          <AlertDialogAction onClick={() => deleteProduct(items?.sku)} className='rounded-none sm:mb-3 mb-2 hover:font-semibold inline bg-white font-roboto justify-end font-normal text-base text-accent bg-primary hover:text-accent hover:bg-primary-foreground text-white py-0'>
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
    </div>
  )
}