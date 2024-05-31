'use client'
import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useForm } from 'react-hook-form';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './style.css'
import { useRouter } from 'next/navigation';
import { PaymentElement } from '@stripe/react-stripe-js';

export default function Userdetails() { //{ stripePromise }

  const [showForm, setShowForm] = useState(false);
  const { register, setValue, watch, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const watchPaymentMethod = watch("paymentMode")

  const onSubmit = (data) => {
    axios.post('/checkout/api/place-order', data)
      .then((response) => {
        router.push(`/order-receipt/${response.data.orderPlaced.id}`)
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
          setValue('shippingLandmark', response.data.getUserProfile.landmark)
          setValue('shippingPhoneNumber', response.data.getUserProfile.phoneNumber)
          setValue('shippingPincode', response.data.getUserProfile.pinCode)
          return response.data.getUserProfile
        })
        .catch((error) => console.log("Error while fetching data", error))

  })

  return (
    <div className="user-details-component">
      <div className='form-wrapper mx-5'>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className='Shipping-detail-form'>
            <div className='title text-primary text-2xl font-crimson py-3'>Shipping Detail</div>
            <input type="text" placeholder="First Name" {...register("shippingFirstName", { required: true })} />
            {errors.shippingFirstName && <span className='error-message'>This field is required</span>}

            <input type="text" placeholder="Last Name" {...register("shippingLastName", { required: true })} />
            {errors.shippingLastName && <span className='error-message'>This field is required</span>}


            <input type="text" placeholder="Address Line One" {...register("shippingAddressLineOne", { required: true })} />
            {errors.shippingAddressLineOne && <span className='error-message'>This field is required</span>}

            <input type="text" placeholder="Address Line Two" {...register("shippingAddressLineTwo", {})} className='mb-5' />
            {errors.shippingAddressLineTwo && <span className='error-message'>This field is required</span>}

            <div className='grid grid-cols-2 gap-5 my-3'>
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
                <input type="text" placeholder="State" {...register("shippingState", { required: true })} className='!my-0' />

                {errors.shippingState && <span className='error-message'>This field is required</span>}

              </div>
            </div>
            <input type="text" placeholder="City" {...register("shippingCity", { required: true })} />
            {errors.shippingCity && <span className='error-message'>This field is required</span>}

            <input type="text" placeholder="Nearest Landmark" {...register("shippingLandmark", { required: true })} />
            {errors.shippingNearestLandmark && <span className='error-message'>This field is required</span>}

            <input type="text" placeholder="Phone Number" {...register("shippingPhoneNumber", { required: true })} />
            {errors.shippingPhoneNumber && <span className='error-message'>This field is required</span>}

            <input type="text" placeholder="Area Pin Code" {...register("shippingPincode", { required: true })} />
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
                <div className='grid grid-cols-2 gap-5 my-3'>
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
                    <input type="text" placeholder="State" {...register("billingState", { required: true })} className='!my-0' />
                    {errors.state && <span className='error-message'>This field is required</span>}

                  </div>
                </div>
                <input type="text" placeholder="City" {...register("billingCity", { required: true })} />
                {errors.firstName && <span className='error-message'>This field is required</span>}

                <input type="text" placeholder="Nearest Landmark" {...register("billingLandmark", { required: true })} />
                {errors.firstName && <span className='error-message'>This field is required</span>}

                <input type="text" placeholder="Phone Number" {...register("billingPhoneNumber", { required: true })} />
                {errors.firstName && <span className='error-message'>This field is required</span>}

                <input type="text" placeholder="Area Pin Code" {...register("billingPincode", { required: true })} />
                {errors.firstName && <span className='error-message'>This field is required</span>}

              </div>
            )}
          </div>

          <div className='payment-method'>
            <div className=''>
              <div className='title text-accent text-2xl font-crimson'>Choose Payment Method</div>
            </div>
            <div className='methods'>

              <div>
                <input {...register("paymentMode", { required: true })} type="radio" id='debit-card' value="Debit Card" />
                <label htmlFor="debit-card" className='pl-1 font-roboto text-base text-accent hover:cursor-pointer'>Debit/Credit Card</label>
                {/* {
                  watchPaymentMethod == 'Debit Card' ? ( 
                    <PaymentElement />
                  ) : (
                    <></>
                  )
                } */}
              </div>
      
              <div>
                <input {...register("paymentMode", { required: true })} id='cod' type="radio" value=" Cash on Delivery" />
                <label htmlFor="cod" className='pl-1 font-roboto text-base text-accent hover:cursor-pointer'>Cash on Delivery</label>
              </div>

            </div>
          </div>

          <div className='place-order-button'>
            <Button type="submit" className='w-full rounded-none hover:bg-primary font-roboto text-base bg-secondary text-white mb-10 mt-7'>Place order </Button>
          </div>

        </form>
      </div>
    </div >
  )
}

// export default function CheckoutForm(props) {
//   const stripePromise = loadStripe(props.stripePublicKey)

//   return (
//     <Elements stripe={stripePromise} options={{
//       mode: 'setup',
//       currency: 'inr',
//     }}>
//       <Userdetails {...props} stripePromise={stripePromise} />
//     </Elements>

//   )
// }