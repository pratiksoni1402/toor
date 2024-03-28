'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import './style.css'
export default function Updatepassword() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div className="update-password-component">
      <div className="form-wrapper">
      <div className='heading'>
          <h1>Update Password</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="password" placeholder="Old Password" {...register("Old Password", { required: true })} />
          <input type="password" placeholder="New Password" {...register("New Password", { required: true })} />
          <input type="password" placeholder="Confirm Password" {...register("Confirm Password", { required: true })} />

          <Button type="submit">Update Password</Button>
        </form>
      </div>
    </div>
  )
}