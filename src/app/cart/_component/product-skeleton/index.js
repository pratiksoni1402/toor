'use client'
import { Skeleton } from "@/components/ui/skeleton";


export default function CartProductSkeleton() {
  const dummyProducts = [
    {
      id: 1,
      image: 'product1.jpg',
      name: 'Silver Bracelet',
      description: 'Beautiful silver bracelet with intricate design.',
      sku: 'SKU001',
      metaType: 'Jewelry',
      metalColor: 'Silver',
      weight: '25 grams',
      quantity: 10,
      price: 49.99
    },
    {
      id: 2,
      image: 'product2.jpg',
      name: 'Leather Wallet',
      description: 'Classic leather wallet with multiple compartments.',
      sku: 'SKU002',
      metaType: 'Accessories',
      metalColor: '', 
      weight: '150 grams',
      quantity: 15,
      price: 29.99
    },
    {
      id: 3,
      image: 'product3.jpg',
      name: 'Gold Earrings',
      description: 'Stylish gold earrings suitable for any occasion.',
      sku: 'SKU003',
      metaType: 'Jewelry',
      metalColor: 'Gold',
      weight: '10 grams',
      quantity: 5,
      price: 149.99
    }
  ];

  return (
    <div className="product-skeleton-component">
      <div className="cart-product-component">
        <div className="cart-items">
          {
            dummyProducts?.map((items) => (
              <div className="product-wrapper" key={items?.id}>
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-3">
                    <div className="image-wrapper">
                      <Skeleton className=" h-[300px] w-[300px] mt-1 bg-primary-foreground" />
                    </div>
                  </div>
                  <div className="col-span-7">
                    <div className="detail">
                      <div className="name">
                        <Skeleton className=" h-[16px] w-[150px] mt-1 bg-primary-foreground" />
                      </div>
                      <div className="description">
                        <Skeleton className=" h-[16px] w-[150px] mt-1 bg-primary-foreground" />
                      </div>
                      <div className="attribute">
                        <Skeleton className=" h-[16px] w-[150px] mt-1 bg-primary-foreground" />
                      </div>
                      <div className="attribute">
                        <Skeleton className=" h-[16px] w-[150px] mt-1 bg-primary-foreground" />
                      </div>
                      <div className="attribute">
                        <Skeleton className=" h-[16px] w-[150px] mt-1 bg-primary-foreground" />
                      </div>
                      <div className="attribute">
                        <Skeleton className=" h-[16px] w-[150px] mt-1 bg-primary-foreground" />
                      </div>
                    </div>
                    <div className='quantity-wrapper'>
                      <Skeleton className=" h-[16px] w-[150px] mt-1 bg-primary-foreground" />
                      <div className="quantity-variation">
                        <Skeleton className=" h-[16px] w-[150px] mt-1 bg-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div>
                      <div className="pricing">
                        <Skeleton className=" h-[16px] w-[150px] mt-1 bg-primary-foreground" />
                      </div>
                      <div className="user-actions">
                        <Skeleton className=" h-[16px] w-[150px] mt-1 bg-primary-foreground" />
                        <Skeleton className=" h-[16px] w-[150px] mt-1 bg-primary-foreground" />
                        <Skeleton className=" h-[16px] w-[150px] mt-1 bg-primary-foreground" />
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