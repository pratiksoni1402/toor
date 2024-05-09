import prisma from "@/db";
import { getSession } from "@/lib/session";
import { getSessionId } from "@/lib/session";
export const cartSelect = {
  id: true,
  productId: true,
  sku: true,
  ringSize: true,
  engravingText: true,
  sessionId: true,
  sessionEmail: true,
  product: {
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      totalWeight: true,
      metalType: true,
      metalColor: true,
      image: true,
    }
  }
}

// Add Product To Cart
export async function AddtoCart(requestBody) {
  const sessionId = await getSessionId();
  console.log("This is session id", sessionId)
  const addProduct = await prisma.cart.create({
    data: {
      productId: requestBody.id,
      sku: requestBody.sku,
      sessionId: sessionId,
    },
  })
  console.log("Successfully Added To cart", addProduct)
  return addProduct
}
// End

// Get Product From Cart Table
export async function GetProductFromCart() {
  const sessionId = await getSessionId();
  const fetchData = await prisma.cart.findMany({
    where: {
      sessionId: sessionId,
    },
    include:{
      product: true,
    },
  })
  console.log("Product Fetched Successfully", fetchData)
  return fetchData
}
// End