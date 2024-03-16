export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { Categories } from "@/db/repositories/categories";
export async function GET() {
  const categoryImages = await Categories();
  return Response.json({ categoryImages });
}