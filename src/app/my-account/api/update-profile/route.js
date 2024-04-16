export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from '@/db';
export async function POST(request){
  const requestBody = await request.json();
  console.log("Request Body", requestBody);
  // const updateProfile = await prisma.credentials.findFirst({

  // })
}