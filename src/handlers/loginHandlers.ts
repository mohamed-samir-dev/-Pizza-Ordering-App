import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks';

export const useLoginHandlers = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = (
    e: React.FormEvent,
    email: string,
    password: string,
    setError: (error: string) => void
  ) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (login(email, password)) {
      setTimeout(() => router.replace('/'), 0);
    } else {
      setError('Invalid email or password');
    }
  };

  return { handleLogin };
};