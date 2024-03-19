export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { Products } from "@/db/repositories/product";

export async function POST(request) {
  const requestBody = await request.json();
  console.log("This is requestbody", requestBody)
  let filters = {}

  console.log("requestbody", requestBody)

  if (requestBody?.filters?.gender) {
    filters.gender = requestBody.filters.gender
  }

  const allProduct = await Products(filters);
  return Response.json({ allProduct });

}