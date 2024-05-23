export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { PlacingOrder } from "@/db/repositories/place-order";
export async function POST(request) {
  const requestBody = await request.json();
  console.log("Data received Successfully", requestBody);
  const orderPlaced = await PlacingOrder(requestBody);
  return Response.json({ orderPlaced })
}