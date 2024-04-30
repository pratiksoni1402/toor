export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from "@/db";
import { NextResponse } from 'next/server';
export async function POST(request) {
  let isUserRegistered
  let fnSuccess = true
  let message = null
  let responseData = {}

  try {
    const requestBody = await request.json();

    // Validate Email Address
    if (fnSuccess == true) {
      isUserRegistered = await prisma.useraccount.findFirst({
        where: {
          email: requestBody.email,
        }
      })
        .catch((error) => {
          fnSuccess = false
          return null
        })
    }

    if (fnSuccess) {
      if (isUserRegistered) {
        fnSuccess = false
        message = 'Email Already Exist'
      }
    }
    // End

  } catch (error) {
    // console.log("Error occured", error)
  }

  if (fnSuccess) {
    responseData = {
      success: true,

      message: message,
      data: {
        //
      }
    }
  } else {
    responseData = {
      success: false,
      message: message,
      // data: null
    }
  }

  return NextResponse.json({ ...responseData });
}