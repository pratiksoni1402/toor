'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react'
import axios from 'axios';
import toast from 'react-hot-toast';

import './style.css'

export default function Updatepassword() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loader, setLoader] = useState(false);
  const onSubmit = (data) => {
    setLoader(true)
    if (data.newPassword === data.confirmPassword) {
      axios.post('/auth/api/update-password', data)
        .then((response) => {
          if (response.data.successMessage) {
            toast.success(response.data.successMessage)
          } else if (response.data.errorMessage) {
            toast.error(response.data.errorMessage)
          }
        })
        .catch((error) => {
          console.log("Error occured", error)
        })
        .finally(() => {
          setLoader(false);
        })
    } else {
      alert("failed")
    }
  }
  return (
    <div className="update-password-component min-h-screen">
      <div className="form-wrapper">
        <div className='heading'>
          <h1>Update Password</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="password" placeholder="Old Password" {...register("oldPassword", { required: true })} />
          <input type="password" placeholder="New Password" {...register("newPassword", { required: true })} />
          <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: true })} />

          {
            loader ? (
              <Button type="submit" disabled={true}>
                <Loader2Icon className='animate-spin mr-1' />
                Update Password
              </Button>
            ) : (
              <Button type="submit">
                Update Password
              </Button>
            )
          }
        </form>
      </div>
    </div>
  )
}