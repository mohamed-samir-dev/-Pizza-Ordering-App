'use client'
import { useState, useEffect } from 'react';
import { FiUser, FiX } from 'react-icons/fi';

export function AuthToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleFlashLogin = (event: CustomEvent) => {
      setMessage(event.detail.message);
      setIsVisible(true);
    };

    window.addEventListener('flashLoginButton', handleFlashLogin as EventListener);
    
    return () => {
      window.removeEventListener('flashLoginButton', handleFlashLogin as EventListener);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-[60] bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-lg shadow-lg">
      <div className="flex items-center space-x-3">
        <FiUser className="w-5 h-5" />
        <span className="font-medium">{message}</span>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-2 hover:bg-white/20 rounded-full p-1"
        >
          <FiX className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}