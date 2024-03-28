'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import './style.css'
export default function Userdetails() {
  const [upiForm, setUpiForm] = useState(false);
  const [cardForm, setCardForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  // Handle Toggle of Billing Details
  const handleSwitchToggle = () => {
    setShowForm(!showForm);
  }
  // End

  const showUpiForm = () => {
    setUpiForm(!upiForm)
  }

  const showCardForm = () => {
    setCardForm(!cardForm)
  }

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
              <div className='sm:col-span-1 col-span-2'>
                <select {...register("Country", { required: true })}>
                  <option value="country">Select Country</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className='sm:col-span-1 col-span-2'>
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
                  <div className='sm:col-span-1 col-span-2'>
                    <select {...register("Country", { required: true })}>
                      <option value="country">Select Country</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className='sm:col-span-1 col-span-2'>
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

          <div className='payment-method'>
            <div className=''>
              <div className='title text-accent text-2xl font-crimson'>Choose Payment Method</div>
            </div>
            <div className='methods'>

              <div className='upi-payment-method'>
                <div>
                  <input {...register("testingOne")} id='upi' name='payment-method-group' type="radio" value="testingOne" onClick={showUpiForm}/>
                  <label htmlFor="upi" className=' px-1 font-roboto text-accent text-base'>UPI</label>
                </div>
                <div className='payment-form'>
                  {
                    upiForm && (
                      <div className='grid grid-cols-12 items-center'>
                        <div className='col-span-8'>
                          <input type="text" className='![border-r-0]' placeholder="Enter UPI/VPA" {...register("Enter UPI/VPA", {})} />
                        </div>
                        <div className='col-span-4'>
                          <Button className=' rounded-none bg-primary-foreground text-accent font-roboto text-base hover:bg-primary hover:text-white'>Verify</Button>
                        </div>


                      </div>
                    )}
                </div>
              </div>

              <div className='card-payment-method'>
                <div>
                  <input {...register("testingThree")} id='card' name='payment-method-group' type="radio" value="testingThree" onClick={showCardForm} />
                  <label htmlFor="card" className=' px-1 font-roboto text-accent text-base'>Credit/Debit Card</label>
                </div>
                <div className='payment-form'>
                  {
                    cardForm && (
                      <div className='card-payment mb-10'>
                        <div className='grid grid-cols-12'>
                          <div className='col-span-12'>
                            <input type="text" placeholder="Card Number" {...register("cardNumber", { required: true, pattern: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/i })} />
                            <input type="text" placeholder="Name on Card" {...register("nameOnCard", { required: true })} />
                          </div>
                          <div className='col-span-12'>
                            <div className='grid grid-cols-2 sm:gap-5 gap-0'>
                              <div className='sm:col-span-1 col-span-2'>
                                <input type="text" placeholder="Expiry Date" {...register("expiryDate", { required: true })} />
                              </div>
                              <div className='sm:col-span-1 col-span-2'>
                                <input type="text" placeholder="CVV" {...register("cvv", { required: true })} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>

              <div className='mb-10'>
                <input {...register("testingTwo")} id='cod' name='payment-method-group' type="radio" value="testingTwo" />
                <label htmlFor="cod" className=' px-1 font-roboto text-accent text-base'>Cash on Delivery</label>
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