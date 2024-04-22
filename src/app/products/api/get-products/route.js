export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { Products } from "@/db/repositories/product";

export async function POST(request) {
  const requestBody = await request.json();
  console.log("Received data from URL in requestBody", requestBody)
  let filters = {}
  let style = requestBody?.style

  console.log("requestbody", requestBody)

  if (requestBody?.filters?.gender) {
    filters.gender = requestBody.filters.gender
  }

  if (requestBody?.filters['metal-type']) {
    filters['metal-type'] = requestBody.filters['metal-type']
  }

  if (requestBody?.filters['metal-color']) {
    filters['metal-color'] = requestBody.filters['metal-color']
  }

  if (requestBody?.filters['price']) {
    filters['price'] = requestBody.filters['price']
  }

  if (requestBody?.filters['weight']) {
    filters['weight'] = requestBody.filters['weight']
  }

  const allProduct = await Products(filters, style);
  return Response.json({ allProduct });

}