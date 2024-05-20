'use client'
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import { IndianRupee } from "lucide-react"
export default function OrderReceipt() {
  return (
    <div className="order-receipt bg-[#faf2ec] pb-20">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-2 md:col-span-1"></div>
          <div className="lg:col-span-8 md:col-span-10 sm:col-span-12 col-span-12">
            <div className="order-receipt-wrapper bg-white">
              <div className="grid grid-cols-12">
                <div className="col-span-12">
                  <div className="order-status pl-4">
                    <h2 className="text-2xl font-crimson text-[#248232] pb-3">Thanks for your Order, </h2>
                    <p className="text-base font-roboto text-accent">Tracking information will be emailed as soon as your order shipped.</p>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="order-number text-base pl-4 font-roboto text-accent">
                    <span>Order ID:</span>
                    <span className="font-semibold pl-1"></span>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="address-wrapper pt-4">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="sm:col-span-1 col-span-2">
                        <div className="shipping-address pb-5">
                          <div className="heading bg-primary pl-4 font-semibold text-white text-base font-roboto mb-2 py-1">
                            Shipping Address
                          </div>
                          <div className="name font-roboto text-base text-accent pl-4">
                            <span className="caption">Name:</span>
                            <span className="value font-semibold pl-1"></span>
                          </div>
                          <div className="address font-roboto text-base text-accent pl-4">
                            <span className="caption">Address:</span>
                            <span className="value font-semibold pl-1"></span>
                          </div>
                          <div className="state font-roboto text-base text-accent pl-4">
                            <span className="caption">Country:</span>
                            <span className="value font-semibold pl-1"></span>
                          </div>
                          <div className="state font-roboto text-base text-accent pl-4">
                            <span className="caption">State:</span>
                            <span className="value font-semibold pl-1"></span>
                          </div>
                          <div className="city font-roboto text-base text-accent pl-4">
                            <span className="caption">City:</span>
                            <span className="value font-semibold pl-1"></span>
                          </div>
                          <div className="pincode font-roboto text-base text-accent pl-4">
                            <span className="caption">Pincode:</span>
                            <span className="value font-semibold pl-1"></span>
                          </div>
                          <div className="contact-number font-roboto text-base text-accent pl-4">
                            <span className="caption">Phone Number:</span>
                            <span className="value font-semibold pl-1"></span>
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-span-1 col-span-2">
                        <div className="billing-address pb-5">
                          <div className="heading  bg-primary font-semibold text-white text-base font-roboto mb-2 py-1 pl-4">
                            Billing Address
                          </div>
                          <div className="name font-roboto text-base text-accent pl-4">
                            <span className="caption">Name</span>
                            <span className="value font-semibold pl-1"></span>
                          </div>
                          <div className="address font-roboto text-base text-accent pl-4">
                            <span className="caption">Address:</span>
                            <span className="value font-semibold pl-1"></span>
                          </div>
                          <div className="state font-roboto text-base text-accent pl-4">
                            <span className="caption">Country:</span>
                            <span className="value font-semibold pl-1"></span>
                          </div>
                          <div className="state font-roboto text-base text-accent pl-4">
                            <span className="caption">State:</span>
                            <span className="value font-semibold pl-1"></span>
                          </div>
                          <div className="city font-roboto text-base text-accent pl-4">
                            <span className="caption">City:</span>
                            <span className="value font-semibold pl-1"></span>
                          </div>
                          <div className="pincode font-roboto text-base text-accent pl-4">
                            <span className="caption">Pincode:</span>
                            <span className="value font-semibold pl-1"></span>
                          </div>
                          <div className="contact-number font-roboto text-base text-accent pl-4">
                            <span className="caption">Phone Number:</span>
                            <span className="value font-semibold pl-1"></span>
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-span-1 col-span-2">
                        <div className="payment-method pb-5">
                          <div className="heading bg-primary font-semibold text-white text-base font-roboto mb-2 py-1 pl-4">
                            Payment Method
                          </div>
                          <div className="name font-roboto text-base text-accent pl-4">
                            <span className="value font-semibold pl-1"></span>
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-span-1 col-span-2">
                        <div className="order-date pb-5">
                          <div className="heading  bg-primary font-semibold text-white text-base font-roboto mb-2 py-1 pl-4">
                            Order Date & Time
                          </div>
                          <div className="name font-roboto text-base text-accent pl-4 mb-10 pb-5">
                            <div className="value font-semibold pl-1">Date: </div>
                            <div className="value font-semibold pl-1">Time: </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="order-item-wrapper bg-white">
              <div className="product-wrapper">
                <Table className=''>
                  <TableHeader className=' bg-primary  hover:bg-primary '>
                    <TableRow className=' hover:bg-primary '>
                      <TableHead className="w-[100px] text-white font-roboto font-semibold text-base">S.No</TableHead>
                      <TableHead className=' text-white font-roboto font-semibold text-base'>Image</TableHead>
                      <TableHead className=' text-white font-roboto font-semibold text-base'>Name</TableHead>
                      <TableHead className=' text-white font-roboto font-semibold text-base'>Quantity</TableHead>
                      <TableHead className=" text-white font-roboto font-semibold text-base text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='border-b border-[#e5e5e5]'>
                    <TableRow>
                      <TableCell className="text-accent font-roboto font-semibold text-base "></TableCell>
                      <TableCell>
                        <Image src={``} alt='' width={75} height={75} />
                      </TableCell>
                      <TableCell className='text-accent font-roboto font-semibold text-base whitespace-nowrap'></TableCell>
                      <TableCell className='text-accent font-roboto font-semibold text-base'></TableCell>
                      <TableCell className='text-accent font-roboto font-semibold text-base text-right'><div className="flex items-center">
                        <span className=""><IndianRupee width={14} /></span>
                        <span></span>
                      </div></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="order-item-wrapper bg-white">
              <div className="calculation px-2 text-base">
                <div className="sub-total pt-3 flex justify-between px-2 font-roboto text-[#4b4537]">
                  <div>Sub-Total:</div>
                  <div className="flex items-center">
                    <span className=""><IndianRupee width={14} /></span>
                    <span></span>
                  </div>
                </div>
                <div className="sub-total flex py-2 justify-between px-2 font-roboto text-[#4b4537]">
                  <div>Central GST:</div>
                  <div className="flex items-center">
                    <span className=""><IndianRupee width={14} /></span>
                    <span></span>
                  </div>
                </div>
                <div className="sub-total flex pb-3 justify-between px-2 font-roboto text-[#4b4537]">
                  <div>State GST:</div>
                  <div className="flex items-center">
                    <span className=""><IndianRupee width={14} /></span>
                    <span></span>
                  </div>
                </div>
                <div className="total-price flex font-semibold pt-3 pb-5 border-t border-[#b2937e] justify-between px-2 font-roboto text-[#4b4537]">
                  <div>Grand Total:</div>
                  <div className="flex items-center">
                    <span className="svg-stroking"><IndianRupee width={14} /></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-1"></div>
        </div>
      </div>
    </div>
  )
}