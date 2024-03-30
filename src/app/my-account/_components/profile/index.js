'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { ErrorMessage } from "@hookform/error-message";
import './style.css'
export default function Profile() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    criteriaMode: 'all',
  });
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div className="profile-component">
      <div className="profile-wrapper">
        <div className='heading'>
          <h1>Edit Profile</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="First Name" {...register("First Name", { required: true }) } />
          <input type="text" placeholder="Last Name" {...register("Last Name", { required: true })} />
          <input type="text" placeholder="Address Line One" {...register("Address Line One", { required: true })} />
          <input type="text" placeholder="Address Line Two" {...register("Address Line Two", {})} />
          <div className='grid grid-cols-2 sm:gap-5 gap-0'>
            <div className='sm:col-span-1 col-span-2'>
              <select {...register("Country", { required: true })}>
                <option value="Debit Card">Select Country</option>
                <option value=" Credit Card"> Credit Card</option>
                <option value=" UPI"> UPI</option>
                <option value=" Net Banking"> Net Banking</option>
                <option value=" Cash on Delivery"> Cash on Delivery</option>
              </select>
            </div>
            <div className='sm:col-span-1 col-span-2'>
              <select {...register("State", { required: true })}>
                <option value="Debit Card">Select State</option>
                <option value=" Credit Card">Credit Card</option>
                <option value=" UPI">UPI</option>
                <option value=" Net Banking">Net Banking</option>
                <option value=" Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>
          </div>

          <input type="text" placeholder="City" {...register("City", { required: true })} />
          <input type="text" placeholder="Landmark" {...register("Landmark", { required: true })} />
          <input type="text" placeholder="Phone Number" {...register("Phone Number", { required: true })} />
          <input type="text" placeholder="Area Pin Code" {...register("Area Pin Code", { required: true })} />
          <Button type="submit">Update Profile</Button>
        </form>
      </div>
    </div>
  )
}