import prisma from "@/db";
import { getSession } from "@/lib/session";
import { getSessionId } from "@/lib/session";
export const OrderData = {
  id: true,
  shippingFirstName: true,
  shippingLastName: true,
  shippingAddressOne: true,
  shippingAddressTwo: true,
  shippingCountry: true,
  shippingState: true,
  shippingCity: true,
  shippingPincode: true,
  shippingLandmark: true,
  shippingPhoneNumber: true,
  billingFirstName: true,
  billingLastName: true,
  billingAddressOne: true,
  billingAddressTwo: true,
  billingCountry: true,
  billingState: true,
  billingCity: true,
  billingPincode: true,
  billingLandmark: true,
  billingPhoneNumber: true,
  paymentMode: true,
  subtotal: true,
  taxCgst: true,
  taxSgst: true,
  total: true,
  orderDate: true,
  sessionEmail: true,
}

export async function PlacingOrder(requestBody) {
  const sessionId = await getSessionId();
  const sessionEmail = await getSession();
  console.log("This is session Email", sessionEmail.user.email)
  let cartData = await prisma.cart.findMany({
    where: {
      sessionId: sessionId,
    },
    include: {
      product: {
        select: {
          name: true,
          price: true,
          metalColor: true,
          metalType: true,
          image: true,
          makingChargesPerGram: true,
          totalWeight: true,
          goldRate: true,
        }
      }
    }
  })
  console.log("Cart Data", cartData)

  //Storing Cart in Variable
  const orderItems = cartData.map(item => ({
    quantity: item.quantity,
    sku: item.sku,
    name: item.product.name,
    price: item.product.price,
    image: item.product.image,
    itemWeight: item.product.totalWeight,
    makingCharges: item.product.makingChargesPerGram * item.quantity * item.product.totalWeight,
    totalPrice: ((item.quantity * item.product.price) + (item.product.makingChargesPerGram * item.quantity)),
  }));
  // End

  console.log("This are the orders", { orderItems })
  // Calculate Tax and total price
  const grandTotal = orderItems.reduce((acc, currentItem) => acc + currentItem.price, 0);
  console.log("This is total price", grandTotal)

  const totalMakingCharges = orderItems.reduce((total, item) => total += item.makingCharges, 0);
  console.log("This is making charges",totalMakingCharges);


  const central = 1.5;
  const state = 1.5;

  const CGST = Math.floor((grandTotal * central) / 100);
  console.log("This is CGST", CGST)

  const SGST = Math.floor((grandTotal * state) / 100);
  console.log("This is SGST", SGST)

  const subTotal = Math.floor(grandTotal - (CGST + SGST) - totalMakingCharges);
  console.log("This is subtotal", subTotal)
  // End

  // Inserting the order in Database
  const Orders = await prisma.orders.create({
    data: {
      shippingFirstName: requestBody.shippingFirstName,
      shippingLastName: requestBody.shippingLastName,
      shippingAddressOne: requestBody.shippingAddressLineOne,
      shippingAddressTwo: requestBody.shippingAddressLineTwo,
      shippingCountry: requestBody.shippingCountry,
      shippingState: requestBody.shippingState,
      shippingCity: requestBody.shippingCity,
      shippingPincode: parseInt(requestBody.shippingPincode),
      shippingLandmark: requestBody.shippingLandmark,
      shippingPhoneNumber: parseInt(requestBody.shippingPhoneNumber),
      billingFirstName: requestBody.billingFirstName || null,
      billingLastName: requestBody.billingLastName || null,
      billingAddressOne: requestBody.billingAddressLineOne || null,
      billingAddressTwo: requestBody.billingAddressLineTwo || null,
      billingCountry: requestBody.billingCountry || null,
      billingState: requestBody.billingState || null,
      billingCity: requestBody.billingCity || null,
      billingPincode: parseInt(requestBody.billingPincode) || null,
      billingLandmark: requestBody.billingLandmark || null,
      billingPhoneNumber: parseInt(requestBody.billingPhoneNumber) || null,
      paymentMode: requestBody.paymentMode,
      subTotal: subTotal,
      taxCgst: CGST,
      taxSgst: SGST,
      makingCharges: totalMakingCharges,
      // totalPrice: grandTotal,
      total: grandTotal,
      sessionEmail: sessionEmail.user.email,
      orderitems: {
        create: orderItems,
      },
    },
  });
  // End

  return Response.json({ Orders });

}