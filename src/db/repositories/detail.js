import prisma from "@/db";

export const selectDetail = {
  id: true,
  categoryId: true,
  name: true,
  description: true,
  sku: true,
  makingChargesPerGram: true,
  totalWeight: true,
  goldRate: true,
  price: true,
  metalType: true,
  metalColor: true,
  ringSize: true,
  isEngraveable:true,
  maximumEngravingCharacter:true,
  image: true
}

export async function Details(paramsValue) {
  console.log("Param value is in final stage", paramsValue);

  let where = `1 = 1`; 

  if (paramsValue) {
    where += ` AND sku = '${paramsValue}'`; 
  }
  
  try {
    const result = await prisma.$queryRawUnsafe(`SELECT id, name, description, price, making_charges_per_gram AS makingChargesPerGram, sku, total_weight AS totalWeight, gold_rate AS goldRate, metal_type AS metalType, metal_color AS metalColor, ring_size AS ringSize, image, is_engraveable AS isEngraveable, maximum_engraving_character AS maximumEngravingCharacter from product WHERE ${where}`);
    
    return result[0];
  } catch (error) {
    console.error("Raw query failed. Error:", error);
    throw error;
  }
}
