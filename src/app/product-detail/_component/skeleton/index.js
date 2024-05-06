import { Skeleton } from "@/components/ui/skeleton";
import './style.css';
export default function ProductSkeleton() {
  return (
    <div className="product-skeleton my-10">
      <div className="container">
        <div className="skeleton-wrapper">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
            <div className="col">
              <div className="main-image sticky top-5 ">
                <Skeleton className="h-[564px] w-[564px] bg-primary-foreground rounded-3xl" />
              </div>
            </div>
            <div className="col">
              <div className="left-section">

                <div className="details mb-4 sku">
                  <Skeleton className="h-[16px] w-[200px] bg-primary-foreground" />
                </div>

                <div className="details name mb-3">
                  <Skeleton className="h-[36px] w-[300px] bg-primary-foreground" />
                </div>

                <div className="description mb-3">
                  <Skeleton className="h-[30px] w-[650px] bg-primary-foreground" />
                </div>

                <div className="price mb-3">
                  <Skeleton className="h-[16px] w-[100px] bg-primary-foreground" />
                </div>

                <div className="making-charges mb-3">
                  <Skeleton className="h-[16px] w-[200px] bg-primary-foreground" />
                </div>

                <div className="weight mb-3 ">
                  <Skeleton className="h-[16px] w-[70px] bg-primary-foreground" />
                </div>

                <div className="metal-type mb-3">
                  <Skeleton className="h-[16px] w-[90px] bg-primary-foreground" />
                </div>

                <div className="metal-color mb-3">
                  <Skeleton className="h-[16px] w-[230px] bg-primary-foreground" />
                </div>

                <div className="hallmark mb-3">
                  <Skeleton className="h-[16px] w-[270px] bg-primary-foreground" />
                </div>

                <div className="ring-size-caption mb-3">
                  <Skeleton className="h-[16px] w-[100px] bg-primary-foreground" />
                </div>

                <div className="ring-size-select mb-5">
                  <Skeleton className="h-[40px] w-[180px]  bg-primary-foreground" />
                </div>

              </div>

              <div className="engraving pb-3 mb-3">
                <Skeleton className="h-[26px] w-[300px] bg-primary-foreground" />
              </div>

              <div className="added-to-cart mb-5">
                <Skeleton className="h-[40px] w-[600px] bg-primary-foreground" />
              </div>

              <div className="added-to-bag mb-10">
                <Skeleton className="h-[40px] w-[600px] bg-primary-foreground" />
              </div>

              <div className="shipping-wrapper py-5">
                <div className="flex gap-5">
                  <div>
                    <div className="transit flex flex-col justify-center items-center">
                      <Skeleton className="h-[50px] w-[50px] bg-primary-foreground rounded-full" />
                      <Skeleton className="h-[26px] w-[300px] bg-primary-foreground" />
                    </div>
                  </div>
                  <div className="information">
                    <div className="heading">
                      <Skeleton className="h-[26px] w-[300px] bg-primary-foreground" />
                      <Skeleton className="h-[26px] w-[300px] bg-primary-foreground" />
                    </div>
                    <div className="order mt-6">
                      <Skeleton className="h-[26px] w-[300px] bg-primary-foreground" />
                      <Skeleton className="h-[26px] w-[300px] bg-primary-foreground" />
                    </div>
                    <div className="order mt-7">
                      <Skeleton className="h-[26px] w-[300px] bg-primary-foreground" />
                      <Skeleton className="h-[26px] w-[300px] bg-primary-foreground" />
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