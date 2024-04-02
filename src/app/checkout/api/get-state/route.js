
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from "@/db";
// import { States } from "@/db/repositories/country-provience";
export async function POST(request) {
  const requestBody = await request.json();
  console.log("This is request Body", requestBody.country);
  const getState = await prisma.state.findMany({
    where:{
      countryName: requestBody.country,
    },
  })
  console.log("This are states", getState);
  return Response.json({ getState });
}