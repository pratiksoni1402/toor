import SingleSignOn from "./_components/sso-user";
import RegisterForm from "./_components/new-user";
import './style.css'
export default function UserRegistrationForm() {
  return (
    <div className="user-registration-page">
      <div className="grid grid-cols-1">
        <div className="lg:col-span-1 md:col-span-7 col-span-12">
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
  )
}
