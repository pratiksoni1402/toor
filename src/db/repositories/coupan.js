import prisma from "@/db";
export const discountCoupan = {
  id: true,
  name: true,
  code: true,
  value: true,
  activeFrom: true,
  activeTill: true,
  type: true,
}

export async function GetCoupanDiscount() {
  const getCoupan = await prisma.coupan.find({
    where: {
      autoApply: 1, 
    },
  })
  console.log("Coupan Fetched Successfully", getCoupan)
  return getCoupan
}