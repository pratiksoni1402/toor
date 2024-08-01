'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div className="contact-form">
      <div className="container">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First Name" {...register("First Name", { required: true })} />
            <input type="text" placeholder="Last Name" {...register("Last Name", { required: true })} />
            <input type="email" placeholder="Email" {...register("Email", { required: true })} />
            <input type="text" placeholder="Subject" {...register("Subject", { required: true })} />
            <input type="text" placeholder="Message" {...register("Message", { required: true })} />

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}