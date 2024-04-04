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

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  // User Registration
  const onSubmit = (data) => {
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
          setIsProcessing(false)
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
        toast.error(response.data.message)
      })
      .catch((error) => {
        console.log("Error Occured", error)
      })
  }
  // End

  // Checking Email Address
  const handleEmail = (event) => {
    const emailValue = event.target.value
    axios.post('/auth/register/api/register-user', { email: emailValue })
      .then((response) => {
        toast.error(response.data.message)
      })
      .catch((error) => {
        console.log("Error Ocurred", error)
      })
  }
  // End





  console.log(errors);
  return (

    <div className="create-account-page">
      <section>
        <div className="register-form-wrapper lg:w-2/5 md:w-1/2 sm:w-3/4 w-full mx-auto">

          <div className='heading'>
            <h1>
              Start your journey with exquisite jewelry.
            </h1>
          </div>
          <div className="create-account-form">
            <form onSubmit={handleSubmit(onSubmit)} className=''>

              <input type="text" placeholder="First Name" {...register("firstName", { required: true })} />
              {errors.firstName && <span className='error-message'>This field is required</span>}

              <input type="text" placeholder="Last Name" {...register("lastName", { required: true })} />
              {errors.lastName && <span className='error-message'>This field is required</span>}

              <input type="text" placeholder="Username" {...register("userName", { required: true, pattern: /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/ })} onBlur={(event) => handleUsername(event.target.value)} />
              {errors.userName && <span className='error-message'>This field is required</span>}

              <input type="email" placeholder="Email" {...register("email", {
                required: true, pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/i
              })} onBlur={handleEmail} />
              {errors.email && <span className='error-message'>This field is required</span>}

              <input type="password" placeholder="Password" {...register("password", { required: true, })} />
              {errors.password && <span className='error-message'>This field is required</span>}

              <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: true, })} />
              {errors.confirmPassword && <span className='error-message'>This field is required</span>}

              <div className='password-standard font-andika text-accent text-base leading-5'>
                <span className="block">Password must be minimum 8 characters long</span>
                <span className='block'>Password must contain numbers, alphabets, special characters</span>
              </div>
              {
                isProcessing ? (
                  <div className='w-full'>
                    <Button type="button" class="bg-indigo-500 ... w-full" disabled>
                      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

                      </svg>
                      Processing...
                    </Button>
                  </div>
                ) : (
                  <Button type="submit">Create Account</Button>
                )
              }
            </form>
          </div>
        </div >
      </section >

    </div >
  )
}