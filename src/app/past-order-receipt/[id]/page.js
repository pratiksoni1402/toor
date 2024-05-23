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
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IndianRupee } from "lucide-react";
import Image from "next/image";
import { PRODUCT_MEDIA } from "@/lib/constants/images";
export default function PastOrderReceipt({ params }) {
  const { data: pastOrderDetail } = useQuery({
    queryKey: ['pastOrder'],
    queryFn: () =>
      axios.post(`/past-order-receipt/api/get-past-order-detail/${params['id']}`)
        .then((response) => { return response.data.getDetail })
        .catch((error) => console.log("Error while fetching Part Order detail", error))
  })

  const orderDate = pastOrderDetail?.orderDate;
  if (orderDate) {
    const date = new Date(orderDate);

    // Format the date
    var formattedDate = `${date.toLocaleDateString()}`;
    var formattedTime = `${date.toLocaleTimeString()}`;

  }

  const fullName = pastOrderDetail?.shippingFirstName + ' ' + pastOrderDetail?.shippingLastName;
  const billingName = (pastOrderDetail?.billingFirstName ?? pastOrderDetail?.shippingFirstName) + ' ' + (pastOrderDetail?.billingLastName ?? pastOrderDetail?.shippingLastName);
  const billingAddress = (pastOrderDetail?.billingAddressOne ?? pastOrderDetail?.shippingAddressOne);
  const billingCountry = pastOrderDetail?.billingCountry ?? pastOrderDetail?.shippingCountry;
  const billingState = pastOrderDetail?.billingState ?? pastOrderDetail?.shippingState;
  const billingCity = pastOrderDetail?.billingCity ?? pastOrderDetail?.shippingCity;
  const billingPincode = pastOrderDetail?.billingPincode ?? pastOrderDetail?.shippingPincode;
  const billingPhoneNumber = pastOrderDetail?.billingPhoneNumber ?? pastOrderDetail?.shippingPhoneNumber;
  const billingLandmark = pastOrderDetail?.billingLandmark ?? pastOrderDetail?.shippingLandmark;

  return (
    <div className="order-receipt pb-20 pt-10">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-2 md:col-span-1"></div>
          <div className="lg:col-span-8 md:col-span-10 sm:col-span-12 col-span-12">
            <div className="receipt-wrapper border border-secondary px-5">
              <div className="order-receipt-wrapper bg-white">
                <div className="grid grid-cols-12">
                  <div className="col-span-12">
                    <div className="order-number text-xl text-center pl-4 pt-5 font-roboto text-accent">
                      <span>Order ID:</span>
                      <span className="font-semibold pl-1">{pastOrderDetail?.id}</span>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="address-wrapper pt-4">
                      <div className="grid grid-cols-2 gap-5">
                        <div className="sm:col-span-1 col-span-2">
                          <div className="shipping-address pb-5">
                            <div className="heading bg-secondary pl-4 font-semibold text-white text-base font-roboto mb-2 py-1">
                              Shipping Address
                            </div>
                            <div className="name font-roboto text-base text-accent pl-4">
                              <span className="caption">Name:</span>
                              <span className="value font-semibold pl-1">{fullName}</span>
                            </div>
                            <div className="address font-roboto text-base text-accent pl-4">
                              <span className="caption">Address:</span>
                              <span className="value font-semibold pl-1">{pastOrderDetail?.shippingAddressOne}</span>
                            </div>
                            <div className="state font-roboto text-base text-accent pl-4">
                              <span className="caption">Country:</span>
                              <span className="value font-semibold pl-1">{pastOrderDetail?.shippingCountry}</span>
                            </div>
                            <div className="state font-roboto text-base text-accent pl-4">
                              <span className="caption">State:</span>
                              <span className="value font-semibold pl-1">{pastOrderDetail?.shippingState}</span>
                            </div>
                            <div className="city font-roboto text-base text-accent pl-4">
                              <span className="caption">City:</span>
                              <span className="value font-semibold pl-1">{pastOrderDetail?.shippingCity}</span>
                            </div>
                            <div className="pincode font-roboto text-base text-accent pl-4">
                              <span className="caption">Pincode:</span>
                              <span className="value font-semibold pl-1">{pastOrderDetail?.shippingPincode}</span>
                            </div>
                            <div className="contact-number font-roboto text-base text-accent pl-4">
                              <span className="caption">Phone Number:</span>
                              <span className="value font-semibold pl-1">{pastOrderDetail?.shippingPhoneNumber}</span>
                            </div>
                            <div className="contact-number font-roboto text-base text-accent pl-4">
                              <span className="caption">Landmark:</span>
                              <span className="value font-semibold pl-1">{pastOrderDetail?.shippingLandmark}</span>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-1 col-span-2">
                          <div className="billing-address pb-5">
                            <div className="heading bg-secondary font-semibold text-white text-base font-roboto mb-2 py-1 pl-4">
                              Billing Address
                            </div>
                            <div className="name font-roboto text-base text-accent pl-4">
                              <span className="caption">Name</span>
                              <span className="value font-semibold pl-1">{billingName}</span>
                            </div>
                            <div className="address font-roboto text-base text-accent pl-4">
                              <span className="caption">Address:</span>
                              <span className="value font-semibold pl-1">{billingAddress}</span>
                            </div>
                            <div className="state font-roboto text-base text-accent pl-4">
                              <span className="caption">Country:</span>
                              <span className="value font-semibold pl-1">{billingCountry}</span>
                            </div>
                            <div className="state font-roboto text-base text-accent pl-4">
                              <span className="caption">State:</span>
                              <span className="value font-semibold pl-1">{billingState}</span>
                            </div>
                            <div className="city font-roboto text-base text-accent pl-4">
                              <span className="caption">City:</span>
                              <span className="value font-semibold pl-1">{billingCity}</span>
                            </div>
                            <div className="pincode font-roboto text-base text-accent pl-4">
                              <span className="caption">Pincode:</span>
                              <span className="value font-semibold pl-1">{billingPincode}</span>
                            </div>
                            <div className="contact-number font-roboto text-base text-accent pl-4">
                              <span className="caption">Phone Number:</span>
                              <span className="value font-semibold pl-1">{billingPhoneNumber}</span>
                            </div>
                            <div className="contact-number font-roboto text-base text-accent pl-4">
                              <span className="caption">Landmark:</span>
                              <span className="value font-semibold pl-1">{billingLandmark}</span>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-1 col-span-2">
                          <div className="payment-method pb-5">
                            <div className="heading bg-secondary font-semibold text-white text-base font-roboto mb-2 py-1 pl-4">
                              Payment Method
                            </div>
                            <div className="name font-roboto text-base text-accent pl-4">
                              <span className="value font-semibold pl-1">{pastOrderDetail?.paymentMode}</span>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-1 col-span-2">
                          <div className="order-date pb-5">
                            <div className="heading bg-secondary font-semibold text-white text-base font-roboto mb-2 py-1 pl-4">
                              Order Date & Time
                            </div>
                            <div className="name font-roboto text-base text-accent pl-4 mb-10 pb-5">
                              <div className="value font-semibold pl-1">Date: {formattedDate}</div>
                              <div className="value font-semibold pl-1">Time: {formattedTime}</div>
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
                  <Table className=' '>
                    <TableHeader className=' bg-secondary hover:bg-secondary '>
                      <TableRow className=' hover:bg-secondary '>
                        <TableHead className="w-[100px] text-white font-roboto font-semibold text-base">S.No</TableHead>
                        <TableHead className=' text-white font-roboto font-semibold text-base'>Image</TableHead>
                        <TableHead className=' text-white font-roboto font-semibold text-base'>Name</TableHead>
                        <TableHead className=' text-white font-roboto font-semibold text-base whitespace-nowrap'>Ring Size</TableHead>
                        {/* <TableHead className=' text-white font-roboto font-semibold text-base whitespace-nowrap'>Engraving Text</TableHead> */}
                        <TableHead className=' text-white font-roboto font-semibold text-base whitespace-nowrap'>Engraving Text</TableHead>
                        {/* <TableHead className=' text-white font-roboto font-semibold text-base whitespace-nowrap'>Purity</TableHead> */}
                        <TableHead className=' text-white font-roboto font-semibold text-base'>Quantity</TableHead>
                        <TableHead className=" text-white font-roboto font-semibold text-base text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className='border-b border-[#e5e5e5]'>
                      {
                        pastOrderDetail?.orderitems?.map((item, index) => (
                          <TableRow key={item.id}>
                            <TableCell className="text-accent font-roboto font-semibold text-base ">{index + 1}</TableCell>
                            <TableCell>
                              <Image src={`${PRODUCT_MEDIA}/${item.image}`} alt='' width={85} height={85} />
                            </TableCell>
                            <TableCell className='text-accent font-roboto font-semibold text-base whitespace-nowrap'>{item?.name}</TableCell>
                            <TableCell className='text-accent font-roboto font-semibold text-base whitespace-nowrap'>{item?.ringSize}</TableCell>
                            <TableCell className='text-accent font-roboto font-semibold text-base whitespace-nowrap'>{item?.engravingText}</TableCell>
                            {/* <TableCell className='text-accent font-roboto font-semibold text-base whitespace-nowrap'>{item?.metalType}</TableCell> */}
                            <TableCell className='text-accent font-roboto font-semibold text-base'>{item?.quantity}</TableCell>
                            <TableCell className='text-accent font-roboto font-semibold text-base'>
                              <div className="flex items-center justify-end">
                                <span className=""><IndianRupee width={14} /></span>
                                <span>{item?.price}</span>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      }

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
                  <div className="sub-total flex pb-3 justify-between px-2 font-roboto text-[#4b4537]">
                    <div>Making Charges:</div>
                    <div className="flex items-center">
                      <span className=""><IndianRupee width={14} /></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="total-price flex font-semibold pt-3 pb-5 border-t border-secondary justify-between px-2 font-roboto text-[#4b4537]">
                    <div>Grand Total:</div>
                    <div className="flex items-center">
                      <span className="svg-stroking"><IndianRupee width={14} /></span>
                      <span></span>
                    </div>
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