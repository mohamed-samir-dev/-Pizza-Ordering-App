import SignupHeader from './components/SignupHeader';
import SignupForm from './components/SignupForm';
import LoginLink from './components/LoginLink';
import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata(
  'Sign Up',
  'Create your VivaCon Pizza account and enjoy exclusive offers, faster checkout, and order tracking'
);

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50 p-8">
        <SignupHeader />
        <SignupForm />
        <LoginLink />
      </div>
    </div>
  );
}