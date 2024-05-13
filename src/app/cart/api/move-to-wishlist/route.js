export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { AddToWishlist } from "@/db/repositories/wishlist";
export async function POST(request) {
  const requestBody = await request.json();
  const moveProduct = await AddToWishlist(requestBody);
  return Response.json({ moveProduct })
}