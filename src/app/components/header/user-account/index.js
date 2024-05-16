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
            <Link href='/my-account'>
              <Avatar>
                <AvatarFallback>{shortName || ''}</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <Link href='/auth'>
              <CircleUserRound />
            </Link>
          )
        }
      </div>
    </div>
  )
}