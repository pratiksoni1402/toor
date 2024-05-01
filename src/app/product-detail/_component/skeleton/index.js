import { Skeleton } from "@/components/ui/skeleton";
import './style.css';
export default function ProductSkeleton() {
  return (
    <div className="product-skeleton my-10">
      <div className="container">
        <div className="skeleton-wrapper">
          <div className="grid grid-cols-2 gap-5">
            <div className="col">
              <div className="main-image sticky top-5">
                <Skeleton className="h-[564] w-[564px] bg-slate-400" />
              </div>
            </div>
            <div className="col">
              <div className="description">

                <div className="details mb-2">
                  <Skeleton className="h-[16px] w-[400px] bg-slate-400" />
                </div>

                <div className="details mb-2">
                  <Skeleton className="h-[40px] w-[300px] bg-slate-400" />
                </div>

                <div className="details">
                  <Skeleton className="h-[26px] w-[700px] bg-slate-400 pb-1" />
                  <Skeleton className="h-[26px] w-[300px] bg-slate-400" />
                </div>

                <div className="details flex items-center  pb-1">
                  <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
                </div>

                <div className="details pb-1 ">
                  <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
                </div>

                <div className="details">
                  <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
                </div>

                <div className="details">
                  <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
                </div>

                <div className="details">
                  <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
                </div>

                <div className="details ">
                  <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
                </div>

                <div className="details ring-size">
                  <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
                </div>

              </div>

              <div className="engraving pb-3 pt-4">
                <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
              </div>

              <div className="actions mt-5">
                <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
                <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
              </div>

              <div className="shipping-wrapper py-5">
                <div className="flex gap-5">
                  <div>
                    <div className="transit flex flex-col justify-center items-center">
                      <Skeleton className="h-[50px] w-[50px]  bg-slate-400 rounded-full" />
                      <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
                    </div>
                  </div>
                  <div className="information">
                    <div className="heading">
                      <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
                      <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
                    </div>
                    <div className="order mt-6">
                      <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
                      <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
                    </div>
                    <div className="order mt-7">
                      <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
                      <Skeleton className="h-[26px] w-[300px]  bg-slate-400" />
                    </div>
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