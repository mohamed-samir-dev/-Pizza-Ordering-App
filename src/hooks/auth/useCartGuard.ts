'use client'
import { useAuth } from './useAuth';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export function useCartGuard() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const checkAuthAndNavigate = useCallback((targetPath: string) => {
    if (!isAuthenticated) {
      // Trigger flash animation on login button
      const event = new CustomEvent('flashLoginButton', {
        detail: { message: 'Please log in to access your cart' }
      });
      window.dispatchEvent(event);
      return false;
    }
    
    router.push(targetPath);
    return true;
  }, [isAuthenticated, router]);

  return {
    isAuthenticated,
    checkAuthAndNavigate
  };
}