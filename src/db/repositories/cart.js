import prisma from "@/db";
import { getSessionId } from "@/lib/session";
import { getSession } from "@/lib/session";
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
  const sessionEmail = await getSession();
  console.log("This is session id", sessionId)
  const addProduct = await prisma.cart.create({
    data: {
      productId: requestBody.id || requestBody.productId,
      sku: requestBody.sku,
      quantity: requestBody.quantity,
      ringSize: requestBody.ringSize,
      engravingText: requestBody.engravingText,
      sessionId: sessionId,
      sessionEmail: sessionEmail?.user?.email,
    },
  })
  console.log("Successfully Added To cart", addProduct)
  return addProduct
}
// End

// Get Product From Cart Table
export async function GetProductFromCart() {
  const sessionId = await getSessionId();
  const sessionEmail = await getSession();
  const fetchData = await prisma.cart.findMany({
    where: {
      sessionId: sessionId,
      sessionEmail: sessionEmail?.user?.email,
    },
    include: {
      product: true,
    },
  })
  console.log("Product Fetched Successfully", fetchData)
  return fetchData
}
// End

// Delete product From Cart
export async function DeleteProductFromCart(requestBody) {
  const sessionId = await getSessionId();
  const deleteItem = await prisma.cart.delete({
    where: {
      sessionId: sessionId,
      sku: requestBody.sku
    }
  })
  console.log("Product Deleted Successfully", { deleteItem })
  return deleteItem

}
// End

// Update Product Quantity
export async function UpdateProductQuantity(requestBody) {
  const updateQuantity = await prisma.cart.update({
    where: {
      id: requestBody.id,
    },
    data: {
      quantity: requestBody.quantity,
    }
  })
  console.log("Product Quantity Update Successfully", { updateQuantity })
  return updateQuantity
}
// End
