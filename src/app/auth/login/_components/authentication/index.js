'use client'
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import './style.css';
export default function LoginUser() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const onSubmit = (data) => {
    axios.post('/auth/login/api/authorization', data)
      .then((response) => {
        if (response.data.successMessage) {
          router.push('/my-account')
        } else if (response.data.errorMessage) {
          console.log(response.data.errorMessage)
          toast.error(response.data.errorMessage,{
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
        }
      })
      .catch((error) => {
        console.log('Error occured while login', error)
      })

  }

  return (
    <div className="login-page">
      <section>
        <div className="login-form-wrapper  lg:w-3/4 sm:w-3/4 w-full mx-auto">
          <div className='heading'>
            <h1>
              Login Here.
            </h1>
          </div>
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)} className=''>
              <input type="text" placeholder="Username / Email" {...register("email", { required: true })} />
              <input type="password" placeholder="Password" {...register("password", { required: true })} />
              <Button type="submit">Login</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}