export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import LoginUser from "./login/_components/authentication";
import UserRegistrationForm from "./register";
export default function AuthorizeUser() {
  return (
    <div className="authorization-page">
      <div className="container">
        <div className="grid grid-cols-2 gap-5">
          <div className="col">
            <div className="component-wrapper">
              <LoginUser />
            </div>
          </div>
          <div className="col">
            <div className="component-wrapper">
              <UserRegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}