import prisma from "@/db";

export const productSelect = {
  id: true,
  sku: true,
  name: true,
  total_weight: true,
  making_charges_per_gram: true,
  gold_rate: true,
  price: true,
  description: true,
  filter_by_gender: true,
  metal_type: true,
  metal_color: true,
  sale_price: true,
  ring_size: true,
  type: true,
  image: true,
}

export async function Products() {
 return await prisma.$queryRawUnsafe(`SELECT * FROM product`);
}

