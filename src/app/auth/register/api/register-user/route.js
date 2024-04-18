export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from "@/db";
import { NextResponse } from 'next/server';
import { getSession } from "@/lib/session";
import bcrypt from 'bcrypt';
export async function POST(request) {
  const session = await getSession();
  let fnSuccess = true
  let message = null
  let response = {}
  let responseData = {}
  let registerUser= null

  try {
    const requestBody = await request.json();
    const saltRound = 14;
    const encryptedPassword = await bcrypt.hash(requestBody.password, saltRound);

    // Creating User Account
    if (fnSuccess) {
      registerUser = await prisma.useraccount.create({
        data: {
          firstName: requestBody.firstName,
          lastName: requestBody.lastName,
          userName: requestBody.userName,
          email: requestBody.email,
          password: encryptedPassword,
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
          firstName: registerUser.firstName,
          lastName: registerUser.lastName,
          email: registerUser.sessionEmail,

        }
        await session.save();

        message="Registered successfully"
        console.log("This is session for user", session);


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