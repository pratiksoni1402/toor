export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { Details } from "@/db/repositories/detail";
export async function GET(request, { params }) {
  const paramsValue = await params.slug;
  console.log("This is params value in API", paramsValue)
  const productData = await Details(paramsValue)
  return Response.json({ productData })
}
