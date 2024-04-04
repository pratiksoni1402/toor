export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from "@/db";
import { NextResponse } from 'next/server';
import { getSession } from "@/lib/session";
import bcrypt from 'bcrypt';
export async function POST(request) {
  const session = await getSession();
  let isUserRegistered
  let isUsernameTaken
  let fnSuccess = true
  let message = null
  let response = {}
  let responseData = {}
  let registerUser= null

  try {
    const requestBody = await request.json();
    // const saltRound = 10;
    // const encryptedPassword = await bcrypt.hash(requestBody.password, saltRound);

    

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

    // Creating User Account
    if (fnSuccess) {
      registerUser = await prisma.useraccount.create({
        data: {
          firstName: requestBody.firstName,
          lastName: requestBody.lastName,
          userName: requestBody.userName,
          email: requestBody.email,
          password: requestBody.password,
          sessionEmail: requestBody.email,
        }
      });
    }
    // End

    // Creating User Session if User Registered Successfully
    if (fnSuccess) {
      if (registerUser) {
        session.user = {
          id: registerUser.id,
          firstname: registerUser.firstName,
        }
        await session.save();

        message="Registered successfully"
        console.log("This is session", session);


      } else {
        fnSuccess=false
        message="Unable to create an account"
      }
    }
    // End
    
  } catch (error) {
    console.log("Error occured", error)
  }

  if (fnSuccess) {
    responseData = {
      success:true,
    
      message:message,
      data: {
        //
      }
    }
  } else {
    responseData = {
      success: false,
      message: message,
      data:null
    }
  }

  return NextResponse.json({ ...responseData });
}