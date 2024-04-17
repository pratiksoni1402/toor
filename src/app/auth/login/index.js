export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import SingleSignIn from "./_components/sso-login";
import LoginUser from "./_components/authentication";
export default function Login() {
  return (
    <div className="login-page">
      <div className="background-image">
          <div className="component-wrapper">
            <SingleSignIn />
          </div>
          <div className="component-wrapper">
            <LoginUser />
          </div>
      </div>
    </div>
  )
}