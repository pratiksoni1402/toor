export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from '@/db';
import { getSession } from '@/lib/session';
export async function POST(request) {
  const session = await getSession();
  console.log("Update profile session", session);
  const requestBody = await request.json();
  console.log("Request Body", requestBody);
  const updateProfile = await prisma.useraccount.update({
    where: {
      email: session.user?.email,
    },
    data: {
      firstName: requestBody.firstName,
      lastName: requestBody.lastName,
      addressLineOne: requestBody.addressLineOne,
      addressLineTwo: requestBody.addressLineTwo,
      country: requestBody.country,
      state: requestBody.state,
      city: requestBody.city,
      phoneNumber: requestBody.phoneNumber,
      pinCode: parseInt(requestBody.pinCode),
      landmark: requestBody.landmark,
    },
  })
  return Response.json({successMessage: 'Profile updated successfully'});
}