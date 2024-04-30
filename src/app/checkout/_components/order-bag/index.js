'use client'
import { IndianRupee } from "lucide-react";
import LazyImage from "@/app/components/lazy-loading/lazy-image";
import './style.css'
export default function Orderbag() {
  return (
    <div className="order-bag-component">
      <div className="product-wrapper">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12">
            <div className='title text-accent text-2xl font-crimson'>Order Bag</div>
          </div>
          <div className="sm:col-span-3 col-span-12">
            <div className="image-wrapper ">
              <LazyImage src='/uploads/images/products/SOL-RG-003.jpg' width={100} height={100} alt='Image' />
            </div>
          </div>
          <div className="sm:col-span-7 col-span-12">
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
    </div>
  )
}