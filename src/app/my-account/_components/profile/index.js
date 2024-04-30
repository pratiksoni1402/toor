'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Loader2Icon } from 'lucide-react'
import './style.css'
import toast from 'react-hot-toast';
export default function Profile() {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
  const [province, setProvince] = useState();
  const [updateProfile, setUpdateProfile] = useState(false);
  const selectedCountry = watch("country");

  // Fetching Country List
  const { pending, data: countries, error } = useQuery({
    queryKey: ['countrylist'],
    queryFn: () =>
      axios.get('/api/common/get-country')
        .then((response) => {
          return response.data.getCountry
        })
        .catch((error) => {
          console.log("Error Occured", error)
        })
  })
  // End

  // Fetching User Profile
  const { isPending, data: userProfile, isError } = useQuery({
    queryKey: ['profileData'],
    queryFn: () =>
      axios.get('/my-account/api/get-profile')
        .then((response) => {
          setValue('firstName', response.data.getUserProfile.firstName)
          setValue('lastName', response.data.getUserProfile.lastName)
          setValue('addressLineOne', response.data.getUserProfile.addressLineOne)
          setValue('addressLineTwo', response.data.getUserProfile.addressLineTwo)
          setValue('country', response.data.getUserProfile.country)
          setValue('state', response.data.getUserProfile.state)
          setValue('city', response.data.getUserProfile.city)
          setValue('pinCode', response.data.getUserProfile.pinCode)
          setValue('landmark', response.data.getUserProfile.landmark)
          setValue('phoneNumber', response.data.getUserProfile.phoneNumber)
          return response.data.getUserProfile
        })
        .catch((error) => {
          console.log("Error Occured", error)
        })
  })
  // End

  // Updating user profile
  const onSubmit = (data) => {
    setUpdateProfile(true)
    axios.post('/my-account/api/update-profile', data)
      .then((response) => {
        if (response.data.successMessage)
          toast.success(response.data.successMessage, {
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
      .finally(() => {
        setUpdateProfile(false)
      })
  }
  // End

  return (
    <div className="profile-component">
      <div className="profile-wrapper">
        <div className='heading'>
          <h1>Edit Profile</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>

          <input type="text" placeholder="First Name" {...register("firstName", { required: true })} />
          {errors.firstName && <span className='error-message'>This field is required</span>}

          <input type="text" placeholder="Last Name" {...register("lastName", { required: true })} />
          {errors.lastName && <span className='error-message'>This field is required</span>}

          <input type="text" placeholder="Address Line One" {...register("addressLineOne", { required: true })} />
          {errors.addressLineOne && <span className='error-message'>This field is required</span>}

          <input type="text" placeholder="Address Line Two" {...register("addressLineTwo", {})} />
          <div className='grid grid-cols-2 sm:gap-5 gap-0'>

            <div className='sm:col-span-1 col-span-2'>
              <select {...register("country", { required: true })}>
                <option value='Select Country' >Select Country</option>

                {
                  countries?.map((country) => (
                    <option value={country.name} key={country.id}>{country.name}</option>
                  ))
                }
              </select>
            </div>

            <div className='sm:col-span-1 col-span-2'>
              <input type="text" placeholder="State" {...register("state", { required: true })} />
              {errors.state && <span className='error-message'>This field is required</span>}
            </div>

          </div>

          <input type="text" placeholder="City" {...register("city", { required: true })} />
          {errors.city && <span className='error-message'>This field is required</span>}

          <input type="text" placeholder="Phone Number" {...register("phoneNumber", { required: true })} />
          {errors.phoneNumber && <span className='error-message'>This field is required</span>}

          <input type="text" placeholder="Area Pin Code" {...register("pinCode", { required: true })} />
          {errors.areaPinCode && <span className='error-message'>This field is required</span>}

          <input type="text" placeholder="Landmark" {...register("landmark", { required: true })} />
          {errors.landMark && <span className='error-message'>This field is required</span>}

          {
            updateProfile ? (
              <Button type="submit" disabled={true}>
                <Loader2Icon className='animate-spin mr-1' />
                Update Profile
              </Button>
            ) : (
              <Button type="submit">
                Update Profile
              </Button>
            )
          }

        </form>
      </div>
    </div>
  )
}