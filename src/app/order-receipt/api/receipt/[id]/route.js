export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { GetPlacedOrderReceipt } from "@/db/repositories/order-receipt";
export async function POST(request, { params }) {
  const requestBody = { params }
  console.log("Receipt id fetched successfully", requestBody);
  const orderDetail = await GetPlacedOrderReceipt(requestBody);
  return Response.json({ orderDetail });
}