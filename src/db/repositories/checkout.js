import prisma from "@/db";
import { getSession } from "@/lib/session";
import { getSessionId } from "@/lib/session";
export const Bag = {
  id: true,
  productId: true,
  sku: true,
  ringSize: true,
  engravingText: true,
  quantity: true,
  sessionId: true,
  sessionEmail: true,
}

export async function GetCartData() {
  const sessionId = await getSessionId();
  const getCartItems = await prisma.cart.findMany({
    where: {
      sessionId: sessionId,
    },
    select: {
      id: true,
      productId: true,
      sku: true,
      ringSize: true,
      engravingText: true,
      quantity: true,
      product: {
        select: {
          name: true,
          description: true,
          metalColor: true,
          metalType: true,
          price: true,
          image: true,
          totalWeight: true,
        }
      }
    }
  })
  console.log("Data Fetched Successfully", getCartItems)
  return getCartItems
}