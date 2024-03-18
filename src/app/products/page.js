export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import React from "react";
import Productlisting from "./_components/product-listing";
import Filters from "./_components/filters";
export default function Listing({ params }) {
  return (
    <div className="product-listing-page">
      <div className="container">
        <div className="customization">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="component-wrapper mt-5">
                <Filters />
              </div>
            </div>
            <div className="col-span-12">
              <div className="component-wrapper ">
                <Productlisting />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}