export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { GetDataFromWishlist } from "@/db/repositories/wishlist";
export async function GET() {
  const wishlistItems = await GetDataFromWishlist();
  console.log("This is wishlist in route", wishlistItems)
  return Response.json({ wishlistItems });
}