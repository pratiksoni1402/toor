'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import './style.css'
export default function Profile() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div className="profile-component">
      <div className="profile-wrapper">
        <div className='heading'>
          <h1>Edit Profile</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>

          <input type="text" placeholder="First Name" {...register("firstName", { required: true })} />
          {errors.firstName && <span className='error-message'>This field is required</span>}

          <input type="text" placeholder="Last Name" {...register("lastName", { required: true })} />
          {errors.lastName && <span className='error-message'>This field is required</span>}

          <input type="text" placeholder="Address Line One" {...register("addressLineOne", { required: true })} />
          {errors.addressLineOne && <span className='error-message'>This field is required</span>}

          <input type="text" placeholder="Address Line Two" {...register("addressLineTwo", {})} />
          <div className='grid grid-cols-2 sm:gap-5 gap-0'>

            <div className='sm:col-span-1 col-span-2'>
              <select {...register("country", { required: true })}>
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

          <input type="text" placeholder="City" {...register("city", { required: true })} />
          {errors.city && <span className='error-message'>This field is required</span>}

          <input type="text" placeholder="Landmark" {...register("landMark", { required: true })} />
          {errors.landMark && <span className='error-message'>This field is required</span>}

          <input type="text" placeholder="Phone Number" {...register("phoneNumber", { required: true })} />
          {errors.phoneNumber && <span className='error-message'>This field is required</span>}

          <input type="text" placeholder="Area Pin Code" {...register("areaPinCode", { required: true })} />
          {errors.areaPinCode && <span className='error-message'>This field is required</span>}

          <Button type="submit">Update Profile</Button>
          
        </form>
      </div>
    </div>
  )
}