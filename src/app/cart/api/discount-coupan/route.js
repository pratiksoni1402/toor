export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { GetCoupanDiscount } from "@/db/repositories/coupan";
export async function GET() {
  const getDiscount = await GetCoupanDiscount();
  return Response.json({ getDiscount })
}