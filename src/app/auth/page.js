export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import Login from "./login";
import UserRegistrationForm from "./register";
export default function AuthorizeUser() {
  return (
    <div className="authorization-page">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="col">
            <div className="component-wrapper h-full mt-10">
              <Login />
            </div>
          </div>
          <div className="col">
            <div className="component-wrapper border-l">
              <UserRegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}