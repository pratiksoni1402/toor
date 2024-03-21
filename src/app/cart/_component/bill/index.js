'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { IndianRupee } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function Bill() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div className="bill-component">
      <div className="border">
        <div className="summary text-center py-3">
          <span className="font-crimson text-accent font-semibold">Order Summary</span>
        </div>
        <div className="calculation px-5 pb-5 text-accent font-roboto text-base border-b">
          <div className="subtotal flex justify-between">
            <span>Subtotal:</span>
            <div className="flex items-center">
              <span><IndianRupee size={14} /></span>
              <span>579000</span>
            </div>
          </div>
          <div className="subtotal flex justify-between">
            <span>CGST:</span>
            <div className="flex items-center">
              <span><IndianRupee size={14} /></span>
              <span>2654</span>
            </div>
          </div>
          <div className="subtotal flex justify-between">
            <span>SGST:</span>
            <div className="flex items-center">
              <span><IndianRupee size={14} /></span>
              <span>4590</span>
            </div>
          </div>
          <div className="subtotal flex justify-between">
            <span>Making Charges:</span>
            <div className="flex items-center">
              <span><IndianRupee size={14} /></span>
              <span>9430</span>
            </div>
          </div>
          <div className="subtotal flex justify-between">
            <span>Coupan Discount:</span>
            <div className="flex items-center">
              <span><IndianRupee size={14} /></span>
              <span>430</span>
            </div>
          </div>
        </div>
        <div className='coupan-section px-5 pb-5 border-b'>
          <div className='heading font-crimson text-accent text-center pt-3 font-semibold'>
            <span>Coupan Code</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='font-roboto'>
            <input type="text" placeholder="Enter Coupan Code" {...register} className='block w-full outline-0 h-10 text-accent  my-2 border px-1 ' />
            <div className='flex gap-5'>
              <Button type='submit' className='rounded-none w-1/2'>Apply</Button>
              <Button type='submit' className='rounded-none w-1/2'>Remove</Button>
            </div>
          </form>
        </div>
        <div className="grand-total border-b flex justify-between px-5 py-5 text-accent font-roboto">
          <span className='font-semibold'>Grand Total:</span>
          <div className="flex items-center">
            <span><IndianRupee size={14} /></span>
            <span>430</span>
          </div>
        </div>
        <div className='checkout font-roboto w-full px-5 text-accent text-center mt-8 mb-4'>
          <Link href='' className='bg-primary block py-3'>Proceed to Checkout</Link>
        </div>
      </div>
    </div>
  )
}