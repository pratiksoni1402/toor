import prisma from "@/db";

export const productSelect = {
  id: true,
  sku: true,
  name: true,
  description: true,
  filtebby_gender: true,
  metal_type: true,
  price: true,
  sale_price: true,
  metal_color: true,
  ring_size: true,
  total_weight: true,
  type: true,
}

export async function Products(){
  const getproduct = await prisma.$queryRawUnsafe(`SELECT * FROM `)
}

