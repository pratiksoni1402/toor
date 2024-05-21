import prisma from "@/db";
import { getSession } from "@/lib/session";
export const placedOrder = {

}

export async function GetPlacedOrderReceipt(requestBody) {
  const sessionEmail = await getSession();
  console.log("id in final stage", requestBody)
  const fetchOrderDetail = await prisma.orders.findFirst({
    where: {
      // sessionEmail: sessionEmail?.user?.email
      id: parseInt(requestBody.params.id)
    },
    include: {
      orderitems: true,
    },
  })
  console.log("Order info fetched successfully", fetchOrderDetail)
  return fetchOrderDetail
}