export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { GetPastOrdersDetails } from "@/db/repositories/past-orders";
export async function POST(request, { params }) {
  const requestBody = { params }
  const getDetail = await GetPastOrdersDetails(requestBody);
  return Response.json({ getDetail });
}