export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { DeleteFromWishlist } from "@/db/repositories/wishlist";
export async function POST(request) {
  const requestBody = await request.json();
  const receivedData = await DeleteFromWishlist(requestBody);
  return Response.json({ receivedData });
}
