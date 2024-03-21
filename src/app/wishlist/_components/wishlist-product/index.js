'use client'
import LazyImage from "@/app/components/lazy-loading/lazy-image"
import { IndianRupee } from "lucide-react"
export default function Wishlistproduct() {
  return (
    <div className="wishlist-product-component">
      <div className="content-wrapper">
        <div className="page-heading text-center font-lora text-accent text-3xl">
          <h1>Your Wishlist</h1>
        </div>
        <div className="wishlist-items mt-10">
          <div className="product-wrapper">
            <div className="grid grid-cols-12">
              <div className="col-span-3">
                <div className="image relative h-60">
                  <LazyImage src='/uploads/images/products/SOL-RG-003.jpg' width={240} height={240} alt='Image' />
                </div>
              </div>
              <div className="col-span-7">
                <div className="detail text-accent text-base">
                  <div className="name">
                    <h2 className="font-andika font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                  </div>
                  <div className="description">
                    <p className="leading-5 mr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vel molestias distinctio nisi cumque voluptatum cum error ratione natus non.</p>
                  </div>
                  <div className="sku">
                    <span className="font-semibold">SKU:</span>
                    <span>RG-001</span>
                  </div>
                  <div className="metal-color">
                    <span className="font-semibold">Metal Color:</span>
                    <span>Rose Gold</span>
                  </div>
                  <div className="metal-type">
                    <span className="font-semibold">Metal Type:</span>
                    <span>22K</span>
                  </div>
                  <div className="weight">
                    <span className="font-semibold">Weight:</span>
                    <span>4.150gm</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div>
                <div className="pricing flex items-center text-base font-andika text-accent">
                  <span><IndianRupee size={14}/></span>
                  <span>56,250</span>
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