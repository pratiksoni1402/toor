import prisma from "@/db";

export const wishlistSelect = {
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

export async function AddToWishlist(){
   
}