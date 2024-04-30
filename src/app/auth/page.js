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
          <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 ">
            <div className="component-wrapper h-full mt-10">
              <Login />
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2">
            <div className="component-wrapper xl:border-l lg:border-l lg:border-t-0 md:border-t sm:border-t border-t">
              <UserRegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}