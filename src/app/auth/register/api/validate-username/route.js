export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from "@/db";
import { NextResponse } from 'next/server';
export async function POST(request) {
  let isUsernameTaken
  try {
    const requestBody = await request.json();
    if (fnSuccess == true) {
      isUsernameTaken = await prisma.useraccount.findFirst({
        where: {
          userName: requestBody.userName,
        }
      })
        .catch((error) => {
          fnSuccess = false
          return null
        })
    }
    if (fnSuccess) {
      if (isUsernameTaken) {
        fnSuccess = false
        message = 'Username already Taken'
      }
    }

  } catch (error) {
    console.log("Error Ocurred", error)
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
      data: null
    }
  }

  return NextResponse.json({ ...responseData });
}