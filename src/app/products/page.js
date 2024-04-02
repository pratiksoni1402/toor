export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

import Dynamic from 'next/dynamic'
import React from "react";
import Productlisting from "./_components/product-listing";
import MobileFilters from './_components/mobile-filters';

const Productfilters = Dynamic(() => import("./_components/filters"), {
  ssr: false,
})

export default function Listing({ params }) {
  return (
    <div className="product-listing-page">
      <div className="container">
        <div className="customization">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sticky top-0 bg-primary-foreground z-[2]">
              <div className="component-wrapper md:block sm:hidden hidden">
                <Productfilters />
              </div>
            </div>
            <div className='col-span-12'>
              <div className='product-category-name'>
                <div className='name text-center font-crimson text-3xl pb-2 mt-5 text-accent'>
                  <h1>Engagement Rings</h1>
                </div>
                <div className='description text-center font-roboto text-base text-accent'>Discover captivating designs adorned with rare gemstones, intricate detailing, and unconventional settings that defy tradition. Each ring is a statement of love as unique as your bond, promising a lifetime of enchantment and admiration.</div>
              </div>
            </div>
            <div className="col-span-12 sticky top-0 bg-white z-[2]">
              <div className="component-wrapper my-3 md:hidden sm:block block">
                <MobileFilters />
              </div>
            </div>
            <div className="col-span-12">
              <div className="component-wrapper mt-5">
                <Productlisting />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}