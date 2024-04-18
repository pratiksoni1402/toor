export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { getSession } from "@/lib/session";
export async function POST() {
  const session = await getSession();
  let loginStatus = 0;

  if (session?.user) {
    loginStatus = 1;
  }
  console.log("Checking Session", session);
  return Response.json({ loginStatus });
}