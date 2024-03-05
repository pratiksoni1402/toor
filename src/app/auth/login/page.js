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
    <div className="login-page">
      <div className='container'>
        <section>
          <div className="login-form-wrapper">
            <div className="login-form">
              <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col w-1/2 mx-auto'>
                <input type="text" placeholder="Username / Email" {...register("username", { required: true })} />
                <input type="password" placeholder="Password" {...register("password", { required: true, minLength: 8 })} />
                <Button type="submit">Login</Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}