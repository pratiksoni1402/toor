export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { getSession } from "@/lib/session";
export async function GET(){
  const session = await getSession();
  return Response.json({ session })
}