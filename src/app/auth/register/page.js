'use client'
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div className="create-account-page" style={{
      backgroundImage: 'url(/uploads/images/auth/register-banner.jpeg)',
      width: '100%',
      height: '100vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className='container'>
        <section>
          <div className="register-form-wrapper lg:w-2/5 md:w-1/2 sm:w-3/4 w-full mx-auto">
            <div className='heading'>
              <h1 className=''>
                Start your journey with exquisite jewels.
              </h1>
            </div>
            <div className="create-account-form">
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                <input type="text" placeholder="First Name" {...register("firstName", { required: true })} />
                <input type="text" placeholder="Last Name" {...register("lastName", { required: true })} />
                <input type="text" placeholder="Username" {...register("username", { required: true })} />
                <input type="email" placeholder="Email" {...register("email", {
                  required: true, pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/i
                })} />
                <input type="password" placeholder="Password" {...register("password", { required: true, minLength: 8, maxLength: 20 })} />
                <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: true, minLength: 8, maxLength: 20 })} />
                <Button type="submit">Create Account</Button>
              </form>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}