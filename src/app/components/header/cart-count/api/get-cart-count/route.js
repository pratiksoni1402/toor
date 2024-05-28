import prisma from "@/db";

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { getSessionId } from "@/lib/session";
export async function GET() {
  const sessionId = await getSessionId();
  const getCartCount = await prisma.cart.count({
    where: {
      sessionId: sessionId,
    },
  })
  console.log("Cart Count fetched Successfully");
  return Response.json({ getCartCount })
}