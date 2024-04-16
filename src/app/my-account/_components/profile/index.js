'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import './style.css'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ClipLoader } from 'react-spinners';
import { HeartIcon, Loader2Icon } from 'lucide-react'
export default function Profile() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [province, setProvince] = useState();
  const selectedCountry = watch("country");

  // Fetching Country List
  const { pending, data: countries, error } = useQuery({
    queryKey: ['countrylist'],
    queryFn: () =>
      axios.get('/api/common/get-country')
        .then((response) => {
          console.log("Countries", response.data.getCountry)
          return response.data.getCountry
        })
        .catch((error) => {
          console.log("Error Occured", error)
        })
  })
  // End
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
  const onSubmit = (data) => {
    axios.post('/my-account/api/update-profile', data)
      .then((response) => {
        console.log("Message", response.data.updateProfile)
      })
      .catch((error) => {
        console.log("Error Occured", error)
      })

  }

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
                {
                  countries?.map((country) => (
                    <option value={country.name} key={country.id}>{country.name}</option>
                  ))
                }
              </select>
            </div>

            <div className='sm:col-span-1 col-span-2'>
              <select {...register("State", { required: true })}>
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

          <input type="text" placeholder="Area Pin Code" {...register("areaPinCode", { required: true })} />
          {errors.areaPinCode && <span className='error-message'>This field is required</span>}

          <input type="text" placeholder="Landmark" {...register("landMark", { required: true })} />
          {errors.landMark && <span className='error-message'>This field is required</span>}

          <Button type="submit">
            <Loader2Icon className='animate-spin mr-1' />
            Update Profile
          </Button>

        </form>
      </div>
    </div>
  )
}