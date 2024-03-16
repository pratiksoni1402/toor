import prisma from "@/db";

export async function Categories(){

  const trail =  await prisma.$queryRawUnsafe('SELECT * from mega_menu');
  console.log({trail})
  return trail;
}