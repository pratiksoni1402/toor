export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { DeleteProductFromCart } from "@/db/repositories/cart";
export async function POST(request) {
  const requestBody = await request.json();
  const deleteProduct = await DeleteProductFromCart(requestBody);
  return Response.json({ deleteProduct });
}