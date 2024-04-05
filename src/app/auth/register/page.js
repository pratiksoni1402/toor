export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import SingleSignOn from "./_components/sso-user";
import RegisterForm from "./_components/new-user";
import './style.css'
export default function UserRegistrationForm() {
  return (
    <div className="user-registration-page bg-background">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-6 md:col-span-5 col-span-12 md:block sm:hidden hidden">
            <div className="instruction bg-white h-full flex flex-col justify-center ">
              <div className="mx-5">
                <h1 className="text-left font-crimson text-3xl text-primary">Instructions</h1>
              </div>
              <div className="mx-5">
                <ul className="list-inside list-disc font-roboto text-accent text-base">
                  <li>Password must be minimum 8 characters long</li>
                  <li>Password must contain numbers, alphabets, special characters</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 md:col-span-7 col-span-12">
            <div className="content-wrapper">
              <div className="component-wrapper pt-10">
                <SingleSignOn />
              </div>
              <div className="seperator">
                <h2 className="text-center font-crimson text-2xl text-primary">OR</h2>
                <span className="text-center font-roboto text-base block text-primary">Create New Account</span>
              </div>
              <div className="component-wrapper">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
