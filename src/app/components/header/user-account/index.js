'use client'
import Link from 'next/link';
import { CircleUserRound } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
export default function Useraccount() {

  // Checking user is logged in or not
  const { isPending, data: status, isError } = useQuery({
    queryKey: ['loginstatus'],
    queryFn: () =>
      axios.post('/auth/api/login-check')
        .then((response) => {
          console.log("auth data", response.data.loginStatus)
          return response.data.loginStatus
        })
        .catch((error) => {
          console.log("Error occured while checking status", error)
        })
  })
  // End

  // Get Session Data to Display
  const { pending, data: sessionData, error } = useQuery({
    queryKey: ['sessiondata'],
    queryFn: () =>
      axios.get('/auth/api/session-data')
        .then((response) => {
          return response.data.session
        })
        .catch((error) => {
          console.log("Error while fetching session data", error)
        })
  })
  // End

  // Extracting Firstname and lastname from session
  const fallbackFirstName = sessionData?.user?.firstName
  const fallbackLastName = sessionData?.user?.lastName
  // End

  // Concatenation Name First and Last character
  const shortName = fallbackFirstName?.charAt(0) + fallbackLastName?.charAt(0)
  // End

  return (
    <div className="user-account">
      <div className='wrapper'>
        {
          status ? (
            <Link href='/my-account' className=' flex flex-col justify-center items-center ml-1 pt-1'>
              <CircleUserRound size={22} />
              <span className='text-sm font-roboto hover:font-semibold  hover:underline  make-bold-props' title='My Account'>My Account</span>
            </Link>
          ) : (
            <Link href='/auth' className=' flex flex-col justify-center items-center ml-1 pt-1'>
              <CircleUserRound size={22} />
              <span className='text-sm font-roboto hover:underline  hover:font-semibold make-bold-props' title='My Account'>My Account</span>

            </Link>
          )
        }
      </div>
    </div>
  )
}