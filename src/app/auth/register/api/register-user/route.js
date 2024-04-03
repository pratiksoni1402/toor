export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { NextResponse } from 'next/server';
import prisma from "@/db";
import { getSession } from "@/lib/session";
import bcrypt from 'bcrypt';
export async function POST(request) {
  const session = await getSession();
  let isUserRegistered
  let fnSuccess = true
  let message = null
  let response = {}
  let responseData = {}
  let registerUser= null

  try {
    const requestBody = await request.json();
    const saltRound = 17;
    const encryptedPassword = await bcrypt.hash(requestBody.password, saltRound);

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
        message = 'User already registered'
      }
    }


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