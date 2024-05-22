'use client'
import { IndianRupee } from "lucide-react";
import LazyImage from "@/app/components/lazy-loading/lazy-image";
import './style.css'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PRODUCT_MEDIA } from "@/lib/constants/images";
import Image from "next/image";
export default function Orderbag() {

  // Get the Cart Data Based on Session Id
  const { data: checkout } = useQuery({
    queryKey: ['checkoutData'],
    queryFn: () =>
      axios.get('/checkout/api/get-cart-data')
        .then((response) => { return response.data.getCartProduct })
        .catch((error) => console.log("Error while fetching Data", error))
  })
  // End
  return (
    <div className="order-bag-component border border-secondary bg-white">
      <div className='title text-primary text-2xl font-crimson py-3 px-5'>Your Items</div>
      {
        checkout?.map((items) => (

          <div className="product-wrapper py-5 px-5" key={items.id}>
            <div className="grid grid-cols-12 gap-5">
              <div className="sm:col-span-3 col-span-12">
                <div className="image-wrapper ">
                  <Image src={`${PRODUCT_MEDIA}/${items.product.image}`} width={200} height={200} alt={items.product.name} />
                </div>
              </div>
              <div className="sm:col-span-7 col-span-12">
                <div className="detail">
                  <div className="name">
                    <h2>{items.product.name}</h2>
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
                    <span className="caption">Metal Purity:</span>
                    <span className="value">{items.product.metalType}</span>
                  </div>
                  <div className="attribute">
                    <span className="caption">Weight:</span>
                    <span className="value">{items.product.totalWeight} grams</span>
                  </div>
                  <div className="attribute">
                    <span className="caption">Ring Size:</span>
                    <span className="value">{items.ringSize}</span>
                  </div>
                  <div className="attribute">
                    <span className="caption">Engraving Text:</span>
                    <span className="value">{items.engravingText}</span>
                  </div>
                  <div className="attribute">
                    <span className="caption">Quantity:</span>
                    <span className="value">{items.quantity}</span>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2 col-span-12">
                <div>
                  <div className="pricing">
                    <span><IndianRupee size={14} /></span>
                    <span>56,250</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}