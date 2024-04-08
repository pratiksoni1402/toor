export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import LoginUser from "./_components/authentication";
export default function Login() {
  return (
    <div className="login-page">
      <div className="background-image h-screen">
        <div className="container">
          <LoginUser/>
        </div>
      </div>
    </div>
  )
}