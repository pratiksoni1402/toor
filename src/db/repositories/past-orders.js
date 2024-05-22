import prisma from "@/db";
import { getSession } from "@/lib/session";
export const PastOrderDetails = {
  id: true,
  orderId: true,
  orderDate: true,
  paymentMethod: true,
  totalAmount: true,

}

export async function GetAllPastOrders() {
  const sessionEmail = await getSession();
  const orderDetail = await prisma.orders.findMany({
    where: {
      sessionEmail: sessionEmail.user.email,
    },
    select:{
      id: true,
      paymentMode: true,
      total:true,
      orderDate:true, 
    },
  })
  console.log("Detail fetched Successfully");
  return orderDetail
}