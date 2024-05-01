'use client'

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PRODUCT_MEDIA } from "@/lib/constants/images";
import LazyImage from "@/app/components/lazy-loading/lazy-image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function ProductDetail({ params }) {
  const value = params
  console.log("This is param value", value);
  const { data: product } = useQuery({
    queryKey: ['productDetail'],
    queryFn: () =>
      axios.get(`/product-detail/api/get-product-detail/${params['slug']}`)
        .then((response) => {
          return response.data.productData
        })
        .catch((error) => {
          console.log("Error", error)
        })
  })
  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="grid grid-cols-2 gap-5">
          <div className="col">
            <div className="main-image relative h-[564px]">
              <LazyImage src={`${PRODUCT_MEDIA}/${product?.image}`} alt={product?.name} width={564} height={564} />
            </div>
          </div>
          <div className="col">
            <div className="description">
              <div className="details">
                <span className="caption">SKU:</span>
                <span className="value">{product?.sku}</span>
              </div>
              <div className="details">
                <span className="value">{product?.name}</span>
              </div>
              <div className="details">
                <div className="caption">{product?.description}</div>
              </div>
              <div className="details">
                <span className="value">{product?.price}</span>
              </div>
              <div className="details">
                <span className="caption">Making Charges:</span>
                <span className="value">{product?.makingChargesPerGram}</span>
              </div>
              <div className="details">
                <span className="caption">Weight:</span>
                <span className="value">{product?.totalWeight} </span>
              </div>
              <div className="details">
                <span className="caption">Metal Type:</span>
                <span className="value">{product?.metalType}</span>
              </div>
              <div className="details">
                <span className="caption">Metal Color:</span>
                <span className="value">{product?.metalColor}</span>
              </div>
              <div className="details ring-size">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}