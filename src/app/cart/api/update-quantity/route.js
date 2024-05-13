export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { UpdateProductQuantity } from "@/db/repositories/cart";
export async function POST(request) {
  const requestBody = await request.json();
  const getUpdatedQuantity = await UpdateProductQuantity(requestBody);
  return Response.json({ getUpdatedQuantity });
}