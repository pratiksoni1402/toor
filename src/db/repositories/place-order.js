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
  const sessionId = getSessionId();
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
    total_price: item.quantity * item.product.price * item.product.makingChargesPerGram,
  }));
  // End

  // Calculate Tax and total price
  const totalPrice = orderItems.reduce((acc, currentItem) => acc + currentItem.total_price, 0);
  const central = 9;
  const state = 9;
  const CGST = (totalPrice * central) / 100;
  const SGST = (totalPrice * state) / 100;
  const subTotal = (totalPrice - (CGST + SGST));
  // End

  // Inserting the order in Database
  const Orders = await prisma.orders.create({
    data: {
      shippingFirstName: requestBody.shipping_first_name,
      shippingLastName: requestBody.shipping_last_name,
      shippingAddressOne: requestBody.shipping_address_one,
      shippingAddressTwo: requestBody.shipping_address_two,
      shippingCountry: requestBody.shipping_country,
      shippingState: requestBody.shipping_state,
      shippingCity: requestBody.shipping_city,
      shippingPinCode: parseInt(requestBody.shipping_pincode),
      shippingLandmark: requestBody.shipping_landmark,
      shippingPhoneNumber: parseInt(requestBody.shipping_phone_number),
      billingFirstName: requestBody.billing_first_name || null,
      billingLastName: requestBody.billing_last_name || null,
      billingAddressOne: requestBody.billing_address_one || null,
      billingAddressTwo: requestBody.billing_address_two || null,
      billingCountry: requestBody.billing_country || null,
      billingState: requestBody.billing_state || null,
      billingCity: requestBody.billing_city || null,
      billingPinCode: parseInt(requestBody.billing_pincode) || null,
      billingLandmark: requestBody.billing_landmark || null,
      billingPhoneNumber: parseInt(requestBody.billing_phone_number) || null,
      paymentMode: requestBody.payment_mode,
      taxCgst: CGST,
      taxSgst: SGST,
      subtotal: subTotal,
      total: totalPrice,
      sessionEmail: sessionEmail.user_details?.email,
      orderitems: {
        create: orderItems,
      },
    },
  });
  // End

  return Response.json({ Orders });

}