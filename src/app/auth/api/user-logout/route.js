export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { getSession } from "@/lib/session";
export async function POST() {
  const session = await getSession();
  if (session?.user) {
    session.user = null
  }
  await session.save()
  return Response.json({successMessage: 'Logged out Successfully'})
}