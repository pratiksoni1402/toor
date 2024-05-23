export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { GetCartData } from "@/db/repositories/checkout";
export async function GET() {
  const getCartProduct = await GetCartData();
  return Response.json({ getCartProduct })
}