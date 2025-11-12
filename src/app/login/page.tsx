import LoginHeader from './components/LoginHeader';
import LoginForm from './components/LoginForm';
import SignupLink from './components/SignupLink';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50 p-8">
        <LoginHeader />
        <LoginForm />
        <SignupLink />
      </div>
    </div>
  );
}