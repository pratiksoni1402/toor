export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { GetProductFromCart } from "@/db/repositories/cart";
export async function GET() {
  const getCartProduct = await GetProductFromCart();
  return Response.json({ getCartProduct });
}