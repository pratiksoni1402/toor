'use client'
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Loader2Icon } from 'lucide-react'

import './style.css';

export default function RegisterForm() {
  const [loader, setLoader] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  // User Registration
  const onSubmit = (data) => {
    setLoader(true)
    if (data.password === data.confirmPassword) {
      setIsProcessing(true)
      axios.post('/auth/register/api/register-user', data)
        .then((response) => {
          if (response.data) {
            router.push('/my-account');
          } else {
            toast.error(response.data.message);
          }
        })
        .catch((error) => {
          console.log("Error", error)
        })
        .finally(() => {
          setLoader(false)
        })
    } else {
      toast.error('Password and Confirm Password Mismatch');
    }
  };
  // End

  // Checking Username
  const handleUsername = () => {
    const userNameValue = event.target.value
    console.log("User name value", userNameValue)
    axios.post('/auth/register/api/validate-username', { userName: userNameValue })
      .then((response) => {
        toast.error(response.data.message, {
          duration: 3000,
          style: {
            border: '1px solid #754b2f',
            padding: '8px',
            color: '#f0e6e0',
            backgroundColor: '#754b2f',
          },
          iconTheme: {
            primary: '#f0e6e0',
            secondary: '#754b2f',
          },
        })
      })
      .catch((error) => {
        console.log("Error Occured", error)
      })
  }
  // End

  // Checking Email Address
  const handleEmail = () => {
    const emailValue = event.target.value
    axios.post('/auth/register/api/validate-emailaddress', { email: emailValue })
      .then((response) => {
        toast.error(response.data.message, {
          duration: 3000,
          style: {
            border: '1px solid #754b2f',
            padding: '8px',
            color: '#f0e6e0',
            backgroundColor: '#754b2f',
          },
          iconTheme: {
            primary: '#f0e6e0',
            secondary: '#754b2f',
          },
        })
      })
      .catch((error) => {
        console.log("Error Ocurred", error)
      })
  }
  // End

  console.log(errors);
  return (

    <div className="create-account-page">
      <section className='pb-20'>
        <div className="register-form-wrapper lg:w-3/4 sm:w-3/4 w-full mx-auto">
          <div className="create-account-form">
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className='grid grid-cols-2 gap-5'>
                <div className='col'>
                  <div className='field-wrapper'>
                    <input type="text" placeholder="First Name" {...register("firstName", { required: true })} />
                    {errors.firstName && <span className='error-message'>This field is required</span>}
                  </div>
                </div>
                <div className='col'>
                  <div className='field-wrapper'>
                    <input type="text" placeholder="Last Name" {...register("lastName", { required: true })} />
                    {errors.lastName && <span className='error-message'>This field is required</span>}
                  </div>
                </div>
              </div>

              <div className='field-wrapper'>
                <input type="text" placeholder="Username" {...register("userName", { required: true, pattern: /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/ })} onBlur={(event) => handleUsername(event.target.value)} />
                {errors.userName && <span className='error-message'>This field is required</span>}
              </div>

              <div className='field-wrapper'>
                <input type="email" placeholder="Email" {...register("email", {
                  required: true, pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/i
                })} onBlur={(event) => handleEmail(event.target.value)} />
                {errors.email && <span className='error-message'>This field is required</span>}
              </div>

              <div className='field-wrapper'>
                <input type="password" placeholder="Password" {...register("password", { required: true, })} />
                {errors.password && <span className='error-message'>This field is required</span>}
              </div>

              <div className='field-wrapper'>
                <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: true, })} />
                {errors.confirmPassword && <span className='error-message'>This field is required</span>}
              </div>

              <div className='password-standard font-andika text-accent text-base leading-5 md:hidden'>
                <span className="block">Password must be minimum 8 characters long</span>
                <span className='block'>Password must contain numbers, alphabets, special characters</span>
              </div>
              {
                loader ? (
                  <Button type="submit" disabled={true}>
                    <Loader2Icon className='animate-spin mr-1' />
                    Register
                  </Button>
                ) : (
                  <Button type="submit">
                    Register
                  </Button>
                )
              }
            </form>
          </div>
        </div >
      </section >

    </div >
  )
}