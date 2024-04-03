'use client'
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import RegisterForm from "./_components";
export default function UserRegistrationForm() {
  return (
    <div className="user-registration-page">
      <div className="container">
      <RegisterForm />
      </div>
    </div>
  )
}
