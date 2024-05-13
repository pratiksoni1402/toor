import { Skeleton } from "@/components/ui/skeleton";
import './style.css';
export default function BillingSkeleton() {
  return (
    <div className="billing-skeleton-component">
      <div className="skeleton-wrapper">
        <div className="total-bill-component">
          <div className="content-wrapper">
            <div className="summary flex justify-center">
              <Skeleton className=" h-[16px] w-[150px] mt-1 bg-primary-foreground" />
            </div>
            <div className="calculation">
              <div className="subtotal mt-[10px]">
                <div>
                  <Skeleton className=" h-[16px] w-[70px] mt-1  bg-primary-foreground" />
                </div>
                <div className="price flex justify-between">
                  <Skeleton className=" h-[16px] w-[100px] mt-1  bg-primary-foreground" />
                </div>
              </div>

              <div className="tax-amount mt-2 cgst flex justify-between items-center">
                <div>
                  <Skeleton className=" h-[16px] w-[50px] mt-1  bg-primary-foreground" />
                </div>
                <div className="price">
                  <Skeleton className=" h-[16px] w-[70px] mt-1  bg-primary-foreground" />
                </div>
              </div>

              <div className="sgst flex mt-2  justify-between items-center">
                <div>
                  <Skeleton className=" h-[16px] w-[50px] mt-1  bg-primary-foreground" />
                </div>
                <div className="price">
                  <Skeleton className=" h-[16px] w-[70px] mt-1  bg-primary-foreground" />
                </div>
              </div>

              <div className="making-charges  mt-2 flex justify-between items-center">
                <div>
                  <Skeleton className=" h-[16px] w-[110px] mt-1 bg-primary-foreground" />
                </div>
                <div className="price">
                  <Skeleton className=" h-[16px] w-[90px] mt-1  bg-primary-foreground" />
                </div>
              </div>

              <div className="discount flex mt-2  justify-between items-center">
                <div>
                  <Skeleton className=" h-[16px] w-[110px] mt-1 bg-primary-foreground" />
                </div>
                <div className="price">
                  <Skeleton className=" h-[16px] w-[90px] mt-1  bg-primary-foreground" />
                </div>
              </div>
            </div>

            <div className='coupan-section '>
              <div className='heading pt-3 flex justify-center'>
                <Skeleton className=" h-[16px] w-[150px] mt-1 bg-primary-foreground" />
              </div>
              <div className='coupan-text mt-4'>
                <Skeleton className=" h-[36px] w-[260px] mt-1 bg-primary-foreground" />
              </div>
              <div className='coupan-text mt-4 flex items-center gap-5'>
                <Skeleton className=" h-[36px] w-[280px] mt-1 bg-primary-foreground" />
                <Skeleton className=" h-[36px] w-[280px] mt-1 bg-primary-foreground" />
              </div>
            </div>

            <div className="grand-total my-2">
              <Skeleton className=" h-[16px] w-[100px] mt-1 bg-primary-foreground" />
              <Skeleton className=" h-[16px] w-[100px] mt-1 bg-primary-foreground" />
            </div>

            <div className='checkout'>
              <Skeleton className=" h-[36px] w-[260px] mt-2 bg-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}