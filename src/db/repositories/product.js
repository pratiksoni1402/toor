import prisma from "@/db";

export const productSelect = {
  id: true,
  categoryId: true,
  sku: true,
  name: true,
  filterByStyle: true,
  totalWeight: true,
  makingChargesPerGram: true,
  goldRate: true,
  price: true,
  description: true,
  filterByGender: true,
  metalType: true,
  metalColor: true,
  ringSize: true,
  type: true,
  image: true,
}

export async function Products(filters = {}, style) {
  console.log('Style in final stage', style)
  console.log('This is filter', filters)
  let where = `1=1`;


  // Gender Query
  if (filters?.gender) {
    where += ` AND filter_by_gender = '${filters.gender}'`;
  }
  // End

  // Filter by Price
  if (filters['price']) {
    where += `AND price  >= '${filters['price'].split(',')[0]}' AND price <= '${filters['price'].split(',')[1]}'`;
  }
  // End

  // Metal Type Query 
  if (filters['metal-type']) {
    where += ` AND metal_type IN (${filters['metal-type'].split(',').map(v => `'${v}'`).join(',')})`;
  }
  // End

  // Metal Color Query
  if (filters['metal-color']) {
    where += `AND metal_color in (${filters['metal-color'].split(',').map(x => `'${x}'`).join(',')})`;
  }
  // End

  // Filter by Weight
  if (filters['weight']) {
    where += `AND total_weight >= '${filters['weight'].split(',')[0]}' AND total_weight <= '${filters['weight'].split(',')[1]}'`;
  }
  // End

    return await prisma.$queryRawUnsafe(`SELECT *  FROM product WHERE ${where} `);
}

