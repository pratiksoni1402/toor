export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { GetAllPastOrders } from "@/db/repositories/past-orders";
export async function GET() {
  const getOrders = await GetAllPastOrders();
  return Response.json({ getOrders })
}