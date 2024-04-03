export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from "@/db";
import { getSession } from "@/lib/session";
import { getSessionId } from "@/lib/session";
import bcrypt from 'bcrypt';
export async function POST(request) {
  const session = getSession();
  try{
    const requestBody = await request.json();
    const saltRound = 17;
    const encryptedPassword = await bcrypt.hash(requestBody.password, saltRound);

    const registerUser = await prisma.useraccount.create({
      data: {
        firstName: requestBody.firstName,
        lastName: requestBody.lastName,
        userName: requestBody.userName,
        email: requestBody.email,
        password: encryptedPassword,
        sessionEmail: requestBody.email,
        sessionId: requestBody.firstName,
      }
    });

  
  }catch (error){

  }
  return Response.json({ });
}