import prisma from "@/db";

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { getSessionId } from "@/lib/session";
export async function GET() {
  const sessionId = await getSessionId();
  const getWishlistCount = await prisma.wishlist.count({
    where: {
      sessionId: sessionId,
    },
  })
  console.log("Wishlist count fetched successfully", { getWishlistCount });
  return Response.json({ getWishlistCount });
}