'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IndianRupee } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import BillingSkeleton from '../billing-skeleton';
import './style.css'
export default function Bill() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  let subTotal = 0;
  let grandTotal = 0;
  let taxRate = 1.5;
  let taxAmount = 0;
  let makingCharges = 0;
  let roundOffAmount = 0
  let amountDiscount = 0;


  const { data: billData } = useQuery({
    queryKey: ['totalAmount'],
    queryFn: () =>
      axios.get('/cart/api/get-data')
        .then((response) => {

          return response.data.getCartProduct
        })
        .catch((error) => {
          console.log("Error in Fetching Products", error)
        })
  })

  // const { data: discountCoupan } = useQuery({
  //   queryKey: ['coupan'],
  //   queryFn: () =>
  //     axios.get('/cart/api/discount-coupan')
  //       .then((response) => {
  //         if (response.data.getDiscount.autoApply == 1) {
  //           setValue('coupanCode', response.data.getDiscount.code)
  //         }
  //         return response.data.getDiscount
  //       })
  //       .catch((error) => {
  //         console.log("Error while applying coupan", error)
  //       })
  // })

  // console.log("Coupan Value", discountCoupan?.getDiscount?.type)


  {
    billData?.map((billing) => (
      grandTotal += billing?.product?.price * billing?.quantity,

      makingCharges += (billing?.product?.makingChargesPerGram * billing?.product?.totalWeight * billing?.quantity)

    ))
  }

  taxAmount += Math.round((grandTotal * taxRate) / 100)
  subTotal = Math.floor(grandTotal - (taxAmount * 2)) - makingCharges

  if (!billData) {
    return (
      <div>
        <BillingSkeleton />
      </div>
    )
  }

  return (
    <div className="total-bill-component border border-secondary mb-10">
      <div className="content-wrapper">
        <div className="summary">
          <span className="heading text-2xl">Order Summary</span>
        </div>
        <div className="calculation">
          <div className="subtotal">
            <span>Subtotal:</span>
            <div className="price flex items-center">
              <span><IndianRupee /></span>
              <span>{subTotal}</span>
            </div>
          </div>
          <div className="subtotal">
            <span>CGST:</span>
            <div className="price">
              <span><IndianRupee /></span>
              <span>{taxAmount}</span>
            </div>
          </div>
          <div className="subtotal">
            <span>SGST:</span>
            <div className="price">
              <span><IndianRupee /></span>
              <span>{taxAmount}</span>
            </div>
          </div>
          <div className="subtotal">
            <span>Making Charges:</span>
            <div className="price">
              <span><IndianRupee /></span>
              <span>{makingCharges}</span>

            </div>
          </div>
          {/* <div className="subtotal">
            <span>Coupan Discount:</span>
            <div className="price">
              <span><IndianRupee /></span>
              <span>{discountCoupan?.getDiscount?.value}</span>
            </div>
          </div> */}
        </div>
        {/* <div className='coupan-section'>
          <div className='heading pt-3'>
            <span>Coupan Code</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='form-wrapper'>
            <input type="text" placeholder="Enter Coupan Code" {...register('coupanCode')} />
            <div className='coupan-button'>
              <Button type='submit'>Apply</Button>
              <Button type='submit'>Remove</Button>
            </div>
          </form>
        </div> */}
        <div className="grand-total">
          <span className='caption'>Grand Total:</span>
          <div className="variation">
            <span><IndianRupee size={14} /></span>
            <span>{grandTotal}</span>
          </div>
        </div>
        <div className='checkout'>
          <Link href='/checkout' className='checkout-link'>Proceed to Checkout</Link>
        </div>
      </div>
    </div>
  )
}