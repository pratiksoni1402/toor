export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import Sidemenu from "./_components/side-menu";
import Profile from "./_components/profile";
import Updatepassword from "./_components/update-password";

export default function Myaccount() {
  return (
    <div>
      <Profile/>
    </div>
  )
}