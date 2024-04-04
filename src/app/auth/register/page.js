export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import RegisterForm from "./_components/new-user";
export default function UserRegistrationForm() {
  return (
    <div className="user-registration-page">
      <div className="background-image" style={{
        backgroundImage: 'url("/uploads/images/all/auth-background.jpg")',
        width: '100%',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        
        <div className="container">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
