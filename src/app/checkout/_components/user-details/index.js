'use client'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './style.css'
export default function Userdetails() {
  const [showForm, setShowForm] = useState(false);
  const { register, setValue, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    axios.post('/checkout/api/place-order', data)
      .then((response) => {
        console.log("Order Placed", response.data.orderPlaced)
      })
      .catch((error) => {
        console.log("Error while placing order", error)
      })
  }

  // Handle Toggle of Billing Details
  const handleSwitchToggle = () => {
    setShowForm(!showForm);
  }
  // End

  // Fetch Country 
  const { isPending, data: fetchCountry, isError } = useQuery({
    queryKey: ['country'],
    queryFn: () =>
      axios.get('/api/common/get-country')
        .then((response) => {
          return response.data.getCountry
        })
        .catch((error) => {
          console.log("Error occured while fetching country", error)
        })
  })
  // End

  // Fetch Customer Detail To Prefill The Form
  const { data: userDetail } = useQuery({
    queryKey: ['customerData'],
    queryFn: () =>
      axios.get('/my-account/api/get-profile')
        .then((response) => {
          setValue('shippingFirstName', response.data.getUserProfile.firstName)
          setValue('shippingLastName', response.data.getUserProfile.lastName)
          setValue('shippingAddressLineOne', response.data.getUserProfile.addressLineOne)
          setValue('shippingAddressLineTwo', response.data.getUserProfile.addressLineTwo)
          setValue('shippingCountry', response.data.getUserProfile.country)
          setValue('shippingState', response.data.getUserProfile.state)
          setValue('shippingCity', response.data.getUserProfile.city)
          setValue('shippingNearestLandmark', response.data.getUserProfile.landmark)
          setValue('shippingPhoneNumber', response.data.getUserProfile.phoneNumber)
          setValue('shippingAreaPinCode', response.data.getUserProfile.pinCode)
          return response.data.getUserProfile
        })
        .catch((error) => console.log("Error while fetching data", error))

  })

  return (
    <div className="user-details-component">
      <div className='form-wrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className='Shipping-detail-form'>
            <div className='title text-accent text-2xl font-crimson'>Shipping Detail</div>
            <input type="text" placeholder="First Name" {...register("shippingFirstName", { required: true })} />
            {errors.shippingFirstName && <span className='error-message'>This field is required</span>}

            <input type="text" placeholder="Last Name" {...register("shippingLastName", { required: true })} />
            {errors.shippingLastName && <span className='error-message'>This field is required</span>}


            <input type="text" placeholder="Address Line One" {...register("shippingAddressLineOne", { required: true })} />
            {errors.shippingAddressLineOne && <span className='error-message'>This field is required</span>}

            <input type="text" placeholder="Address Line Two" {...register("shippingAddressLineTwo", {})} className='mb-5' />
            {errors.shippingAddressLineTwo && <span className='error-message'>This field is required</span>}

            <div className='grid grid-cols-2 gap-5'>
              <div className='sm:col-span-1 col-span-2'>

                <select {...register("shippingCountry", { required: true })}>
                  <option value="Female" disabled={true}>Select Country</option>
                  {
                    fetchCountry && fetchCountry?.map((country) => (
                      <option value={country.name} key={country.id} >{country.name}</option>
                    ))
                  }
                </select>
                {errors.shippingCountry && <span className='error-message'>This field is required</span>}

              </div>
              <div className='sm:col-span-1 col-span-2'>
                <input type="text" placeholder="State" {...register("shippingState", { required: true })} />

                {errors.shippingState && <span className='error-message'>This field is required</span>}

              </div>
            </div>
            <input type="text" placeholder="City" {...register("shippingCity", { required: true })} />
            {errors.shippingCity && <span className='error-message'>This field is required</span>}

            <input type="text" placeholder="Nearest Landmark" {...register("shippingNearestLandmark", { required: true })} />
            {errors.shippingNearestLandmark && <span className='error-message'>This field is required</span>}

            <input type="text" placeholder="Phone Number" {...register("shippingPhoneNumber", { required: true })} />
            {errors.shippingPhoneNumber && <span className='error-message'>This field is required</span>}

            <input type="text" placeholder="Area Pin Code" {...register("shippingAreaPinCode", { required: true })} />
            {errors.shippingAreaPinCode && <span className='error-message'>This field is required</span>}

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
                <input type="text" placeholder="First Name" {...register("billingFirstName", { required: true })} />
                {errors.firstName && <span className='error-message'>This field is required</span>}

                <input type="text" placeholder="Last Name" {...register("billingLastName", { required: true })} />
                {errors.firstName && <span className='error-message'>This field is required</span>}

                <input type="email" placeholder="Email " {...register("email ", {
                  required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                })} />
                {errors.firstName && <span className='error-message'>This field is required</span>}

                <input type="text" placeholder="Address Line One" {...register("billingAddressLineOne", { required: true })} />
                {errors.firstName && <span className='error-message'>This field is required</span>}

                <input type="text" placeholder="Address Line Two" {...register("billingAddressLineTwo", {})} />
                <div className='grid grid-cols-2 gap-5'>
                  <div className='sm:col-span-1 col-span-2'>
                    <select {...register("country", { required: true })}>
                      <option value="Female" disabled={true}>Select Country</option>
                      {
                        fetchCountry && fetchCountry?.map((country) => (
                          <option value={country.name} key={country.id} >{country.name}</option>
                        ))
                      }
                    </select>
                    {errors.firstName && <span className='error-message'>This field is required</span>}

                  </div>
                  <div className='sm:col-span-1 col-span-2'>
                    <input type="text" placeholder="State" {...register("billingState", { required: true })} />
                    {errors.state && <span className='error-message'>This field is required</span>}

                  </div>
                </div>
                <input type="text" placeholder="City" {...register("billingCity", { required: true })} />
                {errors.firstName && <span className='error-message'>This field is required</span>}

                <input type="text" placeholder="Nearest Landmark" {...register("billingNearestLandmark", { required: true })} />
                {errors.firstName && <span className='error-message'>This field is required</span>}

                <input type="text" placeholder="Phone Number" {...register("billingPhoneNumber", { required: true })} />
                {errors.firstName && <span className='error-message'>This field is required</span>}

                <input type="text" placeholder="Area Pin Code" {...register("billingAreaPinCode", { required: true })} />
                {errors.firstName && <span className='error-message'>This field is required</span>}

              </div>
            )}
          </div>

          <div className='payment-method'>
            <div className=''>
              <div className='title text-accent text-2xl font-crimson'>Choose Payment Method</div>
            </div>
            <div className='methods'>

              <div className='card-payment-method'>
                <div className='flex items-center'>
                  <input {...register("card")} id='card' name='payment-method-group' type="radio" value="testingThree" />
                  <label htmlFor="card" className=' hover:cursor-pointer px-1 font-roboto text-accent text-base'>Credit/Debit Card</label>
                </div>
              </div>

              <div className='cash-payment-method'>
                <input {...register("cash")} id='cod' name='payment-method-group' type="radio" value="testingTwo" />
                <label htmlFor="cod" className=' hover:cursor-pointer px-1 font-roboto text-accent text-base'>Cash on Delivery</label>
              </div>

            </div>
          </div>

          <div className='place-order-button'>
            <Button type="submit" className='w-full rounded-none bg-primary-foreground text-accent font-roboto text-base hover:bg-primary hover:text-white'>Place order </Button>
          </div>

        </form>
      </div>
    </div >
  )
}