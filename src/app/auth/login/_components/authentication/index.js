'use client'
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from '@/db';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import axios from 'axios';
export default function LoginUser() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    axios.post('/auth/login/api/authorization', data)
      .then((response) => {
        console.log("Status OK", response.data.authorization)
      })
      .catch((error) => {
        console.log('Error occured while login', error)
      })

  }

  return (
    <div className="login-page">
      <section>
        <div className="login-form-wrapper lg:w-2/5 md:w-1/2 sm:w-3/4 w-full mx-auto">
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