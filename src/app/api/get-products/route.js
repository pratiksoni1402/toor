export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { Products } from "@/db/repositories/product";

export async function GET() {
  const trail = await Products();
  console.log({trail})
  return Response.json({ trail });
}