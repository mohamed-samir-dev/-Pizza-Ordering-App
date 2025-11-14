'use client'
import { FiUser } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LoginButton() {
  const router = useRouter();
  const [isFlashing, setIsFlashing] = useState(false);

  const handleLogin = () => {
    router.push('/login');
  };

  useEffect(() => {
    const handleFlashLogin = () => {
      setIsFlashing(true);
    };

    const handleStopFlash = () => {
      setIsFlashing(false);
    };

    window.addEventListener('flashLoginButton', handleFlashLogin);
    window.addEventListener('stopFlashLoginButton', handleStopFlash);
    return () => {
      window.removeEventListener('flashLoginButton', handleFlashLogin);
      window.removeEventListener('stopFlashLoginButton', handleStopFlash);
    };
  }, []);

  return (
    <button 
      onClick={() => {
        handleLogin();
        window.dispatchEvent(new Event('stopFlashLoginButton'));
      }}
      className={`hidden lg:flex bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl items-center space-x-2 cursor-pointer ${
        isFlashing ? 'animate-pulse ring-4 ring-orange-300' : ''
      }`}
    >
      <FiUser className="w-4 h-4" />
      <span>Login</span>
    </button>
  );
}