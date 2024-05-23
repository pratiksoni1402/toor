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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PRODUCT_MEDIA } from "@/lib/constants/images";
export default function OrderReceipt({ params }) {

  const { data: orderReceipt } = useQuery({
    queryKey: ['receipt'],
    queryFn: () =>
      axios.post(`/order-receipt/api/receipt/${params['id']}`)
        .then((response) => { return response.data.orderDetail })
        .catch((error) => console.log("Error", error))
  })

  console.log("Order Data", orderReceipt)
  console.log("Printing First Name", orderReceipt?.shippingFirstName ?? '')

  const orderDate = orderReceipt?.orderDate;
  if (orderDate) {
    const date = new Date(orderDate);

    // Format the date
    var formattedDate = `${date.toLocaleDateString()}`;
    var formattedTime = `${date.toLocaleTimeString()}`;

  }

  const fullName = orderReceipt?.shippingFirstName + ' ' + orderReceipt?.shippingLastName;
  const billingName = (orderReceipt?.billingFirstName ?? orderReceipt?.shippingFirstName) + ' ' + (orderReceipt?.billingLastName ?? orderReceipt?.shippingLastName);
  const billingAddress = (orderReceipt?.billingAddressOne ?? orderReceipt?.shippingAddressOne);
  const billingCountry = orderReceipt?.billingCountry ?? orderReceipt?.shippingCountry;
  const billingState = orderReceipt?.billingState ?? orderReceipt?.shippingState;
  const billingCity = orderReceipt?.billingCity ?? orderReceipt?.shippingCity;
  const billingPincode = orderReceipt?.billingPincode ?? orderReceipt?.shippingPincode;
  const billingPhoneNumber = orderReceipt?.billingPhoneNumber ?? orderReceipt?.shippingPhoneNumber;
  const billingLandmark = orderReceipt?.billingLandmark ?? orderReceipt?.shippingLandmark

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
                    <div className="order-status pl-4">
                      <h2 className=" font-crimson text-[#248232] pb-3 text-center pt-3 sm:text-3xl text-2xl">Thanks for your Order, {orderReceipt?.shippingFirstName}</h2>
                      <p className="text-base font-roboto text-accent">Tracking information will be emailed as soon as your order shipped.</p>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="order-number text-base pl-4 font-roboto text-accent">
                      <span>Order ID:</span>
                      <span className="font-semibold pl-1">{orderReceipt?.id}</span>
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
                              <span className="value font-semibold pl-1">{orderReceipt?.shippingAddressOne}</span>
                            </div>
                            <div className="state font-roboto text-base text-accent pl-4">
                              <span className="caption">Country:</span>
                              <span className="value font-semibold pl-1">{orderReceipt?.shippingCountry}</span>
                            </div>
                            <div className="state font-roboto text-base text-accent pl-4">
                              <span className="caption">State:</span>
                              <span className="value font-semibold pl-1">{orderReceipt?.shippingState}</span>
                            </div>
                            <div className="city font-roboto text-base text-accent pl-4">
                              <span className="caption">City:</span>
                              <span className="value font-semibold pl-1">{orderReceipt?.shippingCity}</span>
                            </div>
                            <div className="pincode font-roboto text-base text-accent pl-4">
                              <span className="caption">Pincode:</span>
                              <span className="value font-semibold pl-1">{orderReceipt?.shippingPincode}</span>
                            </div>
                            <div className="contact-number font-roboto text-base text-accent pl-4">
                              <span className="caption">Phone Number:</span>
                              <span className="value font-semibold pl-1">{orderReceipt?.shippingPhoneNumber}</span>
                            </div>
                            <div className="contact-number font-roboto text-base text-accent pl-4">
                              <span className="caption">Landmark:</span>
                              <span className="value font-semibold pl-1">{orderReceipt?.shippingLandmark}</span>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-1 col-span-2">
                          <div className="billing-address pb-5">
                            <div className="heading bg-secondary font-semibold text-white text-base font-roboto mb-2 py-1 pl-4">
                              Billing Address
                            </div>
                            <div className="name font-roboto text-base text-accent pl-4">
                              <span className="caption">Name:</span>
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
                              <span className="value font-semibold pl-1">{orderReceipt?.paymentMode}</span>
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
                      <TableRow className=' hover: bg-secondary'>
                        <TableHead className="w-[100px] text-white font-roboto font-semibold text-base">S.No</TableHead>
                        <TableHead className=' text-white font-roboto font-semibold text-base'>Image</TableHead>
                        <TableHead className=' text-white font-roboto font-semibold text-base'>Name</TableHead>
                        <TableHead className=' text-white font-roboto font-semibold text-base'>Ring Size</TableHead>
                        <TableHead className=' text-white font-roboto font-semibold text-base'>Engraving Text</TableHead>
                        <TableHead className=' text-white font-roboto font-semibold text-base'>Quantity</TableHead>
                        <TableHead className=" text-white font-roboto font-semibold text-base text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className='border-b border-[#e5e5e5]'>
                      {
                        orderReceipt?.orderitems?.map((items, index) => (

                          <TableRow key={orderReceipt.id}>
                            <TableCell className="text-accent font-roboto font-semibold text-base ">{index + 1}</TableCell>
                            <TableCell>
                              <Image src={`${PRODUCT_MEDIA}/${items?.image}`} alt='' width={75} height={75} />
                            </TableCell>
                            <TableCell className='text-accent font-roboto font-semibold text-base whitespace-nowrap'>{items?.name}</TableCell>
                            <TableCell className='text-accent font-roboto font-semibold text-base whitespace-nowrap'>{items?.ringSize}</TableCell>
                            <TableCell className='text-accent font-roboto font-semibold text-base whitespace-nowrap'>{items?.engravingText}</TableCell>
                            <TableCell className='text-accent font-roboto font-semibold text-base'>{items?.quantity}</TableCell>
                            <TableCell className='text-accent font-roboto font-semibold text-base'><div className="flex items-center justify-end">
                              <span className=""><IndianRupee width={14} /></span>
                              <span>{items?.price}</span>
                            </div></TableCell>
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
                      <span>{orderReceipt?.subTotal}</span>
                    </div>
                  </div>
                  <div className="sub-total flex py-2 justify-between px-2 font-roboto text-[#4b4537]">
                    <div>Central GST:</div>
                    <div className="flex items-center">
                      <span className=""><IndianRupee width={14} /></span>
                      <span>{orderReceipt?.taxCgst}</span>
                    </div>
                  </div>
                  <div className="sub-total flex pb-3 justify-between px-2 font-roboto text-[#4b4537]">
                    <div>State GST:</div>
                    <div className="flex items-center">
                      <span className=""><IndianRupee width={14} /></span>
                      <span>{orderReceipt?.taxSgst}</span>
                    </div>
                  </div>
                  <div className="sub-total flex pb-3 justify-between px-2 font-roboto text-[#4b4537]">
                    <div>Making Charges:</div>
                    <div className="flex items-center">
                      <span className=""><IndianRupee width={14} /></span>
                      <span>{orderReceipt?.makingCharges}</span>
                    </div>
                  </div>
                  <div className="total-price flex font-semibold pt-3 pb-5 border-t border-secondary justify-between px-2 font-roboto text-[#4b4537]">
                    <div>Grand Total:</div>
                    <div className="flex items-center">
                      <span className="svg-stroking"><IndianRupee width={14} /></span>
                      <span>{orderReceipt?.total}</span>
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