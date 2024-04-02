import prisma from "@/db";

export async function Countries() {
  return await prisma.$queryRaw`SELECT * FROM country`;
}

// export async function States() {
//   return await prisma.$queryRaw`SELECT name from state where countryname = 'India'`;
// }

