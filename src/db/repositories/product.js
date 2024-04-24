import prisma from "@/db";

export const productSelect = {
  id: true,
  categoryId: true,
  name: true,
  filterByStyle: true,
  price: true,
  image: true
}

export async function Products(filters = {}) {
  console.log('This is filter', filters)
  let where = `1=1`;


  if(filters?.style){
    where += ` AND filter_by_style = '${filters.style}'`;
  }
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

    return await prisma.$queryRawUnsafe(`SELECT id, name, price, image, filter_by_style AS filterByStyle FROM product WHERE ${where}`);

}

