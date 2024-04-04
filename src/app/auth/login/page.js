export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import LoginUser from "./_components/authentication";
export default function Login() {
  return (
    <div className="login-page">
      <div className="background-image" style={{
        backgroundImage: 'url("/uploads/images/all/auth-background.jpg")',
        width: '100%',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <div className="container">
          <LoginUser/>
        </div>
      </div>
    </div>
  )
}