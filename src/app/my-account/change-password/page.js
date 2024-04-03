export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import Updatepassword from "../_components/update-password";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
export default async function Changepassword() {
  const session = await getSession();
  console.log("this is session", session);

  if (!session.user) {
    return redirect('/auth/login')
  }
  
  return (
    <div>
      <Updatepassword/>
    </div>
  )
}