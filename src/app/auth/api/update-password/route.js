export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from '@/db';
import { getSession } from '@/lib/session';
import bcrypt from 'bcrypt';
export async function POST(request) {
  const session = await getSession();
  const requestBody = await request.json();
  console.log("Session", session);
  console.log("Request Body", requestBody);

  // Get old password from database
  const matchPassword = await prisma.useraccount.findFirst({
    where: {
      email: session.user?.email,
    },
    select: {
      password: true,
    }
  })
  // End
  console.log("old password", matchPassword)

  // Comparing old password with database
  const comparePassword = await bcrypt.compare(requestBody.oldPassword, matchPassword.password)
  console.log(comparePassword)

  // Returning error if old password is wrong
  if (!comparePassword) {
    return Response.json({ errorMessage: 'Old Password Does not match' });
  }
  // End

  // Excrypting the new password
  const saltRound = 14;
  const encryptPassword = await bcrypt.hash(requestBody.newPassword, saltRound);
  // console.log("New password encrypted", encryptPassword);
  // End

  if (comparePassword && encryptPassword) {
    const updatePassword = await prisma.useraccount.update({
      where: {
        email: session.user?.email,
      },
      data: {
        password: encryptPassword,
      },
    })
    return Response.json({ successMessage: 'Password changed successfully' })
  }

  return Response.json({})
}