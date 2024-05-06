export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { AddToWishlist } from "@/db/repositories/wishlist";
export default function POST(request) {
  const requestBody = request.json();
  console.log("Data from detail page", requestBody)
  return Response.json({})
}
