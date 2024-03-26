'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import './style.css'
export default function Userdetails() {

  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  // Handle Toggle of Billing Details
  const handleSwitchToggle = () => {
    setShowForm(!showForm);
  }
  // End
  return (
    <div className="user-details-component">
      <div className='form-wrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className='Shipping-detail-form'>
            <div className='title text-accent text-2xl font-crimson'>Shipping Detail</div>
            <input type="text" placeholder="First Name" {...register("firstName", { required: true })} />
            <input type="text" placeholder="Last Name" {...register("Last Name", { required: true })} />
            <input type="email" placeholder="Email " {...register("Email ", {
              required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
            })} />
            <input type="text" placeholder="Address Line One" {...register("Address Line One", { required: true })} />
            <input type="text" placeholder="Address Line Two" {...register("Address Line Two", {})} />
            <div className='grid grid-cols-2 gap-5'>
              <div className='col'>
                <select {...register("Country", { required: true })}>
                  <option value="country">Select Country</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className='col'>
                <select {...register("State", { required: true })}>
                  <option value="state">Select State</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <input type="text" placeholder="City" {...register("City", { required: true })} />
            <input type="text" placeholder="Nearest Landmark" {...register("Nearest Landmark", { required: true })} />
            <input type="text" placeholder="Phone Number" {...register("Phone Number", { required: true })} />
            <input type="text" placeholder="Area Pin Code" {...register("Area Pin Code", { required: true })} />
          </div>

          <div className='prompt-button my-5'>
            <div>
              <Label htmlFor="" className='text-base font-roboto text-accent'>Is Billing detail same as shipping detail ?</Label>
            </div>
            <div className="flex items-center font-roboto text-base py-3 text-accent">
              <span>Yes</span>
              <Switch id="airplane-mode" className='mx-2' checked={showForm} onClick={handleSwitchToggle} />
              <span>No</span>
            </div>
          </div>

          <div className='billing-detail-form'>
            {showForm && (
              <div className='Shipping-detail-form'>
                <div className='title text-accent text-2xl font-crimson'>Billing Detail</div>
                <input type="text" placeholder="First Name" {...register("firstName", { required: true })} />
                <input type="text" placeholder="Last Name" {...register("Last Name", { required: true })} />
                <input type="email" placeholder="Email " {...register("Email ", {
                  required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                })} />
                <input type="text" placeholder="Address Line One" {...register("Address Line One", { required: true })} />
                <input type="text" placeholder="Address Line Two" {...register("Address Line Two", {})} />
                <div className='grid grid-cols-2 gap-5'>
                  <div className='col'>
                    <select {...register("Country", { required: true })}>
                      <option value="country">Select Country</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className='col'>
                    <select {...register("State", { required: true })}>
                      <option value="state">Select State</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <input type="text" placeholder="City" {...register("City", { required: true })} />
                <input type="text" placeholder="Nearest Landmark" {...register("Nearest Landmark", { required: true })} />
                <input type="text" placeholder="Phone Number" {...register("Phone Number", { required: true })} />
                <input type="text" placeholder="Area Pin Code" {...register("Area Pin Code", { required: true })} />
              </div>
            )}
          </div>

          <div className='delivery-type '>
            <div className=''>
              <div className='title text-accent text-2xl font-crimson'>Choose Delivery Method</div>
            </div>
            <div className='flex items-center'>
              <input {...register("deliveryType", { required: true })} id='normal' type="radio" value="normal" />
              {/* <span class="custom-radio"></span> */}
              <label htmlFor="normal" class="flex hover:cursor-pointer font-roboto text-base items-center px-1">Express</label>
            </div>
            <div className='flex items-center'>
              <input {...register("deliveryType", { required: true })} id='express' type="radio" value=" express" />
              {/* <span class="custom-radio"></span> */}
              <label htmlFor="express" class="flex hover:cursor-pointer font-roboto text-base items-center px-1">Normal</label>
            </div>
          </div>

          <div className='payment-method'>
            <div className=''>
              <div className='title text-accent text-2xl font-crimson'>Choose Payment Method</div>
            </div>
            
          </div>

          <input type="submit" />
        </form>
      </div>
    </div >
  )
}