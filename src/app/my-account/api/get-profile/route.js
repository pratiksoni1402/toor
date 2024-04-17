export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { getSession } from '@/lib/session';
import prisma from '@/db';
export async function GET() {
  const session = await getSession();
  console.log("This is session", session);
  const getUserProfile = await prisma.useraccount.findFirst({
    where: {
      email: session.user?.email,
    },
    select:{
      firstName: true,
      lastName: true,
      addressLineOne: true,
      addressLineTwo: true,
      country: true,
      state: true,
      city: true,
      pinCode: true,
      landmark: true,
      phoneNumber: true,
    },
  })
  console.log("This is user profile", getUserProfile)
  return Response.json({getUserProfile})
}