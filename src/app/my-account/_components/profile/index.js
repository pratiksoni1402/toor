'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import {  Loader2Icon } from 'lucide-react'
import './style.css'
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

  // Fetching States according to selected Country
  useEffect(() => {

    if (selectedCountry) {
      getStatesByCountry(selectedCountry);
    }
  }, [selectedCountry]);

  const getStatesByCountry = (selectedCountry) => {
    axios.post('/api/common/get-state', { country: selectedCountry })
      .then((response) => {
        return setProvince(response.data.getState)
      })
      .catch((error) => {
        console.log("Error while fetching state", error)
      })
  };
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
        console.log("Message", response.data.updateProfile)
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
              <select {...register("state", { required: true })}>
                <option value='Select State' >Select State</option>

                {
                  province && province.map((state) => (
                    <option value={state.name} key={state.id}>{state.name}</option>
                  ))
                }
              </select>
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