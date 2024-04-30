export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { getSession } from "@/lib/session";
import Profile from "./_components/profile";
import { redirect } from "next/navigation";
export default async function Myaccount() {
  const session = await getSession();
  console.log("this is session", session);

  if (!session.user) {
    return redirect('/auth')
  }
  
  return (
    <div>
      <Profile />
    </div>
  )
}