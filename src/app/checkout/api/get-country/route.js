export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

import { Countries } from "@/db/repositories/country-provience";
export async function GET(){
  const getCountry = await Countries();
  console.log("List of Countries", getCountry);
  return Response.json({getCountry});
}