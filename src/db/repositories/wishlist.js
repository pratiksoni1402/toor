import prisma from "@/db";
import { getSession } from "@/lib/session";
import { getSessionId } from "@/lib/session";
export const wishlistSelect = {
  id: true,
  productId: true,
  sku: true,
  ringSize: true,
  engravingText: true,
  quantity: true,
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

// Adding Products to wishlist
export async function AddToWishlist(requestBody) {
  console.log("RB", requestBody)
  const sessionId = await getSessionId();
  const sessionEmail = await getSession();

  const wishlist = await prisma.wishlist.create({
    data: {
      productId: requestBody.id || requestBody.productId,
      sku: requestBody.sku,
      quantity: requestBody.quantity,
      ringSize: requestBody.ringSize,
      engravingText: requestBody.engravingText,
      sessionId: sessionId,
      sessionEmail: sessionEmail.user?.email,
    },
  });

  console.log("Wishlist data in table with session id", { wishlist });
  return wishlist
}
// End

// Fetch products from wishlist
export async function GetDataFromWishlist() {
  const sessionEmail = await getSession();
  const getData = await prisma.wishlist.findMany({
    where: {
      sessionEmail: sessionEmail.user?.email,
    },
    include: {
      product: true,
    },

  });
  console.log("Getting data from wishlist", { getData });
  return getData
}
// End

// Delete Product from Wishlist
export async function DeleteFromWishlist(requestBody) {
  console.log("SKU in final stage", requestBody)
  const sessionEmail = await getSession();
  const deleteProduct = await prisma.wishlist.delete({
    where: {
      sessionEmail: sessionEmail?.user?.email,
      sku: requestBody.sku
    }
  })
  console.log("Product Removed Successfullt", deleteProduct)
  return deleteProduct
}
// End

